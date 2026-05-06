import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalDocument } from "@/lib/legal";

export function generateMetadata(): Metadata {
  const document = getLegalDocument("terms");

  return {
    title: document.title,
    description: document.description,
    alternates: { canonical: "/terms" },
  };
}

export default function TermsPage() {
  const document = getLegalDocument("terms");

  return (
    <LegalPage
      content={document.content}
      description={document.description}
      title={document.title}
      updatedAt={document.updatedAt}
    />
  );
}
