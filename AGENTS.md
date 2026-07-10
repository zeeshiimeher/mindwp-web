# MindWP Agent Guidance

MindWP is a premium web-systems company for established service businesses and specialist clinics. The strategy and writing rules are strong; the rebuild risk is execution: generic layouts, weak commercial meaning, stale page history, and old visual shells returning.

## Current Repo State

- The repo is reset to a clean page surface.
- Active public routes under `src/app/**/page.tsx` intentionally render `null`.
- Old active page sections were removed.
- Shared shell, primitives, tokens, route config, canonical config, contact code, SEO helpers, and validation scripts remain.
- `_dev-reference/current-site/` is ignored by normal tooling. Do not read or search it unless the user explicitly asks for the reference copy.


## Docs Routing

- Homepage standalone build brief: `docs/HOME-PLAN.md`
- Identity and buyer truth: `docs/FOUNDATION.md`
- Offer model, systems, proof model, conversion strategy: `docs/STRATEGY.md`
- Page roles, IA, CTA posture, rebuild planning: `docs/PAGES.md`
- Public language and copy validation: `docs/WRITING.md`
- Practical design-system and CSS usage guide: `docs/DESIGN-SYSTEM.md`
- Current code structure and technical rationale: `docs/ARCHITECTURE.md`



## Validation

- Guidance/docs-only changes: `git diff --check`.
- Page/component/source changes: `pnpm check`, then `pnpm build`, then `pnpm test`.
- Visual page changes also require rendered screenshots and section crops before approval: desktop `1440px` and `1280px`, mobile `400px`, and tablet `1024px` when nav, media, grids, multi-column sections, or major responsive structure change.

## Reporting

Every report must end with:

- `What is done`
- `What is next`
