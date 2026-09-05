import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Returns gsap with ScrollTrigger registered exactly once,
 * regardless of how many client components request it.
 * Client-only — never call during SSR.
 */
export function gsapWithScroll() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}
