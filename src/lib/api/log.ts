import { apiClient } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/constants";
import type {
  ApiLogFoodRequest,
  ApiLogFoodResponse,
} from "@/lib/contracts/api";

/**
 * API endpoints for logging food.
 */
export const logApi = {
  /**
   * Logs food.
   * @param data - The data to log.
   * @returns The response from the API.
   */
  logFood: async (data: ApiLogFoodRequest): Promise<ApiLogFoodResponse> =>
    apiClient.request<ApiLogFoodResponse>(API_ENDPOINTS.LOG, {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
