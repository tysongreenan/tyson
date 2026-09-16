import type { ReactNode } from "react";
import { A } from "@/components/a";

export type Product = {
  repo: string | null;
  slug: string;
  title: string;
  href: string;
  live?: string;
  date: string;
  logo: { src: string; height: number };
  body: ReactNode;
};

export type Client = {
  repo: string | null;
  slug: string;
  title: string;
  href: string;
  live?: string;
  date: string;
  mark: string;
  blurb: string;
};

/** Side products, ordered by how much I actually work on them. */
export const products: Product[] = [
  {
    repo: "uk-cookie-consent",
    slug: "cookie-banner",
    date: "2025-10",
    live: "https://cookie-banner.ca",
    title: "Cookie Banner",
    href: "https://cookie-banner.ca",
    logo: { src: "/projects/cookie-banner.png", height: 22 },
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
    repo: null,
    slug: "website-feedback",
    title: "Website Feedback",
    href: "https://websitefeedback.ca",
    live: "https://websitefeedback.ca",
    date: "2026-01",
    logo: { src: "/projects/website-feedback.svg", height: 20 },
    body: (
      <>
        A visual website feedback tool. Reviewers leave comments directly on any live URL with no extensions and no
        sign-up, so design teams and agencies can collect feedback and run launch checklists in one place.
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
    logo: { src: "/projects/qr-code.svg", height: 20 },
    body: (
      <>
        A Canadian QR code generator. Static codes are free, generated in the browser, and never expire. Dynamic codes
        add scan tracking and an editable destination without reprinting. Built as a sister product to Cookie Banner.
      </>
    ),
  },
];

/** Client websites built at Sway Advertising. */
export const clients: Client[] = [
  {
    repo: "wrighthaven-clone",
    slug: "wrighthaven",
    date: "2026-07",
    title: "WrightHaven Homes",
    href: "https://wrighthavenhomes.com",
    live: "https://wrighthavenhomes.com",
    mark: "/projects/wrighthaven-icon.png",
    blurb: "Custom home builder in Wellington County. Site rebuild for Sway.",
  },
  {
    repo: "terraza-del-pacifico",
    slug: "terraza-del-pacifico",
    date: "2026-06",
    title: "Hotel Terraza del Pacífico",
    href: "https://terrazadelpacifico.com",
    live: "https://terrazadelpacifico.com",
    mark: "/projects/terraza.png",
    blurb: "Boutique hotel, restaurant and bar. Next.js rebuild for SEO at Sway.",
  },
  {
    repo: "nova-golf-media",
    slug: "nova-golf",
    date: "2026-08",
    title: "Nova Golf",
    href: "https://nova-golf-media.vercel.app",
    live: "https://nova-golf-media.vercel.app",
    mark: "/projects/nova-golf.svg",
    blurb: "Golf media site, in progress for Sway.",
  },
  {
    repo: "nova-golf-cms",
    slug: "nova-golf-cms",
    date: "2026-08",
    title: "Nova Golf CMS",
    href: "https://nova-golf-cms.vercel.app",
    live: "https://nova-golf-cms.vercel.app",
    mark: "/projects/nova-golf.svg",
    blurb: "Payload CMS for Nova Golf. They edit the media site from a dashboard without a deploy.",
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
  },
  {
    repo: "Miller-Waste-Systems",
    slug: "miller-waste",
    date: "2026-05",
    title: "Miller Waste Systems",
    href: "https://millerwaste.ca",
    live: "https://millerwaste.ca",
    mark: "/projects/miller-waste.png",
    blurb: "Waste and recycling company. Site rebuild for Sway.",
  },
  {
    repo: "sway-website",
    slug: "sway",
    date: "2025-12",
    title: "Sway Advertising",
    href: "https://sway.ca",
    live: "https://sway.ca",
    mark: "/projects/sway.svg",
    blurb: "The agency site. I work on the website as well as the client work.",
  },
];

/** Combined catalog, used by the timeline and GitHub filter. */
export const featured = [...products, ...clients];

/** Repos to hide from the auto-generated list (forks, throwaways, and work already listed above). */
export const hidden = new Set<string>([
  "shipwithclaude",
  "claude-code-webapp-boilerplate-supabase",
  "showoff",
  "showoff2",
  "copy-canvas-capture",
  "welcome-youtube",
  "zero-friction-crm",
  "terraza-del-pacifico",
  "Champaign-Glass",
  "sway-website",
  "Miller-Waste-Systems",
  "birch-island-cottage",
  "nova-golf-media",
  "nova-golf-cms",
  "wrighthaven-clone",
  "uk-cookie-consent",
]);

/** Optional friendlier names and descriptions for repos in the auto-generated list. */
export const overrides: Record<string, { title?: string; description?: string; live?: string }> = {
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
  "zero-friction-crm-app": { title: "Zero Friction CRM", description: "A gamified CRM built with Next.js and Tailwind CSS." },
  "mindmap-visualizer": { title: "Mindmap Visualizer" },
  "airport_route_map": { title: "Airport Route Map", description: "Interactive map of airport routes." },
  funnelhero: { title: "FunnelHero", description: "A SaaS marketing tool to help marketers plan and bring together assets for a funnel." },
  sitemapai: { title: "SitemapAI" },
};
