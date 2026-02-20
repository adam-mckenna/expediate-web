"use client";

import { Suspense, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

import {
  ROUTES,
  FOOD_CATEGORY_DESCRIPTIONS,
  FOOD_CATEGORY_LABELS,
  FoodCategory,
  getCategoryPositiveMaxScore,
  getCategoryNegativeMaxScore,
} from "@/lib/constants";
import { getResultsConfig } from "@/lib/utils";
import { useResults } from "@/lib/hooks";
import { ProgressBar, ChevronIcon, InfoIcon } from "@/components";

type CategoryBreakdownProps = {
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

const CategoryBreakdown = ({ category, palette }: CategoryBreakdownProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <article
      className={`grid grid-cols-12 ${palette === "positive" ? "bg-[#EBFFEE] border-l-2 border-[#02542D]" : palette === "negative" ? "bg-[#FEE9E7] border-l-2 border-[#900B09]" : "bg-[#F5F5F5] border-l-2 border-[#757575]"} p-6 pt-5 pb-8`}
    >
      <aside className="col-span-1">
        <p className="sr-only">
          Your score for {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
        </p>
        <p
          className={`text-lg font-bold ${palette === "positive" ? "text-[#14AE5C]" : palette === "negative" ? "text-[#C00F0C]" : "text-[#757575]"}`}
        >
          {palette === "positive" && "+"}
          {category.score}
        </p>
      </aside>

      <div className="col-span-11">
        <h3
          className={`text-xl ${palette === "positive" ? "text-[#02542D]" : palette === "negative" ? "text-[#900B09]" : "text-[#757575]"} font-serif mb-1.5`}
        >
          {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
        </h3>
        <p
          className={`${palette === "positive" ? "text-[#02542D]" : palette === "negative" ? "text-[#900B09]" : "text-[#757575]"} mb-4`}
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
              className={`flex flex-wrap gap-3 ${palette === "positive" ? "text-[#02542D]" : palette === "negative" ? "text-[#900B09]" : "text-[#757575]"}`}
            >
              {palette !== "neutral" && (
                <span
                  className={`font-bold ${palette === "positive" ? "text-[#14AE5C]" : palette === "negative" ? "text-[#900B09]" : "text-[#757575]"}`}
                >
                  {palette === "positive" && "+"}
                  {log.score}
                </span>
              )}
              <span className="flex flex-wrap gap-1.5">
              <span>{log.quantity} {log.unit}</span>
              <span className="font-bold">{log.food}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4">
          <Link
            href={`${ROUTES.DQS_EXPLAINED}#${category.name}`}
            className={`flex items-center p-2 gap-1.5 ${palette === "positive" ? "text-[#02542D]" : palette === "negative" ? "text-[#900B09]" : "text-[#757575]"} ${palette === "positive" ? "hover:text-[#01402a]" : palette === "negative" ? "hover:text-[#7a0604]" : "hover:text-[#606060]"} transition-all focus:outline-none focus:ring-2 focus:ring-[#02542D] focus:ring-offset-2 rounded`}
            aria-label={`Learn more about ${FOOD_CATEGORY_LABELS[category.name as FoodCategory]}`}
          >
            <span>Learn more</span>
            <InfoIcon className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center p-2 gap-1.5 cursor-pointer ${palette === "positive" ? "text-[#02542D]" : palette === "negative" ? "text-[#900B09]" : "text-[#757575]"} ${palette === "positive" ? "hover:text-[#01402a]" : palette === "negative" ? "hover:text-[#7a0604]" : "hover:text-[#606060]"} transition-all focus:outline-none focus:ring-2 focus:ring-[#02542D] focus:ring-offset-2 rounded`}
            aria-label={isExpanded ? "Hide breakdown" : "Show breakdown"}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Hide breakdown" : "Show breakdown"}</span>
            <ChevronIcon
              direction="up"
              className={`w-4 h-4 transition-transform duration-200 ${
                isExpanded ? "" : "rotate-180"
              }`}
            />
          </button>
        </div>
      </div>
    </article>
  );
};

const ResultsContent = () => {
  /**
   * Gets the results data and categories from the useResults hook.
   */
  const { results, positiveCategories, negativeCategories, neutralCategories } =
    useResults();

  /**
   * Redirects to the home page if there are no results.
   */
  if (!results) {
    redirect(ROUTES.HOME);
  }

  /**
   * Gets the result config from the getResultConfig function.
   */
  const {
    backgroundColor,
    textColor,
    title,
    description,
    gradientClass,
    iconColor,
    iconClassName,
    Icon,
  } = getResultsConfig(results.totalScore);

  return (
    <main className="bg-white min-h-[calc(100vh-174px)]">
      <header className={`w-full mb-2 ${backgroundColor} py-20`}>
        <div className="max-w-[640px] mx-auto grid gap-8 grid-cols-14 items-start">
          <div className="col-span-3">
            <p className="font-serif text-sm text-[#757575]">Your score</p>
            <div className="flex items-start">
              <span className={`${gradientClass || ""} text-8xl font-bold`}>
                {results.totalScore}
              </span>
              <span
                className={`inline-block align-middle mt-1.5 ml-0.5 ${iconColor}`}
              >
                <Icon className={iconClassName} />
              </span>
            </div>
          </div>

          <div className="col-span-11 grid gap-2">
            <h2
              className={`font-serif text-3xl font-medium w-full ${textColor}`}
            >
              {title}
            </h2>

            <p className="text-[#757575]">{description}</p>
          </div>
        </div>
      </header>

      <section className="max-w-[640px] mx-auto py-8 grid flex-wrap gap-4 text-gray-950">
        <h2 className="text-2xl w-full font-serif">Overview</h2>

        {positiveCategories.length > 0 && (
          <article className="mb-4">
            <h3 className="text-[#757575]">Positive scores</h3>

            <div className="grid gap-4 grid-cols-2 mt-2">
              {positiveCategories.map((category, i) => {
                const maxScore = getCategoryPositiveMaxScore(category.name);
                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <p className="text-lg font-bold text-[#02542D]">
                        +{category.score}
                      </p>
                      <h4 className="font-md font-medium text-[#02542D]">
                        {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
                      </h4>
                    </div>
                    <ProgressBar current={category.score} max={maxScore} />
                  </div>
                );
              })}
            </div>
          </article>
        )}

        {negativeCategories.length > 0 && (
          <article className="mb-4">
            <h3 className="text-[#757575]">Negative scores</h3>
            <div className="grid gap-4 grid-cols-2 mt-2">
              {negativeCategories.map((category, i) => {
                const maxScore = getCategoryNegativeMaxScore(category.name);
                const absoluteScore = Math.abs(category.score);
                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <p className="text-lg font-bold text-[#C00F0C]">
                        {category.score}
                      </p>
                      <h4 className="font-md font-medium text-[#900B09]">
                        {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
                      </h4>
                    </div>
                    <ProgressBar
                      current={absoluteScore}
                      max={maxScore}
                      variant="negative"
                    />
                  </div>
                );
              })}
            </div>
          </article>
        )}

        {neutralCategories.length > 0 && (
          <article className="mb-4">
            <h3 className="text-[#757575]">Other</h3>
            <div className="grid gap-4 grid-cols-2 mt-2">
              {neutralCategories.map((category, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <p className="text-lg font-bold text-[#757575]">
                      {category.score}
                    </p>
                    <h4 className="font-md font-medium text-[#757575]">
                      {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </article>
        )}
      </section>

      <section className="max-w-[640px] mx-auto pb-8 grid flex-wrap gap-4 text-gray-950">
        <h2 className="text-2xl w-full font-serif">Complete breakdown</h2>

        {positiveCategories.map((category) => (
          <CategoryBreakdown
            key={category.name}
            category={category}
            palette="positive"
          />
        ))}

        {negativeCategories.map((category) => (
          <CategoryBreakdown
            key={category.name}
            category={category}
            palette="negative"
          />
        ))}

        {neutralCategories.map((category) => (
          <CategoryBreakdown
            key={category.name}
            category={category}
            palette="neutral"
          />
        ))}
      </section>
    </main>
  );
};

const Results = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultsContent />
    </Suspense>
  );
};

export default Results;
