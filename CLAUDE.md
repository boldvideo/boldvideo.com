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
