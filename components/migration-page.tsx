"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./landing-v10.css";

const ANNOUNCEMENT_MESSAGES = [
  "Migrating off Kajabi?",
  "Moving on from Vimeo?",
  "Untangling Circle + Teachable?",
];

const FROM_PLATFORMS = [
  {
    name: "Kajabi",
    type: "All-in-one",
    description:
      "Strong business engine. The learning experience starts to feel boxed in.",
    toneClassName: "from-card-mint",
  },
  {
    name: "Vimeo",
    type: "Video hosting",
    description:
      "Clean delivery. Members still need better search, guidance, and context.",
    toneClassName: "from-card-blue",
  },
  {
    name: "Circle",
    type: "Community",
    description:
      "Conversation works. Learning still ends up split across too many surfaces.",
    toneClassName: "",
  },
  {
    name: "Teachable",
    type: "Course delivery",
    description:
      "The structure is there. The depth and discoverability start to wear thin.",
    toneClassName: "from-card-warm",
  },
];

const MIGRATION_STEPS = [
  {
    number: "01",
    title: "Map the real stack",
    description:
      "What lives where today, what members actually touch, and what should stay put for now.",
  },
  {
    number: "02",
    title: "Build the cleaner version",
    description:
      "Set up the Bold experience first so the move improves something real instead of just relocating the mess.",
  },
  {
    number: "03",
    title: "Cut over with support",
    description:
      "Member messaging, launch checks, and the practical cleanup that makes the migration feel finished.",
  },
];

const CUSTOMER_STORIES = [
  {
    href: "https://founderwell.com",
    image: "/images/socialproof-founderwell.png",
    label: "FounderWell",
    category: "SaaS coaching",
    detail:
      "A deep coaching library that now feels closer to a searchable system than a pile of lessons.",
  },
  {
    href: "https://hrtuniversity.com",
    image: "/images/socialproof-hrtu.png",
    label: "HRT University",
    category: "Clinical education",
    detail:
      "97+ clinical lessons structured into a cited assistant for licensed healthcare providers.",
  },
  {
    href: "https://vivatuition.com",
    image: "/images/socialproof-vivatuition.png",
    label: "Viva Tuition",
    category: "Financial education",
    detail:
      "A large tuition library that can route students to the exact explanation instead of another support thread.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Do we have to move everything at once?",
    answer:
      "No. Many teams should not. We can phase the move around the member experience first, then decide what stays, what follows later, and what never needed to move in the first place.",
  },
  {
    question: "What if we are still heavily on Kajabi?",
    answer:
      "That is common. We map what Kajabi is doing for you today, then decide what Bold should replace versus what should stay during a staged transition.",
  },
  {
    question: "What if Vimeo is the main system right now?",
    answer:
      "Then the conversation is usually less about hosting and more about what happens around the videos: search, retrieval, support load, and how members actually find the right lesson fast.",
  },
  {
    question: "Will members feel like they are starting over?",
    answer:
      "That is the exact feeling we are trying to avoid. A good migration gives members a cleaner experience without making the switch feel chaotic.",
  },
  {
    question: "Can you help us clean up the library while we move?",
    answer:
      "Yes. We treat migration as both a transfer and a cleanup pass. Moving a messy library into a new tool without improving the structure would miss the point.",
  },
  {
    question: "What do you need from us before a call?",
    answer:
      "A rough description of the current stack, the size of the library, and what is breaking down operationally is enough to start. We can work from there.",
  },
];

export function MigrationPage() {
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAnnouncementIndex((current) => (current + 1) % ANNOUNCEMENT_MESSAGES.length);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="landing-v10 migration-v11" id="main-content">
      <div className="announce">
        <strong>{ANNOUNCEMENT_MESSAGES[announcementIndex]}</strong>
        <div className="sep" />
        <a href="#faq">Read the migration FAQs &rarr;</a>
      </div>

      <nav aria-label="Main navigation">
        <div className="nav-inner">
          <Link className="nav-logo" href="/" aria-label="Bold — Home">
            <svg width="26" height="26" viewBox="0 0 512 512" fill="none">
              <path
                clipRule="evenodd"
                d="m27 512v-512h260.196c112.402 0 160.451 58.6113 160.451 129.54 0 70.927-17.805 98.746-54.914 126.354 62.421 16.777 92.881 75.175 92.881 143.768 0 68.592-8.58 80.696-36.251 112.338z"
                fill="#41C6A6"
                fillRule="evenodd"
              />
            </svg>
          </Link>
          <div className="nav-right">
            <a href="#from">From where</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQs</a>
            <a
              className="nav-cta"
              href="https://savvycal.com/marcel-from-bold/7838d613"
              rel="noreferrer"
              target="_blank"
            >
              Book the switch call
            </a>
          </div>
        </div>
      </nav>

      <section className="migration-hero container">
        <div className="migration-hero-inner">
          <div className="hero-eyebrow">Migration to Bold</div>
          <h1>
            Move to Bold <span className="u">without starting over</span>
          </h1>
          <p className="hero-sub">
            If you are on Kajabi, Vimeo, Circle, Teachable, or a stack nobody
            can explain in one sentence, the move should feel like
            simplification, not a rebuild. We handle it with you personally.
          </p>
          <div className="hero-actions">
            <a
              className="btn-mint"
              href="https://savvycal.com/marcel-from-bold/7838d613"
              rel="noreferrer"
              target="_blank"
            >
              Book the switch call
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
            <a className="btn-ghost" href="#from">
              See where teams come from
            </a>
          </div>
        </div>

        <div className="migration-flow" id="from">
          <div className="migration-flow-head">
            <div className="migration-flow-label">Common starting points</div>
            <div className="migration-flow-label">What members get after the move</div>
          </div>

          <div className="migration-flow-grid">
            <div className="migration-from-grid">
              {FROM_PLATFORMS.map((platform) => (
                <article
                  className={`migration-from-card ${platform.toneClassName}`}
                  key={platform.name}
                >
                  <div className="migration-from-name">{platform.name}</div>
                  <div className="migration-from-type">{platform.type}</div>
                  <p>{platform.description}</p>
                </article>
              ))}
            </div>

            <div className="migration-to-card">
              <div className="migration-to-wordmark">Bold</div>
              <div className="migration-to-list">
                <div>Searchable library</div>
                <div>Cited answers</div>
                <div>Cleaner member experience</div>
                <div>Less support repetition</div>
              </div>
              <div className="migration-to-note">
                Same teaching. Better access to it.
              </div>
            </div>
          </div>

          <div className="migration-flow-foot">
            We map the real stack, build the cleaner version, and stay close to
            the cutover while it is happening.
          </div>
        </div>
      </section>

      <section className="migration-steps container" id="how">
        <div className="sec-label">How it works</div>
        <h2 className="section-title">Keep the move simple</h2>
        <p className="sec-sub">
          It does not need to be more dramatic than this.
        </p>

        <div className="migration-steps-grid">
          {MIGRATION_STEPS.map((step) => (
            <article className="migration-step-card" key={step.number}>
              <div className="migration-step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="migration-handled">
          <span className="migration-handled-label">Founder-led handoff</span>
          <p>
            You are not getting tossed into a generic queue and told to figure
            it out from docs.
          </p>
        </div>
      </section>

      <section className="showcase container">
        <div className="showcase-head">
          <h2>Already live on Bold</h2>
        </div>
        <div className="showcase-grid">
          {CUSTOMER_STORIES.map((story) => (
            <a
              className="sc-card"
              href={story.href}
              key={story.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="sc-screen">
                <img alt={story.label} className="sc-img" src={story.image} />
                <div className="sc-label">{story.category}</div>
              </div>
              <div className="sc-info migration-proof-copy">
                <h4>{story.label}</h4>
                <p>{story.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="migration-faq container" id="faq">
        <div className="sec-label">FAQs</div>
        <h2 className="section-title">Straight answers for the switch</h2>
        <div className="faq-list-simple">
          {FAQ_ITEMS.map((item) => (
            <details className="faq-row" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-plus">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Bring us your stack. We will show you the clean move.</h2>
          <p>
            Kajabi. Vimeo. Circle. Teachable. Or a stack that needs a whiteboard
            before it makes sense. All fair game.
          </p>
          <a
            className="btn-cta"
            href="https://savvycal.com/marcel-from-bold/7838d613"
            rel="noreferrer"
            target="_blank"
          >
            Book the switch call
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
      </section>

      <footer>
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                <svg
                  width="100"
                  height="28"
                  viewBox="0 0 2446 670"
                  fill="none"
                >
                  <path
                    d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z"
                    fill="white"
                  />
                  <path
                    d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z"
                    fill="white"
                  />
                  <path
                    d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z"
                    fill="white"
                  />
                  <path
                    d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="footer-tl">
                Video intelligence for coaching programs. Turn your library into
                an AI coach that cites the moment that matters.
              </p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <Link href="/#how-it-works">Why Bold</Link>
              <Link href="/#customers">Customer examples</Link>
              <Link href="/#fit">Program fit</Link>
              <Link href="/migrate">Migration help</Link>
            </div>
            <div className="footer-col">
              <h4>Compare</h4>
              <Link href="/vs-youtube">Bold vs YouTube</Link>
              <Link href="/vs-vimeo">Bold vs Vimeo</Link>
              <a
                href="https://savvycal.com/marcel-from-bold/7838d613"
                rel="noreferrer"
                target="_blank"
              >
                Book a demo
              </a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="mailto:support@boldvideo.com">Contact</a>
            </div>
          </div>
          <div className="footer-bot">
            <span>&copy; 2026 Bold Video</span>
            <div>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <a href="mailto:support@boldvideo.com">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
