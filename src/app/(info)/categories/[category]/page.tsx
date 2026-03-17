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

const toFoodCategory = (value: string): FoodCategory | null => {
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
  const { category: categorySlug } = await params;
  const category = toFoodCategory(categorySlug);

  if (!category || category === "unknown") {
    notFound();
  }

  const title = FOOD_CATEGORY_LABELS[category];
  const description = FOOD_CATEGORY_DESCRIPTIONS[category];
  const items = await categoriesApi.getCategoryItems(category);

  const columns = 3;
  const perColumn = Math.ceil(items.length / columns) || 1;
  const columnItems = Array.from({ length: columns }, (_, index) =>
    items.slice(index * perColumn, (index + 1) * perColumn),
  );

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

      <section className="bg-white pb-6 lg:pb-2 lg:pb-12 pt-6">
        <div className="px-5 md:px-8 md:py-10 max-w-4xl mx-auto pb-14 text-[oklch(var(--color-text-neutral-softer))]">
          <p className="mb-6">{description}</p>

          <div className="grid gap-8 md:grid-cols-3">
            {columnItems.map((column, columnIndex) => (
              <ul key={columnIndex} className="space-y-2 list-disc pl-5">
                {column.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryDetailPage;
