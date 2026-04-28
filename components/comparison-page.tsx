import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter, SiteShell } from "./site-shell";
import {
  boldLogo,
  getPlatform,
  migrationPlatforms,
} from "@/lib/platforms";

type ComparisonRow = {
  category: string;
  competitor: string;
  bold: string;
};

type QuickCompareCell = boolean | "partial";

type QuickCompareRow = {
  feature: string;
  competitor: QuickCompareCell;
  bold: QuickCompareCell;
};

type ComparisonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  perspective: ReactNode;
  whyTeamsSwitch: string[];
  rows: ComparisonRow[];
  competitorSlug?: string;
  quickCompare?: QuickCompareRow[];
};

export function ComparisonPage({
  eyebrow,
  title,
  description,
  perspective,
  whyTeamsSwitch,
  rows,
  competitorSlug,
  quickCompare,
}: ComparisonPageProps) {
  const competitor = competitorSlug ? getPlatform(competitorSlug) : undefined;
  const competitorName = competitor?.name;
  const otherPlatforms = migrationPlatforms.filter(
    (p) => p.slug !== competitorSlug,
  );

  return (
    <SiteShell>
      <main className="flex-1" id="main-content">
        <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-[9.75rem] sm:px-6 md:pb-24 md:pt-[12rem] lg:px-8">
          {competitor ? (
            <div className="mb-10 flex items-center gap-5 text-[var(--color-ink)]">
              <img
                alt={`${competitor.name} logo`}
                className="h-8 w-auto opacity-80"
                height={40}
                src={competitor.logoSrc}
                width={140}
              />
              <span
                aria-hidden
                className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-[var(--color-muted)]"
              >
                vs
              </span>
              <img
                alt="Bold logo"
                className="h-8 w-auto"
                height={40}
                src={boldLogo.logoSrc}
                width={120}
              />
            </div>
          ) : null}

          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-6">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-[var(--color-signal-ink)]">
                {eyebrow}
              </p>
              <h1 className="max-w-[11ch] text-balance text-[clamp(3rem,6vw,5.6rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)]">
                {title}
              </h1>
              <p className="max-w-[34rem] text-lg leading-8 text-[var(--color-copy)]">
                {description}
              </p>
            </div>

            <div className="rounded-[2.25rem] border border-[var(--color-line)] bg-white/76 p-8 shadow-[var(--shadow-panel)]">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                Our take
              </p>
              <div className="mt-4 space-y-5 text-base leading-8 text-[var(--color-copy)]">
                {perspective}
              </div>
            </div>
          </div>
        </section>

        {quickCompare && quickCompare.length > 0 ? (
          <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="mb-8">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                At a glance
              </p>
              <h2 className="mt-4 max-w-[18ch] text-balance text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--color-ink)]">
                The quick read
              </h2>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-line)] shadow-[var(--shadow-panel)]">
              <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr] gap-px bg-[var(--color-line)]">
                <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Feature
                </div>
                <div className="bg-[var(--color-surface)] px-5 py-4 text-center font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {competitorName ?? "Competitor"}
                </div>
                <div className="bg-[var(--color-surface)] px-5 py-4 text-center font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Bold
                </div>

                {quickCompare.map((row) => (
                  <QuickRow key={row.feature} row={row} />
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <div>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Why teams switch
              </p>
              <h2 className="mt-4 max-w-[12ch] text-balance text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--color-ink)]">
                Better for a learning product, not just video storage
              </h2>
            </div>
            <div className="grid gap-3">
              {whyTeamsSwitch.map((reason) => (
                <div
                  className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/76 px-5 py-4 text-sm leading-7 text-[var(--color-copy)] shadow-[var(--shadow-soft)]"
                  key={reason}
                >
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mb-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Side-by-side
            </p>
            <h2 className="mt-4 max-w-[12ch] text-balance text-[clamp(2rem,4vw,3.6rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--color-ink)]">
              What actually changes when Bold is the system of record
            </h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-line)] shadow-[var(--shadow-panel)]">
            <div className="grid grid-cols-[0.72fr_1fr_1fr] gap-px bg-[var(--color-line)]">
              <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Category
              </div>
              <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                {competitorName ?? "Competitor"}
              </div>
              <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Bold
              </div>

              {rows.map((row) => (
                <FragmentRow key={row.category} row={row} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
          <div className="mx-auto max-w-[1200px] rounded-[2.5rem] border border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-14 text-center text-[var(--color-cream)] shadow-[0_32px_100px_-60px_rgba(19,15,11,0.8)] sm:px-8 md:px-12">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-white/60">
              We handle the move
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
              {competitorName
                ? `Migrating from ${competitorName}? We'll do it with you.`
                : "Switching platforms? We'll do it with you."}
            </h2>
            <p className="mx-auto mt-4 max-w-[36rem] text-base leading-8 text-white/66">
              We move your videos, your members, and your structure personally —
              start to finish. You land somewhere built for the work, not just
              for hosting it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-forest)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]"
                href="/migrate"
              >
                {competitorName
                  ? `See how we migrate from ${competitorName}`
                  : "See how we handle the move"}
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-medium text-[var(--color-cream)] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]"
                href="mailto:support@boldvideo.com?subject=Bold%20comparison"
              >
                Talk to the team
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/50">
                Bold also migrates from
              </p>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {otherPlatforms.map((platform) => (
                  <li key={platform.slug} className="text-white/70">
                    {platform.vsHref ? (
                      <Link
                        className="block transition-opacity duration-200 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]"
                        href={platform.vsHref}
                        title={`Compare ${platform.name} vs Bold`}
                      >
                        <img
                          alt={`${platform.name} logo`}
                          className="h-6 w-auto opacity-70 transition-opacity hover:opacity-100"
                          height={28}
                          src={platform.logoSrc}
                          width={120}
                        />
                      </Link>
                    ) : (
                      <img
                        alt={`${platform.name} logo`}
                        className="h-6 w-auto opacity-60"
                        height={28}
                        src={platform.logoSrc}
                        width={120}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  );
}

function FragmentRow({ row }: { row: ComparisonRow }) {
  return (
    <>
      <div className="bg-[var(--color-surface)] px-5 py-5 text-sm font-semibold text-[var(--color-ink)]">
        {row.category}
      </div>
      <div className="bg-[var(--color-surface)] px-5 py-5 text-sm leading-7 text-[var(--color-copy)]">
        {row.competitor}
      </div>
      <div className="bg-[var(--color-surface)] px-5 py-5 text-sm leading-7 text-[var(--color-copy)]">
        {row.bold}
      </div>
    </>
  );
}

function QuickRow({ row }: { row: QuickCompareRow }) {
  return (
    <>
      <div className="bg-[var(--color-surface)] px-5 py-5 text-sm font-medium text-[var(--color-ink)]">
        {row.feature}
      </div>
      <div className="bg-[var(--color-surface)] px-5 py-5">
        <CompareMark value={row.competitor} />
      </div>
      <div className="bg-[var(--color-surface)] px-5 py-5">
        <CompareMark value={row.bold} />
      </div>
    </>
  );
}

function CompareMark({ value }: { value: QuickCompareCell }) {
  if (value === true) {
    return (
      <span
        aria-label="Yes"
        className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-signal)_22%,transparent)] text-[var(--color-forest)]"
        role="img"
      >
        <svg
          aria-hidden
          fill="none"
          height="14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.6"
          viewBox="0 0 24 24"
          width="14"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        aria-label="Partial"
        className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-muted)_18%,transparent)] text-[var(--color-muted)]"
        role="img"
      >
        <svg
          aria-hidden
          fill="none"
          height="14"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.6"
          viewBox="0 0 24 24"
          width="14"
        >
          <path d="M6 12h12" />
        </svg>
      </span>
    );
  }
  return (
    <span
      aria-label="No"
      className="mx-auto flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-muted)_14%,transparent)] text-[var(--color-muted)]"
      role="img"
    >
      <svg
        aria-hidden
        fill="none"
        height="12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
        viewBox="0 0 24 24"
        width="12"
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </span>
  );
}
