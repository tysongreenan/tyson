import type { ReactNode } from "react";
import { A } from "@/components/a";

export type Project = {
  /** GitHub repo name under tysongreenan (public or private). Used to keep it out of the auto-generated list. */
  repo: string | null;
  slug: string;
  title: string;
  /** Public link. Leave unset when there is no public URL yet. */
  href?: string;
  /**
   * Production URL. Only set when the live domain serves my build. If a client launched something else on
   * their domain, leave this unset and point `href` at my own deployment instead.
   */
  live?: string;
  /** Public source code. Never set this for a private repo. */
  source?: string;
  /** When the project started, YYYY-MM. */
  date: string;
  /** One plain-text line. Used on the projects list, the timeline and llms.txt. */
  blurb: string;
  /** Main technologies, taken from the repo. */
  stack: string[];
  /** Short honest status when it isn't a finished, live product (e.g. "Prototype"). */
  status?: string;
  /** Square icon for the list views. */
  mark?: string;
  /** Wordmark for product headings. */
  logo?: { src: string; height: number; width: number };
  /** Longer write-up for product sections. */
  body?: ReactNode;
};

/** Side products, ordered by how much I actually work on them. */
export const products: Project[] = [
  {
    repo: "uk-cookie-consent",
    slug: "cookie-banner",
    date: "2025-10",
    live: "https://cookie-banner.ca",
    source: "https://github.com/tysongreenan/uk-cookie-consent",
    title: "Cookie Banner",
    href: "https://cookie-banner.ca",
    logo: { src: "/projects/cookie-banner.png", height: 22, width: 103 },
    blurb:
      "Cookie consent banner builder for PIPEDA, Quebec Law 25, GDPR and CCPA. Design the banner, pick the local rules, copy one snippet.",
    stack: ["Next.js", "TypeScript", "Supabase", "Prisma", "Stripe", "AI SDK", "Sentry"],
    body: (
      <>
        A cookie consent banner builder for PIPEDA, Quebec Law 25, GDPR and CCPA. Design the banner, pick the local
        rules, copy the snippet and ship it. This is the product I have spent the most time on: it started in 2025 as an
        open source GDPR tool and now runs as a product at cookie-banner.ca (
        <A href="https://github.com/tysongreenan/uk-cookie-consent">source</A>).
      </>
    ),
  },
  {
    repo: "comment-tool",
    slug: "website-feedback",
    title: "Website Feedback",
    href: "https://websitefeedback.ca",
    live: "https://websitefeedback.ca",
    date: "2026-01",
    logo: { src: "/projects/website-feedback.svg", height: 20, width: 139 },
    blurb:
      "Visual feedback on any live URL with no extension and no sign-up. AI agents can read and leave comments through its MCP server, and comments can become pull requests.",
    stack: ["Node.js", "Express", "Supabase", "Postgres", "Playwright", "Stripe", "Anthropic API", "MCP"],
    body: (
      <>
        A visual website feedback tool. Reviewers leave comments directly on any live URL with no extensions and no
        sign-up, so design teams and agencies can collect feedback and run launch checklists in one place. It has an MCP
        server, so AI coding agents can read open comments, leave their own, and resolve them, and a GitHub workflow
        that turns comments into pull requests.
      </>
    ),
  },
  {
    repo: "qr-code-tool",
    slug: "qr-code",
    date: "2026-03",
    live: "https://qr-code.ca",
    title: "QR Code",
    href: "https://qr-code.ca",
    logo: { src: "/projects/qr-code.svg", height: 20, width: 89 },
    blurb:
      "Canadian QR code generator. Static codes are free and made in the browser; dynamic codes add scan tracking and an editable destination.",
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "NextAuth", "Stripe"],
    body: (
      <>
        A Canadian QR code generator. Static codes are free, generated in the browser, and never expire. Dynamic codes
        add scan tracking and an editable destination without reprinting. Built as a sister product to Cookie Banner.
      </>
    ),
  },
  {
    repo: "signoff",
    slug: "signoff",
    date: "2026-10",
    title: "Signoff",
    href: "https://signoff.greenantyson.workers.dev",
    live: "https://signoff.greenantyson.workers.dev",
    blurb:
      "Email signatures for a whole company, managed in one place. Design one signature; Signoff fills in each person's details from Microsoft 365 or Google Workspace and puts it on every email they send in Outlook or Gmail. In production with its first client.",
    stack: [
      "Next.js",
      "TypeScript",
      "Cloudflare Workers (OpenNext)",
      "Cloudflare D1",
      "Cloudflare R2",
      "Microsoft Graph",
      "Microsoft Entra ID",
      "Outlook add-in (Office.js)",
      "Gmail API",
      "Google Workspace Admin SDK",
      "Vitest",
    ],
    body: (
      <>
        Email signatures for a whole company, managed in one place. You design one signature, and Signoff fills in each
        person&apos;s name, title and details from Microsoft 365 or Google Workspace, then puts it on every email they
        send in Outlook or Gmail. Directory webhooks keep signatures current when people change roles, and an Outlook
        add-in applies them in the client. It runs on Cloudflare Workers and is in production with its first client.
      </>
    ),
  },
  {
    repo: "tastetest",
    slug: "panel",
    date: "2026-07",
    title: "Panel",
    href: "https://tastetest-three.vercel.app",
    live: "https://tastetest-three.vercel.app",
    source: "https://github.com/tysongreenan/tastetest",
    blurb:
      "An open source review harness for AI coding agents, published on npm as @tysongreenan/panel. It seats buyer personas on your product, walks the flows and leaves a scored report with file-level fixes.",
    stack: ["Node.js CLI", "Python", "npm", "Claude Code skills", "Cursor rules"],
    body: (
      <>
        A buyer panel that lives in your repo. <code>npx @tysongreenan/panel init</code> installs skills for Claude
        Code and Cursor that seat personas on your product. They walk the flows, argue priority, and leave a scored
        report with file-level fixes, with phase gates so an agent cannot mark work done without evidence. I use it on
        my own products and Sway client sites. Published on{" "}
        <A href="https://www.npmjs.com/package/@tysongreenan/panel">npm</A> (
        <A href="https://github.com/tysongreenan/tastetest">source</A>).
      </>
    ),
  },
];

/** Internal software I build for Sway Advertising. */
export const swayTools: Project[] = [
  {
    repo: "SwayAI",
    slug: "sway-ai",
    date: "2026-05",
    title: "Sway AI",
    href: "https://app.sway.ca",
    mark: "/projects/sway.svg",
    blurb:
      "The agency's operating system: tasks, meetings, wiki, social and SEO work, with an AI agent that knows each client. Includes scheduled routines, approvals and a desktop app.",
    stack: ["Next.js", "TypeScript", "Convex", "AI SDK", "Electron", "Tiptap", "TanStack", "PostHog", "Railway"],
  },
  {
    repo: null,
    slug: "sway-studio",
    date: "2026-10",
    title: "Sway Studio",
    href: "https://studio.sway.ca",
    mark: "/projects/sway.svg",
    blurb:
      "Client handoff for AI-built websites. One login where clients edit their own coded site in place, ask AI for changes, preview and publish, without touching GitHub.",
    stack: ["Node.js", "Express", "Postgres", "GitHub API", "Vercel", "Railway", "Electron"],
  },
  {
    repo: "agency-cms",
    slug: "agency-cms",
    date: "2026-08",
    title: "Agency CMS",
    href: "https://agency-cms-omega.vercel.app",
    blurb:
      "Self-hosted multi-tenant headless CMS for client sites, built on Payload. Staff see every client, each client sees only their own content, with scheduled publishing.",
    stack: ["Payload CMS", "Next.js", "Postgres", "Vercel Blob", "Upstash QStash", "GraphQL"],
  },
  {
    repo: "tybow-ui",
    slug: "tybow-ui",
    date: "2026-09",
    title: "Tybow UI",
    href: "https://github.com/tysongreenan/tybow-ui",
    source: "https://github.com/tysongreenan/tybow-ui",
    blurb:
      "A shadcn component registry for home builder and community marketing sites. The same blocks across clients, with a different look from swappable theme packs.",
    stack: ["shadcn/ui", "Base UI", "Next.js", "Tailwind CSS", "MapLibre"],
  },
];

/** Client websites built at Sway Advertising. */
export const clients: Project[] = [
  {
    repo: "nova-golf-media",
    slug: "nova-golf",
    date: "2026-08",
    title: "Nova Golf Media",
    href: "https://novagolfmedia.com",
    live: "https://novagolfmedia.com",
    mark: "/projects/nova-golf.svg",
    blurb: "Golf media site with video, built for Sway. It reads published content from the Nova Golf CMS.",
    stack: ["Next.js", "Payload CMS", "Clerk", "Mux", "GSAP"],
  },
  {
    repo: "nova-golf-cms",
    slug: "nova-golf-cms",
    date: "2026-08",
    title: "Nova Golf CMS",
    href: "https://nova-golf-cms.vercel.app",
    live: "https://nova-golf-cms.vercel.app",
    mark: "/projects/nova-golf.svg",
    blurb: "Payload CMS for Nova Golf. Their team edits the media site from a dashboard without a deploy.",
    stack: ["Payload CMS", "Next.js", "Postgres", "Clerk", "Mux", "Vercel Blob"],
  },
  {
    repo: "lively-leadership-group-sway",
    slug: "lively-leadership",
    date: "2026-08",
    title: "Lively Leadership Group",
    href: "https://livelyleadership.com",
    live: "https://livelyleadership.com",
    mark: "/projects/lively-leadership.svg",
    blurb: "Leadership coaching and consulting site, built for Sway.",
    stack: ["TanStack Start", "React", "Postgres", "Kysely", "Better Auth", "GSAP"],
  },
  {
    repo: "wrighthaven-clone",
    slug: "wrighthaven",
    date: "2026-07",
    title: "WrightHaven Homes",
    href: "https://wrighthavenhomes.com",
    live: "https://wrighthavenhomes.com",
    mark: "/projects/wrighthaven-icon.png",
    blurb: "Custom home builder in Wellington County. Moved off WordPress to a fast static site, for Sway.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
  },
  {
    repo: "terraza-del-pacifico",
    slug: "terraza-del-pacifico",
    date: "2026-06",
    title: "Hotel Terraza del Pacífico",
    href: "https://terraza-del-pacifico.vercel.app/en",
    mark: "/projects/terraza.png",
    status: "Not launched",
    blurb:
      "Boutique hotel, restaurant and bar in Costa Rica. Bilingual Next.js rebuild for SEO at Sway. The client kept their own WordPress site, so this links to my build.",
    stack: ["Next.js", "React", "Tailwind CSS", "PostHog", "Resend"],
  },
  {
    repo: "birch-island-cottage",
    slug: "birch-island-cottage",
    date: "2026-06",
    title: "Birch Island Cottage",
    href: "https://birchislandcottage.ca",
    live: "https://birchislandcottage.ca",
    mark: "/projects/birch-island.png",
    blurb: "Cottage rental website, built for Sway.",
    stack: ["Next.js", "Google Maps API", "Resend"],
  },
  {
    repo: "trevalli-homes",
    slug: "trevalli-homes",
    date: "2026-08",
    title: "Trevalli Homes",
    href: "https://trevalli-homes.vercel.app",
    mark: "/projects/trevalli.svg",
    status: "In progress",
    blurb: "Marketing site for a boutique home builder in Southern Ontario, for Sway.",
    stack: ["Next.js", "shadcn/ui", "Tailwind CSS", "MapLibre"],
  },
  {
    repo: "Miller-Waste-Systems",
    slug: "miller-waste",
    date: "2026-05",
    title: "Miller Waste Systems",
    href: "https://miller-waste-systems.vercel.app",
    mark: "/projects/miller-waste.png",
    status: "Not launched",
    blurb:
      "Waste and recycling company. Next.js rebuild at Sway. Their live site is still WordPress, so this links to my build.",
    stack: ["Next.js", "React", "Markdown content", "SendGrid"],
  },
  {
    repo: "sway",
    slug: "sway",
    date: "2025-12",
    title: "Sway Advertising",
    href: "https://sway.ca",
    live: "https://sway.ca",
    mark: "/projects/sway.svg",
    blurb: "The agency site. I moved it from Webflow to a static site on Vercel and look after it.",
    stack: ["HTML", "CSS", "JavaScript", "Vercel", "PostHog"],
  },
];

/** Business software built for specific companies. */
export const apps: Project[] = [
  {
    repo: "evergreen-os",
    slug: "evergreen-os",
    date: "2026-10",
    title: "Evergreen OS",
    href: "https://evergreen-os-henna.vercel.app",
    mark: "/projects/evergreen.png",
    status: "Prototype",
    blurb:
      "Project management for a construction company: timesheets, safety records, daily reports, estimates and approvals around one project record, with roles and a phone layout.",
    stack: ["Next.js", "TypeScript", "Convex", "AWS S3"],
  },
  {
    repo: "jenuine-care-saas",
    slug: "caremanager",
    date: "2026-08",
    title: "CareManager",
    href: "https://jenuine-care-saas.vercel.app",
    mark: "/projects/jenuine-care.png",
    status: "In progress",
    blurb:
      "Home healthcare platform built for Jenuine Care. Admins, coordinators and nurses manage patients, assignments, scheduling, timesheets and billing.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Supabase", "NextAuth", "Stripe"],
  },
  {
    repo: "xray-marketplace",
    slug: "radius",
    date: "2026-06",
    title: "Radius",
    href: "https://xray-marketplace.vercel.app",
    status: "Prototype",
    blurb:
      "Marketplace for used diagnostic imaging equipment, with listing verification, a wear metric per part and fair-price ranges against comparables. Uses illustrative data.",
    stack: ["Next.js", "TypeScript", "Prisma", "Postgres", "Supabase", "Resend"],
  },
];

/** Combined catalog, used by the timeline, llms.txt and the GitHub filter. */
export const featured = [...products, ...swayTools, ...clients, ...apps];

/** Repos to hide from the auto-generated list (throwaways and work already covered above). */
export const hidden = new Set<string>([
  "shipwithclaude",
  "claude-code-webapp-boilerplate-supabase",
  "showoff",
  "showoff2",
  "copy-canvas-capture",
  "welcome-youtube",
  "zero-friction-crm",
  "Champaign-Glass",
  "sway-website",
  "tyson",
]);

/** Optional friendlier names and descriptions for repos in the auto-generated list. */
export const overrides: Record<string, { title?: string; description?: string; live?: string }> = {
  Gryphon: {
    title: "Gryphon",
    description:
      "Reliable logged-in browser sessions for AI agents, with a human-in-the-loop step when a login or 2FA gets in the way. Python, Browserbase, Playwright.",
  },
  northgate: {
    title: "Northgate",
    description:
      "Prototype Chrome extension (Manifest V3) that redacts personal information from ChatGPT prompts before they are sent, with an activity log for PIPEDA and Law 25.",
  },
  "remotion-boilerplate": {
    title: "Remotion Boilerplate",
    description: "Starter for making videos in React with Remotion, including Whisper captions.",
  },
  "claude-code-webapp-boilerplate": {
    title: "Claude Code Webapp Boilerplate",
    description:
      "Next.js starter with Convex, Clerk, Stripe and an AI chatbot, set up for building with Claude Code.",
  },
  "doomsday-watch-order": {
    title: "Doomsday Watch Order",
    description: "A public prep watch order for Avengers: Doomsday across the MCU, X-Men and Fantastic Four.",
  },
  "mws-price-dashboard": {
    title: "Bin Rental Pricing Dashboard",
    description: "Pricing intelligence dashboard for the waste bin rental market.",
  },
  "native-local-website-builder": {
    title: "Local Website Builder",
    description: "Native desktop prototype of an AI-assisted website builder, built with Tauri and React.",
  },
  STM_Tunneling_Animation: {
    title: "STM Tunneling Simulator",
    description: "Interactive simulation of quantum tunneling in a scanning tunneling microscope.",
  },
  "marduk-aeo": {
    title: "Marduk AEO",
    description:
      "Early AI search visibility tracker: keyword tracking and source analysis on Supabase Edge Functions and Python.",
  },
  "zero-friction-crm-app": { title: "Zero Friction CRM", description: "A gamified CRM built with Next.js and Tailwind CSS." },
  "mindmap-visualizer": { title: "Mindmap Visualizer" },
  airport_route_map: { title: "Airport Route Map", description: "Interactive map of airport routes." },
  funnelhero: { title: "FunnelHero", description: "A SaaS marketing tool to help marketers plan and bring together assets for a funnel." },
  sitemapai: { title: "SitemapAI" },
};
