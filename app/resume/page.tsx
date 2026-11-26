import type { Metadata } from "next";
import type { ReactNode } from "react";
import { A } from "@/components/a";
import { PrintButton } from "@/components/print-button";
import { current, earlier, education, previous } from "@/content/experience";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Tyson Greenan's resume: full-stack developer and digital marketer building AI products and agency software.",
};

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-12 break-inside-avoid-page">
      <h2 id={id} className="font-semibold text-rurikon-600 scroll-mt-6 sm:scroll-mt-14">
        {title}
      </h2>
      {children}
    </section>
  );
}

const harness = [
  "A durable run engine with leases, heartbeats, crash recovery and cancellation, so long agent jobs survive restarts.",
  "81 tool modules, from tasks, mail and calendar to Webflow and Canva, with approval required in code before any email, post, publish or delete.",
  "Job playbooks (call prep, content calendars, review replies) with verifier subagents that check the work.",
  "Per-client memory, context compaction, scheduled routines, model choice through OpenRouter, and its own MCP server; the desktop app can run on a person's own Claude or Grok login.",
  "Scored model tests on real jobs and a 4,500-test suite.",
];

const swayAi: [string, string][] = [
  ["Social media manager", "content calendar, posting queue, client approvals, best-time suggestions, analytics and an inbound messages inbox, publishing through the Outstand scheduling API."],
  ["Email marketing, our own Mailchimp", "client newsletters with lists, segments, signup forms, templates, A/B and multivariate tests, automations and scheduled sends, delivered through Resend."],
  ["SEO platform and reporting centre", "rank and local grid tracking (DataForSEO), SE Ranking, Search Console, GA4 and Google Business Profile data, AI search visibility tracking, and shareable monthly client reports."],
  ["Task management", "subtasks, recurring tasks, followers, time tracking and timesheets, a daily planner, and ClickUp import and sync."],
  ["Docs and files", "a collaborative document editor (Tiptap), whiteboards (Excalidraw), PDF comments and e-signatures, and file storage on Cloudflare R2 with transcription and sharing."],
  ["Meetings, mail and research", "a Recall.ai meeting bot with transcripts and call notes, Outlook mail and calendar through Microsoft Graph, a client portal, and a research workspace for social and SEO."],
];

const products: { name: string; href: string; body: string; stack: string }[] = [
  {
    name: "Signoff",
    href: "https://signoff.greenantyson.workers.dev",
    body: "Company-wide email signatures for Outlook and Gmail, filled from Microsoft 365 or Google Workspace directories. Directory webhooks keep signatures current, and an Outlook add-in applies them. In production with its first client.",
    stack: "Next.js on Cloudflare Workers, D1, R2, Microsoft Graph, Entra ID, Gmail API",
  },
  {
    name: "Cookie Banner",
    href: "https://cookie-banner.ca",
    body: "Consent banner builder for PIPEDA, Quebec Law 25, GDPR and CCPA, built with Emily Trenchard. Started as an open source GDPR tool in 2025 and now runs as a product.",
    stack: "Next.js, Supabase, Prisma, Stripe, AI SDK, Sentry",
  },
  {
    name: "Website Feedback",
    href: "https://websitefeedback.ca",
    body: "Visual feedback on any live URL with no extension or sign-up. Ships an MCP server so AI coding agents can read, leave and resolve client comments, and a GitHub flow that turns comments into pull requests.",
    stack: "Node.js, Express, Postgres, Playwright, Stripe, Anthropic API",
  },
  {
    name: "QR Code",
    href: "https://qr-code.ca",
    body: "Canadian QR generator: static codes free in the browser, dynamic codes with scan tracking and editable destinations.",
    stack: "Next.js, Prisma, NextAuth, Stripe",
  },
  {
    name: "Panel",
    href: "https://tastetest-three.vercel.app",
    body: "Open source design-review harness for AI coding agents, published on npm as @tysongreenan/panel. Persona reviewers walk the product and return a scored report with file-level fixes.",
    stack: "Node.js CLI, Claude Code and Cursor skills",
  },
];

const clientWork: { name: string; href: string; what: string; stack: string; status: string }[] = [
  { name: "Sway Advertising", href: "https://sway.ca", what: "The agency's own site, moved from a Webflow export to a fast static site on Vercel", stack: "HTML, CSS, JS, Vercel, PostHog", status: "Live" },
  { name: "Nova Golf Media", href: "https://novagolfmedia.com", what: "Golf media site with video, fed by its own Payload CMS so editors publish without a deploy", stack: "Next.js, Payload, Clerk, Mux", status: "Live, just launched" },
  { name: "WrightHaven Homes", href: "https://wrighthavenhomes.com", what: "Home builder site moved off WordPress to a fast static build", stack: "HTML, CSS, JS, Vercel", status: "Live" },
  { name: "Lively Leadership Group", href: "https://livelyleadership.com", what: "Coaching and consulting site", stack: "TanStack Start, Postgres, Kysely, Better Auth", status: "Live" },
  { name: "Birch Island Cottage", href: "https://birchislandcottage.ca", what: "Cottage rental site with maps and inquiry email", stack: "Next.js, Google Maps, Resend", status: "Live" },
  { name: "Trevalli Homes", href: "https://trevalli-homes.vercel.app", what: "Marketing site for a boutique Southern Ontario home builder", stack: "Next.js, shadcn/ui, Tailwind, MapLibre", status: "Launching soon" },
  { name: "Miller Waste Systems", href: "https://miller-waste-systems.vercel.app", what: "Next.js rebuild of a waste and recycling company's WordPress site", stack: "Next.js, React, SendGrid", status: "Launching soon" },
  { name: "Evergreen OS", href: "https://evergreen-os-henna.vercel.app", what: "Construction project management: timesheets, safety records, daily reports, estimates and approvals, with roles and a phone layout", stack: "Next.js, Convex, AWS S3", status: "Launching soon" },
  { name: "CareManager", href: "https://jenuine-care-saas.vercel.app", what: "Home healthcare platform for Jenuine Care: patients, nurse assignments, scheduling, timesheets, billing", stack: "Next.js, Postgres, Prisma, Clerk, Stripe", status: "Launching soon" },
  { name: "Radius", href: "https://xray-marketplace.vercel.app", what: "Marketplace for used diagnostic imaging equipment with listing verification and fair-price ranges", stack: "Next.js, Prisma, Postgres, Supabase", status: "Prototype" },
];

const skillRows: [string, string][] = [
  ["Current stack", "Next.js and TypeScript; Convex or Cloudflare Workers, D1 and R2; Clerk; Tailwind and shadcn/ui; Vercel, Cloudflare and Railway. Moving new work off Supabase."],
  ["Frontend", "React, Next.js App Router, TanStack Start, Tailwind CSS, shadcn/ui on Radix and Base UI, GSAP, Framer Motion, accessible UI."],
  ["Backend and data", "Convex, Cloudflare Workers, Node.js, Express, Postgres, Payload CMS, Prisma, Kysely, Supabase."],
  ["AI", "AI SDK, Anthropic and OpenAI APIs, building MCP servers, agents with tool use and approvals, Claude Code and Cursor skills, browser automation with Playwright and Browserbase."],
  ["Integrations", "Stripe, Clerk, Resend, PostHog, Sentry, Mux, Microsoft Graph and Entra ID, Gmail and Google Workspace APIs, Outlook add-ins."],
  ["Desktop and extensions", "Electron, Tauri, Chrome extensions (Manifest V3)."],
  ["Marketing", "Technical and local SEO, AI search visibility (AEO), schema, privacy compliance (PIPEDA, Law 25, GDPR), Webflow, WordPress and Elementor, Google Ads landing pages."],
  ["Languages", "TypeScript, JavaScript, Python, SQL, HTML, CSS."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  jobTitle: "Full-Stack Developer and Digital Marketer",
  worksFor: { "@type": "Organization", name: "Sway Advertising", url: "https://sway.ca" },
  address: { "@type": "PostalAddress", addressRegion: "ON", addressCountry: "CA" },
  sameAs: [`https://github.com/${site.github}`, site.linkedin],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Fanshawe College" },
  knowsAbout: ["Next.js", "TypeScript", "Convex", "Cloudflare Workers", "AI agents", "MCP servers", "SEO", "AI search visibility"],
};

export default function Resume() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h1 className="font-semibold text-rurikon-600 text-balance">Resume</h1>
        <PrintButton />
      </div>
      <p className="mt-7 font-semibold text-rurikon-600">
        {site.name}, Full-Stack Developer and Digital Marketer: AI products and agency software
      </p>
      <p className="mt-2 text-rurikon-400">
        {site.location} · <A href={`https://github.com/${site.github}`}>GitHub</A> ·{" "}
        <A href={site.linkedin}>LinkedIn</A> · <A href="/llms.txt">Machine-readable profile</A>
      </p>

      <Section id="summary" title="Summary">
        <p className="mt-4">
          Full-stack developer and digital marketer, in marketing since 2019, who ships production software end to end, from database to SEO. At
          Sway Advertising I built the agency&apos;s internal AI platform and its own agent harness (3,800+ commits since
          May 2026), a client website editor and a multi-tenant CMS, alongside client websites and SEO. On the side I
          build and run five products; Signoff is in production with its first client. I work AI-first: 2,300+
          coding-agent threads in under two months across Claude Code, Codex and Cursor, plus my own MCP server and an
          open-source agent review tool on npm.
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <p className="mt-4">
          <span className="font-semibold text-rurikon-600">{current.title}</span>,{" "}
          <A href="https://sway.ca">{current.company}</A> · {current.start} to present · {current.location}
        </p>
        <p className="mt-1 text-rurikon-400">
          Creative and digital marketing agency. I lead SEO and digital strategy for clients, and build the
          agency&apos;s internal software and client websites.
        </p>
        <ul className="mt-4 list-disc pl-5 marker:text-rurikon-200 space-y-3">
          <li>
            Built <A href="https://app.sway.ca">Sway AI</A>, the management system the whole Sway team runs on, bringing
            social, email, SEO, tasks and docs into one app. 3,800+ commits since May 2026 on Next.js, TypeScript and
            Convex, with 64 scheduled background jobs and an Electron desktop app.
            <ul className="mt-2 list-[circle] pl-5 space-y-1">
              {swayAi.map(([k, v]) => (
                <li key={k}>
                  <span className="font-semibold text-rurikon-600">{k}:</span> {v}
                </li>
              ))}
            </ul>
          </li>
          <li>
            Built the <span className="font-semibold text-rurikon-600">Sway AI agent harness</span>, the in-house
            framework that runs the AI across the platform:
            <ul className="mt-2 list-[circle] pl-5 space-y-1">
              {harness.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
          <li>
            Built <A href="https://studio.sway.ca">Sway Studio</A>, the client handoff for AI-built websites, in use now:
            clients edit their live, coded site in place, ask AI for changes, preview and publish, without touching
            GitHub. Desktop and browser editors stay in sync through one branch per repo.
          </li>
          <li>
            Built <A href="/projects#agency-cms">Agency CMS</A>, a self-hosted multi-tenant Payload CMS with scheduled
            publishing. Staff see every client; each client sees only their own content. It runs the Nova Golf and Birch
            Island Cottage sites.
          </li>
          <li>
            Shipped five live websites (the agency&apos;s own site sway.ca, Nova Golf Media, WrightHaven Homes, Lively
            Leadership Group and Birch Island Cottage), with Trevalli Homes and a Miller Waste Systems rebuild launching
            next. The work includes a WordPress-to-static migration and the agency site&apos;s move from Webflow to
            Vercel, plus a bilingual Next.js rebuild for a Costa Rican hotel. Created{" "}
            <A href="/projects#tybow-ui">Tybow UI</A>, a shadcn component registry with swappable theme packs for home
            builder clients.
          </li>
          <li>
            Run client SEO and AI search visibility (AEO): technical audits, local SEO and schema fixes, and monthly
            client reports automated with Playwright against SE Ranking and Google Search Console.
          </li>
        </ul>

        <ul className="mt-8 space-y-4">
          {previous.map((r) => (
            <li key={`${r.company}-${r.title}`} className="break-inside-avoid">
              <p>
                <span className="font-semibold text-rurikon-600">{r.title}</span>, {r.company}
              </p>
              <p className="text-[0.85em] text-rurikon-400">
                {r.start} to {r.end} · {r.location}
                {r.type ? ` · ${r.type}` : ""}
              </p>
              {r.summary ? <p className="mt-1">{r.summary}</p> : null}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-rurikon-400">Earlier: {earlier}</p>
      </Section>

      <Section id="products" title="Products">
        <p className="mt-4 text-rurikon-400">Independent products I design, build and run, October 2025 to present.</p>
        <ul className="mt-4 space-y-3">
          {products.map((p) => (
            <li key={p.name}>
              <A href={p.href}>{p.name}</A>: {p.body}
              <span className="block text-[0.85em] text-rurikon-400">{p.stack}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="client-work" title="Selected client work and business apps">
        <ul className="mt-4 space-y-3">
          {clientWork.map((c) => (
            <li key={c.name}>
              <A href={c.href}>{c.name}</A> <span className="text-[0.85em] text-rurikon-400">({c.status})</span>:{" "}
              {c.what}
              <span className="block text-[0.85em] text-rurikon-400">{c.stack}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Full list with write-ups: <A href="/projects">projects</A>.
        </p>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="mt-4 space-y-3">
          {skillRows.map(([k, v]) => (
            <div key={k}>
              <dt className="font-semibold text-rurikon-600">{k}</dt>
              <dd className="text-rurikon-400">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="ai-workflow" title="AI engineering workflow">
        <p className="mt-4">
          I run coding agents as a team, and have a second model review larger changes before they merge. From October 6
          to November 26, 2026:
        </p>
        <ul className="mt-3 list-disc pl-5 marker:text-rurikon-200 space-y-1">
          <li>2,300+ agent threads in T3 Code: Claude Code in 1,328, Codex in 427, Cursor in 43, Grok in 9.</li>
          <li>
            Cross-model review on bigger changes: Sol Loop reviews with a second model (79 threads), and Full Send takes
            a change to a merged pull request with proof and CI (77 threads).
          </li>
          <li>Codebase understanding at scale: Graphify knowledge graphs in 246 threads.</li>
          <li>
            Published tooling: an open-source review harness on npm (Panel), an MCP server for my Website Feedback
            product, and a <A href="/toolkit#connect">public MCP server</A> that installs my toolkit into other
            people&apos;s projects.
          </li>
        </ul>
      </Section>

      <Section id="education" title="Education">
        <ul className="mt-4 space-y-2">
          {education.map((e) => (
            <li key={e.school}>
              <span className="font-semibold text-rurikon-600">{e.credential}</span>, {e.school}
              <span className="block text-[0.85em] text-rurikon-400">{e.years}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
