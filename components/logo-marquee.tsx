import type { CSSProperties } from "react";
import type { MigrationPlatform } from "@/lib/platforms";

type Props = {
  platforms: MigrationPlatform[];
  /** Base px height before the optical-scale multiplier. Default 24. */
  baseHeight?: number;
  /** CSS max-width for the masked window — e.g. "60%", "80%", "640px". */
  maxWidth?: string;
  /** Animation duration. Default 40s. */
  duration?: string;
};

export function LogoMarquee({
  platforms,
  baseHeight = 24,
  maxWidth,
  duration,
}: Props) {
  if (platforms.length === 0) return null;
  const wrapperStyle: CSSProperties = {};
  if (maxWidth) wrapperStyle.maxWidth = maxWidth;
  if (duration) {
    (wrapperStyle as Record<string, string>)["--logo-marquee-duration"] =
      duration;
  }
  return (
    <div className="logo-marquee" style={wrapperStyle}>
      <ul className="logo-marquee-track">
        {[...platforms, ...platforms].map((platform, i) => {
          const isClone = i >= platforms.length;
          return (
            <li aria-hidden={isClone || undefined} key={`${platform.slug}-${i}`}>
              <img
                alt={isClone ? "" : `${platform.name} logo`}
                height={28}
                src={platform.flatLogoSrc ?? platform.logoSrc}
                style={{
                  height: `calc(${baseHeight}px * var(--logo-scale-${platform.opticalSize ?? "md"}, 1))`,
                  ...(platform.flatMaxWidth
                    ? { maxWidth: platform.flatMaxWidth }
                    : {}),
                }}
                width={120}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
