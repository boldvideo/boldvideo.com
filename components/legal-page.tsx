import type { ReactNode } from "react";
import { SiteFooter, SiteShell } from "./site-shell";

type LegalPageProps = {
  description: string;
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPage({
  children,
  description,
  title,
  updatedAt,
}: LegalPageProps) {
  return (
    <SiteShell>
      <main className="flex-1" id="main-content">
        <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-[9.75rem] sm:px-6 md:pb-24 md:pt-[12rem] lg:px-8">
          <div className="max-w-[40rem]">
            <p className="font-mono text-[0.75rem] uppercase tracking-[0.24em] text-[var(--color-signal-ink)]">
              Legal
            </p>
            <h1 className="mt-5 text-balance text-[clamp(3rem,6vw,5.4rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--color-ink)]">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-[var(--color-copy)]">
              {description}
            </p>
            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Last updated {updatedAt}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[960px] px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
          <article className="rounded-[2rem] border border-[var(--color-line)] bg-white/76 px-6 py-8 shadow-[var(--shadow-panel)] sm:px-8 md:px-10 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-[-0.04em] [&_h2]:text-[var(--color-ink)] [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:uppercase [&_h3]:tracking-[0.12em] [&_h3]:text-[var(--color-muted)] [&_li]:text-[var(--color-copy)] [&_li]:leading-8 [&_p]:mt-4 [&_p]:text-base [&_p]:leading-8 [&_p]:text-[var(--color-copy)] [&_strong]:text-[var(--color-ink)] [&_ul]:mt-4 [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </article>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
