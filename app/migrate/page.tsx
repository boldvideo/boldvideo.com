import type { Metadata } from "next";
import { MigrationPage } from "@/components/migration-page";

export const metadata: Metadata = {
  title: "Migrate to Bold",
  description:
    "Move to Bold without rebuilding your business. We help teams migrate from Kajabi, Vimeo, Circle, Teachable, and mixed stacks with a cleaner plan and a personal handoff.",
};

export default function MigratePage() {
  return <MigrationPage />;
}
