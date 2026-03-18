import type { ResultsType } from "@/lib/types";

/**
 * Classifies the overall results category based on score.
 * Domain rule: positive => "good", zero => "neutral", negative => "negative".
 * @param score - The total DQS score.
 * @returns The results type.
 */
export const getResultsType = (score: number): ResultsType => {
  if (score > 0) return "good";
  if (score === 0) return "neutral";
  return "negative";
};

