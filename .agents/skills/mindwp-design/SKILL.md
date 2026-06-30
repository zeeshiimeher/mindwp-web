---
name: mindwp-design
description: MindWP visual thesis, artifact choice, coherence, section silhouette, dominance, density, rhythm, mobile hierarchy, and screenshot-audit judgment. Use for visual planning, design critique, page/section form decisions, and avoiding generic generated-looking UI.
---

# MindWP Design

MindWP should feel like a confident senior studio: premium, calm, human, specific, credible, and properly made. The design has to make commercial meaning visible before it shows visual taste.

Use `docs/DESIGN-SYSTEM.md` for practical CSS-system roles, typography roles, section rhythm, and rendered QA widths.

## Visual Thesis

Before a major section is built, define:

- section job
- buyer-world idea or business moment
- buyer message
- chosen form and why it fits
- silhouette
- dominance rank
- artifact, if any, and why it earns space
- density level
- contrast with adjacent sections
- mobile hierarchy
- fail conditions

If the thesis sounds like slots to fill, keep planning. Composition follows the buyer-world idea.

## Form Decisions

No common UI form is banned. The failure mode is defaulting to a form without knowing what it is doing.

Use:

- cards when items are true peers or need contained comparison
- lists when scannability, sequence, status, or prioritization matters
- grids when grouping, density, or side-by-side comparison matters
- panels when a bounded operating surface helps the buyer understand a path
- browser/page frames when real website craft, service pages, or demonstration builds are being shown
- split layouts when two ideas need direct contrast or handoff
- simple editorial sections when clarity, pacing, authority, or breathing room matters
- icons when they clarify controls, categories, or status without becoming decoration
- motion when it explains sequence, handoff, contrast, state change, or proof

Rebuild the form only when it does not serve the section job.

## Artifacts

Artifacts should explain or prove something:

- real or demonstration website work
- service or treatment page surface
- local trust surface
- enquiry, response, or follow-up handoff
- review/proof object
- diagnostic note or setup record
- before/after operating contrast
- visible website-to-handling path

Abstract subjects need concrete buyer-world proxies. Avoid artifacts that require the surrounding copy to explain why they matter.

## Coherence

A page should feel shaped by one deliberate system:

- one radius language, with exceptions only when the component role demands it
- one shadow/elevation language
- one icon family and stroke/fill approach
- controlled accent use; emerald is signal, not texture
- navy as base or punctuation, not every other section
- type scale and spacing rhythm that repeat without making every section identical
- forms that vary by section job, not by random aesthetic switching

Mixed design axes are a warning sign. Before adding a new visual language, decide what job the existing language cannot do.

## Rhythm And Dominance

Avoid repeating the same section silhouette by accident. Adjacent sections should differ in at least one meaningful way: density, dominance, artifact type, alignment, surface, pacing, or interaction.

Most major commercial pages should use a dark hero as the first impression unless the page role gives a stronger reason not to. After a dark hero, the second section should normally be white or paper, not another dark band. This is a default rhythm, not a required route template. Work, Contact, Pricing/Process, Legal, Resource/Blog, proof-led pages, and any page whose role earns another opening can break the sequence.

Default section padding is the normal choice. Compact and spacious sections should be rare and intentional; the page should feel designed through surface sequence, silhouette, density, artifact choice, and hierarchy, not padding swings.

Strongest visual energy belongs to:

- hero
- offer reveal
- flagship artifact
- proof/work
- local or patient trust
- final CTA

A tall empty section is not a flagship. Design power comes from clarity, richness, proof value, and proportion.

## Mobile Hierarchy

Mobile must preserve hierarchy, not merely stack desktop shapes. For each important section:

- keep the main point visible early
- simplify artifacts without making them decorative
- avoid cramped labels, tiny proof, and awkward headline wraps
- keep CTA and tap targets reachable
- keep contrast and focus states visible

If a desktop artifact becomes unreadable on 400px mobile, design a mobile artifact instead of shrinking the desktop one. If it risks breaking below 400px, report the risk instead of making 375px the primary design target.

## Generated-Looking UI Checks

Fail the design when it reads as:

- generic SaaS marketing
- agency template
- report/deck layout
- unrelated section fragments
- repeated intro-plus-card-grid
- fake dashboard or fake metric proof
- decorative browser chrome with no real website craft
- polished surface without commercial meaning

Pass the design when the section's form visibly serves the business moment it owns.

## Screenshot Audit

Audit rendered work with:

- first-glance impression
- section job clarity
- repeated structures
- whether the hero and second-section silhouette repeats the last rebuilt page
- dominance and proof placement
- artifact truth and scale
- typography wrapping
- desktop rhythm
- mobile hierarchy
- CTA clarity
- what must be rebuilt
- what can remain

Use 1440px and 1280px desktop, 400px mobile, and 1024px tablet when nav, artifacts, grids, multi-column sections, or major responsive structure change.
