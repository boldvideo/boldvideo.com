"use client";

import { useEffect, useRef } from "react";
import { customerScenarios } from "@/lib/customer-scenarios";
import { announcementMessages } from "@/lib/site-content";
import { ArrowIcon } from "./arrow-icon";
import { CtaSection } from "./cta-section";
import { SiteNav, SiteNavFooter } from "./site-nav";
import "./landing-v10.css";

type ChatStep =
  | { t: "u"; x: string }
  | { t: "c"; x: string }
  | { t: "a"; x: string }
  | { t: "s"; items: { n: string; ts: string }[] };

const CUSTOMER_SCENARIOS = customerScenarios.map((scenario) => ({
  customer: scenario.customer,
  steps: [
    { t: "u" as const, x: scenario.question },
    { t: "c" as const, x: scenario.context },
    { t: "a" as const, x: scenario.answerHtml },
    {
      t: "s" as const,
      items: scenario.citations.map((c) => ({
        n: c.title,
        ts: c.timestamp,
      })),
    },
  ] satisfies ChatStep[],
}));

function renderPartialHtml(html: string, chars: number) {
  let result = "";
  let visible = 0;
  let insideTag = false;

  for (let index = 0; index < html.length; index += 1) {
    const char = html[index];
    if (char === "<") {
      insideTag = true;
      result += char;
      continue;
    }
    if (char === ">") {
      insideTag = false;
      result += char;
      continue;
    }
    if (insideTag) {
      result += char;
      continue;
    }
    if (visible >= chars) {
      break;
    }
    result += char;
    visible += 1;
  }

  return result;
}

function plainLength(html: string) {
  let count = 0;
  let insideTag = false;

  for (let index = 0; index < html.length; index += 1) {
    const char = html[index];
    if (char === "<") {
      insideTag = true;
      continue;
    }
    if (char === ">") {
      insideTag = false;
      continue;
    }
    if (!insideTag) {
      count += 1;
    }
  }

  return count;
}

export function HomePage() {
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const announcementRef = useRef<HTMLElement | null>(null);
  const chatAvRef = useRef<HTMLDivElement | null>(null);
  const chatTitleRef = useRef<HTMLDivElement | null>(null);
  const chatCountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chatBody = chatBodyRef.current;
    const announcement = announcementRef.current;
    if (!chatBody) return;

    let scenarioIndex = 0;
    const timeoutIds: number[] = [];
    const intervalIds: number[] = [];

    if (announcement) {
      let announcementIndex = 0;
      const announcementInterval = window.setInterval(() => {
        announcementIndex =
          (announcementIndex + 1) % announcementMessages.length;
        announcement.style.opacity = "0";
        window.setTimeout(() => {
          announcement.textContent = announcementMessages[announcementIndex];
          announcement.style.opacity = "1";
        }, 300);
      }, 4000);
      intervalIds.push(announcementInterval);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const clearScenarioTimers = () => {
      timeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });
      timeoutIds.length = 0;
    };

    const runScenario = () => {
      clearScenarioTimers();
      chatBody.innerHTML = "";
      const scenario = CUSTOMER_SCENARIOS[scenarioIndex];
      const { customer, steps } = scenario;
      scenarioIndex = (scenarioIndex + 1) % CUSTOMER_SCENARIOS.length;

      const av = chatAvRef.current;
      const titleEl = chatTitleRef.current;
      const countEl = chatCountRef.current;
      if (av) {
        av.innerHTML = '<img src="' + customer.icon + '" alt="" />';
        av.style.cssText = "";
      }
      if (titleEl) {
        titleEl.textContent = customer.title;
      }
      if (countEl) {
        countEl.innerHTML = '<span class="dot"></span>' + customer.count;
      }

      let stepIndex = 0;

      const next = () => {
        if (stepIndex >= steps.length) {
          timeoutIds.push(window.setTimeout(runScenario, 3000));
          return;
        }

        const step = steps[stepIndex] as ChatStep;
        stepIndex += 1;

        if (step.t === "u") {
          const bubble = document.createElement("div");
          bubble.className = "cm user";
          bubble.textContent = step.x;
          bubble.style.animationDelay = "0.1s";
          chatBody.appendChild(bubble);
          timeoutIds.push(window.setTimeout(next, 300));
          return;
        }

        if (step.t === "c") {
          const wrap = document.createElement("div");
          wrap.className = "cm ai";
          wrap.style.animationDelay = "0.1s";

          const tag = document.createElement("div");
          tag.className = "ctag";
          tag.dataset.tooltip =
            "A beginner asking this same question gets a simpler, step-by-step answer";
          tag.innerHTML =
            '<svg width="8" height="8" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1"/><circle cx="5" cy="5" r="1.5" fill="currentColor"/></svg> ' +
            step.x;

          const dots = document.createElement("div");
          dots.className = "td";
          dots.innerHTML = "<span></span><span></span><span></span>";

          wrap.appendChild(tag);
          wrap.appendChild(dots);
          chatBody.appendChild(wrap);

          timeoutIds.push(
            window.setTimeout(() => {
              dots.remove();
              next();
            }, 500),
          );
          return;
        }

        if (step.t === "a") {
          const wrap = document.createElement("div");
          wrap.className = "cm ai";
          wrap.style.animationDelay = "0.05s";

          const label = document.createElement("div");
          label.className = "lb";
          label.textContent = "Bold AI";

          const content = document.createElement("div");
          content.className = "ct";

          wrap.appendChild(label);
          wrap.appendChild(content);
          chatBody.appendChild(wrap);

          const totalChars = plainLength(step.x);
          let visibleChars = 0;

          const type = () => {
            if (visibleChars <= totalChars) {
              content.innerHTML = renderPartialHtml(step.x, visibleChars);
              visibleChars += 3;
              timeoutIds.push(window.setTimeout(type, 8));
              return;
            }

            content.innerHTML = step.x;
            timeoutIds.push(window.setTimeout(next, 150));
          };

          type();
          return;
        }

        if (step.t === "s") {
          const citations = document.createElement("div");
          citations.className = "cites";

          step.items.forEach((item, index) => {
            const citation = document.createElement("div");
            citation.className = "cite";
            citation.innerHTML =
              '<div class="pl"><svg viewBox="0 0 8 8" fill="none"><polygon points="2,1 7,4 2,7" fill="currentColor"/></svg></div><span class="ts">' +
              item.ts +
              "</span>" +
              item.n;
            citation.style.animation = `landing-ci 0.25s ease ${index * 0.1}s forwards`;
            citations.appendChild(citation);
          });

          const aiMessages = chatBody.querySelectorAll(".cm.ai");
          const target = aiMessages[aiMessages.length - 1];
          if (target) {
            target.appendChild(citations);
          }

          timeoutIds.push(window.setTimeout(next, 2200));
        }
      };

      timeoutIds.push(window.setTimeout(next, 300));
    };

    timeoutIds.push(window.setTimeout(runScenario, 500));

    // Easter egg: let visitors try the chat
    let eggCount = 0;
    let eggBusy = false;
    const eggInput = chatBody.parentElement?.querySelector("input");
    const eggBtn = chatBody.parentElement?.querySelector("button");

    const eggSubmit = () => {
      if (!eggInput || !eggInput.value.trim() || eggBusy) return;
      const msg = eggInput.value.trim();
      eggInput.value = "";
      eggBusy = true;
      eggCount++;

      clearScenarioTimers();

      const av = chatAvRef.current;
      const titleEl = chatTitleRef.current;
      const countEl = chatCountRef.current;
      if (av) {
        av.textContent = "B";
        av.style.background = "#41C6A6";
        av.style.color = "white";
      }
      if (titleEl) titleEl.textContent = "Ask Bold";
      if (countEl) countEl.innerHTML = '<span class="dot"></span>beta';

      chatBody.innerHTML = "";

      const bubble = document.createElement("div");
      bubble.className = "cm user";
      bubble.textContent = msg;
      bubble.style.animationDelay = "0.1s";
      chatBody.appendChild(bubble);

      timeoutIds.push(
        window.setTimeout(() => {
          const wrap = document.createElement("div");
          wrap.className = "cm ai";
          wrap.style.animationDelay = "0.1s";

          const tag = document.createElement("div");
          tag.className = "ctag";
          tag.dataset.tooltip =
            "A beginner asking this same question gets a simpler, step-by-step answer";
          tag.innerHTML =
            '<svg width="8" height="8" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1"/><circle cx="5" cy="5" r="1.5" fill="currentColor"/></svg> visitor · exploring Bold';

          const dots = document.createElement("div");
          dots.className = "td";
          dots.innerHTML = "<span></span><span></span><span></span>";

          wrap.appendChild(tag);
          wrap.appendChild(dots);
          chatBody.appendChild(wrap);

          timeoutIds.push(
            window.setTimeout(() => {
              dots.remove();

              const label = document.createElement("div");
              label.className = "lb";
              label.textContent = "Bold AI";

              const content = document.createElement("div");
              content.className = "ct";

              let html: string;
              if (eggCount === 1) {
                const aboutBold =
                  /bold|how|what|work|price|cost|feature|demo|do you/i.test(
                    msg,
                  );
                html = aboutBold
                  ? "<strong>Bold turns your video library into an always-on teaching assistant.</strong> Every video is deeply understood — not just transcribed — so students get cited answers grounded in your curriculum. Each answer links back to the exact timestamp so they can verify and go deeper."
                  : "<strong>In a real Bold library, I'd search your entire video curriculum to answer this.</strong> I'd find the exact lessons and timestamps where your content addresses this — then cite my sources so students can verify and go deeper.";
              } else if (eggCount === 2) {
                html =
                  "<strong>You're getting the idea.</strong> Imagine your students having this 24/7. No more repeat questions, no more content going unwatched. Every lesson becomes discoverable the moment someone needs it.";
              } else {
                html =
                  "<strong>Ready to see this with your content?</strong> We can index your existing video library and have your AI assistant live within a week.";
              }

              wrap.appendChild(label);
              wrap.appendChild(content);

              const total = plainLength(html);
              let chars = 0;
              const typeEgg = () => {
                if (chars <= total) {
                  content.innerHTML = renderPartialHtml(html, chars);
                  chars += 3;
                  timeoutIds.push(window.setTimeout(typeEgg, 8));
                  return;
                }
                content.innerHTML = html;

                timeoutIds.push(
                  window.setTimeout(() => {
                    const cites = document.createElement("div");
                    cites.className = "cites";

                    const link = document.createElement("a");
                    link.className = "cite";
                    link.href =
                      "https://savvycal.com/marcel-from-bold/7838d613";
                    link.style.cssText =
                      "cursor:pointer;border-color:var(--mint);animation:landing-ci 0.25s ease forwards;text-decoration:none;";
                    link.innerHTML =
                      '<div class="pl"><svg viewBox="0 0 8 8" fill="none"><polygon points="2,1 7,4 2,7" fill="currentColor"/></svg></div>Book a demo';

                    cites.appendChild(link);
                    wrap.appendChild(cites);
                    eggBusy = false;
                  }, 300),
                );
              };
              typeEgg();
            }, 500),
          );
        }, 300),
      );
    };

    const onEggKey = (e: Event) => {
      if ((e as KeyboardEvent).key === "Enter") {
        e.preventDefault();
        eggSubmit();
      }
    };
    const onEggClick = (e: Event) => {
      e.preventDefault();
      eggSubmit();
    };

    if (eggInput) eggInput.addEventListener("keydown", onEggKey);
    if (eggBtn) eggBtn.addEventListener("click", onEggClick);

    return () => {
      if (eggInput) eggInput.removeEventListener("keydown", onEggKey);
      if (eggBtn) eggBtn.removeEventListener("click", onEggClick);
      clearScenarioTimers();
      intervalIds.forEach((id) => window.clearInterval(id));
    };
  }, []);

  return (
    <main className="landing-v10" id="main-content">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: customerScenarios.map((scenario) => ({
              "@type": "Question",
              name: scenario.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: scenario.answerText,
              },
            })),
          }),
        }}
      />
      <div className="announce">
        <strong ref={announcementRef}>Growing out of Kajabi?</strong>
        <div className="sep" />
        <a href="/migrate">See how to migrate &rarr;</a>
      </div>

      <SiteNav />

      {/* 1. Hero - text only, centered */}
      <section className="hero-centered container">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-eyebrow">Video intelligence platform</div>
          <h1>
            Turn every video you&apos;ve ever recorded into a coach{" "}
            <em>that works while you sleep.</em>
          </h1>
          <p className="hero-sub">
            <strong>Bold is the video intelligence platform for coaching
            programs.</strong> It reads every video in your library, understands
            what you taught, and answers your members in your teaching
            style&nbsp;&mdash; no matter how they phrase the question.
          </p>
          <div className="hero-actions">
            <a
              className="btn-mint"
              href="https://savvycal.com/marcel-from-bold/7838d613"
              rel="noreferrer"
              target="_blank"
            >
              Book a demo
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="showcase container">
        <div className="showcase-head">
          <h2>Trusted by programs across healthcare, SaaS, and finance</h2>
        </div>
        <div className="showcase-grid">
          <a
            className="sc-card"
            href="https://hrtuniversity.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sc-screen">
              <img
                src="/images/socialproof-hrtu.png"
                alt="HRT University"
                className="sc-img"
              />
              <div className="sc-label">Healthcare</div>
            </div>
            <div className="sc-info">
              <h3>HRT University</h3>
              <p>97+ clinical lessons powered by Bold AI</p>
            </div>
          </a>
          <a
            className="sc-card"
            href="https://founderwell.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sc-screen">
              <img
                src="/images/socialproof-founderwell.png"
                alt="FounderWell"
                className="sc-img"
              />
              <div className="sc-label">SaaS coaching</div>
            </div>
            <div className="sc-info">
              <h3>FounderWell</h3>
              <p>SaaS growth coaching program</p>
            </div>
          </a>
          <a
            className="sc-card"
            href="https://vivatuition.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="sc-screen">
              <img
                src="/images/socialproof-vivatuition.png"
                alt="Viva Financial Tuition"
                className="sc-img"
              />
              <div className="sc-label">Financial education</div>
            </div>
            <div className="sc-info">
              <h3>Viva Tuition</h3>
              <p>ACCA training academy</p>
            </div>
          </a>
        </div>
      </section>

      {/* 2. The Gap (Before / After) */}
      <section className="gap-section">
        <div className="container">
          <div className="sec-label">The problem you can feel</div>
          <h2 className="section-title">
            You built a great program. The content is all there. But
            something&apos;s broken.
          </h2>
          <p className="gap-stat">
            <strong>
              Active discussion lifts course completion from 42.6% to 65.5%
            </strong>{" "}
            (Ruzuku, 32,000+ courses). Bold is what brings that level of help to
            a member working alone at 11pm.{" "}
            <a href="/blog/implementation-gap">Read the deep dive</a>.
          </p>
          <div className="gap-grid">
            <div className="gap-head gap-head-dim">Without Bold</div>
            <div className="gap-head gap-head-mint">With Bold</div>

            <div className="gap-cell gap-cell-dim">
              Students rewatch entire modules looking for one answer they
              saw three months ago.
            </div>
            <div className="gap-cell gap-cell-mint">
              Students ask a question and get the exact clip with a
              timestamp in seconds.
            </div>

            <div className="gap-cell gap-cell-dim">
              Your coaches answer the same ten questions a hundred times
              a week.
            </div>
            <div className="gap-cell gap-cell-mint">
              The AI answers from your curriculum. Coaches focus on what
              only humans can do.
            </div>

            <div className="gap-cell gap-cell-dim">
              Students love the teaching but churn because they get stuck
              on implementation.
            </div>
            <div className="gap-cell gap-cell-mint">
              Students get implementation help grounded in your teaching,
              24/7.
            </div>
          </div>
        </div>
      </section>

      {/* 3. Cited Answers (Product UI) */}
      <section className="cited-section container">
        <div className="cited-header">
          <div className="f-tag ft1">How it works</div>
          <h2 className="section-title">Every answer comes with proof</h2>
          <p className="sec-sub">
            Students ask a question and get a response grounded in your
            teaching, with the exact video and timestamp so they can verify and
            go deeper. No hallucinations. No generic AI. Your expertise, cited.
          </p>
        </div>
        <div className="chat-demo cited-chat">
          <div className="chat-header">
            <div className="chat-hl">
              <div className="chat-av" ref={chatAvRef}>
                <img src="/images/chaticon-founderwell.png" alt="" />
              </div>
              <div className="chat-ht" ref={chatTitleRef}>
                Ask FounderWell
              </div>
            </div>
            <div className="chat-st" ref={chatCountRef}>
              <span className="dot" />
              1,400 videos
            </div>
          </div>
          <div className="chat-body" ref={chatBodyRef} />
          <div className="chat-input">
            <input
              placeholder="Ask about any topic..."
              aria-label="Ask a question"
            />
            <button type="button" aria-label="Send message">
              <ArrowIcon variant="long" />
            </button>
          </div>
        </div>
      </section>

      {/* 3.5 Static examples — crawlable Q&A blocks */}
      <section className="static-examples container">
        <div className="static-examples-head">
          <div className="sec-label">Real questions, real answers</div>
          <h2 className="section-title">
            Three answers Bold pulled from a customer library
          </h2>
          <p className="sec-sub">
            The kind of question a coach would normally field at midnight, in
            their inbox, by hand. Each answer cites the exact lessons it came
            from.
          </p>
        </div>
        <ol className="static-examples-list">
          {customerScenarios.map((scenario) => (
            <li className="static-example" key={scenario.id}>
              <div className="static-example-tag">
                <span className="static-example-tag-name">
                  {scenario.customer.title}
                </span>
                <span className="static-example-tag-sep" aria-hidden="true">
                  &middot;
                </span>
                <span className="static-example-tag-count">
                  {scenario.customer.count}
                </span>
              </div>
              <p className="static-example-q">
                <span className="static-example-q-label">Member asks</span>
                {scenario.question}
              </p>
              <p className="static-example-context">{scenario.context}</p>
              <div
                className="static-example-a"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: scenario.answerHtml }}
              />
              <ul className="static-example-cites" aria-label="Cited lessons">
                {scenario.citations.map((citation) => (
                  <li
                    className="static-example-cite"
                    key={`${scenario.id}-${citation.timestamp}`}
                  >
                    <span className="static-example-cite-ts">
                      {citation.timestamp}
                    </span>
                    {citation.title}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* 4. Case Study (HRTU) */}
      <section className="case-study">
        <div className="cs-inner">
          <div className="sec-label" style={{ color: "var(--hrtu-gold)" }}>
            Case study
          </div>
          <div className="cs-grid">
            <div className="cs-text">
              <h3>
                HRT University replaced a broken chatbot with an AI that
                actually knows the curriculum
              </h3>
              <p>
                HRTU trains licensed healthcare providers in hormone therapy.
                97&nbsp;lessons, weekly live Q&amp;A sessions, a podcast with
                90+&nbsp;episodes&nbsp;&mdash; and students kept asking the same
                clinical questions because none of it was findable.
              </p>
              <p>
                Their previous chatbot hallucinated answers and sent students on
                a scavenger hunt through Kajabi to find the right video. Bold
                replaced it with an assistant that points to the exact lesson and
                timestamp&nbsp;&mdash; across the course, the podcast, and every
                Q&amp;A recording.
              </p>
              <div className="cs-proof">
                <span className="cs-proof-item">
                  <strong>97+</strong> lessons
                </span>
                <span className="cs-proof-sep" aria-hidden="true" />
                <span className="cs-proof-item">
                  <strong>90+</strong> podcast episodes
                </span>
                <span className="cs-proof-sep" aria-hidden="true" />
                <span className="cs-proof-item">
                  <strong>iOS + Android</strong> apps
                </span>
              </div>
              <p className="cs-roi">
                Students stay enrolled because they keep finding new answers.
                What was a one&#8209;time course became a tool practitioners
                reach for daily. <strong>Bold made the product sticky.</strong>
              </p>
              <a
                className="btn-gold"
                href="https://savvycal.com/marcel-from-bold/7838d613"
                rel="noreferrer"
                target="_blank"
              >
                Book a demo
                <ArrowIcon />
              </a>
            </div>
            <div className="cs-photo">
              <img
                className="cs-img-main"
                src="/images/cs-hrtu-course.png"
                alt="HRT University course view with Bold AI assistant"
                loading="lazy"
              />
              <img
                className="cs-img-chat"
                src="/images/cs-hrtu-chat.png"
                alt="Bold AI answering a clinical question with cited timestamps"
                loading="lazy"
              />
              <div className="cs-photo-badge">
                <svg width="14" height="14" viewBox="0 0 512 512" fill="none">
                  <path
                    clipRule="evenodd"
                    d="m27 512v-512h260.196c112.402 0 160.451 58.6113 160.451 129.54 0 70.927-17.805 98.746-54.914 126.354 62.421 16.777 92.881 75.175 92.881 143.768 0 68.592-8.58 80.696-36.251 112.338z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
                Powered by Bold
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Capabilities (vertical stack) */}
      <section className="cap-section container">
        <div className="sec-label">What changes</div>
        <h2 className="section-title">
          Three problems you stop solving manually
        </h2>
        <div className="cap-list">
          <div className="cap-item">
            <div className="cap-num">01</div>
            <div className="cap-main">
              <h3>Coaching scales without hiring</h3>
              <p>
                Beginners get foundations. Advanced students get tactical depth.
                Same question, different answer. No coach required.
              </p>
            </div>
          </div>
          <div className="cap-item">
            <div className="cap-num">02</div>
            <div className="cap-main">
              <h3>Students submit work. Your teaching reviews it.</h3>
              <p>
                Upload a mockup, a lab panel, a draft. Bold critiques it using
                your frameworks, not generic AI. Implementation support at 2am.
              </p>
            </div>
          </div>
          <div className="cap-item">
            <div className="cap-num">03</div>
            <div className="cap-main">
              <h3>Your content graveyard becomes the reason students stay</h3>
              <p>
                Bold finds the right lesson even when the student doesn&apos;t
                know what to search for. Content they never found becomes the
                content that keeps them enrolled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Who It's For */}
      <section className="who-for">
        <div className="nf-container">
          <div className="grid-accent" />
          <div className="mint-glow" />
          <div className="nf-inner">
            <div className="nf-header">
              <div className="sec-label">Who Bold is for</div>
              <h2 className="section-title">
                Built for programs with deep video libraries
              </h2>
              <p className="nf-desc">
                Bold is for teams that have already invested in their content
                and want every lesson working harder.
              </p>
            </div>
            <div className="nf-grid">
              <div className="nf nf-y">
                <span className="cap-check-icon">&#10003;</span>Coaching
                programs with 50+ hours of video content
              </div>
              <div className="nf nf-y">
                <span className="cap-check-icon">&#10003;</span>Training
                academies scaling past one&#8209;on&#8209;one support
              </div>
              <div className="nf nf-y">
                <span className="cap-check-icon">&#10003;</span>Clinical and
                professional education that demands accuracy
              </div>
              <div className="nf nf-y">
                <span className="cap-check-icon">&#10003;</span>Programs where
                students churn despite loving the content
              </div>
            </div>
            <p className="nf-floor">
              Still building your first course? We&apos;re not the right fit
              yet&nbsp;&mdash; but we&apos;d love to talk when you get there.
            </p>
          </div>
        </div>
      </section>

      {/* 6.5. How we get you live */}
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
                  Portal, AI coach, integrations. Configured for your program.
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

      {/* 7. Final CTA */}
      <CtaSection
        avatars={[
          { src: "/images/marcel.jpg", alt: "Marcel" },
          { src: "/images/monika.jpg", alt: "Monika" },
          { src: "/images/rob.jpg", alt: "Rob" },
        ]}
        eyebrow="We handle the move"
        description="See how Bold turns your video library into your hardest-working team member. Always on. Always accurate."
        buttonText="See how we handle the move"
        buttonHref="/migrate"
        buttonExternal={false}
        secondaryButton={{
          text: "Book a demo",
          href: "https://savvycal.com/marcel-from-bold/7838d613",
          external: true,
        }}
        migrationStrip
      />

      {/* Footer */}
      <SiteNavFooter />
    </main>
  );
}
