import type { Metadata } from "next";
import { A } from "@/components/a";
import { Tabs } from "@/components/tabs";
import { site } from "@/content/site";
import { mcpPath, toolkit, usageNote } from "@/content/toolkit";

export const metadata: Metadata = { title: "Toolkit" };

export default function Toolkit() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Toolkit</h1>
      <p className="mt-7">
        My current stack, and the MCP servers, agent skills, command-line tools and coding agents I reach for when I
        build and ship code. The tools come from what my agents actually call, not a wish list.
      </p>
      <p className="mt-3 text-[0.85em] text-rurikon-400">{usageNote}</p>

      <section aria-labelledby="connect" className="mt-10">
        <h2 id="connect" className="font-semibold text-rurikon-600 scroll-mt-6 sm:scroll-mt-14">
          Add it to your project
        </h2>
        <p className="mt-2">
          Connect your agent to my toolkit&apos;s MCP server. It lists everything here and gives install steps from each
          tool&apos;s own docs, and your agent asks you before running anything.
        </p>
        <p className="mt-4 text-[0.85em] text-rurikon-400">Claude Code</p>
        <pre className="mt-1 overflow-x-auto rounded-md bg-rurikon-50 px-3 py-2 text-[0.8em] leading-6">
          <code>{`claude mcp add --transport http tyson-toolkit ${site.url}${mcpPath}`}</code>
        </pre>
        <p className="mt-4 text-[0.85em] text-rurikon-400">Cursor and other clients (mcp.json)</p>
        <pre className="mt-1 overflow-x-auto rounded-md bg-rurikon-50 px-3 py-2 text-[0.8em] leading-6">
          <code>{JSON.stringify({ mcpServers: { "tyson-toolkit": { url: `${site.url}${mcpPath}` } } }, null, 2)}</code>
        </pre>
        <p className="mt-4">
          Then ask your agent to &ldquo;set up Tyson&apos;s toolkit in this project&rdquo;, or use the server&apos;s{" "}
          <code>set_up_toolkit</code> prompt.
        </p>
      </section>
      <div className="mt-10">
        <Tabs
          label="Toolkit"
          tabs={toolkit.map((group) => ({
            slug: group.slug,
            label: group.label,
            content: (
              <>
                {group.intro ? <p className="pt-7">{group.intro}</p> : null}
                <ul className="pt-7 space-y-8">
                {group.tools.map((t) => (
                  <li key={t.slug} id={t.slug} className="scroll-mt-6 sm:scroll-mt-14">
                    <h2 className="font-semibold text-rurikon-600">
                      <A href={t.href}>{t.title}</A>
                      {t.mustHave ? (
                        <span className="ml-3 rounded-sm border border-rurikon-border px-1.5 py-px align-middle text-[0.7em] font-normal text-rurikon-500">
                          must have
                        </span>
                      ) : null}
                      <span className="ml-3 text-[0.8em] font-normal text-rurikon-300">
                        {t.project ? (
                          <A href={`/projects#${t.project}`}>my project</A>
                        ) : t.by === "Me" ? (
                          "made by me"
                        ) : (
                          `by ${t.by}`
                        )}
                        {t.threads ? ` · ${t.threads.toLocaleString("en-US")} threads` : ""}
                      </span>
                    </h2>
                    <p className="mt-2">{t.body}</p>
                  </li>
                ))}
                </ul>
              </>
            ),
          }))}
        />
      </div>
    </>
  );
}
