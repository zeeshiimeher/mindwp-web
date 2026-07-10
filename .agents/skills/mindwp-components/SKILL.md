---
name: mindwp-components
description: MindWP shell, primitives, header, footer, navigation, buttons, forms, repeated UI, component states, accessibility, and local-versus-shared component rules. Use when editing or reviewing shared UI, layout shell, component abstractions, forms, nav, header, footer, or reusable primitives.
---

# MindWP Components

Components should support the page's commercial meaning. Shared UI is infrastructure, not visual taste.

Use `docs/DESIGN-SYSTEM.md` for shared typography, spacing, button, form, media, and breakpoint conventions.

## Ownership

This skill owns:

- app shell
- header
- footer
- navigation
- buttons and links
- forms
- repeated UI primitives
- component states
- accessibility behavior
- local vs shared component decisions

Header, footer, shell, and primitives can be improved, rebuilt, renamed, or removed when the task scope includes them. Existing shared code is not sacred.

## Shell Checklist

When shell, header, footer, or navigation are in scope, check:

- desktop and mobile nav behavior
- current/active state
- primary CTA placement
- focus and keyboard behavior
- disclosure/dropdown behavior if added
- footer IA, contact paths, and legal/resource links
- forms remain dedicated by use case unless repetition proves abstraction

## Local Or Shared

Keep a component local when:

- the section is still unique
- the visual form is part of the page thesis
- props would become a content schema for one use
- abstraction would hide the business meaning
- repeated need is not proven

Promote a component to shared when:

- the same behavior appears in multiple places
- accessibility/state logic is easy to get wrong
- the component has stable semantics
- repetition is real, not anticipated
- sharing reduces complexity without flattening visual form

Do not create prop-heavy generic marketing factories. Build the first real section well; abstract after repeated built need appears.

## Primitives

Primitives may own:

- semantic element choice
- keyboard behavior
- ARIA wiring
- focus states
- target size
- basic state classes
- consistent variants where stable

Primitives should not force every section into the same visual shell. If a primitive makes premium page design feel generic, change the primitive or keep the section local.

## Header And Navigation

Header work should answer:

- What does the buyer need to understand first?
- Which routes are primary versus supportive?
- Where does `Request a Website Review` belong?
- How does mobile nav expose the same priorities without crowding?
- Does the header support clinics/home-services priority where relevant?

Navigation must be predictable, keyboard-accessible, and backed by `src/config/routes.ts` where route facts are needed.

Mobile nav can be a Client Component when disclosure state is required. Keep the client boundary inside the nav, not the whole shell.

## Footer

The footer can stay visually if it works, but code and CSS can still be improved.

Footer work should cover:

- clear service/industry/work routing
- calm diagnostic CTA or contact path
- legal/resource links where present
- no fake proof or unsupported claims
- accessible link groups and headings
- responsive layout that scans without becoming a dense dumping ground

Do not treat footer as leftover content. It is a trust and routing surface.

## Buttons And Links

Buttons and links should have:

- one clear action label
- visible focus state
- hover/active/disabled states where relevant
- consistent height/padding by role
- touch targets of at least 44px where expected
- icon usage only when it clarifies action or scanning

Use one primary action per decision moment. Secondary actions should be visibly subordinate.

The shared `Button` owns stable behavior and common roles; it does not require every action to share one visual shape. A page may use an accessible local link/button treatment or add a proven variant when the art direction needs a distinct editorial, project, navigation, or text action.

## Forms

Forms should be dedicated by page/use case unless repeated need proves abstraction.

Form components must preserve:

- visible labels
- useful helper text
- field-level errors
- pending state
- success/error recovery
- accessible announcements where needed
- validation alignment with server actions

Do not make MindWP look like a quote, invoice, CRM, or tool-demo platform through form labels, fields, or states.

## Component States

Any interactive shared component should define:

- default
- hover
- focus-visible
- active/pressed
- current/selected
- disabled
- loading/pending where async
- error/success where relevant
- empty state for data surfaces

Missing states are a component bug, not polish debt.

## Accessibility

Components must keep:

- semantic elements first
- keyboard order aligned with reading order
- visible focus
- screen-reader names for icon-only controls
- no color-only meaning
- appropriate touch targets
- no trapped focus unless a modal/sheet owns it and releases it correctly

If an accessible primitive exists locally, use it. If none exists and the interaction is complex, build the accessibility into the component before visual polish.
