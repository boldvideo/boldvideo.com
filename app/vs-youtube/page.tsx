import type { Metadata } from "next";
import { ComparisonPage } from "@/components/comparison-page";

export const metadata: Metadata = {
  title: "YouTube vs Bold",
  description:
    "Compare YouTube and Bold. YouTube is great for reach, but Bold gives paying members instant, cited support from your video library.",
};

export default function VsYouTubePage() {
  return (
    <ComparisonPage
      competitorSlug="youtube"
      description="YouTube is excellent for reach, distribution, and top-of-funnel discovery. Bold is what you use when a paying member needs answers, context, and implementation support from your own curriculum."
      eyebrow="Comparison · YouTube"
      perspective={
        <>
          <p>
            We still recommend YouTube for audience growth. It is unmatched for
            distribution if you know how to work the algorithm.
          </p>
          <p>
            The tradeoff is obvious once content becomes curriculum. Ads,
            competitor videos, and rabbit-hole discovery are perfect for
            entertainment and terrible for a paid learning environment.
          </p>
          <p>
            Bold exists for the second system: the private, premium, searchable
            training library where members need answers and operators need
            retention.
          </p>
        </>
      }
      rows={[
        {
          category: "Primary job",
          competitor: "Reach, distribution, discovery, and audience growth.",
          bold: "Member support, discoverability, and cited answers inside a paid program.",
        },
        {
          category: "Attention",
          competitor:
            "Ads, recommendations, and competitor distractions surround the experience.",
          bold: "Distraction-free environment designed to keep attention on your curriculum.",
        },
        {
          category: "Search",
          competitor: "Basic video search and manual playlist organization.",
          bold: "Concept-aware search across the whole library with timestamps and answer retrieval.",
        },
        {
          category: "Support load",
          competitor: "Questions still land on your team or in comments.",
          bold: "Students ask the library directly and get routed to the right moment.",
        },
        {
          category: "Learning context",
          competitor: "Same video experience for everyone.",
          bold: "Answers adapt to stage, role, and progress while remaining source-grounded.",
        },
      ]}
      title="YouTube vs Bold"
      whyTeamsSwitch={[
        "They want YouTube for marketing but need a separate home for paying members.",
        "They are tired of students getting lost in playlists and asking support to find one lesson.",
        "They want product insight from what members ask, not just view counts and retention graphs.",
      ]}
    />
  );
}
