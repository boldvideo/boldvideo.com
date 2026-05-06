import { notFound } from "next/navigation";
import "@/components/landing-v10.css";
import "../styleguide.css";
import { LogoGuideClient } from "./logo-guide-client";

export const metadata = {
  title: "Logo guide — internal",
  robots: { index: false, follow: false },
};

export default function LogoGuidePage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <LogoGuideClient />;
}
