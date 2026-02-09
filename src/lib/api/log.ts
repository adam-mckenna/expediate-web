import { apiClient } from "./client";
import { Results, LogFoodRequest } from "../types/api";

export const logApi = {
  logFood: async (data: LogFoodRequest): Promise<Results> =>
    apiClient.request<Results>("/log", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
