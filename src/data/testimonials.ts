import type { Testimonial } from "@/types";

/**
 * Placeholder testimonials.
 *
 * These are invented and are rendered with visible "placeholder" labels —
 * they must be replaced with real client quotes before launch.
 */
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-a",
    quote:
      "The team treated our day like a feature film. Every frame felt intentional, and watching the final edit we cried twice.",
    name: "Client A — placeholder",
    role: "Wedding, 2025",
    isPlaceholder: true,
  },
  {
    id: "placeholder-b",
    quote:
      "They understood our brand before we could say it. The film gave our audience a feeling, not just information.",
    name: "Client B — placeholder",
    role: "Brand campaign, 2025",
    isPlaceholder: true,
  },
  {
    id: "placeholder-c",
    quote:
      "Calm on set and precise in the edit. The portraits became part of our family album — and our office wall.",
    name: "Client C — placeholder",
    role: "Portrait commission, 2025",
    isPlaceholder: true,
  },
];
