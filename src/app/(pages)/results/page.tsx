"use client";

import { redirect } from "next/navigation";

import { useResults } from "@/app/Context/ResultsContext";

const Results = () => {
  const { results } = useResults();

  if (!results) {
    redirect("/");
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
            {results.scoredLogs.map((log, i) => (
              <li key={i}>{log.food}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Results;
