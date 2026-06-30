# MindWP Agent Guidance

MindWP is a premium web-systems company for established service businesses and specialist clinics. The strategy and writing rules are strong; the rebuild risk is execution: generic layouts, weak artifacts, stale page history, and old visual shells returning.

## Current Repo State

- The repo is reset to a clean page surface.
- Active public routes under `src/app/**/page.tsx` intentionally render `null`.
- Old active page sections were removed.
- Shared shell, primitives, tokens, route config, canonical config, contact code, SEO helpers, and validation scripts remain.
- `_dev-reference/current-site/` is ignored by normal tooling. Do not read or search it unless the user explicitly asks for the reference copy.

## Start Here

- Read this file first.
- Use only local MindWP skills for default repo guidance.
- Do not add external or generic skill routing here. External references may inform local skill rewrites only; MindWP local skills remain the operating system.
- Do not rebuild pages or change routes unless the task explicitly asks for that scope.
- Do not change tokens, global CSS, shared primitives, header, footer, or shell casually. They may be changed when explicitly scoped or when necessary to complete the scoped task well; report why if changed for necessity.

## Skill Routing

- Task flow, page planning, rebuild sequencing, QA planning: `.agents/skills/mindwp-workflow/SKILL.md`
- Visual thesis, section silhouette, artifacts, screenshot audit: `.agents/skills/mindwp-design/SKILL.md`
- CSS foundation, page-level styling, semantic markup, responsive layout, spacing: `.agents/skills/mindwp-css/SKILL.md`
- Next/App Router architecture, routes, components, typed contracts, validation: `.agents/skills/mindwp-engineering/SKILL.md`
- Shell, primitives, header, footer, nav, buttons, forms, repeated UI: `.agents/skills/mindwp-components/SKILL.md`
- Public copy, proof/CTA language, claim boundaries: `.agents/skills/mindwp-writing/SKILL.md`
- Motion, transitions, scroll behavior, reduced motion: `.agents/skills/mindwp-motion/SKILL.md`
- Rendered QA, screenshots, responsive checks, accessibility, validation: `.agents/skills/mindwp-qa/SKILL.md`

## Docs Routing

- Identity and buyer truth: `docs/FOUNDATION.md`
- Offer model, systems, proof model, conversion strategy: `docs/STRATEGY.md`
- Page roles, IA, CTA posture, rebuild planning: `docs/PAGES.md`
- Public language and copy validation: `docs/WRITING.md`
- Practical design-system and CSS usage guide: `docs/DESIGN-SYSTEM.md`
- Current code structure and technical rationale: `docs/ARCHITECTURE.md`

## Non-Negotiables

- Clear commercial meaning first. Premium visual design second. Abstract concepts last.
- Public copy starts with working-day problems, then names the website system and connected handling.
- Do not invent proof, metrics, rankings, testimonials, client names, locations, ratings, guarantees, or fake case-study evidence.
- Do not make MindWP sound like a SaaS product, AI chatbot vendor, CRM reseller, ads agency, ranking-hype SEO firm, quote tool, or invoice platform.
- Do not publicly name backend platforms or white-label delivery names.
- Do not write or imply "your CRM"; ownership language belongs to the website, domain, content, enquiries, work, and data.
- If a visual form is weak, rebuild the form. Do not polish a bad shell.

## Rebuild Rules

- Home is the default taste gate unless the user explicitly scopes a narrower target.
- Old pages may be used only when the user explicitly requests `_dev-reference/`.
- Do not copy old visual shells into active source.
- Every important section needs a visual thesis before code.
- Rebuilt pages should use a strong global CSS foundation plus 1-3 readable page CSS files where practical.
- Section CSS modules are optional and should be used only when isolation is genuinely cleaner.
- Global CSS may own tokens, type roles, layout primitives, surface roles, buttons, motion hooks, and reusable helper classes.
- Cards, lists, grids, browser/page frames, split layouts, panels, icons, simple editorial sections, and motion are allowed when the section job earns them.
- Do not default to generic page forms without a visual thesis.
- Header, footer, shell, and primitives may be improved or rebuilt when the task scope includes them.

## Validation

- Guidance/docs-only changes: `git diff --check`.
- Page/component/source changes: `pnpm check`, then `pnpm build`, then `pnpm test`.
- Visual page changes also require rendered screenshots and section crops before approval: desktop `1440px` and `1280px`, mobile `400px`, and tablet `1024px` when nav, artifacts, grids, multi-column sections, or major responsive structure change.

## Reporting

Every report must end with:

- `What is done`
- `What is next`
