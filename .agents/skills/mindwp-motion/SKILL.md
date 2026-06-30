---
name: mindwp-motion
description: MindWP motion and interaction rules. Use when adding, reviewing, or planning animation, transitions, scroll behavior, reduced motion, or interactive section islands.
---

# MindWP Motion

Motion must clarify meaning. It cannot rescue weak design.

Stillness is the default.

## Rules

- Use CSS transitions first.
- Use transform and opacity where possible.
- Do not animate layout unless there is a strong reason.
- Do not reveal-gate LCP content, hero headline, or primary CTA.
- Respect `prefers-reduced-motion`.
- Keep the final static composition strong with JavaScript disabled.
- Avoid ambient motion, cursor tricks, background noise, and decorative animation loops.
- Do not animate anything that looks like a real control unless it is actually interactive.

## Earned Motion

Use motion only when it clarifies:

- sequence
- handoff
- before/after contrast
- response/follow-up path
- local trust
- proof
- state change

Motion belongs inside the scene when it shows the concept happening. It must not fake controls, states, or affordances.

GSAP or scroll choreography belongs only in isolated section client islands when the section earns it.

## Verification

- Check desktop and mobile.
- Check reduced motion.
- Watch for jank, overlap, late content, and focus/tap problems.
- If the motion makes the offer harder to understand, cut it.
