# MindWP design direction

This is the authority for visual quality, art direction, CSS authorship, interaction, responsive composition, and rendered approval. Business meaning comes from [STRATEGY.md](./STRATEGY.md); technical boundaries come from [ENGINEERING.md](./ENGINEERING.md).

## The standard

MindWP's website is part of its portfolio. It must feel designed, not assembled.

The visual experience should demonstrate:

- a clear and ownable art direction;
- memorable typography and composition;
- large, inspectable work and interface details;
- depth through crop, layering, light, texture, space, and motion;
- varied pacing across a long page;
- interactions that improve meaning or feeling;
- a mobile composition designed in its own right.

Avoid the repeated agency template of centred heading, paragraph, three equal cards, and CTA. Cards and grids are valid only when the content needs them.

MindWP builds a working website, not a software product. Do not borrow SaaS-dashboard furniture — status chips, segmented pill tabs, dashboard rows, or fake analytics counters — to illustrate a point that plain typography or a diagram can carry honestly.

## Design before implementation

For every major page, decide before coding:

1. The page's commercial job and emotional impression.
2. The central visual idea or metaphor.
3. The hero's dominant visual asset.
4. The page's signature element or behavior.
5. The typography, palette, image language, and material qualities.
6. The rhythm of visual peaks, explanation, proof, and breathing room.
7. The motion story and reduced-motion alternative.
8. How the idea is recomposed on mobile.

Do not start by selecting existing primitives or arranging copy blocks. Approve a compact visual plan or concept first.

## Long-page composition

A long homepage may contain many sections without feeling repetitive. Group sections into narrative acts so adjacent scenes advance one idea together.

Vary section form deliberately:

- full-viewport and compact;
- dark and light;
- editorial and spatial;
- static and interactive;
- full-bleed and contained;
- proof-led and copy-led;
- dense and quiet.

Short principle strips should behave as transitions, not full template sections. Closely related sections may share one visual environment while remaining separate semantic sections.

Do not give every section the same container, top padding, heading placement, media ratio, border radius, or reveal animation.

A consistent header shell (eyebrow, heading, lead — centred or split, whichever that section already uses) is connective tissue, not repetition, and does not need to be forced into different alignments for variety. Repetition lives in what gets built *below* the header: if three sections each resolve into a numbered three-item row, or every card grid uses the same tint-and-icon pattern, that inner composition is what must diversify — cards here, a two-column split there, a diagram, a spine, a signed note, plain prose. Judge sameness by the inner device, not by whether two headings share an alignment.

## CSS decision

MindWP uses **custom CSS**, not Tailwind, as its visual authoring system.

- Global CSS owns reset behavior, shared accessibility states, true brand tokens, and stable shell/form foundations.
- Page CSS owns art direction, composition, local variables, responsive behavior, and signature visuals.
- Component CSS owns an isolated interaction or genuinely reused behavior.
- Bem class system 
- Shared global css 
- Page specific css file 

Use local custom properties and one-off values when they express a deliberate page concept. Promote a value to a global token only after it becomes a stable repeated role.

Keep selectors readable, shallow, and close to the markup they style. CSS should support semantic JSX rather than require wrapper-heavy component factories.

## Tokens

Create tokens after the visual direction is chosen, not before it.

Global tokens should represent repeated roles:

- page and text colors;
- focus and status colors;
- shared spacing and containers;
- stable type roles;
- repeated radii and elevation;
- motion durations and easings;
- shell layers.

Page-specific gradients, masks, perspective, project accents, textures, and choreography values should remain local until repetition proves otherwise.

## Typography

Typography carries much of the brand personality.

- for main heading h1,h2,h3 body text or etc do not add custom font sizes into bem classes try to use the global typography like h1{},h2{},body etc.
- you are allowed to use the typo tokens if in some places you need h3 smaller than global you can use the global tokens.
- Choose the display and body families for the approved art direction, not because they already exist in the repository.
- Use display scale, weight, width, italic, contrast, and line breaks intentionally.
- Allow different section headings to have different roles and compositions.
- Keep body text readable and restrained.
- Use utility or mono styling only when the content is genuinely procedural, locational, timed, or system-like.
- Keep important text crawlable; do not place meaning only in images, canvas, or pseudo-elements.

Avoid using viewport scaling as a substitute for a coherent type system. Test important wraps at every required width.

## Color and material

Choose a compact palette with named roles and verified contrast. Brand color should guide attention rather than cover every component.
- Follow the global css and global tokens.
Depth may come from:

- tonal variation;
- controlled gradients and light;
- soft transparency or blur;
- grain or texture;
- shadow and overlap;
- project-derived accent color;
- high-contrast scene changes.

Do not use effects simply to imitate a trend. Status colors retain actual state meaning.

The homepage's three surfaces each carry a distinct role: paper (default light), navy (dark, high-conviction moments), and a cool mist tint (quiet secondary sections and real-work proof galleries — an editorial print environment, not another light-mode paper). Mist shares an undertone with the emerald accent rather than fighting it; an earlier warm "bone" tone was tried and dropped for clashing with navy's cool blue-dark. A brand accent (emerald) stays a guide for attention — lines, icons, active states — and should not become a background fill or tint. A pastel wash of the accent color reads as a SaaS onboarding screen; a tonal shift between paper, mist, and navy reads as art direction.

## Layout

Use containers as alignment anchors, not cages. Full-bleed media, controlled overflow, sticky scenes, offset text, nested grids, and layered compositions are allowed.

Use grid for deliberate two-dimensional composition and flex for rows, clusters, and alignment. Prefer intrinsic sizing. Reserve absolute positioning for controlled layers, annotations, and decoration rather than normal content flow.

Section spacing should express relationship and pacing. Adjacent parts of one act may sit close; a major change of argument or atmosphere may need more space.
Section header like eyebrow ,heading paragpah is not a pattern. eyebrow can be option but we need h2 and paragraph atleast for each section so the main thing is inner content that can be designed in any way.we can take new container inside the section.

## Components

Build the first page locally. Share only after repetition is real.

Shared components are valuable when they preserve stable behavior, semantics, accessibility, or repeated visual roles. They must not force unique sections into one shell.

Do not create prop-heavy marketing factories, universal section components, or a large primitive library before the homepage establishes the actual design language.

Actions, navigation, and forms must retain semantic elements, visible focus, adequate touch targets, clear labels, and complete interaction states. Their visual treatments may differ by real role.

## Media and proof

Show work large enough to judge. Use purposeful crops and separate mobile treatments when a desktop screenshot would become unreadable.

Reserve media space and provide explicit dimensions or aspect ratios. Preserve the important part of each asset rather than defaulting to centre-crop.

Acceptable visual material includes real work, honestly labelled demonstration builds, art-directed interface fragments, meaningful diagrams, original illustration, texture, and generated imagery that supports the concept.

Do not create fake analytics, fabricated client interfaces, invented maps, fake testimonials, or decorative dashboards.

## Motion

Use motion at:

1. **Feedback:** CSS transitions for hover, focus, active, selected, and control states.
2. **Choreography:** coordinated CSS or GSAP sequences for handoff, contrast, connection, or proof.
3. **Atmosphere:** restrained ambient movement, parallax, or pointer response that adds depth without carrying essential meaning.
4. Entry page load Animations on section in view.

Concentrate choreography into a few authored moments instead of revealing every block the same way.

The static composition must be complete. Do not hide the hero headline, primary action, LCP asset, or core proof behind animation. Reduced motion must remove non-essential movement without removing information.

Avoid scroll hijacking, long waits, hover-only meaning, constant expensive animation, and pinned scenes that lose orientation.

## Responsive composition

Responsive design is recomposition, not shrinking.

- Preserve the dominant idea of each section.
- Replace or reframe dense desktop media where needed.
- Keep source order logical.
- Reduce decorative layers before reducing readable type or touch targets.
- Design sticky, overlapping, and interactive sections separately for smaller screens.
- Ensure proof remains inspectable.

Required visual widths:

- `1640px` desktop tablet `1024` and `400px` mobile for every review (`pnpm capture:home` default);
- `1280px` and `766`, plus a reduced-motion pass, when a composition change risks tablet breakage or the work is animated (`pnpm capture:home -- --full`).
- most of the times mindwp-web already running dev server on localhost.you dont need to close the server you can keep loading the localhost so i can see the live.

Check below `400px` when a specific composition risks overflow.

## Approval

Build output is not visual approval.

Every major visual change requires full-page screenshots and relevant section crops at the required widths, plus a reduced-motion pass for animated work.

Review:

- first-glance impact;
- commercial clarity without reading every paragraph;
- typography and composition;
- visual repetition and fatigue;
- proof scale and cropping;
- interaction quality;
- mobile hierarchy;
- accessibility on the actual composed backgrounds;
- whether the result feels specific to MindWP.

Revise from rendered evidence until both technical and visual standards are met.


Web developer Intsructions 
Once rebuild the page htlm and css.

- Follow section>container 
- Follow proper flex system 
- if a section have two inner div make sure to give .container class to both.
- use the gap system try to use the .container default gap mostly as well.
- you can use the grid and try to use minmax way so it stays proper responsive.
- keep the responsive behaviour in mind while layouting the html and writing the css.
- dont use seperate html for desktop or for mobile for a section.
- follow the section alternate bg rythm 
- use proper est html,css,flexbox and grid practices.
- add hover styles and hover little interactions.
- Use display flex as possible as you can and also avoid adding max width first natuarrly fall everything then optimize.