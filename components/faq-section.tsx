"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "Most libraries are fully processed within 24-48 hours. You can start with a single collection and expand.",
  },
  {
    question: "Does it work with my existing platform?",
    answer:
      "Bold is headless. Embed it in Kajabi, Circle, your custom site, or use our hosted portal. Your call.",
  },
  {
    question: "What if the AI gives a wrong answer?",
    answer:
      "Bold only answers from your content. Every response comes with a timestamp citation so students (and you) can verify. No hallucinated advice.",
  },
  {
    question: "How accurate are the AI responses?",
    answer:
      "We use a two-tier retrieval system that first selects the right videos, then synthesizes answers from that bounded set. This is why our citations are accurate and generic AI tools aren't.",
  },
  {
    question: "What does it cost?",
    answer:
      "Bold starts at $500/month for programs with up to 100 hours and 500 active students. Pricing scales with your library and audience. Request access and we'll find the right fit.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-dark/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span className="pr-4 text-lg font-semibold text-slate-dark">
          {question}
        </span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className={cn(
            "h-5 w-5 shrink-0 text-slate-dark transition-transform duration-200",
            isOpen && "rotate-180",
            "motion-reduce:transition-none",
          )}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-base leading-relaxed text-body-text">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-5 py-24">
      <div className="mx-auto max-w-[800px]">
        <h2 className="mb-12 text-center text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-slate-dark md:text-[40px]">
          Questions you might have
        </h2>

        <div>
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
