"use client";

import { useModal } from "@/components/modal-context";

export function WhoItsForSection() {
  const { openModal } = useModal();

  return (
    <section className="bg-cream-alt px-5 py-24">
      <div className="mx-auto max-w-[800px]">
        <span className="mb-4 inline-block rounded-full border border-eyebrow px-4 py-2 text-base tracking-tight text-eyebrow">
          Is this you?
        </span>

        <h2 className="mb-6 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-dark md:text-[40px]">
          Bold is built for programs that already have the content.
        </h2>

        <div className="space-y-4 text-lg leading-relaxed text-body-text md:text-xl md:leading-[1.6]">
          <p>
            If you&apos;re sitting on 100+ hours of video training and 200+
            active students, you&apos;re exactly who we built this for. Your
            content is good. Your students just can&apos;t find it when they need
            it, and your coaches can&apos;t scale to answer every question at
            every hour.
          </p>

          <p>
            We&apos;re not a video hosting company competing on storage prices.
            We&apos;re not a course platform selling you templates. We&apos;re
            the intelligence layer that turns a content library into something
            students can actually use.
          </p>

          <p className="font-semibold text-slate-dark">
            If you&apos;re still building your first course, we&apos;re not the
            right fit yet. And that&apos;s fine. Come back when your library hits
            critical mass. We&apos;ll be here.
          </p>
        </div>

        <button
          onClick={openModal}
          className="mt-8 rounded-full bg-teal px-6 py-3 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        >
          Request Access →
        </button>
      </div>
    </section>
  );
}
