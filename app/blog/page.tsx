import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";

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
  const posts = getAllPosts().filter((p) => !p.draft);

  return (
    <main className="landing-v10" id="main-content">
      <div className="announce">
        <strong>New on the blog</strong>
        <div className="sep" />
        <a href="/blog/video-search-broken">
          Video Search Is Broken &rarr;
        </a>
      </div>

      <SiteNav />

      <section className="container" style={{ paddingTop: "9rem", paddingBottom: "3rem" }}>
        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "var(--fs-micro)",
            textTransform: "uppercase",
            letterSpacing: "var(--tr-eyebrow)",
            color: "var(--text-mid)",
            marginBottom: "0.75rem",
          }}
        >
          Blog
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "var(--tr-display)",
            lineHeight: 1.1,
            color: "var(--text)",
            margin: "0 0 0.75rem",
          }}
        >
          From the team
        </h1>
        <p
          style={{
            fontSize: "var(--fs-lead)",
            color: "var(--text-mid)",
            maxWidth: "480px",
            lineHeight: 1.75,
          }}
        >
          What we are learning about video intelligence, coaching at scale,
          and building tools that make content actually useful.
        </p>
      </section>

      <section className="container" style={{ paddingBottom: "5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.slug}
              className="sc-card"
              href={post.draft ? "#" : `/blog/${post.slug}`}
              aria-disabled={post.draft}
              tabIndex={post.draft ? -1 : undefined}
              style={{ cursor: post.draft ? "default" : undefined }}
            >
              <div className="sc-screen" style={{ position: "relative" }}>
                <Image
                  alt=""
                  className="sc-img"
                  height={630}
                  src={post.image}
                  width={1200}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                {post.draft && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(13, 21, 17, 0.8)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "var(--fs-micro)",
                        textTransform: "uppercase",
                        letterSpacing: "var(--tr-wide)",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      Coming soon
                    </span>
                  </div>
                )}
              </div>
              <div className="sc-info">
                <h4 style={{ fontSize: "var(--fs-lead)", marginBottom: "4px" }}>{post.title}</h4>
                <p
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.excerpt}
                </p>
                <div
                  style={{
                    alignItems: "center",
                    color: "var(--text-dim)",
                    display: "flex",
                    fontFamily: "var(--font-mono-stack)",
                    fontSize: "var(--fs-micro)",
                    justifyContent: "space-between",
                    letterSpacing: "var(--tr-eyebrow)",
                    marginTop: "1rem",
                    textTransform: "uppercase",
                  }}
                >
                  <span>{post.author}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteNavFooter />
    </main>
  );
}
