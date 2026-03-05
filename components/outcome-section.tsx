"use client";

import { useModal } from "@/components/modal-context";

export function OutcomeSection() {
  const { openModal } = useModal();

  return (
    <section className="bg-slate-dark px-5 py-24">
      <div className="mx-auto max-w-[940px] text-center">
        <span className="mb-6 inline-block rounded-full border border-teal/40 px-4 py-2 text-base tracking-tight text-teal">
          The math
        </span>

        <h2 className="mb-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-white md:text-[48px]">
          A 2-3% bump in retention on a $5M program? That&apos;s $100K+ you
          stopped leaving on the table.
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-cream/70 md:text-2xl md:leading-[1.5] md:tracking-[-0.04em]">
          Same team. Same content. Students just stop falling through the
          cracks.
        </p>

        <button
          onClick={openModal}
          className="rounded-full bg-teal px-6 py-3 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          See how it works →
        </button>
      </div>
    </section>
  );
}
