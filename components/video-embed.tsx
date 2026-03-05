"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const YOUTUBE_ID = "1NafxLTeC6I";

export function VideoEmbed() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
            title="Bold Video overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className={cn(
              "group absolute inset-0 flex h-full w-full items-center justify-center",
              "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
            )}
            aria-label="Play video: Bold Video 2-minute overview"
          >
            <Image
              src="/images/video-thumbnail.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div
              className={cn(
                "relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-teal shadow-lg",
                "transition-transform duration-200 group-hover:scale-110",
                "motion-reduce:transition-none",
              )}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 h-5 w-5 text-white"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}
      </div>
      <p className="mt-3 text-right text-sm text-[#333]">2-min overview</p>
    </div>
  );
}
