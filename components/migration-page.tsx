"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import "./landing-v10.css";

const ANNOUNCEMENT_MESSAGES = [
  "Growing out of Kajabi?",
  "Outgrowing Circle?",
  "Scaling past Teachable?",
];

const MIGRATION_STEPS = [
  {
    number: "01",
    title: "Tell us what you have",
    description:
      "A quick call. Walk us through what you are using today — Kajabi, Vimeo, Circle, Teachable, or a mix. We figure out the cleanest path forward.",
  },
  {
    number: "02",
    title: "We build it for you",
    description:
      "We set up your Bold experience, move your content, and make sure your members land somewhere better than where they started.",
  },
  {
    number: "03",
    title: "You flip the switch",
    description:
      "When it is ready, we are on the call with you. Member messaging, launch checks, and anything that comes up — we are there for it.",
  },
];

const CUSTOMER_STORIES = [
  {
    href: "https://founderwell.com",
    image: "/images/socialproof-founderwell.png",
    label: "FounderWell",
    category: "SaaS coaching",
    detail: "1,400 videos now searchable. Students find answers instead of filing support tickets.",
  },
  {
    href: "https://hrtuniversity.com",
    image: "/images/socialproof-hrtu.png",
    label: "HRT University",
    category: "Clinical education",
    detail: "97 clinical lessons. Practitioners get cited answers grounded in the curriculum.",
  },
  {
    href: "https://vivatuition.com",
    image: "/images/socialproof-vivatuition.png",
    label: "Viva Tuition",
    category: "Financial education",
    detail: "2,500 videos. Students find the exact explanation instead of rewatching entire modules.",
  },
];

const FAQ_ITEMS = [
  {
    question: "Do we have to move everything at once?",
    answer:
      "No. Most teams should not. We phase the move around the member experience first, then decide what stays, what follows later, and what never needed to move in the first place.",
  },
  {
    question: "Will our members notice the switch?",
    answer:
      "They will notice it got better. A good migration gives members a cleaner experience without making the switch feel chaotic. That is exactly what we are optimizing for.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most migrations are live within two weeks. It depends on library size and how many systems are involved, but we move fast and keep you updated every step.",
  },
  {
    question: "What do you need from us to get started?",
    answer:
      "A rough description of your current setup, the size of your library, and what is not working. That is enough. We take it from there.",
  },
];

export function MigrationPage() {
  const announcementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const announcement = announcementRef.current;
    if (!announcement) return;

    let index = 0;
    const intervalId = window.setInterval(() => {
      index = (index + 1) % ANNOUNCEMENT_MESSAGES.length;
      announcement.style.opacity = "0";
      window.setTimeout(() => {
        announcement.textContent = ANNOUNCEMENT_MESSAGES[index];
        announcement.style.opacity = "1";
      }, 300);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="landing-v10 migration-v11" id="main-content">
      <div className="announce">
        <strong ref={announcementRef}>Growing out of Kajabi?</strong>
        <div className="sep" />
        <a href="#how">See how the switch works &rarr;</a>
      </div>

      <nav aria-label="Main navigation">
        <div className="nav-inner">
          <Link className="nav-logo" href="/" aria-label="Bold — Home">
            <svg
              width="94"
              height="26"
              viewBox="0 0 2446 670"
              fill="none"
            >
              <path
                d="M1852.5076,670 L1852.5076,669.887695 C1852.5076,527.853176 1852.5076,314.801396 1852.5076,30.7323566 C1852.5076,30.7323566 1977.5565,14.8363101 2114.2625,14.8363101 C2390.85371,14.8363101 2445.96,207.708341 2445.96,379.385643 C2445.96,483.357525 2414.91214,594.306455 2343.80949,670 L1852.5076,670 Z"
                fill="var(--mint)"
              />
              <path
                d="M1811.81187,670 L1308.38511,670 C1278.09393,628.203566 1262.20497,569.947745 1262.20497,490.657969 L1262.20497,21.1947287 L1680.80086,21.1947287 L1680.80086,464.164558 L1806.90949,456.746403 L1811.81187,670 Z"
                fill="var(--mint)"
              />
              <path
                d="M1139.30733,670 L679.041861,670 C614.793443,602.542428 577.585794,499.840245 577.585794,366.668806 C577.585794,143.064418 719.590476,0 911.40277,0 C1106.39427,0 1240.9808,143.064418 1240.9808,366.668806 C1240.9808,499.840245 1203.1872,602.542428 1139.30733,670 Z"
                fill="var(--mint)"
              />
              <path
                d="M0,670 L0,21.1947287 L326.398821,21.1947287 C467.343767,21.1947287 527.748744,95.376279 527.748744,185.453876 C527.748744,256.456217 505.494279,310.502775 458.865876,345.474077 C537.286372,366.668806 575.436883,440.850356 575.436883,527.748744 C575.436883,578.439587 564.798901,630.120011 529.896194,670 L0,670 Z"
                fill="var(--mint)"
              />
            </svg>
          </Link>
          <div className="nav-right">
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
            <a href="/docs">Docs</a>
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
          <div className="hero-eyebrow">Migration</div>
          <h1>
            We handle the move.{" "}
            <span className="u">You keep coaching.</span>
          </h1>
          <p className="hero-sub">
            Switching platforms feels like a massive project. It does not have
            to be. Tell us what you have, and we take it from there —
            personally, start to finish.
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
            <a className="btn-ghost" href="#how">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section className="migration-steps container" id="how">
        <div className="sec-label">How it works</div>
        <h2 className="section-title">Three steps. We do the heavy lifting.</h2>
        <p className="sec-sub">
          Kajabi, Vimeo, Circle, Teachable, or a stack that needs a whiteboard
          to explain. We have seen it. We handle it.
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
          <span className="migration-handled-label">Founder-led</span>
          <p>
            You work directly with the founder. No support queue, no
            onboarding specialist reading from a script.
          </p>
        </div>
      </section>

      <section className="showcase container">
        <div className="showcase-head">
          <h2>They already made the switch</h2>
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
        <h2 className="section-title">Common questions about the switch</h2>
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
          <h2>Ready to stop dreading the switch?</h2>
          <p>
            Tell us what you have. We will show you how simple the move can be.
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
                Video intelligence for coaching programs. Turn your library
                into an AI coach that cites the moment that matters.
              </p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/docs">Docs</Link>
              <Link href="/migrate">Migrate</Link>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
          <div className="footer-bot">
            <span>&copy; 2026 Bold Video</span>
            <div>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
