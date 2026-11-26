export const site = {
  name: "Tyson Greenan",
  github: "tysongreenan",
  linkedin: "https://www.linkedin.com/in/tyson-greenan-6351a6129",
  location: "Ontario, Canada",
  url: "https://tysongreenan.vercel.app",
  tagline:
    "Developer and digital marketer at Sway Advertising. I build Sway's internal AI platform, client websites, and side products like Cookie Banner and Website Feedback.",
};

/** One line on what I build new projects with today. Details live in the Stack tab on /toolkit. */
export const currentStack =
  "New projects: Next.js and TypeScript, Convex or Cloudflare (Workers, D1, R2) for the backend, Clerk for sign-in, Tailwind and shadcn/ui, hosted on Vercel, Cloudflare or Railway. Moving away from Supabase, which older products still use.";

/** Skills, grouped. Every item is used in at least one project on the projects page. */
export const skills: { area: string; items: string[] }[] = [
  { area: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"] },
  {
    area: "Frontend",
    items: ["React", "Next.js (App Router)", "TanStack Start", "Tailwind CSS", "shadcn/ui", "Radix and Base UI", "GSAP", "Framer Motion"],
  },
  {
    area: "Backend and data",
    items: ["Convex", "Cloudflare Workers, D1 and R2", "Node.js", "Express", "Postgres", "Payload CMS", "Prisma", "Kysely", "Supabase (earlier projects)"],
  },
  {
    area: "AI",
    items: ["AI SDK", "Anthropic and OpenAI APIs", "MCP servers", "AI agents and tool use", "Claude Code and Cursor skills", "Browser automation with Playwright and Browserbase"],
  },
  {
    area: "Platforms",
    items: ["Vercel", "Cloudflare", "Railway", "Clerk (plus Better Auth and NextAuth)", "Stripe", "Resend", "PostHog", "Sentry", "Mux", "AWS S3"],
  },
  { area: "Desktop and extensions", items: ["Electron", "Tauri", "Chrome extensions (Manifest V3)"] },
  {
    area: "Marketing",
    items: ["SEO and technical SEO", "AI search visibility (AEO)", "Privacy compliance (PIPEDA, Law 25, GDPR)", "Webflow", "WordPress and Elementor", "Google Ads landing pages"],
  },
];
