import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LEGAL_DIR = path.join(process.cwd(), "content/legal");

export type LegalDocumentSlug = "privacy-policy" | "terms";

export type LegalDocument = {
  slug: LegalDocumentSlug;
  title: string;
  description: string;
  updatedAt: string;
  content: string;
};

export function getLegalDocument(slug: LegalDocumentSlug): LegalDocument {
  const raw = fs.readFileSync(path.join(LEGAL_DIR, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    updatedAt: data.updatedAt as string,
    content,
  };
}
