import { apiClient } from "./client";
import { API_ENDPOINTS } from "@/lib/constants";
import type {
  ApiLogFoodRequest,
  ApiLogFoodResponse,
} from "@/lib/contracts/api";

export const logApi = {
  logFood: async (data: ApiLogFoodRequest): Promise<ApiLogFoodResponse> =>
    apiClient.request<ApiLogFoodResponse>(API_ENDPOINTS.LOG, {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
