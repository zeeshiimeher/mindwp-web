# Home Plan

This is the Home decision pack for the next full build sprint. It defines the
page thesis, narrative structure, section jobs, visual direction, proof use,
interaction rules, implementation approach, and QA bar before any homepage code
is written.

Do not treat this document as component code. The section list is the content
and planning spine, not the design.

## Page Thesis

Work is already coming in. The weak point is what happens between attention,
trust, enquiry, response, follow-up, and proof. MindWP builds the website and
handling path so work does not slip away.

The homepage must feel:

- modern
- premium
- interactive where useful
- editorial
- proof-led
- clinic-first
- commercially serious
- visually confident

It must not feel like:

- a flat text-only page
- a generic agency homepage
- a SaaS product
- a CRM dashboard
- an AI chatbot site
- a simple card-grid page
- an intern-built practice layout

## Non-Negotiable Guardrails

- Do not build from old homepage screenshots.
- Do not inspect `_dev-reference`.
- Do not use fake metrics, fake ratings, fake reports, fake audit scores, fake
  testimonials, invented client names, invented locations, invented dates, or
  invented outcomes.
- Do not name backend platforms publicly.
- Do not say or imply "your CRM".
- Do not frame MindWP as SaaS, a CRM product, an AI chatbot vendor, an ads
  agency, a quote tool, an invoice tool, healthcare software, EMR, or a
  compliance company.
- Use `Request a Website Review` as the primary CTA.
- Use `See the work` only in the hero and/or Work proof section.
- The final CTA has one action only: `Request a Website Review`.

## Page Rhythm

The homepage runs as five acts, not as disconnected sections.

### Act 1 - Recognition

Sections 01-03 make the buyer feel seen. The job is to show that the business
is not quiet; work is arriving, but important moments leak between attention,
trust, enquiry, response, follow-up, and proof.

### Act 2 - Offer

Sections 04-06 make the offer concrete. MindWP builds the smart website and the
handling path around it so enquiries land somewhere useful and keep moving.

### Act 3 - System

Sections 07-08 explain the connected path without becoming a services menu. The
website is the front door and the systems protect the handoffs where work
usually slips.

### Act 4 - Proof And Market Fit

Sections 09-11 prove the work and make the market focus clear. Clinics lead the
proof and positioning. Serious service businesses remain visibly included but
secondary.

### Act 5 - Decision And Close

Sections 12-16 reduce risk, explain the review, clarify fit, answer objections,
and close with one action.

## Visual Emphasis

Visual peaks:

- 01 Hero
- 04 What MindWP actually builds
- 07 Five systems, one connected site
- 09 Work proof
- 16 Final CTA

Secondary strong sections:

- 03 Contact form is not the finish line
- 08 Local trust: found and verified
- 10 Specialist clinics
- 13 The review finds where work slips

Quiet/supporting sections:

- 02 Where work slips
- 05 Certainty before enquiry
- 06 The next step stays visible
- 11 Serious service businesses
- 12 Nothing depends on memory
- 14 Built by builders / honest fit
- 15 FAQ

The review section is commercially important, but it is a conversion/planning
peak, not a heavy visual-object section.

## Interaction Rules

Interaction is allowed only where it improves meaning:

- Hero enquiry stack - subtle state/highlight movement.
- Systems section - stepper or progressive path highlight.
- Work section - gallery/filter only if useful.
- FAQ - accessible accordion.

No interaction should be required to understand essential content. Hover-only
meaning is not allowed. Interactions must preserve reduced-motion behavior and
keyboard access.

## Proof And Media Plan

Use `/public/work` proof carefully and label it honestly.

Asset priority:

- `work-healthcare-service-page.png` - primary healthcare/practice proof.
- `work-home-services-site.png` - primary service-business proof.
- `work-optical-retail-site.png` - optional secondary healthcare/retail-adjacent
  proof only if it fits visually.
- `work-property-management-site.png` - optional serious service-business proof.
- `work-support-program-site.png` - lower priority.
- `work-tourism-service-site.png` - lower priority.
- `work-saas-product-site.png` - exclude from Home unless the user explicitly
  approves it later.

Proof labels must be neutral and honest. Do not invent client names, outcomes,
locations, dates, ratings, metrics, or testimonials. If the proof type is
unclear, mark it as needing user confirmation before final copy.

## Section Plan

### 01 - Hero

**Heading:** Work comes in. Too much slips away.

**Section job:** Establish immediate recognition and name the core MindWP
promise: work is arriving, but the path around the website is where it leaks.

**Starter content / copy direction:** Calls, forms, quote requests, and
consultation enquiries already arrive. The problem is what happens next. MindWP
builds smart websites with the handling path around them, so enquiries land
somewhere useful and keep moving.

**Visual design direction:** Dark navy editorial hero. Strong left-side copy.
Right side shows a working-day enquiry stack with concrete states:

- Missed call
- Form enquiry
- Consultation request
- Quote follow-up
- Review request
- Next step assigned

The stack should feel like observed business pressure, not like software UI.

**Hierarchy/dominance:** Primary page peak. Highest dominance.

**Possible interaction:** Subtle state/highlight movement across the enquiry
stack is allowed. It must not become product UI.

**Mobile behaviour:** Lead with the heading and primary CTA. Follow with the
stack as a compact, readable sequence. Keep any motion optional and nonessential.

**Fail conditions:** Dashboard, CRM panel, fake app screen, fake metrics, fake
ratings, vague agency hero, or a hero that only says MindWP builds websites.

### 02 - Where Work Slips

**Heading:** The work is already there. These are the leaks.

**Section job:** Show that the buyer's business is active and that leakage
happens in ordinary working-day moments.

**Starter content / copy direction:** The business is not quiet. Calls come in
while the team is busy. Forms wait in inboxes. Consultation requests sit too
long. Quotes go out and nobody knows who followed up. Good work finishes, but
proof never makes it back to the website.

**Visual design direction:** Editorial evidence board. It should feel observed
and specific, not like generic pain cards.

Useful content blocks:

- The missed call
- The waiting form
- The quiet quote
- The forgotten review
- The unclear next step
- The local trust gap

**Hierarchy/dominance:** Quiet/supporting, but visually shaped enough to avoid
flatness.

**Possible interaction:** None required. If used, a simple progressive reveal
can sequence the leak examples.

**Mobile behaviour:** Present as a readable evidence stack with varied emphasis.
Avoid six identical blocks.

**Fail conditions:** Six equal feature cards, repeated "missed leads" wording,
generic agency pain points, or over-explaining the whole system too early.

### 03 - Contact Form Is Not The Finish Line

**Heading:** The contact form is not the finish line.

**Section job:** Reframe the normal website endpoint as the start of real
handling.

**Starter content / copy direction:** Most websites stop when someone calls,
clicks, or submits. That is exactly where the real handling starts. A MindWP
website carries the enquiry forward - answered, owned, followed up, and turned
into proof.

**Visual design direction:** Strong contrast section:

- Most websites stop here.
- MindWP carries the enquiry forward.

This should be a visual and typographic moment, not a plain paragraph section.

**Hierarchy/dominance:** Secondary strong section.

**Possible interaction:** A small before/after transition or scroll reveal can
help, but the contrast must read without interaction.

**Mobile behaviour:** Keep the contrast immediate. Use stacked statements with
clear visual separation.

**Fail conditions:** CRM language, workflow software, dashboard panels, generic
process diagram, or a plain heading-paragraph treatment.

### 04 - What MindWP Actually Builds

**Heading:** A smart website with the handling built in.

**Section job:** Make the offer tangible and decisive.

**Starter content / copy direction:** The page explains the offer clearly. Trust
appears where decisions happen. Calls, forms, messages, quote requests, and
consultation enquiries land somewhere useful. The next step stays visible. Good
work becomes proof.

**Visual design direction:** Major offer peak. It should feel tangible,
specific, and built. It can combine strong typography, proof/media, and a
structured path, but it must not collapse into a small feature grid.

Content groups:

- Clear offer
- Trust before contact
- Enquiry landing
- Response path
- Follow-up ownership
- Proof loop

**Hierarchy/dominance:** Primary visual peak.

**Possible interaction:** Optional focused highlights across content groups if
they clarify the connected offer.

**Mobile behaviour:** Keep the offer visible early. Stack content groups in a
deliberate sequence, not equal cards.

**Fail conditions:** Small generic feature cards, SaaS feature language,
platform setup language, or abstract web-design claims.

### 05 - Certainty Before Enquiry

**Heading:** They do not need more information. They need enough certainty to
ask.

**Section job:** Explain the pre-enquiry trust problem without pressure or hype.

**Starter content / copy direction:** A serious buyer or patient is not only
reading. They are checking whether they understand the service, trust the
provider, and know what to do next.

**Visual design direction:** Quiet premium editorial section. Strong typography,
calm spacing, and minimal support. This section should slow the page down after
the offer peak.

**Hierarchy/dominance:** Quiet/supporting.

**Possible interaction:** None.

**Mobile behaviour:** Keep the line breaks elegant and the reading measure
tight. Avoid long paragraphs.

**Fail conditions:** Conversion-rate language, medical claims, aggressive CTA
pressure, or filler copy that sounds like a marketing blog.

### 06 - The Next Step Stays Visible

**Heading:** The enquiry arrives. The next step has to stay visible.

**Section job:** Show the post-enquiry handoff in plain operational language.

**Starter content / copy direction:** The enquiry should not depend on whoever
remembers to check the inbox. The right person needs to know. The next step
needs to be clear. Follow-up should not disappear into memory.

**Visual design direction:** Clean handoff structure. A horizontal flow can work
on desktop and become vertical on mobile.

Content steps:

- Lands somewhere useful
- Right person knows
- Next step is clear
- Follow-up stays visible

**Hierarchy/dominance:** Quiet/supporting with enough structure to carry the
handoff idea.

**Possible interaction:** None required. A subtle active step may help if
implemented with accessible states.

**Mobile behaviour:** Vertical handoff. Keep step labels short and readable.

**Fail conditions:** "Your CRM", quote/invoice tool framing, automation-product
feel, or fake task-management UI.

### 07 - Five Systems, One Connected Site

**Heading:** Five systems. One connected site.

**Subheading:** Find. Catch. Carry. Prove. Repeat.

**Section job:** Explain the connected MindWP model as one path that protects
where work usually slips.

**Starter content / copy direction:** MindWP protects the places where work
usually slips.

System spine:

- Find - nearby customers can find and verify you.
- Catch - enquiries are caught and answered.
- Carry - follow-up has an owner, status, and next step.
- Prove - good work becomes visible proof.
- Repeat - proof supports the next find.

Smart Website Systems is the base/front door connecting the path, not one equal
card among five.

**Visual design direction:** One of the strongest sections. It should feel like
a connected system, not a services menu.

**Hierarchy/dominance:** Primary visual peak.

**Possible interaction:** A stepper or progressive highlight can work if it
helps the reader understand the path.

**Mobile behaviour:** Preserve sequence and relationship. Use an ordered path or
accordion-like reveal only if all essentials remain visible.

**Fail conditions:** Five equal cards, flat table, generic services grid, or a
design that makes Smart Website Systems look like just another service tile.

### 08 - Local Trust: Found And Verified

**Heading:** Found nearby. Trusted before they call.

**Section job:** Connect visibility to verification and trust before contact.

**Starter content / copy direction:** Visibility only helps when people can
verify the business, understand the service, and see a clear next step. Local
trust starts before the call.

**Visual design direction:** Split section. Strong text left, local trust visual
right. A local/map/trust treatment is allowed here when it stays honest and
non-fake.

**Hierarchy/dominance:** Secondary strong section.

**Possible interaction:** None required.

**Mobile behaviour:** Text first, supporting visual second. Do not let the local
visual dominate or become unreadable.

**Fail conditions:** Ranking guarantees, fake map-pack result, fake ratings,
"dominate Google", or SEO hype language.

### 09 - Work Proof

**Heading:** Real work, shown clearly.

**Section job:** Prove craft and credibility with visible work, not invented
numbers.

**Starter content / copy direction:** MindWP earns trust with visible work, not
invented numbers. Start with healthcare/practice proof, then show serious
service-business work.

**Visual design direction:** True proof showcase, not a basic screenshot grid.
Screenshots must be large enough to prove craft. Use fewer, larger proof moments
over many small thumbnails.

Proof asset priority:

- Primary: `work-healthcare-service-page.png`
- Primary service-business: `work-home-services-site.png`
- Optional: `work-optical-retail-site.png`
- Optional: `work-property-management-site.png`
- Lower priority: `work-support-program-site.png`
- Lower priority: `work-tourism-service-site.png`
- Exclude: `work-saas-product-site.png` unless later approved

Labels must be neutral and honest. Do not invent client names, outcomes,
locations, dates, ratings, metrics, or testimonials. If proof type is unclear,
mark it as needing user confirmation before final copy.

**Hierarchy/dominance:** Primary visual peak.

**Possible interaction:** Gallery/filter only if it helps comparison and does
not hide essential proof. `See the work` may appear here as a secondary action.

**Mobile behaviour:** Keep screenshots large enough to inspect. Use stacked
proof stories or a usable gallery with visible captions.

**Fail conditions:** Basic screenshot grid, tiny unreadable screenshots, fake
results, fake labels, SaaS product proof, or overusing lower-priority assets.

### 10 - Specialist Clinics

**Heading:** What this looks like for a specialist clinic.

**Section job:** Make the clinic-first audience priority explicit and credible.

**Starter content / copy direction:** For a specialist clinic, the website is
the practice front door. Patients need treatment clarity, trust, proof, and a
safe next step into a consultation or booking path.

Content points:

- Treatment clarity
- Patient trust
- Consultation confidence
- Proof near the decision
- Follow-up path

**Visual design direction:** Clinic-first, premium, specific. This should feel
like a strong market-positioning section and should not look like a generic
healthcare landing page.

**Hierarchy/dominance:** Secondary strong section.

**Possible interaction:** Optional market-fit tabs or decision-moment highlights
only if they clarify the clinic path.

**Mobile behaviour:** Keep clinic positioning and patient trust visible before
any supporting detail.

**Fail conditions:** Healthcare software, EMR, compliance framing, medical
claims, patient-result claims, or generic clinic stock-page tone.

### 11 - Serious Service Businesses

**Heading:** Serious service businesses need the same path.

**Section job:** Keep service businesses included without taking over the
homepage.

**Starter content / copy direction:** For roofers, HVAC firms, plumbers, and
other serious service businesses, the leak is often the considered job that goes
quiet - the quote nobody followed up, the service area that is unclear, the
proof that sits unused.

Content points:

- Quote requested
- Survey discussed
- Replacement considered
- Follow-up missed
- Proof not visible

**Visual design direction:** Companion section to clinics, but visually
different. It should feel practical and commercially serious, not like cheap
contractor lead generation.

**Hierarchy/dominance:** Quiet/supporting.

**Possible interaction:** None required.

**Mobile behaviour:** Keep compact and confident. Avoid making this section
feel larger than the clinic section.

**Fail conditions:** Emergency call-out framing, cheap contractor lead-gen tone,
or a sudden shift into broad agency positioning.

### 12 - Nothing Depends On Memory

**Heading:** Nothing depends on someone remembering.

**Section job:** Land the operational payoff in one strong idea.

**Starter content / copy direction:** Important work should not rely on
scattered inboxes, owner memory, or someone checking later. The next step needs
somewhere to live.

**Visual design direction:** Short dark statement band. Mostly typography.
Strong and simple.

**Hierarchy/dominance:** Quiet/supporting with strong tonal contrast.

**Possible interaction:** None.

**Mobile behaviour:** Keep concise. One idea only.

**Fail conditions:** Over-explaining systems again, fake workflow UI, or turning
the moment into another feature section.

### 13 - The Review Finds Where Work Slips

**Heading:** The review finds where work slips.

**Section job:** Explain the diagnostic next step and make the CTA feel useful,
practical, and low-risk.

**Starter content / copy direction:** Before we prescribe, we look at the
current website and handling path.

Content groups:

- Clarity - can people understand what you do?
- Trust - is proof placed where decisions happen?
- Enquiry path - do calls, forms, and messages land somewhere useful?
- Response - what happens after contact?
- Follow-up - who owns the next step?
- Proof - does good work become visible?
- Priority - what should be fixed first?

**Visual design direction:** Conversion/planning peak, not a heavy visual-object
section. Keep it simple, practical, multi-content, and diagnostic. It should
feel like a clear next step, not a product feature.

**Hierarchy/dominance:** Secondary strong section and conversion/planning peak.
It is not a primary visual peak.

**Possible interaction:** Optional checklist expansion if useful, but all
diagnostic categories must remain understandable without interaction.

**Mobile behaviour:** Use compact diagnostic groups with a clear CTA path.

**Fail conditions:** Review document visual, audit score, fake report,
dashboard, quote tool, heavy visual-object treatment, or pressure-selling.

### 14 - Built By Builders / Honest Fit

**Heading:** Built by the people who actually build it.

**Section job:** Establish credible fit without vanity or fake proof.

**Starter content / copy direction:** MindWP is builder-led, with
service-business website craft going back to 2015 and a small senior team. This
is for established businesses and clinics with real activity and real leakage -
not cheap-site shoppers, brochure-only redesigns, or hype seekers.

Content groups:

- Built by builders
- Good fit
- Not fit

**Visual design direction:** Calm editorial split. Keep tone direct and
measured.

**Hierarchy/dominance:** Quiet/supporting.

**Possible interaction:** None.

**Mobile behaviour:** Stack content groups and keep the "good fit / not fit"
distinction clear.

**Fail conditions:** Fake team proof, founder vanity, aggressive exclusion, or
generic about-agency copy.

### 15 - FAQ

**Heading:** Questions before the review.

**Section job:** Remove common objections before the final close.

**Starter content / copy direction:** Answers should be practical, calm, short,
and aligned with service boundaries.

FAQ topics:

- What is a website review?
- Is the website ours?
- Do you run the handling?
- Do you run ads?
- Do you guarantee leads or rankings?
- Is this only for clinics?
- What happens after the review?

**Visual design direction:** Clean FAQ. Accessible accordion later is fine, but
answers should not hide core claims needed for trust.

**Hierarchy/dominance:** Quiet/supporting.

**Possible interaction:** Accessible accordion.

**Mobile behaviour:** Accordion rows need large tap targets, visible focus
states, and readable open content.

**Fail conditions:** Backend platform names, "your CRM", guarantees,
overlong answers, or vague agency positioning.

### 16 - Final CTA

**Heading:** If the website is not carrying the work, find out where it slips.

**Section job:** Close with one clear diagnostic action.

**Starter content / copy direction:** Request a calm review of the website and
the handling path around it.

**CTA:** Request a Website Review

**Visual design direction:** Strong dark final close. One action only.

**Hierarchy/dominance:** Primary visual peak.

**Possible interaction:** None.

**Mobile behaviour:** Keep the message and one CTA visible without a cluster of
secondary links.

**Fail conditions:** `See the work`, book a demo, get a free quote, start
trial, CTA cluster, or pressure language.

## Later Implementation Notes

- Keep the Home route thin.
- Build a fresh Home surface during the implementation sprint; do not restore a
  failed draft or copy old visual shells.
- Use existing shared primitives where they help: `Section`, `Container`,
  `Button`, `Badge`, `Eyebrow`, reveal hooks, and existing media foundations.
- Prefer readable page-level CSS for Home-specific composition and responsive
  behavior.
- Use isolated modules only for genuinely isolated interactive islands, unusual
  state styling, or selector-risk containment.
- Do not change tokens, shared shell, header, footer, or global primitives
  unless the implementation scope explicitly allows it or the current foundation
  blocks the page from working.

## QA And Validation Plan For The Build Sprint

Before approving the future homepage build:

- Confirm first-glance commercial meaning at desktop and mobile sizes.
- Confirm the page reads as five acts, not 16 repeated sections.
- Confirm visual peaks and quiet sections are distinguishable.
- Confirm clinics lead proof and market positioning while service businesses
  remain included.
- Confirm proof screenshots are large enough to inspect.
- Confirm all proof labels are honest and uninflated.
- Confirm no backend platform names, "your CRM", fake proof, fake metrics,
  ratings, testimonials, guarantees, or SaaS/product framing appear.
- Confirm CTAs use approved language and the final CTA has one action only.
- Confirm interactions are keyboard accessible and nonessential to
  comprehension.
- Confirm reduced-motion behavior.
- Run source validation after implementation: `pnpm check`, `pnpm build`, and
  `pnpm test`.
- Capture rendered desktop screenshots at 1440px and 1280px.
- Capture mobile at 400px.
- Capture tablet at 1024px when nav, media, grids, multi-column sections, or
  major responsive structure changes.
- Capture important section crops.
- Passing build is not visual approval; rendered quality must prove the plan.

## Failed Draft Warning

- Do not make 16 flat sections.
- Do not treat the section list as the design.
- Do not let simplified guidance become visually empty.
- Do not make every section heading plus paragraph plus rows.
- Do not use small repeated cards as the default visual answer.
- Do not stop at passing build; visual quality must be proven in rendered QA.
