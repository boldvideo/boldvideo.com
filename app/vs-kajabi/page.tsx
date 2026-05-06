import type { Metadata } from "next";
import { ComparisonPage } from "@/components/comparison-page";

export const metadata: Metadata = {
  title: { absolute: "Kajabi vs Bold — course platform vs. coaching layer" },
  description:
    "Kajabi built the all-in-one creator economy. Bold is built for coaching programs where revenue depends on whether students actually apply what they learn.",
  alternates: { canonical: "/vs-kajabi" },
};

export default function VsKajabiPage() {
  return (
    <ComparisonPage
      aiOrbits={{
        competitor: {
          label: "Creator",
          chips: [
            "Auto-clipping",
            "AI sales pages",
            "Subject-line tools",
            "Funnel helpers",
          ],
        },
        bold: {
          label: "Learner",
          chips: [
            "Cited answers",
            "Concept search",
            "Stuck-moment detection",
            "Curriculum gaps",
          ],
        },
      }}
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
          feature: "Built-in member authentication",
          competitor: true,
          bold: false,
        },
        {
          feature: "Built-in checkout and subscription billing",
          competitor: true,
          bold: false,
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
          competitor: {
            title: "All-in-one creator stack",
            detail:
              "Hosting, marketing, funnels, and checkout in one place.",
          },
          bold: {
            title: "Implementation layer",
            detail:
              "Built for coaching and training programs already serving paying members.",
          },
        },
        {
          category: "Where the AI roadmap points",
          competitor: {
            title: "Creator productivity",
            detail:
              "Auto-clipping, AI sales pages, subject-line tools, funnel helpers.",
          },
          bold: {
            title: "Learner support",
            detail:
              "Cited answers from your library at the moment a member is stuck.",
          },
        },
        {
          category: "Library discoverability",
          competitor: {
            title: "Search by title and tag",
            detail: "Members navigate manually through modules.",
          },
          bold: {
            title: "Concept-aware search",
            detail:
              "Across the whole library, with timestamps and source citations.",
          },
        },
        {
          category: "Coach and founder time",
          competitor: {
            title: "Repeat questions in Slack and DMs",
            detail: "The same five questions every cohort.",
          },
          bold: {
            title: "Members ask the library first",
            detail:
              "Coaches step in only on the questions that need them.",
          },
        },
        {
          category: "Outcome accountability",
          competitor: {
            title: "Revenue and view reporting",
            detail: "Outcomes are the operator's problem.",
          },
          bold: {
            title: "Surfaces what members ask",
            detail:
              "Where they get stuck, what they search, and where the curriculum has gaps.",
          },
        },
        {
          category: "Member authentication",
          competitor: {
            title: "Built-in member accounts",
            detail: "Login, password reset, and gated access included.",
          },
          bold: {
            title: "Plug into your auth",
            detail:
              "We recommend Clerk or Auth0. Bold integrates with whatever you already use.",
          },
        },
        {
          category: "Student payments",
          competitor: {
            title: "Built-in checkout & subscriptions",
            detail:
              "Recurring billing, one-off products, and drip schedules.",
          },
          bold: {
            title: "Pairs with Stripe",
            detail:
              "We recommend Stripe for coaching businesses. Bold doesn't replace your billing.",
          },
        },
        {
          category: "Migration",
          competitor: {
            title: "DIY",
            detail: "Exports, third-party tools, or partner integrations.",
          },
          bold: {
            title: "We do it for you",
            detail:
              "Videos, members, and structure. Personally, start to finish.",
          },
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
