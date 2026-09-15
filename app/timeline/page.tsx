import type { Metadata } from "next";
import { A } from "@/components/a";
import { Live } from "@/components/live";
import { getTimeline, monthName } from "@/lib/timeline";

export const metadata: Metadata = { title: "Timeline" };

export default async function Timeline() {
  const byYear = await getTimeline();
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Timeline</h1>
      <p className="mt-7">
        Everything I have shipped or started, newest first. Dates come from when each repo was created. Projects with a
        green dot are live. The <A href="/projects">projects</A> page has the write-ups.
      </p>
      {[...byYear.entries()].map(([year, entries]) => (
        <section key={year}>
          <h2 className="font-semibold mt-14 mb-7 text-rurikon-600 tabular-nums">{year}</h2>
          <ul className="space-y-2">
            {entries.map((e) => (
              <li key={e.key} className="flex gap-4 items-baseline">
                <span className="w-8 shrink-0 text-rurikon-300 tabular-nums text-[0.85em]">{monthName(e.date)}</span>
                <span>
                  <A href={e.featuredSlug ? `/projects#${e.featuredSlug}` : e.href}>{e.title}</A>
                  {e.live ? <Live url={e.live} className="ml-3" /> : null}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
