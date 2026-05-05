import { notFound } from "next/navigation";
import { CtaGlow } from "@/components/cta-glow";
import "@/components/landing-v10.css";
import "./styleguide.css";

export const metadata = {
  title: "Styleguide — internal",
  robots: { index: false, follow: false },
};

type Token = {
  name: string;
  value: string;
  src: string;
  alias?: string;
};

/*
 * Single source of truth: components/landing-v10.css.
 * The --color-* names in app/globals.css alias these v10 values 1:1
 * so older Tailwind-utility usages (comparison-page, mobile-dock, .prose)
 * still resolve to v10 values.
 */
const tokensSurface: Token[] = [
  { name: "--bg", value: "#fdfcfa", src: "landing-v10.css:9", alias: "--color-cream" },
  { name: "--bg-dark", value: "#0b0b0b", src: "landing-v10.css:10", alias: "--color-forest" },
  { name: "--bg-muted", value: "#f3f2ee", src: "landing-v10.css:11" },
  { name: "(white)", value: "#ffffff", src: "—", alias: "--color-surface" },
];

const tokensInk: Token[] = [
  { name: "--text", value: "#111111", src: "landing-v10.css:13", alias: "--color-ink" },
  { name: "--text-mid", value: "#555555", src: "landing-v10.css:14", alias: "--color-copy" },
  { name: "--text-dim", value: "#999999", src: "landing-v10.css:15", alias: "--color-muted" },
];

const tokensMint: Token[] = [
  { name: "--mint", value: "#41c6a6", src: "landing-v10.css:16", alias: "--color-signal" },
  { name: "--mint-text", value: "#1a7f63", src: "landing-v10.css:17", alias: "--color-signal-ink" },
  { name: "--mint-dark", value: "#14705a", src: "landing-v10.css:18", alias: "--color-signal-strong" },
  { name: "--mint-fill", value: "rgba(65,198,166,0.12)", src: "landing-v10.css:20", alias: "--color-signal-soft" },
];

const tokensSupport: Token[] = [
  { name: "--blue", value: "#0052e0", src: "landing-v10.css:21" },
  { name: "--warm", value: "#8b7340", src: "landing-v10.css:23" },
  { name: "--hrtu-brown", value: "#2c1f14", src: "landing-v10.css:25" },
  { name: "--hrtu-gold", value: "#c8a96e", src: "landing-v10.css:26" },
];

const tokensBorder: Token[] = [
  { name: "--border", value: "rgba(0,0,0,0.07)", src: "landing-v10.css:27", alias: "--color-line" },
  { name: "--border-strong", value: "rgba(0,0,0,0.13)", src: "landing-v10.css:28", alias: "--color-line-strong" },
  { name: "(focus ring)", value: "rgba(65,198,166,0.5)", src: "globals.css:--color-ring", alias: "--color-ring" },
];

const arrowSvg = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
    <path
      d="M3 7H11M11 7L7 3M11 7L7 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function SwatchGrid({ tokens }: { tokens: Token[] }) {
  return (
    <div className="sg-swatch-grid">
      {tokens.map((t) => (
        <div className="sg-swatch" key={t.name + t.value}>
          <div className="sg-swatch-color" style={{ background: t.value }}>
            {t.value}
          </div>
          <div className="sg-swatch-meta">
            <span className="name">{t.name}</span>
            <span className="val">{t.value}</span>
            <span className="src">{t.src}</span>
            {t.alias ? (
              <span className="src" style={{ color: "#16855f" }}>
                aliased: {t.alias}
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function StyleguidePage() {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <main className="landing-v10 styleguide">
      <div className="sg-toc">
        <div className="sg-toc-inner">
          <strong>Bold Styleguide</strong>
          <a href="#punch">Punch list</a>
          <a href="#tokens">Tokens</a>
          <a href="#typography">Type</a>
          <a href="#buttons">Buttons</a>
          <a href="#chips">Eyebrows</a>
          <a href="#cards">Cards</a>
          <a href="#mark">Mark</a>
          <a href="#patterns">Patterns</a>
          <a href="#chrome">Chrome</a>
        </div>
      </div>

      <div className="sg-container">
        <div className="sg-note">
          <strong>Internal-only.</strong> 404s in production. Renders real components — what
          you see ships. As of 2026-05-05 the site runs on a <strong>single token system</strong>:{" "}
          <code style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12 }}>
            components/landing-v10.css
          </code>{" "}
          is the source of truth. The <code>--color-*</code> names in{" "}
          <code>app/globals.css</code> alias the v10 values 1:1 so the existing
          comparison-page / mobile-dock / .prose call sites still work. The
          old cream/ink palette and heavy shadow tokens are gone.
        </div>

        {/* PUNCH LIST */}
        <section className="sg-section" id="punch">
          <div className="sg-section-head">
            <span className="sg-num">00</span>
            <h2>Punch list — what's left</h2>
            <p>Resolved items from the 2026-05-01 audit are struck through.</p>
          </div>
          <ul className="sg-punch">
            <li style={{ opacity: 0.5, textDecoration: "line-through" }}>
              Two parallel token systems — unified 2026-05-05.
            </li>
            <li style={{ opacity: 0.5, textDecoration: "line-through" }}>
              Focus ring color drift — unified to mint.
            </li>
            <li style={{ opacity: 0.5, textDecoration: "line-through" }}>
              Comparison-page <code>rounded-[1.6/2/2.25/2.5rem]</code> — now 16/24.
            </li>
            <li style={{ opacity: 0.5, textDecoration: "line-through" }}>
              Comparison-page bespoke 5.6rem hero — now matches v10 hero scale.
            </li>
            <li style={{ opacity: 0.5, textDecoration: "line-through" }}>
              <code>shadow-soft / shadow-panel / shadow-chip / shadow-button*</code>{" "}
              — deleted (Marcel: too heavy).
            </li>
            <li style={{ opacity: 0.5, textDecoration: "line-through" }}>
              <code>site-shell.tsx</code>, <code>site-logo.tsx</code>,{" "}
              <code>announcement-ticker.tsx</code> — deleted as dead code.
            </li>
            <li style={{ opacity: 0.5, textDecoration: "line-through" }}>
              <code>.prose mark</code> / hero <code>em</code> / blog{" "}
              <code>&lt;mark&gt;</code> alpha drift — canonical 0.18.
            </li>
            <li>
              <code>.btn-ghost</code> defined twice (
              <code>landing-v10.css:227</code> +{" "}
              <code>product.css:498</code>) — pick one.
            </li>
            <li>
              <code>.btn-mint</code> vs <code>.btn-primary</code> — same role,
              different padding/hover. Consolidate.
            </li>
            <li>
              5 dark hex values still in code (#0a0a0a / #0b0b0b / #0d1511 /
              #131313 / #151515). Should all be <code>--bg-dark</code>.
            </li>
            <li>9 container widths in use — pick 1120 or 1200, plus a narrow.</li>
            <li>
              <code>--mint-fill</code> 0.12 (chips/pills) vs canonical{" "}
              <code>mark</code> 0.18 — keep both, document the split.
            </li>
            <li>The 14×14 arrow SVG is copy-pasted in 6+ files — extract.</li>
            <li>
              <code>ANNOUNCEMENT_MESSAGES</code> defined twice (home +
              migration) — move to <code>lib/site-content.ts</code>.
            </li>
            <li>
              17 distinct card styles, 8+ button styles, 9 hero treatments —
              no shared primitives yet.
            </li>
            <li>
              6 different h3 size/weight combos on the same neutral background.
            </li>
            <li>
              <code>.ctag</code> tooltip text baked into CSS{" "}
              <code>::after</code> (uneditable from JSX).
            </li>
          </ul>
        </section>

        {/* TOKENS */}
        <section className="sg-section" id="tokens">
          <div className="sg-section-head">
            <span className="sg-num">01</span>
            <h2>Tokens — single canonical set</h2>
            <p>
              Each row shows the v10 source-of-truth name and the{" "}
              <code>--color-*</code> alias (in green) that resolves to the same
              value via <code>app/globals.css</code>.
            </p>
          </div>

          <h3 className="sg-h3">Surfaces & backgrounds</h3>
          <SwatchGrid tokens={tokensSurface} />

          <h3 className="sg-h3">Ink / text</h3>
          <SwatchGrid tokens={tokensInk} />

          <h3 className="sg-h3">Mint / signal</h3>
          <SwatchGrid tokens={tokensMint} />

          <h3 className="sg-h3">Supporting accents (blue, gold, warm)</h3>
          <SwatchGrid tokens={tokensSupport} />

          <h3 className="sg-h3">Borders & focus ring</h3>
          <SwatchGrid tokens={tokensBorder} />

          <div className="sg-note">
            <strong>Not tokenized yet:</strong> spacing, radius, grid gap, stack
            rhythm. Radius is enforced via two unification blocks (
            <code>landing-v10.css:1537-1611</code> +{" "}
            <code>product.css:1924-1980</code>) with literal pixel values
            (8/12/14/16/24/9999).
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="sg-section" id="typography">
          <div className="sg-section-head">
            <span className="sg-num">02</span>
            <h2>Typography</h2>
            <p>Each style rendered with its source spec.</p>
          </div>

          <h3 className="sg-h3">Display / hero</h3>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Hero h1</strong>
              clamp(2.4rem, 4.2vw, 3.4rem)
              <br />
              weight 800 · line 1.1
              <br />
              tracking -0.03em · color --text
              <br />
              landing-v10.css:176
            </div>
            <div className="sg-type-sample">
              <h1 style={{ margin: 0 }}>
                The video brain for coaching{" "}
                <span className="u">programs</span>.
              </h1>
            </div>
          </div>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Hero eyebrow</strong>
              mono 12px · color --text-mid
              <br />
              tracking 0.1em · uppercase
              <br />
              chip bg rgba(0,0,0,0.04) · pad 5/12
              <br />
              landing-v10.css:165
            </div>
            <div className="sg-type-sample">
              <span className="hero-eyebrow">Video intelligence platform</span>
            </div>
          </div>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Hero sub</strong>
              17px · color --text-mid
              <br />
              line 1.75 · max-w 440
              <br />
              landing-v10.css:190
            </div>
            <div className="sg-type-sample">
              <p className="hero-sub" style={{ margin: 0 }}>
                Turn your library into an AI coach that cites the moment that
                matters.
              </p>
            </div>
          </div>

          <h3 className="sg-h3">Section</h3>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Section title</strong>
              clamp(1.8rem, 3.2vw, 2.5rem)
              <br />
              weight 800 · line 1.15
              <br />
              tracking -0.025em
              <br />
              landing-v10.css:569
            </div>
            <div className="sg-type-sample">
              <h2 className="section-title" style={{ margin: 0 }}>
                Built for the way coaches teach.
              </h2>
            </div>
          </div>

          <h3 className="sg-h3">Mono / labels</h3>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>.sec-label</strong>
              mono 11px · color --text-dim
              <br />
              tracking 0.1em
              <br />
              landing-v10.css:561
            </div>
            <div className="sg-type-sample">
              <span className="sec-label">SECTION</span>
            </div>
          </div>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>.f-tag</strong>
              mono 10px · 3 colour variants
              <br />
              landing-v10.css:895
            </div>
            <div className="sg-type-sample" style={{ display: "flex", gap: 8 }}>
              <span className="f-tag ft1">For students</span>
              <span className="f-tag ft2">For coaches</span>
              <span className="f-tag ft3">For ops</span>
            </div>
          </div>

          <h3 className="sg-h3">Body</h3>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Body</strong>
              16px · color --text-mid
              <br />
              line 1.6
            </div>
            <div className="sg-type-sample">
              <p style={{ margin: 0, color: "var(--text-mid)" }}>
                Every lesson, searchable by concept. Students ask, Bold answers
                with cited timestamps from your actual videos.
              </p>
            </div>
          </div>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Blog prose body</strong>
              19px · color --color-copy (= --text-mid)
              <br />
              line 1.65
              <br />
              app/globals.css:111
            </div>
            <div className="sg-type-sample">
              <p
                style={{
                  margin: 0,
                  fontSize: "1.1875rem",
                  lineHeight: 1.65,
                  color: "var(--color-copy)",
                }}
              >
                Every lesson, searchable by concept. Students ask, Bold answers
                with cited timestamps from your actual videos.
              </p>
            </div>
          </div>
        </section>

        {/* BUTTONS */}
        <section className="sg-section" id="buttons">
          <div className="sg-section-head">
            <span className="sg-num">03</span>
            <h2>Buttons</h2>
            <p>
              Six implementations for what should be 2-3 variants.{" "}
              <code>.btn-mint</code> is canonical; <code>.btn-primary</code>{" "}
              (product.css) is a near-duplicate.
            </p>
          </div>

          <div className="sg-row">
            <span className="sg-row-label">Primary on light</span>
            <a className="btn-mint" href="#">
              Book a demo {arrowSvg}
            </a>
            <a className="nav-cta" href="#">
              Book a demo
            </a>
            <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: 11, color: "#999", marginLeft: "auto" }}>
              .btn-mint · .nav-cta
            </span>
          </div>

          <div className="sg-row dark">
            <span className="sg-row-label">On dark</span>
            <a className="btn-cta" href="#">
              See pricing {arrowSvg}
            </a>
            <a
              className="btn-gold"
              href="#"
              style={{ background: "#c8a96e", color: "#2c1f14" }}
            >
              Read the case study {arrowSvg}
            </a>
            <span
              style={{
                fontFamily: "var(--font-mono-stack)",
                fontSize: 11,
                color: "rgba(255,255,255,0.5)",
                marginLeft: "auto",
              }}
            >
              .btn-cta · .btn-gold
            </span>
          </div>

          <div className="sg-row">
            <span className="sg-row-label">Ghost (defined twice — last import wins)</span>
            <a className="btn-ghost" href="#">
              Watch the demo
            </a>
            <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: 11, color: "#999", marginLeft: "auto" }}>
              .btn-ghost · landing-v10.css:227 + product.css:498
            </span>
          </div>
        </section>

        {/* EYEBROWS / CHIPS */}
        <section className="sg-section" id="chips">
          <div className="sg-section-head">
            <span className="sg-num">04</span>
            <h2>Eyebrows, chips & labels</h2>
            <p>
              Comparison-page now uses <code>.hero-eyebrow</code> /{" "}
              <code>.sec-label</code> (no more 0.24em tracking variants).
            </p>
          </div>

          <div className="sg-row">
            <span className="sg-row-label">Canonical eyebrows & section labels</span>
            <span className="hero-eyebrow">Hero eyebrow</span>
            <span className="sec-label">SECTION LABEL</span>
            <span className="f-tag ft1">.f-tag ft1</span>
            <span className="f-tag ft2">.f-tag ft2</span>
            <span className="f-tag ft3">.f-tag ft3</span>
          </div>
        </section>

        {/* CARDS */}
        <section className="sg-section" id="cards">
          <div className="sg-section-head">
            <span className="sg-num">05</span>
            <h2>Cards & surfaces</h2>
            <p>
              Radii now standardised on 16/24px. Comparison-page no longer uses
              the 25.6/32/36/40px ad-hoc scale.
            </p>
          </div>

          <div className="sg-card-grid">
            <div className="sg-card-demo">
              <span className="sg-card-label">.sc-card · radius 16</span>
              <div
                className="sc-card"
                style={{ padding: "1.25rem", minHeight: 120 }}
              >
                <h4 style={{ margin: "0 0 6px" }}>Showcase card</h4>
                <p style={{ margin: 0, fontSize: 14, color: "var(--text-mid)" }}>
                  Used on home, blog, migrate, comparison.
                </p>
              </div>
            </div>

            <div className="sg-card-demo">
              <span className="sg-card-label">.f-card · radius 12</span>
              <div className="f-card" style={{ padding: "1.25rem", minHeight: 120 }}>
                <h3 style={{ margin: "0 0 6px" }}>Feature card</h3>
                <p style={{ margin: 0, fontSize: 14, color: "var(--text-mid)" }}>
                  Used in &quot;not for&quot; tile rows.
                </p>
              </div>
            </div>

            <div className="sg-card-demo">
              <span className="sg-card-label">.legal-card · radius 16</span>
              <div className="legal-card" style={{ padding: "1.25rem", minHeight: 120 }}>
                <p style={{ margin: 0, fontSize: 14, color: "var(--text-mid)" }}>
                  Article container — privacy, terms.
                </p>
              </div>
            </div>

            <div className="sg-card-demo">
              <span className="sg-card-label">comparison card · rounded-2xl (16px)</span>
              <div
                style={{
                  borderRadius: 16,
                  border: "1px solid var(--color-line)",
                  background: "white",
                  padding: "1.25rem",
                  minHeight: 120,
                }}
              >
                <p style={{ margin: 0, fontSize: 14, color: "var(--color-copy)" }}>
                  Now matches .sc-card. No shadow.
                </p>
              </div>
            </div>
          </div>

          <div className="sg-note">
            <strong>Pattern recommendation:</strong> a single{" "}
            <code>&lt;Card surface=&quot;white|muted|ink&quot; radius=&quot;md|lg&quot;&gt;</code>{" "}
            component would replace all bespoke variants. Standardise on radius
            16 (md) and 24 (lg) — the v10 unification block already enforces
            those.
          </div>
        </section>

        {/* MARK / HIGHLIGHT */}
        <section className="sg-section" id="mark">
          <div className="sg-section-head">
            <span className="sg-num">06</span>
            <h2>Mint highlight (mark)</h2>
            <p>
              Canonical alpha is <strong>0.18</strong> (blog/hero text
              highlights). The 0.12 alpha is reserved for{" "}
              <code>--mint-fill</code> on chips/pills (different visual role).
            </p>
          </div>

          <div className="sg-mark-row">
            <span className="a">α 0.18 — text mark</span>
            <span>
              The video brain that{" "}
              <mark>works while you sleep</mark>.
            </span>
          </div>
          <div className="sg-mark-row">
            <span className="a">α 0.12 — pill fill</span>
            <span style={{ fontSize: 14 }}>
              <span className="ctag">--mint-fill on .ctag</span>
            </span>
          </div>
        </section>

        {/* PATTERNS */}
        <section className="sg-section" id="patterns">
          <div className="sg-section-head">
            <span className="sg-num">07</span>
            <h2>Patterns</h2>
            <p>
              Composite patterns: arrow icon, glow, comparison row, FAQ
              disclosure, mono number.
            </p>
          </div>

          <h3 className="sg-h3">Arrow icon (copy-pasted in 6+ files)</h3>
          <div className="sg-icon-grid">
            <div>{arrowSvg}</div>
            <div>{arrowSvg}</div>
            <div>{arrowSvg}</div>
            <div>{arrowSvg}</div>
            <div>{arrowSvg}</div>
            <div>{arrowSvg}</div>
          </div>

          <h3 className="sg-h3">CTA WebGL shader (cta-glow.tsx)</h3>
          <div
            style={{
              position: "relative",
              height: 220,
              borderRadius: 16,
              overflow: "hidden",
              background: "#0a0a0a",
              marginBottom: 12,
            }}
          >
            <CtaGlow
              className="pointer-events-none absolute inset-0 h-full w-full"
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.85)",
                fontSize: 14,
                fontFamily: "var(--font-mono-stack)",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              cta-glow · WebGL fragment shader
            </div>
          </div>

          <h3 className="sg-h3">Glow blob (5 inconsistent implementations)</h3>
          <div
            style={{
              position: "relative",
              height: 200,
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 12,
              overflow: "hidden",
              background: "#fdfcfa",
              marginBottom: 12,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -40,
                left: "50%",
                transform: "translateX(-50%)",
                width: 480,
                height: 240,
                background: "var(--mint)",
                opacity: 0.18,
                filter: "blur(120px)",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono-stack)",
                fontSize: 12,
                color: "var(--text-mid)",
              }}
            >
              .hero-glow
            </div>
          </div>

          <h3 className="sg-h3">Comparison row (faux-border grid)</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr) minmax(0,1.2fr)",
              gap: 1,
              background: "var(--color-line)",
              border: "1px solid var(--color-line)",
              borderRadius: 12,
              overflow: "hidden",
              fontSize: 14,
              marginBottom: 12,
            }}
          >
            <div style={{ background: "#fff", padding: "12px 16px", fontWeight: 600 }}>
              AI Q&amp;A
            </div>
            <div style={{ background: "#fff", padding: "12px 16px", color: "var(--color-copy)" }}>
              Search by transcript text only.
            </div>
            <div style={{ background: "#fff", padding: "12px 16px", color: "var(--color-copy)" }}>
              Concept search with cited timestamps.
            </div>
            <div style={{ background: "#fff", padding: "12px 16px", fontWeight: 600 }}>
              Migration
            </div>
            <div style={{ background: "#fff", padding: "12px 16px", color: "var(--color-copy)" }}>
              DIY export.
            </div>
            <div style={{ background: "#fff", padding: "12px 16px", color: "var(--color-copy)" }}>
              We handle the move.
            </div>
          </div>

          <h3 className="sg-h3">FAQ disclosure (.faq-row)</h3>
          <details
            className="faq-row"
            style={{ marginBottom: 8 }}
          >
            <summary>How long does migration take?</summary>
            <p style={{ margin: "12px 0 0", color: "var(--text-mid)" }}>
              Most coaching libraries are live in under a week.
            </p>
          </details>
          <details className="faq-row">
            <summary>Do you support our existing video URLs?</summary>
            <p style={{ margin: "12px 0 0", color: "var(--text-mid)" }}>
              Yes — we redirect old paths so embeds never break.
            </p>
          </details>

          <h3 className="sg-h3">Mono number (5 flavours in the wild)</h3>
          <div className="sg-row">
            <div style={{ fontFamily: "var(--font-mono-stack)", fontSize: "2.4rem", fontWeight: 500, color: "var(--mint)" }}>
              01
            </div>
            <div style={{ fontFamily: "var(--font-mono-stack)", fontSize: "3.5rem", fontWeight: 500, color: "var(--text-dim)" }}>
              02
            </div>
            <div style={{ fontFamily: "var(--font-mono-stack)", fontSize: "clamp(3rem, 4vw, 4.5rem)", fontWeight: 400, color: "var(--text)" }}>
              03
            </div>
          </div>
        </section>

        {/* CHROME */}
        <section className="sg-section" id="chrome">
          <div className="sg-section-head">
            <span className="sg-num">08</span>
            <h2>Site chrome</h2>
            <p>
              Nav, announcement, footer. Rendered statically here (the real ones
              are <code>position: fixed</code>).
            </p>
          </div>

          <h3 className="sg-h3">Announcement bar</h3>
          <div
            style={{
              background: "var(--bg-dark)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 14,
              padding: "12px 32px",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <strong style={{ color: "white", fontWeight: 600 }}>
              Switching from Kajabi?
            </strong>
            <span style={{ opacity: 0.4 }}>·</span>
            <a
              href="#"
              style={{
                color: "var(--mint)",
                fontWeight: 500,
                textDecoration: "underline",
                textUnderlineOffset: 2,
              }}
            >
              See how to migrate →
            </a>
          </div>

          <h3 className="sg-h3">Logo wordmark</h3>
          <div className="sg-row">
            <span className="sg-row-label">v10 nav (mint)</span>
            <svg width="94" height="26" viewBox="0 0 2446 670" fill="none">
              <path d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z" fill="var(--mint)" />
              <path d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z" fill="var(--mint)" />
              <path d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z" fill="var(--mint)" />
              <path d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z" fill="var(--mint)" />
            </svg>
          </div>
          <div className="sg-row dark">
            <span className="sg-row-label">v10 footer (white)</span>
            <svg width="100" height="28" viewBox="0 0 2446 670" fill="none">
              <path d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z" fill="white" />
              <path d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z" fill="white" />
              <path d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z" fill="white" />
              <path d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z" fill="white" />
            </svg>
          </div>

          <h3 className="sg-h3">Footer</h3>
          <p
            style={{
              fontSize: 13,
              color: "#777",
              margin: 0,
            }}
          >
            <code>SiteNavFooter</code> from{" "}
            <code>components/site-nav.tsx</code> renders at the bottom of every
            page, including this one. Scroll to the end to see it.
          </p>
        </section>
      </div>

      {/* Render the actual footer once at the end */}
      <FooterPreview />
    </main>
  );
}

function FooterPreview() {
  return (
    <footer style={{ marginTop: "4rem" }}>
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <svg width="100" height="28" viewBox="0 0 2446 670" fill="none">
                <path d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z" fill="white" />
                <path d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z" fill="white" />
                <path d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z" fill="white" />
                <path d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z" fill="white" />
              </svg>
            </div>
            <p style={{ maxWidth: 360, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
              Internal styleguide preview. The real footer renders the navLinks
              + footerColumns from <code>lib/site-content</code>.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <a href="#">Overview</a>
            <a href="#">Pricing</a>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <a href="#">Docs</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bot">
          <span>© Bold Video</span>
          <span>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
