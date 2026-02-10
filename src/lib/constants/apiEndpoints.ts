export const API_ENDPOINTS = {
  LOG: "/log",
  CATEGORIES: "/categories",
} as const;

export type ApiEndpoint = (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];
