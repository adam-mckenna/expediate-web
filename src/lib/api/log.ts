import { apiClient } from "./client";
import { Results, LogFoodRequest } from "@/lib/types";
import { API_ENDPOINTS } from "@/lib/constants";

export const logApi = {
  logFood: async (data: LogFoodRequest): Promise<Results> =>
    apiClient.request<Results>(API_ENDPOINTS.LOG, {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
