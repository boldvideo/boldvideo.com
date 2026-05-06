import type { Metadata } from "next";
import { DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { MobileDock } from "@/components/mobile-dock";
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
    default: "Bold — Video intelligence for coaching programs",
    template: "%s | Bold",
  },
  description:
    "Bold turns your video library into an AI teaching assistant. Students ask questions and get answers with cited timestamps from your actual content. No hallucinations. Your expertise, findable.",
  metadataBase: new URL("https://www.boldvideo.com"),
  authors: [{ name: "Bold Video" }],
  creator: "Bold Video",
  publisher: "Bold Video",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.boldvideo.com",
    siteName: "Bold",
    title: "Bold — Video intelligence for coaching programs",
    description:
      "Your video library is an untapped goldmine. Bold makes every lesson searchable by concept and powers an AI assistant that answers student questions with cited timestamps.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldvid",
    creator: "@boldvid",
    title: "Bold — Video intelligence for coaching programs",
    description:
      "Your video library is an untapped goldmine. Bold makes every lesson searchable by concept and powers an AI assistant that answers student questions with cited timestamps.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bold Video",
  alternateName: "Bold",
  url: "https://www.boldvideo.com",
  logo: "https://www.boldvideo.com/images/logos/platforms/bold-flat-000.svg",
  description:
    "Bold turns your video library into an AI teaching assistant. Students ask questions and get answers with cited timestamps from your actual content.",
  email: "support@boldvideo.com",
  sameAs: [
    "https://twitter.com/boldvid",
    "https://www.linkedin.com/company/boldvideo/",
  ],
  founder: [
    { "@type": "Person", name: "Marcel Fahle" },
    { "@type": "Person", name: "Rob Hope" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${plusJakartaSans.variable} ${dmMono.variable} font-sans antialiased`}
      >
        {children}
        <MobileDock />
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
