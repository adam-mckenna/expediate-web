import type { FoodCategory } from "./foodCategories";

/**
 * Maximum possible positive score achievable for each food category.
 * Calculated by summing all positive values in the scoring matrix.
 */
export const CATEGORY_POSITIVE_MAX_SCORES: Record<FoodCategory, number> = {
  fruit: 7, // 2+2+2+1+0+0
  vegetables: 7, // 2+2+2+1+0+0
  "lean-meat-and-fish": 5, // 2+2+1+0+0 (stop before -1)
  "nuts-seeds": 5, // 2+2+1+0+0 (stop before -1)
  "whole-grains": 5, // 2+2+1+0+0 (stop before -1)
  dairy: 3, // 1+1+1+0 (stop before -1)
  "refined-grains": 0, // No positive values
  sweets: 0, // No positive values
  "fried-foods": 0, // No positive values
  "fatty-proteins": 0, // No positive values
  unknown: 0, // No positive values
} as const;

/**
 * Maximum possible negative score (absolute value) for each food category.
 * Calculated by summing all negative values and taking absolute value.
 * Used for progress bars showing how "bad" a negative score is.
 */
export const CATEGORY_NEGATIVE_MAX_SCORES: Record<FoodCategory, number> = {
  fruit: 0, // No negative values
  vegetables: 0, // No negative values
  "lean-meat-and-fish": 1, // |-1|
  "nuts-seeds": 1, // |-1|
  "whole-grains": 1, // |-1|
  dairy: 3, // |-1| + |-2|
  "refined-grains": 10, // |-1| + |-1| + |-2| + |-2| + |-2| + |-2|
  sweets: 12, // |-2| * 6
  "fried-foods": 12, // |-2| * 6
  "fatty-proteins": 10, // |-1| + |-1| + |-2| + |-2| + |-2| + |-2|
  unknown: 7, // Fallback
} as const;

/**
 * Gets the maximum possible positive score for a category
 * @param categoryName - The name of the category
 * @returns The maximum positive score, or 7 as fallback if not found
 */
export const getCategoryPositiveMaxScore = (categoryName: string): number => {
  return CATEGORY_POSITIVE_MAX_SCORES[categoryName as FoodCategory] ?? 7;
};

/**
 * Gets the maximum possible negative score (absolute value) for a category
 * @param categoryName - The name of the category
 * @returns The maximum negative score (as positive number), or 7 as fallback if not found
 */
export const getCategoryNegativeMaxScore = (categoryName: string): number => {
  return CATEGORY_NEGATIVE_MAX_SCORES[categoryName as FoodCategory] ?? 7;
};
