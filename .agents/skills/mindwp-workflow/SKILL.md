---
name: mindwp-workflow
description: MindWP task flow for guidance changes, page planning, page rebuilds, section sequencing, QA planning, and scoped implementation.
---

# MindWP Workflow

MindWP rebuild work starts with judgment, not JSX. A fresh Codex chat should be able to move from task scope to page plan, implementation, and validation without reopening old site history.

## Start Here

Read:

- `AGENTS.md`
- `docs/FOUNDATION.md` for identity and buyer truth
- `docs/STRATEGY.md` for offer ownership and system boundaries
- `docs/PAGES.md` for page roles, IA, and CTA posture
- `docs/WRITING.md` when public copy is written or audited
- `docs/DESIGN-SYSTEM.md` when CSS foundation, page styling, typography, media handling, or responsive QA targets are in scope
- `docs/ARCHITECTURE.md` when source structure, routing, shell, or validation is unclear

Do not read `_dev-reference/` unless the user explicitly asks for it.

## Scope Lock

Before acting, identify the task type:

- guidance/docs only
- page planning only
- page rebuild or section implementation
- shell/header/footer/component work
- CSS foundation work
- copy/proof/CTA work
- QA or visual audit

Do not expand scope silently. Routes, shared primitives, tokens, shell, and global CSS can be changed when the task includes that scope or the current page cannot be completed well without it.

If the current header, footer, or shell weakens the scoped page, add shell implications to the plan or report that shell work is needed before approval.

## Page Plan Before Code

For any page plan or rebuild, lock these decisions before implementation:

- page role and intended buyer moment
- what is slipping in that moment
- what MindWP changes
- what real proof or evidence supports the claim
- whether supporting media or a visual treatment is needed
- section jobs and order
- CTA posture and where the primary CTA appears
- composition, hierarchy, dominance, rhythm, and mobile behavior
- styling approach: global foundation changes, page CSS, isolated modules if needed
- component/shell implications
- QA plan: viewport checks, section crops, validation commands

If the page cannot answer these clearly, keep planning. Do not start implementation because a route is empty.

## Section Planning

For each important section, define:

- section job
- buyer message
- role in the page arc
- composition and visual form
- hierarchy and dominance
- proof or media need, if any
- relationship to adjacent sections
- mobile behavior
- fail conditions

A section may use text, media, screenshots, illustration, cards, lists, diagrams, strong typography, or no supporting visual. Decide from the section job during planning.

## Build Sequence

1. Lock the page role and buyer moment.
2. Lock section jobs and order.
3. Lock composition, copy, proof/media needs, CTA, and CSS/component approach.
4. Build in meaningful slices.
5. Validate code after source changes.
6. Render and audit visual work.
7. Revise sections whose meaning, hierarchy, or mobile behavior is weak.

Home is the default taste gate unless the user explicitly scopes a narrower target.

## Completion Gates

Guidance/docs-only changes:

- run `git diff --check`

Source/page/component changes:

- run `pnpm check`
- run `pnpm build`
- run `pnpm test`

Visual changes:

- render desktop at 1440px and 1280px
- render mobile at 400px
- render tablet at 1024px when nav, media, grids, multi-column sections, or major responsive structure change
- capture important section crops
- run the checks in `mindwp-qa`

Passing build is not visual approval.
