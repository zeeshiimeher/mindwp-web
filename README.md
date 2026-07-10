# MindWP

The marketing website for MindWP, and the guidance that governs its rebuild.

The active repo is currently reset to a clean page surface: public page routes exist, but their `page.tsx` files render `null`. The old renderable site is preserved outside Git at `_dev-reference/current-site/` for opt-in reference only.

## Guidance Architecture

**Router**

- `AGENTS.md` is the first file to read. It explains the current repo state, task routing, non-negotiables, validation, and reporting.


**Reference docs**

- `docs/FOUNDATION.md` owns identity, positioning, buyer truth, and what MindWP is not.
- `docs/STRATEGY.md` owns the offer model, five systems, proof model, conversion strategy, and market/industry posture.
- `docs/WRITING.md` owns public language, voice, copy validation, and claim boundaries.
- `docs/PAGES.md` owns page roles, IA intent, CTA posture, and rebuild planning logic.
- `docs/DESIGN-SYSTEM.md` owns practical CSS/design-system usage, type roles, spacing, page CSS conventions, media handling, and rendered QA widths.
- `docs/ARCHITECTURE.md` owns technical rationale and current code structure.

## Source Of Truth

- `src/styles/tokens.css` — design token values.
- `docs/DESIGN-SYSTEM.md` — practical guide for using the CSS system.
- `src/content/canonical.ts` — systems and industries allow-list.
- `src/config/routes.ts` — intended route/nav/sitemap registry.
- `src/config/site.ts` — site identity.
- `src/lib/cta` — approved CTA labels.
- `scripts/check-names.mjs` — banned terms, removed names, and route naming checks.

## Current Rebuild State

- Active page routes are intentionally empty.
- Shared app shell, styles, primitives, SEO helpers, route config, canonical config, contact code, and validation scripts remain.
- Old page sections were removed from active source.
- `_dev-reference/current-site/` is ignored by normal repo tooling and is not an active guidance source.


