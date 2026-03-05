const steps = [
  {
    number: "01",
    title: "Drop in your library",
    description:
      "Upload or connect Zoom, Google Drive, YouTube. Bold transcribes and indexes everything automatically.",
  },
  {
    number: "02",
    title: "Configure your AI coach",
    description:
      "Set the voice, the personality, the boundaries. Attach your frameworks and resources. Takes 30 minutes.",
  },
  {
    number: "03",
    title: "Students start asking",
    description:
      "Embed the player in your existing platform or use Bold's hosted portal. Your content starts answering questions on day one.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-[1268px]">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-eyebrow px-4 py-2 text-base tracking-tight text-eyebrow">
            Getting started
          </span>
          <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-dark md:text-[48px]">
            Live in days, not months.
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line between steps on desktop */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-8 translate-x-full bg-eyebrow/30 md:block" />
              )}

              <span className="mb-4 block text-4xl font-semibold tracking-tight text-teal/40">
                {step.number}
              </span>

              <h3 className="mb-3 text-xl font-semibold text-slate-dark">
                {step.title}
              </h3>

              <p className="text-base leading-relaxed text-body-text">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
