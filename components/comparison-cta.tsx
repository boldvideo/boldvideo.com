"use client";

import { useModal } from "@/components/modal-context";

export function ComparisonCta() {
  const { openModal } = useModal();

  return (
    <section className="px-5 py-16">
      <div className="mx-auto flex max-w-[940px] flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <button
          onClick={openModal}
          className="rounded-full bg-teal px-6 py-3 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          Request Demo →
        </button>
        <button
          onClick={openModal}
          className="rounded-full border border-eyebrow px-6 py-3 text-base text-slate-dark transition-colors hover:bg-cream-alt focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          Request Access →
        </button>
      </div>
    </section>
  );
}
