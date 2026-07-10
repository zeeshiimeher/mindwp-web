# DESIGN SYSTEM — visual and CSS foundation

This guide defines how MindWP turns a visual direction into maintainable code. It protects quality and consistency without making every page look like the same component template.

The homepage and other major pages still need a page-specific visual brief before implementation. Tokens are a foundation, not the art direction.

## Design standard

MindWP's website is part of its portfolio. It should feel designed, not assembled.

The visual system should support:

- strong editorial typography and purposeful scale
- asymmetric compositions and controlled overlap
- large project imagery and interface demonstrations
- depth through layering, crop, light, texture, and motion
- rhythm that alternates intensity with breathing room
- interactions that make the smart-website idea easier or more enjoyable to understand
- a polished mobile composition, not a collapsed desktop page

Avoid repeating the standard agency pattern of centred heading, paragraph, three equal cards, and CTA. Cards, grids, and bands are allowed when the content genuinely needs them, not as the default shape of every section.

## Visual direction before components

Before building a major page, decide:

1. The page's emotional impression.
2. The central visual metaphor or composition idea.
3. The hero's dominant visual asset.
4. Two or three signature moments elsewhere on the page.
5. The typography behavior and image language.
6. The motion story and reduced-motion fallback.
7. How the concept changes on mobile.

Do not begin by selecting existing primitives or laying out copy blocks. First define what the visitor should see and feel; then choose the simplest code that can express it.

## CSS strategy

MindWP is **CSS-first**:

- Global CSS owns reset/base behavior, shared tokens, accessible states, type foundations, containers, and stable shell behavior.
- Page-level CSS owns composition, art direction, page rhythm, responsive behavior, and signature visuals.
- Component CSS owns complex isolated interactions or genuinely reused behavior.
- Tailwind remains available for occasional token-backed utilities, but it is not the primary visual authoring method and should not produce long utility strings throughout art-directed sections.

A homepage can use one main stylesheet and a small number of clearly named companion files. Keep selectors readable and close to the page they serve.

## Tokens: shared roles and local expression

Use shared tokens for roles that repeat across the site:

- core text and surface colors
- focus and status colors
- spacing and container foundations
- type and control roles
- shared radii and elevation
- common motion durations and easings
- shell layers

Page-specific custom properties and carefully chosen local values are allowed when they express an approved visual direction. Examples include a hero-only gradient field, a project-specific accent, an unusual mask radius, a section perspective value, or choreography timing.

Promote a local value into the global token system only after it proves to be a stable repeated role. Do not turn every artistic decision into a global token before the first page is designed.

## Color

The current navy, paper, and emerald palette is a useful starting foundation, not a permanent constraint. It may be refined when the homepage visual direction is chosen.

Color should create hierarchy and atmosphere, not only alternate flat section backgrounds. Consider:

- tonal depth within dark scenes
- warm or cool paper variation
- project-derived accents in proof areas
- restrained gradient, blur, texture, or light effects
- high-contrast editorial transitions

Brand color must remain accessible where it carries text or control meaning. Status colors remain reserved for actual states.

## Typography

Fraunces and Inter are the current default families. They can stay, be tuned, or be replaced if the chosen art direction needs a more distinctive voice.

Typography should use more than a safe H1/H2/H3 ladder:

- display moments may exceed the global H1 scale
- selected words may use italic, contrast, variable width, or alternate treatment
- headings can be narrow, wide, offset, layered, or paired with media
- body measures remain readable
- labels and navigation remain precise

Do not force every heading into the same font, weight, width, and balanced wrap. Important headings, proof, and actions must remain real crawlable text even when creatively composed.

## Layout and section rhythm

Use containers as alignment anchors, not cages. Full-bleed media, controlled overflow, edge-aligned type, nested grids, sticky compositions, and layered scenes are allowed.

Prefer grid for deliberate two-dimensional composition and flex for rows, clusters, and alignment. Use intrinsic sizing where possible. Reserve absolute positioning for controlled layers and decorative or annotated elements—not normal content flow.

Page rhythm should alternate:

- dense and quiet
- light and dark
- explanatory and visual
- static and interactive
- contained and full-bleed

Not every section needs equal vertical padding or a visible background change. Relationship and pacing should determine spacing.

## Components and primitives

Shared components are infrastructure. Use them when they preserve semantics, accessibility, or genuinely repeated behavior.

Keep a section local when its composition is part of the page's visual thesis. Build the first version well before turning it into a configurable component.

The existing `Container`, `Section`, `Button`, `Badge`, and `Eyebrow` primitives are optional tools, not mandatory visual forms. They can be extended, restyled, or bypassed with accessible local markup when the page needs a different expression.

Do not create prop-heavy marketing-section factories before repeated use is proven.

## Buttons, navigation, and forms

Actions need semantic links or buttons, clear labels, visible focus, suitable touch targets, and intentional hover/active states.

The shared `Button` can provide common behavior, but primary, editorial, project, navigation, and text actions do not all need the same shape. Add variants only when their roles are real and repeated.

Forms require visible labels, helper/error text, pending/success/error states, accessible announcements, and confident spacing. They should feel like the natural end of a premium service experience, not a generic CRM or quote-tool interface.

## Media and visual assets

Reserve space before media loads and use explicit dimensions or aspect ratios. Choose crops that preserve the point of the work.

Proof should be shown at a scale where a visitor can judge typography, hierarchy, and responsive craft. Use separate crops or compositions for mobile when shrinking a desktop screenshot would make it unreadable.

Visual assets may include:

- real project screenshots
- clearly labelled demonstration builds
- art-directed interface fragments
- abstract diagrams grounded in the actual workflow
- original illustration, texture, or generated imagery when it supports the chosen concept

Do not use fake analytics, fabricated client interfaces, or meaningless dashboard filler.

## Motion and interaction

Use three levels:

1. **Interface feedback** — short CSS transitions for hover, focus, active, selection, and controls.
2. **Section choreography** — purposeful CSS or GSAP sequences that explain connection, handoff, contrast, or reveal visual detail.
3. **Atmosphere** — restrained ambient movement, pointer response, or parallax that adds depth without becoming required for comprehension.

Signature motion belongs in isolated Client Components. The static composition must remain complete, important content must be visible without JavaScript, and `prefers-reduced-motion` must remove non-essential movement.

Do not reveal-gate the hero headline, primary CTA, LCP image, or core proof. Avoid scroll hijacking, long waits, constant high-cost animation, and interaction that works only on hover.

## Responsive design

Responsive work is composition, not shrinking.

- Reorder only when source order remains logical.
- Reframe or replace dense desktop media on mobile.
- Preserve the dominant idea of each signature section.
- Reduce decorative layers before reducing readable type or touch targets.
- Verify typography wrapping, overlaps, sticky behavior, controls, and proof readability.

Primary QA widths:

- `1440px` desktop
- `1280px` desktop
- `1024px` tablet when structure, nav, media, grids, or motion change
- `400px` mobile

## Visual approval

Code quality cannot prove taste. Every visual build requires rendered full-page screenshots and section crops at the required widths.

Review:

- first-glance visual impact
- offer clarity without reading every paragraph
- composition and typography
- repeated patterns or visual fatigue
- proof scale and legibility
- interaction quality and reduced motion
- mobile hierarchy
- whether the page feels specific to MindWP

A passing build is necessary. It is not visual approval.
