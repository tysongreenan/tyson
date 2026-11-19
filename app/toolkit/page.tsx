import type { Metadata } from "next";
import { A } from "@/components/a";

export const metadata: Metadata = { title: "Toolkit" };

const tools = [
  {
    slug: "graphify",
    title: "Graphify",
    href: "https://github.com/Graphify-Labs/graphify",
    body: "Turns a codebase, its docs, SQL schemas, configs and PDFs into a queryable knowledge graph. A /graphify skill for Claude Code, Cursor, Codex and Gemini CLI. Parsing is local and deterministic, every edge is explained, and there is no vector store.",
  },
];

export default function Toolkit() {
  return (
    <>
      <h1 className="font-semibold mb-7 text-rurikon-600 text-balance">Toolkit</h1>
      <p className="mt-7">The tools I reach for when I build and ship code.</p>
      <ul className="mt-7 space-y-8">
        {tools.map((t) => (
          <li key={t.slug} id={t.slug} className="scroll-mt-6 sm:scroll-mt-14">
            <h2 className="font-semibold text-rurikon-600">
              <A href={t.href}>{t.title}</A>
            </h2>
            <p className="mt-2">{t.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
