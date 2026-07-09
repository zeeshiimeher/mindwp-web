# DESIGN SYSTEM - practical CSS usage

This guide explains how to use the current MindWP CSS system. It is not a visual manifesto and does not prescribe page-specific taste. Page composition decisions belong in page planning.

## Design Language

MindWP should feel calm, premium, specific, and commercially serious. Design should make the buyer situation, offer, proof, and next step clear before it shows visual taste.

A section may use text, media, screenshots, illustration, cards, lists, diagrams, strong typography, or no supporting visual. Decide the composition during page planning from the section job, buyer message, proof need, hierarchy, dominance, rhythm, and mobile behavior.

## Colour Roles

Use role tokens rather than raw values.

- Page and section surfaces: `--color-page`, `--color-section`, `--color-raised`, `--color-band`.
- Dark surfaces: `--color-navy`, with `--color-navy-soft`, `--color-navy-raised`, and navy line roles for local depth.
- Text: `--color-ink`, `--color-muted`, `--color-subtle`, plus inverse roles on dark surfaces.
- Borders: `--color-line` and `--color-line-strong`.
- Accent: emerald is a signal for focus, key actions, and sparse emphasis.
- Status: success, warning, and danger are for state meaning only.

If a color token name describes a material or trend rather than a role, prefer a role name when the foundation is in scope.

Surface token meanings:

- `page`: the global paper field and quiet background.
- `section`: clean white content surface.
- `raised`: soft paper inset or lifted surface.
- `band`: stronger rhythm band for a real transition, proof area, or grouped sequence.

## Typography Roles

Fraunces owns display and heading roles. Inter owns body, UI, forms, labels, and supporting text.

Use the role that matches the content job:

- `h1`: one page-level first impression.
- `h2`: primary section heading.
- `h3 large`: high-value subsection or proof moment below an `h2`.
- `h3`: normal subsection heading.
- `h3 small`: compact subsection, panel group, or dense proof heading.
- `h4`: small card, label-led panel, or support heading.
- `body large`: lead copy or high-value explanation.
- `body`: normal readable copy.
- `body small`: captions, helper copy, quieter notes.
- `UI large`, `UI`, `UI small`: nav, badges, compact controls, metadata.
- `eyebrow`: short category or orientation label.
- `label`: visible form labels and grouped control labels.
- `control`: input, textarea, select, and button text.

Fluid type uses deliberate min, preferred, and max values. Do not invent random `clamp()` values inside page CSS. Adjust the foundation when the scale itself is wrong.

## Semantic Defaults

Start with real elements: `main`, `section`, headings, paragraphs, lists, links, buttons, figures, captions, forms, labels, inputs, textareas, and selects.

Global CSS gives these elements useful defaults. Add classes for layout roles, type overrides, surface changes, or intentional component behavior. Important headings, proof, claims, and CTAs must remain crawlable text, not only images, SVG, canvas, pseudo-elements, or hidden content.

## Section Spacing

Use default section spacing before inventing one-off padding. Change spacing when it clarifies relationship, hierarchy, or page rhythm.

- Default: normal page sections.
- Compact: short support strips, small bridges, or tight CTA lead-ins.
- Spacious: major proof, deep explanation, or a section that needs more room.
- Opening: first impression or page-level opening section only.

Spacing should show relationship. Inner gaps are smaller than the space around a group. Use `gap` for internal layout and margins mainly for typographic flow or external separation.

## Containers And Text Widths

Use containers intentionally:

- Default container for most page sections.
- Wide container when a section needs more horizontal room.
- Narrow container for focused explanation or quieter editorial pacing.
- Full width only when the page form genuinely needs the viewport.

Text widths are roles, not decoration. Page openings and high-value headings can be narrow or wide depending on the copy. Long service, industry, or page titles may need a wider measure or page CSS. Body copy should stay readable.

## CSS File Shape

Global CSS owns tokens, semantic defaults, typography roles, layout helpers, buttons, motion hooks, and reusable state/focus foundations.

Page-level CSS is normal. A rebuilt page can use 1-3 readable files near the route or page surface, such as:

- `page.css`
- `page-responsive.css`
- a clearly named companion file when the page has enough local styling to justify it

Use global classes when they already express the role: section spacing, container, stack, cluster, grid, switcher, text width, surface, border, type, buttons, and motion hooks.

Use page CSS when a section needs local composition, responsive behavior, page-specific rhythm, or styling that should not become global.

Use isolated component or section CSS only when isolation is cleaner: complex interactive islands, reused components, unusual selector risk, or behavior/state styling that belongs to the component.

## Buttons, Links, And Forms

Use the shared `Button` primitive for canonical actions. Button labels should state one clear action. Use one primary action per decision moment; secondary actions should be visibly subordinate.

Unclassed text links use semantic defaults. Navigation and component links can use UI type roles and component states.

Forms should remain dedicated by page or use case unless repeated need proves abstraction. Forms need visible labels, helper text where useful, field-level errors, pending/success/error states, visible focus, and target sizes that work on touch screens.

Do not make a MindWP form look like a quote tool, invoice system, SaaS demo, or CRM product.

## Media

Reserve space before media loads. Preserve aspect ratio. Keep real work, proof labels, and CTA context readable on mobile.

Use object cropping only when the crop does not hide the point of the media. If a desktop composition becomes unreadable at mobile width, plan a mobile treatment instead of simply shrinking it.

## Motion

Stillness is the baseline. CSS transitions are the default. Heavier motion belongs in isolated client islands only when it clarifies sequence, handoff, contrast, state change, interaction feedback, or proof.

Do not reveal-gate the page heading, primary CTA, or LCP content. Reduced-motion behavior is required.

## Breakpoints And Rendered QA

Primary visual QA widths:

- Desktop: `1440px` and `1280px`
- Tablet: `1024px`
- Mobile: `400px`

Tablet is required when layout changes affect nav, media, grids, multi-column sections, or major responsive structure. If a value risks breaking below `400px`, report it, but do not design the whole system around `375px`.

Rendered screenshots and section crops are required before approval for visual page or component work. A passing build is not visual approval.

## What Code Cannot Prove

Do not judge these from code alone:

- first-glance commercial meaning
- hierarchy and composition
- typography wrapping
- repeated weak patterns
- contrast on the actual composed background
- mobile hierarchy
- CTA dominance
- whether proof or media is readable when present
- whether the page feels generic

Render the work and inspect it.
