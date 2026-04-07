"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type AnnouncementTickerProps = {
  messages: string[];
};

const ROTATE_MS = 4_000;

export function AnnouncementTicker({ messages }: AnnouncementTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, ROTATE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [messages.length]);

  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[var(--color-forest)]/95 text-[0.78rem] text-white/72 backdrop-blur-xl">
      <div className="mx-auto flex h-11 max-w-[1200px] items-center justify-center gap-3 px-4 text-center sm:px-6 lg:px-8">
        <strong
          aria-live="polite"
          className="min-w-0 truncate font-medium text-white"
          key={messages[index]}
        >
          {messages[index]}
        </strong>
        <span className="hidden h-3.5 w-px bg-white/14 sm:block" />
        <Link
          className="shrink-0 font-medium text-[var(--color-signal)] transition-colors hover:text-[var(--color-signal-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-forest)]"
          href="mailto:support@boldvideo.com?subject=Migrate%20to%20Bold"
        >
          See how to migrate
        </Link>
      </div>
    </div>
  );
}
