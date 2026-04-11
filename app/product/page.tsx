import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav, SiteNavFooter } from "@/components/site-nav";
import { CtaSection } from "@/components/cta-section";
import "./product.css";
import "@/components/landing-v10.css";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Bold hosts your video library and makes every lesson searchable by concept. An AI assistant answers student questions with cited timestamps from your actual teaching.",
};

const PIPELINE_STEPS = [
  {
    number: "01",
    title: "Move your library to Bold",
    description:
      "Upload your existing videos, connect Zoom for automatic recording imports, or sync from Google Drive and OneDrive. Bold becomes the home for all your video content.",
  },
  {
    number: "02",
    title: "Transcribe and analyze",
    description:
      "Bold generates a high-accuracy transcript and deeply analyzes what\u2019s being taught \u2014 concepts, topics, structure \u2014 so it can answer questions accurately later.",
  },
  {
    number: "03",
    title: "Index everything",
    description:
      "Your entire library becomes searchable by concept, not just keyword. PDFs, worksheets, and frameworks are indexed alongside the videos they belong to.",
  },
  {
    number: "04",
    title: "Students ask, Bold answers",
    description:
      "Your AI assistant draws from the indexed library to answer questions with cited video clips and timestamps. Students verify and go deeper.",
  },
];

const AI_COACH_FEATURES = [
  {
    title: "Cited answers",
    description:
      "Every response includes video clips with start timestamps. Students click and watch the source.",
  },
  {
    title: "Viewer-aware responses",
    description:
      "The AI calibrates depth to the student\u2019s stage, role, and progress. Beginners get foundations. Advanced students get tactical detail.",
  },
  {
    title: "Conversation memory",
    description:
      "Students pick up where they left off. Every conversation is titled automatically and persisted across sessions.",
  },
  {
    title: "Video-scoped chat",
    description:
      "Students can chat about a specific video while watching it. Questions stay scoped to that lesson\u2019s content.",
  },
  {
    title: "Configurable persona",
    description:
      "The AI assistant speaks in whatever voice fits your brand. First person as the founder, neutral assistant, or anything in between.",
  },
];

const SEARCH_FEATURES = [
  {
    title: "Concept-based search",
    description:
      "Understands meaning, not just keywords. Finds conceptually related content across your entire library.",
  },
  {
    title: "Jump-to-time",
    description:
      "Every result links to the precise timestamp. No scrubbing through hour-long recordings.",
  },
  {
    title: "Transcript search",
    description:
      "Full-text search across every transcript with highlighted matches and surrounding context.",
  },
  {
    title: "File search",
    description:
      "PDFs, worksheets, and slides attached to videos are indexed and searchable alongside the video content.",
  },
  {
    title: "Filtered by collection",
    description:
      "Students can narrow results to a specific course, module, or playlist.",
  },
];

export default function ProductPage() {
  return (
    <div className="landing-v10">
      <div className="announce">
        <strong>Growing out of Kajabi?</strong>
        <div className="sep" />
        <a href="/migrate">See how to migrate &rarr;</a>
      </div>

      <SiteNav />

      <main className="product-page">
        {/* Hero */}
        <section className="prod-hero">
          <div className="prod-container">
            <div className="prod-label">Product</div>
            <h1>
              Your entire video library. Hosted, searchable, and intelligent.
            </h1>
            <p className="prod-hero-body">
              Bold hosts your video library and makes every lesson searchable by
              concept, not keyword. Then it powers an AI assistant that answers
              student questions with cited timestamps from your actual teaching.
            </p>
            <p className="prod-hero-diff">
              Not a course platform. Not a membership tool. The video layer that
              makes your content work.
            </p>
            <div className="prod-hero-ctas">
              <a
                className="prod-cta-primary"
                href="https://savvycal.com/marcel-from-bold/7838d613"
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
              <Link href="https://docs.boldvideo.com/" className="prod-cta-ghost">
                Read the docs
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 2l5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="prod-pipeline">
          <div className="prod-container">
            <div className="prod-label">How it works</div>
            <h2>From upload to answers in minutes</h2>
            <p className="prod-section-sub">
              Every video goes through a four-stage pipeline. You upload. Bold
              does the rest.
            </p>
            <div className="pipeline-grid">
              {PIPELINE_STEPS.map((step, i) => (
                <div key={step.number} className="pipeline-step">
                  <div className="pipeline-num">{step.number}</div>
                  <div className="pipeline-connector" aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Coach */}
        <section className="prod-capability">
          <div className="prod-container">
            <div className="cap-layout">
              <div className="cap-copy">
                <div className="prod-label">AI Coach</div>
                <h2>An assistant that teaches from your curriculum</h2>
                <p className="cap-body">
                  Students ask a question in natural language and get an answer
                  synthesized from your video library. Not a chatbot guessing
                  from the internet. An assistant grounded in your actual
                  teaching, with timestamped citations so students can verify
                  every claim.
                </p>
                <div className="cap-features">
                  {AI_COACH_FEATURES.map((f) => (
                    <div key={f.title} className="cap-feature">
                      <h4>{f.title}</h4>
                      <p>{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cap-visual">
                <div className="mock-chat">
                  <div className="mock-chat-header">
                    <div className="mock-av">B</div>
                    <div>
                      <div className="mock-title">Ask Bold</div>
                      <div className="mock-meta">1,400 videos</div>
                    </div>
                  </div>
                  <div className="mock-chat-body">
                    <div className="mock-bubble mock-user">How should I handle pricing for a new HRT clinic?</div>
                    <div className="mock-bubble mock-ai">
                      <p>Two frameworks apply here. Anchor on patient outcomes, not medication cost. If your protocol delivers measurable results, a $200/month concierge model positions you as premium, not expensive.</p>
                      <div className="mock-citations">
                        <span className="mock-cite">Pricing Strategy <em>14:23</em></span>
                        <span className="mock-cite">Clinic Operations <em>08:47</em></span>
                        <span className="mock-cite">Business Models <em>32:10</em></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="prod-capability prod-capability-alt">
          <div className="prod-container">
            <div className="cap-layout cap-layout-reverse">
              <div className="cap-copy">
                <div className="prod-label">Search</div>
                <h2>
                  Students find answers even when they don&apos;t know what to
                  search for
                </h2>
                <p className="cap-body">
                  Bold search understands concepts, not just keywords. When a
                  student searches &ldquo;how to handle a difficult client
                  conversation,&rdquo; Bold finds the lesson on conflict
                  resolution even if those exact words are never spoken.
                </p>
                <div className="cap-features">
                  {SEARCH_FEATURES.map((f) => (
                    <div key={f.title} className="cap-feature">
                      <h4>{f.title}</h4>
                      <p>{f.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cap-visual">
                <div className="mock-search">
                  <div className="mock-search-bar">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    <span>how to handle a difficult client conversation</span>
                  </div>
                  <div className="mock-results">
                    <div className="mock-result">
                      <div className="mock-result-head">
                        <strong>Conflict Resolution Framework</strong>
                        <span className="mock-ts">23:15</span>
                      </div>
                      <p>...the key is to reframe the conversation around shared goals. When emotions run high, acknowledge first, then redirect...</p>
                    </div>
                    <div className="mock-result">
                      <div className="mock-result-head">
                        <strong>Client Retention Strategies</strong>
                        <span className="mock-ts">11:42</span>
                      </div>
                      <p>...difficult conversations are retention opportunities. The providers who lean in here are the ones who keep clients longest...</p>
                    </div>
                    <div className="mock-result">
                      <div className="mock-result-head">
                        <strong>Q&amp;A Session: Patient Communication</strong>
                        <span className="mock-ts">47:08</span>
                      </div>
                      <p>...I always tell my students: lead with empathy, follow with data. That combination disarms almost any situation...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Developer callout */}
        <section className="prod-dev-callout">
          <div className="prod-container">
            <div className="dev-callout-inner">
              <div className="dev-copy">
                <div className="dev-tag">
                  <span className="dev-tag-dot" />
                  For developers
                </div>
                <h3>
                  Headless by design.<br />
                  Build whatever you want.
                </h3>
                <p>
                  Full REST API. Next.js starter kit. JavaScript SDK. Webhooks.
                  MCP server for AI assistants. Embed the AI coach, search, or
                  video player anywhere.
                </p>
                <Link href="https://docs.boldvideo.com/" className="dev-docs-link">
                  Read the docs
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5 2l5 5-5 5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </Link>
              </div>
              <div className="dev-code">
                <div className="dev-code-bar">
                  <span className="dev-code-dot" />
                  <span className="dev-code-dot" />
                  <span className="dev-code-dot" />
                  <span className="dev-code-file">ask.ts</span>
                </div>
                <pre><code><span className="ck">import</span> {"{"} <span className="cv">Bold</span> {"}"} <span className="ck">from</span> <span className="cs">&apos;@boldvideo/bold-js&apos;</span>{"\n"}{"\n"}<span className="ck">const</span> <span className="cv">bold</span> = <span className="ck">new</span> <span className="cf">Bold</span>(<span className="cs">&apos;sk_live_...&apos;</span>){"\n"}{"\n"}<span className="ck">const</span> <span className="cv">answer</span> = <span className="ck">await</span> <span className="cv">bold</span>.<span className="cf">ask</span>({"{"}{"\n"}{"  "}question: <span className="cs">&apos;How should I price a SaaS product?&apos;</span>,{"\n"}{"  "}collection: <span className="cs">&apos;founder-playbook&apos;</span>{"\n"}{"}"}){"\n"}{"\n"}<span className="cc">{"// "}{"{"}answer.text, answer.citations[0].timestamp{"}"}</span></code></pre>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CtaSection
        heading="See Bold on your content"
        description="The best way to understand Bold is to see it working on your actual library. Book a 30-minute demo."
      />

      <SiteNavFooter />
    </div>
  );
}
