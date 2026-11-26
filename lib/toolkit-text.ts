import { install, type Install, type InstallOption, type Step } from "@/content/install";
import { site } from "@/content/site";
import { toolkit, usageNote, type Tool } from "@/content/toolkit";

export const categories = toolkit.map((g) => g.slug) as [string, ...string[]];
export const agents = ["claude-code", "codex", "cursor", "any"] as const;
export type Agent = (typeof agents)[number];

const agentLabel: Record<Agent, string> = { "claude-code": "Claude Code", codex: "Codex", cursor: "Cursor", any: "Any agent" };

const all = toolkit.flatMap((g) => g.tools.map((t) => ({ ...t, category: g.slug })));
export const installable = all.filter((t) => install[t.slug]).map((t) => t.slug);
export const mustHaves = all.filter((t) => t.mustHave).map((t) => t.slug);

const by = (t: Tool) => (t.project ? `my own project (${site.url}/projects#${t.project})` : t.by === "Me" ? "me" : t.by);

export function listToolkit(category?: string) {
  const groups = category ? toolkit.filter((g) => g.slug === category) : toolkit;
  return [
    `# ${site.name}'s toolkit`,
    usageNote,
    "",
    ...groups.flatMap((g) => [
      `## ${g.label} (category: ${g.slug})`,
      ...(g.intro ? [g.intro, ""] : []),
      ...g.tools.map((t) => {
        const tags = [t.mustHave ? "must have" : null, install[t.slug] ? `slug: ${t.slug}` : "context only, no setup steps"]
          .filter(Boolean)
          .join("; ");
        const used = t.threads ? `, used in ${t.threads} threads` : "";
        return `- **${t.title}** (${tags}; by ${by(t)}${used}) ${t.href}\n  ${t.body}`;
      }),
      "",
    ]),
    `Call get_install_steps with the slugs you want. Slugs with setup info: ${installable.join(", ")}.`,
  ].join("\n");
}

function stepLine(s: Step) {
  const where = s.where === "claude-code-chat" ? "type inside Claude Code" : "terminal";
  const flags = [where, s.scope ? `${s.scope} scope` : null, s.interactive ? "interactive: ask the user to run it" : null]
    .filter(Boolean)
    .join(", ");
  return `  - \`${s.run}\` (${flags})${s.note ? `. ${s.note}` : ""}`;
}

function pickOptions(entry: Install, agent?: Agent): InstallOption[] {
  if (!agent || agent === "any") return entry.options;
  const label = agentLabel[agent];
  const matching = entry.options.filter((o) => o.for.includes(label) || o.for.startsWith("Any"));
  return matching.length ? matching : entry.options;
}

export function installSteps(slugs: string[], agent?: Agent) {
  const wanted = slugs.includes("all") ? installable : slugs.includes("must-haves") ? mustHaves : slugs;
  const unknown = wanted.filter((s) => !install[s]);
  const known = wanted.filter((s) => install[s]);

  const sections = known.map((slug) => {
    const t = all.find((x) => x.slug === slug)!;
    const entry = install[slug];
    const options = pickOptions(entry, agent);
    return [
      `## ${t.title}${t.mustHave ? " (must have)" : ""}`,
      t.body,
      `Docs: ${entry.docs}`,
      ...(entry.needs?.length ? [`Needs first: ${entry.needs.join("; ")}`] : []),
      ...(entry.requires?.length ? [`Requires: ${entry.requires.join("; ")}`] : []),
      ...(options.length
        ? options.flatMap((o) => [`- ${o.for}:`, ...o.steps.map(stepLine)])
        : ["- Nothing to run here; see the note."]),
      ...(entry.note ? [`Note: ${entry.note}`] : []),
    ].join("\n");
  });

  return [
    `# Install steps${agent && agent !== "any" ? ` for ${agentLabel[agent]}` : ""}`,
    "Before running anything: show the user these commands, list the accounts, keys or paid plans each one needs, and get their OK. " +
      "Run commands from the root of the user's project. Steps marked interactive open prompts or a browser, so ask the user to run those themselves. " +
      "Never write API keys or tokens into files that get committed.",
    ...sections,
    ...(unknown.length ? [`Unknown slugs: ${unknown.join(", ")}. Slugs with setup info: ${installable.join(", ")}.`] : []),
  ].join("\n\n");
}
