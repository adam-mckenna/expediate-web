interface ProgressBarProps {
  current: number;
  max: number;
  variant?: "positive" | "negative";
  className?: string;
}

/**
 * A progress bar that displays the current value as a percentage of the maximum value.
 * @param current - The current value of the progress bar.
 * @param max - The maximum value of the progress bar.
 * @param variant - The variant of the progress bar.
 * @param className - The class name of the progress bar.
 * @returns The ProgressBar component.
 */
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
          background:
            "linear-gradient(to right, var(--color-negative-gradient-from), var(--color-negative-gradient-to))",
        }
      : {
          width: `${percentage}%`,
          background:
            "linear-gradient(to right, var(--color-positive-gradient-from), var(--color-positive-gradient-to))",
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
