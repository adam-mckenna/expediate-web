"use client";

import { redirect } from "next/navigation";

import {
  ROUTES,
  getCategoryPositiveMaxScore,
  getCategoryNegativeMaxScore,
} from "@/lib/constants";
import { getResultsConfig } from "@/lib/utils";
import { useResults } from "@/lib/hooks";
import { ProgressBar } from "@/components";

const Results = () => {
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
                        {category.name}
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
                        {category.name}
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
                    <p className="text-lg font-bold text-[#757575]">{category.score}</p>
                    <h4 className="font-md font-medium text-[#757575]">{category.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </article>
        )}
      </section>

      <section className="max-w-[640px] mx-auto py-8 grid flex-wrap gap-4 text-gray-950">
        <h2 className="text-2xl w-full font-serif">Complete breakdown</h2>

        <div></div>
      </section>
    </main>
  );
};

export default Results;
