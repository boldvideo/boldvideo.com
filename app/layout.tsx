import type { Metadata } from "next";
import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bold",
    template: "%s | Bold",
  },
  description:
    "Scale your coaching program without hiring more coaches. Bold turns your video library into an AI coach that cites the exact moment that matters.",
  metadataBase: new URL("https://boldvideo.com"),
  keywords: [
    "video intelligence",
    "AI coaching",
    "coaching program software",
    "video library search",
    "training academy AI",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boldvideo.com",
    siteName: "Bold",
    title: "Bold",
    description:
      "Scale your coaching program without hiring more coaches. Bold turns your video library into an AI coach that cites the exact moment that matters.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold",
    description:
      "Scale your coaching program without hiring more coaches. Bold turns your video library into an AI coach that cites the exact moment that matters.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${dmMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <Script
        defer
        data-domain="boldvideo.com"
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
