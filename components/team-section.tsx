import Image from "next/image";

const team = [
  {
    role: "Founder",
    name: "Marcel Fahle",
    bio: "brings 15+ years of experience building video infrastructure and scalable systems behind top streaming platforms.",
    image: "/images/marcel.jpg",
    social: {
      twitter: "https://x.com/marcelfahle",
      linkedin: "https://www.linkedin.com/in/marcelfahle/",
    },
  },
  {
    role: "Co-founder",
    name: "Rob Hope",
    bio: "has spent 10+ years creating video content - from polished tutorials for top brands like Squarespace to hosting a popular design podcast.",
    image: "/images/rob.jpg",
    social: {
      twitter: "https://x.com/robhope",
      linkedin: "https://www.linkedin.com/in/robhope/",
    },
  },
];

export function TeamSection() {
  return (
    <section id="team" className="px-5 py-24">
      <div className="mx-auto max-w-[940px]">
        <div className="mb-12 text-center">
          <span className="mb-6 inline-block rounded-full border border-eyebrow px-4 py-2 text-base tracking-tight text-eyebrow">
            Bold Team
          </span>
          <h2 className="text-3xl font-semibold leading-[1] tracking-[-0.04em] text-slate-dark md:text-[48px]">
            A duo focused on a meaningful education experience.
          </h2>
        </div>

        <div className="space-y-16 md:space-y-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-6 md:flex-row md:items-center"
            >
              <Image
                src={member.image}
                alt={`${member.name}, Co-founder at Bold Video`}
                width={280}
                height={280}
                loading="eager"
                className="h-[240px] w-[240px] shrink-0 rounded-full object-cover md:h-[200px] md:w-[200px]"
              />
              <div className="text-center md:text-left">
                <p className="text-lg leading-relaxed text-body-text md:text-2xl md:leading-[1.6] md:tracking-[-0.04em]">
                  {member.role}{" "}
                  <strong className="font-bold text-slate-dark">
                    {member.name}
                  </strong>{" "}
                  {member.bio}
                </p>
                <div className="mt-3 flex justify-center gap-3 md:justify-start">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-body-text underline transition-colors hover:text-slate-dark"
                  >
                    Twitter/X
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-body-text underline transition-colors hover:text-slate-dark"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
