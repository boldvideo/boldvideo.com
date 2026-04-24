import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiteNav, SiteNavFooter } from "./site-nav";
import "./customer-page.css";

type Stat = {
  label: string;
  value: string;
};

type StorySection = {
  eyebrow: string;
  heading: string;
  body: ReactNode;
};

type Quote = {
  text: string;
  attribution: string;
  role: string;
  avatarSrc?: string;
  avatarAlt?: string;
};

type HeroImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Logo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CustomerPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  logo: Logo;
  websiteLabel: string;
  websiteUrl: string;
  heroImage: HeroImage;
  stats: Stat[];
  story: StorySection[];
  quote: Quote;
};

export function CustomerPage({
  eyebrow,
  title,
  description,
  logo,
  websiteLabel,
  websiteUrl,
  heroImage,
  stats,
  story,
  quote,
}: CustomerPageProps) {
  return (
    <>
      <div className="customer-nav">
        <SiteNav />
      </div>
      <main className="flex-1" id="main-content">
        <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-[8.5rem] sm:px-6 md:pb-24 md:pt-[10rem] lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14">
            <div className="space-y-7">
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-[var(--color-signal-ink)]">
                {eyebrow}
              </p>
              <h1 className="max-w-[15ch] text-balance text-[clamp(2.6rem,5vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--color-ink)]">
                {title}
              </h1>
              <p className="max-w-[34rem] text-lg leading-8 text-[var(--color-copy)]">
                {description}
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-2">
                <Image
                  alt={logo.alt}
                  className="h-8 w-auto"
                  height={logo.height}
                  src={logo.src}
                  width={logo.width}
                />
                <Link
                  className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
                  href={websiteUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  {websiteLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[var(--color-earth-soft)] blur-2xl" />
              <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface-muted)] shadow-[var(--shadow-panel)]">
                <Image
                  alt={heroImage.alt}
                  className="h-auto w-full"
                  height={heroImage.height}
                  priority
                  src={heroImage.src}
                  width={heroImage.width}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                className="rounded-[1.6rem] border border-[var(--color-line)] bg-white/76 px-6 py-7 shadow-[var(--shadow-soft)]"
                key={stat.label}
              >
                <p className="text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-none tracking-[-0.03em] text-[var(--color-ink)]">
                  {stat.value}
                </p>
                <p className="mt-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {story.map((section) => (
              <div
                className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
                key={section.heading}
              >
                <div>
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-4 max-w-[14ch] text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] font-semibold leading-[1] tracking-[-0.03em] text-[var(--color-ink)]">
                    {section.heading}
                  </h2>
                </div>
                <div className="space-y-5 text-base leading-8 text-[var(--color-copy)]">
                  {section.body}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <figure className="mx-auto max-w-[52rem] text-center">
            <blockquote className="text-balance text-[clamp(1.4rem,2.6vw,2rem)] font-medium leading-[1.35] tracking-[-0.02em] text-[var(--color-ink)]">
              <span aria-hidden className="text-[var(--color-signal)]">
                &ldquo;
              </span>
              {quote.text}
              <span aria-hidden className="text-[var(--color-signal)]">
                &rdquo;
              </span>
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-center gap-3">
              {quote.avatarSrc ? (
                <Image
                  alt={quote.avatarAlt ?? quote.attribution}
                  className="h-11 w-11 rounded-full object-cover"
                  height={88}
                  src={quote.avatarSrc}
                  width={88}
                />
              ) : null}
              <div className="text-left">
                <p className="text-sm font-semibold text-[var(--color-ink)]">
                  {quote.attribution}
                </p>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {quote.role}
                </p>
              </div>
            </figcaption>
          </figure>
        </section>

        <section className="px-4 pb-10 sm:px-6 md:pb-0 lg:px-8">
          <div className="mx-auto max-w-[1200px] rounded-[2.5rem] border border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-14 text-center text-[var(--color-cream)] shadow-[0_32px_100px_-60px_rgba(19,15,11,0.8)] sm:px-8 md:px-12">
            <h2 className="text-balance text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
              Turn your library into the product your students reach for daily.
            </h2>
            <p className="mx-auto mt-4 max-w-[36rem] text-base leading-8 text-white/66">
              We will map your current curriculum and show where Bold replaces
              search pain, support load, and student drop-off.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-forest)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-ink)]"
                href="mailto:support@boldvideo.com?subject=Bold%20for%20our%20program"
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
      <SiteNavFooter />
    </>
  );
}
