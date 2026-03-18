/**
 * Domain layer is meant to hold “business rules” and data transformations that are 
 * not tied to React, not tied to API calls, and not tied to styling/UI. 
 * The goal is: given some input data, domain functions produce correct outputs.
 */

export { mergeResults } from "./mergeResults";
export {
  type ScoredCategory,
  splitCategoriesByScore,
} from "./splitCategoriesByScore";
export { getResultsType } from "./getResultsType";
