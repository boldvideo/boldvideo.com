import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter, SiteShell } from "./site-shell";

type ComparisonRow = {
  category: string;
  competitor: string;
  bold: string;
};

type ComparisonPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  perspective: ReactNode;
  whyTeamsSwitch: string[];
  rows: ComparisonRow[];
};

export function ComparisonPage({
  eyebrow,
  title,
  description,
  perspective,
  whyTeamsSwitch,
  rows,
}: ComparisonPageProps) {
  return (
    <SiteShell>
      <main className="flex-1" id="main-content">
        <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-[9.75rem] sm:px-6 md:pb-24 md:pt-[12rem] lg:px-8">
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
                Competitor
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

        <section className="px-4 pb-10 sm:px-6 md:pb-0 lg:px-8">
          <div className="mx-auto max-w-[1200px] rounded-[2.5rem] border border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-14 text-center text-[var(--color-cream)] shadow-[0_32px_100px_-60px_rgba(19,15,11,0.8)] sm:px-8 md:px-12">
            <h2 className="text-balance text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
              Need a sharper comparison for your stack?
            </h2>
            <p className="mx-auto mt-4 max-w-[36rem] text-base leading-8 text-white/66">
              We can map your current workflow and show where Bold replaces
              search pain, support repetition, and member confusion.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-forest)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]"
                href="mailto:support@boldvideo.com?subject=Bold%20comparison"
              >
                Talk to the team
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-medium text-[var(--color-cream)] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]"
                href="/"
              >
                Back to home
              </Link>
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
