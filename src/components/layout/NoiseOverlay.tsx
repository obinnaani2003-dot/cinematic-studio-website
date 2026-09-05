/**
 * Subtle static film grain over the whole page (pure CSS, no asset).
 * Decorative only — hidden from assistive tech.
 */
export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />;
}
