import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  markClassName?: string;
  labelClassName?: string;
};

export function SiteLogo({
  className,
  markClassName,
  labelClassName,
}: SiteLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--color-signal)] text-[var(--color-forest)] shadow-[var(--shadow-chip)]",
          markClassName,
        )}
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
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
      <span
        className={cn(
          "text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-ink)]",
          labelClassName,
        )}
      >
        Bold
      </span>
    </span>
  );
}
