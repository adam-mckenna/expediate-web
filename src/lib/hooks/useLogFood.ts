import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logApi } from "@/lib/api";
import { CategoryLogs, LogFoodRequest, Results } from "@/lib/types";
import { ROUTES, URL_PARAMS } from "@/lib/constants";
import { encodeResults } from "@/lib/utils";

type UseLogFoodOptions = {
  mode?: "home" | "append";
};

const mergeResults = (
  current: Results | undefined,
  incoming: Results,
): Results => {
  if (!current) return incoming;

  const merged: Results = {
    totalScore: current.totalScore + incoming.totalScore,
    logs: { ...current.logs },
  };

  (
    Object.entries(incoming.logs) as Array<
      [keyof Results["logs"], CategoryLogs | undefined]
    >
  ).forEach(([key, category]) => {
    if (!category) return;
    const existing = merged.logs[key];
    if (!existing) {
      merged.logs[key] = { ...category, logs: [...category.logs] };
    } else {
      merged.logs[key] = {
        name: existing.name,
        score: existing.score + category.score,
        logs: [...existing.logs, ...category.logs],
      };
    }
  });

  return merged;
};

/**
 * Hook that logs food and navigates to the results page.
 * @returns A mutation function that logs food and navigates to the results page.
 */
export const useLogFood = ({ mode = "home" }: UseLogFoodOptions = {}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LogFoodRequest) => logApi.logFood(data),
    onSuccess: (data: Results) => {
      if (mode === "append") {
        const current = queryClient.getQueryData<Results>(["results"]);
        const merged = mergeResults(current, data);
        queryClient.setQueryData(["results"], merged);
        const encoded = encodeResults(merged);
        router.replace(
          `${ROUTES.RESULTS}?${URL_PARAMS.RESULTS_DATA}=${encoded}`,
        );
      } else {
        // Cache the results with a query key
        queryClient.setQueryData(["results"], data);
        // Encode results and add to URL
        const encoded = encodeResults(data);
        // Navigate to results page with encoded data in URL
        router.push(`${ROUTES.RESULTS}?${URL_PARAMS.RESULTS_DATA}=${encoded}`);
      }
    },
  });
};
