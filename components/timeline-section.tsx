const milestones = [
  {
    year: "2023",
    title: "Founded",
    description: "Bold Video founded with a mission to unlock the potential of video libraries.",
  },
  {
    year: "2024",
    title: "Video platform launch",
    description: "Core video hosting and management platform goes live.",
  },
  {
    year: "2025",
    title: "AI-powered features",
    description: "Interactive AI chat, smart search, and automated metadata optimization.",
  },
  {
    year: "2026",
    title: "Coaching platform",
    description: "Purpose-built tools for online coaching programs at scale.",
  },
];

export function TimelineSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-[940px]">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full border border-eyebrow px-4 py-2 text-base tracking-tight text-eyebrow">
            Our journey
          </span>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-dark md:text-[48px]">
            The Bold vision is in motion.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-eyebrow/30 md:left-1/2 md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex flex-col gap-4 md:flex-row md:items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <span className="text-sm font-semibold tracking-wider text-teal">
                    {milestone.year}
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-slate-dark">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-body-text">
                    {milestone.description}
                  </p>
                </div>

                {/* Dot on the line */}
                <div className="hidden md:flex md:items-start md:justify-center">
                  <div className="relative z-10 mt-1 h-3 w-3 rounded-full bg-teal ring-4 ring-cream" />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
