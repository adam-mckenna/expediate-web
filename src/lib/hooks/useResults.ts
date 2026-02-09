import { useQueryClient } from "@tanstack/react-query";
import { Results } from "../types/api";

export const useResults = () => {
  const queryClient = useQueryClient();
  const results = queryClient.getQueryData<Results>(["results"]);

  return {
    results: results || null,
  };
};
