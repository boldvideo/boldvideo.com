"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site-content";
import "./mobile-dock.css";

export function MobileDock() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div
        aria-hidden="true"
        className={`mobile-dock-backdrop md:hidden ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside
        aria-hidden={!open}
        aria-label="Mobile navigation"
        className={`mobile-dock-sheet md:hidden ${open ? "is-open" : ""}`}
        role="dialog"
      >
        <span className="mobile-dock-handle" aria-hidden="true" />
        <nav aria-label="Mobile primary" className="mobile-dock-nav">
          {navLinks.map((link, i) => {
            const external = /^https?:\/\//.test(link.href);
            const style = { "--i": i } as CSSProperties;
            const content = (
              <>
                <span>{link.label}</span>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </>
            );
            return external ? (
              <a
                className="mobile-dock-nav-link"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
                rel="noreferrer"
                style={style}
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <Link
                className="mobile-dock-nav-link"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
                style={style}
              >
                {content}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div aria-label="Quick actions" className="mobile-dock md:hidden" role="group">
        <button
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="mobile-dock-toggle"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span aria-hidden="true" className={`mobile-dock-bars ${open ? "is-open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
        <a
          className="mobile-dock-cta"
          href="https://savvycal.com/marcel-from-bold/7838d613"
          rel="noreferrer"
          target="_blank"
        >
          <span aria-hidden="true" className="mobile-dock-dot" />
          Book a demo
        </a>
      </div>
    </>
  );
}
