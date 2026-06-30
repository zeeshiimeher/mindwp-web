import { readFileSync } from "node:fs";
import { join } from "node:path";

import { expect, test } from "@playwright/test";

// axe-core ships a standalone build; inject it rather than depend on a wrapper.
const axeSource = readFileSync(join(process.cwd(), "node_modules/axe-core/axe.min.js"), "utf8");

type AxeViolation = { id: string; impact: string | null };
type AxeResult = { violations: AxeViolation[] };

const PAGES: { path: string; disableRules?: string[] }[] = [
  { path: "/" },
  { path: "/services/smart-website-systems" },
  { path: "/services/local-seo-authority" },
  { path: "/services/lead-response-handling" },
  { path: "/services/follow-up-crm" },
  { path: "/services/reputation-review-systems" },
  { path: "/services/wordpress-development" },
  { path: "/services/elementor" },
  { path: "/services/bricks-builder" },
  { path: "/services/divi5" },
  { path: "/services/woocommerce" },
  { path: "/services/website-redesign-system-rebuild" },
  { path: "/industries/healthcare-practices/dental-implant" },
  { path: "/industries/healthcare-practices/orthodontic" },
  { path: "/industries/healthcare-practices/oral-surgery" },
  { path: "/industries/healthcare-practices/dermatology" },
  { path: "/contact" },
  { path: "/style-guide" },
];

for (const { path, disableRules = [] } of PAGES) {
  test(`a11y: ${path} has no serious/critical violations`, async ({ page }) => {
    // Audit the settled, accessible rendering. Reveal-on-scroll pre-hides
    // off-screen content with opacity:0 (only under prefers-reduced-motion:
    // no-preference). axe runs before any scroll, so it would misread those
    // not-yet-revealed elements as zero-contrast. Emulating reduced motion
    // disables the pre-hidden state (see styles/motion.css) so axe evaluates
    // the real, final colours — which is the state a reduced-motion user sees.
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(path);
    await page.addScriptTag({ content: axeSource });

    const result = (await page.evaluate(async (rules: string[]) => {
      const opts: Record<string, unknown> = { resultTypes: ["violations"] };
      if (rules.length) {
        opts.rules = Object.fromEntries(rules.map((r) => [r, { enabled: false }]));
      }
      const w = window as unknown as {
        axe: { run: (ctx: Document, opts: object) => Promise<unknown> };
      };
      return await w.axe.run(document, opts);
    }, disableRules)) as AxeResult;

    const serious = result.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical",
    );
    expect(serious.map((v) => v.id)).toEqual([]);
  });
}
