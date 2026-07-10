# Home Plan - Standalone Build Brief

This is the single operating brief for building the MindWP homepage. A new chat
should be able to read this file and understand the homepage strategy, visual
direction, copy boundaries, implementation approach, motion allowance, proof use,
and QA bar without rereading every other project doc.

This file is intentionally longer than a normal page plan. It repeats the
home-relevant strategy from the core docs so the homepage can be built from one
place. Source files still own machine facts when implementation begins:

- `src/config/routes.ts` owns route/nav/sitemap structure.
- `src/content/canonical.ts` owns systems and industries.
- `src/lib/cta/labels.ts` owns approved CTA labels.
- `src/styles/*` owns tokens, typography, layout, shell, buttons, forms, and
  motion foundations.

Do not inspect `_dev-reference/` unless the user explicitly asks for the old
reference copy.

## Current Repo State

The active repo is reset to a clean page surface.

- Public `src/app/**/page.tsx` routes intentionally render `null`.
- Old active page sections were removed.
- Shared shell, primitives, tokens, route config, canonical config, contact
  code, SEO helpers, and validation scripts remain.
- `docs/HOME-PLAN.md` is the homepage decision pack.
- `/screenshots` contains visual references for the homepage direction.
- `/public/work` contains proof screenshots that may be used on Home.

Home is the taste gate for the rebuild. The first implementation must be judged
by rendered visual quality, not by whether it compiles.

## Product Understanding

MindWP builds smart websites for established service businesses and specialist
clinics. A smart website is not just a set of pages. It is the website plus the
handling path around it:

- The website makes the offer clear, builds trust, and captures enquiries.
- The handling path makes sure calls, forms, quote requests, bookings,
  consultation requests, follow-up, and proof do not disappear.

The buyer already has activity. Calls come in. People search. Forms arrive.
Quotes and consultations happen. Reviews exist or should exist. The weak point
is the path between attention, trust, enquiry, response, follow-up, and proof.

The homepage thesis:

```text
Work comes in. Too much slips away.
MindWP builds the website and handling path so the work keeps moving.
```

The line that must land early:

```text
A MindWP website does not just look good. It brings work in and makes sure it
doesn't slip away.
```

The buyer should understand this simple path:

```text
Find -> Verify -> Understand -> Contact -> Land -> Respond -> Follow up -> Prove
```

Do not turn that path into backend architecture. Keep it in working-day terms.

## Buyer And Market

Primary buyer:

- Established service-business owner or operator.
- Specialist clinic owner, founder, or practice manager.
- Real activity already exists.
- The business has meaningful job, case, or patient value.
- The buyer can feel leakage around trust, enquiries, response, follow-up, and
  proof.

Home should feel clinic-first while keeping serious service businesses included.
Healthcare practice proof and clinic scenarios should lead the proof and market
positioning. Service businesses remain visibly included through roofing, HVAC,
plumbing, property, and other considered-work examples.

Do not make the homepage feel like:

- a generic web design agency
- a SaaS product
- a CRM dashboard
- an AI chatbot vendor
- a quote or invoice tool
- a healthcare software, EMR, or compliance product
- a cheap contractor lead-gen page
- a flat template page

## Offer Model

There are five active systems. Smart Website Systems is the public anchor and
the website front door. The other four protect the path around it.

1. Smart Website Systems
   - Owns website clarity, trust, conversion structure, enquiry capture, and the
     connection from website to handling.
   - It is the hub/base, not one equal service tile among five.
2. Local SEO Authority
   - Owns find, verify, service-area relevance, local trust, and nearby
     visibility signals.
3. Lead Response & Handling
   - Owns first response and routing after someone reaches out.
4. Follow-Up & CRM
   - Owns owner, status, reminders, and next steps after the first response or
     quote exists.
5. Reputation & Review
   - Owns review-request timing, feedback routing, and making good work visible
     as proof.

The public service ladder:

```text
Find work   -> Local SEO Authority
Catch work  -> Lead Response & Handling
Carry work  -> Follow-Up & CRM
Prove work  -> Reputation & Review
Repeat work -> proof supports the next find
```

Smart Website Systems is the ground the ladder stands on.

## Copy Rules

Write:

```text
flow -> handling -> result
```

Do not default to:

```text
pages -> design -> features
tools -> services -> features
```

Start with the buyer's real situation. Then name what MindWP builds. Then show
proof. Do not make the reader wait through a long philosophy section before the
offer appears.

Preferred working-day language:

- calls
- forms
- messages
- quotes
- bookings
- appointments
- consultations
- reviews
- missed replies
- scattered inboxes
- owner memory
- staff pressure
- local trust
- patient trust
- proof not collected
- follow-up nobody owns
- enquiries land somewhere useful
- the right person knows
- owner, status, next step
- good work becomes visible proof

Protected anchor lines:

- `Work Comes In. Too Much Slips Away.`
- `The business is working. The system around it is leaking.`
- `These aren't separate problems. They're connected.`
- `Nothing depends on someone remembering.`
- `Enquiries land somewhere useful.`

Use protected lines deliberately. Do not repeat all of them everywhere.

Hard copy boundaries:

- Do not invent proof, metrics, ratings, rankings, testimonials, client names,
  locations, dates, revenue, outcomes, or guarantees.
- Do not name backend platforms or white-label delivery names publicly.
- Do not say or imply `your CRM`.
- Do not imply the client owns or operates the handling system. The website is
  theirs; the connected handling is a service MindWP runs.
- MindWP does not create, prepare, price, invoice, automatically send, or send
  quotes.
- Do not frame MindWP as SaaS, AI chatbot, CRM reseller, ads agency, SEO hype,
  quote tool, invoice platform, healthcare software, EMR, or compliance.
- Do not make clinic copy contain unsupported medical, treatment, compliance, or
  patient-result claims.
- Do not use emergency, urgent, same-day, storm, no-heat, burst-pipe, or
  within-the-hour framing. MindWP targets considered work.

CTA rules:

- Primary CTA: `Request a Website Review`
- Secondary CTA: `See the work`
- Use `See the work` only where proof/work makes sense.
- Final CTA has one action only: `Request a Website Review`.
- Avoid `Book a demo`, `Start free trial`, `Get a free quote`, `Dominate
  Google`, and guaranteed-outcome CTA language.

## Critical Design/Content Separation

Do not judge screenshot references by their placeholder copy, labels, numbers,
claims, fake metrics, or fake UI text. The screenshots are visual references
first.

When reviewing or building from screenshots, separate three layers:

1. Visual design
   - layout
   - scale
   - section rhythm
   - surfaces
   - depth
   - typography hierarchy
   - artifact shape
   - motion opportunity
2. Content replacement
   - headings
   - labels
   - states
   - examples
   - CTA copy
   - proof captions
3. Compliance check
   - no fake proof
   - no banned claims
   - no backend names
   - no `your CRM`
   - approved CTAs only

Do not reject a visual design because the reference screenshot contains fake
metrics or unsafe wording. Replace the content. Keep the composition if the
visual form is strong.

Design-level concerns are different:

- If an artifact visually feels too much like a SaaS dashboard, it can still be
  adapted by changing the surface language into an editorial artifact, evidence
  board, working-day stack, or operating diagram.
- If a section relies on tiny cards, repeated grids, or flat rows, the visual
  composition itself is weak and should be changed.

## Visual Direction

The homepage should feel:

- modern
- premium
- editorial
- visually confident
- clinic-first
- proof-led
- commercially serious
- interactive only where useful

The homepage should not feel:

- flat
- text-only
- generic agency
- simple card grid
- SaaS dashboard
- cheap contractor lead-gen
- intern-built practice page
- decorative without commercial meaning

Global design language:

- Dark navy peaks with subtle grid texture and glass-like raised artifacts.
- Pale paper and pale mint editorial sections between dark peaks.
- Emerald as sparse signal, not the whole palette.
- Fraunces for page-level and major section statements.
- Inter for operational labels, captions, UI, and dense details.
- Large artifacts over many small cards.
- Strong asymmetry and varied density.
- Fewer, more memorable acts instead of 16 equal sections.
- Proof screenshots large enough to inspect.

The homepage must read as a sequence of acts, not as a long list of separate
sections.

## Screenshot Reference Map

Use `/screenshots` as visual reference material. Treat all screenshot copy as
replaceable.

High-priority visual references:

- `hero-artificat-sample.png`
  - Best hero direction.
  - Use dark grid, big headline, right-side working-day artifact, and subtle
    depth.
- `home-hero-inspiratiopn.png`
  - Good hero split with outcome contrast and bottom timeline.
  - Use for structure, not literal copy.
- `hero-right-side-inspiration.png`
  - Strong dark atmosphere and large headline scale.
  - Borrow visual mood and artifact placement.
- `five-systems-section-inspiraton.png`
  - Best five-system hierarchy.
  - Smart Website Systems is visibly the hub/base.
- `glmp5.2-26june.png`
  - Best dark rhythm and the strongest handoff + systems act.
  - Best candidate for GSAP step highlighting.
- `home-v5.png`
  - Most polished full-home draft.
  - Strong clinic scenario and final CTA.
  - Watch for too many small cards if copied literally.
- `home-v1.png`
  - Best narrative variety.
  - Useful for proof, compounding, review, fit, and footer pacing.
- `gpt5.2-june15.png`
  - Best clean editorial proof direction.
  - Use for `Website work you can inspect`.
- `glm5.524june.png`
  - Strong premium polish and review/diagnostic card direction.
  - Avoid literal fake report/score framing in final content.
- `glm5.2-27june.png`
  - Good editorial restraint and service ladder ideas.
  - Softer visually than the stronger dark references.

Standalone section references:

- `Screenshot Tool by cloudHQ 29_06_2026 17_48_48.png`
  - Local visibility artifact: map/radius plus operational list.
- `Screenshot Tool by cloudHQ 29_06_2026 17_49_23.png`
  - Scenario/correction structure.
  - Good model for clinic or review section.
- `Screenshot Tool by cloudHQ 29_06_2026 17_50_10.png`
  - Strong dark CTA/review composition with oversized headline and glass
    checklist.

## Page Rhythm

The old 16-section list is not the design. The page should be built as seven
acts.

Act rhythm:

1. Dark first impression
   - Hero with working-day artifact.
2. Light observed evidence
   - Work slips evidence board.
3. Dark connected mechanism
   - Contact form contrast, handoff path, and five systems in one large act.
4. Light market and local trust
   - Local trust plus clinic-first scenario.
5. Proof
   - Large inspectable work screenshots.
6. Credibility and review
   - Builder-led fit, diagnostic review, FAQ.
7. Dark close
   - One final CTA.

Visual peaks:

- Hero
- Combined handoff + five systems
- Work proof
- Clinic scenario
- Final CTA

Secondary sections:

- Work slips evidence board
- Local trust
- Review/diagnostic section
- Built by builders / fit

Quiet support:

- FAQ
- Short memory/operational payoff statements
- Small connective text strips

If implementation starts to look like 12 to 16 equal bands, stop and redesign
the rhythm before continuing.

## Final Homepage Blueprint

This is the recommended build shape. It intentionally merges the old 16
sections into fewer stronger acts.

### 01 - Hero: Work Comes In

Purpose:

- Establish the core problem immediately.
- Show that work already arrives but leaks between moments.
- Make MindWP feel premium, modern, and operational.

Visual references:

- `hero-artificat-sample.png`
- `home-hero-inspiratiopn.png`
- `hero-right-side-inspiration.png`

Composition:

- Full dark navy opening.
- Subtle grid texture across the hero.
- Left side: large headline, short recognition paragraph, primary CTA, small
  secondary proof/work link only if it does not weaken the primary CTA.
- Right side: floating working-day artifact.
- Bottom: slim timeline/status rail showing the path from find/contact to next
  step/proof.

Artifact direction:

- Use stacked concrete moments:
  - missed call
  - form enquiry
  - consultation request
  - quote follow-up
  - review request
  - next step assigned
- The artifact should feel like observed business pressure, not product UI.
- It may use chips, rows, status dots, layered paper, dark glass, and subtle
  linework.

Motion:

- Allowed: subtle row highlight cycling through the stack.
- Allowed: slight 3D tilt/parallax on the artifact.
- Do not delay headline or CTA.
- The hero must work statically.

Mobile:

- Headline first.
- Primary CTA visible before artifact.
- Artifact becomes compact stacked sequence.
- Timeline can become a short horizontal scroller or a compressed ordered list
  if needed.

Failure conditions:

- Generic agency hero.
- Hero only says MindWP builds websites.
- Right artifact becomes a fake SaaS app.
- Too many tiny unreadable labels.

### 02 - Evidence Board: Where Work Slips

Purpose:

- Show the buyer that MindWP understands their working day.
- Make leakage specific before explaining the system.

Visual references:

- `home-v5.png`
- `gpt5.2-june15.png`
- `glm5.2-27june.png`

Composition:

- Light editorial section.
- Strong heading block offset from an evidence board.
- Evidence board uses varied block sizes and emphasis.
- Do not use six equal cards.
- Some blocks can be pale mint, some white, some line-only, some larger.

Visual content slots:

- missed call
- waiting form
- quiet quote
- consultation request
- review never asked
- unclear next step
- local trust gap

Mobile:

- Evidence stack with varied visual weights.
- Keep labels short.
- Avoid cramped grids.

Failure conditions:

- Six same-size cards.
- Repeated "missed leads" wording.
- Over-explaining the whole system too early.

### 03 - Connected Mechanism: Form Is Not The Finish Line

Purpose:

- Reframe the normal website endpoint as the start of handling.
- Introduce the connected path without making it feel like software.

Visual references:

- `Screenshot Tool by cloudHQ 29_06_2026 17_49_23.png`
- `glm5.524june.png`
- `home-v1.png`

Composition:

- A split contrast block.
- One side shows the normal endpoint: call, form, request, or consultation.
- The other side shows what happens when the path continues.
- Use strong typography and a dark raised panel.
- This should be a visual moment, not a plain paragraph section.

Important:

- The visual can resemble before/after or chance/handled.
- The final content must avoid fake outcomes, but the design may borrow the
  visual contrast freely.

Mobile:

- Stack contrast statements.
- Keep both sides immediately visible.

Failure conditions:

- Plain heading plus paragraph.
- Product dashboard.
- Generic process diagram.

### 04 - Handoff + Five Systems: One Connected Site

Purpose:

- Show the full MindWP model as one connected path.
- Make Smart Website Systems the base/hub.
- Explain the supporting systems without making a service grid.

Visual references:

- `glmp5.2-26june.png`
- `five-systems-section-inspiraton.png`
- `glm5.524june.png`

Composition:

- One large dark act.
- Top: handoff path with sequence markers.
- Bottom: five-system model.
- Smart Website Systems appears as a large base, hub, or front-door layer.
- Local SEO, Lead Response, Follow-Up, and Reputation connect around or below
  the hub.
- Use lines, rails, layered panels, and progressive emphasis.

Suggested handoff sequence:

```text
Lands -> Right person knows -> Next step visible -> Follow-up stays visible -> Proof returns
```

Suggested system path:

```text
Find -> Catch -> Carry -> Prove -> Repeat
```

Motion:

- This is the best place for GSAP.
- Scroll-linked or viewport-triggered step highlight is allowed.
- All states must remain visible without interaction.
- Reduced motion must show final readable state.

Mobile:

- Preserve sequence.
- Use vertical ordered path.
- Do not hide core systems behind tabs unless the key relationship remains
  visible.

Failure conditions:

- Five equal cards.
- Flat service grid.
- Smart Website Systems looks like just another tile.
- Motion becomes the only way to understand the section.

### 05 - Local Trust: Found And Verified

Purpose:

- Connect visibility to verification and trust before contact.
- Show that local attention still needs the website and proof path.

Visual references:

- `Screenshot Tool by cloudHQ 29_06_2026 17_48_48.png`
- `Screenshot Tool by cloudHQ 29_06_2026 17_50_10.png`
- `gpt5.2-june15.png`

Composition:

- Split editorial section.
- Left: strong heading and short explanation slot.
- Right: local trust artifact.
- Artifact can show map lines, radius, dots, service area, review/proof
  placement, listing/page agreement, and next-step markers.

Design/content separation:

- The artifact may borrow visual forms from SEO screenshots.
- Replace any unsafe literal metrics or ranking claims later.
- Do not reject the map/radius/checklist design because a reference uses fake
  metrics.

Mobile:

- Text first, artifact second.
- Artifact must remain readable.

Failure conditions:

- The artifact dominates the buyer message.
- Tiny unreadable map UI.
- A basic two-column text section with no visual point.

### 06 - Clinic Scenario: Practice Front Door

Purpose:

- Make clinic-first priority visible and credible.
- Show the website as the practice front door.

Visual references:

- `home-v5.png`
- `Screenshot Tool by cloudHQ 29_06_2026 17_49_23.png`

Composition:

- Light premium section.
- Large scenario card.
- Left column: situation/evidence.
- Right column: dark correction/connection panel.
- Bottom strip: shared handoff path.
- The scenario should feel observed and practical.

Visual content slots:

- treatment clarity
- patient trust
- consultation confidence
- proof near decision
- request lands
- someone owns it
- proof returns

Mobile:

- Lead with clinic positioning.
- Scenario card stacks cleanly.
- Dark correction panel remains readable.

Failure conditions:

- Generic healthcare landing page.
- EMR/compliance/software feel.
- Medical claims or treatment-result claims in final copy.

### 07 - Work Proof: Website Work You Can Inspect

Purpose:

- Prove craft and credibility with visible work.
- Avoid invented numbers.
- Let screenshots carry proof.

Visual references:

- `gpt5.2-june15.png`
- `home-v5.png`
- `home-v1.png`

Composition:

- One dominant inspectable screenshot.
- Smaller supporting previews beside it or below it.
- Use browser-frame treatment only if it improves clarity.
- Avoid a simple thumbnail grid.
- Screenshots must be large enough to inspect at desktop and mobile.

Approved available assets:

- `public/work/work-healthcare-service-page.png`
- `public/work/work-home-services-site.png`
- `public/work/work-optical-retail-site.png`
- `public/work/work-property-management-site.png`
- `public/work/work-support-program-site.png`
- `public/work/work-tourism-service-site.png`
- `public/work/work-saas-product-site.png`

Asset priority:

1. `work-healthcare-service-page.png`
2. `work-home-services-site.png`
3. `work-optical-retail-site.png`
4. `work-property-management-site.png`
5. `work-support-program-site.png`
6. `work-tourism-service-site.png`

Exclude `work-saas-product-site.png` from Home unless the user explicitly
approves it.

Proof labels:

- Keep labels neutral and honest.
- Do not invent client names, results, dates, metrics, rankings, review counts,
  or testimonials.
- If proof type is uncertain, label it as demonstration or ask the user before
  final copy.

CTA:

- `See the work` may appear here as secondary action.

Mobile:

- Keep the main screenshot large enough to understand.
- Supporting previews can stack.

Failure conditions:

- Tiny gallery grid.
- Too many proof items.
- Fake labels or fake results.
- SaaS product proof without user approval.

### 08 - Compounding / Operational Payoff

Purpose:

- Show that this is not a one-time launch.
- Land the operational idea that repeated good handling becomes better proof.

Visual references:

- `home-v1.png`
- `glmp5.2-26june.png`

Composition:

- Editorial heading with large illustrated system artifact.
- Artifact can use connected documents, calendar, message, review/proof, and
  follow-up objects.
- This is one of two allowed places for light 3D/depth.

Motion:

- Subtle parallax or layered float is allowed.
- Avoid ambient loops that distract.

Mobile:

- Illustration simplifies.
- Keep the payoff line visible.

Failure conditions:

- Fake workflow product UI.
- Too many panels.
- Repeating the five systems explanation again.

### 09 - Built By Builders / Fit

Purpose:

- Establish credibility without vanity.
- Filter out poor-fit buyers.

Visual references:

- `home-v1.png`
- `home-v5.png`
- `glm5.524june.png`

Composition:

- Calm editorial split.
- One side: builder-led credibility.
- Other side: good fit / not fit.
- Can include a compact timeline from 2015 to now.

Content facts allowed:

- Building WordPress/service-business websites since 2015.
- Small senior team.
- Builder-led.
- Good fit: established, active, meaningful enquiry value, leakage around trust,
  response, follow-up, proof.
- Not fit: brand-new business with no traction, cheapest-site shopper,
  brochure-only redesign, hype seeker, guarantee buyer.

Mobile:

- Stack into clear good-fit/not-fit groups.

Failure conditions:

- Founder vanity.
- Fake team proof.
- Aggressive exclusion.
- Generic agency about copy.

### 10 - Review: Find Where Work Slips

Purpose:

- Make the next step practical and low-pressure.
- Explain the diagnostic review without turning it into a fake score/report.

Visual references:

- `glm5.524june.png`
- `Screenshot Tool by cloudHQ 29_06_2026 17_50_10.png`
- `home-v1.png`

Composition:

- Dark background.
- One large paper-like diagnostic artifact.
- Artifact can show categories, checklist groups, or review areas.
- It should feel like a senior written review, not a software report or audit
  score.

Review areas:

- clarity
- trust
- enquiry path
- response
- follow-up
- proof
- priority

CTA:

- Primary CTA: `Request a Website Review`

Mobile:

- Artifact remains readable or simplifies to stacked review groups.

Failure conditions:

- Fake audit score.
- Fake report metrics.
- Dashboard.
- Quote tool.
- Pressure-selling.

### 11 - FAQ

Purpose:

- Remove practical objections before the close.

Visual references:

- `home-v5.png`
- `gpt5.2-june15.png`

Composition:

- Quiet light section.
- Clean accordion or open list.
- Large tap targets.
- Visible focus states.

FAQ topics:

- What is a website review?
- Is the website ours?
- Do you run the handling?
- Do you run ads?
- Do you guarantee leads or rankings?
- Is this only for clinics?
- What happens after the review?

Failure conditions:

- Overlong answers.
- Backend platform names.
- `your CRM`.
- Guarantee language.

### 12 - Final CTA

Purpose:

- Close with one clear diagnostic action.

Visual references:

- `home-v5.png`
- `glm5.524june.png`
- `Screenshot Tool by cloudHQ 29_06_2026 17_50_10.png`

Composition:

- Strong dark close.
- Centered message.
- One action only.
- Optional small path/status line underneath.

CTA:

- `Request a Website Review`

Mobile:

- Keep heading and CTA visible without competing links.

Failure conditions:

- CTA cluster.
- `See the work` in the final close.
- Book demo / free quote / free trial language.
- Pressure language.

## Anti-Flat Rules

These rules exist because previous drafts failed by turning strategy into flat
sections.

- Do not build 16 equal sections.
- Do not treat the section list as the design.
- Do not use repeated equal card grids as the default answer.
- Do not make every section heading + paragraph + rows.
- Do not make all sections the same width, density, or rhythm.
- Do not use small cards when one large artifact would carry the point better.
- Do not let light sections become blank white space with tiny content.
- Do not let dark sections become decorative only.
- Do not make proof screenshots too small to inspect.
- Do not ship a first draft because it passes build.

When a section feels flat, fix in this order:

1. Clarify section job.
2. Change composition.
3. Change hierarchy and scale.
4. Add or strengthen the artifact.
5. Rewrite copy.
6. Add motion only if the static design already works.

## Motion And 3D Allowance

Motion is allowed, but only where it clarifies meaning.

Allowed motion:

- Hero artifact row highlight.
- Hero artifact subtle 3D tilt/parallax.
- Handoff + five systems step highlight.
- Compounding artifact subtle layered float.
- FAQ accordion.
- Normal hover/focus/pressed states.

GSAP is allowed if it improves sequence or handoff. Use it only in an isolated
client island. Do not convert the full page to a client component.

Motion requirements:

- Static design must work first.
- No reveal-gating hero heading, primary CTA, LCP content, or core proof.
- Reduced motion must keep content visible and understandable.
- No hover-only meaning.
- No ambient background loops.
- No scroll hijacking unless the section itself earns it and remains accessible.

## Implementation Approach

Do not implement until the section composition is clear.

Suggested file shape:

- Keep `src/app/page.tsx` thin.
- Add a Home page component or local section components near the route.
- Use readable page-level CSS for Home-specific composition.
- Use existing global primitives when they help:
  - `Section`
  - `Container`
  - `Button`
  - `Badge`
  - `Eyebrow`
  - `Reveal`
  - `RevealMotion`
- Keep section-specific components local until repeated need is proven.
- Use isolated client components only for hero motion, systems motion, or FAQ.
- Do not create generic marketing section factories.

CSS approach:

- Use existing tokens and typography roles.
- Prefer role-backed color tokens over raw values.
- Page CSS can own local composition, grids, artifacts, responsive rules, and
  section rhythm.
- Section CSS modules are optional only for isolated interactive islands or
  selector-risk containment.
- Reserve display scale for hero and major visual peaks.
- Use `aspect-ratio` for artifacts and proof media.
- Use `min-width: 0` where text lives inside flex/grid.
- Avoid fixed heights unless a visual artifact needs stable framing.

Shell/global changes:

- Do not change tokens, shared shell, header, footer, or global primitives
  casually.
- They may be changed only if scoped or if the homepage cannot work well without
  the change. Report why.

## Accessibility And SEO Requirements

- Use real semantic HTML.
- Important headings, claims, CTAs, and proof labels must be crawlable text.
- Use logical heading order.
- Preserve keyboard order.
- Keep focus states visible.
- Keep touch targets usable.
- Do not rely on color alone for meaning.
- Respect reduced motion.
- Reserve media space to avoid layout shift.
- Do not create fake or unsupported structured data.

## Validation And QA

Docs-only changes:

```bash
git diff --check
```

Source/page/component changes:

```bash
pnpm check
pnpm build
pnpm test
```

Visual homepage work also requires rendered QA:

- Desktop screenshot at `1440px`.
- Desktop screenshot at `1280px`.
- Mobile screenshot at `400px`.
- Tablet screenshot at `1024px` when nav, media, grids, multi-column sections,
  or major responsive structure changes.
- Capture section crops for:
  - hero
  - evidence board
  - handoff + systems
  - local trust
  - clinic scenario
  - work proof
  - review
  - final CTA

Rendered audit checklist:

- First-glance commercial meaning is clear.
- Offer appears early enough.
- Page reads as acts, not flat bands.
- Visual peaks and quiet sections are distinguishable.
- Clinic-first proof and positioning are visible.
- Service businesses remain included.
- Proof screenshots are large enough to inspect.
- CTAs use approved labels.
- Final CTA has one action only.
- No overlap, overflow, cramped labels, or button text clipping.
- Mobile hierarchy is not just desktop stacked.
- Motion is nonessential and reduced-motion safe.
- Copy boundaries are clean before approval.
- Passing build is not visual approval.

## Build Decision Checklist

Before writing code, answer:

- Which act is being built?
- What buyer moment does it own?
- What visual reference is it using?
- What is the artifact?
- What text is real copy and what is placeholder?
- What proof/media does it need?
- What does it become on mobile?
- Does it rely on motion?
- What would make it feel flat?

If any answer is unclear, keep planning before implementation.

## One-Screen Summary For Future Chats

Build the MindWP homepage as a premium, dark/editorial, clinic-first page about
work slipping between attention, trust, enquiry, response, follow-up, and proof.
Use the screenshots as visual references only; replace their content later.
Separate visual design from copy compliance. Build seven strong acts, not 16
flat sections. Hero uses a dark working-day artifact. The core mechanism is one
combined dark handoff + five-systems act. Proof uses large inspectable work
screenshots. Clinic scenario leads market specificity. Review is the diagnostic
entry point. Final CTA has one action: `Request a Website Review`.
