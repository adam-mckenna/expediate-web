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
      <header className="min-h-62 flex flex-col items-center justify-center gap-1">
        <h1 className="font-serif text-[42px] leading-[120%] tracking-[-0.02em] font-normal">
          {title}
        </h1>
        <p className="text-[16px] leading-[140%] text-[#757575]">
          An exhaustive list of every food item considered a &quot;
          {title.toLowerCase()}&quot; by Expediate.
        </p>
      </header>

      <section className="bg-white pb-8 pt-4">
        <div className="p-4 md:p-8 max-w-4xl mx-auto pb-12 text-[#5A5A5A]">
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
