import type { Project } from "@/types";

/**
 * Selected work — placeholder projects.
 * Replace titles, descriptions and imagery with real work.
 * Images live in /public/media and are clearly replaceable placeholders.
 */
export const projects: Project[] = [
  {
    slug: "afterlight",
    title: "Afterlight",
    category: "Cinematic Film",
    description:
      "A short film about returning to a place that has already moved on. Shot over three days.",
    image: {
      src: "/media/project-afterlight.jpg",
      alt: "Placeholder film still — a lone boat on a dark ocean at sunrise, to be replaced with footage from the real project",
      width: 1600,
      height: 672,
    },
  },
  {
    slug: "the-vow",
    title: "The Vow",
    category: "Wedding Story",
    description:
      "A wedding told like a feature film — candlelight, quiet rooms, one long honest take.",
    image: {
      src: "/media/project-vow.jpg",
      alt: "Placeholder wedding film still — a couple with a single candle in a dark stone chapel, to be replaced with real wedding imagery",
      width: 1408,
      height: 768,
    },
  },
  {
    slug: "origin",
    title: "Origin",
    category: "Brand Film",
    description:
      "A brand film built around a single object, a single light, and the story it carries.",
    image: {
      src: "/media/project-origin.jpg",
      alt: "Placeholder brand film still — a luxury watch on dark stone lit by a single warm beam, to be replaced with real brand work",
      width: 1376,
      height: 768,
    },
  },
  {
    slug: "moments-in-frame",
    title: "Moments in Frame",
    category: "Photography",
    description:
      "A portrait series studying how ordinary evenings hold the quiet, cinematic moments.",
    image: {
      src: "/media/project-moments.jpg",
      alt: "Placeholder photography still — a silhouetted family on a balcony at dusk, to be replaced with real photography",
      width: 1408,
      height: 768,
    },
  },
];
