import Link from "next/link";
import type { ReactNode } from "react";
import {
  announcementMessages,
  footerColumns,
  footerMetaLinks,
  navLinks,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { AnnouncementTicker } from "./announcement-ticker";
import { SiteLink } from "./site-link";
import { SiteLogo } from "./site-logo";

const noiseTexture =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

export function SiteShell({ children, className }: SiteShellProps) {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-[var(--color-ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--color-cream)] focus:outline-none"
        href="#main-content"
      >
        Skip to content
      </a>

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(67,198,166,0.14),transparent_32%),radial-gradient(circle_at_85%_8%,rgba(20,92,255,0.12),transparent_26%),linear-gradient(180deg,#fdfaf3_0%,#f8f1e8_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[36rem] bg-[linear-gradient(rgba(16,13,9,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(16,13,9,0.035)_1px,transparent_1px)] bg-[size:68px_68px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-multiply"
          style={{ backgroundImage: noiseTexture }}
        />
      </div>

      <AnnouncementTicker messages={announcementMessages} />

      <header className="fixed inset-x-0 top-11 z-40 border-b border-[var(--color-line)] bg-[color:rgba(253,250,243,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
            href="/"
          >
            <SiteLogo />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link) => (
              <SiteLink
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </SiteLink>
            ))}
          </nav>

          <a
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-[var(--color-cream)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-button)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
            href="https://savvycal.com/marcel-from-bold/7838d613"
            rel="noreferrer"
            target="_blank"
          >
            Book a demo
          </a>
        </div>
      </header>

      <div className={cn("relative flex min-h-screen flex-col", className)}>
        {children}
      </div>
    </>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/8 bg-[var(--color-forest)] text-white/72">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.3fr)_repeat(4,minmax(0,0.8fr))] lg:px-8">
        <div className="space-y-5">
          <SiteLogo
            labelClassName="text-[var(--color-cream)]"
            markClassName="bg-[var(--color-signal)] text-[var(--color-forest)]"
          />
          <p className="max-w-sm text-sm leading-7 text-white/56">
            Video intelligence for coaching programs. Turn your library into an
            AI coach that cites the moment that matters.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div className="space-y-4" key={column.title}>
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-white/34">
              {column.title}
            </h2>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <SiteLink
                    className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-forest)]"
                    href={link.href}
                  >
                    {link.label}
                  </SiteLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-6 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-white/34 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <span>Copyright {currentYear} Bold Video</span>
          <div className="flex flex-wrap items-center gap-4">
            {footerMetaLinks.map((link) => (
              <SiteLink
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-forest)]"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </SiteLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
