import type { ApiLogFoodRequest, ApiLogFoodResponse } from "@/lib/contracts/api";
import type { components } from "@/generated/api-types";

// Frontend-wide API contract types (generated from the API's OpenAPI spec).
export type LogFoodRequest = ApiLogFoodRequest;
export type Results = ApiLogFoodResponse;

export type CategoryLogs = components["schemas"]["CategoryLog"];
export type LogItem = components["schemas"]["ScoredLogItem"];
