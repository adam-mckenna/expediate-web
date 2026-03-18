import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logApi } from "@/lib/api";
import { LogFoodRequest, Results } from "@/lib/types";
import { ROUTES, URL_PARAMS } from "@/lib/constants";
import { encodeResults } from "@/lib/utils";
import { mergeResults } from "@/domain";
import { LogFoodFieldMode } from "@/components";

type UseLogFoodOptions = {
  mode?: LogFoodFieldMode;
};

/**
 * Hook that logs food and navigates to the results page.
 * @returns A mutation function that logs food and navigates to the results page.
 */
export const useLogFood = ({ mode = "fresh" }: UseLogFoodOptions = {}) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LogFoodRequest) => logApi.logFood(data),
    onSuccess: (data: Results) => {
      if (mode === "fresh") {
        // Fresh logging replaces whatever was previously cached.
        queryClient.setQueryData(["results"], data);
        const encoded = encodeResults(data);
        router.replace(`${ROUTES.RESULTS}?${URL_PARAMS.RESULTS_DATA}=${encoded}`);
        return;
      }

      // Append logging merges new results into whatever is currently cached.
      const current = queryClient.getQueryData<Results>(["results"]);
      const merged = mergeResults(current, data);
      queryClient.setQueryData(["results"], merged);

      const encoded = encodeResults(merged);
      router.push(`${ROUTES.RESULTS}?${URL_PARAMS.RESULTS_DATA}=${encoded}`);
    },
  });
};
