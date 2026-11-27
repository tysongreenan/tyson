import type { Metadata } from "next";
import type { ReactNode } from "react";
import { A } from "@/components/a";
import { architecture, openSource, services, studied, type Item } from "@/content/sway-ai-stack";

export const metadata: Metadata = {
  title: "How Sway AI is built",
  description:
    "The architecture, agent harness, open-source projects and outside services behind Sway AI, the management system Sway Advertising runs on.",
};

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-12">
      <h2 id={id} className="font-semibold text-rurikon-600 scroll-mt-6 sm:scroll-mt-14">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="mt-3 list-disc pl-5 marker:text-rurikon-200 space-y-1">
      {items.map((i) => (
        <li key={i.name}>
          {i.href ? <A href={i.href}>{i.name}</A> : <span className="text-rurikon-600">{i.name}</span>}
          <span className="text-rurikon-400">: {i.note}</span>
        </li>
      ))}
    </ul>
  );
}

const harness = [
  "Durable runs: 15-minute leases sized to Convex's 10-minute action limit, a recovery job that resumes or expires dead runs, and idempotent side effects, so a retry never repeats a paid outside call.",
  "About 180 tools across 56 modules, from tasks, mail and calendar to Webflow and Canva.",
  "Approvals follow what the model has read: once a transcript, file or email is in a chat, standing approvals switch off and high-reach tools ask every time. Outside text is wrapped as an untrusted document.",
  "Model routing on evidence: about 40 background jobs each mapped to the cheapest model that passed its test, with the test cited in code; chat routes by rules first, then a small classifier.",
  "Token economics: a prompt budget recalibrated each step from the model's real token counts to stay under a long-context price step; oversized tool results are stored whole and summarized; long chats are compacted.",
  "Loop guards against repeated writes and against replies that claim changes no tool made.",
  "Its own MCP server (hashed, revocable keys, role re-checked on every call) and an MCP client with OAuth for outside apps.",
  "Checks beyond the model: type checks, about 900 test files and scripted agent-loop tests, plus custom lint rules for auth gates, storage access and design drift.",
];

export default function SwayAiBuild() {
  return (
    <>
      <p className="text-[0.85em] text-rurikon-400">
        <A href="/projects#sway-ai">Projects</A> / Sway AI
      </p>
      <h1 className="mt-2 font-semibold mb-7 text-rurikon-600">How Sway AI is built</h1>
      <p className="mt-7">
        <A href="https://app.sway.ca">Sway AI</A> is the management system the whole team at Sway Advertising runs on:
        social scheduling, client email marketing, an SEO and reporting centre, tasks, docs, files and meetings, with an
        AI agent that works across all of it. I built it from May 2026 onward with AI coding agents, through a
        build-and-review process: 3,800+ commits, 366 database tables and 900+ test files. The code is private; this page
        describes how it&apos;s put together.
      </p>

      <Section id="architecture" title="Architecture">
        <ItemList items={architecture} />
      </Section>

      <Section id="harness" title="The agent harness">
        <p className="mt-3">
          The AI agent runs on a harness I built in-house on Convex, rather than an agent framework. Code, not the model,
          makes the safety and cost decisions.
        </p>
        <ul className="mt-3 list-disc pl-5 marker:text-rurikon-200 space-y-2">
          {harness.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </Section>

      <Section id="open-source" title="Open-source projects it's built on">
        <p className="mt-3 text-rurikon-400">
          Each one is imported in the app&apos;s or the desktop app&apos;s code, not just listed as a dependency.
        </p>
        {openSource.map((g) => (
          <div key={g.title} className="mt-6">
            <h3 className="text-rurikon-600">{g.title}</h3>
            <ItemList items={g.items} />
          </div>
        ))}
      </Section>

      <Section id="studied" title="Open-source work I studied and adapted">
        <ItemList items={studied} />
      </Section>

      <Section id="services" title="Services and APIs it connects to">
        <p className="mt-3 text-rurikon-400">
          Checked against production on Nov 26, 2026: each one below has live credentials or real usage. Names only;
          the credentials stay in Sway&apos;s deployment and are never published.
        </p>
        {services.map((g) => (
          <div key={g.title} className="mt-6">
            <h3 className="text-rurikon-600">{g.title}</h3>
            <ItemList items={g.items} />
          </div>
        ))}
      </Section>
    </>
  );
}
