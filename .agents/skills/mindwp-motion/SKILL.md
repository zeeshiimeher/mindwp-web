---
name: mindwp-motion
description: MindWP motion and interaction rules. Use when adding, reviewing, or planning animation, transitions, scroll behavior, interaction feedback, reduced motion, or isolated client-side motion islands.
---

# MindWP Motion

Motion must support meaning. It cannot rescue weak design or replace proof.

Stillness is the default.

## When Motion Is Earned

Use motion when it clarifies:

- sequence
- handoff
- before/after contrast
- response or follow-up path
- local trust or proof appearing in context
- state change
- cause and effect
- interaction feedback

Do not add motion as wallpaper. If the section is unclear when static, fix the section first.

## Implementation Order

1. Static composition that works with JavaScript disabled.
2. CSS transitions for simple state feedback.
3. Shared motion hooks where the pattern already exists.
4. Isolated client island only when the section earns heavier choreography.

Use transform and opacity where possible. Avoid animating layout properties unless there is a strong reason and the result is measured.

## Boundaries

- Do not reveal-gate LCP content, hero headline, primary CTA, or core proof.
- Do not delay comprehension for a flourish.
- Do not animate fake controls, fake product interfaces, or fake states.
- Do not use ambient loops, cursor tricks, or background noise.
- Do not make scrolling feel hijacked unless the section itself is an earned interactive explanation.
- Do not require hover-only interaction for important content.

Scroll choreography or heavier animation libraries belong only in isolated section client islands when the section earns them.

## Motion System

Prefer a small set of named intents:

- `clarify`: gentle reveal or state shift
- `handoff`: sequence from one element to the next
- `contrast`: before/after or inactive/active change
- `confirm`: success or completion feedback
- `focus`: subtle emphasis on the current action

Durations and easing should come from shared motion tokens where possible. Similar interactions should move with the same rhythm.

## Reduced Motion

Respect `prefers-reduced-motion`:

- keep content visible
- remove non-essential movement
- replace spatial movement with opacity or instant state when needed
- preserve meaning without animation

Reduced motion is a requirement, not an enhancement.

## Verification

Check:

- 1440px and 1280px desktop
- 400px mobile
- 1024px tablet when motion affects nav, media, grids, multi-column sections, or major responsive structure
- reduced motion
- no overlap during transitions
- no jank or late content
- focus and tap behavior still works
- motion does not weaken the offer or proof

If motion makes the page harder to understand, cut it.
