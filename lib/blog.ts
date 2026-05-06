import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  /** Optional ISO date for the most recent meaningful update; falls back to date when omitted. */
  updated?: string;
  excerpt: string;
  image: string;
  draft?: boolean;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: data.slug as string,
        title: data.title as string,
        author: data.author as string,
        date: data.date as string,
        updated: (data.updated as string) || undefined,
        excerpt: data.excerpt as string,
        image: data.image as string,
        draft: (data.draft as boolean) || false,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
