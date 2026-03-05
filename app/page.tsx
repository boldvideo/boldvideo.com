import { PageShell } from "@/components/page-shell";
import { Hero } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { FeatureBlock } from "@/components/feature-block";
import { BoldDivider } from "@/components/bold-divider";
import { SocialProofSection } from "@/components/social-proof-section";
import { OutcomeSection } from "@/components/outcome-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { WhoItsForSection } from "@/components/who-its-for-section";
import { CtaSection } from "@/components/cta-section";
import { TeamSection } from "@/components/team-section";
import { FaqSection } from "@/components/faq-section";

export default function HomePage() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1">
        {/* Hero with video + logos */}
        <Hero />

        {/* Problem statement */}
        <FeatureSection />

        {/* Divider → first 3 features */}
        <BoldDivider />

        <FeatureBlock
          eyebrow="Ask anything"
          heading="A student gets stuck at midnight. Your AI coach is already there."
          body="They type a question. They get your answer, with a timestamp to the exact moment you taught it. Not a chatbot guessing. Your words, cited and verifiable."
          imageSrc="/images/feature-placeholder.png"
          imageAlt="AI chat panel on a video with timestamped answers"
          imagePosition="right"
        />

        <FeatureBlock
          eyebrow="Viewer profiles"
          heading="A beginner and a veteran ask the same question. They don't get the same answer."
          body="Bold knows where each student is in your program. Week two gets the fundamentals. Month eight gets the advanced playbook. Same question, different context, right answer."
          imageSrc="/images/feature-placeholder.png"
          imageAlt="Side-by-side personalized responses for different student levels"
          imagePosition="left"
          background="alt"
        />

        <FeatureBlock
          eyebrow="Library search"
          heading={`"I know I covered this somewhere." Now they can find it.`}
          body="Search 300 hours of content by what's actually being taught. Results come back with timestamps and transcript snippets. No more rewatching Module 7 to find one sentence."
          imageSrc="/images/feature-placeholder.png"
          imageAlt="Search results showing timestamped matches across multiple videos"
          imagePosition="right"
        />

        {/* Center block → divider → last 2 features */}
        <SocialProofSection />

        <BoldDivider />

        <FeatureBlock
          eyebrow="Fully yours"
          heading="The AI sounds like you because you told it how to think."
          body="Set the voice, the boundaries, the personality. Attach your PDFs and frameworks. Everything lives on your domain, behind your login, wearing your brand."
          imageSrc="/images/feature-placeholder.png"
          imageAlt="Brand customization and AI personality settings panel"
          imagePosition="left"
        />

        <FeatureBlock
          eyebrow="Drop it in"
          heading="Upload your library. Bold handles the rest."
          body="Bulk import from Zoom, Google Drive, YouTube. Bold transcribes, chapters, and indexes everything. Your content graveyard becomes a searchable knowledge base by morning."
          imageSrc="/images/feature-placeholder.png"
          imageAlt="Bulk upload interface showing library processing progress"
          imagePosition="right"
          background="alt"
        />

        {/* The math */}
        <OutcomeSection />

        {/* How it works */}
        <HowItWorksSection />

        {/* Who it's for */}
        <WhoItsForSection />

        {/* CTA */}
        <CtaSection />

        {/* Team */}
        <TeamSection />

        {/* FAQ */}
        <FaqSection />
      </main>
    </PageShell>
  );
}
