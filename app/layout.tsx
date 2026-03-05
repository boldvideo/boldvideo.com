import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bold Video",
    template: "%s | Bold Video",
  },
  description:
    "Scale your coaching program without hiring more coaches. Bold turns your video library into a coaching team that never sleeps.",
  metadataBase: new URL("https://boldvideo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://boldvideo.com",
    siteName: "Bold Video",
    title: "Bold Video",
    description:
      "Scale your coaching program without hiring more coaches. Bold turns your video library into a coaching team that never sleeps.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bold Video",
    description:
      "Scale your coaching program without hiring more coaches. Bold turns your video library into a coaching team that never sleeps.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
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
