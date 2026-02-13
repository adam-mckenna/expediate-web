import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logApi } from "@/lib/api";
import { LogFoodRequest, Results } from "@/lib/types";
import { ROUTES } from "@/lib/constants";

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
      // Navigate to results page
      router.push(ROUTES.RESULTS);
    },
  });
};
