"use client";

import Link from "next/link";
import { useModal } from "@/components/modal-context";
import { BoldLogoWordmark } from "@/components/bold-logo";

export function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-slate-dark px-5 text-cream">
      <div className="mx-auto max-w-[1268px]">
        {/* Top nav row */}
        <div className="border-b border-footer-muted/40 py-6">
          <div className="flex flex-wrap items-start justify-between gap-4 sm:items-center">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <Link href="/" aria-label="Bold Video">
                <BoldLogoWordmark className="text-[#f7f7f7]" />
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  href="/#features"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Why Bold?
                </Link>
                <Link
                  href="/#team"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Team
                </Link>
              </div>
            </div>
            <button
              onClick={openModal}
              className="rounded-full bg-teal px-6 py-3 text-base text-[#FFFEFB] transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm"
            >
              Request Demo
            </button>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-sm text-footer-muted">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/boldvideo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/boldvid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="mailto:rob@boldvideo.com"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm text-footer-muted">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://docs.boldvideo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="https://docs.boldvideo.com/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="https://docs.boldvideo.com/sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  SDK
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm text-footer-muted">Comparisons</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/vs-youtube"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  vs YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="/vs-vimeo"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  vs Vimeo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm text-footer-muted">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm text-footer-muted">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.linkedin.com/company/boldvideo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/boldvid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  @boldvid
                </a>
              </li>
              <li>
                <a
                  href="mailto:rob@boldvideo.com"
                  className="text-sm text-cream transition-colors hover:text-white"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-footer-muted/40 py-7 md:flex-row">
          <p className="text-sm text-footer-muted">
            &copy;{new Date().getFullYear()} Bold Video. All Rights Reserved.
          </p>
          <a
            href="mailto:support@boldvideo.com"
            className="text-sm text-footer-muted transition-colors hover:text-cream"
          >
            support@boldvideo.com
          </a>
        </div>
      </div>
    </footer>
  );
}
