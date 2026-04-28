import type { Metadata } from "next";
import { ComparisonPage } from "@/components/comparison-page";

export const metadata: Metadata = {
  title: "Kajabi vs Bold",
  description:
    "Kajabi built the all-in-one creator economy. Bold is built for coaching programs where revenue depends on whether students actually apply what they learn.",
};

export default function VsKajabiPage() {
  return (
    <ComparisonPage
      competitorSlug="kajabi"
      description="Kajabi has been the default home for course creators for over a decade. Bold is what teams choose when the business stops being about launching a course and starts being about whether students get results."
      eyebrow="Comparison · Kajabi"
      perspective={
        <>
          <p>
            Kajabi is one of the most successful platforms in the category for a
            reason. The all-in-one toolkit, the email, the landing pages, the
            funnels, the years of polish. If your job is to launch and sell a
            course, it does that job well, and we recommend it to people in
            that exact situation.
          </p>
          <p>
            The tradeoff shows up later. Once your business depends on student
            outcomes, not just student signups, the all-in-one model starts
            pulling you in directions you do not need. Funnels, upsells,
            affiliate tooling, and roadmap energy spent on creator productivity
            instead of learner support. The 300 hours of curriculum you built
            sit in a library that is hard to search and impossible to ask.
          </p>
          <p>
            Bold is built around the moment a paying member is stuck. Cited
            answers from your own library, in your voice, at the moment of
            friction. Less marketing surface. More implementation depth.
          </p>
        </>
      }
      quickCompare={[
        {
          feature: "Hosted video and course delivery",
          competitor: true,
          bold: true,
        },
        {
          feature: "AI search across the full video library",
          competitor: false,
          bold: true,
        },
        {
          feature: "Cited answers grounded in your own content",
          competitor: false,
          bold: true,
        },
        {
          feature: "Built for coaching outcomes, not course launches",
          competitor: false,
          bold: true,
        },
        {
          feature: "Insight into what members are actually asking",
          competitor: "partial",
          bold: true,
        },
        {
          feature: "Funnels, email, and landing-page builder",
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
          competitor:
            "All-in-one course business: hosting, marketing, funnels, and checkout in one place.",
          bold: "Implementation layer for a coaching or training program already serving paying members.",
        },
        {
          category: "Where the AI roadmap points",
          competitor:
            "Creator productivity: auto-clipping, AI sales pages, subject-line tools, funnel helpers.",
          bold: "Learner support: cited answers from your library at the moment a member is stuck.",
        },
        {
          category: "Library discoverability",
          competitor:
            "Search by lesson title and tag. Members navigate manually through modules.",
          bold: "Concept-aware search across the whole library, with timestamps and source citations.",
        },
        {
          category: "Coach and founder time",
          competitor:
            "Repeat questions still land in Slack, DMs, and group calls every cohort.",
          bold: "Members ask the library first. Coaches step in only on the questions that need them.",
        },
        {
          category: "Outcome accountability",
          competitor:
            "Reports on revenue, opens, and lesson views. Outcomes are the operator's problem.",
          bold: "Surfaces where members get stuck, what they ask, and where the curriculum has gaps.",
        },
        {
          category: "Migration",
          competitor:
            "DIY exports, third-party tools, or partner integrations.",
          bold: "We move your videos, members, and structure for you, personally, start to finish.",
        },
      ]}
      title="Kajabi vs Bold"
      whyTeamsSwitch={[
        "Their library has grown past the point where members can find anything in it on their own.",
        "Renewals are softening, and the platform's roadmap is pointed at acquisition, not retention.",
        "They want their coaches answering harder questions, not the same five every cohort.",
      ]}
    />
  );
}
