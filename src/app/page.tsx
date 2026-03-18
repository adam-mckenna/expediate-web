import type { Metadata } from "next";

import { LogFoodField } from "@/components";

export const metadata: Metadata = {
  title: "Log today’s food | Expediate",
  description:
    "Quickly log what you ate today and get an instant Diet Quality Score.",
};

const Home = () => (
  <main className="px-5 py-10 md:py-16 flex justify-center min-w-dvw min-h-[calc(100vh-174px)] items-center">
    <div className="flex flex-wrap gap-6 w-full max-w-xl">
      <header className="w-full mb-2">
        <p className="mb-2 font-serif text-4xl font-medium w-full text-center text-slate-900">
          Hey there. 👋
        </p>
        <h1 className="font-serif mb-4 text-4xl font-medium w-full text-center text-slate-900">
          What did you eat today?
        </h1>
      </header>

      <LogFoodField mode="fresh" />
    </div>
  </main>
);

export default Home;
