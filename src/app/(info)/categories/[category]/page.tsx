import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  FOOD_CATEGORIES,
  FOOD_CATEGORY_DESCRIPTIONS,
  FOOD_CATEGORY_LABELS,
  type FoodCategory,
} from "@/lib/constants/foodCategories";
import { categoriesApi } from "@/lib/api";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const slugToFoodCategory = (value: string): FoodCategory | null => {
  return FOOD_CATEGORIES.includes(value as FoodCategory)
    ? (value as FoodCategory)
    : null;
};

export const metadata: Metadata = {
  title: "Category details | Expediate",
  description:
    "An exhaustive list of every food item considered a by Expediate.",
};

const CategoryDetailPage = async ({ params }: CategoryPageProps) => {
  const { category: slug } = await params;
  const category = slugToFoodCategory(slug);

  if (!category || category === "unknown") {
    notFound();
  }

  const title = FOOD_CATEGORY_LABELS[category];
  const description = FOOD_CATEGORY_DESCRIPTIONS[category];
  const foods = await categoriesApi.getCategoryItems(category);

  return (
    <main className="text-slate-800">
      <header className="min-h-62 px-5 flex flex-col items-center justify-center gap-2 text-center py-8 md:py-12">
        <h1 className="font-serif text-3xl sm:text-h1 leading-tight tracking-tight font-normal">
          {title}
        </h1>
        <p className="text-body leading-relaxed text-[oklch(var(--color-text-neutral-soft))]">
          An exhaustive list of every food item considered a &quot;
          {title.toLowerCase()}&quot; by Expediate.
        </p>
      </header>

      <section className="bg-white pb-6 lg:pb-12 pt-6">
        <div className="rich-text px-5 max-w-4xl mx-auto pb-14 md:px-8 md:py-10">
          <p className="mb-6">{description}</p>

          <ul className="grid w-full md:grid-cols-3">
            {foods.map((food) => (
              <li key={food}>{food}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CategoryDetailPage;
