import { notFound } from "next/navigation";
import { CtaGlow } from "@/components/cta-glow";
import "@/components/landing-v10.css";
import "./styleguide.css";

export const metadata = {
  title: "Styleguide — internal",
  robots: { index: false, follow: false },
};

type Token = { name: string; value: string; src: string; preview?: string };

const tokensSurfaceA: Token[] = [
  { name: "--bg", value: "#fdfcfa", src: "landing-v10.css:9" },
  { name: "--bg-dark", value: "#0b0b0b", src: "landing-v10.css:10" },
  { name: "--bg-muted", value: "#f3f2ee", src: "landing-v10.css:11" },
];
const tokensSurfaceB: Token[] = [
  { name: "--color-cream", value: "#fdfaf3", src: "globals.css:11" },
  { name: "--color-surface", value: "#ffffff", src: "globals.css:12" },
  { name: "--color-surface-muted", value: "#f4eee3", src: "globals.css:13" },
  { name: "--color-forest", value: "#0d1511", src: "globals.css:28" },
  { name: "--color-earth-deep", value: "#2c1f14", src: "globals.css:27" },
];
const tokensInkA: Token[] = [
  { name: "--text", value: "#111111", src: "landing-v10.css:13" },
  { name: "--text-mid", value: "#555555", src: "landing-v10.css:14" },
  { name: "--text-dim", value: "#999999", src: "landing-v10.css:15" },
];
const tokensInkB: Token[] = [
  { name: "--color-ink", value: "#151515", src: "globals.css:14" },
  { name: "--color-copy", value: "#5f564d", src: "globals.css:15" },
  { name: "--color-muted", value: "#93887c", src: "globals.css:16" },
];
const tokensMintA: Token[] = [
  { name: "--mint", value: "#41c6a6", src: "landing-v10.css:16" },
  { name: "--mint-text", value: "#1a7f63", src: "landing-v10.css:17" },
  { name: "--mint-dark", value: "#14705a", src: "landing-v10.css:18" },
];
const tokensMintB: Token[] = [
  { name: "--color-signal", value: "#43c6a6", src: "globals.css:19" },
  { name: "--color-signal-strong", value: "#2db694", src: "globals.css:20" },
  { name: "--color-signal-ink", value: "#187963", src: "globals.css:21" },
];
const tokensSupportA: Token[] = [
  { name: "--blue", value: "#0052e0", src: "landing-v10.css:21" },
  { name: "--warm", value: "#8b7340", src: "landing-v10.css:23" },
  { name: "--hrtu-brown", value: "#2c1f14", src: "landing-v10.css:25" },
  { name: "--hrtu-gold", value: "#c8a96e", src: "landing-v10.css:26" },
];
const tokensSupportB: Token[] = [
  { name: "--color-ocean", value: "#145cff", src: "globals.css:23" },
  { name: "--color-earth", value: "#d1b27a", src: "globals.css:25" },
];
const tokensBorderA: Token[] = [
  { name: "--border", value: "rgba(0,0,0,0.07)", src: "landing-v10.css:27" },
  { name: "--border-strong", value: "rgba(0,0,0,0.13)", src: "landing-v10.css:28" },
];
const tokensBorderB: Token[] = [
  { name: "--color-line", value: "rgba(19,15,11,0.08)", src: "globals.css:17" },
  { name: "--color-line-strong", value: "rgba(19,15,11,0.14)", src: "globals.css:18" },
  { name: "--color-ring", value: "rgba(20,92,255,0.34)", src: "globals.css:29" },
];

const driftPairs: Array<{
  label: string;
  a: { name: string; val: string };
  b: { name: string; val: string };
  diff: string;
}> = [
  {
    label: "Mint (primary brand accent)",
    a: { name: "--mint", val: "#41c6a6" },
    b: { name: "--color-signal", val: "#43c6a6" },
    diff: "RGB different by ~2; visually identical, token-different.",
  },
  {
    label: "Mint dark / strong",
    a: { name: "--mint-dark", val: "#14705a" },
    b: { name: "--color-signal-strong", val: "#2db694" },
    diff: "Substantially different — A is far darker.",
  },
  {
    label: "Page background (light)",
    a: { name: "--bg", val: "#fdfcfa" },
    b: { name: "--color-cream", val: "#fdfaf3" },
    diff: "B is warmer/more saturated.",
  },
  {
    label: "Dark background",
    a: { name: "--bg-dark", val: "#0b0b0b" },
    b: { name: "--color-forest", val: "#0d1511" },
    diff: "B has green tint; A is neutral black.",
  },
  {
    label: "Primary text",
    a: { name: "--text", val: "#111111" },
    b: { name: "--color-ink", val: "#151515" },
    diff: "Close, not equal.",
  },
  {
    label: "Mid text",
    a: { name: "--text-mid", val: "#555555" },
    b: { name: "--color-copy", val: "#5f564d" },
    diff: "B is warm-brown, A is neutral grey.",
  },
  {
    label: "Border (subtle)",
    a: { name: "--border", val: "rgba(0,0,0,0.07)" },
    b: { name: "--color-line", val: "rgba(19,15,11,0.08)" },
    diff: "B is tinted toward warm-black; A is pure black.",
  },
  {
    label: "Earth / gold accent",
    a: { name: "--hrtu-gold", val: "#c8a96e" },
    b: { name: "--color-earth", val: "#d1b27a" },
    diff: "Two different golds for the same conceptual role.",
  },
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
        <div className="sg-swatch" key={t.name}>
          <div
            className="sg-swatch-color"
            style={{ background: t.value }}
          >
            {t.value}
          </div>
          <div className="sg-swatch-meta">
            <span className="name">{t.name}</span>
            <span className="val">{t.value}</span>
            <span className="src">{t.src}</span>
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
          <strong>Internal-only.</strong> This page 404s in production. It renders real
          components — what you see is what ships. Two design-token systems coexist
          right now (System A "v10" and System B "cream/ink"); both are shown so drift
          is visible. See{" "}
          <code style={{ fontFamily: "var(--font-mono-stack)", fontSize: 12 }}>
            .claude/design-audit.md
          </code>{" "}
          for the full written audit.
        </div>

        {/* PUNCH LIST */}
        <section className="sg-section" id="punch">
          <div className="sg-section-head">
            <span className="sg-num">00</span>
            <h2>Punch list — known inconsistencies</h2>
            <p>
              Things to reconcile before/while extending the system. Top of the
              page so you can decide priorities at a glance.
            </p>
          </div>
          <ul className="sg-punch">
            <li>
              Two parallel token systems — see <a href="#tokens">Tokens §</a>{" "}
              for the side-by-side drift.
            </li>
            <li>
              <code>.btn-ghost</code> defined twice (
              <code>landing-v10.css:227</code> + <code>product.css:498</code>).
            </li>
            <li>
              <code>.btn-mint</code> and <code>.btn-primary</code> are the same
              role with different padding/hover.
            </li>
            <li>
              5 different "dark" hex values for backgrounds (#0a0a0a / #0b0b0b /
              #0d1511 / #131313 / #151515).
            </li>
            <li>
              9 container widths in use (1120 / 1200 / 980 / 1000 / 820 / 720 /
              680 / 38rem).
            </li>
            <li>
              <code>&lt;mark&gt;</code> highlight alpha drifts: 0.12 / 0.18 / 0.22.
            </li>
            <li>
              The 14×14 arrow SVG is copy-pasted in 6+ files.
            </li>
            <li>
              <code>ANNOUNCEMENT_MESSAGES</code> defined twice (home + migration).
            </li>
            <li>
              <code>components/site-shell.tsx</code> +{" "}
              <code>announcement-ticker.tsx</code> are orphaned (dead code).
            </li>
            <li>
              17 distinct card styles, 8+ button styles, 9 hero treatments — no
              shared primitives yet.
            </li>
            <li>
              6 different h3 size/weight combos on the same neutral background.
            </li>
            <li>
              Comparison page uses <code>rounded-[1.6/2/2.25/2.5rem]</code>{" "}
              inline; v10 cards use 16/24px.
            </li>
            <li>
              Focus ring color differs: v10 uses <code>--mint</code>, cream/ink
              uses <code>--color-ring</code> (blue).
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
            <h2>Tokens</h2>
            <p>
              Side-by-side: System A ("v10", scoped to <code>.landing-v10</code>)
              vs System B (cream/ink, on <code>:root</code>).
            </p>
          </div>

          <h3 className="sg-h3">Drift — same role, different value</h3>
          {driftPairs.map((p) => (
            <div className="sg-pair" key={p.label}>
              <div>
                <span className="sg-pair-label">A · v10</span>
                <div className="sw" style={{ background: p.a.val }} />
                <span className="v">
                  {p.a.name} → {p.a.val}
                </span>
              </div>
              <div>
                <span className="sg-pair-label">B · cream/ink</span>
                <div className="sw" style={{ background: p.b.val }} />
                <span className="v">
                  {p.b.name} → {p.b.val}
                </span>
              </div>
              <div className="sg-pair-diff">
                <strong>{p.label}</strong> — {p.diff}
              </div>
            </div>
          ))}

          <h3 className="sg-h3">Surfaces & backgrounds</h3>
          <SwatchGrid tokens={[...tokensSurfaceA, ...tokensSurfaceB]} />

          <h3 className="sg-h3">Ink / text</h3>
          <SwatchGrid tokens={[...tokensInkA, ...tokensInkB]} />

          <h3 className="sg-h3">Mint / signal</h3>
          <SwatchGrid tokens={[...tokensMintA, ...tokensMintB]} />

          <h3 className="sg-h3">Supporting accents (blue, gold, warm)</h3>
          <SwatchGrid tokens={[...tokensSupportA, ...tokensSupportB]} />

          <h3 className="sg-h3">Borders, lines, focus rings</h3>
          <SwatchGrid tokens={[...tokensBorderA, ...tokensBorderB]} />

          <div className="sg-note">
            <strong>Not tokenized yet:</strong> spacing, radius, grid gap, stack
            rhythm. Radius is enforced via two giant unification blocks (
            <code>landing-v10.css:1537-1611</code> +{" "}
            <code>product.css:1924-1980</code>) with literal pixel values.
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="sg-section" id="typography">
          <div className="sg-section-head">
            <span className="sg-num">02</span>
            <h2>Typography</h2>
            <p>
              Each style rendered with its source spec. Both H1 conventions
              shown so the v10/cream-ink heading drift is visible.
            </p>
          </div>

          <h3 className="sg-h3">Display / hero</h3>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Hero h1 — System A (v10)</strong>
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
              <strong>Hero h1 — System B (comparison)</strong>
              clamp(3rem, 6vw, 5.6rem)
              <br />
              weight 600 · line 0.9
              <br />
              tracking -0.06em · color --color-ink
              <br />
              comparison-page.tsx:95
            </div>
            <div className="sg-type-sample">
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(3rem, 6vw, 5.6rem)",
                  fontWeight: 600,
                  lineHeight: 0.9,
                  letterSpacing: "-0.06em",
                  color: "var(--color-ink)",
                }}
              >
                The video brain for coaching programs.
              </h1>
            </div>
          </div>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Hero eyebrow — System A</strong>
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
              <strong>Hero eyebrow — System B</strong>
              mono 0.75rem · tracking 0.24em
              <br />
              uppercase · color --color-signal-ink
              <br />
              no chip background
              <br />
              comparison-page.tsx:92
            </div>
            <div className="sg-type-sample">
              <span
                style={{
                  fontFamily: "var(--font-mono-stack)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "var(--color-signal-ink)",
                  fontWeight: 500,
                }}
              >
                Bold vs Kajabi
              </span>
            </div>
          </div>

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Hero sub — System A</strong>
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
              <strong>Section title — A</strong>
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

          <div className="sg-type">
            <div className="sg-type-spec">
              <strong>Section title — B</strong>
              clamp(2rem, 4vw, 3.6rem)
              <br />
              weight 600 · line 0.95
              <br />
              tracking -0.05em
              <br />
              comparison-page.tsx:120
            </div>
            <div className="sg-type-sample">
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(2rem, 4vw, 3.6rem)",
                  fontWeight: 600,
                  lineHeight: 0.95,
                  letterSpacing: "-0.05em",
                  color: "var(--color-ink)",
                }}
              >
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
              <strong>Body — A</strong>
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
              <strong>Body — B (prose)</strong>
              19px · color --color-copy
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
              Eight implementations for what should be 2-3 variants. Hover each
              to see motion drift.
            </p>
          </div>

          <div className="sg-row">
            <span className="sg-row-label">v10 primary family</span>
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
            <span className="sg-row-label">v10 on dark</span>
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
            <span className="sg-row-label">v10 ghost (defined twice — last import wins)</span>
            <a className="btn-ghost" href="#">
              Watch the demo
            </a>
            <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: 11, color: "#999", marginLeft: "auto" }}>
              .btn-ghost · landing-v10.css:227 + product.css:498
            </span>
          </div>

          <div className="sg-row" style={{ background: "var(--color-cream)" }}>
            <span className="sg-row-label">Cream/ink — comparison page CTAs</span>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--color-signal)",
                color: "var(--color-forest)",
                padding: "0.875rem 1.5rem",
                borderRadius: 9999,
                fontWeight: 600,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Migrate from Kajabi {arrowSvg}
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                border: "1px solid var(--color-line-strong)",
                background: "transparent",
                color: "var(--color-ink)",
                padding: "0.875rem 1.5rem",
                borderRadius: 9999,
                fontWeight: 500,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              See pricing
            </a>
            <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: 11, color: "#777", marginLeft: "auto" }}>
              comparison-page.tsx:213
            </span>
          </div>

          <div className="sg-row">
            <span className="sg-row-label">Site-shell book demo (orphan, kept for reference)</span>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--color-ink)",
                color: "var(--color-cream)",
                borderRadius: 9999,
                padding: "0.5rem 1rem",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Book a demo
            </a>
            <span style={{ fontFamily: "var(--font-mono-stack)", fontSize: 11, color: "#999", marginLeft: "auto" }}>
              site-shell.tsx:67 (dead code)
            </span>
          </div>
        </section>

        {/* EYEBROWS / CHIPS */}
        <section className="sg-section" id="chips">
          <div className="sg-section-head">
            <span className="sg-num">04</span>
            <h2>Eyebrows, chips & labels</h2>
            <p>
              Eleven patterns for the same conceptual element (mono kicker line).
              At least 4 different letter-spacing values in active use.
            </p>
          </div>

          <div className="sg-row">
            <span className="sg-row-label">v10 eyebrow & section labels</span>
            <span className="hero-eyebrow">Hero eyebrow</span>
            <span className="sec-label">SECTION LABEL</span>
            <span className="f-tag ft1">.f-tag ft1</span>
            <span className="f-tag ft2">.f-tag ft2</span>
            <span className="f-tag ft3">.f-tag ft3</span>
          </div>

          <div className="sg-row">
            <span className="sg-row-label">Comparison-page inline eyebrow (9+ duplicates in one file)</span>
            <span
              style={{
                fontFamily: "var(--font-mono-stack)",
                fontSize: "0.72rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-signal-ink)",
                fontWeight: 500,
              }}
            >
              Bold vs Kajabi
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono-stack)",
                fontSize: "0.72rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                fontWeight: 500,
              }}
            >
              At a glance
            </span>
          </div>
        </section>

        {/* CARDS */}
        <section className="sg-section" id="cards">
          <div className="sg-section-head">
            <span className="sg-num">05</span>
            <h2>Cards & surfaces</h2>
            <p>
              17 distinct card styles in the codebase, with radii spanning
              8/10/12/14/16/24/28.8/32/40px. Selection of the most-used variants below.
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
                  Used on home, blog, migrate.
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
              <span className="sg-card-label">comparison &quot;Our take&quot; · radius 36px (inline)</span>
              <div
                style={{
                  borderRadius: "2.25rem",
                  border: "1px solid var(--color-line)",
                  background: "rgba(255,255,255,0.76)",
                  boxShadow: "var(--shadow-panel)",
                  padding: "1.5rem",
                  minHeight: 120,
                }}
              >
                <p style={{ margin: 0, fontSize: 14, color: "var(--color-copy)" }}>
                  Inline-coded card on comparison-page.tsx:103.
                </p>
              </div>
            </div>

            <div className="sg-card-demo">
              <span className="sg-card-label">comparison &quot;Why switch&quot; · radius 25.6px (inline)</span>
              <div
                style={{
                  borderRadius: "1.6rem",
                  border: "1px solid var(--color-line)",
                  background: "rgba(255,255,255,0.76)",
                  padding: "1.25rem",
                  minHeight: 120,
                }}
              >
                <p style={{ margin: 0, fontSize: 14, color: "var(--color-copy)" }}>
                  Inline-coded card on comparison-page.tsx:158.
                </p>
              </div>
            </div>

            <div className="sg-card-demo">
              <span className="sg-card-label">404 card · radius 40px (inline)</span>
              <div
                style={{
                  borderRadius: "2.5rem",
                  border: "1px solid var(--color-line)",
                  background: "rgba(255,255,255,0.76)",
                  boxShadow: "var(--shadow-panel)",
                  padding: "1.5rem",
                  minHeight: 120,
                }}
              >
                <p style={{ margin: 0, fontSize: 14, color: "var(--color-copy)" }}>
                  not-found.tsx:17.
                </p>
              </div>
            </div>
          </div>

          <div className="sg-note">
            <strong>Pattern recommendation:</strong> a single{" "}
            <code>&lt;Card surface=&quot;white|muted|ink&quot; radius=&quot;md|lg&quot; shadow?&gt;</code>{" "}
            component would replace all 17 variants. Standardise on radius 16 (md)
            and 24 (lg) — the v10 unification block already enforces those.
          </div>
        </section>

        {/* MARK / HIGHLIGHT */}
        <section className="sg-section" id="mark">
          <div className="sg-section-head">
            <span className="sg-num">06</span>
            <h2>Mint highlight (mark)</h2>
            <p>
              The same conceptual highlight ships at 4 different alpha values.
              Recent commits prefer 0.18 (blog).
            </p>
          </div>

          <div className="sg-mark-row">
            <span className="a">α 0.12</span>
            <span>
              The video brain that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(transparent 60%, rgba(65,198,166,0.12) 60%)",
                  padding: "0 0.1em",
                }}
              >
                works while you sleep
              </span>
              .
            </span>
          </div>
          <div className="sg-mark-row">
            <span className="a">α 0.18 (blog)</span>
            <span>
              The video brain that{" "}
              <mark>works while you sleep</mark>.
            </span>
          </div>
          <div className="sg-mark-row">
            <span className="a">α 0.18 (hero em)</span>
            <span>
              The video brain that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(transparent 60%, rgba(65,198,166,0.18) 60%)",
                  padding: "0 0.1em",
                }}
              >
                works while you sleep
              </span>
              .
            </span>
          </div>
          <div className="sg-mark-row">
            <span className="a">α 0.22 (product)</span>
            <span>
              The video brain that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(transparent 60%, rgba(65,198,166,0.22) 60%)",
                  padding: "0 0.1em",
                }}
              >
                works while you sleep
              </span>
              .
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
          <div className="sg-note">
            <strong>Not a CSS gradient.</strong> Animated WebGL shader (
            <code>cta-glow.tsx</code>) — mint + coral + peach + teal +
            lavender blobs warped over time, with film grain. Respects{" "}
            <code>prefers-reduced-motion</code> (skips animation), uses
            IntersectionObserver to pause when off-screen, low-power GPU hint
            on mobile. Defaults positioned by{" "}
            <code>.landing-v10 .cta canvas {`{}`}</code>; pass a{" "}
            <code>className</code> prop to use it elsewhere.
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

          <h3 className="sg-h3">Logo wordmark (3 variants in codebase)</h3>
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
          <div className="sg-row">
            <span className="sg-row-label">site-shell SiteLogo (orphan — &quot;B&quot; mark + uppercase)</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  display: "inline-flex",
                  width: 36,
                  height: 36,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                  background: "var(--color-signal)",
                  color: "var(--color-forest)",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 512 512" fill="none">
                  <path
                    clipRule="evenodd"
                    d="m27 512v-512h260.196c112.402 0 160.451 58.6113 160.451 129.54 0 70.927-17.805 98.746-54.914 126.354 62.421 16.777 92.881 75.175 92.881 143.768 0 68.592-8.58 80.696-36.251 112.338z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                }}
              >
                Bold
              </span>
            </span>
          </div>

          <h3 className="sg-h3">Footer columns (real footer renders below page)</h3>
          <p
            style={{
              fontSize: 13,
              color: "#777",
              margin: 0,
            }}
          >
            <code>SiteNavFooter</code> from <code>components/site-nav.tsx:54</code>{" "}
            renders at the bottom of every page, including this one. Scroll to the
            end to see it.
          </p>
        </section>
      </div>

      {/* Render the actual footer once at the end */}
      <FooterPreview />
    </main>
  );
}

function FooterPreview() {
  // Inline render of the footer inside landing-v10 so the descendant selectors apply
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
