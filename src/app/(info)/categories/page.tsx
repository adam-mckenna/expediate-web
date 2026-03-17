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
  description: "Browse every Diet Quality Score category and see which foods belong in each.",
};

const CategoriesPage = () => {
  const visibleCategories = FOOD_CATEGORIES.filter(
    (category) => category !== "unknown",
  );

  return (
    <main className="text-slate-800">
      <header className="min-h-62 flex flex-col items-center justify-center gap-1">
        <h1 className="font-serif text-h1 leading-tight tracking-tight font-normal">
          Categories
        </h1>
        <p className="text-body leading-relaxed text-[oklch(var(--color-text-neutral-soft))]">
          Explore every DQS category and the foods that belong in it.
        </p>
      </header>

      <section className="bg-white pb-8 pt-4">
        <div className="p-4 md:p-8 max-w-2xl mx-auto pb-12 text-[oklch(var(--color-text-neutral-softer))] grid gap-4">
          {visibleCategories.map((category) => (
            <article
              key={category}
              className="border-b border-[oklch(var(--color-surface-neutral-border))] pb-4"
            >
              <h2 className="font-serif text-h2 leading-tight tracking-tight">
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
