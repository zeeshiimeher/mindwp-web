---
name: mindwp-workflow
description: MindWP task flow for page planning, page rebuilds, section sequencing, QA planning, and guidance-only changes. Use before rebuilding or planning any page, route surface, section set, flagship/proof/CTA sequence, or local guidance update.
---

# MindWP Workflow

MindWP rebuild work starts with judgment, not JSX. A fresh Codex chat should be able to read this skill and know how to move from task scope to page plan, implementation, and validation without reopening old site history.

## Start Here

Read:

- `AGENTS.md`
- `docs/FOUNDATION.md` for identity and buyer truth
- `docs/STRATEGY.md` for offer ownership and system boundaries
- `docs/PAGES.md` for page roles, IA, and CTA posture
- `docs/WRITING.md` when public copy is written or audited
- `docs/DESIGN-SYSTEM.md` when CSS foundation, page styling, typography, or responsive QA targets are in scope
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

## Page Frame Before Code

For any page plan or rebuild, lock these decisions before implementation:

- page role and intended buyer moment
- what is slipping in that moment
- what MindWP changes
- proof, demonstration work, or artifact that makes the claim believable
- section jobs and order
- flagship section and dominance rank
- CTA posture and where the primary CTA appears
- visual rhythm: dense, quiet, flagship, proof, editorial, CTA
- surface rhythm: dark hero and white/paper second section as a default, or the page-role reason for breaking that rhythm
- styling approach: global foundation changes, page CSS files, artifact CSS, isolated modules if earned
- component/shell implications
- QA plan: viewport checks, section crops, validation commands

If the page cannot answer these clearly, keep planning. Do not start implementation because a route is empty.

## Section Planning

Every important section needs a section job and visual thesis before code:

- buyer message
- role in the page arc
- chosen form and why it serves the job
- artifact or no artifact
- relationship to adjacent sections
- mobile behavior
- fail conditions

Allowed forms include cards, lists, grids, split layouts, panels, browser/page frames, editorial text sections, icons, and motion. The question is not whether the form is fashionable; the question is whether it is earned.

Use:

- cards when the content items are true peers
- lists when scanning, sequence, or prioritization is the job
- grids when comparison, grouping, or density is the job
- browser/page frames when real website craft is being shown
- split layouts when contrast or handoff benefits from side-by-side reading
- simple editorial sections when clarity, pacing, or authority matters
- motion when it explains sequence, handoff, contrast, state change, or proof

Rebuild the form only when the chosen form does not serve the section job.

## Build Sequence

1. Lock the page frame.
2. Lock section jobs and visual theses.
3. Lock CSS/component approach.
4. Build in meaningful slices.
5. Validate code after source changes.
6. Render and audit visual work.
7. Fix weak forms rather than decorating them.

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
- render tablet at 1024px when nav, artifacts, grids, multi-column sections, or major responsive structure change
- capture important section crops
- run the checks in `mindwp-qa`

Passing build is not visual approval.
