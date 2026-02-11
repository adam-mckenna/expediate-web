"use client";

import { redirect } from "next/navigation";

import { useResults } from "@/lib/hooks";
import { ROUTES } from "@/lib/constants";

const Results = () => {
  const { results } = useResults();

  if (!results) {
    redirect(ROUTES.HOME);
  }

  return (
    <main className="grid justify-center min-w-dvw min-h-[calc(100vh-174px)] items-center gap-16">
      <div className="grid flex-wrap gap-4 text-gray-950">
        <h2 className="font-semibold text-2xl w-full text-center">
          Your results
        </h2>

        <p className="font-bold">Total DQS: {results.totalScore}</p>

        <div>
          <p className="font-bold">Here&apos;s what you ate today:</p>
          <ul className="list-disc ml-5">
            {Object.values(results.logs)
              .filter((category) => category && category.logs.length > 0)
              .map((category, i) => (
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
        </div>
      </div>
    </main>
  );
};

export default Results;
