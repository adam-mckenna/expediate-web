"use client";

import { Suspense } from "react";
import { redirect } from "next/navigation";

import {
  ROUTES,
  FOOD_CATEGORY_DESCRIPTIONS,
  FOOD_CATEGORY_LABELS,
  FoodCategory,
  UI_CONSTANTS,
  getCategoryPositiveMaxScore,
  getCategoryNegativeMaxScore,
} from "@/lib/constants";
import { getResultsConfig } from "@/lib/utils";
import { useResults } from "@/lib/hooks";
import {
  ProgressBar,
  InfoIcon,
  Tooltip,
  LogFoodField,
  CategoryBreakdown,
} from "@/components";

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
      <header className={`w-full mb-2 ${backgroundColor} py-10 md:py-20 px-6`}>
        <div className="max-w-[640px] mx-auto grid gap-8 md:grid-cols-14 items-start">
          <div className="md:col-span-3">
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

          <div className="md:col-span-11 grid gap-2">
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

      <section className="max-w-[640px] mx-auto px-6 md:px-0 py-8 grid flex-wrap gap-4 text-gray-950">
        <h2 className="text-2xl w-full font-serif">
          {UI_CONSTANTS.RESULTS.OVERVIEW_TITLE}
        </h2>

        {positiveCategories.length > 0 && (
          <article className="mb-4">
            <h3 className="text-[var(--color-text-neutral-soft)]">
              {UI_CONSTANTS.RESULTS.POSITIVE_SCORES_TITLE}
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
              {UI_CONSTANTS.RESULTS.NEGATIVE_SCORES_TITLE}
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
                          FOOD_CATEGORY_DESCRIPTIONS[name as FoodCategory]
                        }
                      >
                        <div className="flex items-center gap-1 cursor-default">
                          <h4 className="font-md font-medium text-[var(--color-text-negative)]">
                            {FOOD_CATEGORY_LABELS[name as FoodCategory]}
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
              {UI_CONSTANTS.RESULTS.OTHER_TITLE}
            </h3>

            <div className="grid gap-4 grid-cols-2 mt-2">
              {neutralCategories.map(({ logs }, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <p className="text-lg font-bold text-[var(--color-text-neutral-soft)]">
                      {logs.length}
                    </p>
                    <h4 className="font-md font-medium text-[var(--color-text-neutral-soft)]">
                      {UI_CONSTANTS.RESULTS.UNKNOWN_ITEMS_LOGGED}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </article>
        )}
      </section>

      <section className="max-w-[640px] mx-auto px-6 md:px-0 pb-8 grid flex-wrap gap-4 text-gray-950">
        <h2 className="text-2xl w-full font-serif">
          {UI_CONSTANTS.RESULTS.COMPLETE_BREAKDOWN_TITLE}
        </h2>

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
        <div className="max-w-[640px] mx-auto px-6 md:px-0 grid gap-4">
          <header className="grid gap-2 mb-2">
            <h2 className="font-serif text-h2 leading-tight tracking-tight text-[var(--color-text-strong)]">
              {UI_CONSTANTS.RESULTS.ANYTHING_ELSE_TITLE}
            </h2>
            <p className="text-body leading-relaxed text-[var(--color-text-neutral-soft)]">
              {UI_CONSTANTS.RESULTS.ANYTHING_ELSE_DESCRIPTION}
            </p>
          </header>

          <LogFoodField mode="append" />
        </div>
      </section>
    </main>
  );
};

const Results = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ResultsContent />
  </Suspense>
);

export default Results;
