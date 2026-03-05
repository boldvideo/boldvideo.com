---
title: "feat: Migrate boldvideo.com from Webflow to Next.js 16"
type: feat
status: active
date: 2026-03-05
origin: docs/brainstorms/2026-03-05-webflow-to-nextjs-migration-brainstorm.md
---

# Migrate boldvideo.com from Webflow to Next.js 16

## Overview

Pixel-perfect recreation of the entire boldvideo.com marketing site — currently Webflow — into a Next.js 16 codebase. The site is "LLM-first": all changes (content, layout, styling, features) are made through conversation with an LLM. No CMS for v1 (Sanity planned for v2). Deploy on Vercel.

(see brainstorm: docs/brainstorms/2026-03-05-webflow-to-nextjs-migration-brainstorm.md)

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router, Turbopack) | 16.1.x |
| UI | React | 19.2.x |
| Styling | Tailwind CSS (CSS-first, no config file) | 4.2.x |
| Language | TypeScript (strict) | 5.9.x |
| Content | MDX for content pages, TSX for structural pages | — |
| Package manager | bun | latest |
| Linting | ESLint flat config + Prettier | latest |
| Analytics | Plausible | existing account |
| Images | next/image (WebP/AVIF) | built-in |
| Icons | lucide-react | latest |
| Class merging | clsx + tailwind-merge (`cn()` utility) | latest |
| Deployment | Vercel | — |

## Design Specifications

**Typography:** Inter (Google Fonts, weights 400 + 600) via `next/font/google`

**Color palette:**
- Background dark: #191919
- Slate accent: #354857
- Green accent: #259d4d (verify WCAG AA contrast — may need lighter variant for text on white)
- Text selection: #354857

**Breakpoints (Tailwind defaults):**
- Mobile: < 640px (1 column layouts)
- Tablet: 640–1023px (2 column layouts)
- Desktop: 1024px+ (3 column layouts, full nav)

## Project Structure

```
boldvideo.com/
├── app/
│   ├── layout.tsx              # Root layout: Inter font, Plausible, metadata, min-h-screen
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # Custom 404
│   ├── robots.ts               # Robots.txt (Next.js metadata API)
│   ├── sitemap.ts              # Sitemap (Next.js metadata API)
│   ├── vs-youtube/
│   │   └── page.tsx            # or page.mdx
│   ├── vs-vimeo/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.mdx
│   └── terms/
│       └── page.mdx
├── components/
│   ├── header.tsx              # Nav + mobile hamburger menu
│   ├── footer.tsx              # 4-column footer
│   ├── hero.tsx                # Hero section with CTA
│   ├── logo-marquee.tsx        # Client logos infinite scroll
│   ├── video-embed.tsx         # YouTube facade (thumbnail → iframe on click)
│   ├── feature-section.tsx     # "Put Your Videos to Work"
│   ├── team-section.tsx        # Marcel & Rob bios
│   ├── request-access-modal.tsx # Modal form (Name, Email, Comment)
│   ├── accordion.tsx           # Expandable sections with rotate animation
│   ├── slider.tsx              # Responsive slider (3/2/1)
│   └── tab-component.tsx       # Tabs with fade-in
├── lib/
│   └── utils.ts                # cn() utility
├── public/
│   ├── images/                 # Exported assets from Webflow
│   └── og-image.png            # Open Graph default image
├── app/globals.css             # Tailwind v4 entry: @import 'tailwindcss', @theme
├── postcss.config.mjs          # { plugins: { '@tailwindcss/postcss': {} } }
├── next.config.ts
├── tsconfig.json
├── .prettierrc
├── eslint.config.mjs           # Flat config
├── CLAUDE.md                   # Project conventions for LLM-first workflow
├── bun.lock
└── package.json
```

**Note on docs pages:** Guides, API docs, and SDK docs remain at the external `docs.boldvideo.com` subdomain. The footer links to that external site. These directories are NOT included in this project scope. (SpecFlow Q2 — resolved: keep external)

## Implementation Phases

### Phase 1: Project Scaffold

Set up the project with all tooling and conventions before writing any UI code.

**Tasks:**

- [x] `bun create next-app` with TypeScript, Tailwind CSS, App Router, Turbopack, ESLint (`next.config.ts`)
- [x] Configure TypeScript strict mode in `tsconfig.json` (`strict: true`, `@/*` path alias, `moduleResolution: "bundler"`)
- [x] Set up Tailwind v4 CSS-first config in `app/globals.css`:
  ```css
  @import 'tailwindcss';

  @theme {
    --color-slate-accent: #354857;
    --color-green-accent: #259d4d;
    --color-bg-dark: #191919;
    --font-sans: 'Inter', sans-serif;
  }
  ```
- [x] Set up PostCSS config (`postcss.config.mjs`) with `@tailwindcss/postcss`
- [x] Create `lib/utils.ts` with `cn()` utility (clsx + tailwind-merge)
- [x] Configure ESLint flat config (`eslint.config.mjs`): `next/core-web-vitals`, `next/typescript`, `no-console: ["warn", { allow: ["warn", "error"] }]`, `@typescript-eslint/no-explicit-any: "error"`
- [x] Configure Prettier (`.prettierrc`)
- [x] Set up `next/font/google` for Inter (400, 600) in root layout with CSS variable `--font-sans`
- [x] Create root `app/layout.tsx`: Inter font, `min-h-screen flex flex-col`, metadata (title, description, OpenGraph, Twitter card), Plausible script
- [x] Create `CLAUDE.md` with project overview, dev commands (`bun dev`, `bun run build`, `bun run lint`), architecture notes, code style guidelines (named exports, kebab-case files, `"use client"` only where needed, `cn()` for class merging)
- [x] Initialize git repo, create `.gitignore` (Next.js defaults + `.env*.local`)
- [x] Verify `bun dev` runs clean with Turbopack, no errors

**Success criteria:** `bun dev` starts, `bun run build` succeeds, `bun run lint` passes, TypeScript strict mode active, Tailwind v4 classes render correctly.

---

### Phase 2: Asset Extraction from Webflow

Extract all visual assets from the live Webflow site before building components.

**Tasks:**

- [ ] Download all images from boldvideo.com (hero images, team photos, client logos, etc.) → `public/images/`
- [ ] Extract client logos as individual SVGs where possible (cleaner, smaller, resolution-independent)
- [ ] Download team photos (Marcel, Rob) at high resolution
- [ ] Capture exact copy text from every page (homepage, vs-youtube, vs-vimeo, privacy, terms) into a reference document or directly into components
- [ ] Document the exact animation timings from the Webflow site (inspect CSS transitions):
  - Marquee scroll speed and direction
  - Accordion rotate duration and easing
  - Tab fade-in duration
  - Modal open/close transition
  - Hamburger menu animation
- [ ] Screenshot every page at desktop (1440px), tablet (768px), and mobile (375px) for visual QA reference → `docs/reference-screenshots/`
- [ ] Export any JSON-LD structured data from the current site (WebPage, SoftwareApplication, Organization schemas)
- [ ] Document current page titles and meta descriptions for each page

**Success criteria:** All images in `public/images/`, all copy text captured, animation specs documented, reference screenshots saved.

---

### Phase 3: Primitive Components

Build reusable interactive components bottom-up. These are the building blocks.

**3a: `components/accordion.tsx`**

- [ ] Expandable/collapsible sections with chevron rotate animation
- [ ] Only one item open at a time (exclusive mode, matching Webflow behavior)
- [ ] Default state: all closed
- [ ] Animation: chevron rotates 180° on open, content slides down with CSS transition
- [ ] Keyboard: Enter/Space to toggle focused item
- [ ] `aria-expanded`, `aria-controls` attributes
- [ ] `prefers-reduced-motion`: disable rotation and slide, instant toggle instead
- [ ] `"use client"` — requires state

**3b: `components/tab-component.tsx`**

- [ ] Tab list with active indicator
- [ ] Content panel with fade-in animation on switch
- [ ] First tab selected by default
- [ ] Keyboard: Arrow keys between tabs, Tab key into panel content
- [ ] `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`
- [ ] `prefers-reduced-motion`: instant switch, no fade
- [ ] `"use client"` — requires state

**3c: `components/slider.tsx`**

- [ ] Responsive grid: 3 columns (1024px+), 2 columns (640–1023px), 1 column (<640px)
- [ ] On mobile: swipeable carousel with touch gesture support and dot indicators
- [ ] On desktop/tablet: static grid (no carousel, just responsive columns)
- [ ] `prefers-reduced-motion`: no slide transitions on mobile, instant snap
- [ ] `"use client"` — requires touch/swipe handling

**3d: `components/logo-marquee.tsx`**

- [ ] Infinite horizontal scroll of client logos
- [ ] Duplicate logos to create seamless loop (CSS animation with `translateX`)
- [ ] Pause on hover
- [ ] `prefers-reduced-motion`: stop scrolling, show static row of logos
- [ ] `aria-hidden="true"` on duplicated logo set (decorative)
- [ ] `"use client"` — optional (pure CSS animation works, but hover pause needs JS)

**3e: `components/video-embed.tsx`**

- [ ] YouTube facade pattern: show static thumbnail with play button overlay
- [ ] On click: replace thumbnail with YouTube iframe (lazy load for performance)
- [ ] `loading="lazy"` on iframe
- [ ] Responsive aspect ratio (16:9) using Tailwind `aspect-video`
- [ ] Accessible play button with `aria-label="Play video"`
- [ ] `"use client"` — requires click state

**3f: `components/request-access-modal.tsx`**

- [ ] Modal overlay with form: Name (required), Email (required, validated), Comment (optional)
- [ ] Open/close animation (fade in backdrop, scale up modal)
- [ ] Focus trap: Tab cycles within modal when open
- [ ] Escape key to close
- [ ] Click outside to close
- [ ] Return focus to triggering button on close
- [ ] `aria-modal="true"`, `role="dialog"`, `aria-labelledby`
- [ ] Screen reader announcement on open
- [ ] Prototype form submission: POST to `/api/request-access` (Next.js API route) that logs to console in dev and returns success. This ensures the form flow is fully wired — swap in Resend/Loops later with a one-line change.
- [ ] Success state: "Thanks! We'll be in touch." message in the modal
- [ ] Client-side validation: required fields, email format regex
- [ ] `prefers-reduced-motion`: instant show/hide, no scale/fade
- [ ] `"use client"` — requires state, focus management

**3g: `app/api/request-access/route.ts`**

- [ ] POST endpoint: accepts `{ name, email, comment }` JSON body
- [ ] Validates required fields (name, email) and email format server-side
- [ ] v1: logs submission to console, returns `{ success: true }`
- [ ] TODO comment for Resend/Loops.so integration
- [ ] Rate limiting: none for v1 (add when form goes live with email)

**Success criteria:** Each component renders correctly in isolation, keyboard accessible, respects `prefers-reduced-motion`, TypeScript strict types, no `any`.

---

### Phase 4: Homepage

Assemble the homepage from primitives and page-specific sections.

**4a: `components/header.tsx`**

- [ ] Fixed/sticky navigation bar at top
- [ ] Bold Video logo (beanie graphic) linking to `/`
- [ ] "in Private Beta" badge
- [ ] Desktop nav links: "Why Bold?" (scrolls to features section on homepage, navigates to `/#features` from subpages), "Team" (scrolls to `/#team`)
- [ ] "Request Access" CTA button (opens modal)
- [ ] Mobile: hamburger menu icon at breakpoint < 1024px
- [ ] Hamburger animation: three lines → X transform on open
- [ ] Mobile menu: full-screen overlay with nav links and CTA
- [ ] Body scroll lock when mobile menu is open
- [ ] Escape key to close mobile menu
- [ ] Focus trap in mobile menu
- [ ] `"use client"` — requires menu state
- [ ] Skip navigation link: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to main content</a>`

**4b: `components/hero.tsx`**

- [ ] Headline: "Your coaching videos are collecting dust. Let Bold unlock them."
- [ ] Subheading: Platform description about 24/7 context-aware answers
- [ ] "Request Access" CTA button
- [ ] Responsive layout (stacks on mobile)

**4c: `components/feature-section.tsx`**

- [ ] "Put Your Videos to Work" heading
- [ ] Description copy
- [ ] Section `id="features"` for anchor linking from header nav

**4d: `components/team-section.tsx`**

- [ ] Section `id="team"` for anchor linking
- [ ] Two co-founder cards side by side (stack on mobile)
- [ ] Marcel Fahle: headshot, bio, Twitter/X + LinkedIn links
- [ ] Rob Hope: headshot, bio, Twitter/X + LinkedIn links
- [ ] Social links open in new tab with `target="_blank" rel="noopener noreferrer"`
- [ ] `next/image` for headshots with `priority={false}` (below fold)

**4e: `components/footer.tsx`**

- [ ] Logo and tagline
- [ ] Four-column grid (responsive: 4 → 2 → 1 columns)
- [ ] Quick links: "Why Bold" → `/#features`, "Team" → `/#team`
- [ ] Resources: Guides → `https://docs.boldvideo.com/guides`, API → `https://docs.boldvideo.com/api`, SDK → `https://docs.boldvideo.com/sdk` (external links, `target="_blank"`)
- [ ] Comparisons: vs YouTube → `/vs-youtube`, vs Vimeo → `/vs-vimeo`
- [ ] Legal: Privacy → `/privacy`, Terms → `/terms`
- [ ] Contact: LinkedIn, Twitter/X, email (external links)
- [ ] "Request Demo" CTA button (opens same modal as header "Request Access")
- [ ] Copyright notice: "© 2026 Bold Video"

**4f: `app/page.tsx` — Homepage Assembly**

- [ ] Server component (no `"use client"`)
- [ ] `<main id="main-content">` for skip navigation target
- [ ] Component order: Hero → Logo Marquee → Video Embed → Feature Section → (any additional sections from Webflow) → Team Section
- [ ] Per-page metadata: title, description, OpenGraph, Twitter card
- [ ] JSON-LD structured data (Organization, SoftwareApplication) migrated from Webflow

**Success criteria:** Homepage is pixel-perfect match to Webflow at desktop, tablet, and mobile breakpoints. All interactive elements work. Lighthouse performance score > 90.

---

### Phase 5: Subpages

Recreate all subpages. Content-heavy pages use MDX. Comparison pages may use TSX for richer layouts.

**5a: `/vs-youtube` and `/vs-vimeo` comparison pages**

- [ ] Recreate layout and copy from Webflow
- [ ] Shared header and footer
- [ ] Per-page metadata (title, description, OG tags)
- [ ] "Request Access" CTA(s) within body content
- [ ] Format: TSX if layout-heavy, MDX if mostly prose

**5b: `/privacy` and `/terms` legal pages**

- [ ] MDX format (pure prose content)
- [ ] Styled with Tailwind Typography plugin (`@tailwindcss/typography`) or custom prose styles
- [ ] Per-page metadata

**5c: `app/not-found.tsx` — Custom 404**

- [ ] Matches site design (header, footer)
- [ ] "Page not found" message with link back to homepage
- [ ] Clean, on-brand design

**5d: SEO infrastructure**

- [ ] `app/robots.ts` — allow all crawlers, link to sitemap
- [ ] `app/sitemap.ts` — auto-generate from all routes
- [ ] Canonical URLs on all pages via metadata API
- [ ] 301 redirects in `next.config.ts` if any Webflow URLs differ from new paths

**Success criteria:** All subpages match Webflow content and layout. Metadata complete. Sitemap and robots.txt functional.

---

### Phase 6: Analytics, Polish, and QA

Final integration, accessibility audit, and visual QA.

**6a: Plausible Analytics**

- [ ] Add Plausible script to root layout (`<Script>` from `next/script`, strategy `afterInteractive`)
- [ ] Verify pageview tracking across all routes
- [ ] Optional: custom events for form modal open, form submission, outbound clicks to docs.boldvideo.com

**6b: Accessibility Audit**

- [ ] Skip navigation link works
- [ ] All interactive components keyboard navigable
- [ ] Modal focus trap functional
- [ ] `prefers-reduced-motion` respected on all animations
- [ ] Color contrast check: verify green accent (#259d4d) passes WCAG AA (4.5:1 on white). If not, lighten to #22a94f or use only on dark backgrounds
- [ ] All images have appropriate alt text (team photos: descriptive, client logos: company name, decorative images: empty alt)
- [ ] Screen reader testing with VoiceOver

**6c: Performance**

- [ ] YouTube facade pattern confirmed (no iframe until click)
- [ ] Above-fold images use `priority={true}` in `next/image`
- [ ] Below-fold images lazy loaded (default)
- [ ] Lighthouse audit: LCP < 2.5s, CLS < 0.1, INP < 200ms, Performance > 90
- [ ] `bun run build` — check bundle sizes, no unexpected large chunks

**6d: Visual QA**

- [ ] Side-by-side comparison with reference screenshots at 1440px, 768px, 375px
- [ ] Check every animation matches Webflow behavior
- [ ] Test all links (internal and external)
- [ ] Test form submission flow end-to-end
- [ ] Test mobile hamburger menu
- [ ] Cross-browser: Chrome, Firefox, Safari

**Success criteria:** Zero accessibility violations. Lighthouse > 90. Pixel-perfect at all breakpoints. All animations match.

---

### Phase 7: Deploy

Ship it.

**7a: Vercel Setup**

- [ ] Connect git repo to Vercel project
- [ ] Framework preset: Next.js (auto-detected)
- [ ] Build command: `bun run build` (or let Vercel auto-detect)
- [ ] Verify preview deployment works on a Vercel preview URL
- [ ] Full QA on preview URL

**7b: DNS Cutover**

- [ ] Staging QA complete on Vercel preview URL
- [ ] Add custom domain `boldvideo.com` + `www.boldvideo.com` in Vercel
- [ ] Update DNS records (CNAME or Vercel nameservers)
- [ ] Keep Webflow site accessible for 2 weeks as rollback (e.g., pause Webflow project, don't delete)
- [ ] Verify SSL certificate auto-provisions
- [ ] Verify Plausible analytics tracking on production domain
- [ ] Monitor for 404s in the first 48 hours (check Vercel logs)

**Rollback plan:** If critical issues found post-launch, revert DNS to Webflow. Webflow site should remain active (paused, not deleted) for at least 2 weeks after cutover.

**Success criteria:** Site live at boldvideo.com, SSL working, analytics tracking, no broken links, no 404s on previously indexed URLs.

---

## CLAUDE.md for the Project

Create this file at project root so future LLM sessions have full context:

```markdown
# boldvideo.com

Marketing site for Bold Video. Next.js 16, Tailwind v4, TypeScript.

## Dev Commands

- `bun dev` — Start dev server (Turbopack)
- `bun run build` — Production build
- `bun run lint` — ESLint
- `bun run format` — Prettier

## Architecture

- **App Router** with React Server Components by default
- **`"use client"`** only for components with state/effects (modals, menus, accordions, tabs)
- **Tailwind v4** CSS-first config — all theme values in `app/globals.css` `@theme` block, no `tailwind.config.*`
- **MDX** for content pages (privacy, terms), TSX for structural pages
- **No CMS** — all content lives in code. Sanity planned for v2.

## Code Style

- Named exports: `export function Hero()` not `export default`
- kebab-case files: `feature-section.tsx` not `FeatureSection.tsx`
- `cn()` from `@/lib/utils` for class merging (clsx + tailwind-merge)
- `@/*` path alias for imports
- `next/image` for all images, `next/link` for internal links
- No `any` — TypeScript strict mode
- `prefers-reduced-motion` must be respected on all animations

## Colors

- Slate accent: #354857
- Green accent: #259d4d
- Background dark: #191919
- Font: Inter (400, 600)
```

## Alternative Approaches Considered

(see brainstorm: docs/brainstorms/2026-03-05-webflow-to-nextjs-migration-brainstorm.md)

- **Sanity from day 1:** Rejected — adds complexity before content structure is finalized. YAGNI for v1.
- **Astro:** Rejected — weaker ecosystem, less interactivity support, less LLM training data.
- **Gatsby:** Rejected — already tried in bold-landing-v0 (2018), outdated.
- **pnpm:** User preference for bun overrides the existing BOLD convention. bun is faster and simpler.

## Acceptance Criteria

### Functional Requirements

- [ ] Homepage matches Webflow pixel-for-pixel at 1440px, 768px, 375px
- [ ] All animations match Webflow behavior (marquee, accordion, tabs, modal, hamburger)
- [ ] "Request Access" modal opens from header and footer CTAs, form submits to API route
- [ ] All subpages (vs-youtube, vs-vimeo, privacy, terms) recreated with correct content
- [ ] Footer links to external docs.boldvideo.com for Guides, API, SDK
- [ ] Header "Why Bold?" and "Team" links use anchor scroll on homepage, `/#section` from subpages
- [ ] Mobile hamburger menu with full-screen overlay, body scroll lock, focus trap
- [ ] Custom 404 page

### Non-Functional Requirements

- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] All animations respect `prefers-reduced-motion`
- [ ] WCAG AA color contrast on all text
- [ ] Keyboard navigable: all interactive elements
- [ ] TypeScript strict — zero `any` types
- [ ] ESLint + Prettier pass with no warnings
- [ ] `bun run build` succeeds with no errors

### Quality Gates

- [ ] Visual QA against reference screenshots at 3 breakpoints
- [ ] Cross-browser: Chrome, Firefox, Safari
- [ ] Screen reader testing (VoiceOver)
- [ ] Plausible analytics verified on production
- [ ] 301 redirects in place for any changed URLs

## Dependencies & Prerequisites

- Node.js 24.x (from `.tool-versions`)
- bun (latest)
- Vercel account with custom domain access
- Plausible account (existing)
- Access to current Webflow site for asset extraction and reference
- DNS access for boldvideo.com

## Risk Analysis & Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Webflow animations hard to replicate exactly | Delays Phase 3–4 | Document exact CSS transition values during asset extraction. Use browser DevTools to inspect Webflow's generated CSS. |
| Green accent (#259d4d) fails WCAG contrast | Accessibility violation | Test early in Phase 1. Prepare lighter alternative (#22a94f). Only use green on dark backgrounds if needed. |
| Form submissions lost during migration window | Lost leads | Prototype API route captures submissions from day 1. Wire Resend ASAP after launch. |
| DNS cutover causes downtime | Site unreachable | Use Vercel preview URL for full QA. Keep Webflow as rollback for 2 weeks. |
| MDX/Tailwind v4 CSS-first config issues | Build failures | Verify Tailwind v4 CSS-first works with Next.js 16 in Phase 1 scaffold. Fall back to `tailwind.config.ts` if needed. |

## Sources & References

### Origin

- **Brainstorm document:** [docs/brainstorms/2026-03-05-webflow-to-nextjs-migration-brainstorm.md](docs/brainstorms/2026-03-05-webflow-to-nextjs-migration-brainstorm.md) — Key decisions: Next.js 16 + Tailwind v4 + MDX, no CMS for v1, pixel-perfect recreation, Vercel deployment, bun package manager.

### Internal References

- BOLD conventions: `cn()` utility, named exports, kebab-case files, `@/*` path alias (from `bold/apps/lp/`)
- Previous landing page: `bold-landing-v1/` (Next.js 14 + Payload CMS — not carried forward)
- Existing Tailwind v4 setup: `bold/apps/lp/postcss.config.mjs`, `bold/apps/lp/app/(frontend)/globals.css`

### External References

- [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Tailwind CSS v4 documentation](https://tailwindcss.com/docs)
- [Plausible analytics integration](https://plausible.io/docs)
