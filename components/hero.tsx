"use client";

import { useModal } from "@/components/modal-context";
import { VideoEmbed } from "@/components/video-embed";
import { LogoGrid } from "@/components/logo-grid";

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="px-5 py-24">
      <div className="mx-auto flex max-w-[1268px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-10">
        <div className="w-full flex-1 lg:max-w-[50%]">
          <span className="mb-6 inline-block rounded-full border border-eyebrow px-4 py-2 text-base tracking-tight text-eyebrow">
            For online coaching programs
          </span>

          <h1 className="mb-5 text-[40px] font-semibold leading-[1] tracking-[-0.04em] text-slate-dark md:text-[56px] lg:text-[64px]">
            Scale your coaching program without hiring more coaches.
          </h1>

          <p className="mb-6 text-lg leading-relaxed text-body-text md:text-2xl md:leading-[1.5] md:tracking-[-0.04em]">
            Bold turns your video library into 24/7 coaching infrastructure.
            Your students get unstuck at 11pm. You serve 500 students with a
            team of 5.
          </p>

          <button
            onClick={openModal}
            className="mb-10 rounded-full bg-teal px-4 py-2.5 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Request Access →
          </button>

          <LogoGrid />
        </div>

        <div className="w-full flex-1 lg:max-w-[50%]">
          <VideoEmbed />
        </div>
      </div>
    </section>
  );
}
