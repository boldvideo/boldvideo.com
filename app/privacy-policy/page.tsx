import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalDocument } from "@/lib/legal";

export function generateMetadata(): Metadata {
  const document = getLegalDocument("privacy-policy");

  return {
    title: document.title,
    description: document.description,
    alternates: { canonical: "/privacy-policy" },
  };
}

export default function PrivacyPolicyPage() {
  const document = getLegalDocument("privacy-policy");

  return (
    <LegalPage
      content={document.content}
      description={document.description}
      title={document.title}
      updatedAt={document.updatedAt}
    />
  );
}
