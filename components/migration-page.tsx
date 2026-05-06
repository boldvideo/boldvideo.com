"use client";

import { useEffect, useRef } from "react";
import { announcementMessages } from "@/lib/site-content";
import { ArrowIcon } from "./arrow-icon";
import { CtaSection } from "./cta-section";
import { SiteNav, SiteNavFooter } from "./site-nav";
import "./landing-v10.css";

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
    detail:
      "1,400 videos now searchable. Students find answers instead of filing support tickets.",
  },
  {
    href: "https://hrtuniversity.com",
    image: "/images/socialproof-hrtu.png",
    label: "HRT University",
    category: "Clinical education",
    detail:
      "97 clinical lessons. Practitioners get cited answers grounded in the curriculum.",
  },
  {
    href: "https://vivatuition.com",
    image: "/images/socialproof-vivatuition.png",
    label: "Viva Tuition",
    category: "Financial education",
    detail:
      "2,500 videos. Students find the exact explanation instead of rewatching entire modules.",
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

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const HOWTO_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to migrate to Bold from Kajabi, Vimeo, Circle, or Teachable",
  description:
    "A three-step process where Bold's team handles the platform switch personally, from auditing the existing stack to going live with members.",
  totalTime: "P14D",
  step: MIGRATION_STEPS.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
    url: `https://www.boldvideo.com/migrate#step-${step.number}`,
  })),
};

export function MigrationPage() {
  const announcementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const announcement = announcementRef.current;
    if (!announcement) return;

    let index = 0;
    const intervalId = window.setInterval(() => {
      index = (index + 1) % announcementMessages.length;
      announcement.style.opacity = "0";
      window.setTimeout(() => {
        announcement.textContent = announcementMessages[index];
        announcement.style.opacity = "1";
      }, 300);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="landing-v10 migration-v11" id="main-content">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOWTO_SCHEMA) }}
      />
      <div className="announce">
        <strong ref={announcementRef}>Growing out of Kajabi?</strong>
        <div className="sep" />
        <a href="#how">See how the switch works &rarr;</a>
      </div>

      <SiteNav cta="Book the switch call" />

      <section className="migration-hero container">
        <div className="migration-hero-inner">
          <div className="hero-eyebrow">Migration</div>
          <h1>
            We handle the move. <span className="u">You keep coaching.</span>
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
              <ArrowIcon />
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
            <article
              className="migration-step-card"
              id={`step-${step.number}`}
              key={step.number}
            >
              <div className="migration-step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="migration-handled">
          <span className="migration-handled-label">Founder-led</span>
          <p>
            You work directly with the founder. No support queue, no onboarding
            specialist reading from a script.
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
                <h3>{story.label}</h3>
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

      <CtaSection
        heading="Ready to stop dreading the switch?"
        description="Tell us what you have. We will show you how simple the move can be."
        buttonText="Book the switch call"
      />

      <SiteNavFooter />
    </main>
  );
}
