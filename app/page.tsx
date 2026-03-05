import { PageShell } from "@/components/page-shell";
import { Hero } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { BoldDivider } from "@/components/bold-divider";
import { TeamSection } from "@/components/team-section";

export default function HomePage() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1">
        <Hero />
        <FeatureSection />
        <BoldDivider />
        <TeamSection />
      </main>
    </PageShell>
  );
}
