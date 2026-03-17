import { apiClient } from "./client";
import { API_ENDPOINTS } from "@/lib/constants";
import type { FoodCategory } from "@/lib/constants/foodCategories";

export const categoriesApi = {
  getCategoryItems: async (category: FoodCategory): Promise<string[]> =>
    apiClient.request<string[]>(`${API_ENDPOINTS.CATEGORIES}/${category}`),
};
