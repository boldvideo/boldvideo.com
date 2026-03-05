"use client";

import Image from "next/image";
import { useModal } from "@/components/modal-context";

interface FeatureBlockProps {
  eyebrow: string;
  heading: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  background?: "default" | "alt";
}

export function FeatureBlock({
  eyebrow,
  heading,
  body,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  ctaText,
  background = "default",
}: FeatureBlockProps) {
  const { openModal } = useModal();

  return (
    <section className={`px-5 py-20 ${background === "alt" ? "bg-cream-alt" : ""}`}>
      <div
        className={`mx-auto flex max-w-[1268px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 ${
          imagePosition === "left" ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text side */}
        <div className="w-full flex-1 lg:max-w-[50%]">
          <span className="mb-4 inline-block rounded-full border border-eyebrow px-4 py-2 text-base tracking-tight text-eyebrow">
            {eyebrow}
          </span>

          <h2 className="mb-4 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-dark md:text-[40px]">
            {heading}
          </h2>

          <p className="text-lg leading-relaxed text-body-text md:text-xl md:leading-[1.6] md:tracking-[-0.02em]">
            {body}
          </p>

          {ctaText && (
            <button
              onClick={openModal}
              className="mt-6 rounded-full bg-teal px-6 py-3 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
            >
              {ctaText}
            </button>
          )}
        </div>

        {/* Image side */}
        <div className="w-full flex-1 lg:max-w-[50%]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-alt">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
