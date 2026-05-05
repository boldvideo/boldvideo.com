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
          <div className="mx-auto max-w-[34rem] rounded-2xl border border-[var(--color-line)] bg-white px-6 py-14 sm:px-10">
            <span className="hero-eyebrow">404</span>
            <h1 className="mt-5 text-balance text-[clamp(2.4rem,4.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)]">
              Page not found
            </h1>
            <p className="mt-5 text-[17px] leading-[1.75] text-[var(--color-copy)]">
              The page you were looking for does not exist or has moved during
              the rebuild.
            </p>
            <div className="mt-8">
              <Link className="btn-mint" href="/">
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
