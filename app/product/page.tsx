import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";
import { CtaSection } from "@/components/cta-section";
import "./product.css";
import "@/components/landing-v10.css";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Bold is a video intelligence layer. Upload your library and it turns into an AI teaching assistant students can talk to, with cited timestamps from your actual content.",
};

export default function ProductPage() {
  return (
    <div className="landing-v10">
      <div className="announce">
        <strong>Growing out of Kajabi?</strong>
        <div className="sep" />
        <a href="/migrate">See how to migrate &rarr;</a>
      </div>

      <SiteNav />

      <main>
        {/* Hero */}
        <section className="prod-hero">
          <div className="prod-hero-bloom" aria-hidden="true" />
          <div className="container prod-hero-grid">
            <div className="prod-hero-copy">
              <div className="hero-eyebrow">Product</div>
              <h1>
                Your video library, <em>finally answering questions.</em>
              </h1>
              <p className="hero-sub">
                Upload your library. Bold turns it into an AI teaching
                assistant your students can actually talk to&nbsp;&mdash; one
                that cites the exact clip every time.
              </p>
              <p className="prod-diff">
                Not a course platform. Not a chatbot. The piece that was
                missing between them.
              </p>
              <div className="hero-actions">
                <a
                  className="btn-primary"
                  href="https://savvycal.com/marcel-from-bold/7838d613"
                  rel="noreferrer"
                  target="_blank"
                >
                  Book a demo
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="btn-arrow">
                    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </a>
                <a
                  className="btn-ghost"
                  href="https://docs.boldvideo.io/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Read the docs
                </a>
              </div>
            </div>
            <div className="prod-hero-visual">
              <div className="mock-chat prod-hero-mock">
                <div className="mock-chat-header">
                  <div className="mock-av">B</div>
                  <div>
                    <div className="mock-title">Ask Bold</div>
                    <div className="mock-meta">
                      HRT University &middot; 97 lessons
                    </div>
                  </div>
                </div>
                <div className="mock-chat-body">
                  <div className="mock-bubble mock-user">
                    How do I handle a patient skeptical about TRT?
                  </div>
                  <div className="mock-bubble mock-ai">
                    <p>
                      Start with their concerns, not your data. If
                      they&apos;re worried about side effects, walk through
                      the risk profile in plain language first. The pitch
                      only lands after they feel heard.
                    </p>
                    <div className="mock-citations">
                      <span className="mock-cite">
                        Patient Communication <em>18:42</em>
                      </span>
                      <span className="mock-cite">
                        TRT Protocols <em>07:15</em>
                      </span>
                      <span className="mock-cite">
                        Objection Handling <em>33:21</em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scenarios — alternating splits with mock visuals */}
        <section className="prod-scenarios-wrap">
          <div className="container prod-scenarios-head">
            <div className="sec-label">What students experience</div>
            <h2 className="section-title">
              Four moments where your library stops failing them
            </h2>
            <p className="prod-sub">
              Not a chatbot. Not a search bar. A teaching assistant that shows
              up exactly when a student needs it.
            </p>
          </div>

          {/* 01 — Ask the library */}
          <div className="container prod-scene-row">
            <div className="prod-scene-copy">
              <div className="prod-scene-marker">
                <span className="prod-scene-num">01</span>
                <span className="prod-scene-rule" aria-hidden="true" />
                <span className="prod-scene-tag">Ask the library</span>
              </div>
              <h3>A student is stuck. They can&apos;t even describe it.</h3>
              <p>
                They fire off a half&#8209;formed question. Bold pulls the
                answer together from across your library and hands back the
                clips they need to watch. No guessing. No hallucinating. Your
                teaching, cited.
              </p>
            </div>
            <div className="prod-scene-visual">
              <div className="mock-chat">
                <div className="mock-chat-header">
                  <div className="mock-av">B</div>
                  <div>
                    <div className="mock-title">Ask Bold</div>
                    <div className="mock-meta">1,400 videos</div>
                  </div>
                </div>
                <div className="mock-chat-body">
                  <div className="mock-bubble mock-user">
                    How should I price a new HRT clinic?
                  </div>
                  <div className="mock-bubble mock-ai">
                    <p>
                      Anchor on outcomes, not cost. If your protocol delivers
                      measurable results, a $200/month concierge model reads
                      as premium.
                    </p>
                    <div className="mock-citations">
                      <span className="mock-cite">
                        Pricing Strategy <em>14:23</em>
                      </span>
                      <span className="mock-cite">
                        Clinic Ops <em>08:47</em>
                      </span>
                      <span className="mock-cite">
                        Business Models <em>32:10</em>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 — Ask this video */}
          <div className="container prod-scene-row prod-scene-row-rev">
            <div className="prod-scene-copy">
              <div className="prod-scene-marker">
                <span className="prod-scene-num">02</span>
                <span className="prod-scene-rule" aria-hidden="true" />
                <span className="prod-scene-tag">Ask this video</span>
              </div>
              <h3>They&apos;re mid&#8209;lesson and hit a wall.</h3>
              <p>
                They pause and ask a question about what they just watched.
                The chat stays scoped to that video&nbsp;&mdash; no context
                leak, no going back to square one.
              </p>
            </div>
            <div className="prod-scene-visual">
              <div className="mock-player">
                <div className="mock-player-frame">
                  <div className="mock-player-bar" />
                  <div className="mock-player-play">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                      <path d="M3 2v10l8-5z" />
                    </svg>
                  </div>
                </div>
                <div className="mock-player-chat">
                  <div className="mock-bubble mock-user mock-bubble-sm">
                    Wait, why does he recommend T3 combination therapy here?
                  </div>
                  <div className="mock-bubble mock-ai mock-bubble-sm">
                    <p>
                      At 3:42 Nico explains the reverse T3 issue &mdash; T4
                      alone can convert inefficiently in some patients.
                    </p>
                    <span className="mock-cite mock-cite-inline">
                      Jump to <em>3:42</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 — Review their work */}
          <div className="container prod-scene-row">
            <div className="prod-scene-copy">
              <div className="prod-scene-marker">
                <span className="prod-scene-num">03</span>
                <span className="prod-scene-rule" aria-hidden="true" />
                <span className="prod-scene-tag">Review their work</span>
              </div>
              <h3>They submit homework at 11pm on a Sunday.</h3>
              <p>
                A draft, a lab panel, a mockup. Bold reviews it using your
                frameworks&nbsp;&mdash; not generic AI advice&nbsp;&mdash; and
                sends back feedback grounded in your teaching. Implementation
                support, even when you&apos;re asleep.
              </p>
            </div>
            <div className="prod-scene-visual">
              <div className="mock-upload">
                <div className="mock-upload-file">
                  <div className="mock-upload-thumb">IMG</div>
                  <div className="mock-upload-meta">
                    <div className="mock-upload-name">lab-panel-april.pdf</div>
                    <div className="mock-upload-size">2.3 MB</div>
                  </div>
                </div>
                <div className="mock-bubble mock-ai">
                  <p>
                    TSH is 0.4&nbsp;&mdash; below your protocol&apos;s floor.
                    Per Module 4 guidance, drop T3 by 5mcg before the next
                    draw.
                  </p>
                  <div className="mock-citations">
                    <span className="mock-cite">
                      Thyroid Dosing <em>22:08</em>
                    </span>
                    <span className="mock-cite">
                      Labs &amp; Monitoring <em>11:17</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 04 — Find the moment */}
          <div className="container prod-scene-row prod-scene-row-rev">
            <div className="prod-scene-copy">
              <div className="prod-scene-marker">
                <span className="prod-scene-num">04</span>
                <span className="prod-scene-rule" aria-hidden="true" />
                <span className="prod-scene-tag">Find the moment</span>
              </div>
              <h3>They&apos;ve forgotten what you called it.</h3>
              <p>
                Bold searches by meaning, not keyword. They type the symptom,
                you taught the framework&nbsp;&mdash; the right moment shows
                up anyway.
              </p>
            </div>
            <div className="prod-scene-visual">
              <div className="mock-search">
                <div className="mock-search-bar">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  <span>when a patient won&apos;t follow the plan</span>
                </div>
                <div className="mock-results">
                  <div className="mock-result">
                    <div className="mock-result-head">
                      <strong>Adherence, Not Compliance</strong>
                      <span className="mock-ts">23:15</span>
                    </div>
                    <p>
                      ...stop trying to convince. Start asking what&apos;s
                      actually blocking implementation for them...
                    </p>
                  </div>
                  <div className="mock-result">
                    <div className="mock-result-head">
                      <strong>Motivational Interviewing Basics</strong>
                      <span className="mock-ts">11:42</span>
                    </div>
                    <p>
                      ...the goal isn&apos;t buy&#8209;in, it&apos;s
                      understanding the resistance. Then you can work with
                      it...
                    </p>
                  </div>
                  <div className="mock-result">
                    <div className="mock-result-head">
                      <strong>Behavior Change Protocols</strong>
                      <span className="mock-ts">47:08</span>
                    </div>
                    <p>
                      ...tiny commitments beat big ones. Ask for one thing
                      they&apos;ll actually do this week...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why the answers are good */}
        <section className="prod-why">
          <div className="container">
            <div className="sec-label">Why it works</div>
            <h2 className="section-title">
              The answers are good because the reading is good
            </h2>
            <p className="prod-sub">
              Most AI tools throw a transcript at a model and hope for the
              best. Bold does something different.
            </p>
            <div className="prod-why-list">
              <article className="prod-why-item">
                <div className="prod-why-marker">
                  <span className="prod-why-num">01</span>
                  <span className="prod-why-rule" aria-hidden="true" />
                  <span className="prod-why-tag">Reads like a teacher</span>
                </div>
                <div className="prod-why-body">
                  <h3>Bold reads every video the way a teacher would.</h3>
                  <p>
                    Before it answers anything, Bold works out what each
                    lesson is teaching, how it connects, where it fits. That
                    groundwork is why the citations are precise where other
                    AI is vague.
                  </p>
                </div>
              </article>
              <article className="prod-why-item">
                <div className="prod-why-marker">
                  <span className="prod-why-num">02</span>
                  <span className="prod-why-rule" aria-hidden="true" />
                  <span className="prod-why-tag">
                    Calibrated to the student
                  </span>
                </div>
                <div className="prod-why-body">
                  <h3>It knows who&apos;s asking.</h3>
                  <p>
                    Beginners get foundations. Advanced students get
                    nuance. Same question in, different answer
                    out&nbsp;&mdash; calibrated to where the student
                    actually is.
                  </p>
                </div>
              </article>
              <article className="prod-why-item">
                <div className="prod-why-marker">
                  <span className="prod-why-num">03</span>
                  <span className="prod-why-rule" aria-hidden="true" />
                  <span className="prod-why-tag">Every claim has a source</span>
                </div>
                <div className="prod-why-body">
                  <h3>Every answer comes with a receipt.</h3>
                  <p>
                    Answers stay inside your library. Citations are
                    clickable. Students verify the source instead of
                    taking the AI&apos;s word for it.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Meet students anywhere — RESTRUCTURED: emotional lead first */}
        <section className="prod-ambient">
          <div className="container">
            <div className="sec-label">Meet students anywhere</div>
            <h2 className="prod-ambient-quote">
              Your coaching library becomes{" "}
              <em>ambient knowledge.</em>
            </h2>
            <p className="prod-ambient-sub">
              Not a destination students have to visit. A resource that shows
              up wherever they already work.
            </p>

            <div className="prod-surfaces">
              <div className="prod-surface">
                <div className="prod-surface-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="14" rx="1" />
                    <path d="M8 20h8M12 18v2" />
                  </svg>
                </div>
                <h3>Your branded portal</h3>
                <p>
                  Your domain, your brand. Deploy our Next.js starter or
                  build your own UI on the API.
                </p>
              </div>
              <div className="prod-surface">
                <div className="prod-surface-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="7" y="2" width="10" height="20" rx="1.5" />
                    <path d="M10 20h4" />
                  </svg>
                </div>
                <h3>Your mobile app</h3>
                <p>
                  SDK and REST API. Ship Bold inside your own iOS and
                  Android apps when you&apos;re ready.
                </p>
              </div>
              <div className="prod-surface">
                <div className="prod-surface-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
                  </svg>
                </div>
                <h3>Inside their AI tools</h3>
                <p>
                  MCP server ships day one. Students pull your library into
                  Claude, Cursor, and whatever they use next.
                </p>
              </div>
            </div>

            <div className="prod-ambient-foot">
              <div className="prod-ambient-code">
                <div className="prod-dev-label">For your developers</div>
                <div className="dev-code">
                  <div className="dev-code-bar">
                    <span className="dev-code-dot" />
                    <span className="dev-code-dot" />
                    <span className="dev-code-dot" />
                    <span className="dev-code-file">ask.ts</span>
                  </div>
                  <pre>
                    <code>
                      <span className="ck">import</span> {"{"}{" "}
                      <span className="cv">Bold</span> {"}"}{" "}
                      <span className="ck">from</span>{" "}
                      <span className="cs">&apos;@boldvideo/bold-js&apos;</span>
                      {"\n\n"}
                      <span className="ck">const</span>{" "}
                      <span className="cv">bold</span> ={" "}
                      <span className="ck">new</span>{" "}
                      <span className="cf">Bold</span>(
                      <span className="cs">&apos;sk_live_...&apos;</span>)
                      {"\n\n"}
                      <span className="ck">const</span>{" "}
                      <span className="cv">answer</span> ={" "}
                      <span className="ck">await</span>{" "}
                      <span className="cv">bold</span>.
                      <span className="cf">ask</span>({"{"}
                      {"\n  "}question:{" "}
                      <span className="cs">
                        &apos;How should I price my services?&apos;
                      </span>
                      ,{"\n  "}collection:{" "}
                      <span className="cs">&apos;founder-playbook&apos;</span>
                      {"\n"}
                      {"}"})
                    </code>
                  </pre>
                </div>
              </div>
              <div className="prod-ambient-tech">
                <p className="prod-tech-line">
                  REST API &middot; JavaScript SDK &middot; Next.js starter
                  &middot; Webhooks &middot; MCP server
                </p>
                <p className="prod-tech-integrations">
                  Composable by design. Wire Bold into anything you already
                  run.
                </p>
                <Link
                  href="https://docs.boldvideo.io/"
                  className="btn-ghost btn-ghost-dark"
                >
                  Read the docs
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="btn-arrow">
                    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations — real brand marks, real legitimacy */}
        <section className="prod-integrations">
          <div className="container">
            <div className="sec-label">Integrations</div>
            <h2 className="section-title">
              Plug into the stack you already run.
            </h2>
            <p className="prod-sub">
              Official partners where it matters. Webhooks and a REST API
              for the rest.
            </p>

            <div className="prod-int-grid">
              <article
                className="prod-int-card prod-int-zoom"
                style={{ ["--int" as string]: "#2D8CFF" }}
              >
                <div className="prod-int-logo" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="44" height="44">
                    <rect width="48" height="48" rx="11" fill="#2D8CFF" />
                    <path
                      d="M11 19a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V19zm27 .4 6-4.2v17.6l-6-4.2V19.4z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="prod-int-name">Zoom</div>
                <p>
                  Auto&#8209;import cohort calls, group coaching, and Q&amp;A
                  the moment they end.
                </p>
              </article>

              <article
                className="prod-int-card prod-int-gdrive"
                style={{ ["--int" as string]: "#1FA463" }}
              >
                <div className="prod-int-logo" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="44" height="44">
                    <path d="M18 6h12l14 24H32L18 6z" fill="#FFC107" />
                    <path d="M18 6 4 30l6 10 14-24-6-10z" fill="#1FA463" />
                    <path d="M10 40h28l6-10H16l-6 10z" fill="#4285F4" />
                  </svg>
                </div>
                <div className="prod-int-name">Google Drive</div>
                <p>
                  Point us at a folder. New files come in on their own, no
                  copy&#8209;paste marathons.
                </p>
              </article>

              <article
                className="prod-int-card prod-int-onedrive"
                style={{ ["--int" as string]: "#0078D4" }}
              >
                <div className="prod-int-logo" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="44" height="44">
                    <path
                      d="M14 24a8 8 0 0 1 15.2-3.5A7 7 0 0 1 40 25.5 6 6 0 0 1 38 37H11a6 6 0 0 1-2-11.8c.2-.3 1.8-1.2 5-1.2z"
                      fill="#0078D4"
                    />
                    <path
                      d="M14 24c3-4 8-6 13-5a7 7 0 0 1 5 3.5A7 7 0 0 0 29.2 20.5 8 8 0 0 0 14 24z"
                      fill="#50E6FF"
                    />
                  </svg>
                </div>
                <div className="prod-int-name">OneDrive</div>
                <p>
                  Same folder&#8209;watching magic, Microsoft side. SharePoint
                  too.
                </p>
              </article>

              <article
                className="prod-int-card prod-int-outseta"
                style={{ ["--int" as string]: "#FFCC11" }}
              >
                <div className="prod-int-logo" aria-hidden="true">
                  <svg
                    viewBox="0 0 32 32"
                    width="44"
                    height="44"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="7" fill="#FFCC11" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.8663 15.7293C24.7695 21.8288 21.1579 26 16 26C13.1853 26 11.0602 25.1238 9.49449 23.5472C7.89186 21.9335 6.69342 19.4007 6.1425 15.7822C5.62912 12.4103 6.54189 9.80477 8.16308 8.17234C9.78208 6.54211 12.3596 5.62815 15.6949 6.14302C19.3195 6.70255 22.1415 7.92547 23.8882 9.56282C25.5496 11.1202 26.3346 13.1246 25.8663 15.7293ZM27.8347 16.0832C26.6512 22.6647 22.5361 28 16 28C9.46387 28 5.34876 23.8564 4.16529 16.0832C2.98181 8.31008 8.2804 2.97475 16 4.16643C23.7196 5.35811 29.0182 9.50176 27.8347 16.0832ZM16.1048 22C19.3359 22 22 19.3387 22 16C22 14.1324 21.4914 12.6564 20.6162 11.6724C19.7757 10.7275 18.3885 10 16.1048 10C13.7776 10 12.0771 10.7576 11.0997 11.748C10.165 12.6952 9.75662 13.9739 10.1475 15.5053C10.6674 17.5416 11.4414 19.2056 12.4394 20.3276C13.3867 21.3925 14.5519 22 16.1048 22ZM16.1048 24C20.4652 24 24 20.4183 24 16C24 11.5817 21.5931 8 16.1048 8C10.6166 8 7.08181 11.5817 8.20969 16C9.33757 20.4183 11.7445 24 16.1048 24ZM20 16C20 18.2091 18.2691 20 16.134 20C14.0176 20 13.248 18.2406 12.2934 16.0584L12.2679 16C11.3014 13.7909 13.0323 12 16.134 12C19.2356 12 20 13.7909 20 16Z"
                      fill="#200024"
                    />
                  </svg>
                </div>
                <div className="prod-int-name">Outseta</div>
                <p>
                  Drop&#8209;in auth and billing. Our go&#8209;to pairing for
                  Kajabi graduates.
                </p>
              </article>
            </div>

            <p className="prod-int-foot">
              Need something else?{" "}
              <Link href="https://docs.boldvideo.io/">
                Webhooks, REST API, and an MCP server
              </Link>{" "}
              cover the rest.
            </p>
          </div>
        </section>

        {/* How we get you live — timeline */}
        <section className="timeline-section">
          <div className="container">
            <div className="timeline-box">
              <h2 className="timeline-heading">Live in weeks, not months</h2>
              <div className="timeline-steps">
                <div className="timeline-step">
                  <div className="timeline-num-row">
                    <div className="timeline-num">01</div>
                    <div className="timeline-line" aria-hidden="true" />
                  </div>
                  <h3>Show us your library</h3>
                  <p>
                    30&#8209;minute call. Your content, your stack, best path
                    forward.
                  </p>
                </div>
                <div className="timeline-step">
                  <div className="timeline-num-row">
                    <div className="timeline-num">02</div>
                    <div className="timeline-line" aria-hidden="true" />
                  </div>
                  <h3>We build it for you</h3>
                  <p>
                    Portal, AI coach, integrations. Configured for your
                    program.
                  </p>
                </div>
                <div className="timeline-step">
                  <div className="timeline-num-row">
                    <div className="timeline-num">03</div>
                  </div>
                  <h3>Students start getting answers</h3>
                  <p>
                    We&apos;re on the call with you. Go live, iterate, grow.
                  </p>
                </div>
              </div>
              <div className="timeline-kicker">
                You work directly with the founders. No ticket queue, no
                onboarding specialist.
              </div>
            </div>
          </div>
        </section>
      </main>

      <CtaSection
        heading="See Bold on your content"
        description="The fastest way to understand Bold is to watch it answer questions from your actual library. Book a 30-minute demo."
      />

      <SiteNavFooter />
    </div>
  );
}
