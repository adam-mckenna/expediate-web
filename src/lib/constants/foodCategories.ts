export const FOOD_CATEGORIES = [
  "fruit",
  "vegetables",
  "lean-meat-and-fish",
  "nuts-seeds",
  "whole-grains",
  "dairy",
  "refined-grains",
  "sweets",
  "fried-foods",
  "fatty-proteins",
  "unknown",
] as const;

export type FoodCategory = (typeof FOOD_CATEGORIES)[number];

export const FOOD_CATEGORY_LABELS: Record<FoodCategory, string> = {
  fruit: "Fruit",
  vegetables: "Vegetables",
  "lean-meat-and-fish": "Lean Meat & Fish",
  "nuts-seeds": "Nuts & Seeds",
  "whole-grains": "Whole Grains",
  dairy: "Dairy",
  "refined-grains": "Refined Grains",
  sweets: "Sweets",
  "fried-foods": "Fried Foods",
  "fatty-proteins": "Fatty Proteins",
  unknown: "Unknown",
};
