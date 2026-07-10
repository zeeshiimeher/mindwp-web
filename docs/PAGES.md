# PAGES — roles, IA, and rebuild planning

This document owns page roles, information-architecture intent, CTA posture, and rebuild order. It does not prescribe visual composition or repeat the offer strategy.

## Current state

The active repository is intentionally reset:

- Public `src/app/**/page.tsx` routes render `null`.
- Old active page sections have been removed.
- Shared shell, primitives, tokens, route configuration, canonical content, SEO helpers, contact code, and validation scripts remain.
- `_dev-reference/current-site/` is excluded from normal work and must not be opened unless the user explicitly requests it.

The reset is an opportunity to design a new visual system, not restore the previous page shell.

## Phased information architecture

The route registry in `src/config/routes.ts` and the allow-list in `src/content/canonical.ts` may describe a larger future site. A registered route is not automatically a launch requirement.

### Launch authority site

```text
Home
├─ Smart Website System / Services
├─ Work
├─ Industries
│  ├─ Home Services
│  └─ Specialist Clinics
├─ About / Process
└─ Contact / Website Review
```

These can be separate pages or carefully combined where that produces a stronger launch. The objective is a small set of exceptional experiences with enough proof and clarity to sell the offer.

### Expansion after launch

Add these when real proof, search intent, and sales learning justify them:

- detailed capability pages
- individual industry pages
- WordPress, Elementor, Bricks, Divi, WooCommerce, and rebuild pages
- pricing/how-it-works page
- case-study detail pages
- resources and blog

Use plain route slugs such as `/services`, `/work`, `/industries`, `/blog`, and `/resources`. Do not create a route simply to complete a taxonomy.

## Page roles

| Page | Primary job |
|---|---|
| Home | Demonstrate taste, make the smart-website idea clear, establish belief, and create the next step. |
| Smart Website System | Explain scope, flexibility, delivery options, fit, and the website-to-handling connection. |
| Work | Prove design and implementation quality through visible work and honest context. |
| Industries | Show that MindWP understands both market lanes without pretending every vertical is already a specialism. |
| Industry detail | Match a real vertical's trust, decision, enquiry, booking, or quote behaviour. |
| About / Process | Build confidence in experience, approach, privacy, handover, and ongoing-management options. |
| Contact / Review | Begin a useful private conversation with enough context to qualify fit. |
| Implementation page | Capture tool-aware intent and resolve it upward to the flagship offer. |
| Resource | Help diagnose a real problem and route toward a relevant offer or conversation. |

## Homepage role

The homepage is both the commercial entry point and the first major piece of design proof. It must answer, without becoming an essay:

- What does MindWP build?
- How is it different from a normal website project?
- Does the work look and feel genuinely accomplished?
- Can the visitor see enough proof or process to believe it?
- What can the visitor explore or do next?

The homepage does **not** need to:

- explain every capability
- reproduce the complete customer journey
- give every industry equal section space
- follow a fixed problem/solution/card/testimonial/CTA template
- preserve any previous section count or layout
- use text to explain what a visual, interaction, or example communicates better

Its rhythm should vary. Large visual moments, concise commercial explanation, interactive demonstrations, work, contrast, and quieter trust sections should be composed as one experience.

## Planning a page

Before implementation, define:

1. The page's single primary job.
2. The visitor's likely question or concern.
3. The strongest visual or proof asset.
4. The minimum copy needed to make the idea clear.
5. The interaction or motion that improves understanding or feeling.
6. The next step.

This is a planning checklist, not a required section sequence.

## Industry specificity

Home services and specialist clinics have equal strategic status, but their pages should not be generic variants. Use their real differences in trust, proof, decision time, quote or consultation behaviour, staff involvement, and follow-up expectations.

Target considered work rather than emergency-call framing. Do not make unsupported medical, compliance, response-time, lead, or revenue claims.

## CTA posture

The current primary CTA is `Request a Website Review`. `See the work` is the primary lower-commitment path.

Use CTAs calmly and contextually:

- A visitor should be able to explore before being asked to commit.
- Strong close moments should usually have one obvious action.
- Header, hero, work, and close CTAs do not all need identical visual weight.
- Avoid SaaS language such as “Book a demo” or “Start free trial.”
- Avoid hype such as “Skyrocket leads,” “Dominate Google,” or guarantees.

Approved CTA strings are currently owned by `src/lib/cta`, but visual hierarchy and final wording should be tested within the designed page rather than treated as untouchable.

## Proof and claims

Use real client work, honestly anonymised work, and clearly labelled demonstration builds. Do not invent screenshots, testimonials, names, metrics, rankings, locations, or results.

The strongest proof at launch may be visual craft itself. Show the work at a scale and quality that lets visitors judge it.
