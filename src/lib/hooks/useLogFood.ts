import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logApi } from "@/lib/api";
import { LogFoodRequest, Results } from "@/lib/types";
import { ROUTES, URL_PARAMS } from "@/lib/constants";
import { encodeResults } from "@/lib/utils";

/**
 * Hook that logs food and navigates to the results page.
 * @returns A mutation function that logs food and navigates to the results page.
 */
export const useLogFood = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LogFoodRequest) => logApi.logFood(data),
    onSuccess: (data: Results) => {
      // Cache the results with a query key
      queryClient.setQueryData(["results"], data);
      // Encode results and add to URL
      const encoded = encodeResults(data);
      // Navigate to results page with encoded data in URL
      router.push(`${ROUTES.RESULTS}?${URL_PARAMS.RESULTS_DATA}=${encoded}`);
    },
  });
};
