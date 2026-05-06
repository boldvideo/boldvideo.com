export type OpticalSize = "sm" | "md" | "lg";

export type MigrationPlatform = {
  slug: string;
  name: string;
  logoSrc: string;
  markSrc?: string;
  /** White-fill SVG for dark backgrounds. Filename suffix: `-flat-FFF.svg`. */
  flatLogoSrc?: string;
  /** Black-fill SVG for light backgrounds. Filename suffix: `-flat-000.svg`. */
  flatLogoLightSrc?: string;
  /** Max width (px) for the flat logo so wide wordmarks don't dominate the strip. */
  flatMaxWidth?: number;
  /** Optical-scale bucket; multiplies the strip baseline height via --logo-scale-* tokens. */
  opticalSize?: OpticalSize;
  vsHref?: string;
  /** Real brand SVG provided. Others still use the text-wordmark placeholder. */
  logoReady?: boolean;
};

export const migrationPlatforms: MigrationPlatform[] = [
  {
    slug: "kajabi",
    name: "Kajabi",
    logoSrc: "/images/logos/platforms/kajabi.svg",
    markSrc: "/images/logos/platforms/kajabi-mark.svg",
    flatLogoSrc: "/images/logos/platforms/kajabi-flat-FFF.svg",
    flatLogoLightSrc: "/images/logos/platforms/kajabi-flat-000.svg",
    flatMaxWidth: 70,
    vsHref: "/vs-kajabi",
    logoReady: true,
  },
  {
    slug: "circle",
    name: "Circle",
    logoSrc: "/images/logos/platforms/circle.svg",
    markSrc: "/images/logos/platforms/circle-mark.svg",
    flatLogoSrc: "/images/logos/platforms/circle-flat-FFF.svg",
    flatLogoLightSrc: "/images/logos/platforms/circle-flat-000.svg",
    flatMaxWidth: 70,
    logoReady: true,
  },
  {
    slug: "teachable",
    name: "Teachable",
    logoSrc: "/images/logos/platforms/teachable.svg",
    flatLogoSrc: "/images/logos/platforms/teachable-flat-FFF.svg",
    flatLogoLightSrc: "/images/logos/platforms/teachable-flat-000.svg",
    flatMaxWidth: 100,
    logoReady: true,
  },
  {
    slug: "thinkific",
    name: "Thinkific",
    logoSrc: "/images/logos/platforms/thinkific.svg",
    markSrc: "/images/logos/platforms/thinkific-mark.svg",
    flatLogoSrc: "/images/logos/platforms/thinkific-flat-FFF.svg",
    flatLogoLightSrc: "/images/logos/platforms/thinkific-flat-000.svg",
    flatMaxWidth: 90,
    logoReady: true,
  },
  {
    slug: "skool",
    name: "Skool",
    logoSrc: "/images/logos/platforms/skool.svg",
    flatLogoSrc: "/images/logos/platforms/skool-flat-FFF.svg",
    flatLogoLightSrc: "/images/logos/platforms/skool-flat-000.svg",
    flatMaxWidth: 90,
    opticalSize: "sm",
    logoReady: true,
  },
  {
    slug: "vimeo",
    name: "Vimeo",
    logoSrc: "/images/logos/platforms/vimeo.svg",
    markSrc: "/images/logos/platforms/vimeo-mark.svg",
    flatLogoSrc: "/images/logos/platforms/vimeo-flat-FFF.svg",
    flatLogoLightSrc: "/images/logos/platforms/vimeo-flat-000.svg",
    flatMaxWidth: 90,
    opticalSize: "sm",
    vsHref: "/vs-vimeo",
    logoReady: true,
  },
  {
    slug: "youtube",
    name: "YouTube",
    logoSrc: "/images/logos/platforms/youtube.svg",
    markSrc: "/images/logos/platforms/youtube-mark.svg",
    flatLogoSrc: "/images/logos/platforms/youtube-flat-FFF.svg",
    flatLogoLightSrc: "/images/logos/platforms/youtube-flat-000.svg",
    flatMaxWidth: 100,
    opticalSize: "sm",
    vsHref: "/vs-youtube",
    logoReady: true,
  },
  {
    slug: "mighty",
    name: "Mighty Networks",
    logoSrc: "/images/logos/platforms/mighty.svg",
  },
];

export const boldLogo = {
  name: "Bold",
  logoSrc: "/images/logos/platforms/bold.svg",
  markSrc: "/images/logos/platforms/bold-mark.svg",
  flatLogoSrc: "/images/logos/platforms/bold-flat-FFF.svg",
  flatLogoLightSrc: "/images/logos/platforms/bold-flat-000.svg",
};

export function getPlatform(slug: string): MigrationPlatform | undefined {
  return migrationPlatforms.find((p) => p.slug === slug);
}

export function tileToLength<T>(items: T[], length: number): T[] {
  if (items.length === 0) return [];
  return Array.from({ length }, (_, i) => items[i % items.length]);
}
