# MindWP roadmap

This is the short progress tracker. Detailed decisions remain in `STRATEGY.md`, `DESIGN.md`, `ENGINEERING.md`, and `HOME-PLAN.md`.

## Current status

- [x] Business strategy consolidated.
- [x] Design and engineering direction decided.
- [x] Repository reduced to a clean active surface.
- [x] Homepage planned as 7 acts and 16 sections.
- [x] Old-site reference kept isolated and intact.
- [ ] Homepage visual concept approved.
- [ ] New design foundation created.
- [ ] Homepage implemented and visually approved.

## Now — approve the visual direction

1. Create a compact reference board.
2. Design the header, hero, and section 2 at `1440px` and `400px`.
3. Critique typography, palette, composition, website artifacts, and signal treatment.
4. Revise until the direction is approved.

No full homepage implementation starts before this approval.

## Next — build the foundation

Create fresh foundations from the approved concept:

- `tokens.css`
- `typography.css`
- `layout.css`
- `buttons.css`
- shell/header/footer styles
- shared motion tokens and reduced-motion behavior
- icon, manifest colors, and Open Graph direction when the identity is stable

Do not restore the old visual system or create speculative components.

## Then — build the homepage

1. Implement Act I and render every required width.
2. Refine the foundation from the real page.
3. Build Acts II–VII in sequence.
4. Review each act before continuing.
5. Complete the form, FAQ, footer, responsive behavior, and reduced motion.
6. Run technical and visual approval gates.

## Later

- Build the small launch authority site.
- Add service, industry, implementation, and resource pages only when ready.
- Add only approved pages to navigation and sitemap.
- Confirm production deployment and analytics setup.
- Expand shared components only after real repetition exists.

## Working process

```text
Plan → Visual concept → Foundation → Build one act → Render → Critique → Refine → Validate → Continue
```

Update this file by checking completed items and moving the active work to the next phase.
