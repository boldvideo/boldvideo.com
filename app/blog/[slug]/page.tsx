import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArrowIcon } from "@/components/arrow-icon";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";
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
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      authors: [post.author],
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
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
    <main className="landing-v10" id="main-content">
      <div className="announce">
        <strong>Bold Blog</strong>
        <div className="sep" />
        <Link href="/blog">See all posts &rarr;</Link>
      </div>

      <SiteNav />

      <article className="container" style={{ maxWidth: "720px", paddingTop: "9rem", paddingBottom: "4rem" }}>
        <Link
          href="/blog"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
            color: "var(--text-mid)",
            transition: "color 0.15s",
          }}
        >
          <ArrowIcon dir="left" />
          All posts
        </Link>

        <header style={{ marginTop: "2rem" }}>
          <div
            style={{
              alignItems: "center",
              color: "var(--text-dim)",
              display: "flex",
              fontFamily: "var(--font-mono-stack)",
              fontSize: "var(--fs-micro)",
              gap: "8px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span>{post.author}</span>
            <span style={{ color: "var(--border-strong)" }}>&middot;</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--text)",
              margin: "0.75rem 0 0",
            }}
          >
            {post.title}
          </h1>
        </header>

        <div
          style={{
            marginTop: "2rem",
            overflow: "hidden",
            background: "var(--bg-dark)",
          }}
        >
          <Image
            alt=""
            height={1258}
            priority
            src={post.image}
            width={2394}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <BlogBody content={post.content} />
      </article>

      <SiteNavFooter />
    </main>
  );
}
