import type { ResultsConfig } from "@/lib/types";
import { RESULTS_CONFIGS } from "@/lib/constants";
import { getResultsType } from "@/domain";

/**
 * Gets the configuration for a given result type
 * @param score - The total DQS score
 * @returns The result configuration with colors, text, etc.
 */
export const getResultsConfig = (score: number): ResultsConfig => {
  const type = getResultsType(score);
  return RESULTS_CONFIGS[type as keyof typeof RESULTS_CONFIGS];
};
