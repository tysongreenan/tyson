#!/usr/bin/env node
// Count every token my coding agents have used and write content/token-usage.json for the site.
// Run: pnpm tokens
//
// Source: T3 Code's usage cache (~/.t3/userdata/usage-scan-cache-v17.json). It keeps per-message usage for
// Claude Code, Codex and Grok sessions, including sessions whose own log files have since been cleaned up,
// so it reaches further back than the raw logs. Row columns, checked against raw Claude Code logs
// (message.usage, deduplicated by message id): [0] timestamp ms, [1]+[2] fresh input, [4] cache read,
// [5] cache write, [6] output. Cursor keeps no per-message counts on disk, so it is not included.

import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const cachePath = join(homedir(), ".t3", "userdata", "usage-scan-cache-v17.json");
const cache = JSON.parse(readFileSync(cachePath, "utf8"));

const names = { claude: "Claude Code", codex: "Codex", grok: "Grok" };
const providers = {};
let earliest = Infinity;
const num = (v) => (typeof v === "number" && Number.isFinite(v) ? v : 0);

for (const file of Object.values(cache.files)) {
  const rows = typeof file.r === "string" ? JSON.parse(file.r) : file.r;
  if (!rows?.length) continue;
  const key = names[file.p] ?? file.p;
  const p = (providers[key] ??= { input: 0, cacheRead: 0, cacheWrite: 0, output: 0, messages: 0, sessions: 0 });
  p.sessions += 1;
  for (const r of rows) {
    p.input += num(r[1]) + num(r[2]);
    p.cacheRead += num(r[4]);
    p.cacheWrite += num(r[5]);
    p.output += num(r[6]);
    p.messages += 1;
    if (num(r[0]) && r[0] < earliest) earliest = r[0];
  }
}

for (const p of Object.values(providers)) p.total = p.input + p.cacheRead + p.cacheWrite + p.output;
const all = Object.values(providers);
const sum = (k) => all.reduce((n, p) => n + p[k], 0);

const result = {
  asOf: new Date().toISOString().slice(0, 10),
  since: Number.isFinite(earliest) ? new Date(earliest).toISOString().slice(0, 10) : null,
  total: sum("total"),
  cacheRead: sum("cacheRead"),
  output: sum("output"),
  messages: sum("messages"),
  sessions: sum("sessions"),
  providers,
};

writeFileSync(new URL("../content/token-usage.json", import.meta.url), JSON.stringify(result, null, 2) + "\n");
console.log(JSON.stringify(result, null, 2));
