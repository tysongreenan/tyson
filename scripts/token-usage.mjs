#!/usr/bin/env node
// Count every token my coding agents have used and write content/token-usage.json for the site.
// Run: pnpm tokens
//
// Two sources, deduplicated by message id + request id:
// 1. Live session logs (always current):
//    - Claude Code ~/.claude/projects/**/*.jsonl: each assistant message's `usage`.
//    - Codex ~/.codex/sessions/**/*.jsonl: the last running `total_token_usage` in each session.
// 2. T3 Code's usage cache (~/.t3/userdata/usage-scan-cache-v17.json) for sessions whose log files
//    have since been cleaned up, plus Grok. It is only refreshed now and then, which is why live logs come first.
//    Row columns, checked against raw Claude Code logs: [0] timestamp ms, [1]+[2] fresh input,
//    [4] cache read, [5] cache write, [6] output, [8] "messageId:requestId".
// Cursor keeps no per-message counts on disk, so it is not included.

import { createReadStream, existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { createInterface } from "node:readline";

const home = homedir();
const blank = () => ({ input: 0, cacheRead: 0, cacheWrite: 0, output: 0, messages: 0, sessions: 0 });
const providers = { "Claude Code": blank(), Codex: blank(), Grok: blank() };
const seen = new Set();
let earliest = Infinity;
const stamp = (ms) => {
  if (ms && ms < earliest) earliest = ms;
};
const num = (v) => (typeof v === "number" && Number.isFinite(v) ? v : 0);

function files(dir) {
  const out = [];
  let entries = [];
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...files(p));
    else if (e.name.endsWith(".jsonl")) out.push(p);
  }
  return out;
}

async function lines(file, fn) {
  const rl = createInterface({ input: createReadStream(file), crlfDelay: Infinity });
  for await (const line of rl) if (line) fn(line);
}

// 1a. Claude Code live logs.
const liveFiles = new Set();
for (const f of files(join(home, ".claude", "projects"))) {
  liveFiles.add(f);
  const p = providers["Claude Code"];
  let counted = false;
  await lines(f, (line) => {
    if (!line.includes('"usage"')) return;
    let row;
    try {
      row = JSON.parse(line);
    } catch {
      return;
    }
    const u = row?.message?.usage;
    const id = row?.message?.id;
    if (!u || !id) return;
    const key = `${id}:${row.requestId ?? ""}`;
    if (seen.has(key)) return;
    seen.add(key);
    p.input += num(u.input_tokens);
    p.cacheWrite += num(u.cache_creation_input_tokens);
    p.cacheRead += num(u.cache_read_input_tokens);
    p.output += num(u.output_tokens);
    p.messages += 1;
    stamp(Date.parse(row.timestamp));
    counted = true;
  });
  if (counted) p.sessions += 1;
}

// 1b. Codex live logs.
for (const f of files(join(home, ".codex", "sessions"))) {
  liveFiles.add(f);
  let last = null;
  let first = null;
  let turns = 0;
  await lines(f, (line) => {
    if (!line.includes('"total_token_usage"')) return;
    try {
      const row = JSON.parse(line);
      const t = row?.payload?.info?.total_token_usage;
      if (t) {
        last = t;
        first ??= Date.parse(row.timestamp);
        turns += 1;
      }
    } catch {
      /* skip a bad line */
    }
  });
  if (!last) continue;
  const p = providers.Codex;
  // Codex input_tokens includes the cached part.
  p.input += num(last.input_tokens) - num(last.cached_input_tokens);
  p.cacheRead += num(last.cached_input_tokens);
  p.output += num(last.output_tokens);
  p.messages += turns;
  p.sessions += 1;
  stamp(first);
}

// 2. T3's cache: only sessions not read live above, skipping messages already counted.
const cachePath = join(home, ".t3", "userdata", "usage-scan-cache-v17.json");
if (existsSync(cachePath)) {
  const cache = JSON.parse(readFileSync(cachePath, "utf8"));
  const names = { claude: "Claude Code", codex: "Codex", grok: "Grok" };
  for (const [path, file] of Object.entries(cache.files)) {
    if (liveFiles.has(path)) continue;
    const name = names[file.p];
    if (!name) continue;
    const rows = typeof file.r === "string" ? JSON.parse(file.r) : file.r;
    if (!rows?.length) continue;
    const p = providers[name];
    let counted = false;
    for (const r of rows) {
      const key = typeof r[8] === "string" ? r[8] : null;
      if (key) {
        if (seen.has(key)) continue;
        seen.add(key);
      }
      p.input += num(r[1]) + num(r[2]);
      p.cacheRead += num(r[4]);
      p.cacheWrite += num(r[5]);
      p.output += num(r[6]);
      p.messages += 1;
      stamp(num(r[0]));
      counted = true;
    }
    if (counted) p.sessions += 1;
  }
}

for (const [name, p] of Object.entries(providers)) {
  p.total = p.input + p.cacheRead + p.cacheWrite + p.output;
  if (!p.total) delete providers[name];
}
const all = Object.values(providers);
const sum = (k) => all.reduce((n, p) => n + p[k], 0);

const result = {
  // Local dates (en-CA formats as YYYY-MM-DD), so "Updated" matches the day on this Mac.
  asOf: new Date().toLocaleDateString("en-CA"),
  since: Number.isFinite(earliest) ? new Date(earliest).toLocaleDateString("en-CA") : null,
  total: sum("total"),
  cacheRead: sum("cacheRead"),
  output: sum("output"),
  messages: sum("messages"),
  sessions: sum("sessions"),
  providers,
};

writeFileSync(new URL("../content/token-usage.json", import.meta.url), JSON.stringify(result, null, 2) + "\n");
console.log(JSON.stringify(result, null, 2));
