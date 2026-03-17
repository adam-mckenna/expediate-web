import Link from "next/link";

import {
  FOOD_CATEGORIES,
  FOOD_CATEGORY_DESCRIPTIONS,
  FOOD_CATEGORY_LABELS,
  type FoodCategory,
} from "@/lib/constants/foodCategories";

const CategoriesPage = () => {
  const visibleCategories = FOOD_CATEGORIES.filter(
    (category) => category !== "unknown",
  );

  return (
    <main className="text-slate-800">
      <header className="min-h-62 flex flex-col items-center justify-center gap-1">
        <h1 className="font-serif">Categories</h1>
        <p className="text-[16px] leading-[140%] text-[#757575]">
          Explore every DQS category and the foods that belong in it.
        </p>
      </header>

      <section className="bg-white pb-8 pt-4">
        <div className="p-4 md:p-8 max-w-2xl mx-auto pb-12 text-[#5A5A5A] grid gap-4">
          {visibleCategories.map((category) => (
            <article key={category} className="border-b border-[#E5E5E5] pb-4">
              <h2 className="font-serif">
                <Link
                  href={`/categories/${category}`}
                  className="text-[#088FC4] underline underline-offset-4 hover:text-[#066f97]"
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
