interface ProgressBarProps {
  current: number;
  max: number;
  variant?: "positive" | "negative";
  className?: string;
}

export const ProgressBar = ({
  current,
  max,
  variant = "positive",
  className = "",
}: ProgressBarProps) => {
  // Clamp current value between 0 and max
  const clampedCurrent = Math.max(0, Math.min(current, max));
  const percentage = max > 0 ? (clampedCurrent / max) * 100 : 0;

  const barStyle =
    variant === "negative"
      ? {
          width: `${percentage}%`,
          background: "linear-gradient(to right, #C00F0C, #EC221F)",
        }
      : {
          width: `${percentage}%`,
          background: "#14AE5C",
        };

  return (
    <div
      className={`w-full bg-gray-200 rounded-full h-4 overflow-hidden ${className}`}
    >
      <div
        className="h-full transition-all duration-300 ease-out"
        style={barStyle}
        role="progressbar"
        aria-valuenow={clampedCurrent}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={`Progress: ${clampedCurrent} out of ${max}`}
      />
    </div>
  );
};
