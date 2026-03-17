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
import { ProgressBar, ChevronIcon, InfoIcon, Tooltip, LogFoodField } from "@/components";

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
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article
      className={`grid grid-cols-24 ${
        palette === "positive"
          ? "bg-emerald-50 border-l-2 border-emerald-800"
          : palette === "negative"
            ? "bg-red-50 border-l-2 border-red-800"
            : "bg-neutral-100 border-l-2 border-neutral-500"
      } p-6 pt-5 pb-8`}
    >
      <aside className="col-span-3">
        <p className="sr-only">
          Your score for {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
        </p>
        <p
          className={`text-3xl font-bold ${
            palette === "positive"
              ? "text-emerald-600"
              : palette === "negative"
                ? "text-red-600"
                : "text-neutral-600"
          }`}
        >
          {palette === "positive" && "+"}
          {category.score}
        </p>
      </aside>

      <div className="col-span-21">
        <h3
          className={`text-xl ${
            palette === "positive"
              ? "text-emerald-900"
              : palette === "negative"
                ? "text-red-900"
                : "text-neutral-700"
          } font-serif mb-1.5`}
        >
          {FOOD_CATEGORY_LABELS[category.name as FoodCategory]}
        </h3>
        <p
          className={`${
            palette === "positive"
              ? "text-emerald-900"
              : palette === "negative"
                ? "text-red-900"
                : "text-neutral-700"
          } mb-4`}
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
              className={`flex flex-wrap gap-3 ${
                palette === "positive"
                  ? "text-emerald-900"
                  : palette === "negative"
                    ? "text-red-900"
                    : "text-neutral-700"
              }`}
            >
              {palette !== "neutral" && (
                <span
                  className={`font-bold ${
                    palette === "positive"
                      ? "text-emerald-600"
                      : palette === "negative"
                        ? "text-red-600"
                        : "text-neutral-600"
                  }`}
                >
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

        <div className="flex justify-end gap-4">
          <Link
            href={`${ROUTES.DQS_EXPLAINED}#${category.name}`}
            className={`flex items-center p-2 gap-1.5 ${
              palette === "positive"
                ? "text-emerald-900 hover:text-emerald-700 focus:text-emerald-700 focus:ring-emerald-700"
                : palette === "negative"
                  ? "text-red-900 hover:text-red-700 focus:text-red-700 focus:ring-red-700"
                  : "text-neutral-700 hover:text-neutral-600 focus:text-neutral-600 focus:ring-neutral-600"
            } transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded`}
            aria-label={`Learn more about ${FOOD_CATEGORY_LABELS[category.name as FoodCategory]}`}
          >
            <span>Learn more</span>
            <InfoIcon className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`flex items-center p-2 gap-1.5 cursor-pointer ${
              palette === "positive"
                ? "text-emerald-900 hover:text-emerald-700 focus:text-emerald-700 focus:ring-emerald-700"
                : palette === "negative"
                  ? "text-red-900 hover:text-red-700 focus:text-red-700 focus:ring-red-700"
                  : "text-neutral-700 hover:text-neutral-600 focus:text-neutral-600 focus:ring-neutral-600"
            } transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 rounded`}
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
            <p className="font-serif text-md text-[var(--color-text-neutral-soft)]">
              Your score
            </p>
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

            <p className="text-[var(--color-text-neutral-soft)]">
              {description}
            </p>
          </div>
        </div>
      </header>

      <section className="max-w-[640px] mx-auto py-8 grid flex-wrap gap-4 text-gray-950">
        <h2 className="text-2xl w-full font-serif">Overview</h2>

        {positiveCategories.length > 0 && (
          <article className="mb-4">
            <h3 className="text-[var(--color-text-neutral-soft)]">
              Positive scores
            </h3>

            <div className="grid gap-4 grid-cols-2 mt-2">
              {positiveCategories.map((category, i) => {
                const maxScore = getCategoryPositiveMaxScore(category.name);
                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <p className="text-lg font-bold text-[var(--color-text-positive)]">
                        +{category.score}
                      </p>
                      <Tooltip
                        content={
                          FOOD_CATEGORY_DESCRIPTIONS[
                            category.name as FoodCategory
                          ]
                        }
                      >
                        <div className="flex items-center gap-1 cursor-default">
                          <h4 className="font-md font-medium text-[var(--color-text-positive)]">
                            {
                              FOOD_CATEGORY_LABELS[
                                category.name as FoodCategory
                              ]
                            }
                          </h4>
                          <InfoIcon className="w-4 h-4 text-[var(--color-text-positive)]" />
                        </div>
                      </Tooltip>
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
            <h3 className="text-[var(--color-text-neutral-soft)]">
              Negative scores
            </h3>
            <div className="grid gap-4 grid-cols-2 mt-2">
              {negativeCategories.map(({ name, score }, i) => {
                const maxScore = getCategoryNegativeMaxScore(name);
                const absoluteScore = Math.abs(score);

                return (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <p className="text-lg font-bold text-[var(--color-score-negative)]">
                        {score}
                      </p>
                      <Tooltip
                        content={
                          FOOD_CATEGORY_DESCRIPTIONS[
                            name as FoodCategory
                          ]
                        }
                      >
                        <div className="flex items-center gap-1 cursor-default">
                          <h4 className="font-md font-medium text-[var(--color-text-negative)]">
                            {
                              FOOD_CATEGORY_LABELS[
                                name as FoodCategory
                              ]
                            }
                          </h4>
                          <InfoIcon className="w-4 h-4 text-[var(--color-text-negative)]" />
                        </div>
                      </Tooltip>
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
            <h3 className="text-[var(--color-text-neutral-soft)]">
              Other
            </h3>
            <div className="grid gap-4 grid-cols-2 mt-2">
              {neutralCategories.map(({ logs}, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5">
                      <p className="text-lg font-bold text-[var(--color-text-neutral-soft)]">
                      {logs.length}
                    </p>
                    <h4 className="font-md font-medium text-[var(--color-text-neutral-soft)]">
                      unknown items logged
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

      <section className="mt-8 pt-12 pb-16 bg-[var(--color-brand-primary-soft)] border-t border-[var(--color-brand-primary-soft-border)]">
        <div className="max-w-[640px] mx-auto grid gap-4">
          <header className="grid gap-2 mb-2">
            <h2 className="font-serif text-h2 leading-tight tracking-tight text-[var(--color-text-strong)]">
              Anything else?
            </h2>
            <p className="text-body leading-relaxed text-[var(--color-text-neutral-soft)]">
              Missing entry or midnight snack, we&apos;re not here to judge.
              Add it to today&apos;s entry.
            </p>
          </header>

          <LogFoodField mode="append" />
        </div>
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
