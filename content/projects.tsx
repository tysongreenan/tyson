import type { ReactNode } from "react";
import { A } from "@/components/a";

export type Featured = {
  repo: string;
  title: string;
  href: string;
  body: ReactNode;
};

export const featured: Featured[] = [
  {
    repo: "claude-code-webapp-boilerplate",
    title: "Claude Code Webapp Boilerplate",
    href: "https://github.com/tysongreenan/claude-code-webapp-boilerplate",
    body: (
      <>
        A production-ready Next.js starter designed to be driven by Claude Code. It ships with Convex, Clerk, Stripe,
        an AI chatbot, and 63 UI components so an agent can go from prompt to working product without scaffolding
        the basics. A{" "}
        <A href="https://github.com/tysongreenan/claude-code-webapp-boilerplate-supabase">Supabase, Prisma and NextAuth variant</A>{" "}
        exists for teams that prefer that stack, and{" "}
        <A href="https://github.com/tysongreenan/shipwithclaude">ShipWithClaude</A> is the showcase site, built on the
        boilerplate itself.
      </>
    ),
  },
  {
    repo: "Gryphon",
    title: "Gryphon",
    href: "https://gryphon-self.vercel.app",
    body: (
      <>
        The reliability layer between AI agents and the authenticated web. Agents built on Browserbase, Stagehand,
        Playwright or Computer Use fail when sessions expire, two-factor prompts appear or logins die mid-task. Gryphon
        provides persistent authenticated sessions and human-in-the-loop recovery so the task can continue. Built in
        2026 (<A href="https://github.com/tysongreenan/Gryphon">source</A>).
      </>
    ),
  },
  {
    repo: "tastetest",
    title: "Panel",
    href: "https://github.com/tysongreenan/tastetest",
    body: (
      <>
        A buyer panel that lives in your repo. Panel seats personas on your product, walks them through the flows, has
        them argue priority, and leaves a scored report with file-level fixes rather than another AI redesign. One
        command installs the skill set for Cursor and Claude Code.
      </>
    ),
  },
  {
    repo: "northgate",
    title: "Northgate",
    href: "https://github.com/tysongreenan/northgate",
    body: (
      <>
        A Canadian prompt firewall as a Chrome extension. It sits between people and the AI tools they use at work,
        catching sensitive data before it leaves the browser. Currently a V1 prototype.
      </>
    ),
  },
  {
    repo: "tybow-ui",
    title: "Tybow UI",
    href: "https://github.com/tysongreenan/tybow-ui",
    body: (
      <>
        A shadcn registry for community-builder marketing sites. The same blocks are reused across clients, and theme
        packs (editorial, coastal, sharp) give each one a different look. Primitives are shadcn/ui on Base UI.
      </>
    ),
  },
  {
    repo: "remotion-boilerplate",
    title: "Remotion Boilerplate",
    href: "https://github.com/tysongreenan/remotion-boilerplate",
    body: (
      <>
        A reusable Remotion starter for producing short-form social and marketing videos in code. Edit text, colours
        and data, then render consistent on-brand video every time. Written with plain-language docs so non-developers
        can drive it with Claude.
      </>
    ),
  },
  {
    repo: "marduk-aeo",
    title: "Marduk AEO",
    href: "https://marduk-aeo.vercel.app",
    body: (
      <>
        An answer-engine optimization tool built on Supabase Edge Functions for tracking keywords, analyzing source
        influence and running narrative analysis across AI search results (
        <A href="https://github.com/tysongreenan/marduk-aeo">source</A>).
      </>
    ),
  },
  {
    repo: "uk-cookie-consent",
    title: "UK Cookie Consent",
    href: "https://tysongreenan1-cookie-consent.vercel.app",
    body: (
      <>
        A GDPR-compliant cookie consent banner builder. Configure the banner, copy the snippet, ship it (
        <A href="https://github.com/tysongreenan/uk-cookie-consent">source</A>).
      </>
    ),
  },
  {
    repo: "STM_Tunneling_Animation",
    title: "STM Tunneling Simulator",
    href: "https://stm-tunneling-animation.vercel.app",
    body: (
      <>
        An interactive scanning tunneling microscope simulator with the underlying mathematical models, made to teach
        quantum tunneling through visualization (
        <A href="https://github.com/tysongreenan/STM_Tunneling_Animation">source</A>).
      </>
    ),
  },
];

/** Repos to hide from the auto-generated list (forks of templates, throwaway experiments). */
export const hidden = new Set<string>(["shipwithclaude", "claude-code-webapp-boilerplate-supabase", "showoff", "showoff2", "copy-canvas-capture", "welcome-youtube", "zero-friction-crm"]);

/** Optional friendlier names and descriptions for repos in the auto-generated list. */
export const overrides: Record<string, { title?: string; description?: string }> = {
  "doomsday-watch-order": { title: "Doomsday Watch Order", description: "A public prep watch order for Avengers: Doomsday across the MCU, X-Men and Fantastic Four." },
  "terraza-del-pacifico": { title: "Hotel Terraza del Pacífico", description: "Server-rendered Next.js rebuild of a hotel website, done for SEO at Sway Advertising." },
  "mws-price-dashboard": { title: "Bin Rental Pricing Dashboard", description: "Pricing intelligence dashboard for the waste bin rental market." },
  "native-local-website-builder": { title: "Local Website Builder", description: "Native desktop prototype of an AI-assisted website builder, built with Tauri and React." },
  "zero-friction-crm-app": { title: "Zero Friction CRM", description: "A gamified CRM built with Next.js and Tailwind CSS." },
  "mindmap-visualizer": { title: "Mindmap Visualizer" },
  "airport_route_map": { title: "Airport Route Map", description: "Interactive map of airport routes." },
  "Champaign-Glass": { title: "Champaign Glass" },
  "sway-website": { title: "Sway Advertising", description: "Website for Sway Advertising." },
  funnelhero: { title: "FunnelHero", description: "A SaaS marketing tool to help marketers plan and bring together assets for a funnel." },
  sitemapai: { title: "SitemapAI" },
};
