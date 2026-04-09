"use client";

import { useEffect, useRef } from "react";
import { CtaSection } from "./cta-section";
import { SiteNav, SiteNavFooter } from "./site-nav";
import "./landing-v10.css";

const ANNOUNCEMENT_MESSAGES = [
  "Growing out of Kajabi?",
  "Outgrowing Circle?",
  "Scaling past Teachable?",
];

const CUSTOMER_SCENARIOS = [
  {
    customer: {
      icon: "/images/chaticon-founderwell.png",
      title: "Ask FounderWell",
      count: "1,400 videos",
    },
    steps: [
      {
        t: "u",
        x: "I just crossed $40k MRR but my net revenue churn is 8%. Is that a pricing problem or a retention problem?",
      },
      {
        t: "c",
        x: "SaaS founder · $40k MRR · growth stage",
      },
      {
        t: "a",
        x: "<strong>At your MRR, 8% net churn almost always traces back to pricing architecture.</strong> Two diagnostics: are you charging on a value metric that grows with the customer? And do you have expansion paths built in? If the average account stays flat after signup, you've got a pricing ceiling, not a retention problem. <strong>Fix the metric before you fix the funnel.</strong>",
      },
      {
        t: "s",
        items: [
          { n: "Value Metric Design", ts: "14:23" },
          { n: "Churn Diagnosis", ts: "08:47" },
          { n: "Expansion Revenue", ts: "22:15" },
        ],
      },
    ],
  },
  {
    customer: {
      icon: "/images/chaticon-hrtupearl.png",
      title: "Ask Pearl",
      count: "300 videos",
    },
    steps: [
      {
        t: "u",
        x: "Patient is 52, post-menopausal, elevated liver enzymes. She's requesting oral estradiol — what's the prescribing pathway?",
      },
      {
        t: "c",
        x: "HRT practitioner · prescribing · intermediate",
      },
      {
        t: "a",
        x: "<strong>Elevated liver enzymes change the prescribing pathway.</strong> Oral estradiol undergoes first-pass hepatic metabolism, which is the concern here. The decision tree in Module 8 covers the specific ALT/AST thresholds that trigger the switch to transdermal. <strong>Start there before the prescribing decision.</strong>",
      },
      {
        t: "s",
        items: [
          { n: "Liver Panels", ts: "18:42" },
          { n: "Transdermal Protocols", ts: "11:15" },
          { n: "Prescribing Pathways", ts: "25:08" },
        ],
      },
    ],
  },
  {
    customer: {
      icon: "/images/chaticon-viva.png",
      title: "Ask Viva Tuition",
      count: "2,500 videos",
    },
    steps: [
      {
        t: "u",
        x: "Working on a consolidation where the parent acquired 80% mid-year. How do I split pre- and post-acquisition profits?",
      },
      {
        t: "c",
        x: "ACCA trainee · consolidation · advanced",
      },
      {
        t: "a",
        x: "<strong>Split the subsidiary's profit at the acquisition date.</strong> Pre-acquisition profits feed into retained earnings and the goodwill calc. Only post-acquisition profits get consolidated into the group P&L — use time apportionment. <strong>Most common exam error is consolidating the full year.</strong>",
      },
      {
        t: "s",
        items: [
          { n: "Mid-Year Acquisitions", ts: "22:15" },
          { n: "Goodwill Calculation", ts: "14:30" },
          { n: "Group P&L", ts: "38:42" },
        ],
      },
    ],
  },
] as const;

type ChatStep = (typeof CUSTOMER_SCENARIOS)[number]["steps"][number];

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
          (announcementIndex + 1) % ANNOUNCEMENT_MESSAGES.length;
        announcement.style.opacity = "0";
        window.setTimeout(() => {
          announcement.textContent = ANNOUNCEMENT_MESSAGES[announcementIndex];
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
            Your students love the content. They still can&apos;t find{" "}
            <em>what they need.</em>
          </h1>
          <p className="hero-sub">
            Bold turns your video library into an AI teaching assistant that
            knows your curriculum, cites the source, and scales without hiring.
          </p>
          <div className="hero-actions">
            <a
              className="btn-mint"
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
              <h4>HRT University</h4>
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
              <h4>FounderWell</h4>
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
              <h4>Viva Tuition</h4>
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
          <div className="gap-container">
            <div className="gap-col gap-col-without">
              <div className="gap-pill gap-pill-dim">Without Bold</div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-dim" />
                Students rewatch entire modules looking for one answer they saw
                three months ago
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-dim" />
                Your coaches answer the same ten questions a hundred times a
                week
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-dim" />
                Great content sits unwatched because nobody knows it exists
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-dim" />
                Students love the teaching but churn because they get stuck on
                implementation
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-dim" />
                You can&apos;t scale support without scaling headcount
              </div>
            </div>
            <div className="gap-divider" />
            <div className="gap-col gap-col-with">
              <div className="gap-pill gap-pill-mint">With Bold</div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-mint" />
                Students ask a question and get the exact clip with a timestamp
                in seconds
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-mint" />
                The AI answers from your curriculum. Coaches focus on what only
                humans can do
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-mint" />
                Every lesson is discoverable through search and conversation
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-mint" />
                Students get implementation help grounded in your teaching, 24/7
              </div>
              <div className="gap-item">
                <span className="gap-dot gap-dot-mint" />
                Your program scales like you have 50 coaches. You have two.
              </div>
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
              <svg viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </div>
        </div>
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
                Your students get guidance calibrated to their stage. A beginner
                gets foundations, an advanced student gets tactical depth from
                deeper in the library. Same question, different answer. No coach
                required.
              </p>
            </div>
            <div className="cap-details">
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Viewer profiles track stage, role, and progress
              </div>
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Responses adapt automatically, no configuration per student
              </div>
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Coaches focus on high-value 1:1 conversations
              </div>
            </div>
          </div>
          <div className="cap-item">
            <div className="cap-num">02</div>
            <div className="cap-main">
              <h3>Students submit their work. Your teaching reviews it.</h3>
              <p>
                A design student uploads a mockup. A clinician uploads a lab
                panel. Bold critiques their work using your actual frameworks
                and principles, not generic AI advice. Implementation support at
                2am.
              </p>
            </div>
            <div className="cap-details">
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Image and document upload in the chat interface
              </div>
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Feedback grounded in your course content, with citations
              </div>
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Closes the implementation gap that drives churn
              </div>
            </div>
          </div>
          <div className="cap-item">
            <div className="cap-num">03</div>
            <div className="cap-main">
              <h3>Your content graveyard becomes the reason students stay</h3>
              <p>
                Bold understands concepts, not keywords. When a student asks
                about pricing strategy, it finds the relevant lesson even if the
                word &quot;pricing&quot; is never mentioned. Content they never
                found becomes the content that keeps them enrolled.
              </p>
            </div>
            <div className="cap-details">
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Semantic search across transcripts and attached files
              </div>
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Cross-library recommendations surface related content
              </div>
              <div className="cap-check">
                <span className="cap-check-icon">&#10003;</span>
                Students discover depth they didn&apos;t know was there
              </div>
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
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CtaSection />

      {/* Footer */}
      <SiteNavFooter />
    </main>
  );
}
