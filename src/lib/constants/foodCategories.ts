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

export const FOOD_CATEGORY_DESCRIPTIONS: Record<FoodCategory, string> = {
  fruit:
    "Fruit is a good source of vitamins and minerals, and is low in calories.",
  vegetables:
    "Vegetables are a good source of vitamins and minerals, and is low in calories.",
  "lean-meat-and-fish":
    "Lean meat and fish are a good source of protein and iron.",
  "nuts-seeds":
    "Though rich in fat, nuts and seeds, such as almonds or chia, are widely considered nutritious.",
  "whole-grains":
    "Grains that are unrefined, such as brown rice or quinoa, contain more fibre and thus contribute to gut health.",
  dairy: "Dairy is a good source of calcium and protein.",
  "refined-grains":
    "Grains that have had their fibre removed, such as white rice or white bread, are widely considered less nutritious than their whole counterpart..",
  sweets:
    "Sweets are high in sugar and calories, without providing much in the way of nutrients.",
  "fried-foods":
    "Fried foods are high in calories and unhealthy fats, without providing much in the way of nutrients.",
  "fatty-proteins":
    "Fatty proteins are high in protein and healthy fats, without providing much in the way of nutrients.",
  unknown:
    "Some items don’t fit into the DQS model, and that’s okay. These foodstuffs are included for reference.",
};
