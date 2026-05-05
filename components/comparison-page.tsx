import Link from "next/link";
import type { ReactNode } from "react";
import { CtaGlow } from "./cta-glow";
import { SiteNav, SiteNavFooter } from "./site-nav";
import {
  boldLogo,
  getPlatform,
  migrationPlatforms,
  tileToLength,
} from "@/lib/platforms";
import "./landing-v10.css";

type ComparisonCell = { title: string; detail?: string };

type ComparisonRow = {
  category: string;
  competitor: ComparisonCell;
  bold: ComparisonCell;
};

type QuickCompareCell = boolean | "partial";

type QuickCompareRow = {
  feature: string;
  competitor: QuickCompareCell;
  bold: QuickCompareCell;
};

type AiOrbit = { label: string; chips: string[] };

type AiOrbits = {
  competitor: AiOrbit;
  bold: AiOrbit;
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
  aiOrbits?: AiOrbits;
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
  aiOrbits,
}: ComparisonPageProps) {
  const competitor = competitorSlug ? getPlatform(competitorSlug) : undefined;
  const competitorName = competitor?.name;
  const stripPlatforms = tileToLength(
    migrationPlatforms.filter((p) => p.logoReady),
    6,
  );

  return (
    <main className="landing-v10" id="main-content">
      <div className="announce">
        <strong>
          {competitorName ? `Switching from ${competitorName}?` : "Switching platforms?"}
        </strong>
        <div className="sep" />
        <a href="/migrate">See how to migrate &rarr;</a>
      </div>

      <SiteNav />
      <div className="flex-1">
        <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-[9.75rem] sm:px-6 md:pb-24 md:pt-[12rem] lg:px-8">
          {competitor ? (
            <div className="mb-10 flex items-center gap-5 text-[var(--color-ink)]">
              <img
                alt={`${competitor.name} logo`}
                className="h-10 w-auto"
                height={40}
                src={competitor.markSrc ?? competitor.logoSrc}
                width={40}
              />
              <span
                aria-hidden
                className="font-mono text-[12px] uppercase tracking-[0.1em] text-[var(--color-muted)]"
              >
                vs
              </span>
              <img
                alt="Bold logo"
                className="h-10 w-auto"
                height={40}
                src={boldLogo.markSrc ?? boldLogo.logoSrc}
                width={36}
              />
            </div>
          ) : null}

          <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="space-y-6">
              <span className="hero-eyebrow">{eyebrow}</span>
              <h1 className="max-w-[16ch] text-balance text-[clamp(2.4rem,4.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)]">
                {title}
              </h1>
              <p className="max-w-[34rem] text-[17px] leading-[1.75] text-[var(--color-copy)]">
                {description}
              </p>
            </div>

            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                Our take
              </p>
              <div className="mt-4 space-y-5 text-base leading-[1.75] text-[var(--color-copy)]">
                {perspective}
              </div>
            </div>
          </div>
        </section>

        {aiOrbits ? (
          <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="mb-12 max-w-[40rem]">
              <span className="sec-label">Where the AI is pointed</span>
              <h2 className="mt-3 text-balance text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[var(--color-ink)]">
                Same tech. Different center of gravity.
              </h2>
              <p className="mt-5 max-w-[34rem] text-base leading-[1.75] text-[var(--color-copy)]">
                Both platforms ship AI features. The question is who they were
                built to help.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <OrbitDiagram
                chips={aiOrbits.competitor.chips}
                label={aiOrbits.competitor.label}
                sublabel={competitorName ?? "Competitor"}
                tone="muted"
              />
              <OrbitDiagram
                chips={aiOrbits.bold.chips}
                label={aiOrbits.bold.label}
                sublabel="Bold"
                tone="signal"
              />
            </div>
          </section>
        ) : null}

        {quickCompare && quickCompare.length > 0 ? (
          <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
            <div className="mb-8">
              <span className="sec-label">At a glance</span>
              <h2 className="mt-3 max-w-[18ch] text-balance text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[var(--color-ink)]">
                The quick read
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)]">
              <div className="grid grid-cols-[1.4fr_0.7fr_0.7fr] gap-px bg-[var(--color-line)]">
                <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  Feature
                </div>
                <div className="bg-[var(--color-surface)] px-5 py-4 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                  {competitorName ?? "Competitor"}
                </div>
                <div className="bg-[var(--color-surface)] px-5 py-4 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
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
              <span className="sec-label">Why teams switch</span>
              <h2 className="mt-3 max-w-[16ch] text-balance text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[var(--color-ink)]">
                Better for a learning product, not just video storage
              </h2>
            </div>
            <div className="grid gap-3">
              {whyTeamsSwitch.map((reason) => (
                <div
                  className="rounded-2xl border border-[var(--color-line)] bg-white px-5 py-4 text-sm leading-7 text-[var(--color-copy)]"
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
            <span className="sec-label">Side-by-side</span>
            <h2 className="mt-3 max-w-[20ch] text-balance text-[clamp(1.8rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.025em] text-[var(--color-ink)]">
              What actually changes when Bold is the system of record
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-line)]">
            <div className="grid grid-cols-[0.72fr_1fr_1fr] gap-px bg-[var(--color-line)]">
              <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                Category
              </div>
              <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                {competitorName ?? "Competitor"}
              </div>
              <div className="bg-[var(--color-surface)] px-5 py-4 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-muted)]">
                Bold
              </div>

              {rows.map((row) => (
                <FragmentRow key={row.category} row={row} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
          <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-[var(--color-forest)] px-6 py-14 text-center text-white sm:px-8 md:px-12">
            <CtaGlow className="pointer-events-none absolute inset-0 h-full w-full" />
            <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <ul className="flex">
                {[
                  { src: "/images/marcel.jpg", alt: "Marcel" },
                  { src: "/images/monika.jpg", alt: "Monika" },
                  { src: "/images/rob.jpg", alt: "Rob" },
                ].map((person, i) => (
                  <li
                    className="relative -ml-3 first:ml-0"
                    key={person.src}
                    style={{ zIndex: 3 - i }}
                  >
                    <img
                      alt={person.alt}
                      className="h-11 w-11 rounded-full border-[2.5px] border-[var(--color-forest)] object-cover"
                      height={44}
                      src={person.src}
                      width={44}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/60">
              We handle the move
            </p>
            <h2 className="mt-3 text-balance text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] tracking-[-0.025em]">
              {competitorName
                ? `Migrating from ${competitorName}? We'll do it with you.`
                : "Switching platforms? We'll do it with you."}
            </h2>
            <p className="mx-auto mt-4 max-w-[36rem] text-base leading-[1.75] text-white/70">
              We move your videos, your members, and your structure personally —
              start to finish. You land somewhere built for the work, not just
              for hosting it.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="btn-mint"
                href="/migrate"
              >
                {competitorName
                  ? `See how we migrate from ${competitorName}`
                  : "See how we handle the move"}
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
                href="mailto:support@boldvideo.com?subject=Bold%20comparison"
              >
                Talk to the team
              </Link>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/50">
                Bold migrates from
              </p>
              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
                {stripPlatforms.map((platform, i) => (
                  <li key={`${platform.slug}-${i}`}>
                    <img
                      alt={`${platform.name} logo`}
                      className="h-6 w-auto opacity-70"
                      height={28}
                      src={platform.flatLogoSrc ?? platform.logoSrc}
                      style={
                        platform.flatMaxWidth
                          ? { maxWidth: platform.flatMaxWidth }
                          : undefined
                      }
                      width={120}
                    />
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </section>
      </div>
      <SiteNavFooter />
    </main>
  );
}

function FragmentRow({ row }: { row: ComparisonRow }) {
  return (
    <>
      <div className="bg-[var(--color-surface)] px-5 py-5 text-sm font-semibold text-[var(--color-ink)]">
        {row.category}
      </div>
      <Cell cell={row.competitor} />
      <Cell cell={row.bold} />
    </>
  );
}

function OrbitDiagram({
  label,
  sublabel,
  chips,
  tone,
}: AiOrbit & { sublabel: string; tone: "muted" | "signal" }) {
  const isSignal = tone === "signal";

  // Position chips evenly around a circle, starting at 12 o'clock and going clockwise.
  const chipPositions = chips.map((_, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / chips.length;
    const radiusPct = 38; // % of container, the orbit ring radius
    return {
      x: 50 + Math.cos(angle) * radiusPct,
      y: 50 + Math.sin(angle) * radiusPct,
    };
  });

  const ringColor = isSignal
    ? "var(--color-signal-strong)"
    : "var(--color-line-strong)";
  const centerBg = isSignal ? "var(--color-signal)" : "var(--color-forest)";
  const centerColor = isSignal ? "#ffffff" : "#ffffff";
  const chipBorder = isSignal
    ? "var(--color-signal-strong)"
    : "var(--color-line-strong)";
  const chipBg = isSignal
    ? "color-mix(in srgb, var(--color-signal) 14%, var(--color-surface))"
    : "var(--color-surface)";
  const chipColor = isSignal
    ? "var(--color-signal-ink)"
    : "var(--color-copy)";

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* Orbit ring */}
      <div
        aria-hidden
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          width: "76%",
          height: "76%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: `1px dashed ${ringColor}`,
          opacity: 0.5,
        }}
      />
      {/* Center node */}
      <div
        className="absolute flex flex-col items-center justify-center rounded-full text-center"
        style={{
          left: "50%",
          top: "50%",
          width: "27%",
          height: "27%",
          transform: "translate(-50%, -50%)",
          background: centerBg,
          color: centerColor,
          boxShadow: isSignal
            ? "0 18px 36px -22px rgba(67,198,166,0.6)"
            : "0 18px 36px -22px rgba(19,15,11,0.5)",
        }}
      >
        <span
          className="font-mono text-[0.6rem] uppercase opacity-70"
          style={{ letterSpacing: "0.24em" }}
        >
          {sublabel}
        </span>
        <span className="mt-1 text-base font-semibold leading-none tracking-tight">
          {label}
        </span>
      </div>
      {/* Chips */}
      {chips.map((chip, i) => (
        <div
          aria-hidden
          className="absolute font-mono text-[0.66rem] font-medium uppercase"
          key={chip}
          style={{
            left: `${chipPositions[i].x}%`,
            top: `${chipPositions[i].y}%`,
            transform: "translate(-50%, -50%)",
            padding: "0.45rem 0.75rem",
            borderRadius: 9999,
            border: `1px solid ${chipBorder}`,
            background: chipBg,
            color: chipColor,
            letterSpacing: "0.12em",
            whiteSpace: "nowrap",
          }}
        >
          {chip}
        </div>
      ))}
    </div>
  );
}

function Cell({ cell }: { cell: ComparisonCell }) {
  return (
    <div className="bg-[var(--color-surface)] px-5 py-5">
      <div className="text-sm font-semibold text-[var(--color-ink)]">
        {cell.title}
      </div>
      {cell.detail ? (
        <div className="mt-1.5 text-[13px] font-normal leading-6 text-[var(--color-copy)]">
          {cell.detail}
        </div>
      ) : null}
    </div>
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
