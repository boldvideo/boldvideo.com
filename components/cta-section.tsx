"use client";

import { useModal } from "@/components/modal-context";

export function CtaSection() {
  const { openModal } = useModal();

  return (
    <section className="bg-slate-dark px-5 py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <h2 className="mb-6 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] !text-[#f7f7f7] md:text-[48px]">
          Your students are stuck right now.
        </h2>

        <p className="mb-4 text-lg leading-relaxed text-cream/80 md:text-xl md:leading-[1.6]">
          Somewhere in your program, someone is rewatching a 40-minute module
          looking for one answer.
        </p>

        <p className="mb-10 text-lg leading-relaxed text-cream/80 md:text-xl md:leading-[1.6]">
          Bold can change that. Get early access and we&apos;ll process your
          first 50 videos free so you can see what your library looks like when
          it actually works.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={openModal}
            className="rounded-full bg-teal px-6 py-3 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Request Access →
          </button>
          <button
            onClick={openModal}
            className="rounded-full border border-cream/30 px-6 py-3 text-base text-cream transition-colors hover:border-cream/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Watch the 2-Min Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
