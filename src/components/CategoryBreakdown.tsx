"use client";

import { useState } from "react";
import Link from "next/link";

import {
  FOOD_CATEGORY_DESCRIPTIONS,
  FOOD_CATEGORY_LABELS,
  FoodCategory,
  ROUTES,
} from "@/lib/constants";
import { ChevronIcon, InfoIcon } from "@/components";

export type CategoryBreakdownProps = {
  category: {
    name: string;
    score: number;
    logs: Array<{
      score: number;
      food: string;
      unit: string | null;
      quantity: number;
    }>;
  };
  palette: "positive" | "negative" | "neutral";
};

const PALETTE_STYLES = {
  positive: {
    container: "bg-emerald-50 border-l-2 border-emerald-800",
    scoreText: "text-emerald-600",
    bodyText: "text-emerald-900",
    actionText:
      "text-emerald-900 hover:text-emerald-700 focus:text-emerald-700 focus:ring-emerald-700",
  },
  negative: {
    container: "bg-red-50 border-l-2 border-red-800",
    scoreText: "text-red-600",
    bodyText: "text-red-900",
    actionText:
      "text-red-900 hover:text-red-700 focus:text-red-700 focus:ring-red-700",
  },
  neutral: {
    container: "bg-neutral-100 border-l-2 border-neutral-500",
    scoreText: "text-neutral-600",
    bodyText: "text-neutral-700",
    actionText:
      "text-neutral-700 hover:text-neutral-600 focus:text-neutral-600 focus:ring-neutral-600",
  },
};

/**
 * Gives a breakdown of category with score and logs.
 * @param category - The category to display.
 * @param palette - The palette to use.
 * @returns The CategoryBreakdown component.
 */
export const CategoryBreakdown = ({
  category,
  palette,
}: CategoryBreakdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const styles = PALETTE_STYLES[palette];

  return (
    <article className={`grid grid-cols-24 ${styles.container} p-6 pt-5 pb-8`}>
      <aside className="col-span-3">
        <p className="sr-only">
          Your score for {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
        </p>
        <p className={`text-2xl sm:text-3xl font-bold ${styles.scoreText}`}>
          {palette === "positive" && "+"}
          {category.score}
        </p>
      </aside>

      <div className="col-span-21">
        <h3
          className={`text-sm sm:text-base md:text-xl ${styles.bodyText} font-serif mb-1.5`}
        >
          {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
        </h3>
        <p
          className={`text-xs sm:text-sm md:text-base ${styles.bodyText} mb-4`}
        >
          {FOOD_CATEGORY_DESCRIPTIONS[category.name as FoodCategory]}
        </p>

        <div
          className={`mb-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {category.logs.map((log, index) => (
            <div
              key={index}
              className={`flex flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base ${styles.bodyText}`}
            >
              {palette !== "neutral" && (
                <span className={`font-bold ${styles.scoreText}`}>
                  {palette === "positive" && "+"}
                  {log.score}
                </span>
              )}
              <span className="flex flex-wrap gap-1.5">
                <span>
                  {log.quantity} {log.unit}
                </span>
                <span className="font-bold">{log.food}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 sm:gap-3 md:gap-4">
          <Link
            href={`${ROUTES.DQS_EXPLAINED}#${category.name}`}
            className={`flex items-center px-2 py-1.5 sm:px-3 sm:py-2 gap-1 sm:gap-1.5 text-xs sm:text-sm ${styles.actionText} transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded`}
            aria-label={`Learn more about ${FOOD_CATEGORY_LABELS[category.name as FoodCategory]}`}
          >
            <span>Learn more</span>
            <InfoIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center px-2 py-1.5 sm:px-3 sm:py-2 gap-1 sm:gap-1.5 text-xs sm:text-sm cursor-pointer ${styles.actionText} transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded`}
            aria-label={isExpanded ? "Hide breakdown" : "Show breakdown"}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Hide breakdown" : "Show breakdown"}</span>
            <ChevronIcon
              direction="up"
              className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${
                isExpanded ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>
      </div>
    </article>
  );
};
