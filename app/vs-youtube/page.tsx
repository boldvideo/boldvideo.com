import type { Metadata } from "next";
import { ComparisonPage } from "@/components/comparison-page";

export const metadata: Metadata = {
  title: { absolute: "YouTube vs Bold — which fits your coaching program" },
  description:
    "Compare YouTube and Bold. YouTube is great for reach, but Bold gives paying members instant, cited support from your video library.",
  alternates: { canonical: "/vs-youtube" },
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
      quickCompare={[
        {
          feature: "Hosted video and playback",
          competitor: true,
          bold: true,
        },
        {
          feature: "Distraction-free, ad-free environment",
          competitor: false,
          bold: true,
        },
        {
          feature: "Member-only access for paid programs",
          competitor: "partial",
          bold: true,
        },
        {
          feature: "Concept-aware search across your library",
          competitor: false,
          bold: true,
        },
        {
          feature: "Cited answers grounded in your own content",
          competitor: false,
          bold: true,
        },
        {
          feature: "Insight into what members ask, not just what they watch",
          competitor: false,
          bold: true,
        },
        {
          feature: "Free, ad-supported distribution to public audiences",
          competitor: true,
          bold: false,
        },
        {
          feature: "Personal migration handled by the team",
          competitor: false,
          bold: true,
        },
      ]}
      rows={[
        {
          category: "Primary job",
          competitor: {
            title: "Reach & distribution",
            detail: "Discovery and audience growth at the top of the funnel.",
          },
          bold: {
            title: "Member support",
            detail:
              "Discoverability and cited answers inside a paid program.",
          },
        },
        {
          category: "Attention",
          competitor: {
            title: "Surrounded by distractions",
            detail:
              "Ads, recommendations, and competitor videos compete for attention.",
          },
          bold: {
            title: "Distraction-free",
            detail: "Designed to keep attention on your curriculum.",
          },
        },
        {
          category: "Search",
          competitor: {
            title: "Basic video search",
            detail: "Title matches and manual playlist organization.",
          },
          bold: {
            title: "Concept-aware search",
            detail:
              "Across the whole library with timestamps and answer retrieval.",
          },
        },
        {
          category: "Support load",
          competitor: {
            title: "Questions land on your team",
            detail: "Or in comments where context is lost.",
          },
          bold: {
            title: "Library answers first",
            detail:
              "Students ask the library directly and get routed to the right moment.",
          },
        },
        {
          category: "Learning context",
          competitor: {
            title: "Same experience for everyone",
            detail: "No awareness of where the viewer is in their journey.",
          },
          bold: {
            title: "Adapts to the learner",
            detail:
              "Answers adapt to stage, role, and progress while remaining source-grounded.",
          },
        },
      ]}
      title="YouTube vs Bold"
      whyTeamsSwitch={[
        "They want YouTube for marketing but need a separate home for paying members.",
        "They are tired of students getting lost in playlists and asking support to find one lesson.",
        "They want product insight from what members ask, not just view counts and retention graphs.",
      ]}
      faqs={[
        {
          question: "Should I move my YouTube content to Bold?",
          answer:
            "No — keep YouTube for distribution. Bold is for paying members. Many teams use both: YouTube for top-of-funnel and audience growth, Bold for the private library where retention happens.",
        },
        {
          question: "Can YouTube videos be added to a Bold library?",
          answer:
            "Yes. Bold can ingest YouTube videos, including unlisted ones, and add them to your indexed library so members get cited answers across both your YouTube content and any private uploads. Useful when paid programs reference public videos as supplementary material.",
        },
        {
          question: "Why pay for Bold if YouTube is free?",
          answer:
            "YouTube is free because it monetizes attention. For paying members, attention is the product — distractions, ads, and competitor recommendations work against retention. Bold gives you a private, ad-free environment built around member outcomes.",
        },
        {
          question: "Does Bold work for YouTube creators who don't sell courses?",
          answer:
            "Bold is built for programs with paying members and 50+ hours of content where discoverability matters. If you're a creator monetizing through ads or sponsorships, YouTube is the right home. We'd love to talk when you launch a paid program around the content.",
        },
      ]}
    />
  );
}
