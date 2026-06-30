---
name: mindwp-engineering
description: MindWP Next.js/App Router architecture and validation rules. Use when editing routes, components, shared primitives, typed contracts, SEO/contact code, or build gates.
---

# MindWP Engineering

MindWP uses Next.js App Router with a clean page surface, shared shell, tokens, route config, canonical config, SEO helpers, contact code, and validation scripts.

## Boundaries

- Do not touch `_dev-reference/` unless the user explicitly asks.
- Do not copy old visual shells from the reference site.
- Do not edit routes, tokens, or shared primitives unless the task scope includes them.
- Keep strategy/copy claims aligned with `docs/STRATEGY.md` and `docs/WRITING.md`.

## Architecture

- Routes stay thin: metadata, JSON-LD, page-level data decisions, and section rendering.
- Use React Server Components by default.
- Add client components only for real interactivity, browser APIs, or earned motion.
- Sections own layout and content.
- Use `.agents/skills/mindwp-css/SKILL.md` for global CSS foundations, page-level CSS, layout mechanics, responsive behavior, and semantic markup rules.
- Stable contracts stay typed: routes, canonical systems/industries, CTA labels, SEO inputs, forms.
- Do not introduce broad abstractions until repeated rebuilt sections prove the need.

## Components

- Build section-specific components for premium page sections.
- Use shared primitives as infrastructure, not visual taste.
- Do not recreate removed generic visual primitives such as standard section headers, split layouts, equal grids, card shells, browser chrome, or old `_components`.
- Do not fragment styling into section CSS modules by default. Prefer a coherent page styling system, with modules only when isolation is cleaner.
- Keep imports local and obvious.

## Validation

- Guidance/docs-only changes: `git diff --check`.
- Code/page/component changes: `pnpm check`, then `pnpm build`, then `pnpm test`.
- Visual page changes also need desktop/mobile screenshots and section crops.
- If a gate fails, fix the cause or report the exact blocker.
