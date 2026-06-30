# DESIGN SYSTEM — practical CSS usage

This guide explains how to use the current MindWP CSS system. It is not a visual manifesto; it is the operating guide for page rebuilds, component work, and CSS foundation changes.

## Design Language

MindWP should feel calm, premium, specific, and commercially serious. The design should make a real buyer situation visible before it shows visual taste.

Most major commercial pages should open with a dark, high-contrast hero unless the page role gives a stronger reason not to. The dark hero should feel like the decisive first impression: clear buyer problem, concrete MindWP offer, one primary next step, and a real or demonstration artifact when it earns space.

After a dark hero, the second section should normally move to white or paper. Do not stack a second dark section directly after the hero unless the page has a specific dramatic reason and the contrast has been planned. MindWP pages should usually breathe through alternating surface roles, not through random shape changes.

Choose the section form because the section job earns it:

- Cards are valid when the items are true peers.
- Lists are valid when scanning, sequence, status, or prioritisation is the job.
- Grids are valid when grouping, comparison, or density is the job.
- Browser and page frames are valid when real website craft is being shown.
- Panels and split layouts are valid when a bounded surface or contrast helps the idea land.
- Simple editorial sections are valid when pacing, clarity, and authority matter.

The failure mode is defaulting to safe forms without a visual thesis.

## Colour Roles

Use role tokens rather than raw values.

- Page and section surfaces: `--color-page`, `--color-section`, `--color-raised`, `--color-band`.
- Dark surfaces: `--color-navy`, with `--color-navy-soft`, `--color-navy-raised`, and navy line roles for local depth.
- Text: `--color-ink`, `--color-muted`, `--color-subtle`, plus inverse roles on navy.
- Borders: `--color-line` and `--color-line-strong`.
- Accent: emerald is a signal for focus, key actions, and sparse emphasis. It is not background texture.
- Status: success, warning, and danger are for state meaning only and must not be used as decoration.

If a color token name describes a material or trend rather than a role, prefer a role name when the foundation is in scope.

Default page surface rhythm:

- Hero: usually `navy`.
- Second section after a dark hero: usually `section` or `raised`.
- Main body: alternate `section`, `page`, `raised`, and occasional `band` according to section job.
- Accent surfaces: rare, for a meaningful signal or soft proof/CTA support.
- Back-to-back dark sections: avoid by default; use only when the page arc truly needs a dark flagship continuation.

## Typography Roles

Fraunces owns display and heading roles. Inter owns body, UI, forms, labels, and supporting text.

Use the role that matches the content job:

- `h1`: one page-level first impression.
- `h2`: primary section heading.
- `h3 large`: flagship subsection or proof moment below an `h2`.
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

## Section Rhythm

Use default section rhythm before inventing one-off padding. Most normal sections should use default top and bottom padding; the page should get variety from surface, silhouette, density, artifacts, and composition.

- Default: normal page sections. This is the usual choice.
- Compact: short support strips, small bridges, or tight CTA lead-ins. Use sparingly.
- Spacious: major proof, service reveal, or substantial artifact work. Use intentionally.
- Hero: first impression or flagship opening only.

Spacing should show relationship. Inner gaps are smaller than the space around a group. Use `gap` for internal layout and margins mainly for typographic flow or external separation.

Normal page rhythm after a dark hero:

1. Dark hero.
2. White or paper second section that explains, proves, or reframes the offer.
3. Alternating section surfaces where each surface change marks a real shift in section job.
4. Dark can return for a flagship proof, serious contrast, or final close, but it should not become every other section by habit.

Do not rely on compact/spacious padding to make a page feel designed. Use them only when the section job earns the change.

## Containers And Text Widths

Use containers intentionally:

- Default container for most page sections.
- Wide container for large artifacts, comparison surfaces, and proof.
- Narrow container for focused explanation or quieter editorial pacing.
- Full width only when the page form genuinely needs the viewport.

Text widths are roles, not decoration. Hero and flagship headings can be narrow. Body copy should stay readable. Artifacts and proof can be wider than copy.

## CSS File Shape

Global CSS owns tokens, semantic defaults, typography roles, layout helpers, buttons, motion hooks, and reusable state/focus foundations.

Page-level CSS is normal. A rebuilt page can use 1-3 readable files near the route or page surface, such as:

- `page.css`
- `page-artifacts.css`
- `page-responsive.css`

Use global classes when they already express the role: section rhythm, container, stack, cluster, grid, switcher, text width, surface, border, type, buttons, and motion hooks.

Use page CSS when the section needs a visual thesis, artifact layout, responsive behavior, page-specific rhythm, or a local composition that should not become global.

Use isolated component or section CSS only when isolation is cleaner: complex interactive islands, reused artifacts, unusual selector risk, or behavior/state styling that belongs to the component.

## Buttons, Links, And Forms

Use the shared `Button` primitive for canonical actions. Button labels should state one clear action. Use one primary action per decision moment; secondary actions should be visibly subordinate.

Unclassed text links use semantic defaults. Navigation and component links can use UI type roles and component states.

Forms should remain dedicated by page or use case unless repeated need proves abstraction. Forms need visible labels, helper text where useful, field-level errors, pending/success/error states, visible focus, and target sizes that work on touch screens.

Do not make a MindWP form look like a quote tool, invoice system, SaaS demo, or CRM product.

## Images And Artifacts

Reserve space before media loads. Preserve aspect ratio. Keep real work, website craft, proof labels, and CTA context readable on mobile.

Use object cropping only when the crop does not hide the point of the artifact. If a desktop artifact becomes unreadable at mobile width, design a mobile artifact instead of shrinking the desktop one.

## Motion

Stillness is the baseline. CSS transitions are the default. Heavier motion belongs in isolated client islands only when it explains sequence, handoff, contrast, state change, or proof.

Do not reveal-gate the hero headline, primary CTA, or LCP content. Reduced-motion behavior is required.

## Breakpoints And Rendered QA

Primary visual QA widths:

- Desktop: `1440px` and `1280px`
- Tablet: `1024px`
- Mobile: `400px`

Tablet is required when layout changes affect nav, artifacts, grids, multi-column sections, or major responsive structure. If a value risks breaking below `400px`, report it, but do not design the whole system around `375px`.

Rendered screenshots and section crops are required before approval for visual page or component work. A passing build is not visual approval.

## What Code Cannot Prove

Do not judge these from code alone:

- first-glance commercial meaning
- whether the form serves the section job
- artifact readability
- typography wrapping
- repeated silhouette
- contrast on the actual composed background
- mobile hierarchy
- CTA dominance
- whether the page feels generic

Render the work and inspect it.
