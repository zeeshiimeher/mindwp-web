# ARCHITECTURE — rebuild decisions and technical rationale

The repository has a clean page surface. Active public route files exist under `src/app/**/page.tsx` and intentionally render `null`. Shared shell, primitives, tokens, route configuration, canonical content, SEO helpers, contact handling, and validation remain.

`_dev-reference/current-site/` is an ignored standalone reference copy. Do not read, search, import, or restore from it unless the user explicitly asks.

## Stack

| Layer | Decision |
|---|---|
| Framework | Next.js App Router, React, and TypeScript |
| Rendering | Server Components by default; small Client Component islands for real interaction and motion |
| Styling | CSS-first: shared token/base CSS plus art-directed page CSS; Tailwind v4 remains optional |
| Motion | CSS for interface feedback; GSAP in isolated narrative or signature sections |
| Fonts | `next/font`; Fraunces and Inter are current defaults, not permanent art-direction constraints |
| Forms | Server actions, Zod, Resend, and Cloudflare Turnstile |
| SEO | Metadata API, JSON-LD helpers, and generated sitemap/robots |
| Quality | ESLint, TypeScript, name/contrast checks, Playwright smoke and accessibility tests |
| Deployment | Cloudflare/OpenNext configuration remains available |

## The key rebuild decision

The new homepage will **not** begin with a global component library or Tailwind composition system.

Build order:

1. Approve a homepage visual direction and content hierarchy.
2. Build local semantic sections and page-level CSS around that direction.
3. Isolate only the interactions that require client-side behavior.
4. Promote components, tokens, and patterns to shared code after repeated use is proven.

This preserves visual originality while keeping the stable infrastructure reusable.

## Active folder map

```text
src/
  app/         App Router shell, route files, metadata surfaces, sitemap, robots
  components/  shared layout, forms, motion helpers, SEO components, stable UI
  config/      site identity, environment parsing, and route/navigation registry
  content/     canonical capability and industry allow-lists
  lib/         CTA, contact, SEO, and utility helpers
  styles/      global tokens, type/base rules, layout helpers, shell, forms, motion
docs/          business, page, writing, design, and architecture decisions
.agents/       repository-specific implementation skills
```

Page-specific components and CSS should live close to the route they serve until reuse is real. `src/components/sections/` should not become a dumping ground for generic marketing blocks.

## Route architecture

Routes stay thin:

- metadata and JSON-LD
- page-level data decisions
- composition of local sections

The current route and canonical registries represent a larger future site. They are not the required launch surface. Before public launch, the sitemap and navigation must include only pages that contain approved public content.

The previous fixed-length “exactly five systems” type guard is a strategy-era constraint, not a technical requirement. It should be changed when route/canonical cleanup enters scope; capability names can remain canonical without forcing five launch pages.

## CSS architecture

`src/styles/*` remains the shared foundation:

- `tokens.css` — repeated color, type, spacing, elevation, motion, and layer roles
- `typography.css` — semantic defaults and stable type roles
- `layout.css` — small container and layout helpers
- `buttons.css` — shared action foundations
- `forms.css` — accessible form controls and states
- `shell.css` — header, navigation, and footer behavior
- `motion.css` — quiet shared reveal behavior

The homepage should add local page CSS for its art direction, signature compositions, responsive rules, and page-specific variables. Local values are acceptable when they are intentional and not yet shared design roles.

Tailwind stays installed because it is already part of the pipeline and can help with small utilities or future surfaces. It should not be the default authoring language for the homepage, and there is no reason to remove it before the visual build.

## Component architecture

Server Components are the default. Use Client Components only for:

- navigation/disclosure state
- browser APIs or measured layout
- direct manipulation needed for GSAP or interaction
- form state that cannot remain server-side
- real pointer, scroll, or state-driven behavior

Keep client boundaries at the section or interaction level. Do not turn the homepage into one Client Component.

Existing primitives are optional infrastructure. `Section`, `Container`, `Button`, `Badge`, and `Eyebrow` can be extended, restyled, replaced, or skipped when their current visual form conflicts with the approved design.

## Motion architecture

Retain the current IntersectionObserver reveal helper for quiet supporting content. Do not use it on every block.

Signature motion should live in isolated Client Components and use GSAP only where choreography, pinning, scrubbed progress, sequencing, or coordinated transforms justify it. Prefer transforms and opacity, manage cleanup through GSAP context, and avoid persistent work outside the viewport.

Every signature section must have:

- a complete static server-rendered composition
- a reduced-motion treatment
- mobile behavior designed separately where necessary
- no reveal-gating of LCP or critical content

## Shell architecture

The current header and footer are accessible foundations but reflect the old IA and generic visual shell. They should be redesigned with the homepage so brand, navigation, mobile menu, and footer feel like one system.

Navigation should expose the small approved launch surface. Future capability and industry routes can remain in canonical data without appearing in the shell until built.

## Forms and privacy

The contact path remains the only public write surface unless scope changes:

- action: `src/app/contact/actions.ts`
- validation: `src/lib/contact/schema.ts`
- attribution: `src/lib/contact/contactHref.ts`
- private environment parsing: `src/config/env.ts`

Contact destination addresses and service keys belong only in private environment variables. Public configuration, example values, client bundles, error messages, and logs must not expose personal contact details or submitted enquiry data.

The form must never claim an enquiry was delivered when email transport is unavailable.

## SEO and proof

Use shared metadata and JSON-LD helpers. Do not hardcode metadata in JSX or invent ratings, reviews, prices, results, locations, or claims.

Sitemap generation must follow the approved live route set rather than every future canonical possibility. Empty route files are scaffolding, not public pages.

## Performance posture

Visual ambition is allowed, but performance is part of the design:

- size and preload the real LCP asset correctly
- reserve space for media
- use optimized images and responsive sources
- keep client JavaScript inside earned islands
- load GSAP only where it is used
- avoid large always-running canvases or filters without measured value
- verify layout shift and mobile interaction quality

## Validation

Guidance/docs-only changes:

- `git diff --check`

Page/component/source changes:

- `pnpm check`
- `pnpm build`
- `pnpm test`

Visual work also requires rendered screenshots and section crops at `1440px`, `1280px`, and `400px`, plus `1024px` when nav, media, grids, multi-column composition, sticky behavior, or major responsive structure changes.

Build success is a technical gate. Rendered review decides visual approval.
