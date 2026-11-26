/**
 * How to install each toolkit item into someone else's project. Served by the /mcp endpoint.
 * Every command here is copied from the tool's own docs. Don't add per-agent variants the docs don't show.
 */

export type Step = {
  run: string;
  /** "terminal" for shell commands; "claude-code-chat" for slash commands typed inside Claude Code. */
  where: "terminal" | "claude-code-chat";
  /** What the step writes to: this project, the user's home folder, or the local Claude Code config. */
  scope?: "project" | "user" | "local";
  /** The command asks questions or opens a browser, so a person should run it. */
  interactive?: boolean;
  note?: string;
};

export type InstallOption = { for: string; steps: Step[] };

export type Install = {
  docs: string;
  /** Accounts, keys or plans the user needs first. */
  needs?: string[];
  /** Other tools or setup this one depends on. */
  requires?: string[];
  options: InstallOption[];
  note?: string;
};

// Clone into a fresh private temp folder each time, never a fixed shared path another user could plant.
const tstackCopy = (skill: string, dest: string) =>
  `d=$(mktemp -d) && git clone --depth 1 https://github.com/t3dotgg/tstack "$d" && mkdir -p ${dest} && cp -R "$d/skills/${skill}" ${dest}/ && rm -rf "$d"`;

const tstack = (skill: string): InstallOption[] => [
  {
    for: "Claude Code (this project)",
    steps: [{ run: tstackCopy(skill, ".claude/skills"), where: "terminal", scope: "project" }],
  },
  {
    for: "Codex",
    steps: [{ run: tstackCopy(skill, "~/.codex/skills"), where: "terminal", scope: "user" }],
  },
];

export const install: Record<string, Install> = {
  // Skills
  "modern-web-guidance": {
    docs: "https://developer.chrome.com/docs/modern-web-guidance/get-started",
    options: [
      {
        for: "Any agent (Chrome's recommended installer, with automatic updates)",
        steps: [{ run: "npx modern-web-guidance@latest install", where: "terminal", interactive: true }],
      },
      {
        for: "Claude Code",
        steps: [
          { run: "claude plugin marketplace add GoogleChrome/modern-web-guidance", where: "terminal", scope: "user" },
          { run: "claude plugin install modern-web-guidance@googlechrome", where: "terminal", scope: "user" },
        ],
      },
      {
        for: "Codex",
        steps: [
          { run: "codex plugin marketplace add GoogleChrome/modern-web-guidance", where: "terminal", scope: "user" },
          { run: "codex plugin add modern-web-guidance@googlechrome", where: "terminal", scope: "user" },
        ],
      },
    ],
  },
  panel: {
    docs: "https://tastetest-three.vercel.app/",
    options: [
      {
        for: "Claude Code and Cursor (this project)",
        steps: [{ run: "npx @tysongreenan/panel init", where: "terminal", scope: "project" }],
      },
    ],
    note: 'Then ask the agent to "Run a panel".',
  },
  "full-send": {
    docs: "https://github.com/t3dotgg/tstack",
    requires: [
      "sol-loop, file-pr and babysit-pr (install them too)",
      "An authenticated GitHub CLI (gh auth login)",
      "python3, for babysit-pr's pr-wait script",
    ],
    options: tstack("full-send"),
    note: "It merges pull requests on its own, so only use it where that is allowed.",
  },
  "sol-loop": {
    docs: "https://github.com/t3dotgg/tstack",
    requires: [
      "Subagents on another provider's model (GPT Sol). T3 Code provides this with delegate_task; other harnesses need their own way to run it.",
    ],
    options: tstack("sol-loop"),
  },
  "file-pr": {
    docs: "https://github.com/t3dotgg/tstack",
    requires: ["An authenticated GitHub CLI (gh auth login)"],
    options: tstack("file-pr"),
  },
  "babysit-pr": {
    docs: "https://github.com/t3dotgg/tstack",
    requires: ["An authenticated GitHub CLI (gh auth login)", "python3"],
    options: tstack("babysit-pr"),
  },
  graphify: {
    docs: "https://github.com/Graphify-Labs/graphify",
    requires: ["uv (or pipx)"],
    options: [
      {
        for: "Any agent (this project)",
        steps: [
          { run: "uv tool install graphifyy", where: "terminal", scope: "user", note: "The package is graphifyy, with two y's." },
          { run: "graphify install --project", where: "terminal", scope: "project" },
        ],
      },
    ],
    note: "Then type /graphify . in the agent.",
  },
  "frontend-design": {
    docs: "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design",
    options: [
      {
        for: "Claude Code",
        steps: [{ run: "/plugin install frontend-design@claude-plugins-official", where: "claude-code-chat", scope: "user" }],
      },
    ],
  },
  impeccable: {
    docs: "https://impeccable.style",
    options: [
      {
        for: "Claude Code (this project)",
        steps: [{ run: "npx skills add pbakaus/impeccable -a claude-code", where: "terminal", scope: "project" }],
      },
      {
        for: "Any agent (Impeccable's own installer)",
        steps: [{ run: "npx impeccable install", where: "terminal", interactive: true }],
      },
    ],
  },
  "ui-ux-pro-max": {
    docs: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill",
    requires: ["python3"],
    options: [
      {
        for: "Claude Code (this project)",
        steps: [
          { run: "npm install -g ui-ux-pro-max-cli", where: "terminal", scope: "user" },
          { run: "uipro init --ai claude", where: "terminal", scope: "project" },
        ],
      },
      {
        for: "Codex or Cursor (this project)",
        steps: [
          { run: "npm install -g ui-ux-pro-max-cli", where: "terminal", scope: "user" },
          { run: "uipro init --ai codex", where: "terminal", scope: "project", note: "Use --ai cursor for Cursor." },
        ],
      },
    ],
  },
  jury: {
    docs: "https://github.com/juliobsz/skills",
    options: [
      {
        for: "Claude Code (this project)",
        steps: [{ run: "npx skills add juliobsz/skills --skill jury -a claude-code", where: "terminal", scope: "project" }],
      },
    ],
  },

  // MCP servers
  "t3-code-mcp": {
    docs: "https://t3.codes",
    options: [],
    note: "These tools only exist inside the T3 Code app. Install T3 Code from https://t3.codes; there is no separate MCP server to add.",
  },
  "posthog-mcp": {
    docs: "https://posthog.com/docs/model-context-protocol",
    needs: ["A PostHog account (you sign in when connecting)"],
    options: [
      {
        for: "Claude Code, Cursor, Codex and others",
        steps: [{ run: "npx @posthog/wizard mcp add", where: "terminal", interactive: true }],
      },
    ],
    note: "Manual setup: point any MCP client at https://mcp.posthog.com/mcp.",
  },
  "mobbin-mcp": {
    docs: "https://docs.mobbin.com/mcp/clients/overview",
    needs: ["A paid Mobbin plan"],
    options: [
      {
        for: "Claude Code",
        steps: [
          { run: "claude plugin marketplace add mobbin/skills", where: "terminal", scope: "user" },
          { run: "claude plugin install mobbin@mobbin", where: "terminal", scope: "user" },
        ],
      },
    ],
    note: "Mobbin recommends the verified Mobbin connector in Claude Desktop or claude.ai when you sign in to Claude Code with a Claude subscription.",
  },
  "playwright-mcp": {
    docs: "https://github.com/microsoft/playwright-mcp",
    options: [
      {
        for: "Claude Code (this project)",
        steps: [{ run: "claude mcp add -s project playwright npx @playwright/mcp@latest", where: "terminal", scope: "project" }],
      },
      {
        for: "Codex",
        steps: [{ run: 'codex mcp add playwright npx "@playwright/mcp@latest"', where: "terminal", scope: "user" }],
      },
    ],
    note: 'Other clients: add { "command": "npx", "args": ["@playwright/mcp@latest"] } as a server named playwright.',
  },
  "website-feedback-mcp": {
    docs: "https://websitefeedback.ca",
    needs: ["A Website Feedback account", "A connection token from Account → Connect to Claude → Generate connection token"],
    options: [
      {
        for: "Claude Code",
        steps: [
          {
            run: 'claude mcp add --transport http website-feedback https://websitefeedback.ca/api/mcp --header "Authorization: Bearer YOUR_TOKEN"',
            where: "terminal",
            scope: "local",
            note: "Keep it in local scope. Never put the token in a project .mcp.json that gets committed.",
          },
        ],
      },
    ],
  },
  "21st-magic": {
    docs: "https://21st.dev/mcp",
    needs: ["A 21st API key from https://21st.dev/mcp"],
    options: [
      {
        for: "Claude Code",
        steps: [
          {
            run: "npx @21st-dev/cli@latest init --client claude --write",
            where: "terminal",
            note: "Writes the config with a placeholder; paste your API key in. Use --client cursor, codex, vscode or devin for other agents.",
          },
        ],
      },
    ],
  },
  "webflow-mcp": {
    docs: "https://developers.webflow.com/mcp",
    needs: ["A Webflow account (you authorize when connecting)"],
    options: [
      {
        for: "Claude Code",
        steps: [{ run: "claude mcp add --transport http webflow https://mcp.webflow.com/mcp", where: "terminal", scope: "local" }],
      },
    ],
  },

  // CLIs
  "convex-cli": {
    docs: "https://docs.convex.dev/cli",
    needs: ["A Convex account (the first run signs you in)"],
    options: [
      {
        for: "Any project using Convex",
        steps: [{ run: "npx convex dev", where: "terminal", scope: "project", interactive: true }],
      },
    ],
  },
  "github-cli": {
    docs: "https://cli.github.com",
    needs: ["A GitHub account"],
    options: [
      {
        for: "macOS",
        steps: [
          { run: "brew install gh", where: "terminal", scope: "user" },
          { run: "gh auth login", where: "terminal", scope: "user", interactive: true },
        ],
      },
    ],
    note: "Other platforms: see https://cli.github.com.",
  },
  "railway-cli": {
    docs: "https://docs.railway.com/guides/cli",
    needs: ["A Railway account"],
    options: [{ for: "Any OS with Node.js", steps: [{ run: "npm i -g @railway/cli", where: "terminal", scope: "user" }] }],
  },
  "vercel-cli": {
    docs: "https://vercel.com/docs/cli",
    needs: ["A Vercel account"],
    options: [{ for: "Any OS with Node.js", steps: [{ run: "npm i -g vercel", where: "terminal", scope: "user" }] }],
  },
  psql: {
    docs: "https://www.postgresql.org/docs/current/app-psql.html",
    options: [],
    note: "psql ships with PostgreSQL. Install PostgreSQL for your OS from the docs.",
  },
  "playwright-cli": {
    docs: "https://github.com/microsoft/playwright-cli",
    options: [
      {
        for: "Claude Code (this project)",
        steps: [
          { run: "npm install -g @playwright/cli@latest", where: "terminal", scope: "user" },
          { run: "playwright-cli install --skills", where: "terminal", scope: "project", note: "Installs into .claude/skills. Use --skills=agents for .agents/skills." },
        ],
      },
    ],
  },
};
