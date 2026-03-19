import { UpArrowIcon, NeutralIcon, DownArrowIcon } from "@/components";
import { type ResultsType, type ResultsConfig } from "@/lib/types";

/**
 * Configurations for the results page.
 */
export const RESULTS_CONFIGS: Record<ResultsType, ResultsConfig> = {
  good: {
    type: "good",
    backgroundColor: "bg-emerald-900/10",
    textColor: "text-slate-900",
    title: "Nice, you smashed it today.",
    description:
      "Today you ate lots of whole foods and avoided refined, fried and sweets foods. Keep up the good work.",
    gradientClass: "positive-gradient",
    Icon: UpArrowIcon,
    iconClassName: "w-4 h-4",
    iconColor: "text-green-500",
  },
  neutral: {
    type: "neutral",
    backgroundColor: "bg-neutral-600/10",
    textColor: "text-slate-900",
    title: "Not bad, but could be better.",
    description:
      "You had a balanced day with some good choices and some not-so-great ones. Try to focus on whole foods tomorrow.",
    gradientClass: "neutral-gradient",
    Icon: NeutralIcon,
    iconClassName: "w-4 h-4",
    iconColor: "text-gray-500",
  },
  negative: {
    type: "negative",
    backgroundColor: "bg-red-50",
    textColor: "text-slate-900",
    title: "Tomorrow is a new day.",
    description:
      "Today wasn't ideal, but that's okay. Focus on adding more whole foods, fruits, and vegetables tomorrow.",
    gradientClass: "negative-gradient",
    Icon: DownArrowIcon,
    iconClassName: "w-6 h-6",
    iconColor: "text-red-500",
  },
};
