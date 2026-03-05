import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { FeatureSection } from "@/components/feature-section";
import { ComparisonCta } from "@/components/comparison-cta";

export const metadata: Metadata = {
  title: "YouTube vs Bold Video",
  description:
    "Compare YouTube and Bold Video. YouTube is great for reach, but Bold gives your audience 24/7 context-aware knowledge support from your videos.",
};

export default function VsYouTubePage() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
              YouTube vs Bold Video
            </h1>
            <p className="mb-8 text-gray-500">
              Comparing the two video solutions. If anything is unclear, please
              contact us at:{" "}
              <a
                href="mailto:support@boldvideo.com"
                className="text-teal underline"
              >
                support@boldvideo.com
              </a>
            </p>

            <div className="prose prose-gray max-w-none space-y-6">
              <p>
                YouTube is excellent for reach and distribution if you know how
                to work the algorithm — we recommend using it. But when your
                audience needs to search your library, ask questions of your
                videos, or quickly grasp a concept, Bold Video steps in.
              </p>
              <p>
                YouTube may be &quot;free,&quot; but that comes with ads,
                distractions, and competitor content pulling viewers away. Bold
                gives you a premium, distraction-free experience designed to keep
                your audience focused on your content.
              </p>
              <p className="text-sm italic text-gray-400">
                Full comparison page coming soon.
              </p>
            </div>
          </div>
        </section>

        <FeatureSection />
        <ComparisonCta />
      </main>
    </PageShell>
  );
}
