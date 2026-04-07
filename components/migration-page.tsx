import Link from "next/link";
import { SiteFooter, SiteShell } from "./site-shell";

const fromPlatforms = [
  {
    name: "Kajabi",
    type: "All-in-one",
    description: "Strong business engine. The learning experience starts to feel boxed in.",
    tone: "mint",
  },
  {
    name: "Vimeo",
    type: "Video hosting",
    description: "Clean delivery. Members still need better search, guidance, and context.",
    tone: "blue",
  },
  {
    name: "Circle",
    type: "Community",
    description: "Conversation works. Learning still ends up split across too many surfaces.",
    tone: "neutral",
  },
  {
    name: "Teachable",
    type: "Course delivery",
    description: "The structure is there. The depth and discoverability start to wear thin.",
    tone: "warm",
  },
];

const promiseCards = [
  "Keep the content you already spent years building.",
  "Make the library easier to search and trust.",
  "Handle the cutover with a calm, guided plan.",
];

const migrationSteps = [
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

const customerStories = [
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

const faqItems = [
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

function toneClasses(tone: (typeof fromPlatforms)[number]["tone"]) {
  if (tone === "mint") {
    return "bg-[linear-gradient(180deg,#ffffff_0%,#f5fbf8_100%)]";
  }
  if (tone === "blue") {
    return "bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fe_100%)]";
  }
  if (tone === "warm") {
    return "bg-[linear-gradient(180deg,#ffffff_0%,#fbf6ef_100%)]";
  }
  return "bg-white";
}

export function MigrationPage() {
  return (
    <SiteShell>
      <main className="flex-1" id="main-content">
        <section className="mx-auto max-w-[1200px] px-4 pb-16 pt-[9.75rem] sm:px-6 md:pb-24 md:pt-[12rem] lg:px-8">
          <div className="text-center">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-signal-ink)]">
              Migration to Bold
            </p>
            <h1 className="mx-auto mt-4 max-w-[10ch] text-balance text-[clamp(3rem,6.4vw,5.8rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-[var(--color-ink)]">
              Move to Bold without starting over
            </h1>
            <p className="mx-auto mt-6 max-w-[37rem] text-lg leading-8 text-[var(--color-copy)]">
              If you are on Kajabi, Vimeo, Circle, Teachable, or a stack nobody
              can explain in one sentence, the move should feel like
              simplification, not a rebuild. We handle it with you personally.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-forest)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-button-mint)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
                href="https://savvycal.com/marcel-from-bold/7838d613"
                rel="noreferrer"
                target="_blank"
              >
                Book the switch call
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-white/76 px-6 py-3.5 text-sm font-medium text-[var(--color-ink)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-ink)] hover:shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
                href="#faq"
              >
                Read the FAQs
              </a>
            </div>
          </div>

          <div className="relative mt-12">
            <div className="absolute left-8 top-6 hidden h-28 w-28 rounded-full bg-[var(--color-signal-soft)] blur-3xl md:block" />
            <div className="absolute right-10 top-18 hidden h-32 w-32 rounded-full bg-[var(--color-ocean-soft)] blur-3xl md:block" />

            <div className="relative mx-auto max-w-[980px] rounded-[2.7rem] border border-[var(--color-line)] bg-white/82 p-6 shadow-[var(--shadow-panel)] backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Most teams come from one of these
                </p>
                <span className="inline-flex items-center rounded-full border border-[rgba(67,198,166,0.22)] bg-[var(--color-signal-soft)] px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-signal-ink)]">
                  Founder-led handoff
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {fromPlatforms.map((platform) => (
                  <article
                    className={`rounded-[1.7rem] border border-[var(--color-line)] p-5 shadow-[var(--shadow-chip)] ${toneClasses(platform.tone)}`}
                    key={platform.name}
                  >
                    <h2 className="text-[1.2rem] font-semibold tracking-[-0.04em] text-[var(--color-ink)]">
                      {platform.name}
                    </h2>
                    <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {platform.type}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
                      {platform.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface-muted)]/86 p-5 sm:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    {fromPlatforms.map((platform) => (
                      <span
                        className="rounded-full border border-[var(--color-line)] bg-white/88 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-copy)]"
                        key={platform.name}
                      >
                        {platform.name}
                      </span>
                    ))}
                  </div>
                  <div className="hidden h-px flex-1 bg-[var(--color-line)] lg:block" />
                  <div className="inline-flex items-center justify-center rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-[var(--color-cream)]">
                    Bold
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {promiseCards.map((item) => (
                    <div
                      className="rounded-[1.4rem] border border-[var(--color-line)] bg-white/82 px-4 py-4 text-sm leading-7 text-[var(--color-copy)]"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              How it works
            </p>
            <h2 className="mx-auto mt-4 max-w-[12ch] text-balance text-[clamp(2.2rem,4.8vw,4.1rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[var(--color-ink)]">
              Keep the move simple
            </h2>
            <p className="mx-auto mt-5 max-w-[34rem] text-base leading-8 text-[var(--color-copy)]">
              It does not need to be more dramatic than this.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {migrationSteps.map((step) => (
              <article
                className="rounded-[2rem] border border-[var(--color-line)] bg-white/82 p-6 shadow-[var(--shadow-soft)]"
                key={step.number}
              >
                <span className="inline-flex rounded-full bg-[var(--color-ocean-soft)] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-ocean)]">
                  {step.number}
                </span>
                <h3 className="mt-4 text-[1.15rem] font-semibold leading-[1.1] tracking-[-0.03em] text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[860px] rounded-[2.2rem] border border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-8 text-center text-[var(--color-cream)] shadow-[0_34px_88px_-50px_rgba(19,15,11,0.9)] sm:px-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/34">
              Personal help
            </p>
            <p className="mx-auto mt-4 max-w-[34rem] text-base leading-8 text-white/72">
              You are not getting tossed into a generic queue and told to figure
              it out from docs. We stay close to the migration while it is
              happening.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="text-center">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              Current customers
            </p>
            <h2 className="mx-auto mt-4 max-w-[12ch] text-balance text-[clamp(2.2rem,4.6vw,3.9rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[var(--color-ink)]">
              Already live on Bold
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {customerStories.map((story) => (
              <a
                className="group overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-white/82 shadow-[var(--shadow-panel)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_34px_72px_-42px_rgba(19,15,11,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
                href={story.href}
                key={story.label}
                rel="noreferrer"
                target="_blank"
              >
                <div className="overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-surface-muted)]">
                  <img
                    alt={story.label}
                    className="aspect-[1.28] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    src={story.image}
                  />
                </div>
                <div className="p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {story.category}
                  </p>
                  <h3 className="mt-3 text-[1.25rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--color-ink)]">
                    {story.label}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-copy)]">
                    {story.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          className="mx-auto max-w-[920px] border-t border-[var(--color-line)] px-4 py-16 sm:px-6 md:py-24"
          id="faq"
        >
          <div className="text-center">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--color-muted)]">
              FAQs
            </p>
            <h2 className="mx-auto mt-4 max-w-[12ch] text-balance text-[clamp(2.1rem,4.6vw,3.7rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-[var(--color-ink)]">
              Straight answers for the switch
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqItems.map((item) => (
              <details
                className="group rounded-[1.8rem] border border-[var(--color-line)] bg-white/82 px-5 py-4 shadow-[var(--shadow-soft)]"
                key={item.question}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-base font-semibold leading-7 tracking-[-0.02em] text-[var(--color-ink)] marker:content-none">
                  <span>{item.question}</span>
                  <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-muted)] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pr-12 pt-4 text-sm leading-7 text-[var(--color-copy)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 md:pb-0 lg:px-8">
          <div className="mx-auto overflow-hidden rounded-[2.7rem] border border-[var(--color-line)] bg-[radial-gradient(circle_at_top_left,rgba(67,198,166,0.18),transparent_32%),radial-gradient(circle_at_90%_18%,rgba(20,92,255,0.14),transparent_26%),linear-gradient(180deg,#0d1511_0%,#121d18_100%)] px-6 py-14 text-[var(--color-cream)] shadow-[0_44px_110px_-56px_rgba(13,21,17,0.95)] sm:px-8 md:px-12 md:py-16">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-white/34">
                Ready when you are
              </p>
              <h2 className="mt-4 text-balance text-[clamp(2.3rem,4.8vw,4.4rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
                Bring us your stack. We will show you the clean move.
              </h2>
              <p className="mx-auto mt-5 max-w-[34rem] text-base leading-8 text-white/70">
                Kajabi. Vimeo. Circle. Teachable. Or a stack that needs a
                whiteboard before it makes sense. All fair game.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-signal)] px-6 py-3.5 text-sm font-semibold text-[var(--color-forest)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-button-mint)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-forest)]"
                  href="https://savvycal.com/marcel-from-bold/7838d613"
                  rel="noreferrer"
                  target="_blank"
                >
                  Book the switch call
                </a>
                <Link
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3.5 text-sm font-medium text-[var(--color-cream)] transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-forest)]"
                  href="mailto:support@boldvideo.com?subject=Migration%20to%20Bold"
                >
                  Email us your stack
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  );
}
