import { useMemo, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { Results } from "@/lib/types";
import { URL_PARAMS } from "@/lib/constants";
import { decodeResults } from "@/lib/utils";
import { splitCategoriesByScore } from "@/domain";

/**
 * Hook that retrieves results from URL params (if present) or React Query cache and organises the data.
 * Focuses on data management - filtering and organising categories by score.
 * @returns Results data and organised categories.
 */
export const useResults = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const encodedData = searchParams.get(URL_PARAMS.RESULTS_DATA);

  // Try to get results from URL first, then fall back to cache.
  const resultsFromUrl = useMemo(() => {
    if (encodedData) {
      return decodeResults(encodedData);
    }
    return null;
  }, [encodedData]);

  const resultsFromCache = queryClient.getQueryData<Results>(["results"]);

  // Use URL data if available, otherwise use cache.
  const results = resultsFromUrl || resultsFromCache || null;

  // If we decoded from URL, cache it for future use.
  useEffect(() => {
    if (resultsFromUrl && !resultsFromCache) {
      queryClient.setQueryData(["results"], resultsFromUrl);
    }
  }, [resultsFromUrl, resultsFromCache, queryClient]);

  const { positiveCategories, negativeCategories, neutralCategories } = useMemo(
    () => splitCategoriesByScore(results),
    [results],
  );

  return {
    results,
    positiveCategories,
    negativeCategories,
    neutralCategories,
  };
};
