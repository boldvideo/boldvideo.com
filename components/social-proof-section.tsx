import Image from "next/image";

const testimonials = [
  {
    quote:
      "Our coaches were answering the same 10 questions every week. Bold cut that in half within the first month.",
    name: "Nico Misleh",
    company: "HRT University",
    logo: "/images/logo-hrt.png",
    logoClassName: "",
  },
  {
    quote:
      "Students started finding answers to things I forgot I'd even taught. That's when I knew it was working.",
    name: "Vanessa Roberts",
    company: "FounderWell",
    logo: "/images/logo-founderwell.png",
    logoClassName: "brightness-0",
  },
  {
    quote:
      "We had 400 hours of partner training content that nobody could search. Now they can.",
    name: "Thomas Newman",
    company: "VIVA Tuition",
    logo: "/images/logo-viva.svg",
    logoClassName: "",
  },
];

export function SocialProofSection() {
  return (
    <section className="bg-cream-alt px-5 py-24">
      <div className="mx-auto max-w-[1268px]">
        <h2 className="mb-16 text-center text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-dark md:text-[40px]">
          Programs using Bold today
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.company}
              className="flex flex-col justify-between rounded-2xl border border-slate-dark/10 bg-cream p-8"
            >
              <div className="mb-6 flex h-12 items-center">
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={200}
                  height={48}
                  className={`h-10 w-auto object-contain object-left ${t.logoClassName}`}
                  unoptimized
                />
              </div>

              <blockquote className="mb-6 flex-1">
                <p className="text-lg leading-relaxed text-body-text">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="border-t border-slate-dark/10 pt-4">
                <span className="block text-sm font-semibold text-slate-dark">
                  {t.name}
                </span>
                <span className="text-sm text-body-text">{t.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
