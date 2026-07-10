# HOME PLAN — The Working Website

This is the standalone design and build brief for the MindWP homepage. It translates the business strategy into one distinctive visual experience. It is not a fixed copy script, generic section inventory, or instruction to display every capability.

## The page's single job

Make an established service-business or clinic buyer believe two things:

1. MindWP can design a genuinely exceptional website.
2. MindWP understands what should happen around the enquiry after the website creates it.

The visitor should leave with a clear next step: inspect the work or request a private website review.

## Product understanding

MindWP builds premium smart websites for established home-service businesses and specialist clinics.

The project can include the website, agreed enquiry handling, response and follow-up setup, booking or review paths, and either:

- handover so the client manages the website and connected account, or
- ongoing management by MindWP under a tailored monthly agreement.

The offer is flexible and privately priced. The homepage should make this flexibility feel considered, not vague.

## Chosen visual direction: The Working Website

Most agency websites show a finished screen as a static decoration. MindWP will show the website as a **working surface**: a place where trust forms, an action happens, and a signal continues moving.

The page's signature element is a thin luminous **signal thread** connecting art-directed website fragments with recognisable enquiry moments. It begins in the hero, becomes the central handoff explanation, and returns quietly in the closing CTA.

The signal is not a literal flowchart running through every section. It is a recurring visual behavior: a route, pulse, cursor trace, focus ring, or moving point that suggests continuity.

### The aesthetic

**Precision editorial meets an active digital workbench.**

- Bold, contemporary typography rather than a traditional agency serif.
- Large browser and mobile frames treated as spatial objects, not screenshots inside small cards.
- Crisp alignment mixed with controlled crop, overlap, depth, and edge-to-edge media.
- Dark technical scenes balanced by bright, quiet proof and reading areas.
- Sparse signal color used to guide attention rather than decorate everything.
- Motion concentrated into a few orchestrated moments.

The site must not resemble a SaaS dashboard, neon cyber interface, WordPress template marketplace, cream-and-serif studio default, or a page made from repeated rounded cards.

## Design tokens for the homepage concept

These are starting art-direction values. They should be tested in the browser before global tokens are replaced.

| Role | Name | Value | Use |
|---|---|---:|---|
| Dark field | Deep current | `#08141B` | Hero, handoff scene, close |
| Dark raised | Ink glass | `#10232C` | Layered website objects and dark controls |
| Light field | Mineral paper | `#F2F5F1` | Main proof and explanation field |
| Clear surface | Studio white | `#FCFDFC` | Project frames and readable surfaces |
| Primary signal | Relay blue | `#536DFE` | Active path, focus, primary emphasis |
| Secondary signal | Pulse coral | `#FF7657` | Sparse moving point or key state only |
| Soft signal | Mist mint | `#BFE8D5` | Quiet highlight, selected background |
| Dark text | Carbon | `#121A1E` | Headings and primary text on light |
| Muted text | Slate | `#5B686D` | Supporting copy |

Relay blue is the main brand signal. Pulse coral appears rarely so the moving point feels important. Emerald from the old system can be migrated toward mist mint or retained only where contrast testing proves a useful role.

## Typography direction

- **Display:** Bricolage Grotesque, variable weight. Use for the hero and selected section statements. Its construction feels crafted and contemporary without defaulting to another luxury serif.
- **Body/UI:** Inter can remain for clarity and implementation efficiency.
- **Signal labels:** system monospace or a lightweight mono role for URLs, form states, timestamps, and path labels. Use sparingly.

Typography behavior:

- Hero type can reach approximately `clamp(4rem, 8vw, 8.5rem)` when the final line length supports it.
- Use tight display leading, selective width, and one intentional alternate/italic treatment if the font supports it well.
- Section headings do not all use the same size, width, or alignment.
- Body copy stays restrained; most sections should need one short paragraph, not an essay.

## Page rhythm

The homepage uses seven acts rather than sixteen explanatory sections.

```text
┌────────────────────────────────────────────────────────────┐
│  1. HERO — thesis + living website signal                  │
│     bold type       [layered page → enquiry → response]    │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  2. WORK — two large proof scenes, not a card grid         │
│     [home-service build]        [clinic build]              │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  3. THE HANDOFF — one sticky, scroll-led explanation       │
│     page trust → enquiry lands → next step stays visible   │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  4. SCOPE — one flexible build with connected capabilities │
│     website core ── response / follow-up / booking / proof  │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  5. DELIVERY — a real fork                                 │
│     [build + hand over]        [build + manage]             │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  6. EXPERIENCE + FIT — authority without personal exposure │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│  7. REVIEW — final signal, short FAQ, one clear action      │
└────────────────────────────────────────────────────────────┘
```

## Act 1 — Hero: a website that keeps the work moving

### Message

Working headline direction:

> A website that keeps the work moving.

Working support:

> MindWP designs the site, connects the enquiry path, then hands it over or keeps it running.

These lines may be refined in the browser. The meaning must remain immediately understandable.

Actions:

- Primary: `Request a Website Review`
- Secondary: `See the work`

### Visual composition

The hero is a near-full-viewport dark scene. Large type occupies the left and partly crosses the composition. On the right and lower edge, layered website fragments show:

- a polished service/treatment page fragment
- a focused enquiry action
- a small response/next-step object

A signal starts at a visible website action and travels into the next object. It should feel like one spatial composition, not three cards with arrows.

Desktop pointer movement can create a subtle depth shift. On load, one orchestrated sequence establishes the type, website planes, and signal. The headline and primary CTA remain visible immediately.

On mobile, the type leads and the artifact becomes a deliberate stacked scene with a shorter signal path. Do not shrink the desktop perspective until it is unreadable.

## Act 2 — Work you can inspect

Bring proof earlier than the old plan.

Show one home-service and one healthcare project with equal status. Use large crops, browser edges, responsive fragments, and concise context. Avoid a gallery of six tiny thumbnails.

The current active screenshots can support this section, but their presentation must be art-directed. They are evidence of experience, not the final MindWP visual standard. Do not invent client outcomes or claim that demonstration work is a measured client result.

Possible interaction: as a project enters focus, its desktop crop gives way to one mobile/detail crop while the short project note changes beside it. The interaction must also work through scrolling and keyboard-accessible links.

## Act 3 — The handoff

This is the main explanatory scene and the best place for GSAP ScrollTrigger.

Use one sticky composition with three clear states:

1. **Confidence** — a visitor understands and trusts the page.
2. **Contact** — the call, form, booking, or consultation reaches a useful place.
3. **Continuation** — response, ownership, and next step remain visible.

The website plane stays present while the signal changes state. Copy should be extremely short. Do not add separate sections for missed calls, forms, quotes, consultation requests, follow-up, and reviews.

The static fallback shows all three moments in a readable sequence. Reduced motion removes pinning/scrubbing and preserves the complete explanation.

## Act 4 — Built around the business, not a package

Explain scope without five equal service cards.

The visual form is a **scope rail**:

- a solid website foundation
- connected capability branches for local discovery, response, follow-up, booking, reviews, and ongoing improvement
- only the relevant branches become part of a client's scope

This can be a calm light editorial section with one horizontal composition on desktop and a vertical rail on mobile. The five canonical capability names may appear in supporting text or links later, but the homepage leads with business outcomes.

## Act 5 — Hand over or keep it managed

Make the commercial flexibility clear with a genuine fork in the signal:

- **Build and hand over** — the agreed website and connected account are set up, documented, and handed to the client.
- **Build and manage** — MindWP continues managing the agreed website and handling responsibilities for an ongoing fee.

This is not a pricing table. Each path needs a concise explanation and a quiet note that scope and cost are confirmed privately before work begins.

The two paths should feel like two destinations from the same build, not competing product tiers.

## Act 6 — Experience and fit

Combine authority and qualification into one composed section.

Authority can include:

- building WordPress websites since 2015
- experience with Elementor, Bricks, Divi, WooCommerce, and custom implementation
- a process that starts with the business and selects tools afterward

Keep the brand founder-private. Do not publish a personal name, photograph, location, marketplace identity, or fictional team biography.

Good fit: established businesses and clinics that value design, clarity, and better handling. Poor fit: lowest-price page buyers, decorative-only redesigns, and anyone expecting guaranteed leads, rankings, or revenue.

Avoid a generic two-column “for you / not for you” checklist if a more editorial treatment communicates the filter better.

## Act 7 — Website review and close

Return to the dark field and the signal thread. The signal should arrive at one calm action, visually completing the page.

Include:

- a short explanation of what the website review considers
- the primary CTA
- no public price table
- a compact FAQ with only real purchase questions: scope, platform/builder, handover versus management, and timing/process
- the redesigned footer

Do not create a separate dark CTA strip, light FAQ band, second dark CTA strip, and then footer. Compose them as one closing experience.

## Shell direction

The current shell should be redesigned with the homepage.

- Use a restrained wordmark treatment, not only the existing green dot.
- Header behavior may begin transparent/embedded in the hero and gain a surface after scroll.
- Keep launch navigation small: offer, work, industries, about/process, and review/contact.
- The mobile menu should feel like part of the new art direction and should not list every future capability by default.
- The footer should be an intentional close, not a directory of unbuilt routes.

## Motion plan

Spend motion in three places:

1. Hero load and signal establishment.
2. The sticky handoff sequence.
3. Subtle project-focus and closing-signal transitions.

Use CSS transitions for navigation, buttons, links, focus, and simple states. Use GSAP only inside the hero/handoff/project islands where coordinated motion earns the dependency.

Avoid applying the global rise reveal to every heading and card. Supporting content may use quiet reveals, but signature motion should feel authored rather than automatic.

All motion must respect reduced motion, pause or stop outside view where applicable, and leave important content available without JavaScript.

## Component and CSS plan

- Keep the route a Server Component.
- Build local semantic homepage sections first.
- Use one main homepage stylesheet plus companion files only for complex responsive or interactive sections.
- Use page-specific CSS variables for the concept before changing global tokens.
- Build isolated Client Components for hero depth/signal, the handoff sequence, and any project interaction.
- Reuse form, accessibility, SEO, link, and stable shell behavior where helpful.
- Do not create a generic marketing-section factory.
- Do not force the existing `Section`, `Eyebrow`, `Badge`, or `Button` visuals into every act.
- Promote new tokens or shared components only after the homepage proves them.

Tailwind remains installed but is not the primary authoring method for this page.

## Asset plan

Before final implementation, prepare:

- strong desktop and mobile crops from the most credible home-service project
- strong desktop and mobile crops from the most credible healthcare project
- one art-directed hero website fragment for each lane, based on real or honestly labelled demonstration content
- optional subtle texture/noise assets only if CSS cannot achieve the needed material quality efficiently
- no fake analytics, testimonials, ratings, maps, or pipeline data

If existing work cannot support the desired visual standard at large scale, create one high-quality demonstration build per lane before pretending weak screenshots are flagship proof.

## Responsive and accessibility requirements

- Semantic headings, claims, proof labels, and actions remain crawlable text.
- Source order follows reading order.
- Focus states and keyboard behavior remain visible and complete.
- Touch targets remain usable.
- Hero and proof media reserve space and use responsive sources.
- Desktop overlap becomes a designed mobile composition.
- Sticky or scrubbed behavior has a normal-flow fallback.
- No important meaning relies on color, hover, pointer movement, or animation.
- Reduced motion removes non-essential movement without removing content.

## Approval gates

Before homepage code is approved:

1. Confirm the visual direction through a compact reference board or static concept.
2. Render the real page at `1440px`, `1280px`, `1024px`, and `400px`.
3. Capture full-page screenshots and crops of the hero, proof, handoff, delivery fork, and close.
4. Review first-glance impact, offer clarity, proof scale, typography, repeated patterns, mobile composition, and motion quality.
5. Run `pnpm check`, `pnpm build`, and `pnpm test`.

The homepage is approved only when it is both technically sound and visually convincing.
