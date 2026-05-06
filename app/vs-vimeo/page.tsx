import type { Metadata } from "next";
import { ComparisonPage } from "@/components/comparison-page";

export const metadata: Metadata = {
  title: { absolute: "Vimeo vs Bold — hosting vs. video intelligence" },
  description:
    "Compare Vimeo and Bold. Vimeo is polished video infrastructure, but Bold is built for coaching businesses that need discoverability and support at scale.",
  alternates: { canonical: "/vs-vimeo" },
};

export default function VsVimeoPage() {
  return (
    <ComparisonPage
      competitorSlug="vimeo"
      description="Vimeo is respected infrastructure for hosting and playback. Bold is what teams choose when hosting is solved but discoverability, churn, and support repetition are still hurting the business."
      eyebrow="Comparison · Vimeo"
      perspective={
        <>
          <p>
            Vimeo is polished and professional. If the only problem is getting a
            clean player online, it does the job.
          </p>
          <p>
            But coaching programs do not lose renewals because the player is
            ugly. They lose renewals because students cannot find the right
            lesson, cannot get help at the moment of friction, and cannot
            connect the library to action.
          </p>
          <p>
            Bold is built around that operational gap. It treats the library as
            a knowledge system, not a pile of hosted files.
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
          feature: "Polished, professional player",
          competitor: true,
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
          feature: "Question-based insight into what members are asking",
          competitor: false,
          bold: true,
        },
        {
          feature: "Built around member retention, not just delivery",
          competitor: false,
          bold: true,
        },
        {
          feature: "Per-seat / file-based pricing tiers",
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
            title: "Video hosting & playback",
            detail: "Polished media delivery on a clean player.",
          },
          bold: {
            title: "Video intelligence",
            detail:
              "Discoverability and cited guidance inside a curriculum.",
          },
        },
        {
          category: "Member experience",
          competitor: {
            title: "Clean watching experience",
            detail:
              "But guidance still depends on navigation and support.",
          },
          bold: {
            title: "Ask the library directly",
            detail:
              "Source-grounded answers with timestamps from your own content.",
          },
        },
        {
          category: "Library depth",
          competitor: {
            title: "Manual at scale",
            detail:
              "Large libraries become increasingly hard to organize and surface.",
          },
          bold: {
            title: "More valuable at scale",
            detail:
              "Deep libraries become more useful because they're indexed conceptually.",
          },
        },
        {
          category: "Revenue impact",
          competitor: {
            title: "Better delivery quality",
            detail: "Doesn't directly solve churn from confusion.",
          },
          bold: {
            title: "Targets retention",
            detail: "Helps members implement what they bought.",
          },
        },
        {
          category: "Operator insight",
          competitor: {
            title: "Watch-based analytics",
            detail: "Plays, retention curves, completion rates.",
          },
          bold: {
            title: "Question-based insight",
            detail:
              "What members ask, where topics are unclear, and where content gaps remain.",
          },
        },
      ]}
      title="Vimeo vs Bold"
      whyTeamsSwitch={[
        "They already have polished hosting, but students still cannot find answers across the library.",
        "They want to reduce repeated support questions without hiring a coaching team around the clock.",
        "They need better signal about what the audience is trying to learn and where the curriculum is breaking down.",
      ]}
    />
  );
}
