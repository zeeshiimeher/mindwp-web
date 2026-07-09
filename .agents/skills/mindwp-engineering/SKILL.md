---
name: mindwp-engineering
description: MindWP Next.js/App Router and React engineering rules. Use when editing routes, page components, Server/Client Component boundaries, typed contracts, metadata, JSON-LD, server actions, forms, SEO helpers, source-of-truth imports, or validation gates.
---

# MindWP Engineering

MindWP uses Next.js App Router, React, TypeScript, a clean page surface, shared shell, tokens, route config, canonical config, SEO helpers, contact code, and validation scripts.

## Boundaries

- Do not touch `_dev-reference/` unless the user explicitly asks.
- Do not copy old visual shells from the reference site.
- Do not edit routes, tokens, shell, or shared primitives unless the task scope includes them or a scoped rebuild cannot be completed well without them.
- Keep strategy and copy claims aligned with `docs/STRATEGY.md` and `docs/WRITING.md`.

## Source Of Truth

Use source files for machine facts:

- `src/config/routes.ts` for route/nav/sitemap structure
- `src/content/canonical.ts` for systems and industries
- `src/config/site.ts` for public site identity
- `src/lib/cta` for approved CTA labels
- `src/lib/seo/*` for metadata and JSON-LD helpers
- `src/lib/contact/*` and `src/app/contact/actions.ts` for contact behavior
- `src/styles/*` for tokens, typography, layout, buttons, motion

Docs explain strategy. `docs/DESIGN-SYSTEM.md` explains practical CSS-system usage. Source files own enforceable values.

## App Router

Routes stay thin:

- metadata
- JSON-LD where needed
- page-level data decisions
- section rendering

Do not put broad page systems, visual factories, or large content models into route files. If a route needs content arrays, keep them close to the page until repeated need proves a shared model.

Use Metadata API helpers. Do not hardcode `<title>` or `<meta>` tags in JSX. Structured data must not invent proof, ratings, reviews, outcomes, prices, or claims.

Use `next/link` for internal navigation. Use `next/image` or explicit image dimensions/aspect-ratio where public images or media need sizing, optimization, or layout-shift protection.

Add route `loading` or `error` boundaries only when async data, streaming, or meaningful failure states justify them.

## React Boundaries

Server Components are the default.

Use Client Components only for:

- real interaction
- browser APIs
- form state that cannot stay server-side
- mobile nav or disclosure state
- measured layout/client-only media behavior
- earned motion

Keep client boundaries as low as practical. Do not convert whole sections or pages to client components for convenience.

## Component Composition

Prefer simple composition:

- section-specific components for premium page sections
- local data and local markup while the pattern is still unique
- direct imports from source-of-truth modules
- explicit props for real variation only

Avoid:

- prop-heavy generic marketing components
- over-abstracted section factories
- broad content schemas before repeated built need exists
- shared primitives that flatten visual taste
- importing through barrels when direct imports are clearer or lighter

Primitives are infrastructure, not the design thesis.

## Data And Async

For async work:

- start independent server work in parallel when applicable
- use Suspense/loading boundaries only where they improve perceived loading or isolate async work
- reserve space for dynamic content to avoid layout shift
- pass only needed data across Server-to-Client boundaries
- validate external or user-provided data before use

The current marketing surface should remain mostly static unless a task explicitly adds dynamic behavior.

## Server Actions And Forms

Server actions are public entry points. Validate and authorize every mutation.

For forms:

- use schema validation where applicable
- return field-level errors where useful
- keep recovery messages clear
- protect against duplicate submit states
- keep contact as the only public write path unless scope changes

Forms can be dedicated by page/use case. Abstract only after repeated need proves the shared shape.

## TypeScript

Stable contracts stay typed:

- routes
- canonical systems and industries
- CTA labels
- SEO inputs
- form schemas
- contact/action results

Use TypeScript to encode real domain boundaries. Do not add complex type machinery for one-off section presentation.

## Shell, Primitives, And Shared UI

Use `mindwp-components` when work touches:

- header
- footer
- nav
- buttons
- forms
- shared UI primitives
- component states
- shell layout

Header, footer, and primitives can be improved, rebuilt, renamed, or removed when scoped. Existing shared code is not sacred.

## Validation

Guidance/docs-only changes:

- `git diff --check`

Code/page/component changes:

- `pnpm check`
- `pnpm build`
- `pnpm test`

Visual changes also need rendered QA through `mindwp-qa`.

If a gate fails, fix the cause or report the exact blocker.
