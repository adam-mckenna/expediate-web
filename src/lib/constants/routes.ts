/**
 * Routes for the app.
 */
export const ROUTES = {
  HOME: "/",
  RESULTS: "/results",
  ABOUT: "/about",
  DQS_EXPLAINED: "/dqs-explained",
  CATEGORIES: "/categories",
  ARTICLES: "https://tr3.run",
};

/**
 * Type for the routes.
 */
export type Route = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * URL parameters for the results page.
 */
export const URL_PARAMS = {
  RESULTS_DATA: "data",
};
