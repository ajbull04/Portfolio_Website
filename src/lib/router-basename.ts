/** Strip trailing slash; React Router basename must not end with `/`. */
export const routerBasename =
  import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");
