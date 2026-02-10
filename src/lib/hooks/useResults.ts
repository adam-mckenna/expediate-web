import { useQueryClient } from "@tanstack/react-query";

import { Results } from "@/lib/types";

export const useResults = () => {
  const queryClient = useQueryClient();
  const results = queryClient.getQueryData<Results>(["results"]);

  return {
    results: results || null,
  };
};
