import { PageShell } from "@/components/page-shell";
import { Hero } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { OutcomeSection } from "@/components/outcome-section";
import { BoldDivider } from "@/components/bold-divider";
import { TeamSection } from "@/components/team-section";

export default function HomePage() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1">
        <Hero />
        <FeatureSection />
        <OutcomeSection />
        <BoldDivider />
        <TeamSection />
      </main>
    </PageShell>
  );
}
