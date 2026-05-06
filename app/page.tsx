import type { Metadata } from "next";
import { HomePage as LandingPage } from "@/components/home-page";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <LandingPage />;
}
