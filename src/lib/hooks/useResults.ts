import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Results } from "@/lib/types";

/**
 * Hook that retrieves results from React Query cache and organises the data.
 * Focuses on data management - filtering and organising categories by score.
 * @returns Results data and organised categories.
 */
export const useResults = () => {
  const queryClient = useQueryClient();
  const results = queryClient.getQueryData<Results>(["results"]);

  const { positiveCategories, negativeCategories, neutralCategories } =
    useMemo(() => {
      if (!results) {
        return {
          positiveCategories: [],
          negativeCategories: [],
          neutralCategories: [],
        };
      }

      // Extract categories with their names from the object keys
      const categories = Object.entries(results.logs)
        .filter(
          ([, category]) => category !== undefined && category.logs.length > 0,
        )
        .map(([name, category]) => ({
          name: name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase()),
          score: category.score,
          logs: category.logs,
        }));

      const positive = categories.filter(({ score }) => score > 0);
      const negative = categories.filter(({ score }) => score < 0);
      const neutral = categories.filter(({ score }) => score === 0);

      return {
        positiveCategories: positive,
        negativeCategories: negative,
        neutralCategories: neutral,
      };
    }, [results]);

  return {
    results: results || null,
    positiveCategories,
    negativeCategories,
    neutralCategories,
  };
};
