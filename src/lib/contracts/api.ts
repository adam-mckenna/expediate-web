import type { components } from "@/generated/api-types";

export type ApiLogFoodRequest = components["schemas"]["LogDto"];

type GeneratedCompleteLog = components["schemas"]["CompleteLog"];
type GeneratedCategoryLog = components["schemas"]["CategoryLog"];
export type ApiLogFoodResponse = Omit<GeneratedCompleteLog, "logs"> & {
  logs: Record<string, GeneratedCategoryLog>;
};
