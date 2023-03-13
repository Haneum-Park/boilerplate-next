/*
 * ==================
 *    MEDIA QUERY
 * ==================
 */
type Breakpoints = {
  mobile: number;
  tablet: number;
  desktop: number;
};

const breakpoints = {
  mobile: 768,
  tablet: 1280,
  desktop: 1440,
};

export const MEDIA_QUERY = {
  max: (breakpoint: keyof Breakpoints) =>
    `@media screen and (max-width: ${breakpoints[breakpoint]}px)`,
};
