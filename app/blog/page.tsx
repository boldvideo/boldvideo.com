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
  const posts = getAllPosts();

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
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
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
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--text)",
            margin: "0 0 0.75rem",
          }}
        >
          From the team
        </h1>
        <p
          style={{
            fontSize: "17px",
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
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      Coming soon
                    </span>
                  </div>
                )}
              </div>
              <div className="sc-info">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "12px",
                    color: "var(--text-dim)",
                    marginBottom: "6px",
                  }}
                >
                  <span>{post.author}</span>
                  <span style={{ color: "var(--border-strong)" }}>&middot;</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <h4 style={{ fontSize: "1rem", marginBottom: "4px" }}>{post.title}</h4>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.65,
                    color: "var(--text-mid)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteNavFooter />
    </main>
  );
}
