"use client";

import { Fragment, useState, type CSSProperties } from "react";
import { CopySvgButton } from "./copy-svg-button";

type LogoVariantKey = "default" | "mark" | "flat";

const LOGO_VARIANTS: { key: LogoVariantKey; suffix: string; label: string }[] = [
  { key: "default", suffix: "", label: "Standard" },
  { key: "mark", suffix: "-mark", label: "Mark" },
  { key: "flat", suffix: "-flat", label: "Flat (white-fill)" },
];

const LOGO_BACKGROUNDS = [
  { key: "white", label: "Light" },
  { key: "black", label: "Dark" },
  { key: "migrate", label: "Gradient" },
] as const;

type LogoBg = (typeof LOGO_BACKGROUNDS)[number]["key"];

type OpticalSize = "sm" | "md" | "lg";

type LogoPlatform = {
  slug: string;
  name: string;
  variants: LogoVariantKey[];
  opticalSize?: OpticalSize;
};

const LOGO_PLATFORMS: LogoPlatform[] = [
  { slug: "bold", name: "Bold", variants: ["default", "mark", "flat"], opticalSize: "sm" },
  { slug: "kajabi", name: "Kajabi", variants: ["default", "mark", "flat"], opticalSize: "lg" },
  { slug: "circle", name: "Circle", variants: ["default", "mark", "flat"], opticalSize: "md" },
  { slug: "teachable", name: "Teachable", variants: ["default", "flat"], opticalSize: "md" },
  { slug: "thinkific", name: "Thinkific", variants: ["default", "mark", "flat"], opticalSize: "sm" },
  { slug: "skool", name: "Skool", variants: ["default", "flat"], opticalSize: "md" },
  { slug: "vimeo", name: "Vimeo", variants: ["default", "mark", "flat"], opticalSize: "lg" },
  { slug: "youtube", name: "YouTube", variants: ["default", "mark", "flat"], opticalSize: "md" },
];

const FLAT_PLATFORMS = LOGO_PLATFORMS.filter((p) => p.variants.includes("flat"));

type Mode = "same-height" | "same-width" | "optical";

const LAYOUT_MODES: { key: Mode; label: string }[] = [
  { key: "same-height", label: "Same height" },
  { key: "same-width", label: "Same width" },
  { key: "optical", label: "Optical" },
];

function flatSrc(slug: string, bg: LogoBg): string {
  return `/images/logos/platforms/${slug}-flat-${bg === "white" ? "000" : "FFF"}.svg`;
}

function LogoBand({
  layout,
  mode,
  bg,
}: {
  layout: "cloud" | "strip";
  mode: Mode;
  bg: LogoBg;
}) {
  const wrapperCls =
    layout === "cloud"
      ? `sg-logo-cloud sg-cloud-${mode} sg-bg-${bg}`
      : `sg-logo-strip sg-strip-${mode} sg-bg-${bg}`;

  const slotCls =
    mode === "same-width"
      ? "sg-logo-bounds sg-optical-slot"
      : layout === "cloud"
        ? "sg-logo-bounds sg-cloud-bounds"
        : "sg-logo-bounds sg-strip-bounds";

  return (
    <div className={wrapperCls}>
      {FLAT_PLATFORMS.map((platform) => {
        const style: CSSProperties =
          mode === "optical"
            ? ({
                "--optical-scale": `var(--logo-scale-${platform.opticalSize ?? "md"})`,
              } as CSSProperties)
            : {};
        return (
          <span className={slotCls} key={platform.slug} style={style}>
            <img
              alt={`${platform.name} flat`}
              src={flatSrc(platform.slug, bg)}
            />
          </span>
        );
      })}
    </div>
  );
}

function OpticalNote({ layout }: { layout: "cloud" | "strip" }) {
  const grouped = {
    sm: FLAT_PLATFORMS.filter((p) => p.opticalSize === "sm").map((p) => p.name),
    md: FLAT_PLATFORMS.filter((p) => (p.opticalSize ?? "md") === "md").map(
      (p) => p.name,
    ),
    lg: FLAT_PLATFORMS.filter((p) => p.opticalSize === "lg").map((p) => p.name),
  };
  return (
    <aside className="sg-logo-note">
      <h4 className="sg-logo-note-title">Optical pass — what&apos;s happening</h4>
      <p>
        <strong>Three buckets, no bespoke values.</strong> Each platform picks
        one of <code>sm</code> (×0.85), <code>md</code> (×1.00), or{" "}
        <code>lg</code> (×1.15). The bucket multiplies a baseline height —
        56px in cloud, 30px in strip (smaller than the 36px same-height
        baseline so the row fits without overflow). Tokens live as{" "}
        <code>--logo-scale-*</code> on <code>.styleguide</code> in{" "}
        <code>app/styleguide/styleguide.css</code>; per-platform assignments
        live as <code>opticalSize</code> in{" "}
        <code>app/styleguide/logos/logo-guide-client.tsx</code>.
      </p>
      <p>
        <strong>Current assignments:</strong> <code>sm</code>{" "}
        {grouped.sm.join(", ") || "—"}; <code>md</code>{" "}
        {grouped.md.join(", ") || "—"}; <code>lg</code>{" "}
        {grouped.lg.join(", ") || "—"}.
      </p>
      {layout === "strip" ? (
        <p>
          <strong>Even spacing.</strong> Optical strip cells size to each
          logo&apos;s rendered width (<code>flex: 0 0 auto</code>) and the row
          uses <code>justify-content: space-between</code>, so the visual gap
          between every pair is identical regardless of glyph silhouette.
          Same-height + same-width strips still use equal-flex slots for
          comparison.
        </p>
      ) : null}
      <p>
        <strong>Where it ships.</strong> Tokens (<code>--logo-scale-*</code>)
        live on <code>.landing-v10</code> in{" "}
        <code>components/landing-v10.css</code> — site-wide. The{" "}
        <strong>migration band on /vs-* pages</strong> reads{" "}
        <code>opticalSize</code> from <code>lib/platforms.ts</code> (production
        truth: skool/vimeo/youtube = sm, others = md). The assignments here
        are an independent sandbox for testing different combinations without
        affecting production.
      </p>
    </aside>
  );
}

export function LogoGuideClient() {
  const [bg, setBg] = useState<LogoBg>("white");

  return (
    <main className="landing-v10 styleguide">
      <div className="sg-toc">
        <div className="sg-toc-inner">
          <strong>Bold logo guide</strong>
          <a href="/styleguide">← Styleguide</a>
          <a href="#variants">Variants</a>
          <a href="#cloud">Cloud</a>
          <a href="#strip">Strip</a>
          <div className="sg-scheme-switch" role="tablist" aria-label="Color scheme">
            {LOGO_BACKGROUNDS.map((option) => (
              <button
                key={option.key}
                type="button"
                role="tab"
                aria-selected={bg === option.key}
                className="sg-scheme-btn"
                data-active={bg === option.key || undefined}
                onClick={() => setBg(option.key)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sg-container">
        <div className="sg-note">
          <strong>Internal-only.</strong> 404s in production. The asset reference
          for every platform Bold migrates from. Companion to{" "}
          <code>/styleguide</code>. Files live in{" "}
          <code>public/images/logos/platforms/</code>; the registry is{" "}
          <code>lib/platforms.ts</code>. Use the scheme switcher in the top bar
          to swap every preview between white, black, and gradient backgrounds.
        </div>

        <section className="sg-section" id="variants">
          <div className="sg-section-head">
            <span className="sg-num">01</span>
            <h2>Variants</h2>
            <p>
              Standard, mark, and flat for each platform on the active scheme.
              The dashed guide hugs the SVG&apos;s outer bounding box — useful
              for spotting built-in padding when arranging strips, decks, or
              face-offs.
            </p>
          </div>

          {LOGO_PLATFORMS.map((platform) => (
            <div className="sg-logo-block" key={platform.slug}>
              <h3 className="sg-h3">{platform.name}</h3>
              <div className="sg-logo-grid">
                {LOGO_VARIANTS.map((variant) => {
                  const has = platform.variants.includes(variant.key);
                  const filename = has
                    ? variant.key === "flat"
                      ? `${platform.slug}-flat-${bg === "white" ? "000" : "FFF"}.svg`
                      : `${platform.slug}${variant.suffix}.svg`
                    : null;
                  const src = filename
                    ? `/images/logos/platforms/${filename}`
                    : null;
                  return (
                    <figure
                      className={`sg-logo-tile sg-bg-${bg} sg-variant-${variant.key}`}
                      key={variant.key}
                    >
                      {src ? (
                        <span className="sg-logo-bounds">
                          <img
                            alt={`${platform.name} ${variant.label}`}
                            src={src}
                          />
                        </span>
                      ) : (
                        <span className="sg-logo-empty">
                          no {variant.label.toLowerCase()}
                        </span>
                      )}
                      <figcaption>
                        <span className="sg-logo-cap-name">
                          {filename ?? `${platform.slug}${variant.suffix}.svg`}
                          {src && filename ? (
                            <CopySvgButton filename={filename} src={src} />
                          ) : null}
                        </span>
                        <span className="sg-logo-cap-bg">{variant.label}</span>
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section className="sg-section" id="cloud">
          <div className="sg-section-head">
            <span className="sg-num">02</span>
            <h2>Logo cloud</h2>
            <p>
              Three takes on a wrap-friendly band: every logo at the same
              height, every logo at the same width, and an optical pass that
              tunes per-logo scale around the same-height baseline.
            </p>
          </div>

          {LAYOUT_MODES.map((mode, mi) => (
            <Fragment key={`cloud-${mode.key}`}>
              <h3
                className="sg-h3 sg-logo-subhead"
                style={mi === 0 ? undefined : { marginTop: 28 }}
              >
                {mode.label}
              </h3>
              <LogoBand layout="cloud" mode={mode.key} bg={bg} />
            </Fragment>
          ))}
          <OpticalNote layout="cloud" />
        </section>

        <section className="sg-section" id="strip">
          <div className="sg-section-head">
            <span className="sg-num">03</span>
            <h2>Logo strip</h2>
            <p>
              Same three takes, single line, no wrap, no overflow. Use the
              compact form on /vs-* migration bands. Optical applies the same
              per-logo scale you see in the cloud.
            </p>
          </div>

          {LAYOUT_MODES.map((mode, mi) => (
            <Fragment key={`strip-${mode.key}`}>
              <h3
                className="sg-h3 sg-logo-subhead"
                style={mi === 0 ? undefined : { marginTop: 28 }}
              >
                {mode.label}
              </h3>
              <LogoBand layout="strip" mode={mode.key} bg={bg} />
            </Fragment>
          ))}
          <OpticalNote layout="strip" />
        </section>
      </div>
    </main>
  );
}
