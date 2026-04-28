export type MigrationPlatform = {
  slug: string;
  name: string;
  logoSrc: string;
  vsHref?: string;
};

export const migrationPlatforms: MigrationPlatform[] = [
  {
    slug: "kajabi",
    name: "Kajabi",
    logoSrc: "/images/logos/platforms/kajabi.svg",
    vsHref: "/vs-kajabi",
  },
  {
    slug: "teachable",
    name: "Teachable",
    logoSrc: "/images/logos/platforms/teachable.svg",
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
};

export function getPlatform(slug: string): MigrationPlatform | undefined {
  return migrationPlatforms.find((p) => p.slug === slug);
}
