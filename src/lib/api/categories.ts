import { apiClient } from "@/lib/api";
import { API_ENDPOINTS, type FoodCategory } from "@/lib/constants";

/**
 * API endpoints for categories.
 */
export const categoriesApi = {
  /**
   * Gets the items in a category.
   * @param category - The category to get the items for.
   * @returns The items in the category.
   */
  getCategoryItems: async (category: FoodCategory): Promise<string[]> =>
    apiClient.request<string[]>(`${API_ENDPOINTS.CATEGORIES}/${category}`),
};
