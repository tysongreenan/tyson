/**
 * How Sway AI is built: open-source projects and outside services, taken from the repo's package.json files,
 * worker configs, MCP server list and environment variable names. Names and links only: never credentials.
 */

export type Item = { name: string; href?: string; note: string };
export type Group = { title: string; items: Item[] };

export const architecture: Item[] = [
  { name: "Web app", note: "Next.js App Router and React, hosted on Railway." },
  { name: "Backend", note: "Convex: the database (366 tables), server functions, real-time sync and 64 scheduled jobs." },
  { name: "Desktop app", note: "Electron shell around the web app, which can hand AI turns to the person's own Claude Code or Grok login." },
  { name: "Edge workers", note: "Three Cloudflare Workers: serving files from R2, newsletter link tracking, and copying SharePoint files." },
  { name: "Agent harness", note: "Built in-house on Convex: durable runs, about 180 tools, approvals decided in code, evidence-based model routing." },
];

export const openSource: Group[] = [
  {
    title: "Core",
    items: [
      { name: "Next.js", href: "https://nextjs.org", note: "web framework" },
      { name: "React", href: "https://react.dev", note: "UI" },
      { name: "TypeScript", href: "https://www.typescriptlang.org", note: "language" },
      { name: "Convex", href: "https://github.com/get-convex/convex-backend", note: "backend, database and functions" },
      { name: "convex-helpers", href: "https://github.com/get-convex/convex-helpers", note: "Convex utilities" },
      { name: "Convex Auth", href: "https://labs.convex.dev/auth", note: "sign-in" },
      { name: "Auth.js", href: "https://authjs.dev", note: "OAuth providers" },
      { name: "Electron", href: "https://www.electronjs.org", note: "desktop app" },
      { name: "Zod", href: "https://zod.dev", note: "schema validation" },
    ],
  },
  {
    title: "Editors and canvases",
    items: [
      { name: "Tiptap", href: "https://tiptap.dev", note: "document editor" },
      { name: "ProseMirror", href: "https://prosemirror.net", note: "editor engine" },
      { name: "Convex ProseMirror Sync", href: "https://github.com/get-convex/prosemirror-sync", note: "real-time collaborative editing" },
      { name: "Excalidraw", href: "https://github.com/excalidraw/excalidraw", note: "whiteboards" },
      { name: "React Flow", href: "https://reactflow.dev", note: "node canvases" },
      { name: "react-markdown", href: "https://github.com/remarkjs/react-markdown", note: "rendering AI replies" },
      { name: "lowlight", href: "https://github.com/wooorm/lowlight", note: "code highlighting" },
      { name: "Harper", href: "https://github.com/Automattic/harper", note: "on-device grammar checking" },
    ],
  },
  {
    title: "Interface",
    items: [
      { name: "Tailwind CSS", href: "https://tailwindcss.com", note: "styling" },
      { name: "shadcn/ui", href: "https://ui.shadcn.com", note: "components" },
      { name: "Radix UI", href: "https://www.radix-ui.com", note: "accessible primitives" },
      { name: "Base UI", href: "https://base-ui.com", note: "accessible primitives" },
      { name: "TanStack Query, Table, Form and Virtual", href: "https://tanstack.com", note: "data fetching, tables, forms, long lists" },
      { name: "Recharts", href: "https://recharts.org", note: "charts" },
      { name: "Leaflet", href: "https://leafletjs.com", note: "maps" },
      { name: "Motion", href: "https://motion.dev", note: "animation" },
      { name: "hello-pangea/dnd", href: "https://github.com/hello-pangea/dnd", note: "drag and drop" },
      { name: "Sonner", href: "https://sonner.emilkowal.ski", note: "toasts" },
      { name: "Lucide", href: "https://lucide.dev", note: "icons" },
      { name: "date-fns", href: "https://date-fns.org", note: "dates" },
      { name: "Remeda", href: "https://remedajs.com", note: "data utilities" },
    ],
  },
  {
    title: "Files and documents",
    items: [
      { name: "PDF.js", href: "https://mozilla.github.io/pdf.js/", note: "PDF viewing" },
      { name: "pdf-lib", href: "https://pdf-lib.js.org", note: "PDF signing and editing" },
      { name: "docx", href: "https://docx.js.org", note: "Word export" },
      { name: "Mammoth", href: "https://github.com/mwilliamson/mammoth.js", note: "Word import" },
      { name: "SheetJS", href: "https://sheetjs.com", note: "spreadsheets" },
      { name: "Formula.js", href: "https://formulajs.info", note: "spreadsheet formulas" },
      { name: "Papa Parse", href: "https://www.papaparse.com", note: "CSV" },
      { name: "sharp", href: "https://sharp.pixelplumbing.com", note: "image processing" },
      { name: "Mediabunny", href: "https://mediabunny.dev", note: "video compression in the browser" },
      { name: "fflate", href: "https://github.com/101arrowz/fflate", note: "zip and compression" },
      { name: "DOMPurify", href: "https://github.com/cure53/DOMPurify", note: "HTML sanitizing" },
    ],
  },
  {
    title: "Web, networking and testing",
    items: [
      { name: "Playwright", href: "https://playwright.dev", note: "browser automation and site checks" },
      { name: "undici", href: "https://undici.nodejs.org", note: "HTTP client" },
      { name: "ws", href: "https://github.com/websockets/ws", note: "WebSockets for the desktop runner" },
      { name: "aws4fetch", href: "https://github.com/mhart/aws4fetch", note: "signed requests to R2 and SES" },
      { name: "tldts", href: "https://github.com/remusao/tldts", note: "domain parsing" },
      { name: "Vitest", href: "https://vitest.dev", note: "tests" },
      { name: "convex-test", href: "https://github.com/get-convex/convex-test", note: "backend tests" },
      { name: "ESLint", href: "https://eslint.org", note: "linting" },
    ],
  },
];

export const studied: Item[] = [
  {
    name: "OpenHarness",
    href: "https://github.com/HKUDS/OpenHarness",
    note: "MIT. Studied for the agent loop; ideas adopted into Sway's harness (decided Nov 1, 2026).",
  },
  {
    name: "DeepSeek Harness",
    href: "https://github.com/deepseek-ai/deepseek-harness",
    note: "MIT. Ideas ported into Sway chat, including storing oversized tool results and summarizing them (decided Sep 27, 2026).",
  },
  {
    name: "Open SEO",
    href: "https://github.com/every-app/open-seo",
    note: "MIT. A reference snapshot of its client UI, kept with its licence, for adapting Sway's SEO screens.",
  },
];

export const services: Group[] = [
  {
    title: "AI models",
    items: [
      { name: "OpenRouter", href: "https://openrouter.ai", note: "one gateway to Claude, GPT, Gemini, DeepSeek, Grok and more; 90,878 calls so far" },
      { name: "OpenAI API", href: "https://platform.openai.com", note: "embeddings for file search and memory" },
      { name: "TypeSafe", note: "the small classifier model that helps route chat to a model tier" },
    ],
  },
  {
    title: "SEO, reviews and research",
    items: [
      { name: "DataForSEO", href: "https://dataforseo.com", note: "rank tracking and local grids" },
      { name: "SE Ranking", href: "https://seranking.com", note: "rankings and audits" },
      { name: "Google Search Console", href: "https://developers.google.com/webmaster-tools", note: "search performance" },
      { name: "Google Analytics 4", href: "https://developers.google.com/analytics", note: "traffic" },
      { name: "Google Business Profile", href: "https://developers.google.com/my-business", note: "local listings, posts and reviews; 30 client profiles connected" },
      { name: "PageSpeed Insights", href: "https://developers.google.com/speed/docs/insights/v5/get-started", note: "performance checks, on the free tier" },
      { name: "Browserbase", href: "https://www.browserbase.com", note: "cloud browsers for research" },
    ],
  },
  {
    title: "Social and email",
    items: [
      { name: "Outstand", note: "social post scheduling and publishing" },
      { name: "Meta, LinkedIn and YouTube", note: "account connections are set up; Google Business Profile is the active channel today" },
      { name: "Amazon SES", href: "https://aws.amazon.com/ses/", note: "client newsletter delivery (the default)" },
      { name: "SendGrid", href: "https://sendgrid.com", note: "set up as a per-client alternative for newsletters" },
      { name: "Resend", href: "https://resend.com", note: "sign-in and notification email" },
    ],
  },
  {
    title: "Work tools",
    items: [
      { name: "Microsoft Graph", href: "https://learn.microsoft.com/graph/", note: "Outlook mail and calendar, SharePoint and OneDrive files, Entra ID sign-in" },
      { name: "Recall.ai", href: "https://www.recall.ai", note: "meeting bot, recordings and transcripts; 273 meetings recorded" },
      { name: "ClickUp", href: "https://developer.clickup.com", note: "imported 6,236 existing tasks into Sway AI" },
      { name: "GitHub", href: "https://docs.github.com/rest", note: "in-app feedback becomes issues" },
      { name: "Webflow and Canva", note: "connected to the agent through their MCP servers" },
    ],
  },
  {
    title: "Infrastructure",
    items: [
      { name: "Convex Cloud", href: "https://www.convex.dev", note: "backend hosting" },
      { name: "Railway", href: "https://railway.com", note: "web app hosting" },
      { name: "Cloudflare R2 and Workers", href: "https://developers.cloudflare.com/r2/", note: "file storage and edge workers" },
      { name: "PostHog", href: "https://posthog.com", note: "connected to the agent through its MCP server" },
    ],
  },
];
