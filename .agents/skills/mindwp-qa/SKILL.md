---
name: mindwp-qa
description: MindWP rendered QA, visual audit, responsive screenshots, section crops, accessibility checks, copy/proof validation, console checks, and final validation gates. Use before approving visual page/component changes or when auditing implementation quality.
---

# MindWP QA

Passing build is not visual approval. MindWP pages must be rendered, inspected, and corrected until the design, copy, accessibility, and implementation all support the page job.

## When Required

Use this skill for:

- visual page changes
- component or shell changes
- CSS foundation changes that affect public pages
- forms and interactive UI
- motion or client islands
- final page approval

Guidance-only changes do not require rendered QA unless they include examples that must be visually verified.

Use `docs/DESIGN-SYSTEM.md` for the current design-system roles and breakpoint targets.

## Required Viewports

For visual page/component work, rendered screenshots and relevant section crops are required before approval.

Check:

- desktop at 1440px and 1280px
- mobile at 400px
- tablet at 1024px when layout changes affect grids, media, navigation, multi-column sections, or major responsive structure

Desktop plus 400px mobile can be enough for simple text-led or single-column changes. If a value risks breaking below 400px, report the risk, but do not make 375px the primary approval width.

Capture section crops for important sections:

- page opening
- major proof/work sections
- form/contact
- header/mobile nav
- footer
- final CTA
- any section with complex composition or media

## Visual Audit

Check:

- first-glance commercial meaning
- page role clarity
- offer appears soon enough
- proof appears before strong close
- CTA clarity
- hierarchy and dominance
- composition and rhythm
- repeated weak patterns
- proof or media readability when present
- typography wrapping
- line length
- overflow and overlap
- button and label fit
- mobile hierarchy
- footer/header scan quality

If a section does not support its job, revise the section plan, composition, copy, or implementation before approval.

## Coherence Audit

Check for:

- competing accent colors
- mixed radius languages without reason
- mixed icon styles
- unrelated shadow/elevation systems
- random status colors
- repeated weak patterns
- motion that draws attention away from meaning

The fix is the change that helps the section job: sometimes copy, sometimes hierarchy, sometimes layout, sometimes a different supporting visual, and sometimes less visual material.

## Accessibility Audit

Check:

- heading order
- landmark structure
- keyboard navigation
- visible focus
- contrast on actual backgrounds
- no color-only meaning
- target size for touch controls
- form labels and errors
- screen-reader names for icon-only controls
- reduced-motion behavior

## Technical Audit

Check:

- browser console errors
- hydration warnings
- broken links where practical
- no horizontal scroll on mobile
- no layout shift from unreserved media
- no client component boundary wider than needed
- no fake or unsupported structured data
- no route/config drift

## Copy And Proof Audit

Check:

- buyer situation before offer
- `flow -> handling -> result`
- no fake proof, metrics, rankings, ratings, testimonials, dates, locations, or results
- no backend platform names
- no "your CRM"
- no quoting/invoicing/product-tool implication
- clinic copy avoids medical/treatment/compliance claims
- CTA labels match `src/lib/cta`
- proof labels used only where needed

## Validation Commands

Guidance/docs-only:

- `git diff --check`

Source/page/component:

- `pnpm check`
- `pnpm build`
- `pnpm test`

If a command fails, report the exact failure and either fix it or explain the blocker.

## Approval Standard

Approve only when:

- rendered pages support the intended page/section jobs
- 1440px desktop, 1280px desktop, and 400px mobile are coherent
- 1024px tablet is coherent when the layout change affects nav, media, grids, multi-column sections, or major responsive structure
- accessibility basics pass
- copy/proof boundaries are clean
- validation gates pass or blockers are explicit

Do not ship a first draft because it compiles.
