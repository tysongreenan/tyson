/** Work history and education, from my LinkedIn profile. Sway's detailed bullets live on the resume page. */

export type Role = {
  title: string;
  company: string;
  type?: string;
  start: string; // "Mon YYYY"
  end: string; // "Mon YYYY" or "Present"
  location: string;
  summary?: string;
};

export const current: Role = {
  title: "Digital Marketing Coordinator",
  company: "Sway Advertising",
  type: "Contract, full-time",
  start: "May 2025",
  end: "Present",
  location: "Remote, Ontario",
  summary:
    "Lead SEO and digital strategy for agency clients, and build the agency's internal software and client websites.",
};

export const previous: Role[] = [
  {
    title: "Marketing Manager",
    company: "Doug Dane Coaching",
    type: "Contract, full-time",
    start: "Feb 2023",
    end: "Apr 2025",
    location: "Remote",
    summary:
      "Built the company's marketing tech stack: ActiveCampaign for email automation and segmentation, and Wix Studio for SEO and lead generation.",
  },
  {
    title: "Digital Marketing Coordinator",
    company: "Applied Electronics Limited",
    type: "Contract, full-time",
    start: "Oct 2021",
    end: "Feb 2023",
    location: "Toronto, ON",
    summary:
      "Grew Applied's brand through content development and digital marketing initiatives.",
  },
  {
    title: "Canadian Regional Business Unit",
    company: "GPA",
    start: "Oct 2021",
    end: "Feb 2023",
    location: "Remote",
    summary: "Video production and editing, including the GPA Toronto Summit 2022.",
  },
  {
    title: "Production Assistant",
    company: "Big Gay Fiction Podcast",
    type: "Freelance",
    start: "Sep 2021",
    end: "Sep 2022",
    location: "Remote",
    summary: "Copy and script editing for episodes 313 to 397.",
  },
  {
    title: "Chief Marketing Officer and Founder",
    company: "Puddleshaker",
    start: "Nov 2020",
    end: "Nov 2021",
    location: "Kitchener, ON",
  },
  {
    title: "Co-Founder",
    company: "Compass 9 Media",
    start: "Oct 2019",
    end: "Mar 2021",
    location: "Kitchener-Waterloo, ON",
  },
  {
    title: "Apprentice",
    company: "Respecting the Process Inc.",
    start: "May 2019",
    end: "Sep 2019",
    location: "Kitchener, ON",
    summary: 'Found the "why" in each business and told its story in a way people care about.',
  },
];

/** Customer-facing jobs before marketing, kept to one line on the resume. */
export const earlier =
  "Sales, hospitality and delivery roles at Cambridge Pools Supplies, Starbucks, The Keg Steakhouse + Bar and DoorDash (2014 to 2019).";

export const education = [
  {
    school: "Fanshawe College",
    credential: "Marketing Diploma (Business, Management, Marketing and Related Support Services)",
    years: "2017 to 2019",
  },
];

/** Verified highlights from the repos (docs, tests, commit history, SEO trackers). Shown near the top of the resume. */
export const highlights: string[] = [
  "Built a grounded client knowledge base for Sway AI that scores 30 of 31 on a golden-question eval, mostly on low-cost models (Haiku), at about $0.25 per full eval run. Code keeps a fact only if its quote and numbers appear word for word in the source; a second model then checks it.",
  "Choose models on evidence: an 8-model bake-off on 4 real Webflow jobs (32 runs), and about 40 background jobs each mapped to the cheapest model that passed its test, with the test cited in code. Fact checking moved to Sonnet after Haiku stalled at 24 of 30. The whole platform runs on about $1.76 a day in AI spend.",
  "Token economics in code: the prompt budget recalibrates every step from the model's reported token counts to stay under Haiku's 100K price step, after 13 of 44 routine steps had crossed it. Oversized tool results are stored whole and summarized, and long chats are compacted.",
  "Approvals follow what the model has read, not what it says: once a transcript, file or email is in a chat, standing approvals switch off and high-reach tools ask every time. A test shows an injected write held as pending with the page unchanged.",
  "Built MCP servers into four products (Website Feedback, Cookie Banner, Evergreen OS, Gryphon) and an MCP client with OAuth in Sway AI. Evergreen's server gives each person a revocable token and lets agents draft but never submit, approve or delete.",
  "Confined AI coding agents in Sway Studio, the client website editor: Codex runs under a generated macOS sandbox profile and never reads the site directly, its patch tool is declined because it reads files before asking, and unknown tools stop the turn. Every AI turn is snapshotted as a git tree so it can be undone without touching anyone's own edits, and red-team findings become eval cases.",
  "Website Feedback's agent turns a comment pinned on a live page into a pull request: plain code ranks the likely source file and line with confidence scores, a tool budget stops the model browsing once it knows the file (after a live image swap cost 126K input tokens), commits are refused if a file changed since the model read it, and a person approves the merge. Found a regex bug that had silently broken 6 of 9 model-routing decisions.",
  "Security and performance: took Sway AI from 15 known vulnerabilities (6 high) to 0; isolated Website Feedback's proxy of third-party pages on a cookieless domain with per-redirect SSRF checks; cut a 4-second LCP delay on Cookie Banner.",
  "Client SEO at Sway: Blue Jay Irrigation #8 to #1 for \"irrigation\" (8,100 searches a month); Grapids Irrigation unranked to #5 for \"sprinkler system repair\" (20,100 a month) with branded clicks up 63%; The Junction's site health 74% to 90%.",
];
