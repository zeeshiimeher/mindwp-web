# MindWP

The marketing website for MindWP, and the guidance that governs its rebuild.

The active repo is currently reset to a clean page surface: public page routes exist, but their `page.tsx` files render `null`. The old renderable site is preserved outside Git at `_dev-reference/current-site/` for opt-in reference only.

## Guidance Architecture

**Router**

- `AGENTS.md` is the first file to read. It explains the current repo state, task routing, non-negotiables, validation, and reporting.

**Local skills**

- `.agents/skills/mindwp-page-rebuild/SKILL.md` owns page rebuild workflow and page-level planning.
- `.agents/skills/mindwp-design/SKILL.md` owns visual planning and screenshot audit rules.
- `.agents/skills/mindwp-css/SKILL.md` owns semantic markup, CSS modules, responsive layout, and spacing.
- `.agents/skills/mindwp-engineering/SKILL.md` owns Next/App Router architecture, components, typed contracts, and validation gates.
- `.agents/skills/mindwp-writing/SKILL.md` owns copy and claim guardrails.
- `.agents/skills/mindwp-motion/SKILL.md` owns animation and interaction boundaries.

**Reference docs**

- `docs/FOUNDATION.md` owns identity, positioning, buyer truth, and what MindWP is not.
- `docs/STRATEGY.md` owns the offer model, five systems, proof model, conversion strategy, and market/industry posture.
- `docs/WRITING.md` owns public language, voice, copy validation, and claim boundaries.
- `docs/PAGES.md` owns page roles, IA intent, CTA posture, and rebuild planning logic.
- `docs/ARCHITECTURE.md` owns technical rationale and current code structure.

## Source Of Truth

- `src/styles/tokens.css` — design token values.
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

## Principles

- Skills decide execution.
- Docs explain strategy, writing, page roles, and architecture.
- Source files own machine facts.
- Do not revive old visual shells from the reference copy.
- Do not read or search `_dev-reference/` unless the user explicitly requests it.
