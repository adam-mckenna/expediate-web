import type { ResultsType, ResultsConfig } from "@/lib/types";
import { RESULTS_CONFIGS } from "@/lib/constants";

/**
 * Determines the result type based on the total score
 * @param score - The total DQS score
 * @returns The result type: "good" (score > 0), "neutral" (score === 0), or "negative" (score < 0)
 */
export const getResultsType = (score: number): ResultsType => {
  if (score > 0) return "good";
  if (score === 0) return "neutral";
  return "negative";
};

/**
 * Gets the configuration for a given result type
 * @param score - The total DQS score
 * @returns The result configuration with colors, text, etc.
 */
export const getResultsConfig = (score: number): ResultsConfig => {
  const type = getResultsType(score);
  return RESULTS_CONFIGS[type as keyof typeof RESULTS_CONFIGS];
};
