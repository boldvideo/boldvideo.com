import Link from "next/link";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";
import "@/components/landing-v10.css";

export default function NotFound() {
  return (
    <main className="landing-v10" id="main-content">
      <div className="announce">
        <strong>Page not found</strong>
        <div className="sep" />
        <a href="/">Back to home &rarr;</a>
      </div>

      <SiteNav />
      <div className="flex flex-1 items-center">
        <section className="mx-auto max-w-[1200px] px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[34rem] rounded-[2.5rem] border border-[var(--color-line)] bg-white/76 px-6 py-14 shadow-[var(--shadow-panel)] sm:px-10">
            <p className="font-mono text-[0.78rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              404
            </p>
            <h1 className="mt-5 text-balance text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)]">
              Page not found
            </h1>
            <p className="mt-5 text-base leading-8 text-[var(--color-copy)]">
              The page you were looking for does not exist or has moved during
              the rebuild.
            </p>
            <div className="mt-8">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-sm font-semibold text-[var(--color-cream)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
                href="/"
              >
                Back to the homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
      <SiteNavFooter />
    </main>
  );
}
