import type { NavItem } from "@/types";

/**
 * Central brand + navigation data.
 *
 * NOTE: NOIRFRAME is a temporary brand identity — update it here and the
 * whole site follows.
 */
export const site = {
  name: "NOIRFRAME",
  tagline: "Cinematic Films • Photography • Visual Stories",
  description:
    "NOIRFRAME is a cinematic film and photography studio crafting films, portraits and visual stories with a dark, editorial, cinematic eye. Prototype build — all content is placeholder.",
  /** Placeholder contact — replace with the real business contact later. */
  email: "hello@noirframe.example",
  /** Placeholder location line — fill in once the studio location is final. */
  location: "Studio location — placeholder",
  cta: {
    label: "Start a Project",
    /** Points at the closing contact section. */
    href: "#contact",
  },
} as const;

export const navLinks: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
