import type { Metadata } from "next";
import { A } from "@/components/a";
import { Tabs } from "@/components/tabs";
import { toolkit, usageNote } from "@/content/toolkit";

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
