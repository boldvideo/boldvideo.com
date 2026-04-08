import type { Metadata } from "next";
import { MigrationPage } from "@/components/migration-page";

export const metadata: Metadata = {
  title: "Migrate to Bold — We Handle the Switch",
  description:
    "Switching from Kajabi, Vimeo, Circle, or Teachable? We handle the migration personally, start to finish. Your content moves. Your members land somewhere better.",
};

export default function MigratePage() {
  return <MigrationPage />;
}
