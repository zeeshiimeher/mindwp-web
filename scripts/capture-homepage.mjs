#!/usr/bin/env node

import { mkdir, rm } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { tmpdir } from "node:os";
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:3000/";
const outputDir = resolve(process.argv[3] ?? join(tmpdir(), "mindwp-homepage-screenshots"));
const outputRelation = relative(process.cwd(), outputDir);

if (!outputRelation || !outputRelation.startsWith("..")) {
  throw new Error(`Screenshot output must stay outside the repository: ${outputDir}`);
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();

async function settle(page) {
  await page.waitForLoadState("networkidle");
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const step = Math.max(Math.floor((page.viewportSize()?.height ?? 900) * 0.7), 420);

  for (let y = 0; y <= height; y += step) {
    await page.evaluate((nextY) => window.scrollTo({ top: nextY, behavior: "instant" }), y);
    await page.waitForTimeout(120);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(250);
}

async function capture(name, width, height, reducedMotion = false) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  if (reducedMotion) await page.emulateMedia({ reducedMotion: "reduce" });

  await page.goto(url, { waitUntil: "networkidle" });
  await settle(page);

  const prefix = join(outputDir, `homepage-${name}`);
  await page.screenshot({ path: `${prefix}.png`, fullPage: true });

  const sections = await page.locator("main > section").all();
  for (let index = 0; index < sections.length; index += 1) {
    await sections[index].screenshot({ path: `${prefix}-section-${index + 1}.png` });
  }

  await page.close();
}

await capture("1440", 1440, 1100);
await capture("1280", 1280, 960);
await capture("1024", 1024, 900);
await capture("400", 400, 860);
await capture("1440-reduced-motion", 1440, 1100, true);
await capture("400-reduced-motion", 400, 860, true);

await browser.close();
console.log(outputDir);
