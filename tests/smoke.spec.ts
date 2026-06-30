import { expect, test } from "@playwright/test";

const PAGES = ["/", "/contact", "/style-guide"];

for (const path of PAGES) {
  test(`${path} renders cleanly`, async ({ page }) => {
    const jsErrors: string[] = [];
    const brokenResources: string[] = [];

    page.on("pageerror", (e) => jsErrors.push(e.message));
    page.on("response", (r) => {
      // Ignore speculative RSC route prefetches (`?_rsc=`) — Next prefetches nav
      // links, some of which point at pages not built until Phase 2a. Those
      // aren't resources THIS page actually needs.
      if (r.status() >= 400 && !r.url().includes("_rsc=")) {
        brokenResources.push(`${r.status()} ${r.url()}`);
      }
    });

    const res = await page.goto(path);
    expect(res?.status(), `HTTP status for ${path}`).toBeLessThan(400);
    expect(jsErrors, `uncaught JS errors on ${path}`).toEqual([]);
    expect(brokenResources, `broken (non-prefetch) resources on ${path}`).toEqual([]);
  });
}

test("home shows the primary CTA", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "Request a Website Review" }).first()).toBeVisible();
});

test("skip-link is the first focusable element", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
});
