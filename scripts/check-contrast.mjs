import { readFileSync } from "node:fs";

const css = readFileSync("src/styles/tokens.css", "utf8");

const rawTokens = new Map();
for (const match of css.matchAll(/--([a-z0-9-]+):\s*([^;]+);/gi)) {
  rawTokens.set(match[1], match[2].trim());
}

function resolveToken(name, seen = new Set()) {
  if (seen.has(name)) throw new Error(`Circular token reference: ${[...seen, name].join(" -> ")}`);
  const tokenName = rawTokens.has(name) ? name : `color-${name}`;
  const raw = rawTokens.get(tokenName);
  if (!raw) throw new Error(`Missing token: ${name}`);
  const varMatch = raw.match(/^var\(--([a-z0-9-]+)\)$/i);
  if (varMatch) return resolveToken(varMatch[1], new Set([...seen, tokenName]));
  return raw;
}

function hexToRgb(value) {
  const hex = value.trim();
  if (!/^#[0-9a-f]{3,8}$/i.test(hex)) throw new Error(`Expected hex colour, got ${value}`);
  const full =
    hex.length === 4
      ? `#${hex
          .slice(1)
          .split("")
          .map((c) => c + c)
          .join("")}`
      : hex.slice(0, 7);
  return full
    .slice(1)
    .match(/../g)
    .map((part) => Number.parseInt(part, 16) / 255);
}

function luminance(tokenName) {
  const [r, g, b] = hexToRgb(resolveToken(tokenName)).map((channel) =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(foreground, background) {
  const a = luminance(foreground);
  const b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

const lightSurfaces = ["page", "section", "raised", "band", "emerald-soft"];
const navySurfaces = ["navy", "navy-soft", "navy-raised"];

const checks = [
  ...lightSurfaces.flatMap((surface) =>
    ["ink", "muted", "subtle", "emerald-text"].map((text) => ({
      foreground: text,
      background: surface,
      threshold: 4.5,
      label: `${text} on ${surface}`,
    })),
  ),
  ...navySurfaces.flatMap((surface) =>
    ["ink-inverse", "muted-inverse", "emerald"].map((text) => ({
      foreground: text,
      background: surface,
      threshold: 4.5,
      label: `${text} on ${surface}`,
    })),
  ),
  {
    foreground: "warning",
    background: "section",
    threshold: 4.5,
    label: "warning on section",
  },
  {
    foreground: "warning",
    background: "warning-surface",
    threshold: 4.5,
    label: "warning on warning surface",
  },
  {
    foreground: "danger",
    background: "section",
    threshold: 4.5,
    label: "danger on section",
  },
  {
    foreground: "danger",
    background: "danger-surface",
    threshold: 4.5,
    label: "danger on danger surface",
  },
  {
    foreground: "disabled-text",
    background: "disabled-bg",
    threshold: 4.5,
    label: "disabled light",
  },
  {
    foreground: "disabled-text-on-dark",
    background: "disabled-bg-on-dark",
    threshold: 4.5,
    label: "disabled dark",
  },
  ...lightSurfaces.map((surface) => ({
    foreground: "focus-light",
    background: surface,
    threshold: 3,
    label: `focus-light on ${surface}`,
  })),
  ...navySurfaces.map((surface) => ({
    foreground: "focus-dark",
    background: surface,
    threshold: 3,
    label: `focus-dark on ${surface}`,
  })),
  {
    foreground: "navy",
    background: "emerald",
    threshold: 4.5,
    label: "navy on emerald",
  },
];

const failures = [];
for (const check of checks) {
  const value = ratio(check.foreground, check.background);
  const line = `${check.label}: ${value.toFixed(2)} (min ${check.threshold})`;
  if (value < check.threshold) failures.push(line);
  console.log(line);
}

if (failures.length) {
  console.error(`\ncheck:contrast failed (${failures.length} pairing(s))`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\ncheck:contrast passed.");
