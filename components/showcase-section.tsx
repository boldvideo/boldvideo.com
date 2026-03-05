"use client";

import Image from "next/image";
import { useModal } from "@/components/modal-context";
import { BoldLogoIcon } from "@/components/bold-logo";

interface ShowcaseSectionProps {
  eyebrow?: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
}

export function ShowcaseSection({
  eyebrow,
  heading,
  body,
  imageSrc,
  imageAlt,
  ctaText,
}: ShowcaseSectionProps) {
  const { openModal } = useModal();

  return (
    <section className="bg-slate-dark px-5 py-24">
      <div className="mx-auto max-w-[1268px]">
        {/* Top area with logo and text */}
        <div className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-left">
          <BoldLogoIcon className="mb-8 h-10 w-10 text-teal" />

          {eyebrow && (
            <span className="mb-4 inline-block rounded-full border border-teal/40 px-4 py-2 text-base tracking-tight text-teal">
              {eyebrow}
            </span>
          )}

          <h2 className="mb-4 max-w-[700px] text-3xl font-semibold leading-[1.1] tracking-[-0.04em] !text-[#f7f7f7] md:text-[48px]">
            {heading}
          </h2>

          <p className="mb-8 max-w-[600px] text-lg leading-relaxed text-cream/70 md:text-xl md:leading-[1.6]">
            {body}
          </p>

          {ctaText && (
            <button
              onClick={openModal}
              className="rounded-full bg-teal px-6 py-3 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              {ctaText}
            </button>
          )}
        </div>

        {/* Large image */}
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1268px) 100vw, 1268px"
          />
        </div>
      </div>
    </section>
  );
}
