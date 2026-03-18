import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logApi } from "@/lib/api";
import { LogFoodRequest, Results } from "@/lib/types";
import { ROUTES, URL_PARAMS } from "@/lib/constants";
import { encodeResults } from "@/lib/utils";
import { mergeResults } from "@/domain/results";

type UseLogFoodOptions = {
  mode?: "home" | "append";
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
