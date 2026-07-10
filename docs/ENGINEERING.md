# MindWP engineering

This is the authority for stack, source ownership, rendering boundaries, routing, privacy, performance, and validation. Business facts come from [STRATEGY.md](./STRATEGY.md); visual decisions come from [DESIGN.md](./DESIGN.md).

## Stack

| Layer      | Decision                                                                   |
| ---------- | -------------------------------------------------------------------------- |
| Framework  | Next.js App Router, React, and TypeScript                                  |
| Rendering  | Server Components by default; small Client Components for real interaction |
| Styling    | Custom CSS: global foundation plus local page/component CSS                |
| Motion     | CSS for simple feedback; GSAP only in isolated signature interactions      |
| Fonts      | `next/font`, selected by the approved art direction                        |
| Forms      | Server actions, Zod, Resend, and Cloudflare Turnstile                      |
| SEO        | Metadata API, JSON-LD helpers, sitemap, and robots                         |
| Tests      | TypeScript, ESLint, source checks, Playwright smoke/accessibility tests    |
| Deployment | Decide and validate the production adapter before deployment work          |

Tailwind is not part of the rebuilt visual architecture.

## Build order

For a major page:

1. Confirm strategy and page job.
2. Approve the visual direction and content hierarchy.
3. Build semantic local sections and page CSS.
4. Add the smallest client-side islands needed for interaction or motion.
5. Promote repeated behavior or tokens only after the real page proves them.
6. Run technical gates and rendered visual review.

Do not create a component library or content schema before the homepage establishes the real patterns.

## Source shape

```text
src/
  app/          routes, layouts, metadata surfaces, sitemap, robots
  components/   stable shared behavior and proven repeated UI
  config/       environment, site identity, live navigation/routes
  content/      business capability and industry data
  lib/          contact, SEO, and focused utilities
  styles/       small global design foundation
docs/           strategy, design, engineering, and page briefs
.agents/        one procedural repository skill
```

Page-specific components, data, and CSS should live near the route until reuse is proven.

`_dev-reference/current-site/` is an isolated old-site copy. Keep it intact. Do not import from it, lint it, or treat it as current authority; inspect it only when the user explicitly requests comparison or reference work.

## Source of truth

- `docs/STRATEGY.md` owns business, offer, public language, claims, and IA intent.
- `docs/DESIGN.md` owns visual and CSS decisions.
- `docs/HOME-PLAN.md` owns the approved homepage brief after it is finalised.
- `src/content/canonical.ts` owns typed capability and industry data used by code.
- `src/config/routes.ts` owns **live** navigation and sitemap routes only.
- `src/config/site.ts` owns public site identity and URL.
- `src/lib/cta/labels.ts` owns repeated CTA strings.
- `src/lib/contact/*` and `src/app/contact/actions.ts` own contact behavior.
- `src/lib/seo/*` owns metadata and structured-data builders.

Documentation explains intent. Source files own machine-enforced values. Comments must point to current documents only.

## App Router

Routes stay thin:

- metadata and JSON-LD;
- page-level data decisions;
- composition of local sections.

Do not publish empty placeholder routes. A future service or industry may exist in canonical content without an App Router page, navigation link, or sitemap entry.

Use Metadata API helpers, `next/link` for internal navigation, and `next/image` or explicit dimensions for public media. Add loading/error boundaries only where asynchronous behavior makes them useful.

## React boundaries

Server Components are the default.

Use Client Components for:

- real stateful interaction;
- browser APIs or measured layout;
- mobile navigation or disclosures;
- form state that cannot remain server-side;
- GSAP and pointer/scroll behavior.

Keep client boundaries at the interaction or section level. Do not convert a page to a Client Component for convenience.

Pass only required serialisable data into client islands and clean up observers, listeners, timelines, and animation contexts.

## Components

Prefer direct, local composition while a visual pattern is unique.

Share a component when:

- behavior repeats;
- accessibility or state logic is easy to get wrong;
- semantics are stable;
- sharing reduces code without flattening the visual design.

Avoid marketing-section factories, speculative prop APIs, barrel files used only for indirection, and type machinery that does not protect a real domain boundary.

## Data and types

Type stable domain facts: live routes, canonical capabilities, industry data, CTA labels, SEO inputs, environment variables, contact schemas, and server-action results.

Canonical content is descriptive data, not an artificial constraint on how many pages or sections must exist. Do not encode strategy slogans as tuple-length type laws.

Validate external and user-provided data at its boundary. Keep the marketing surface static unless real behavior requires otherwise.

## Forms and privacy

The contact action is the only public mutation until scope changes.

- Validate all submitted fields server-side.
- Protect against duplicate and spam submissions.
- Return useful field and recovery errors.
- Never log submitted personal data.
- Never claim delivery when transport is unavailable.
- Keep destination addresses, API keys, and private platform details in server-only environment variables.
- Do not place personal founder information in public config, client bundles, examples, error messages, metadata, or source-controlled defaults.

Public platform naming follows strategy. Private implementation details may be used in proposals, setup, and handover without becoming website positioning.

## Routing and SEO

Separate future content data from live routes.

Navigation and sitemap generation must use only built, approved pages. Tests should audit the same live route list rather than maintain a separate catalogue of placeholders.

Structured data must reflect visible, supportable content. Never add invented ratings, reviews, prices, locations, results, or guarantees.

## Performance

Visual ambition must remain measured:

- identify and size the LCP asset;
- reserve media space;
- use responsive optimized images;
- keep JavaScript inside earned islands;
- load GSAP only where used;
- stop observers and animation work outside their useful lifecycle;
- avoid persistent filters, canvases, or loops without proven value;
- verify layout shift and interaction responsiveness on mobile.

## Validation

Documentation or skill changes only:

```bash
git diff --check
```

Any source, dependency, route, component, or CSS change:

```bash
pnpm check
pnpm build
pnpm test
```

Major visual changes also require the screenshot and section-crop review defined in `docs/DESIGN.md`.

If a gate fails, fix the cause or report the exact blocker. Do not treat a successful build as visual approval.
