export const API_ENDPOINTS = {
  LOG: "/log",
  CATEGORIES: "/categories",
};

export type ApiEndpoint = (typeof API_ENDPOINTS)[keyof typeof API_ENDPOINTS];
