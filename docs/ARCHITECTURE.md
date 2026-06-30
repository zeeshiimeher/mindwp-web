# ARCHITECTURE — current code shape and technical rationale

This doc explains the current repo shape and technical rationale. It is reference material, not the implementation checklist. Use `.agents/skills/mindwp-engineering/SKILL.md` for App Router/component architecture, `.agents/skills/mindwp-css/SKILL.md` for CSS/layout rules, and `.agents/skills/mindwp-page-rebuild/SKILL.md` for page workflow.

## Current State

The repo has been reset to a clean page surface:

- Active public page routes exist under `src/app/**/page.tsx`.
- Those route files intentionally render `null`.
- Old active page sections were removed from `src/components/sections`.
- Shared shell, primitives, tokens, motion helpers, route config, canonical config, SEO helpers, contact code, and validation scripts remain.
- `_dev-reference/current-site/` preserves the previous site as a standalone ignored reference copy.

The reference copy is not active source. Do not import from it, lint it, search it, or treat its docs/skills as current guidance unless the user explicitly asks to inspect the reference copy.

## Stack

| Layer             | Choice                                                                                        |
| ----------------- | --------------------------------------------------------------------------------------------- |
| Framework         | Next.js App Router + React + TypeScript                                                       |
| Styling           | Tailwind v4 plus CSS-variable tokens; rebuilt visual work should use a strong global foundation plus readable page CSS |
| Fonts             | `next/font/google`: Fraunces and Inter                                                        |
| Forms             | Server actions + zod + Resend + Cloudflare Turnstile                                          |
| SEO               | Metadata API + JSON-LD helpers + generated sitemap/robots                                     |
| Quality           | ESLint, TypeScript, banned-name checks, contrast checks, Playwright smoke/a11y tests          |
| Deployment target | Cloudflare/OpenNext config remains in the repo                                                |

## Active Folder Map

```text
src/
  app/         App Router shell, route files, sitemap, robots, manifest, errors, icon, OG image
  components/  shared UI, layout, forms, motion, JsonLd, Breadcrumbs
  config/      site identity, route/nav registry, env parsing
  content/     canonical systems and industries allow-lists
  lib/         CTA labels, contact helpers, SEO helpers, utilities
  styles/      tokens, typography, layout, buttons, motion
docs/          strategy, writing, page, and architecture reference
.agents/      local MindWP skills
```

`src/components/sections/` is intentionally absent until new page sections are built.

## Source Of Truth

- `src/styles/tokens.css` owns design token values.
- `src/content/canonical.ts` owns systems and industries.
- `src/config/routes.ts` owns intended route/nav/sitemap structure.
- `src/config/site.ts` owns public site identity.
- `src/lib/cta` owns approved CTA labels.
- `scripts/check-names.mjs` owns enforced banned names/routes/terms.

During the reset state, route config and canonical config may describe intended future routes that do not yet have rebuilt page content. That is acceptable, but agents must not treat empty pages as finished pages.

## Rebuild Architecture

Routes should stay thin:

- metadata
- JSON-LD where needed
- page-level data decisions
- section rendering

Sections should own their layout and content. There is deliberately no rigid shared content model for marketing sections. Stable contracts stay typed; section presentation can remain local.

Rebuilt premium sections should use:

- section-specific React components
- readable page-level CSS by default
- section CSS modules only when isolation is genuinely cleaner
- existing tokens and typography roles
- shared primitives only when they support the section rather than flatten it

Avoid recreating removed generic visual primitives: standard section headers, split layouts, equal grids, card shells, browser chrome, or old reference-copy section patterns.

## CSS Model

- `src/styles/tokens.css` exposes color, type, spacing, radius, shadow, and motion tokens.
- `src/styles/typography.css` owns semantic type roles.
- `src/styles/layout.css` owns section, container, text-width, and small surface helpers.
- `src/styles/buttons.css` supports the `Button` component.
- `src/styles/motion.css` supports shared reveal/motion hooks.

Global CSS should provide the shared foundation. Page-specific rhythm, artifacts, responsive rules, and visual detail belong in readable page CSS, with section modules used only when they are cleaner.

## Forms And Contact

The contact path remains the main dynamic surface:

- server action in `src/app/contact/actions.ts`
- zod validation in `src/lib/contact/schema.ts`
- contact URL attribution in `src/lib/contact/contactHref.ts`
- env parsing in `src/config/env.ts`

The contact form should remain the only public write path unless the project scope explicitly changes.

## SEO And Routing

- `src/lib/seo/metadata.ts` builds shared metadata.
- `src/lib/seo/schema.ts` builds JSON-LD.
- `src/app/sitemap.ts` derives routes from `src/config/routes.ts`.
- `src/app/robots.ts` owns robots output.

Structured data must not invent proof, ratings, results, reviews, or claims.

## Motion Model

The shared motion layer remains:

- `src/components/motion/Reveal.tsx`
- `src/components/motion/RevealMotion.tsx`
- `src/styles/motion.css`

Motion must keep content visible by default, respect reduced motion, and avoid reveal-gating LCP content. Section-specific GSAP or heavier animation belongs in isolated client islands only when justified.

## Validation

Use the gates from `.agents/skills/mindwp-engineering/SKILL.md`:

- Guidance/docs-only changes: `git diff --check`.
- Page/component changes: `pnpm check`, then `pnpm build`, then `pnpm test`.
- Visual page changes: desktop/mobile screenshots and section crops before approval.

`pnpm check` currently covers typecheck, lint, banned-name checks, and contrast checks. `pnpm test` runs Playwright smoke/a11y coverage.

## Reference Copy

`_dev-reference/current-site/` is a standalone ignored copy of the previous site. It exists so the old pages can be run and inspected without keeping old sections in active source.

Only use it when explicitly requested, for:

- content reference
- old-vs-new comparison
- checking what not to repeat

Do not use it for:

- active imports
- current docs/skills authority
- search-driven implementation defaults
- restoring old visual shells
