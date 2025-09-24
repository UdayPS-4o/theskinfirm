/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as serviceCategories_mutations from "../serviceCategories/mutations.js";
import type * as serviceCategories_queries from "../serviceCategories/queries.js";
import type * as services_mutations from "../services/mutations.js";
import type * as services_queries from "../services/queries.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "serviceCategories/mutations": typeof serviceCategories_mutations;
  "serviceCategories/queries": typeof serviceCategories_queries;
  "services/mutations": typeof services_mutations;
  "services/queries": typeof services_queries;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
