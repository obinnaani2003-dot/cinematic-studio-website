/**
 * Centralized motion configuration for NOIRFRAME.
 *
 * Every duration, easing and distance used by an animation lives here so
 * the feel of the site can be tuned in one place. Components must not
 * hard-code animation values — they import from this file.
 *
 * Build 0 keeps motion subtle: entrance reveals, gentle image movement,
 * CTA and navigation transitions. Anything more expressive belongs to
 * later approved builds.
 */
export const motionConfig = {
  durations: {
    /** Small UI transitions (CTA hover, chips). */
    fast: 0.45,
    /** Standard entrance reveal. */
    base: 0.75,
    /** Larger elements (headlines, media frames). */
    slow: 1.1,
    /** Hero wordmark entrance. */
    hero: 1.5,
  },
  easings: {
    out: "power3.out",
    inOut: "power2.inOut",
    gentle: "sine.out",
    none: "none",
  },
  distances: {
    /** Vertical offset for standard entrance reveals, in px. */
    reveal: 26,
    /** Vertical offset for the hero wordmark, in px. */
    revealLarge: 54,
    /** Default parallax travel for images, in px. */
    parallax: 36,
  },
  stagger: {
    /** Delay between sequential items in an entrance group. */
    items: 0.09,
  },
  scroll: {
    /** ScrollTrigger position where entrance reveals fire. */
    revealStart: "top 86%",
    /** Scrub smoothness for scroll-linked tweens. */
    scrub: 0.6,
    /** Camera reveal scrub smoothness. */
    cameraScrub: 1,
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
} as const;

export type MotionConfig = typeof motionConfig;

/**
 * True when the user prefers reduced motion.
 * Safe to call on the server (returns false there).
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** True when the viewport meets a named breakpoint. */
export function isAtLeast(breakpoint: keyof MotionConfig["breakpoints"]): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(
    `(min-width: ${motionConfig.breakpoints[breakpoint]}px)`,
  ).matches;
}
