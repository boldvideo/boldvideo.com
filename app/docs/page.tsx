import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";
import "@/components/landing-v10.css";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Documentation for Bold Video — setup guides, API reference, and integration walkthroughs.",
  alternates: { canonical: "/docs" },
};

export default function DocsPage() {
  return (
    <main className="landing-v10" id="main-content">
      <div className="announce">
        <strong>Docs are coming soon</strong>
        <div className="sep" />
        <a href="/">Back to home &rarr;</a>
      </div>
      <SiteNav />
      <div className="flex flex-1 items-center justify-center">
        <section className="mx-auto max-w-[720px] px-6 py-24 text-center">
          <span className="hero-eyebrow">Docs</span>
          <h1 className="mt-5 text-balance text-[clamp(2.4rem,4.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)]">
            Coming soon
          </h1>
          <p className="mt-5 text-[17px] leading-[1.75] text-[var(--color-copy)]">
            In the meantime, book a demo to see Bold in action.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              className="btn-mint"
              href="https://savvycal.com/marcel-from-bold/7838d613"
              rel="noreferrer"
              target="_blank"
            >
              Book a demo
            </a>
            <Link className="btn-ghost" href="/">
              Back to home
            </Link>
          </div>
        </section>
      </div>
      <SiteNavFooter />
    </main>
  );
}
