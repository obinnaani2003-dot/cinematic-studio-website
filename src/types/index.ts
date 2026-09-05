/** A media file with display metadata (placeholder assets for now). */
export interface ImageAsset {
  src: string;
  /** Meaningful alt text. Placeholder assets describe what will replace them. */
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: ImageAsset;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  /** Short capability tags shown under each service. */
  disciplines: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  /** True while the entry is invented placeholder copy. */
  isPlaceholder: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
