import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SiteFooter, SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on video intelligence, coaching programs, and building better learning experiences.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SiteShell>
      <main className="pt-36 pb-20" id="main-content">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <header className="mb-16">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Blog
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--color-ink)]">
              From the team
            </h1>
            <p className="mt-3 max-w-lg text-[var(--color-copy)]">
              What we are learning about video intelligence, coaching at scale,
              and building tools that make content actually useful.
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  className="group block overflow-hidden rounded-lg border border-[var(--color-line)] bg-white transition-shadow hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
                  href={post.draft ? "#" : `/blog/${post.slug}`}
                  aria-disabled={post.draft}
                  tabIndex={post.draft ? -1 : undefined}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-forest)]">
                    <Image
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      height={630}
                      src={post.image}
                      width={1200}
                    />
                    {post.draft && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-forest)]/80">
                        <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                          Coming soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
                      <span>{post.author}</span>
                      <span className="text-[var(--color-line-strong)]">
                        &middot;
                      </span>
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <h2 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-signal-ink)]">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[var(--color-copy)]">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
