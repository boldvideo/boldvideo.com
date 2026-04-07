import type { Metadata } from "next";
import { ComparisonPage } from "@/components/comparison-page";

export const metadata: Metadata = {
  title: "Vimeo vs Bold",
  description:
    "Compare Vimeo and Bold. Vimeo is polished video infrastructure, but Bold is built for coaching businesses that need discoverability and support at scale.",
};

export default function VsVimeoPage() {
  return (
    <ComparisonPage
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
      rows={[
        {
          category: "Primary job",
          competitor: "Video hosting, playback, and polished media delivery.",
          bold: "Video intelligence, discoverability, and cited guidance inside a curriculum.",
        },
        {
          category: "Member experience",
          competitor:
            "Clean watching experience, but guidance still depends on navigation and support.",
          bold: "Students ask questions directly and get source-grounded answers with timestamps.",
        },
        {
          category: "Library depth",
          competitor:
            "Large libraries become increasingly manual to organize and surface.",
          bold: "Deep libraries become more valuable because they are indexed conceptually.",
        },
        {
          category: "Revenue impact",
          competitor:
            "Improves delivery quality but does not directly solve churn from confusion.",
          bold: "Targets the retention problem by helping members implement what they bought.",
        },
        {
          category: "Operator insight",
          competitor: "Analytics are mostly watch-based.",
          bold: "You learn what members are asking, what topics are unclear, and where content gaps remain.",
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
