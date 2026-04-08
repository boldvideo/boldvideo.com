import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SiteFooter, SiteShell } from "@/components/site-shell";
import { BlogBody } from "@/components/blog-body";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts()
    .filter((p) => !p.draft)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) notFound();

  return (
    <SiteShell>
      <main className="pt-36 pb-20" id="main-content">
        <article className="mx-auto max-w-[720px] px-4 sm:px-6">
          <Link
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            href="/blog"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M9 2L4 7l5 5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
            All posts
          </Link>

          <header className="mt-8">
            <div className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
              <span>{post.author}</span>
              <span className="text-[var(--color-line-strong)]">&middot;</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[var(--color-ink)] sm:text-4xl">
              {post.title}
            </h1>
          </header>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-[var(--color-forest)]">
            <Image
              alt=""
              className="h-full w-full object-cover"
              height={630}
              priority
              src={post.image}
              width={1200}
            />
          </div>

          <BlogBody content={post.content} />
        </article>
      </main>

      <SiteFooter />
    </SiteShell>
  );
}
