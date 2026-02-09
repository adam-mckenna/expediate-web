import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { logApi } from "../api/log";
import { LogFoodRequest, Results } from "../types/api";

export const useLogFood = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LogFoodRequest) => logApi.logFood(data),
    onSuccess: (data: Results) => {
      // Cache the results with a query key
      queryClient.setQueryData(["results"], data);
      // Navigate to results page
      router.push("/results");
    },
  });
};
