import type { Metadata } from "next";
import type { ReactNode } from "react";
import { A } from "@/components/a";
import { Live } from "@/components/live";
import { ClientMark, Wordmark } from "@/components/project-logo";
import { apps, clients, products, swayTools, type Project } from "@/content/projects";
import { site } from "@/content/site";
import { getOtherRepos } from "@/lib/github";

export const metadata: Metadata = { title: "Projects" };

function Heading({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="group relative font-semibold mt-14 mb-7 text-rurikon-600 text-balance scroll-mt-6 sm:scroll-mt-14"
    >
      <a
        href={`#${id}`}
        aria-label={`Link to the ${label} section`}
        className="absolute md:w-14 sm:w-10 mobile:w-6 w-6 -translate-x-[calc(100%-2px)] text-center opacity-0 blur-xs group-hover:opacity-100 group-hover:blur-none focus-visible:opacity-100 focus-visible:blur-none pointer-coarse:opacity-100 pointer-coarse:blur-none text-rurikon-400 hover:text-rurikon-700 transition-all duration-500 group-hover:delay-300 group-target:opacity-100 group-target:blur-none select-none"
      >
        #
      </a>
      {children}
    </h2>
  );
}

function Stack({ items }: { items: string[] }) {
  if (!items.length) return null;
  return <span className="block text-[0.8em] text-rurikon-400">{items.join(" · ")}</span>;
}

function ProjectList({ items }: { items: Project[] }) {
  return (
    <ul className="mt-7 space-y-5">
      {items.map((p) => (
        <li key={p.slug} id={p.slug} className="flex gap-3 items-start scroll-mt-6 sm:scroll-mt-14">
          <ClientMark src={p.mark} title={p.title} />
          <span className="min-w-0 pt-0.5">
            <span className="flex flex-wrap items-baseline gap-x-3">
              {p.href ? <A href={p.href}>{p.title}</A> : <span className="text-rurikon-600">{p.title}</span>}
              {p.live ? <Live url={p.live} /> : null}
              {p.status ? <span className="text-[0.8em] text-rurikon-400">{p.status}</span> : null}
              {p.source ? (
                <span className="text-[0.8em] text-rurikon-400">
                  <A href={p.source}>source</A>
                </span>
              ) : null}
            </span>
            <span className="block text-rurikon-400">{p.blurb}</span>
            <Stack items={p.stack} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default async function Projects() {
  const others = await getOtherRepos();
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Projects</h1>
      <p className="mt-7">
        Products I ship on the side, the software I build to run <A href="https://sway.ca">Sway Advertising</A>, and the
        websites and apps I build for clients. See the <A href="/timeline">timeline</A> for everything in order.
      </p>

      {products.map((p) => (
        <section key={p.slug}>
          <Heading id={p.slug} label={p.title}>
            {p.href ? (
              <A href={p.href} title={p.title}>
                {p.logo ? <Wordmark src={p.logo.src} alt={p.title} height={p.logo.height} width={p.logo.width} /> : p.title}
              </A>
            ) : (
              p.title
            )}
            {p.live ? <Live url={p.live} className="ml-3 font-normal align-middle" /> : null}
          </Heading>
          <p className="mt-7">{p.body ?? p.blurb}</p>
          <p className="mt-2">
            <Stack items={p.stack} />
          </p>
        </section>
      ))}

      <hr className="my-14 border-0 h-px bg-rurikon-border" />

      <Heading id="sway-tools" label="Tools for Sway">Tools for Sway</Heading>
      <p className="mt-7">
        Internal software the agency runs on: an AI operating system for the team, a way for clients to edit their own
        sites, a shared CMS, and a component library for client sites.
      </p>
      <ProjectList items={swayTools} />

      <hr className="my-14 border-0 h-px bg-rurikon-border" />

      <Heading id="client-websites" label="Client websites">Client websites</Heading>
      <p className="mt-7">
        Websites I build at Sway: home builders, a hotel, a cottage, a coaching business, a golf media site with its own
        CMS, and the Sway site itself.
      </p>
      <ProjectList items={clients} />

      <hr className="my-14 border-0 h-px bg-rurikon-border" />

      <Heading id="apps" label="Business apps">Business apps</Heading>
      <p className="mt-7">
        Custom software for specific companies, from working prototypes to apps in active development.
      </p>
      <ProjectList items={apps} />

      <hr className="my-14 border-0 h-px bg-rurikon-border" />

      <p className="mt-7">
        Other experiments (all of them on <A href={`https://github.com/${site.github}?tab=repositories`}>GitHub</A>):
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
                <span className="text-rurikon-400">
                  (<A href={r.html_url}>source</A>)
                </span>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
