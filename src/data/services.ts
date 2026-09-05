import type { Service } from "@/types";

/**
 * Service offerings — placeholder copy.
 * Descriptions are intentionally brief so they read as a premium index,
 * not a SaaS feature table.
 */
export const services: Service[] = [
  {
    id: "film-production",
    title: "Film Production",
    description:
      "Short films, music videos and narrative spots — developed, shot and cut as complete cinematic pieces.",
    disciplines: ["Direction", "Cinematography", "Edit"],
  },
  {
    id: "photography",
    title: "Photography",
    description:
      "Editorial and fine-art stills. Portraits, campaigns and personal stories told with controlled light.",
    disciplines: ["Portraiture", "Editorial", "Campaigns"],
  },
  {
    id: "weddings-events",
    title: "Weddings & Events",
    description:
      "Ceremonies and gatherings captured as film and photography — present, patient, unobtrusive.",
    disciplines: ["Film", "Photography", "Same-week teasers"],
  },
  {
    id: "commercial-visuals",
    title: "Commercial Visuals",
    description:
      "Brand films and product imagery that give a company a point of view, not just a look.",
    disciplines: ["Brand films", "Product", "Social cutdowns"],
  },
  {
    id: "documentary",
    title: "Documentary",
    description:
      "Observational work for families, founders and institutions — stories told in their own time.",
    disciplines: ["Observational", "Interviews", "Series"],
  },
  {
    id: "post-production",
    title: "Post-Production",
    description:
      "Editorial, colour and sound finishing in an in-house pipeline for a single, consistent grade.",
    disciplines: ["Edit", "Colour grade", "Sound design"],
  },
];
