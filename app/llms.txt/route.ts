import { apps, clients, products, swayTools, type Project } from "@/content/projects";
import { currentStack, site, skills } from "@/content/site";
import { toolkit, usageNote } from "@/content/toolkit";
import { getOtherRepos } from "@/lib/github";

export const revalidate = 86400;

function line(p: Project) {
  const links = [
    p.live ? `live: ${p.live}` : p.href ? `link: ${p.href}` : "no public link yet",
    p.source ? `source: ${p.source}` : null,
  ]
    .filter(Boolean)
    .join(", ");
  const status = p.status ? ` [${p.status}]` : "";
  return `- ${p.title}${status} (started ${p.date}; ${links}): ${p.blurb} Stack: ${p.stack.join(", ")}.`;
}

export async function GET() {
  const others = await getOtherRepos();
  const text = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}`,
    "",
    `Location: ${site.location}`,
    `Website: ${site.url}`,
    `GitHub: https://github.com/${site.github}`,
    `LinkedIn: ${site.linkedin}`,
    "",
    "Developer and digital marketer at Sway Advertising, a creative agency in Guelph, Ontario. Works on SEO, AI in the agency's workflows, Sway's internal software, and client websites. Also builds and runs his own side products.",
    "",
    `Current stack: ${currentStack}`,
    "",
    "## Skills",
    ...skills.map((s) => `- ${s.area}: ${s.items.join(", ")}`),
    "",
    "## Products (side products I own)",
    ...products.map(line),
    "",
    "## Tools for Sway (internal software for the agency)",
    ...swayTools.map(line),
    "",
    "## Client websites (built at Sway Advertising)",
    ...clients.map(line),
    "",
    "## Business apps (custom software for specific companies)",
    ...apps.map(line),
    "",
    "## Other public experiments",
    ...others.map(
      (r) =>
        `- ${r.title} (started ${r.created_at.slice(0, 7)}; source: ${r.html_url}${r.live ? `, live: ${r.live}` : ""})${r.description ? `: ${r.description}` : ""}`,
    ),
    "",
    "## Toolkit (current stack, MCP servers, agent skills, CLIs and coding agents I use)",
    usageNote,
    ...toolkit.flatMap((g) => [
      `### ${g.label}`,
      ...(g.intro ? [g.intro] : []),
      ...g.tools.map(
        (t) =>
          `- ${t.title}${t.mustHave ? " [must have]" : ""} (${t.project ? `my project, ${site.url}/projects#${t.project}` : t.by === "Me" ? "made by me" : `by ${t.by}`}${t.threads ? `; used in ${t.threads} threads` : ""}; ${t.href}): ${t.body}`,
      ),
    ]),
    "",
    "## Pages",
    `- About and skills: ${site.url}/`,
    `- Projects with write-ups: ${site.url}/projects`,
    `- Timeline of everything, newest first: ${site.url}/timeline`,
    `- Toolkit: ${site.url}/toolkit`,
    "",
  ].join("\n");

  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
