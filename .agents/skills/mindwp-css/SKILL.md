---
name: mindwp-css
description: MindWP CSS and layout rules. Use when writing or reviewing global CSS foundations, page-level CSS, semantic markup, class naming, spacing, responsive behavior, accessibility, SEO-safe styling, and maintainable page layout.
---

# MindWP CSS

CSS is part of MindWP's design language. It should give pages one coherent premium system, not a pile of isolated section treatments. Keep it clear, robust, accessible, inspectable, and easy to change.

## Foundation First

- Global CSS is allowed and important: `tokens.css`, `typography.css`, `layout.css`, `buttons.css`, and `motion.css` are the page system.
- Improve token names, class names, color roles, spacing roles, container roles, and helper classes when the task scope includes foundation work.
- Remove duplicated or stale CSS when safely proven unused.
- Token values are the source of truth. Do not copy color, type, radius, or spacing values from docs.
- Use token-backed values only for public page design: no raw hex, arbitrary radii, one-off shadows, or random spacing.
- Global helpers should carry repeated page behavior. Page CSS should carry page-specific composition and artifacts.

## Page CSS

- A rebuilt page should normally use 1-3 readable page CSS files, such as `page.css`, `page-artifacts.css`, and `page-responsive.css`.
- Do not fragment every section into its own CSS module by default.
- Use a section module only when isolation is genuinely cleaner: a complex island, reusable artifact, unusual interaction, or risk of selector bleed.
- Keep class names short, readable, and BEM-like: `homeHero`, `homeHero__inner`, `proofLedger`, `proofLedger__item`, `ctaRow`.
- Prefer predictable one- or two-level selectors. Avoid selector chains that depend on exact DOM depth.
- CSS should support clean JSX, not force extra markup to satisfy clever selectors.

## Semantic Markup

- Start with real elements: `body`, `main`, `section`, `h1`, `h2`, `h3`, `p`, `a`, `button`, `ul`, `li`, `figure`, `form`, and `label`.
- Let element defaults do useful work. Do not over-class every simple text element.
- Use global type roles/classes only when they improve clarity or intentionally override the element role.
- Use real text and real headings for important copy. Do not put essential content only inside images, SVGs, canvas, or CSS pseudo-elements.
- Add wrappers only for a real job: width containment, layout grouping, artifact framing, or styling boundary.
- Avoid wrapper bloat, anonymous nested `div`s, and deeply nested selectors.
- Keep JSX readable enough that the page structure is obvious without reading the CSS.

## Typography

- Fraunces/Inter hierarchy should feel premium, readable, and consistent.
- Rework type scale and `clamp()` values deliberately when the page system needs it.
- Every `clamp()` needs sensible min, preferred, and max values. Do not create random fluid type because it works in one viewport.
- Check desktop, tablet, and 375px mobile wrapping for hero lines, section headings, labels, buttons, and proof copy.
- Keep long text in readable measure; do not let paragraphs stretch across wide desktop.
- Reserve display scale for true hero, flagship, and major proof moments.

## Layout Rules

- Use flex for one-dimensional layout: rows, columns, clusters, toolbars, CTA groups, alignment, and distribution.
- Use grid for two-dimensional layout: page composition, asymmetric sections, media/text systems, comparison matrices, and stable tracks.
- Use `gap` before margin hacks for sibling spacing.
- Use margins mainly for external separation or one-off typographic rhythm, not layout systems.
- Use full-bleed, contained, narrow, dense, and quiet sections intentionally as page rhythm tools.
- Avoid fixed heights unless the section truly needs a stable viewport, canvas, or artifact frame.
- Avoid absolute positioning for normal layout. Use it for badges, overlays, annotations, and controlled decorative layers only.
- Use layout to support dominance: flagship/proof artifacts may need more width, contrast, density, or surrounding quiet.

## Intrinsic CSS

- Prefer intrinsic constraints over breakpoint-heavy CSS.
- Use `minmax()` for grid tracks that must shrink and grow safely.
- Use `auto-fit` when empty columns should collapse; use `auto-fill` when preserving column slots is intentional.
- Use `max()`, `min()`, and `fit-content()` when they make constraints clearer than extra wrappers.
- Use `aspect-ratio` for fixed-format artifacts, media, cards, and visual frames.
- Use `min-width: 0` on grid/flex children when text may overflow.

## Spacing And Containers

- Spacing should feel systemised and deliberate.
- Section padding should create rhythm across desktop, tablet, and mobile.
- Use tokens and deliberate `clamp()` values for section padding and large gaps.
- Do not create random fluid spacing because it looks smooth in one viewport.
- Keep inner rhythm consistent: header to body, body to artifact, artifact to CTA.
- Set clear container widths for full, wide, default, narrow, and text measures.
- Let artifacts and proof areas claim more width when they carry the section.
- Avoid centering every heading in the same max-width block.

## Responsive Behavior

- Choose mobile-first or desktop-first based on the section's real complexity.
- Mobile-first is best for simple content stacks, forms, and text-led sections.
- Desktop-first can be clearer for complex artifacts, asymmetric layouts, or sections whose desktop composition defines the idea.
- Tablet is not an afterthought: check the awkward middle range where grids often collapse poorly.
- Mobile should not merely stack desktop cards. Preserve hierarchy and simplify artifacts when needed.
- Avoid viewport-width font scaling. Use type roles or intentional `clamp(min, preferred, max)` values.
- Before approval, check desktop, tablet, and 375px mobile for overflow, overlap, cramped labels, weak hierarchy, and unreadable artifacts.

## Visual Form

- Do not solve every section with repeated equal-card grids.
- Equal grids are fine only when the items are true peers or scanning/comparison matters.
- If the section needs one dominant idea, use layout to create hierarchy.
- Do not over-customize every section into unrelated fragments. A premium page needs a coherent system with enough variation to avoid template repetition.
- If CSS is becoming elaborate to make a weak card grid feel premium, return to the visual thesis.

## Accessibility

- Keep heading order logical.
- Preserve labels, names, and roles for controls.
- Make focus states visible on light and dark surfaces.
- Contrast is a hard gate, not a preference. Use token-backed colors that pass on the actual background.
- Keep keyboard order aligned with reading order.
- Do not use CSS order to create a confusing source order.
- Respect reduced motion; CSS animation must have a static readable state.

## SEO Safety

- Important page meaning must be crawlable text.
- Use real headings for section topics.
- Do not hide meaningful content with `display: none`, off-screen tricks, or image-only text unless there is an accessible equivalent.
- Decorative SVGs and images should not carry claims, proof, or CTA copy alone.

## React Fit

- Server Components are the default.
- Use client components only for real interaction, browser APIs, or earned motion.
- Keep JSX structure simple; do not create component layers just to style around CSS problems.
- Prefer predictable CSS over clever layout hacks. If a hack is necessary, keep it local and obvious.
