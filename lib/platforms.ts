export type MigrationPlatform = {
  slug: string;
  name: string;
  logoSrc: string;
  markSrc?: string;
  /** Monochrome white version for use on dark backgrounds (migration strip etc.). */
  flatLogoSrc?: string;
  /** Max width (px) for the flat logo so wide wordmarks don't dominate the strip. */
  flatMaxWidth?: number;
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
    flatLogoSrc: "/images/logos/platforms/kajabi-flat.svg",
    flatMaxWidth: 70,
    vsHref: "/vs-kajabi",
    logoReady: true,
  },
  {
    slug: "teachable",
    name: "Teachable",
    logoSrc: "/images/logos/platforms/teachable.svg",
    flatLogoSrc: "/images/logos/platforms/teachable-flat.svg",
    flatMaxWidth: 100,
    logoReady: true,
  },
  {
    slug: "thinkific",
    name: "Thinkific",
    logoSrc: "/images/logos/platforms/thinkific.svg",
  },
  {
    slug: "vimeo",
    name: "Vimeo",
    logoSrc: "/images/logos/platforms/vimeo.svg",
    vsHref: "/vs-vimeo",
  },
  {
    slug: "youtube",
    name: "YouTube",
    logoSrc: "/images/logos/platforms/youtube.svg",
    vsHref: "/vs-youtube",
  },
  {
    slug: "circle",
    name: "Circle",
    logoSrc: "/images/logos/platforms/circle.svg",
    markSrc: "/images/logos/platforms/circle-mark.svg",
    flatLogoSrc: "/images/logos/platforms/circle-flat.svg",
    flatMaxWidth: 70,
    logoReady: true,
  },
  {
    slug: "skool",
    name: "Skool",
    logoSrc: "/images/logos/platforms/skool.svg",
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
};

export function getPlatform(slug: string): MigrationPlatform | undefined {
  return migrationPlatforms.find((p) => p.slug === slug);
}

export function tileToLength<T>(items: T[], length: number): T[] {
  if (items.length === 0) return [];
  return Array.from({ length }, (_, i) => items[i % items.length]);
}
