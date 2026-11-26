export type Tool = {
  slug: string;
  title: string;
  href: string;
  /** Who made it. "Me" for my own tools. */
  by: string;
  body: string;
  /** Number of T3 Code threads where an agent used it (see `usageNote`). */
  threads?: number;
  /** Shown first in its tab with a "must have" label. */
  mustHave?: boolean;
  /** Anchor on /projects for tools that are my own projects. */
  project?: string;
};

export type ToolGroup = { slug: string; label: string; intro?: string; tools: Tool[] };

/** Where the thread counts come from. Re-count from T3 Code's local database when refreshing. */
export const usageNote =
  "Counts are T3 Code threads where an agent called the tool, out of about 2,300 threads from October 6 to November 26, 2026.";

/** Public MCP endpoint (app/mcp/route.ts) that hands this toolkit and its install steps to other people's agents. */
export const mcpPath = "/mcp";

/** MCP servers, agent skills and toolkits I use. The first group is the default tab. */
export const toolkit: ToolGroup[] = [
  {
    slug: "skills",
    label: "Skills",
    tools: [
      {
        mustHave: true,
        slug: "modern-web-guidance",
        title: "Modern Web Guidance",
        href: "https://developer.chrome.com/docs/modern-web-guidance",
        by: "Chrome for Developers",
        threads: 10,
        body: "Skills from the Chrome team that put web platform best practices straight into a coding agent. My agents search it before they write any HTML, CSS or browser JavaScript, so they reach for modern platform features instead of old patterns or extra libraries.",
      },
      {
        mustHave: true,
        slug: "panel",
        project: "panel",
        title: "Panel",
        href: "https://tastetest-three.vercel.app/",
        by: "Me",
        threads: 18,
        body: "A design-review team that lives in your repo. npx @tysongreenan/panel init installs skills for Claude Code and Cursor; then you ask an agent to run a panel. Buyer personas walk the product and leave a scored report with file-level fixes, so it doesn't ship looking like AI slop.",
      },
      {
        mustHave: true,
        slug: "full-send",
        title: "Full Send",
        href: "https://github.com/t3dotgg/tstack/tree/main/skills/full-send",
        by: "Theo Browne (tstack)",
        threads: 77,
        body: "An agent skill for when I'm not watching. Say \"full send\" and the agent takes the change all the way to a merged pull request: it proves the change works, gets it reviewed, files the PR, fixes CI and review comments, and merges.",
      },
      {
        mustHave: true,
        slug: "sol-loop",
        title: "Sol Loop",
        href: "https://github.com/t3dotgg/tstack/tree/main/skills/sol-loop",
        by: "Theo Browne (tstack)",
        threads: 79,
        body: "An agent skill that has a second model, GPT Sol, review a change in rounds until both agents agree. It keeps a ledger of findings and a three-round budget, so it catches real bugs without scope creep.",
      },
      {
        slug: "graphify",
        title: "Graphify",
        href: "https://github.com/Graphify-Labs/graphify",
        by: "Graphify Labs",
        threads: 246,
        body: "Turns a codebase, its docs, SQL schemas, configs and PDFs into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex and Gemini CLI. Parsing is local and deterministic, every edge is explained, and there is no vector store.",
      },
      {
        slug: "file-pr",
        title: "File PR",
        href: "https://github.com/t3dotgg/tstack/tree/main/skills/file-pr",
        by: "Theo Browne (tstack)",
        threads: 68,
        body: "Files a short, clear pull request. Full Send calls it after the change is proven and reviewed.",
      },
      {
        slug: "babysit-pr",
        title: "Babysit PR",
        href: "https://github.com/t3dotgg/tstack/tree/main/skills/babysit-pr",
        by: "Theo Browne (tstack)",
        threads: 40,
        body: "Watches a pull request through CI and review bots, fixes real findings and failures, and keeps going until it is ready to merge.",
      },
      {
        slug: "frontend-design",
        title: "Frontend Design",
        href: "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design",
        by: "Anthropic",
        threads: 13,
        body: "Pushes agents toward a deliberate visual direction and away from templated defaults when building new UI.",
      },
      {
        slug: "impeccable",
        title: "Impeccable",
        href: "https://impeccable.style",
        by: "Impeccable",
        threads: 8,
        body: "A design vocabulary for agents: build, critique, audit and polish interfaces against a written design system.",
      },
      {
        slug: "ui-ux-pro-max",
        title: "UI UX Pro Max",
        href: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
        by: "Next Level Builder",
        threads: 7,
        body: "Reference data for UI work: styles, colour palettes, font pairings and UX rules across common stacks.",
      },
      {
        slug: "jury",
        title: "Jury",
        href: "https://github.com/juliobsz/skills",
        by: "juliobsz",
        threads: 4,
        body: "Scores a website the way an Awwwards jury would, from screenshots and measurements. Panel uses it to grade a build before and after fixes.",
      },
    ],
  },
  {
    slug: "stack",
    label: "Stack",
    intro:
      "What I build new projects on today. I have been moving off Supabase: older products like Cookie Banner, QR Code and Website Feedback still run on it, but new work goes on Convex or Cloudflare, with Clerk for sign-in.",
    tools: [
      {
        slug: "nextjs",
        title: "Next.js and TypeScript",
        href: "https://nextjs.org",
        by: "Vercel",
        body: "The base for almost every app and client site, on the App Router with React Server Components.",
      },
      {
        slug: "convex",
        title: "Convex",
        href: "https://www.convex.dev",
        by: "Convex",
        body: "My default backend: a realtime database and server functions in TypeScript, with no migrations to manage. Sway AI and Evergreen OS run on it.",
      },
      {
        slug: "cloudflare",
        title: "Cloudflare Workers, D1 and R2",
        href: "https://workers.cloudflare.com",
        by: "Cloudflare",
        body: "Next.js on Workers through OpenNext, with D1 for the database and R2 for files. Signoff runs entirely on Cloudflare.",
      },
      {
        slug: "clerk",
        title: "Clerk",
        href: "https://clerk.com",
        by: "Clerk",
        body: "Sign-in, user management and organizations. Nova Golf Media, its CMS and CareManager use it.",
      },
      {
        slug: "tailwind-shadcn",
        title: "Tailwind CSS and shadcn/ui",
        href: "https://ui.shadcn.com",
        by: "shadcn",
        body: "Styling and components, on Base UI or Radix primitives. Tybow UI is my own shadcn registry for client sites.",
      },
      {
        slug: "payload",
        title: "Payload CMS on Postgres",
        href: "https://payloadcms.com",
        by: "Payload",
        body: "When a client needs a real CMS: many editors, scheduled publishing or lots of content. Agency CMS and the Nova Golf CMS are built on it.",
      },
      {
        slug: "hosting",
        title: "Vercel and Railway",
        href: "https://railway.com",
        by: "Vercel, Railway",
        body: "Vercel for client sites and Next.js products; Railway for long-running servers like Sway AI, Sway Studio and Website Feedback.",
      },
      {
        slug: "ai-sdk",
        title: "AI SDK and Claude",
        href: "https://ai-sdk.dev",
        by: "Vercel, Anthropic",
        body: "AI features in the apps themselves: chat, tool calling and agents, mostly on Claude.",
      },
      {
        slug: "services",
        title: "Stripe, Resend and PostHog",
        href: "https://stripe.com",
        by: "Stripe, Resend, PostHog",
        body: "Payments, transactional email, and product analytics with feature flags.",
      },
    ],
  },
  {
    slug: "mcps",
    label: "MCPs",
    tools: [
      {
        slug: "t3-code-mcp",
        title: "T3 Code",
        href: "https://t3.codes",
        by: "Ping.gg",
        threads: 258,
        body: "Its MCP tools let one agent hand work to agents on other providers, drive a browser preview, render HTML, and link and watch pull requests. Most of my multi-agent reviews run through it.",
      },
      {
        slug: "posthog-mcp",
        title: "PostHog MCP",
        href: "https://posthog.com/docs/model-context-protocol",
        by: "PostHog",
        threads: 17,
        body: "Lets an agent query PostHog product analytics, feature flags and errors in plain language.",
      },
      {
        slug: "mobbin-mcp",
        title: "Mobbin MCP",
        href: "https://mobbin.com/mcp",
        by: "Mobbin",
        threads: 16,
        body: "Gives agents real screens, sections and flows from shipped apps, so design work starts from references instead of guesses.",
      },
      {
        slug: "playwright-mcp",
        title: "Playwright MCP",
        href: "https://github.com/microsoft/playwright-mcp",
        by: "Microsoft",
        threads: 10,
        body: "Browser control for agents: navigate, click, run scripts and take screenshots to check a page really works.",
      },
      {
        slug: "website-feedback-mcp",
        project: "website-feedback",
        title: "Website Feedback MCP",
        href: "https://websitefeedback.ca",
        by: "Me",
        threads: 5,
        body: "The MCP server for my Website Feedback product. Agents read the comments clients pin on a live page, leave their own, and mark them resolved.",
      },
      {
        slug: "21st-magic",
        title: "21st",
        href: "https://21st.dev/magic",
        by: "21st.dev",
        threads: 4,
        body: "Searches and drafts UI components in several variants, then brings the code into the project.",
      },
      {
        slug: "webflow-mcp",
        title: "Webflow MCP",
        href: "https://developers.webflow.com/mcp",
        by: "Webflow",
        threads: 3,
        body: "Edits Webflow sites, pages, CMS items and elements from an agent, for client sites that still live in Webflow.",
      },
    ],
  },
  {
    slug: "clis",
    label: "CLIs",
    tools: [
      {
        slug: "convex-cli",
        title: "Convex CLI",
        href: "https://docs.convex.dev/cli",
        by: "Convex",
        threads: 287,
        body: "Deploys functions, runs queries and checks data on the Convex backends behind Sway AI and Evergreen OS.",
      },
      {
        slug: "github-cli",
        title: "GitHub CLI",
        href: "https://cli.github.com",
        by: "GitHub",
        threads: 250,
        body: "Pull requests, reviews, CI checks and issues from the terminal. Agents use it to file, babysit and merge PRs.",
      },
      {
        slug: "railway-cli",
        title: "Railway CLI",
        href: "https://docs.railway.com/guides/cli",
        by: "Railway",
        threads: 59,
        body: "Deploys, logs and environment variables for Sway AI, Sway Studio and Website Feedback, which run on Railway.",
      },
      {
        slug: "vercel-cli",
        title: "Vercel CLI",
        href: "https://vercel.com/docs/cli",
        by: "Vercel",
        threads: 54,
        body: "Deployments, domains and environment variables for the client sites and products hosted on Vercel.",
      },
      {
        slug: "psql",
        title: "psql",
        href: "https://www.postgresql.org/docs/current/app-psql.html",
        by: "PostgreSQL",
        threads: 49,
        body: "Direct Postgres access for checking data and migrations.",
      },
      {
        slug: "playwright-cli",
        title: "Playwright CLI",
        href: "https://github.com/microsoft/playwright-cli",
        by: "Microsoft",
        threads: 48,
        body: "Browser automation from the terminal. Agents open the real page, click through it and take screenshots as proof that a change works.",
      },
    ],
  },
  {
    slug: "agents",
    label: "Agents",
    tools: [
      {
        slug: "t3-code",
        title: "T3 Code",
        href: "https://t3.codes",
        by: "Ping.gg",
        body: "The open source control plane I run all my coding agents from. Each project and thread lives here, and agents on different providers can hand work to each other.",
      },
      {
        slug: "claude-code",
        title: "Claude Code",
        href: "https://claude.com/product/claude-code",
        by: "Anthropic",
        threads: 1328,
        body: "My main coding agent. It does most of the building, testing and pull request work.",
      },
      {
        slug: "codex",
        title: "Codex",
        href: "https://openai.com/codex",
        by: "OpenAI",
        threads: 427,
        body: "Runs GPT Sol for second-opinion code reviews in Sol Loop, plus some building.",
      },
      {
        slug: "cursor",
        title: "Cursor",
        href: "https://cursor.com/cli",
        by: "Anysphere",
        threads: 43,
        body: "Another reviewer and builder, used for extra review rounds alongside Claude and Codex.",
      },
      {
        slug: "grok",
        title: "Grok",
        href: "https://grok.com",
        by: "xAI",
        threads: 9,
        body: "Occasional builder and reviewer. Lively Leadership Group's site started from a Grok Build sandbox.",
      },
    ],
  },
];
