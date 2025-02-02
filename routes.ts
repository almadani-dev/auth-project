/**
 * An array of routes that are accessible to tht public
 * these routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes that are used for authentication
 * these routes require authentication
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix of API authentication routes
 * Routes that start with prefix are used for api auth purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route to redirect to after login
 */
export const DEFAULT_LOGIN_REDIRECT = "/server";
