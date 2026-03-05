# Brainstorm: Migrate boldvideo.com from Webflow to Next.js

**Date:** 2026-03-05
**Status:** Ready for planning

## What We're Building

A pixel-perfect recreation of the entire boldvideo.com marketing site — currently built in Webflow — into a Next.js 16 codebase that is fully "LLM-first": every change to the site (content, layout, styling, features, deploys) is made through conversation with an LLM, not by hand-editing code or using a visual editor.

The site includes:
- **Homepage:** Hero, client logos marquee, embedded YouTube video, feature section ("Put Your Videos to Work"), team bios (Marcel & Rob), footer with link columns, "Request Access" modal form
- **Subpages:** Guides, API docs, SDK docs, comparison pages (vs YouTube, vs Vimeo), legal pages (Privacy, Terms)
- **Interactive elements:** Modal form, accordion/details with rotate animations, mobile hamburger menu, tab components with fade-in, responsive slider (3/2/1 columns), marquee scroll animations
- **Design:** Inter font, dark/neutral palette with slate (#354857) and green (#259d4d) accents

## Why This Approach

### Next.js 16 + Tailwind v4 + MDX + TypeScript

**LLM-first rationale:** Everything lives in code files that an LLM can read and modify. No black-box CMS, no visual editor, no database — just components and content files. This is the most LLM-editable architecture possible.

- **Next.js 16 (App Router):** Latest stable (16.1.x), Turbopack by default for dev and build, React 19.2 with View Transitions, Vercel-native deployment, React Server Components
- **Tailwind CSS v4:** Styles are inline and greppable — an LLM can find and change any style without navigating CSS files. v4 is cleaner, CSS-first config, no purge issues
- **MDX:** Content-heavy pages (guides, comparisons, legal) are Markdown with embedded React components. Perfect for LLM copy editing while keeping component flexibility
- **TypeScript (strict):** Catches errors before runtime, gives the LLM type information to work with, prevents drift
- **No CMS for v1:** Adding Sanity later is straightforward (content modeling after structure is settled avoids rework). Rob gets CMS access in v2.

### What we considered and rejected

- **Sanity from day 1:** Adds complexity before it's needed. Content modeling before final page structure = rework.
- **Astro:** Lighter weight but weaker ecosystem, less interactivity support, secondary Vercel integration, less LLM training data.
- **Gatsby:** Already tried in bold-landing-v0 (2018). Outdated.

## Key Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Next.js 16 (App Router, Turbopack) | Latest stable, React 19.2, Vercel-native |
| Styling | Tailwind CSS v4 | Inline, greppable, LLM-friendly |
| Content format | MDX for content pages, TSX for structural pages | Best of both worlds |
| TypeScript | Strict mode | Error prevention, LLM context |
| Linting | ESLint (flat config) + Prettier | Standard quality guardrails |
| Analytics | Plausible (keep existing) | Already in use, privacy-friendly |
| Forms | Prototype stub, later Resend or Loops.so | Don't over-engineer v1 |
| Deployment | Vercel | Existing familiarity, zero-config |
| CMS | None for v1, Sanity planned for v2 | YAGNI — add when Rob needs it |
| Visual fidelity | Pixel-perfect + all animations | Exact replica of current Webflow site |
| Font | Inter (Google Fonts) | Matches current site |

## Quality & DX Guardrails

- **ESLint** with Next.js recommended + strict TypeScript rules (flat config)
- **Prettier** for consistent formatting
- **TypeScript strict mode** — no `any`, no implicit returns
- **Tailwind CSS v4.2** — CSS-first config, no `tailwind.config.js` bloat
- **React 19.2** — View Transitions for page animations, useEffectEvent
- **TypeScript 5.9** — latest stable
- **next/image** for all images (automatic optimization, WebP/AVIF)
- **Turbopack** — default in Next.js 16 for dev and build
- **Lighthouse CI** or manual checks for performance regression
- **Git** with conventional commits

## Project Structure (Proposed)

```
boldvideo.com/
  app/
    layout.tsx          # Root layout (Inter font, Plausible, metadata)
    page.tsx            # Homepage
    guides/
    api-docs/
    sdk/
    vs-youtube/
    vs-vimeo/
    privacy/
    terms/
  components/
    header.tsx          # Nav + mobile menu
    footer.tsx
    hero.tsx
    logo-marquee.tsx
    video-embed.tsx
    feature-section.tsx
    team-section.tsx
    request-access-modal.tsx
    accordion.tsx
    slider.tsx
    tab-component.tsx
  content/             # MDX files for content pages
  public/
    images/
    fonts/
  lib/
    utils.ts
  tailwind.css         # Tailwind v4 entry point
  next.config.ts
  tsconfig.json
  package.json
```

## Migration Strategy

1. **Scaffold** the Next.js 16 project with all tooling configured
2. **Extract assets** from the Webflow site (images, logos, fonts)
3. **Build components** bottom-up: primitives (accordion, tabs, slider) then composites (hero, features, team)
4. **Recreate homepage** with pixel-perfect fidelity including all animations
5. **Recreate subpages** using MDX for content-heavy pages
6. **Wire up** Plausible analytics, form prototype, metadata/SEO
7. **Visual QA** against the Webflow site using side-by-side screenshots
8. **Deploy** to Vercel, point DNS

## Open Questions

None — all key decisions resolved during brainstorm.
