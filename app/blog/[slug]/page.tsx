import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { getAuthor } from "@/lib/authors";
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

  const author = getAuthor(post.author);
  const dateModified = post.updated ?? post.date;
  const wasUpdated = Boolean(post.updated && post.updated !== post.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.boldvideo.com${post.image}`,
    datePublished: post.date,
    dateModified,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          jobTitle: author.role,
          url: `https://www.boldvideo.com${author.aboutAnchor}`,
          sameAs: [author.links.linkedin, author.links.twitter].filter(
            Boolean,
          ) as string[],
        }
      : { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Bold Video",
      logo: {
        "@type": "ImageObject",
        url: "https://www.boldvideo.com/images/logos/platforms/bold-flat-000.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.boldvideo.com/blog/${post.slug}`,
    },
  };

  return (
    <main className="landing-v10" id="main-content">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
              flexWrap: "wrap",
              fontFamily: "var(--font-mono-stack)",
              fontSize: "var(--fs-micro)",
              gap: "8px",
              letterSpacing: "var(--tr-eyebrow)",
              textTransform: "uppercase",
            }}
          >
            {author ? (
              <Link
                href={author.aboutAnchor}
                style={{ color: "var(--text-dim)" }}
              >
                {post.author}
              </Link>
            ) : (
              <span>{post.author}</span>
            )}
            <span style={{ color: "var(--border-strong)" }}>&middot;</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {wasUpdated ? (
              <>
                <span style={{ color: "var(--border-strong)" }}>&middot;</span>
                <span>
                  Updated{" "}
                  <time dateTime={dateModified}>
                    {formatDate(dateModified)}
                  </time>
                </span>
              </>
            ) : null}
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "var(--tr-display)",
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
            alt={post.title}
            height={1258}
            priority
            src={post.image}
            width={2394}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <BlogBody content={post.content} />

        {author ? (
          <aside
            aria-label="About the author"
            style={{
              alignItems: "flex-start",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: "1rem",
              marginTop: "3rem",
              paddingTop: "2rem",
            }}
          >
            <Image
              alt={author.name}
              height={64}
              src={author.image}
              style={{
                borderRadius: "999px",
                flexShrink: 0,
                objectFit: "cover",
              }}
              width={64}
            />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-mono-stack)",
                  fontSize: "var(--fs-micro)",
                  letterSpacing: "var(--tr-eyebrow)",
                  margin: 0,
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                }}
              >
                Written by
              </p>
              <p
                style={{
                  color: "var(--text)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  margin: "4px 0 0",
                }}
              >
                <Link
                  href={author.aboutAnchor}
                  style={{ color: "var(--text)" }}
                >
                  {author.name}
                </Link>
                <span
                  style={{
                    color: "var(--text-dim)",
                    fontWeight: 400,
                    marginLeft: "0.5rem",
                  }}
                >
                  · {author.role}
                </span>
              </p>
              <p
                style={{
                  color: "var(--text-mid)",
                  fontSize: "14px",
                  lineHeight: 1.65,
                  margin: "8px 0 0",
                }}
              >
                {author.bio}
              </p>
            </div>
          </aside>
        ) : null}
      </article>

      <SiteNavFooter />
    </main>
  );
}
