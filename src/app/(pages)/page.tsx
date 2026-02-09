"use client";

import { FormEvent, useState } from "react";

import { useLogFood } from "../../lib/hooks/useLogFood";

const Home = () => {
  const [loggedFood, setLoggedFood] = useState("");
  const { mutate: logFood, isPending, error } = useLogFood();

  const handleOnFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    logFood(
      { log: loggedFood },
      {
        onSuccess: () => {
          setLoggedFood("");
        },
      },
    );
  };

  return (
    <main className="grid justify-center min-w-dvw min-h-[calc(100vh-174px)] items-center gap-16">
      <form className="flex flex-wrap gap-4 w-xl" onSubmit={handleOnFormSubmit}>
        <header className="w-full">
          <p className="text-3xl font-black w-full text-center text-slate-900">
            Hey there. 👋
          </p>
          <h1 className="mb-4 text-3xl font-black w-full text-center text-slate-900">
            What did you eat today?
          </h1>
        </header>

        <textarea
          value={loggedFood}
          onChange={({ target }) => setLoggedFood(target.value)}
          className="bg-white p-4 resize-none w-full h-[54px] overflow-hidden text-slate-900 rounded-xl border border-[#C3C3C3] placeholder:text-[#B3B3B3] transition-all focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2"
          placeholder="1 portion oats, 2 apples, 500ml milk, handful fries..."
        />

        {error && (
          <div className="w-full p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="font-semibold">Error:</p>
            <p>
              {error instanceof Error ? error.message : "An error occurred"}
            </p>
          </div>
        )}

        <div className="w-full flex justify-center gap-2">
          <button className="px-6 bg-white rounded border-b-2 border-slate-300 py-2 text-slate-900  uppercase tracking-wider cursor-pointer transition-all hover:bg-slate-200 focus:bg-slate-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2">
            Learn more
          </button>
          <button
            type="submit"
            disabled={!loggedFood.trim() || isPending}
            className="px-6 bg-orange-400 rounded border-b-2 border-orange-800 py-2 text-slate-900  uppercase tracking-wider cursor-pointer transition-all hover:bg-orange-500 focus:bg-orange-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#193C3E] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Processing..." : "Get results"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Home;
