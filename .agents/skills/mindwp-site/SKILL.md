---
name: mindwp-site
description: Plan, build, review, or refactor the MindWP Next.js website. Use for MindWP strategy and documentation, routes, pages, visual design, CSS, React components, navigation, forms, SEO, motion, responsive work, source cleanup, testing, or rendered QA.
---

# MindWP site workflow

Use this skill as the procedure for MindWP work. Do not copy business, design, or engineering facts into this file.

## 1. Load authority in order

Read the complete relevant files before acting:

1. `docs/STRATEGY.md` for business, offer, audience, proof, voice, claims, CTA, and IA.
2. `docs/DESIGN.md` for visual direction, custom CSS, composition, motion, responsive behavior, and rendered approval.
3. `docs/ENGINEERING.md` for stack, source ownership, routes, privacy, performance, and validation.
4. The page brief last when the task targets a planned page; use `docs/HOME-PLAN.md` for the homepage.

Read all four for a major page build. For a narrow task, read the smallest complete set that owns the decision.

## 2. Inspect before planning

- Check `git status` and preserve unrelated user work.
- Inspect the current source, usages, tests, and assets in scope.
- Treat existing code as evidence, not authority. Rewrite or remove it when the approved direction benefits.
- Do not restore deleted or ignored legacy implementations.
- Use source files for machine facts and documents for intent.
- Identify missing proof or assets instead of inventing them.

Do not edit during the audit pass.

## 3. Decide the change

State the outcome, source owner, affected files, and verification path.

For strategy or documentation work:

- Put each decision in one authority file only.
- Replace contradictory guidance rather than adding another exception.
- Update routers and source comments after renaming or deleting an authority.

For a major visual page:

- Define and critique the visual direction before coding.
- Map narrative acts to semantic sections.
- Plan the dominant asset, signature interaction, page rhythm, and mobile recomposition.
- Confirm what is real proof, demonstration material, or explanatory interface.

For a narrow source change:

- Follow the existing stable contract when it still serves the approved direction.
- Remove unused code only after proving usage.

## 4. Implement locally first

- Keep routes thin and Server Components by default.
- Keep unique page sections, data, and CSS local.
- Add Client Components only for real state, browser APIs, or earned motion.
- Share components or tokens only after repetition is proven.
- Keep private data in server-only environment variables.
- Keep claims, actions, and important text semantic and crawlable.

Do not create generic section factories or a speculative component system.

## 5. Verify in two layers

Run the technical gates defined in `docs/ENGINEERING.md` for the files changed.

For visual work, also follow the rendered approval process in `docs/DESIGN.md`:

- use a real browser;
- capture the required full-page views and section crops;
- inspect desktop, tablet, mobile, and reduced motion where applicable;
- iterate on visible problems before reporting completion.

A passing build does not approve the design.

## 6. Report clearly

Lead with the achieved outcome. Mention important decisions, changed authorities, verification results, and any genuine remaining risk.

End every report with:

- `What is done`
- `What is next`
