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
    label: "A · Deliverable + differentiation",
    hypothesis:
      "Names what the buyer gets in five words. 'Actionable' signals output format — a next step, not a search result.",
    h1: (
      <>
        Actionable answers. <em>From your library.</em>
      </>
    ),
    sub: "Members describe a problem in their own words. Bold answers with a clear next step, drawn from your own teaching and delivered in your style.",
    comment:
      "Two beats. Beat one names the deliverable with a format signal ('actionable' = not generic, not a clip dump, not a search result). Beat two names the source (the buyer's own library, not the open internet). Sub fills in how: member describes the problem in their own words, Bold synthesizes the next step from the coach's teaching. Clearest opener in the set for a cold reader, but 'actionable' is a risk word — it can read slightly corporate.",
  },
  {
    id: "b",
    label: "B · Video library as asset, unlocked",
    hypothesis:
      "Keeps the goldmine image from earlier. Flips the second beat from barrier to access so both beats read positive.",
    h1: (
      <>
        Your video library is a goldmine. <em>Here&apos;s the key.</em>
      </>
    ),
    sub: "Your members come with a problem. Bold returns a clear next step drawn from your own teaching, in your style. The exact clip is linked as proof if they want to dig deeper.",
    comment:
      "Flipped version of the earlier goldmine swing. Beat one upgrades the library's status from archive to asset. Beat two hands over access instead of naming a wall. 'Video library' makes the asset concrete (you have one, you know what it is). Whole line rides on whether the goldmine image lands for the buyer. If it reads corny on Rob's pass, we trade it for a pure-promise H1 like 'Every answer. One question away.'",
  },
  {
    id: "c",
    label: "C · A video library that talks back",
    hypothesis: "Pure noun promise. Memorable image. Zero verbs.",
    h1: (
      <>
        A video library <em>that talks back.</em>
      </>
    ),
    sub: "Your audience asks in plain English. Bold answers in your voice and shows the exact clip where you taught it.",
    comment:
      "Six words, one image. 'Talks back' is playful, but the mechanism is real. The whole job of the sub is to earn the metaphor, which is why 'reads and actually understands' matters more than 'indexes' here. Most memorable H1 in the set by a wide margin.",
  },
  {
    id: "d",
    label: "D · Your best teaching, on repeat",
    hypothesis: "Flatters the buyer. Sells the compounding effect.",
    h1: (
      <>
        Your best teaching.
        <br />
        <em>On repeat.</em>
      </>
    ),
    sub: "Bold turns every lesson you've taught into an always-on answer that shows up before a member knows where to look for it.",
    comment:
      "Starts with a quiet compliment. 'Your best teaching' reads the buyer their own review before they even ask for it. 'On repeat' lands the cadence promise. Works across coaching programs, clinical education, training academies, and membership communities because 'teaching' is the universal noun.",
  },
  {
    id: "e",
    label: "E · Coaching while you sleep",
    hypothesis:
      "Same angle as the long original, compressed to six words. Keeps the buyer-rests-while-the-coach-works hook intact.",
    h1: (
      <>
        Every video. <em>Coaching while you sleep.</em>
      </>
    ),
    sub: "Bold reads your whole library and answers your members in your teaching style, no matter how they phrase the question.",
    comment:
      "Compressed cut of the original long version, from fifteen words to six. Beat one reframes the library as inventory: every video is a piece of content already paid for. Beat two keeps the magic phrase ('while you sleep') that makes this variant distinctive. The buyer rests, the coach works. That image is what carries the line, and cutting 'turn' and 'you've ever recorded' doesn't weaken it.",
  },
  {
    id: "e2",
    label: "E2 · Library, always answering",
    hypothesis:
      "Same angle as E at a quarter of the length. Asset plus the outcome it delivers.",
    h1: (
      <>
        Your video library.
        <br />
        <em>Always answering.</em>
      </>
    ),
    sub: "Members ask the moment they hit a wall. Bold returns a clear next step drawn from your own teaching, delivered in your style.",
    comment:
      "Tight cut of E. Beat one is the asset. Beat two is the product in motion. Loses the 'coach' framing, which might actually be a feature. 'Coach' implies a coaching program; 'always answering' works for every shape in the social proof set, from clinical to training to coaching to membership. Use this if E feels landing-page-heavy on the homepage.",
  },
  {
    id: "f",
    label: "F · Scale 10×, no new hires",
    hypothesis:
      "Quantified transformation plus the friction it removes. The number does the work.",
    h1: (
      <>
        Scale coaching 10×
        <br />
        <em>without hiring a single coach.</em>
      </>
    ),
    sub: "Bold knows who's asking. Beginners get the foundations; advanced members get the tactical depth.",
    comment:
      "The number carries the H1. '10×' implies serious scale. 'Without hiring a single coach' names the alternative the buyer was probably about to price out in their head. Sub now leans on context-awareness, which is a real product truth: same question, different answer depending on who's asking. Narrows the ICP though, because 'coaching' filters clinical and training buyers out of the frame. Earns its keep on a coaching-specific page more than on a homepage that has to greet everyone.",
  },
  {
    id: "g",
    label: "G · Amplify expertise at the moment of need",
    hypothesis:
      "Makes the buyer's status the subject of the H1. Names the critical moment instead of a product feature.",
    h1: (
      <>
        Amplify your expertise
        <br />
        <em>when it matters most</em>
      </>
    ),
    sub: "Bold turns your library into an answer the moment a member hits a wall. Shaped for their level, drawn from your own teaching.",
    comment:
      "Most buyer-centered H1 in the set. 'Your expertise' flatters the buyer directly. Not about videos or libraries as assets, but about who they are as an expert. 'When it matters most' names the critical moment (a stuck member, a question that needs answering now) without spelling it out. Sub closes the gap: Bold is what connects the buyer's expertise to the member at the exact moment they need it. 'Amplify' and 'expertise' both carry a mild corporate tone, but they earn their keep here by making the buyer's status the subject.",
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
            Homepage hero: 8 variants
          </h2>
          <p className="mt-2 max-w-[620px] text-[15px] leading-relaxed text-[var(--text-mid)]">
            A names the deliverable in a two-beat promise. B, C, D, E, E2 are
            variations on that pattern. F is a quantified offer. G flatters the
            buyer's expertise and points to the moment of need. Notes under
            each. Favorites or vetos, either works.
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
