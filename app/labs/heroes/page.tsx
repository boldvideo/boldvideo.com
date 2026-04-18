import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/components/landing-v10.css";

export const metadata: Metadata = {
  title: "Hero variants",
  robots: { index: false, follow: false },
};

type Variant = {
  id: string;
  label: string;
  hypothesis: string;
  h1: ReactNode;
  sub: string;
  comment: string;
};

const EYEBROW = "Video intelligence platform";
const DEMO_URL = "https://savvycal.com/marcel-from-bold/7838d613";

const VARIANTS: Variant[] = [
  {
    id: "a",
    label: "A · Current baseline",
    hypothesis: "Live right now. Love → broken pivot, student-centered.",
    h1: (
      <>
        Your students love the content. They just can&apos;t find{" "}
        <em>what they need.</em>
      </>
    ),
    sub: "Bold turns your video library into an AI teaching assistant that knows your curriculum, cites the source, and scales without hiring.",
    comment:
      "Live version. The love-then-broken turn does real work: it drops defenses before landing the punch. Here's the catch. Every subject in every sentence is the student, so the person with the credit card is basically watching a stranger's problem unfold and being asked to pay for the cure. Fine for warm traffic that already felt the pain. Shaky for everyone else.",
  },
  {
    id: "b",
    label: "B · Direct loss on the buyer",
    hypothesis: "Two short punches. Buyer is the subject of both.",
    h1: (
      <>
        You recorded the answer. <em>They can&apos;t find it.</em>
      </>
    ),
    sub: "Bold turns every video in your library into an instant answer, cited, timestamped, grounded in your curriculum.",
    comment:
      "Shortest of the batch. Buyer is the subject of both sentences, which is the whole point. Punchy. Might feel blunt on cold traffic, though. Probably hits hardest on paid, where you've got three seconds before someone bounces off to check Slack.",
  },
  {
    id: "c",
    label: "C · Asset / goldmine frame",
    hypothesis: "Reframes the library as valuable before naming the problem.",
    h1: (
      <>
        Your video library is a goldmine your audience{" "}
        <em>can&apos;t mine.</em>
      </>
    ),
    sub: "Bold indexes every lesson, podcast, and Q&A so your members get cited answers in seconds, not scavenger hunts.",
    comment:
      "Goldmine works because it's physical. You picture it. You smell the dust on the worker's boots. 'Can't mine' closes the picture instead of just naming a problem. Bonus: it flips the library from burden to asset before the reader gets defensive about their own product. This is the one I'd test against baseline.",
  },
  {
    id: "d",
    label: "D · JTBD / positive frame",
    hypothesis: "No negative. Outcome-first. Confident tone.",
    h1: (
      <>
        Turn every video you&apos;ve recorded into an answer{" "}
        <em>they can ask for.</em>
      </>
    ),
    sub: "Bold knows your curriculum, cites the source, and scales coaching without adding headcount.",
    comment:
      "Confident. No pain in sight. This one assumes the reader already feels the library is broken and is shopping for a fix, which is fair on a pricing page but a stretch on a cold homepage visit. Reads like a feature brag more than an answer to something that hurts. I'd pin this on pricing or the product page, honestly.",
  },
  {
    id: "e",
    label: "E · Business pain (coach labor)",
    hypothesis: "Names a P&L line item. Narrower ICP but sharper.",
    h1: (
      <>
        Your coaches answer the same question a hundred times a week.{" "}
        <em>Your videos already have the answer.</em>
      </>
    ),
    sub: "Bold turns your library into a 24/7 teaching assistant, so coaches coach and students stop waiting.",
    comment:
      "Narrow but sharp. Only lands if the reader runs a coached program, so Viva ACCA is out the window. When it hits, it hits where the money is: coach labor. 'Hundred times a week' is specific enough to sting, which is the only reason it earns the real estate.",
  },
];

export default function HeroVariantsLab() {
  return (
    <main className="landing-v10" id="main-content">
      <header className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-[1120px] px-8 py-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-mid)]">
            Internal · hero copy test
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--text)]">
            Homepage hero: 5 variants
          </h2>
          <p className="mt-2 max-w-[620px] text-[15px] leading-relaxed text-[var(--text-mid)]">
            Baseline first, then four swings. Notes sit under each one. Reply
            with favorites or a flat no.
          </p>
        </div>
      </header>

      {VARIANTS.map((v, i) => (
        <div key={v.id}>
          <div className="mx-auto max-w-[1120px] px-8 pt-12">
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--mint-text)]">
              {v.label}
            </div>
            <div className="mt-1 text-[13px] italic text-[var(--text-dim)]">
              {v.hypothesis}
            </div>
          </div>

          <section
            className="hero-centered container"
            style={{ paddingTop: "3rem", paddingBottom: "2rem" }}
          >
            <div className="hero-glow" />
            <div className="hero-inner">
              <div className="hero-eyebrow">{EYEBROW}</div>
              <h1>{v.h1}</h1>
              <p className="hero-sub">{v.sub}</p>
              <div className="hero-actions">
                <a
                  className="btn-mint"
                  href={DEMO_URL}
                  rel="noreferrer"
                  target="_blank"
                >
                  Book a demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5 2l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-[720px] px-8 pb-16">
            <div className="border-l-2 border-[var(--mint)] bg-[var(--mint-dim)] px-5 py-4 text-[14px] leading-relaxed text-[var(--text-mid)]">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-dim)]">
                Note
              </div>
              {v.comment}
            </div>
          </div>

          {i < VARIANTS.length - 1 && (
            <div className="border-t border-[var(--border)]" />
          )}
        </div>
      ))}

      <footer className="py-20 text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-dim)]">
          End of lineup
        </div>
      </footer>
    </main>
  );
}
