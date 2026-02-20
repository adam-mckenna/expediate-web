type ChevronDirection = "up" | "down" | "left" | "right";

const chevronPaths: Record<ChevronDirection, string> = {
  right: "M8.25 4.5l7.5 7.5-7.5 7.5",
  left: "M15.75 19.5l-7.5-7.5 7.5-7.5",
  up: "M4.5 15.75l7.5-7.5 7.5 7.5",
  down: "M19.5 8.25l-7.5 7.5-7.5-7.5",
};

export const ChevronIcon = ({
  className,
  direction = "right",
}: {
  className?: string;
  direction?: ChevronDirection;
}) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-label={`Chevron ${direction}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d={chevronPaths[direction]}
    />
  </svg>
);
