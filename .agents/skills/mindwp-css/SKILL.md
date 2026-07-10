---
name: mindwp-css
description: MindWP CSS foundation and page styling rules. Use when writing or reviewing global CSS, page-level CSS, tokens, typography roles, semantic element defaults, responsive layout, spacing, media, forms, focus states, cleanup, or CSS architecture.
---

# MindWP CSS

CSS is part of MindWP's design system. It should be readable, inspectable, accessible, and easy to change.

Use `docs/DESIGN-SYSTEM.md` as the practical guide for applying the CSS system in page rebuilds.

## Ownership

Global CSS may own:

- token values and semantic color roles
- typography roles and element defaults
- layout helpers and containers
- surface, button, focus, motion, and form foundations
- reusable utility class names

Page CSS is normal. A rebuilt page can use one clear page stylesheet and a small number of companion files when the page has enough local styling to justify them.

Section CSS modules are optional, not default. Use a module when isolation is cleaner: complex islands, reused components, unusual interaction, or selector-bleed risk.

Tokens, typography roles, layout helpers, spacing roles, global class names, and global CSS files can be improved, renamed, removed, or rebuilt when the task scope includes foundation work.

Page CSS should live near the route or page component it serves and be imported by that page/layout according to the repo's existing Next.js styling pattern. Keep filenames descriptive and limited.

## Semantic Defaults

Start with real elements:

- `body`, `main`, `section`
- `h1`, `h2`, `h3`, `p`
- `a`, `button`
- `ul`, `li`
- `figure`, `figcaption`
- `form`, `fieldset`, `legend`, `label`, `input`, `textarea`, `select`

Let element defaults do useful work. Add classes for roles, layout, or intentional overrides, not because every node needs a class.

Important content must be real crawlable text. Do not put proof, claims, CTAs, or headings only in images, SVGs, canvas, pseudo-elements, or hidden text.

## Token Rules

Use role-backed tokens for public page design:

- text roles
- surface roles
- border roles
- accent roles
- status roles
- spacing roles
- radius roles
- shadow/elevation roles
- motion duration/easing roles

Prefer role-based token names over raw color, material, or effect names where practical: `surface-raised`, `text-muted`, `accent-signal`, and `border-subtle` age better than names tied to a single hex value or visual fad.

Avoid accidental raw values and random local systems. Page-specific custom properties and carefully chosen local values are allowed when they express an approved visual direction and are not yet stable shared roles. Promote them to global tokens after repetition is proven.

Status color is for meaning. Pair status color with text or icon where meaning matters.

## Typography

Fraunces and Inter are the current readable defaults. They may be tuned or replaced when an approved visual direction requires a more distinctive type voice.

Design type clamps deliberately:

- set sensible min, preferred, and max values
- reserve display scale for page openings and major proof moments
- use compact heading roles when normal headings are too dominant
- keep body copy in readable measure
- avoid viewport-width font scaling as a substitute for a type system
- use `tabular-nums` where aligned numbers, prices, dates, or counters matter
- keep body letter spacing at normal unless a type role has a specific reason

Check page headings, section headings, labels, buttons, captions, and proof copy at 1440px desktop, 1280px desktop, 1024px tablet when structure changes require it, and 400px mobile.

## Layout Decisions

Use flex for one-dimensional layout:

- rows
- columns
- clusters
- toolbars
- CTA groups
- alignment and distribution

Use grid for two-dimensional layout:

- page composition
- asymmetric sections
- media/text systems
- comparison matrices
- stable track systems

Use `gap` before margin hacks. Group spacing should show relationship: inner gaps are smaller than the space around the group. Margins are mainly for external separation and typographic rhythm.

Prefer intrinsic CSS:

- `minmax()` for tracks that shrink and grow
- `auto-fit` when empty columns should collapse
- `auto-fill` when preserving slots is intentional
- `max()`, `min()`, and `fit-content()` when they clarify constraints
- `aspect-ratio` for fixed-format media, cards, and frames
- `min-width: 0` on grid/flex children where text can overflow

Avoid fixed heights unless the section needs a stable viewport, canvas, or media frame. Avoid absolute positioning for normal layout; reserve it for badges, overlays, annotations, and controlled decorative layers.

Media CSS should preserve aspect ratio, reserve space before assets load, and keep important proof, labels, and CTA context readable on mobile.

## Spacing And Containers

Spacing should feel systemized:

- default section padding is the normal choice for most sections
- compact, spacious, and opening spacing are intentional exceptions
- surface alternation, density, hierarchy, and composition create most page rhythm
- container widths distinguish full, wide, default, narrow, and text measures
- proof and media areas may claim more width than copy when needed
- not every heading should sit in the same centered max-width block
- simple editorial sections may be quiet and narrow when pacing matters

Use a consistent spacing scale and deliberate `clamp()` values for major section padding. Do not create fluid spacing because it looks smooth in one viewport.

## Page CSS Shape

Keep page CSS readable:

- class names should be short, semantic, and BEM-like where useful
- selectors should usually be one or two levels deep
- avoid selector chains that depend on exact DOM depth
- CSS should support clean JSX, not force wrapper bloat
- local compositions can have grouped CSS when that improves scanning
- responsive rules should be near the page/component they explain unless they belong globally

## Forms And Inputs

Forms need CSS that supports accuracy and confidence:

- labels remain visible; placeholders are hints, not labels
- input, textarea, select, and button heights align by role
- related fields are grouped with `fieldset`/`legend` or clear visual grouping
- error text sits near the field and explains recovery
- error/success states do not rely on color alone
- disabled and read-only states are visually and semantically distinct
- focus rings are visible on light and dark surfaces
- submit/pending/success/error states are styled before the form ships

Forms can be dedicated to a page or use case. Do not force form CSS into a generic system until repeated built need proves it.

## State Styling

Interactive elements need intentional states:

- default
- hover where hover exists
- focus-visible
- active/pressed
- disabled
- current/selected
- pending/loading when async
- error/success when relevant

State changes should be consistent within the page system. Do not make links, cards, buttons, and nav items each invent unrelated feedback.

Targets should be at least 44px where touch interaction is expected, or have an expanded hit area.

## Layers And Z-Index

Use a small layer scale:

- base content
- sticky shell
- dropdown/popover
- modal/sheet
- toast/urgent overlay

Do not solve layering with arbitrary large `z-index` values. If a section needs local layering, keep it inside a stacking context and name the reason.

## Responsive Behavior

Choose mobile-first or desktop-first by section complexity:

- mobile-first for simple stacks, forms, and text-led sections
- desktop-first can be clearer when the desktop composition defines the idea

Primary visual QA widths are 1440px desktop, 1280px desktop, 1024px tablet, and 400px mobile. Tablet is required when layout changes affect nav, media, grids, multi-column sections, or major responsive structure. If a value risks breaking below 400px, report it, but do not design the whole system around 375px.

Before approval, check:

- no horizontal overflow
- no overlapping text or controls
- readable proof or media when present
- stable CTA groups
- button text fits
- headings wrap well
- no tiny proof or cramped labels

## Accessibility And SEO Safety

CSS must preserve:

- logical heading order
- readable source order
- keyboard focus visibility
- contrast on actual backgrounds
- reduced-motion static readability
- crawlable page meaning

Do not use CSS order to create a confusing reading order. Do not hide meaningful content with display tricks unless an accessible equivalent remains.

## Cleanup Procedure

When changing CSS:

1. Identify the owner: global, page CSS, module, or component.
2. Search for existing classes/tokens before adding new ones.
3. Remove duplicated or stale CSS only when usage is safely proven.
4. Prefer renaming/replacing weak foundations over layering new exceptions.
5. Check 1440px desktop, 1280px desktop, 400px mobile, and 1024px tablet when the layout changes affect nav, media, grids, multi-column sections, or major responsive structure.
6. Run the validation gate required by `AGENTS.md`.
