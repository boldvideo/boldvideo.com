"use client";

import Link from "next/link";
import { useModal } from "@/components/modal-context";
import { BoldLogoIcon } from "@/components/bold-logo";

export function Header() {
  const { openModal } = useModal();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-[1268px] items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Bold Video">
              <BoldLogoIcon className="text-teal" />
            </Link>
            <span className="hidden text-sm tracking-tight text-[#594F50] sm:inline">
              in Private Beta
            </span>
          </div>

          <button
            onClick={openModal}
            className="rounded-full bg-teal px-4 py-2.5 text-sm text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Request Access
          </button>
        </div>
      </header>
    </>
  );
}
