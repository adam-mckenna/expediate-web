import type { Metadata } from "next";
import Link from "next/link";

import {
  FOOD_CATEGORIES,
  FOOD_CATEGORY_DESCRIPTIONS,
  FOOD_CATEGORY_LABELS,
  type FoodCategory,
} from "@/lib/constants/foodCategories";

export const metadata: Metadata = {
  title: "DQS food categories | Expediate",
  description:
    "Browse every Diet Quality Score (DQS) category and see which foods belong in each.",
};

const CategoriesPage = () => {
  // Hide the "unknown" category from the list of categories.
  const visibleCategories = FOOD_CATEGORIES.filter(
    (category) => category !== "unknown",
  );

  return (
    <main className="text-slate-800">
      <header className="min-h-62 px-5 flex flex-col items-center justify-center gap-2 text-center py-8 md:py-12">
        <h1 className="font-serif text-3xl sm:text-h1 leading-tight tracking-tight font-normal">
          Categories
        </h1>
        <p className="text-body leading-relaxed text-[oklch(var(--color-text-neutral-soft))]">
          Explore every DQS category and the foods that belong in it.
        </p>
      </header>

      <section className="bg-white pb-2 lg:pb-12 pt-6">
        <div className="rich-text px-5 md:px-8 md:py-10 max-w-2xl mx-auto pb-14 grid gap-4">
          {visibleCategories.map((category) => (
            <article
              key={category}
              className="pb-4 border-b border-[var(--color-footer-border)]"
            >
              <h2 className="font-serif leading-tight tracking-tight">
                <Link
                  href={`/categories/${category}`}
                  className="text-link hover:text-link-hover-alt underline underline-offset-4"
                >
                  {FOOD_CATEGORY_LABELS[category as FoodCategory]}
                </Link>
              </h2>
              <p className="mt-1">
                {FOOD_CATEGORY_DESCRIPTIONS[category as FoodCategory]}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoriesPage;
