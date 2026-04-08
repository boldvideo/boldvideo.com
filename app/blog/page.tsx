import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on video intelligence, coaching programs, and building better learning experiences.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)]">
        Blog
      </h1>
      <p className="mt-3 max-w-md text-[var(--color-copy)]">
        This page is coming soon. In the meantime, book a demo to see Bold in
        action.
      </p>
      <div className="mt-6 flex gap-4">
        <a
          className="inline-flex items-center gap-2 bg-[var(--color-signal)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-85"
          href="https://savvycal.com/marcel-from-bold/7838d613"
          rel="noreferrer"
          target="_blank"
        >
          Book a demo
        </a>
        <Link
          className="inline-flex items-center gap-2 border border-[var(--color-line-strong)] px-6 py-3 text-sm text-[var(--color-copy)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          href="/"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
