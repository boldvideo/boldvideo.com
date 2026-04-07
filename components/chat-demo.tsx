"use client";

import { startTransition, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type AnswerFragment = {
  text: string;
  strong?: boolean;
};

type Citation = {
  title: string;
  timestamp: string;
};

type Scenario = {
  query: string;
  context: string;
  answer: AnswerFragment[];
  citations: Citation[];
};

type ChatDemoProps = {
  scenarios: Scenario[];
};

type Stage = "query" | "context" | "thinking" | "answer" | "citations";

function fragmentLength(fragments: AnswerFragment[]) {
  return fragments.reduce((total, fragment) => total + fragment.text.length, 0);
}

function renderFragments(fragments: AnswerFragment[], visibleChars: number) {
  let remaining = visibleChars;

  return fragments.map((fragment, index) => {
    if (remaining <= 0) {
      return null;
    }

    const text = fragment.text.slice(0, remaining);
    remaining -= text.length;

    if (!text) {
      return null;
    }

    if (fragment.strong) {
      return (
        <strong className="font-semibold text-[var(--color-ink)]" key={index}>
          {text}
        </strong>
      );
    }

    return <span key={index}>{text}</span>;
  });
}

export function ChatDemo({ scenarios }: ChatDemoProps) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = scenarios[scenarioIndex];

  const advanceScenario = () => {
    startTransition(() => {
      setScenarioIndex((current) => (current + 1) % scenarios.length);
    });
  };

  return (
    <ChatScene
      key={scenarioIndex}
      onComplete={advanceScenario}
      scenario={scenario}
    />
  );
}

function ChatScene({
  scenario,
  onComplete,
}: {
  scenario: Scenario;
  onComplete: () => void;
}) {
  const [stage, setStage] = useState<Stage>("query");
  const [typedChars, setTypedChars] = useState(0);

  const totalAnswerChars = useMemo(
    () => fragmentLength(scenario.answer),
    [scenario.answer],
  );

  useEffect(() => {
    const timeouts: number[] = [];
    let typingInterval: number | undefined;

    timeouts.push(
      window.setTimeout(() => {
        setStage("context");
      }, 700),
    );

    timeouts.push(
      window.setTimeout(() => {
        setStage("thinking");
      }, 1_550),
    );

    timeouts.push(
      window.setTimeout(() => {
        setStage("answer");

        typingInterval = window.setInterval(() => {
          setTypedChars((current) => {
            if (current >= totalAnswerChars) {
              if (typingInterval) {
                window.clearInterval(typingInterval);
              }

              setStage("citations");

              timeouts.push(
                window.setTimeout(() => {
                  onComplete();
                }, 4_000),
              );

              return current;
            }

            return current + 1;
          });
        }, 15);
      }, 2_450),
    );

    return () => {
      timeouts.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });

      if (typingInterval) {
        window.clearInterval(typingInterval);
      }
    };
  }, [onComplete, totalAnswerChars]);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-line-strong)] bg-[var(--color-surface)] shadow-[var(--shadow-panel)]">
      <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[var(--color-signal)] text-[var(--color-forest)] shadow-[var(--shadow-chip)]">
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5"
              viewBox="0 0 512 512"
              fill="none"
            >
              <path
                clipRule="evenodd"
                d="m27 512v-512h260.196c112.402 0 160.451 58.6113 160.451 129.54 0 70.927-17.805 98.746-54.914 126.354 62.421 16.777 92.881 75.175 92.881 143.768 0 68.592-8.58 80.696-36.251 112.338z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--color-ink)]">
              Ask the library
            </p>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
              Private beta
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-signal)]" />
          347 videos
        </div>
      </div>

      <div className="relative h-[24rem] overflow-hidden px-5 py-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(67,198,166,0.16),transparent_38%)]" />

        <div className="relative flex h-full flex-col gap-3 text-[0.94rem] leading-7">
          <div className="ml-auto max-w-[88%] rounded-[1.6rem] rounded-br-md border border-[var(--color-line)] bg-[var(--color-surface-muted)] px-4 py-3 text-[var(--color-ink)] shadow-[var(--shadow-soft)]">
            {scenario.query}
          </div>

          <div
            className={cn(
              "transition-all duration-300",
              stage === "query"
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100",
            )}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal-soft)] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-signal-ink)]">
              <span className="inline-flex h-2 w-2 items-center justify-center rounded-full border border-current/30">
                <span className="h-1 w-1 rounded-full bg-current" />
              </span>
              {scenario.context}
            </div>
          </div>

          <div
            className={cn(
              "max-w-[92%] transition-all duration-300",
              stage === "query" || stage === "context"
                ? "translate-y-2 opacity-0"
                : "translate-y-0 opacity-100",
            )}
          >
            <div className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-signal-ink)]">
              Bold AI
            </div>

            {stage === "thinking" ? (
              <div className="inline-flex gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 shadow-[var(--shadow-soft)]">
                <span className="h-2 w-2 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-[var(--color-muted)]" />
                <span className="h-2 w-2 animate-[pulse_1.2s_ease-in-out_0.15s_infinite] rounded-full bg-[var(--color-muted)]" />
                <span className="h-2 w-2 animate-[pulse_1.2s_ease-in-out_0.3s_infinite] rounded-full bg-[var(--color-muted)]" />
              </div>
            ) : (
              <div className="rounded-[1.75rem] rounded-tl-md border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-copy)] shadow-[var(--shadow-soft)]">
                {renderFragments(scenario.answer, typedChars)}
                {stage === "answer" && typedChars < totalAnswerChars ? (
                  <span className="ml-0.5 inline-block h-5 w-px animate-pulse bg-[var(--color-ink)] align-middle" />
                ) : null}
              </div>
            )}
          </div>

          <div
            className={cn(
              "mt-1 flex flex-wrap gap-2 transition-all duration-500",
              stage === "citations"
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0",
            )}
          >
            {scenario.citations.map((citation) => (
              <div
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] px-3 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--color-muted)] shadow-[var(--shadow-soft)]"
                key={`${citation.title}-${citation.timestamp}`}
              >
                <span className="rounded-full bg-[var(--color-surface-muted)] px-2 py-0.5 text-[var(--color-ink)]">
                  {citation.timestamp}
                </span>
                {citation.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-[var(--color-line)] px-5 py-4">
        <span className="min-w-0 flex-1 truncate text-sm text-[var(--color-muted)]">
          Ask about pricing, positioning, curriculum, or the exact moment a
          framework is taught.
        </span>
        <button
          aria-label="Send"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-signal)] text-[var(--color-forest)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] focus-visible:ring-offset-2"
          type="button"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
