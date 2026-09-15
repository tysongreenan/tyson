import type { Metadata } from "next";
import { A } from "@/components/a";
import { Live } from "@/components/live";
import { featured } from "@/content/projects";
import { site } from "@/content/site";
import { getOtherRepos } from "@/lib/github";

export const metadata: Metadata = { title: "Projects" };

export default async function Projects() {
  const others = await getOtherRepos();
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Projects</h1>
      <p className="mt-7">
        A mix of products for marketers and agencies, experiments with AI agents, and starter kits I keep reusing. Most
        of it is open source on <A href="https://github.com/tysongreenan">GitHub</A>; a few are live products. See the{" "}
        <A href="/timeline">timeline</A> for everything in order.
      </p>

      {featured.map((p) => (
        <section key={p.slug}>
          <h2
            id={p.slug}
            className="group relative font-semibold mt-14 mb-7 text-rurikon-600 text-balance scroll-mt-6 sm:scroll-mt-14"
          >
            <a
              href={`#${p.slug}`}
              aria-label="Link to this section"
              className="absolute md:w-14 sm:w-10 mobile:w-6 w-6 -translate-x-[calc(100%-2px)] text-center opacity-0 blur-xs group-hover:opacity-100 group-hover:blur-none text-rurikon-200 hover:text-rurikon-500 transition-all duration-500 group-hover:delay-300 group-target:opacity-100 group-target:blur-none select-none"
            >
              #
            </a>
            <A href={p.href} title={p.title}>
              {p.title}
            </A>
            {p.live ? <Live url={p.live} className="ml-3 font-normal align-middle" /> : null}
          </h2>
          <p className="mt-7">{p.body}</p>
        </section>
      ))}

      <hr className="my-14 border-0 h-px bg-rurikon-border" />

      <p className="mt-7">
        My other projects (find all of them on <A href={`https://github.com/${site.github}?tab=repositories`}>GitHub</A>):
      </p>
      <ul className="mt-7 list-disc pl-5 marker:text-rurikon-200 space-y-1">
        {others.map((r) => (
          <li key={r.name}>
            <A href={r.live || r.html_url}>{r.title}</A>
            {r.description ? <span className="text-rurikon-400"> — {r.description}</span> : null}
            {r.live ? (
              <>
                {" "}
                <Live url={r.live} />{" "}
                <span className="text-rurikon-300">(<A href={r.html_url}>source</A>)</span>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
