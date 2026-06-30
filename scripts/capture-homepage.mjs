#!/usr/bin/env node

import { chromium } from "playwright";
import { rm, mkdir } from "node:fs/promises";
import { join, resolve, relative } from "node:path";
import { tmpdir } from "node:os";

const url = process.argv[2] ?? "http://localhost:3000/";
const outputDir = resolve(process.argv[3] ?? join(tmpdir(), "mindwp-homepage-screenshots"));
const workspace = process.cwd();
const outputRelation = relative(workspace, outputDir);

if (!outputRelation || !outputRelation.startsWith("..")) {
  throw new Error(`Screenshot output must stay outside the repo. Use a temp path, not ${outputDir}`);
}

const prefix = join(outputDir, "homepage-audit");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

async function settleScrollAnimations(page) {
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(400);

  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const viewport = page.viewportSize()?.height ?? 900;
  const step = Math.max(Math.floor(viewport * 0.72), 420);

  for (let y = 0; y <= height; y += step) {
    await page.evaluate((nextY) => window.scrollTo({ top: nextY, behavior: "instant" }), y);
    await page.waitForTimeout(180);
  }

  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(450);
}

async function capturePage(browser, name, viewport, options = {}) {
  const page = await browser.newPage({
    viewport,
    deviceScaleFactor: 1,
    isMobile: viewport.width <= 480,
  });

  if (options.reducedMotion) {
    await page.emulateMedia({ reducedMotion: "reduce" });
  }

  await page.goto(url, { waitUntil: "networkidle" });
  await settleScrollAnimations(page);
  await page.screenshot({ path: `${prefix}-${name}.png`, fullPage: true });

  const sections = await page.locator("main > section").all();
  for (let index = 0; index < sections.length; index += 1) {
    await sections[index].screenshot({ path: `${prefix}-${name}-section-${index + 1}.png` });
  }

  await page.close();
}

const browser = await chromium.launch();

await capturePage(browser, "desktop", { width: 1440, height: 1100 });
await capturePage(browser, "mobile", { width: 375, height: 900 });
await capturePage(browser, "desktop-reduced-motion", { width: 1440, height: 1100 }, {
  reducedMotion: true,
});

await browser.close();

console.log(outputDir);
