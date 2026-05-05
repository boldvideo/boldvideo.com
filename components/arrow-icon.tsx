type Direction = "right" | "left";
type Variant = "chevron" | "long";

const PATHS: Record<Variant, Record<Direction, string>> = {
  chevron: {
    right: "M5 2l5 5-5 5",
    left: "M9 2L4 7l5 5",
  },
  long: {
    right: "M3 7H11M11 7L7 3M11 7L7 11",
    left: "M11 7H3M3 7L7 3M3 7L7 11",
  },
};

export function ArrowIcon({
  dir = "right",
  variant = "chevron",
  className,
}: {
  dir?: Direction;
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      height="14"
      viewBox="0 0 14 14"
      width="14"
    >
      <path
        d={PATHS[variant][dir]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
