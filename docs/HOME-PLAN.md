# MindWP homepage plan

This is the page-specific authority for the MindWP homepage. Read `STRATEGY.md`, `DESIGN.md`, and `ENGINEERING.md` first. This brief adds only homepage decisions.

## Outcome

Build a long-form homepage that proves MindWP can design an exceptional website while making the connected website-and-handling offer easy to understand.

The page has **seven narrative acts and sixteen semantic sections**. The acts control pacing and visual continuity; the sections give each commercial moment enough space to land.

The page should feel ambitious, authored, and interactive without becoming a SaaS dashboard, a generic agency template, or a collection of disconnected visual experiments.

## Core visual idea: The Working Website

Most agency websites present a website as a finished screenshot. MindWP presents it as a **working surface** where trust forms, an action happens, and the opportunity continues moving.

The recurring signature is a **signal thread**. It changes form across the page:

- a live route or pulse in the hero;
- interrupted fragments where work slips;
- a handoff path around the contact form;
- a connection between the five systems;
- a local discovery radius;
- a focus indicator across proof;
- a visible next step in operational scenes;
- a completed path in the final review section.

Do not draw one literal line through the entire DOM. Use related per-act paths, motion, focus states, and composition so the signal feels continuous without becoming a flowchart gimmick.

## Art direction

**A precise editorial website crossed with an active digital workbench.**

The page combines:

- oversized contemporary type;
- real website frames and interface details shown as spatial objects;
- controlled crop, overlap, perspective, and edge-to-edge media;
- dark technical scenes and bright evidence-led scenes;
- occasional document, note, map, and routing artifacts grounded in real work;
- concentrated choreography rather than universal scroll reveals.

### The deliberate risk

Several acts share visual objects across section boundaries. A browser plane, signal path, or document stack may remain present while the argument changes around it. This creates continuity across a sixteen-section page and prevents the experience from reading as stacked templates.

The static composition must still work without JavaScript, and mobile may replace persistence with a shorter sequential composition.

## Initial visual tokens

These values are a concept starting point, not inherited legacy. Confirm them in a static hero/section concept before globalising them.

| Role              | Name          |     Value |
| ----------------- | ------------- | --------: |
| Primary dark      | Deep current  | `#08171B` |
| Raised dark       | Wet slate     | `#13282D` |
| Primary light     | Mineral white | `#F5F6F2` |
| Clear surface     | Screen white  | `#FFFFFF` |
| Primary text      | Carbon        | `#101719` |
| Muted text        | Iron          | `#5E696B` |
| Main signal       | Relay blue    | `#4968FF` |
| Rare active point | Pulse orange  | `#FF7048` |
| Soft field        | Glass mint    | `#C8E8DC` |

Relay blue carries links, focus, routing, and the main signal. Pulse orange appears only at decisive movement or state change. Glass mint is a quiet field, not a universal card background.

This palette must be tested against the real work screenshots. If project colors fight it, proof areas may use project-derived accents inside controlled frames.

## Typography

- **Display:** Bricolage Grotesque, variable weight.
- **Body and UI:** Inter.
- **Operational labels:** system monospace stack, used only for genuine timestamps, routes, statuses, or location labels.

The homepage should use typography as composition:

- hero display may reach `clamp(4.25rem, 9vw, 9rem)` when line length allows;
- selected principle strips may use near-viewport-scale statements;
- section headings vary in width, alignment, and scale by job;
- body copy stays concise and readable;
- no decorative numbering unless it communicates a real sequence.

## Narrative map

```text
ACT I    Recognition             Sections 1–2
ACT II   The reframe             Sections 3–5
ACT III  The handoff system      Sections 6–7
ACT IV   Visibility and proof    Sections 8–10
ACT V    Operational memory      Sections 11–13
ACT VI   Authority and fit       Sections 14–15
ACT VII  Conversion              Section 16 + footer
```

Acts may wrap several `<section>` elements in one visual environment. Not every section receives its own background band, equal padding, heading pattern, or isolated card grid.

## Act I — Recognition

### 1. Hero — Work Comes In

**Job:** Establish the problem, demonstrate visual taste, and make the offer intriguing within the first viewport.

**Message direction:**

> Work comes in. Too much slips away.

Support should explain that MindWP designs the website and connects the handling around what happens next. Keep it to two short sentences.

**Composition:**

- Near-full-viewport deep-current scene.
- Oversized headline occupies the left and crosses the visual field.
- A layered working-day artifact occupies the right and lower edge.
- The artifact contains recognisable fragments: a local search/service-page arrival, a form or call, a missed moment, and a consultation or quote request.
- Include a small early proof glimpse—a real website crop or “selected work” edge—without turning the hero into a portfolio grid.
- Primary CTA: `Request a Website Review`.
- Secondary CTA: `See the work`.

**Motion:** One orchestrated load sequence establishes type, website planes, and the signal. Pointer depth is optional and subtle. The headline, support, and actions render immediately.

**Mobile:** Type leads. The artifact becomes a designed vertical relay of three readable objects, not a scaled desktop collage.

### 2. Where Work Slips

**Job:** Show that the business already has activity and that loss occurs between moments.

**Composition:**

- Bright mineral field with a wide editorial canvas.
- Working-day events sit on a loose but controlled route: search, page visit, form, call, quote, consultation, follow-up, review.
- The signal appears complete in some places and visibly interrupted in others.
- Use varied artifacts—small page crop, call note, form receipt, calendar mark, review prompt—not equal cards.
- Home-service and clinic examples receive equal visual weight across the canvas.

**Motion:** As the section enters, complete paths progress while weak handoffs stop. Motion explains the gaps; it does not merely reveal labels.

**Mobile:** Convert the wide canvas into a vertical sequence with clear interrupted handoffs.

## Act II — The reframe

Sections 3–5 share one visual argument. A website plane introduced in section 3 persists into section 4 before section 5 creates a compact pause.

### 3. Website + Handling

**Job:** State the MindWP difference: the website and handling path are designed together.

**Composition:**

- Asymmetric split between the visible website surface and the path behind it.
- The website side shows clarity, proof, and a next action.
- The handling side shows routing, ownership, and continuation using plain labels rather than a CRM dashboard.
- The two sides overlap through one visible handoff point.

**Motion:** Scrolling brings the back layer into view without moving the website out of context. Avoid a generic before/after slider.

### 4. Contact Form Is Not the Finish Line

**Job:** Dramatise what changes after submission.

**Composition:**

- The website plane from section 3 remains or visually echoes.
- One form action reaches a hard dead edge; the other continues into response, owner, and next step.
- Do not use two equal benefit cards. Use one continuous scene with a break and a repaired route.
- Copy is minimal: the form is a moment, not the finished system.

**Motion:** A single submission event plays twice: once stopping, once continuing. Reduced motion shows both outcomes side by side in normal flow.

### 5. Short Dark Principle Strip

**Job:** Create a memorable pause before the handling sequence.

**Statement direction:**

> They do not need more information. They need enough certainty to act.

**Composition:** Compact dark interlude with large type and one small signal point. No cards, supporting paragraph, or CTA.

**Motion:** A restrained emphasis on “certainty” or “act,” not a looping marquee.

## Act III — The handoff system

### 6. The Enquiry Arrives

**Job:** Make the first handling moment concrete.

**Composition:**

- Close-up interface choreography rather than a full dashboard.
- Show the request landing, the right person knowing, and a visible next step.
- Use real objects: form receipt, call record, notification, owner label, follow-up date.
- Avoid fake metrics, pipeline charts, and invented response times.

**Motion:** Three short states progress in one compact sequence. The visitor should understand the change without reading the labels twice.

**Mobile:** Use a vertical three-state stack with no tiny interface text.

### 7. Five Systems, One Connected Site

**Job:** Present the complete MindWP model as the page's main visual peak.

**Composition:**

- Large dark or deep-color environment.
- Smart Website Systems is the physical base: a website plane, foundation, or central working surface.
- Local SEO Authority, Lead Response & Handling, Follow-Up & CRM, and Reputation & Review connect to distinct moments around that surface.
- The systems must not appear as five equal cards, five generic icons, or a circular SaaS feature diagram.
- Each system should be recognisable through a real business object and a short outcome.

**Motion:** This is the primary ScrollTrigger scene. The website base stays oriented while the other systems connect in sequence. The full connected state remains visible at the end.

**Reduced motion:** Render the complete connected composition with all labels available.

**Mobile:** Replace pinning with a vertical website base and four connected chapters. Preserve the hierarchy: website first, adjacent systems second.

## Act IV — Visibility and proof

### 8. Found Nearby, Trusted Before They Call

**Job:** Explain local discovery as find-and-verify, not ranking hype.

**Composition:**

- A location field inspired by service areas and decision context, not a copied Google map.
- Combine a radius or neighbourhood grid with a service/treatment page, local proof, opening information, and a clear next step.
- Use one home-service example and one clinic verification detail so the section does not become industry-exclusive.
- No fake rank positions, map pins implying real locations, or fabricated review totals.

**Motion:** The local field resolves from “found” to “verified” as page/proof details enter the decision area.

### 9. Website Work You Can Inspect

**Job:** Provide the page's strongest real evidence.

**Composition:**

- One dominant full-width browser/proof frame.
- Supporting desktop, mobile, typography, and detail crops appear at useful scale.
- Show home-service and healthcare work with equal status.
- Additional projects may appear as a restrained index or edge previews, not six tiny cards.
- Labels must distinguish real client work, anonymised work, and demonstration work.

**Interaction:** A focused project can shift between desktop, mobile, and detail views. Every view must remain accessible by normal links or controls and work without hover.

**Asset decision:** Before implementation, verify permission and context for each active screenshot. If the existing work cannot carry flagship presentation, create stronger demonstration work instead of exaggerating weak proof.

### 10. Specialist Clinic Scenario

**Job:** Show how the full path applies to a high-trust, considered decision.

**Composition:**

- Clearly label this as an illustrative scenario, not a client result.
- Treatment/service clarity, practitioner trust, proof near the decision, local verification, consultation request, and follow-up appear in one patient journey.
- Use calm image treatment and generous whitespace after the denser proof section.
- A clinic-specific section does not make the whole site clinic-first; home services have already received equal presence in sections 2, 8, and 9.

**Motion:** Use subtle progression through the scenario. Avoid medical animations, fake patient records, or clinical software styling.

## Act V — Operational memory

### 11. Dark Memory Strip

**Job:** Create a second compact pause and introduce the operational payoff.

**Statement:**

> Nothing depends on someone remembering.

**Composition:** Dark strip with scattered note fragments resolving toward one visible next step. No paragraph or CTA.

**Motion:** Notes fade or slide out while the owned next step remains. Reduced motion shows the resolved state.

### 12. Operational Payoff

**Job:** Show what becomes easier to see and manage.

**Composition:**

- Editorial workbench of messages, notes, owner labels, dates, follow-up prompts, and proof requests.
- Organise the artifacts into a confident spatial system, not a fake analytics product.
- The visitor should see four payoffs: enquiry visibility, ownership, follow-up, and proof capture.
- Mention that the system can be handed over or managed by MindWP without turning this into a pricing comparison.

**Interaction:** Focus or scroll highlights one operational payoff at a time while the whole workbench remains understandable.

### 13. It Is Not a Launch, It Compounds

**Job:** Show that the website becomes more useful as real activity creates better insight and proof.

**Composition:**

- A growing archive or layered record rather than an infinite-loop diagram.
- Real sequence: enquiries reveal questions; questions improve pages; completed work creates reviews and proof; better proof supports the next decision.
- Do not promise automatic optimisation, guaranteed growth, or unexplained AI improvement.

**Motion:** New evidence layers onto the website surface and changes what the next visitor sees. Keep the sequence finite and calm.

## Act VI — Authority and fit

### 14. Built by Builders

**Job:** Establish credible experience without exposing personal identity.

**Composition:**

- Builder's workbench: website structures, responsive views, implementation notes, and selected tool names.
- Use “building WordPress websites since 2015” as the factual authority anchor.
- Elementor, Bricks, Divi, WooCommerce, and custom work appear as delivery experience, not a logo cloud or platform allegiance.
- Show decisions and craft rather than a founder portrait.

**Copy boundary:** Do not claim a “small senior team” unless that becomes true. Use builder-led language.

**Motion:** Responsive frames or implementation layers align with precision; avoid decorative code rain.

### 15. This Is Not for Everyone

**Job:** Qualify fit calmly before the final conversion act.

**Composition:**

- Use an editorial gate, narrowing path, or selective sequence rather than a generic good-fit/bad-fit card pair.
- Good fit: established business, meaningful project value, design ambition, and willingness to improve handling.
- Poor fit: lowest-price page buying, decorative-only work, or guaranteed-result expectations.
- Tone remains respectful and confident.

**Motion:** The signal continues only through the relevant path. The static version keeps both outcomes clear.

## Act VII — Conversion

### 16. Website Review + FAQ + Final CTA

**Job:** Turn accumulated confidence into one clear private action.

This is one semantic section with three internal visual scenes and the footer following outside `main`.

#### Review scene

- Return to the deep-current field.
- Explain what the review examines: website clarity, proof, enquiry path, and what happens next.
- Use the real review form or a short path into it; do not ask for unnecessary revenue or personal information.
- Primary action: `Request a Website Review`.

#### FAQ scene

- Move into a quieter light or translucent field inside the same closing environment.
- Answer only real purchase questions: scope, builders/platforms, handover versus ongoing management, pricing posture, timing, and what the review includes.
- Use an accessible disclosure pattern if answers are collapsible.

#### Final action scene

- Return to a concentrated dark close.
- The signal arrives at one completed point.
- Use one action only: `Request a Website Review`.
- No second cluster of buttons.

#### Footer

- The footer follows as its own landmark, not section 17.
- Keep routing limited to built pages.
- Include brand, concise positioning, current navigation, and approved legal links only.
- Do not recreate a directory of future routes.

## Header and navigation

- Design the shell with the homepage; there is no preserved header or footer to match.
- The header may begin integrated with the hero and gain a readable surface after scroll.
- Use a restrained MindWP wordmark treatment until a separate identity mark is approved.
- Desktop navigation should remain compact.
- Mobile navigation needs complete focus management, Escape behavior, scroll locking, and a visual treatment consistent with the homepage.
- Never link to an unbuilt route.

## Motion architecture

Spend most choreography in four places:

1. Hero load and signal establishment.
2. Website/contact-form handoff across sections 3–4.
3. Five-system connection in section 7.
4. Proof focus and final signal completion in sections 9 and 16.

Use smaller state transitions in sections 2, 6, 8, 11, 12, 13, and 15. Sections 5 and 11 remain compact pauses rather than animation showcases.

Do not apply one global reveal effect to all sixteen sections.

## Component plan

Keep `src/app/page.tsx` as a Server Component that composes local homepage sections.

Suggested page-local shape:

```text
src/app/
  page.tsx
  home.css
  home-responsive.css
  _home/
    HeroSignal.tsx
    HandoffScene.tsx
    SystemsScene.tsx
    WorkShowcase.tsx
    ReviewClose.tsx
    home-content.ts
```

This is a starting organisation, not a requirement to create five Client Components. Keep static sections server-rendered and add `"use client"` only where browser behavior is necessary.

Do not create shared section primitives during the first build. Promote only stable behavior after the homepage is approved.

## Asset plan

Before or during implementation:

1. Audit the active work screenshots for permission, quality, and useful crops.
2. Choose one home-service and one healthcare proof lead.
3. Prepare desktop, mobile, and detail treatments without destroying the originals.
4. Create honest demonstration fragments for the hero, handling, local-trust, and clinic-scenario scenes.
5. Use the existing clinic photograph only if it supports the final composition and usage rights are clear.
6. Do not invent ratings, analytics, maps, patient records, client results, or testimonials.

The current screenshots can show experience, but the MindWP homepage itself must establish the new visual standard.

## Responsive plan

- Desktop can use persistent objects, overlap, wide canvases, and selected sticky scenes.
- Tablet receives deliberate intermediate compositions; do not wait for layouts to break before stacking.
- Mobile keeps all sixteen sections but shortens decorative motion and recomposes spatial artifacts vertically.
- Principle strips stay compact on every device.
- Interface labels must remain readable at `400px` without zooming.
- Sticky scenes must have normal-flow fallbacks and should usually become sequential on mobile.

## Performance and accessibility

Apply the global requirements in `DESIGN.md` and `ENGINEERING.md`. For this page specifically, keep the hero's essential artifact server-rendered, preserve heading order through act wrappers, and ensure every persistent or sticky scene becomes a complete normal-flow sequence under reduced motion and on small screens.

## Build sequence

1. Create a compact visual reference board and static hero concept.
2. Build the shell and sections 1–2; render at all required widths.
3. Build act II and validate the cross-section handoff.
4. Build the five-system peak before adding surrounding decorative motion.
5. Build visibility/proof and confirm asset quality.
6. Complete operational, authority, fit, and conversion acts.
7. Perform full-page visual critique and remove repeated patterns or unnecessary effects.
8. Run technical and rendered approval gates.

Do not build all sixteen sections before the first rendered review. Approve the design language through the hero and early act, then continue consistently.

## Approval gates

Apply the technical and rendered gates from `ENGINEERING.md` and `DESIGN.md`. Homepage-specific approval also requires:

- the visual concept is confirmed;
- all sixteen sections serve distinct jobs inside the seven-act narrative;
- section crops cover the hero, handoff, five-system peak, local trust, proof, clinic scenario, operational payoff, builder authority, fit filter, and close;
- proof and explanatory artifacts are honestly labelled;
- repeated card grids, repeated heading layouts, and generic reveal patterns have been removed;

Technical success is required. Visual conviction decides completion.
