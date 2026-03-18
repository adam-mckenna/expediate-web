import type { Results } from "@/lib/types";

export type ScoredCategory = {
  name: string;
  score: number;
  logs: Results["logs"][string]["logs"];
};

export const splitCategoriesByScore = (results: Results | null) => {
  if (!results) {
    return {
      positiveCategories: [] as ScoredCategory[],
      negativeCategories: [] as ScoredCategory[],
      neutralCategories: [] as ScoredCategory[],
    };
  }

  const categories: ScoredCategory[] = Object.entries(results.logs)
    .filter(([, category]) => category.logs.length > 0)
    .map(([name, category]) => ({
      name,
      score: category.score,
      logs: category.logs,
    }));

  return {
    positiveCategories: categories.filter(({ score }) => score > 0),
    negativeCategories: categories.filter(({ score }) => score < 0),
    neutralCategories: categories.filter(({ score }) => score === 0),
  };
};
