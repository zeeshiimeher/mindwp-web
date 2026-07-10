# PAGES — roles, IA, and rebuild planning

This doc owns page roles, information architecture intent, CTA posture, and the practical planning loop for rebuilding pages. 

## Current State

The active repo is reset:

- `src/app/**/page.tsx` routes intentionally render `null`.
- Old page sections were removed from active source.
- Shared shell/primitives, tokens, route config, canonical config, SEO helpers, contact code, and validation scripts remain.
- `_dev-reference/current-site/` preserves the previous site for live reference only and is ignored by normal repo tooling.

Use the old site only when explicitly requested, as content/strategy reference and comparison material. Do not treat it as a visual template.

## Information Architecture Intent

The intended public site remains:

```text
Home
├─ What we build
│  ├─ Smart Website Systems
│  ├─ Local SEO Authority
│  ├─ Lead Response & Handling
│  ├─ Follow-Up & CRM
│  ├─ Reputation & Review
│  └─ Implementation pathways under SWS
├─ Work
├─ Industries
│  ├─ Home Services
│  └─ Healthcare Practices
├─ About
├─ Pricing / How it works
├─ Resources / Blog
└─ Contact / Start
```

Routes use plain slugs: `/services`, `/work`, `/industries`, `/blog`, `/resources`. Do not use `/systems`, `/portfolio`, or `/topics`.

The intended route/nav/sitemap registry is `src/config/routes.ts`. The systems and industries allow-list is `src/content/canonical.ts`. During the reset state, those files describe intended structure; the active `src/app` tree may be incomplete or empty until pages are rebuilt.

## Page Roles

| Page | Role | Primary outcome |
|---|---|---|
| Home | Whole-system entry | Recognise the problem, grasp the offer, see proof, request a review |
| Service pages | Active-system decision pages | Decide the owning system is worth reviewing/building |
| Implementation pages | Build-path pages under SWS | Capture tool-intent and resolve up to Smart Website Systems |
| Industry detail pages | Vertical lead-gen pages | Recognise the vertical, see credible work/proof, enquire |
| Industry hubs | Lane grouping | Route to the right vertical |
| Work / case studies | Proof | Believe MindWP can deliver |
| About | Authority and trust | Trust the builder/team behind the work |
| Pricing / How it works | Commercial qualification | Understand scope posture and process |
| Blog / resources | Problem discovery | Diagnose one issue and route upward |
| Contact | Diagnostic entry | Start the review conversation |

Each service page owns one business moment from [STRATEGY.md](./STRATEGY.md). It can show connected context, but it must not absorb adjacent systems.

Industry pages must show the vertical's real working conditions: timing, behaviour, trust concerns, enquiry patterns, booking/quote/consultation patterns, and proof expectations. If a page works by swapping the industry name, it is not specific enough.

## Home Planning

Home is the rebuild taste gate unless the user explicitly chooses a narrower target. If explicitly requested, the old homepage spine may be used as planning or commercial reference only.



Home must quickly answer:

- What problem does MindWP recognise?
- What does MindWP actually build?
- Why is it different from a normal website project?
- What proof or credible work supports the claim?
- What should the buyer do next?



## Service Page Planning

Each service page should define:

- The business moment it owns.
- What is slipping there.
- What the smart website/system changes.
- What proof, media, or supporting visual is needed, if any.
- What adjacent systems it should mention lightly.
- What it must not imply.

The five primary systems are a distinct-concept family. They should feel related, but not like the same layout with different words.

Implementation pages are different: they are a parametric family under Smart Website Systems. They may share a stronger common structure because the buyer intent varies by platform/build path rather than by business moment.

## CTA Posture

Diagnostic, specific, calm, low-pressure, with a quiet commercial signal.

- Primary CTA: `Request a Website Review`.
- Secondary CTA: `See the work`, used when a lower-commitment path is useful.
- Strong close moments should usually offer one clear action, not a cluster of competing buttons.
- Pricing language should be calm scope posture, not a tier wall.

Avoid: Book a demo, Start free trial, Get a free quote, Skyrocket my leads, Dominate Google, guaranteed rankings, guaranteed revenue, guaranteed reviews, or CRM/tool-demo framing.

The approved CTA label strings are owned by `src/lib/cta`.


## Proof And Claims

Real demonstration builds and real named/anonymised work are the proof base. Label evidence honestly when a viewer could mistake it for client work, measured outcomes, or real proof. Do not invent screenshots, metrics, testimonials, rankings, or unsupported evidence.

Never invent proof. The canonical proof boundary is in [STRATEGY.md](./STRATEGY.md).
