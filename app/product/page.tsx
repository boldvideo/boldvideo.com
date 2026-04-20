import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";
import { CtaSection } from "@/components/cta-section";
import "./product.css";
import "@/components/landing-v10.css";

function Cite({
  time,
  topic,
  title,
  src,
}: {
  time: string;
  topic: string;
  title: string;
  src: string;
}) {
  return (
    <div className="illo-cite">
      <div className="illo-cite-thumb">
        <img src={src} alt="" />
        <div className="illo-cite-play">
          <svg viewBox="0 0 10 10">
            <polygon points="1,1 9,5 1,9" fill="currentColor" />
          </svg>
        </div>
        <div className="illo-cite-time">{time}</div>
      </div>
      <div className="illo-cite-meta">
        <div className="illo-cite-sub">{topic}</div>
        <div className="illo-cite-ttl">{title}</div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Product",
  description:
    "Bold is a video intelligence layer. Upload your library and it turns into an AI teaching assistant members can talk to, with cited timestamps from your actual content.",
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
                <strong>You don&apos;t build anything.</strong> We turn your
                library into an AI teaching assistant that cites the exact clip
                every time&nbsp;&mdash; live in weeks.
              </p>
              <div className="hero-actions">
                <a
                  className="btn-primary"
                  href="https://savvycal.com/marcel-from-bold/7838d613"
                  rel="noreferrer"
                  target="_blank"
                >
                  See Bold on your content
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="btn-arrow">
                    <path d="M5 2l5 5-5 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </a>
                <a className="hero-soft-cta" href="#scenarios">
                  See it answer real questions
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 2v8m0 0L2.5 6.5M6 10l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <p className="prod-fit">
                For coaching programs and training academies with{" "}
                <strong>50+ hours of video</strong>.
              </p>
            </div>
            <div className="prod-hero-visual">
              <div className="hero-surface">
                <div className="hero-video">
                  <img
                    className="hero-video-still"
                    src="/images/product-mocks/hero.jpg"
                    alt=""
                  />
                  <div className="hero-scan" aria-hidden="true" />
                  <div className="hero-video-label">
                    <span className="hero-video-label-dot" aria-hidden="true" />
                    FounderWell &middot; 197 videos
                  </div>
                  <div className="hero-video-bottom">
                    <div className="hero-tline">23:14 / 59:22</div>
                    <div className="hero-track">
                      <div className="hero-track-fill" />
                    </div>
                  </div>
                </div>
                <div className="hero-chat">
                  <div className="hero-chat-chrome">
                    <div className="hero-chat-chrome-dot">&#9670;</div>
                    <div className="hero-chat-chrome-title">
                      Ask FounderWell
                    </div>
                  </div>
                  <div className="hero-chat-body">
                    <div className="hero-user-msg">
                      How should I price for enterprise deals?
                    </div>
                    <div className="hero-ai-msg">
                      <div className="hero-ai-label">
                        <span
                          className="hero-ai-label-dot"
                          aria-hidden="true"
                        />
                        Bold AI
                      </div>
                      <div className="hero-ai-text">
                        <strong>Anchor on outcomes, not seats.</strong>{" "}
                        Enterprise buyers price against the problem, not the
                        product.
                      </div>
                      <button type="button" className="hero-ai-cite">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          aria-hidden="true"
                        >
                          <polygon
                            points="1,1 9,5 1,9"
                            fill="currentColor"
                          />
                        </svg>
                        Jump to <strong>23:14</strong>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer logo strip */}
        <section className="prod-clients">
          <div className="container">
            <div className="prod-clients-label">
              Content that talks back, in production at
            </div>
            <div className="prod-clients-row">
              <a
                className="prod-client"
                href="https://founderwell.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-founderwell.png"
                  alt="FounderWell"
                  width={1564}
                  height={304}
                />
              </a>
              <a
                className="prod-client"
                href="https://commercetools.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-commercetools.png"
                  alt="commercetools"
                  width={1262}
                  height={396}
                />
              </a>
              <a
                className="prod-client"
                href="https://hrtuniversity.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-hrt.png"
                  alt="HRT University"
                  width={1424}
                  height={346}
                />
              </a>
              <a
                className="prod-client"
                href="https://vivatuition.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-viva.png"
                  alt="Viva Tuition"
                  width={896}
                  height={338}
                />
              </a>
              <a
                className="prod-client"
                href="https://ranger.de"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-ranger.png"
                  alt="Ranger"
                  width={1288}
                  height={342}
                />
              </a>
              <a
                className="prod-client"
                href="https://suora.de"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-suora.png"
                  alt="Suora"
                  width={1048}
                  height={342}
                />
              </a>
              <a
                className="prod-client"
                href="https://showthem.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-showthem.png"
                  alt="Show Them"
                  width={896}
                  height={342}
                />
              </a>
              <a
                className="prod-client"
                href="https://yo.fm"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/logostrip-yo.png"
                  alt="Yo Podcast"
                  width={336}
                  height={336}
                />
              </a>
            </div>
          </div>
        </section>

        {/* Scenarios — alternating splits with mock visuals */}
        <section id="scenarios" className="prod-scenarios-wrap">
          <div className="container prod-scenarios-head">
            <div className="sec-label">What members experience</div>
            <h2 className="section-title">
              Four moments where your library stops failing them
            </h2>
            <p className="prod-sub">
              Not a chatbot. Not a search bar. A teaching assistant that shows
              up exactly when a member needs it.
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
              <h3>A member is stuck. They can&apos;t even describe it.</h3>
              <p>
                They fire off a half&#8209;formed question. Bold pulls the
                answer together from across your library and hands back the
                clips they need to watch. No guessing. No hallucinating. Your
                teaching, cited.
              </p>
            </div>
            <div className="prod-scene-visual">
              <div className="illo illo-founderwell">
                <div className="illo-chrome">
                  <div className="illo-chrome-dot">&#9670;</div>
                  <div className="illo-chrome-title">FounderWell</div>
                  <div className="illo-chrome-meta">1,400 videos</div>
                </div>
                <div className="illo-body">
                  <div className="illo-user">
                    My co&#8209;founder and I keep clashing on fundraising
                    timing. How do I reset the conversation without blowing up
                    the relationship?
                  </div>
                  <div className="illo-ai">
                    <div className="illo-ai-sender">Bold AI</div>
                    <div className="illo-ai-text">
                      <strong>
                        It&apos;s almost never about the timing.
                      </strong>{" "}
                      Underneath co&#8209;founder fundraising fights is usually
                      a mismatch on <em>risk tolerance</em> or{" "}
                      <em>ownership of the outcome</em>. Before you debate the
                      round, run a 30&#8209;minute alignment on those two
                      &mdash; Jerry&apos;s framework makes this concrete.
                    </div>
                  </div>
                  <div className="illo-cites">
                    <Cite
                      time="11:42"
                      topic="Co&#8209;founder Dynamics"
                      title="The risk&#8209;tolerance conversation"
                      src="/images/product-mocks/founderwell-poster1.jpg"
                    />
                    <Cite
                      time="18:07"
                      topic="Hard Conversations"
                      title="Reset without blowing it up"
                      src="/images/product-mocks/founderwell-poster2.jpg"
                    />
                    <Cite
                      time="23:55"
                      topic="Fundraising Strategy"
                      title="Why timing is a symptom"
                      src="/images/product-mocks/founderwell-poster3.jpg"
                    />
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
              <div className="illo illo-hrtu">
                <div className="illo-chrome">
                  <div className="illo-chrome-dot">&#9670;</div>
                  <div className="illo-chrome-title">HRT University</div>
                  <div className="illo-chrome-meta">
                    Module 4 &middot; Lesson 12
                  </div>
                </div>
                <div className="illo-player">
                  <img
                    className="illo-player-still"
                    src="/images/product-mocks/c2.jpg"
                    alt=""
                  />
                  <div className="illo-player-cc">
                    &ldquo;&mdash; which is why T3 monotherapy fails in roughly
                    a third of the patients we see.&rdquo;
                  </div>
                  <div className="illo-player-controls">
                    <div className="illo-player-btn">
                      <svg viewBox="0 0 10 10">
                        <rect
                          x="2"
                          y="1.5"
                          width="2"
                          height="7"
                          fill="currentColor"
                        />
                        <rect
                          x="6"
                          y="1.5"
                          width="2"
                          height="7"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="illo-player-time">3:42 / 24:08</div>
                    <div className="illo-player-btn">
                      <svg viewBox="0 0 10 10">
                        <path
                          d="M5 1 L8 5 L5 9 M2 1 L5 5 L2 9"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="illo-player-scrub">
                    <div className="illo-player-scrub-fill" />
                  </div>
                </div>
                <div className="illo-body illo-body-tight">
                  <div className="illo-user">
                    Wait, why does he recommend T3 combination therapy here?
                  </div>
                  <div className="illo-ai">
                    <div className="illo-ai-sender">Bold AI</div>
                    <div className="illo-ai-text">
                      At <em>3:42</em> Nico explains the reverse T3 issue
                      &mdash; T4 alone can convert inefficiently in some
                      patients, so he layers T3 to bypass the block.{" "}
                      <strong>Scoped to this lesson only.</strong>
                    </div>
                  </div>
                  <div className="illo-chips">
                    <span className="illo-chip illo-chip-solid">
                      &#9654; Jump to 3:42
                    </span>
                    <span className="illo-chip">Why not T4 first?</span>
                    <span className="illo-chip">Dosing protocol</span>
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
              <div className="illo illo-showthem">
                <div className="illo-chrome">
                  <div className="illo-chrome-dot">&#9670;</div>
                  <div className="illo-chrome-title">Show Them</div>
                  <div className="illo-chrome-meta">Landing page audit</div>
                </div>
                <div className="illo-body">
                  <div className="illo-upload-wrap">
                    <div className="illo-attach">
                      <div className="illo-attach-pdf">PNG</div>
                      <div className="illo-attach-info">
                        <div className="illo-attach-name">
                          relayd-landing-v2.png
                        </div>
                        <div className="illo-attach-size">
                          1.8 MB &middot; 2560 &times; 5840
                        </div>
                      </div>
                    </div>
                    <div className="illo-user illo-user-stack">
                      Can you audit my new hero against the Show Them framework?
                    </div>
                  </div>
                  <div className="illo-ai">
                    <div className="illo-ai-sender">Bold AI</div>
                    <div className="illo-ai-text">
                      <strong>
                        Your hero is telling, not showing.
                      </strong>{" "}
                      &ldquo;The fastest way to ship&rdquo; is a claim &mdash;
                      Rob&apos;s rule from Chapter 2 is to replace it with a
                      visual that <em>proves</em> it. Swap the stock shot for
                      a 6-second product demo loop, and move the testimonial
                      row above the fold before the primary CTA.
                    </div>
                  </div>
                  <div className="illo-cites">
                    <Cite
                      time="04:12"
                      topic="Ch. 2 · Why LPs Work"
                      title="Show, don&rsquo;t tell"
                      src="/images/product-mocks/showthem-poster1.jpg"
                    />
                    <Cite
                      time="08:47"
                      topic="Ch. 11 · Social Proof"
                      title="Testimonials above the fold"
                      src="/images/product-mocks/showthem-poster2.jpg"
                    />
                    <Cite
                      time="14:23"
                      topic="Ch. 16 · Product Demos"
                      title="The 6-second loop rule"
                      src="/images/product-mocks/showthem-poster3.jpg"
                    />
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
              <div className="illo illo-founderwell">
                <div className="illo-searchbar">
                  <svg width="14" height="14" viewBox="0 0 14 14">
                    <circle
                      cx="6"
                      cy="6"
                      r="4.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      fill="none"
                    />
                    <line
                      x1="9.2"
                      y1="9.2"
                      x2="12"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                  <div className="illo-search-q">
                    when you know the team needs to{" "}
                    <span className="illo-search-match">
                      hear hard news
                    </span>
                    &hellip;
                  </div>
                  <span className="illo-search-kbd">&#8984;K</span>
                </div>
                <div className="illo-results">
                  <div className="illo-result">
                    <div className="illo-result-thumb">
                      <img
                        src="/images/product-mocks/founderwell-poster5.png"
                        alt=""
                      />
                      <div className="illo-result-time">12:08</div>
                    </div>
                    <div>
                      <h5>Delivering Bad News to Your Team</h5>
                      <div className="illo-result-snip">
                        &ldquo;&hellip;you don&apos;t soften the message, you
                        soften the <em>delivery</em>. Lead with the
                        &lsquo;what,&rsquo; then the &lsquo;why,&rsquo; then
                        what you need from them &mdash; in that order.&rdquo;
                      </div>
                    </div>
                    <div className="illo-result-score">0.94</div>
                  </div>
                  <div className="illo-result">
                    <div className="illo-result-thumb">
                      <img
                        src="/images/product-mocks/founderwell-poster6.png"
                        alt=""
                      />
                      <div className="illo-result-time">07:32</div>
                    </div>
                    <div>
                      <h5>Transparency vs. Oversharing</h5>
                      <div className="illo-result-snip">
                        &ldquo;The question isn&apos;t whether to tell them.
                        It&apos;s what they need to{" "}
                        <em>act on the information</em> &mdash; versus what
                        just offloads your anxiety onto the team.&rdquo;
                      </div>
                    </div>
                    <div className="illo-result-score">0.91</div>
                  </div>
                  <div className="illo-result">
                    <div className="illo-result-thumb">
                      <img
                        src="/images/product-mocks/founderwell-poster7.png"
                        alt=""
                      />
                      <div className="illo-result-time">19:47</div>
                    </div>
                    <div>
                      <h5>All&#8209;Hands: When Runway Gets Short</h5>
                      <div className="illo-result-snip">
                        &ldquo;Name the constraint out loud. Teams can handle a{" "}
                        <em>hard truth</em> they can plan around &mdash; they
                        can&apos;t handle a vibe that something is off.&rdquo;
                      </div>
                    </div>
                    <div className="illo-result-score">0.88</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inline CTA after scenarios */}
        <section className="prod-inline-cta">
          <div className="container">
            <p>See Bold do this on your own library.</p>
            <a
              className="btn-primary"
              href="https://savvycal.com/marcel-from-bold/7838d613"
              rel="noreferrer"
              target="_blank"
            >
              Book a 30-min demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="btn-arrow"
              >
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
                    Calibrated to the member
                  </span>
                </div>
                <div className="prod-why-body">
                  <h3>It knows who&apos;s asking.</h3>
                  <p>
                    Beginners get foundations. Advanced members get
                    nuance. Same question in, different answer
                    out&nbsp;&mdash; calibrated to where the member
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
                    clickable. Members verify the source instead of
                    taking the AI&apos;s word for it.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Meet members anywhere — RESTRUCTURED: emotional lead first */}
        <section className="prod-ambient">
          <div className="container">
            <div className="sec-label">Meet members anywhere</div>
            <h2 className="prod-ambient-quote">
              Your coaching library becomes{" "}
              <em>ambient knowledge.</em>
            </h2>
            <p className="prod-ambient-sub">
              Not a destination members have to visit. A resource that shows
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
                  Your domain, your brand. We ship it on{" "}
                  <strong>Next.js&nbsp;+&nbsp;Sanity</strong>{" "}
                  by default&nbsp;&mdash; or fit into whatever stack you
                  already run.
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
                  MCP server ships day one. Members pull your library into
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
                  href="https://docs.boldvideo.com/"
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
              Built&#8209;in for the common tools. Webhooks and a REST API for
              everything else.
            </p>

            <div className="prod-int-grid">
              <article
                className="prod-int-card prod-int-zoom"
                style={{ ["--int" as string]: "#0B5CFF" }}
              >
                <div
                  className="prod-int-logo prod-int-logo-wordmark"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/integrations/zoom.png"
                    alt=""
                    width={1466}
                    height={334}
                  />
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
                <div
                  className="prod-int-logo prod-int-logo-wordmark"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/integrations/onedrive.svg"
                    alt=""
                    width={1000}
                    height={615}
                  />
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
                  Charge members without a course platform. Drop&#8209;in auth
                  and billing&nbsp;&mdash; our go&#8209;to pairing when we pull
                  programs off Kajabi.
                </p>
              </article>
            </div>

            <p className="prod-int-foot">
              Need something else?{" "}
              <Link href="https://docs.boldvideo.com/">
                Webhooks, REST API, and an MCP server
              </Link>{" "}
              cover the rest.
            </p>
          </div>
        </section>

        {/* Inline CTA after integrations */}
        <section className="prod-inline-cta">
          <div className="container">
            <p>
              Your stack&apos;s compatible. The next step is seeing it on your
              content.
            </p>
            <a
              className="btn-primary"
              href="https://savvycal.com/marcel-from-bold/7838d613"
              rel="noreferrer"
              target="_blank"
            >
              Book a 30-min demo
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="btn-arrow"
              >
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
                  <h3>Members start getting answers</h3>
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
