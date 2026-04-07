"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
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
  const grainRef = useRef<HTMLCanvasElement | null>(null);
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  const announcementRef = useRef<HTMLElement | null>(null);
  const chatAvRef = useRef<HTMLDivElement | null>(null);
  const chatTitleRef = useRef<HTMLDivElement | null>(null);
  const chatCountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const grainCanvas = grainRef.current;
    const chatBody = chatBodyRef.current;
    const announcement = announcementRef.current;
    if (!grainCanvas || !chatBody || !announcement) return;

    const context = grainCanvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let announcementIndex = 0;
    let scenarioIndex = 0;
    const timeoutIds: number[] = [];
    const intervalIds: number[] = [];

    const resizeGrain = () => {
      grainCanvas.width = window.innerWidth;
      grainCanvas.height = window.innerHeight;
    };

    const drawGrain = () => {
      const { width, height } = grainCanvas;
      const imageData = context.createImageData(width, height);
      const buffer = imageData.data;

      for (let index = 0; index < buffer.length; index += 4) {
        const value = Math.random() * 255;
        buffer[index] = value;
        buffer[index + 1] = value;
        buffer[index + 2] = value;
        buffer[index + 3] = 255;
      }

      context.putImageData(imageData, 0, 0);
      animationFrame = window.requestAnimationFrame(drawGrain);
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!prefersReducedMotion) {
      resizeGrain();
      drawGrain();
      window.addEventListener("resize", resizeGrain);
    }

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

      // Stop auto-cycling
      clearScenarioTimers();

      // Switch header to Bold branding
      const av = chatAvRef.current;
      const titleEl = chatTitleRef.current;
      const countEl = chatCountRef.current;
      if (av) {
        av.textContent = "B";
        av.style.background = "#41C6A6";
        av.style.color = "white";
      }
      if (titleEl) titleEl.textContent = "Ask Bold";
      if (countEl)
        countEl.innerHTML = '<span class="dot"></span>beta';

      chatBody.innerHTML = "";

      // User bubble
      const bubble = document.createElement("div");
      bubble.className = "cm user";
      bubble.textContent = msg;
      bubble.style.animationDelay = "0.1s";
      chatBody.appendChild(bubble);

      // Context + thinking
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

              // Type the response
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

                // CTA link
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

    // Scroll-triggered stagger animations for feature visuals
    const staggerTargets = document.querySelectorAll("[data-animate='stagger']");
    let observer: IntersectionObserver | null = null;

    if (!prefersReducedMotion && staggerTargets.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fmc-in-view");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );
      staggerTargets.forEach((target) => observer?.observe(target));
    } else {
      // Reduced motion or no targets — show immediately
      staggerTargets.forEach((target) => target.classList.add("fmc-in-view"));
    }

    return () => {
      if (eggInput) eggInput.removeEventListener("keydown", onEggKey);
      if (eggBtn) eggBtn.removeEventListener("click", onEggClick);
      observer?.disconnect();
      clearScenarioTimers();
      intervalIds.forEach((intervalId) => {
        window.clearInterval(intervalId);
      });
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeGrain);
    };
  }, []);

  return (
    <>
      <main className="landing-v10" id="main-content">
        <div className="grain">
          <canvas ref={grainRef} aria-hidden="true" />
        </div>

        <div className="announce">
          <strong ref={announcementRef}>Growing out of Kajabi?</strong>
          <div className="sep" />
          <a href="/migrate">See how to migrate &rarr;</a>
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
              <a href="#">Product</a>
              <a href="#">Docs</a>
              <a href="#">Pricing</a>
              <a href="#">Blog</a>
              <a className="nav-cta" href="https://savvycal.com/marcel-from-bold/7838d613">
                Book a demo
              </a>
            </div>
          </div>
        </nav>

        <section className="hero container">
          <div className="hero-text">
            <div className="hero-eyebrow">Video intelligence platform</div>
            <h1>
              Scale your coaching program{" "}
              <span className="u">without hiring more coaches</span>
            </h1>
            <p className="hero-sub">
              Your students are stuck and your coaches are burned out answering
              the same questions. Bold turns your video library into an AI coach
              that cites the exact moment that matters.
            </p>
            <div className="hero-actions">
              <a className="btn-mint" href="https://savvycal.com/marcel-from-bold/7838d613">
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
              <a className="btn-ghost" href="#">
                Watch it work
              </a>
            </div>
          </div>

          <div>
            <div className="chat-demo">
              <div className="chat-header">
                <div className="chat-hl">
                  <div className="chat-av" ref={chatAvRef}>
                    <img
                      src="/images/chaticon-founderwell.png"
                      alt=""
                    />
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
                <input placeholder="Ask about any topic..." aria-label="Ask a question" />
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
          </div>
        </section>

        <section className="showcase container">
          <div className="showcase-head">
            <h2>See what teams build with Bold</h2>
          </div>
          <div className="showcase-grid">
            <a className="sc-card" href="https://hrtuniversity.com" target="_blank" rel="noopener noreferrer">
              <div className="sc-screen">
                <img src="/images/socialproof-hrtu.png" alt="HRT University" className="sc-img" />
                <div className="sc-label">Healthcare</div>
              </div>
              <div className="sc-info">
                <h4>HRT University</h4>
                <p>97+ clinical lessons powered by Bold AI</p>
              </div>
            </a>
            <a className="sc-card" href="https://founderwell.com" target="_blank" rel="noopener noreferrer">
              <div className="sc-screen">
                <img src="/images/socialproof-founderwell.png" alt="FounderWell" className="sc-img" />
                <div className="sc-label">SaaS coaching</div>
              </div>
              <div className="sc-info">
                <h4>FounderWell</h4>
                <p>SaaS growth coaching program</p>
              </div>
            </a>
            <a className="sc-card" href="https://vivatuition.com" target="_blank" rel="noopener noreferrer">
              <div className="sc-screen">
                <img src="/images/socialproof-vivatuition.png" alt="Viva Financial Tuition" className="sc-img" />
                <div className="sc-label">Financial education</div>
              </div>
              <div className="sc-info">
                <h4>Viva Tuition</h4>
                <p>ACCA training academy</p>
              </div>
            </a>
          </div>
        </section>

        <section className="problem container">
          <div className="sec-label">The problem</div>
          <h2 className="section-title">
            You built the content. Nobody can use it.
          </h2>
          <p className="sec-sub">
            Your video library is growing faster than discoverability. Students
            churn not because your teaching is bad — but because they can&apos;t
            find the right answer at the right time.
          </p>
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-bar" />
              <div className="stat-num">85%</div>
              <div className="stat-tag">Content unused</div>
              <div className="stat-p">
                Hundreds of hours of training. Students watch a fraction. The
                rest is a content graveyard you paid six figures to build.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-bar" />
              <div className="stat-num">10x</div>
              <div className="stat-tag">Repeat questions</div>
              <div className="stat-p">
                Coaches answer the same questions over and over. You can&apos;t
                hire fast enough, and every new hire dilutes quality.
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-bar" />
              <div className="stat-num">60%</div>
              <div className="stat-tag">Renewal ceiling</div>
              <div className="stat-p">
                Students love the content but churn anyway. The gap isn&apos;t
                teaching — it&apos;s implementation support at scale.
              </div>
            </div>
          </div>
        </section>

        <section className="features container">
          <div className="sec-label">How it works</div>
          <h2 className="section-title">
            Your content already has the answers
          </h2>
          <p className="sec-sub">
            Bold deeply understands your video library — not keywords, but
            concepts. Students get cited, verified answers. You get scale.
          </p>

          <div className="f-row">
            <div className="f-vis fv1">
              <div className="grid-bg" />
              <div className="fmc-window" data-animate="stagger">
                <div className="fmc-chrome">
                  <span className="fmc-dot" />
                  <span className="fmc-dot" />
                  <span className="fmc-dot" />
                </div>
                <div className="fmc-body">
                  <div className="fmc-q" data-stagger="1">How do I price my SaaS after $40k MRR?</div>
                  <div className="fmc-a" data-stagger="2">
                    <span className="fmc-label">Bold AI</span>
                    <span className="fmc-text"><strong>At your MRR, focus on value metric design</strong> — the pricing architecture deep-dive in Module 5 covers exactly this. Are you charging on a metric that grows with the customer?</span>
                  </div>
                  <div className="fmc-cites" data-stagger="3">
                    <span className="fmc-cite">
                      <span className="fmc-cite-play"><svg viewBox="0 0 8 8" fill="none" width="6" height="6"><polygon points="2,1 7,4 2,7" fill="currentColor"/></svg></span>
                      <span className="fmc-cite-ts">14:23</span>
                      Value Metrics
                    </span>
                    <span className="fmc-cite">
                      <span className="fmc-cite-play"><svg viewBox="0 0 8 8" fill="none" width="6" height="6"><polygon points="2,1 7,4 2,7" fill="currentColor"/></svg></span>
                      <span className="fmc-cite-ts">08:47</span>
                      Churn Diagnosis
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="f-text">
              <div className="f-tag ft1">Cited answers</div>
              <h3>Every answer links back to the source</h3>
              <p>
                Students ask a question and get an answer grounded in your
                curriculum — with the exact video and timestamp so they can
                verify and go deeper. No hallucinations. No guesswork.
              </p>
            </div>
          </div>

          <div className="f-row">
            <div className="f-vis fv2">
              <div className="grid-bg" />
              <div className="fmc-window fmc-window-wide" data-animate="stagger">
                <div className="fmc-chrome">
                  <span className="fmc-dot" />
                  <span className="fmc-dot" />
                  <span className="fmc-dot" />
                </div>
                <div className="fmc-body">
                  <div className="fmc-split-q" data-stagger="1">How should I structure my pricing?</div>
                  <div className="fmc-split" data-stagger="2">
                    <div className="fmc-split-col">
                      <div className="fmc-split-tag fmc-split-beginner">
                        <svg viewBox="0 0 10 10" fill="none" width="8" height="8"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/><circle cx="5" cy="5" r="1.5" fill="currentColor"/></svg>
                        Beginner
                      </div>
                      <div className="fmc-split-text">Start with the fundamentals in Module 2. Here&apos;s the step-by-step framework for your first pricing model...</div>
                    </div>
                    <div className="fmc-split-div" />
                    <div className="fmc-split-col">
                      <div className="fmc-split-tag fmc-split-advanced">
                        <svg viewBox="0 0 10 10" fill="none" width="8" height="8"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/><circle cx="5" cy="5" r="1.5" fill="currentColor"/></svg>
                        Advanced
                      </div>
                      <div className="fmc-split-text">At your stage, skip to pricing architecture in Module 7. The nuance is in expansion revenue paths...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="f-text">
              <div className="f-tag ft2">Adaptive depth</div>
              <h3>Same question, different answer</h3>
              <p>
                Bold knows who&apos;s asking — their stage, role, and progress.
                A beginner gets step-by-step foundations. An advanced student
                gets nuanced tactical advice from deeper in the library.
              </p>
            </div>
          </div>

          <div className="f-row">
            <div className="f-vis fv3">
              <div className="grid-bg" />
              <div className="fmc-window" data-animate="stagger">
                <div className="fmc-chrome">
                  <span className="fmc-dot" />
                  <span className="fmc-dot" />
                  <span className="fmc-dot" />
                </div>
                <div className="fmc-body">
                  <div className="fmc-upload-img" data-stagger="1">
                    <div className="fmc-upload-thumb">
                      <svg viewBox="0 0 48 36" fill="none" width="40" height="30">
                        <rect x="0.5" y="0.5" width="47" height="35" rx="1" stroke="var(--warm)" strokeWidth="0.5" fill="rgba(139,115,64,0.04)" />
                        <circle cx="14" cy="13" r="4" fill="rgba(139,115,64,0.12)" />
                        <path d="M0 26l14-10 10 7 10-7 14 10v9.5a1 1 0 01-1 1H1a1 1 0 01-1-1z" fill="rgba(139,115,64,0.08)" />
                      </svg>
                    </div>
                    <div className="fmc-upload-meta">
                      <span className="fmc-upload-name">design_v3.png</span>
                      <span className="fmc-upload-size">1.2 MB</span>
                    </div>
                  </div>
                  <div className="fmc-a" data-stagger="2">
                    <span className="fmc-label">Bold AI</span>
                    <span className="fmc-text"><strong>Your hierarchy needs work</strong> — the contrast principles from Lesson 4 apply here. The primary CTA competes with the nav, and your type scale has no clear entry point.</span>
                  </div>
                  <div className="fmc-cites" data-stagger="3">
                    <span className="fmc-cite">
                      <span className="fmc-cite-play"><svg viewBox="0 0 8 8" fill="none" width="6" height="6"><polygon points="2,1 7,4 2,7" fill="currentColor"/></svg></span>
                      <span className="fmc-cite-ts">22:15</span>
                      Visual Hierarchy
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="f-text">
              <div className="f-tag ft3">Beyond text</div>
              <h3>Upload work, get feedback from the curriculum</h3>
              <p>
                Students don&apos;t just ask questions — they upload their work
                and get critiques grounded in your teaching. A design student
                uploads a mockup. A clinician uploads a lab panel. Bold
                responds with your expertise, not generic AI.
              </p>
            </div>
          </div>
        </section>

        <section className="case-study">
          <div className="cs-inner">
            <div className="sec-label" style={{ color: "var(--hrtu-gold)" }}>
              Case study
            </div>
            <div className="cs-grid">
              <div className="cs-text">
                <h3>
                  HRT University turned 97 clinical lessons into an always-on AI
                  teaching assistant
                </h3>
                <p>
                  HRTU trains licensed healthcare providers in hormone and
                  metabolic medicine. Bold indexes every lesson and gives
                  clinicians instant, cited answers grounded in the curriculum.
                </p>
                <div className="cs-stats">
                  <div className="cs-s">
                    <div className="cs-s-n">97+</div>
                    <div className="cs-s-l">Lessons indexed</div>
                  </div>
                  <div className="cs-s">
                    <div className="cs-s-n">30</div>
                    <div className="cs-s-l">CEU hours</div>
                  </div>
                  <div className="cs-s">
                    <div className="cs-s-n">24/7</div>
                    <div className="cs-s-l">AI support</div>
                  </div>
                </div>
                <p className="cs-roi">
                  A 3% retention bump on a $5M program
                  = <strong>$150K saved annually.</strong> Bold pays for itself
                  many times over.
                </p>
                <a className="btn-gold" href="https://savvycal.com/marcel-from-bold/7838d613">
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
                <div className="cs-photo-grain" />
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

        <section className="not-for">
          <div className="nf-container">
            <div className="grid-accent" />
            <div className="mint-glow" />
            <div className="nf-inner">
              <div className="nf-header">
                <div className="sec-label">Clarity</div>
                <h2 className="section-title">
                  Built for programs with real libraries
                </h2>
                <p className="nf-desc">
                  Bold&apos;s intelligence matters at scale. 50+ hours of video,
                  100+ active students. Below that, we&apos;re not the right fit
                  yet.
                </p>
              </div>
              <div className="nf-grid">
                <div className="nf nf-y">
                  <span className="ic">&#10003;</span>Coaching programs with 50+
                  hours of video content
                </div>
                <div className="nf nf-y">
                  <span className="ic">&#10003;</span>Training academies with
                  100+ active students
                </div>
                <div className="nf nf-n">
                  <span className="ic">&#10007;</span>Individual creators with
                  fewer than 50 videos
                </div>
                <div className="nf nf-n">
                  <span className="ic">&#10007;</span>Primarily written content
                  programs
                </div>
                <div className="nf nf-y">
                  <span className="ic">&#10003;</span>Programs struggling with
                  churn despite great content
                </div>
                <div className="nf nf-n">
                  <span className="ic">&#10007;</span>Anyone looking for cheap
                  video hosting
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Stop letting your best content collect dust</h2>
            <p>
              Bold is in private beta with established coaching programs. If
              that&apos;s you, let&apos;s talk.
            </p>
            <a className="btn-cta" href="https://savvycal.com/marcel-from-bold/7838d613">
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
                <a href="#">AI Coach</a>
                <a href="#">AI Search</a>
                <a href="#">Video Chat</a>
                <a href="#">Integrations</a>
              </div>
              <div className="footer-col">
                <h4>Developers</h4>
                <a href="#">Docs</a>
                <a href="#">API</a>
                <a href="#">SDK</a>
                <a href="#">Changelog</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Pricing</a>
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="footer-bot">
              <span>&copy; 2026 Bold Video</span>
              <div>
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
