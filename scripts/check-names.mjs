#!/usr/bin/env node
/**
 * check:names — fails the build if a banned strategy/drift term appears in
 * shipping source. This file is the source of truth for the hard-banned list;
 * CLAUDE.md §4 points here. Comments are neutralised before scanning so
 * renderer briefs can name a term as "avoid".
 *
 * Scans src/ only (TS/TSX/CSS/MJS). Docs are allowed to discuss banned terms.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const ROOT = process.cwd();
const SCAN_DIR = join(ROOT, "src");
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css"]);

/** [regex, human reason]. Case-insensitive unless the term is a slug/route. */
const RULES = [
  [/\bgo\s*high\s*level\b/i, "backend platform name (never public)"],
  [/\bhigh\s*level\b/i, "backend platform name (never public)"],
  [/\bGHL\b/, "backend platform name (never public)"],
  [/ai-lead-handling/i, "removed offer slug"],
  [/crm-automation/i, "removed offer slug"],
  [/growth-revenue-systems/i, "removed offer slug"],
  [/revenue-growth/i, "removed offer name/slug"],
  [/\bAI Lead Handling\b/i, "removed offer label"],
  [/\bCRM & Automation\b/i, "removed offer label"],
  [/\bRevenue Growth\b/i, "removed offer label"],
  [/revenue[\s-]?recovery/i, "Revenue Recovery is a lens, never a structure"],
  [/\/systems\b/, "banned route family"],
  [/\/topics\b/, "banned route family"],
  [/\/portfolio\b/, "banned route family"],
  [/\/blog\/topic\b/, "banned route family"],
  [/\baichat\b/i, "removed slug"],
  [/\bsix (connected )?systems\b/i, "banned offer language (there are five)"],
  [/digital infrastructure consultancy/i, "banned positioning"],
  // Banned CTA labels (docs/PAGES.md · lib/cta) — never an approved CTA label.
  [/\bbook a demo\b/i, "banned CTA label"],
  [/\bfree trial\b/i, "banned CTA label"],
  [/\bget a (free )?quote\b/i, "banned CTA label"],
  [/\bdominate google\b/i, "banned CTA label"],
];

function stripComments(src, isCss) {
  let out = src.replace(/\/\*[\s\S]*?\*\//g, " "); // block comments
  if (!isCss) out = out.replace(/(^|[^:])\/\/[^\n]*/g, "$1 "); // line comments (skip ://)
  return out;
}

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, files);
    else if (EXTS.has(extname(full))) files.push(full);
  }
  return files;
}

let violations = 0;
for (const file of walk(SCAN_DIR)) {
  const raw = readFileSync(file, "utf8");
  const scan = stripComments(raw, extname(file) === ".css");
  const lines = scan.split("\n");
  lines.forEach((line, i) => {
    for (const [re, reason] of RULES) {
      if (re.test(line)) {
        console.error(`✗ ${relative(ROOT, file)}:${i + 1}  — ${reason}`);
        violations++;
      }
    }
  });
}

if (violations > 0) {
  console.error(`\ncheck:names failed — ${violations} banned term(s) in shipping source.`);
  process.exit(1);
}
console.log("check:names passed — no banned terms.");
