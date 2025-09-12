"use client";

import { FormEvent, useState } from "react";
import { breeSerif } from "./layout";

type Log = {
  totalScore: number;
  scoredLogs: Array<{
    category: string;
    quantity: number;
    unit: string | null;
    food: string;
    score: number;
  }>;
};

const Home = () => {
  const [results, setResults] = useState<Log | null>();

  const handleOnFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const { value } = form.elements.namedItem("log") as HTMLTextAreaElement;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/log`, {
      method: "POST",
      body: JSON.stringify({ value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  };

  return (
    <main className="grid justify-center min-w-dvw mt-32 gap-16">
      <form className="flex flex-wrap gap-4 w-xl" onSubmit={handleOnFormSubmit}>
        <header className="w-full">
          <p
            className={`${breeSerif.className} text-3xl font-black w-full text-center text-slate-900`}
          >
            Hey there. 👋
          </p>
          <h1
            className={`${breeSerif.className} mb-4 text-3xl font-black w-full text-center text-slate-900`}
          >
            What did you eat today?
          </h1>
        </header>

        <textarea
          name="log"
          className="bg-white p-4 rounded text-lg resize-none shadow-xl w-full min-h-32 h-fit placeholder:text-[#B3B3B3] transition-all focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2"
          placeholder="1 portion oats, 2 bananas, 1 tbsp peanut butter..."
        />

        <button className="w-full bg-orange-400 py-2 text-white text-lg font-black uppercase tracking-wider rounded shadow-xl cursor-pointer transition-all hover:bg-orange-500 focus:bg-orange-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2">
          Send
        </button>
      </form>

      {results ? (
        <div className="grid flex-wrap gap-4">
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
      ) : (
        <></>
      )}
    </main>
  );
};

export default Home;
