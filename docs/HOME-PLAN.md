# Home Plan - Standalone Build Brief

This is the single operating brief for building the MindWP homepage. A new chat
should be able to read this file and understand the homepage strategy, visual
direction, copy boundaries, implementation approach, motion allowance, proof use,
and QA bar without rereading every other project doc.



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


CTA rules:

- Primary CTA: `Request a Website Review`
- Use `See the work` only where proof/work makes sense.
- Final CTA has one action only: `Request a Website Review`.
- Avoid `Book a demo`, `Start free trial`, `Get a free quote`, `Dominate
  Google`, and guaranteed-outcome CTA language.




1. Hero — Work Comes In
Dark navy, premium editorial opening. Large headline, strong paragraph, primary CTA, secondary “See the work”, and a working-day artifact showing local search, service page visit, form enquiry, missed call, and consultation request.

2. Where Work Slips
Light editorial evidence section. Show that the work is already there but slips between search, page visit, form, call, quote, consultation, follow-up, and review.

3. Website + Handling
Explain that MindWP builds the website and handling path together. Use a strong visual artifact, not a plain text block.

4. Contact Form Is Not The Finish Line
A contrast section showing what happens when an enquiry is left to chance versus when it moves into a clear path.

5. Short Dark Principle Strip
A memorable pause line such as:
“They do not need more information. They need enough certainty to act.”

6. The Enquiry Arrives
Show the first handling moment: the request lands, the right person knows, a next step becomes visible.

7. Five Systems, One Connected Site
Major dark visual peak. Smart Website Systems must appear as the hub/base, with Local SEO Authority, Lead Response & Handling, Follow-Up & CRM, and Reputation & Review connected around it. Do not make five equal cards.

8. Found Nearby, Trusted Before They Call
Local trust section with map/radius/checklist style artifact. No fake rankings or map-pack promises.

9. Website Work You Can Inspect
Large proof/work section. Use one dominant browser/proof frame and supporting previews. Label as demonstration/proof placeholders if needed. Make proof large enough to inspect.

10. Specialist Clinic Scenario
Clinic-first scenario section. Composite scenario, not a client outcome. Show treatment/service clarity, local trust, proof near decision, and consultation path.

11. Dark Memory Strip
Short dark strip:
“Nothing depends on someone remembering.”
Use it as a rhythm break.

12. Operational Payoff
Show how enquiries, follow-up, and proof become easier to see. Use editorial documents/notes/cards, not dashboard analytics.

13. It Is Not A Launch, It Compounds
Show that the site improves as real enquiries, follow-up, reviews, and proof return into the system.

14. Built By Builders
Builder-led credibility section. Mention shipping WordPress/service-business websites since 2015, small senior team, serious systems, not cheap page packages.

15. This Is Not For Everyone
Fit filter section. Good fit vs not fit. Calm tone, not arrogant.

16. Website Review + FAQ + Final CTA
You may split this into separate visual sections if it works better:
- Website Review diagnostic section on dark navy.
- FAQ on light background.
- Final dark CTA with one action only.
- Footer.




CSS approach:

- Use existing tokens and typography roles.
- Prefer role-backed color tokens over raw values.
- Page CSS can own local composition, grids, artifacts, responsive rules, and
  section rhythm.
- Reserve display scale for hero and major visual peaks.
- Use `aspect-ratio` for artifacts and proof media.
- Use `min-width: 0` where text lives inside flex/grid.
- Avoid fixed heights unless a visual artifact needs stable framing.

Shell/global changes:

- Do not change tokens, shared shell, header, footer, or global primitives
  casually.
- They may be changed only if scoped or if the homepage cannot work well without
  the change. 

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


Rendered audit checklist:

- First-glance commercial meaning is clear.
- Offer appears early enough.
- Visual peaks and quiet sections are distinguishable.
- Clinic-first proof and positioning are visible.
- Service businesses remain included.
- Proof screenshots are large enough to inspect.
- Final CTA has one action only.
- No overlap, overflow, cramped labels, or button text clipping.
- Mobile hierarchy is not just desktop stacked.
- Motion is nonessential and reduced-motion safe.
- Copy boundaries are clean before approval.
- Passing build is not visual approval.
