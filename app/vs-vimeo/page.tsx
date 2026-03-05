import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { FeatureSection } from "@/components/feature-section";
import { ComparisonCta } from "@/components/comparison-cta";

export const metadata: Metadata = {
  title: "Vimeo vs Bold Video",
  description:
    "Compare Vimeo and Bold Video. Vimeo offers polished tools, but Bold gives you speed, clarity, and intelligent features with no upselling.",
};

export default function VsVimeoPage() {
  return (
    <PageShell>
      <main id="main-content" className="flex-1">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Vimeo vs Bold Video
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
                Vimeo is a respected brand with a long history in video hosting.
                It delivers polished tools and a professional feel, but
                performance isn&apos;t the fastest, and the platform has become
                known for aggressive upselling — pushing features behind
                higher-priced tiers in the user experience.
              </p>
              <p>
                Bold Video takes a different path. You get speed, clarity, and a
                distraction-free portal where your audience stays focused on{" "}
                <em>your</em> content. With Bold, everything you need is
                included — from intelligent analytics to the ability for viewers
                to ask your videos or entire library questions — so you can see
                exactly what people are searching for and plan your next content
                based on real data, not guesswork.
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
