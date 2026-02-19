export const ROUTES = {
  HOME: "/",
  RESULTS: "/results",
  ABOUT: "/about",
  DQS_EXPLAINED: "/dqs-explained",
  CATEGORIES: "/categories",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

export const URL_PARAMS = {
  RESULTS_DATA: "data",
} as const;
