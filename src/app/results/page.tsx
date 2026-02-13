"use client";

import { redirect } from "next/navigation";

import { ROUTES } from "@/lib/constants";
import { getResultsConfig } from "@/lib/utils";
import { useResults } from "@/lib/hooks";

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

        <article>
          <h3 className="text-[#757575]">Positive scores</h3>

          <ul className="list-disc ml-5">
            {positiveCategories.map((category, i) => (
              <li key={i}>
                {category.logs.map((log, j) => (
                  <span key={j}>
                    {log.food}
                    {j < category.logs.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-[#757575]">Negative scores</h3>
          <ul className="list-disc ml-5 mt-4">
            {negativeCategories.map((category, i) => (
              <li key={i}>
                {category.logs.map((log, j) => (
                  <span key={j}>
                    {log.food}
                    {j < category.logs.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </article>

        <article>
          <h3 className="text-[#757575]">Other</h3>
          <ul className="list-disc ml-5 mt-4">
            {neutralCategories.map((category, i) => (
              <li key={i}>
                {category.logs.map((log, j) => (
                  <span key={j}>
                    {log.food}
                    {j < category.logs.length - 1 ? ", " : ""}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="max-w-[640px] mx-auto py-8 grid flex-wrap gap-4 text-gray-950">
        <h2 className="text-2xl w-full font-serif">Complete breakdown</h2>

        <div></div>
      </section>
    </main>
  );
};

export default Results;
