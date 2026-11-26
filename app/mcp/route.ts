import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { site } from "@/content/site";
import { agents, categories, installSteps, listToolkit } from "@/lib/toolkit-text";

/**
 * Public MCP server for my toolkit. It never runs anything itself: it returns the skills, MCP servers and
 * CLIs I use, with install steps copied from each tool's docs, for the calling agent to show its user.
 */
const handler = createMcpHandler(
  (server) => {
    server.registerTool(
      "list_toolkit",
      {
        title: "List toolkit",
        description: `List the agent skills, MCP servers, CLIs, stack and coding agents ${site.name} uses, with usage counts and which ones are must-haves. Use the returned slugs with get_install_steps.`,
        inputSchema: z.object({
          category: z.enum(categories).optional().describe("Only this tab of the toolkit. Omit for everything."),
        }),
        annotations: { readOnlyHint: true, openWorldHint: false },
      },
      async ({ category }) => ({ content: [{ type: "text", text: listToolkit(category) }] }),
    );

    server.registerTool(
      "get_install_steps",
      {
        title: "Get install steps",
        description:
          "Get install commands for toolkit items, copied from each tool's own docs, with what each step needs (accounts, API keys, paid plans) and whether it is interactive. Show them to the user and get their OK before running anything.",
        inputSchema: z.object({
          tools: z
            .array(z.string())
            .default(["must-haves"])
            .describe('Slugs from list_toolkit, or "must-haves" (default), or "all".'),
          agent: z.enum(agents).optional().describe("Only show steps for this coding agent."),
        }),
        annotations: { readOnlyHint: true, openWorldHint: false },
      },
      async ({ tools, agent }) => ({ content: [{ type: "text", text: installSteps(tools, agent) }] }),
    );

    server.registerPrompt(
      "set_up_toolkit",
      {
        title: "Set up this toolkit in my project",
        description: `Walk through adding ${site.name}'s skills and MCP servers to the current project.`,
      },
      () => ({
        messages: [
          {
            role: "user" as const,
            content: {
              type: "text" as const,
              text:
                `Help me add ${site.name}'s toolkit to this project. Call list_toolkit, then suggest the must-haves plus anything that fits this codebase. ` +
                "Ask me which ones I want, call get_install_steps for those with the coding agent I'm using, " +
                "show me the commands and anything they need (accounts, keys, paid plans), and only run them after I say yes.",
            },
          },
        ],
      }),
    );
  },
  {
    serverInfo: { name: "tyson-toolkit", version: "1.0.0" },
    instructions: `${site.name}'s toolkit: the agent skills, MCP servers and CLIs he uses, with install steps. Read-only. Call list_toolkit first, then get_install_steps. Always confirm with the user before running any command it returns.`,
  },
);

export { handler as GET, handler as POST, handler as DELETE };
