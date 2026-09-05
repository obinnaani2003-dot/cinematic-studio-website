let cached: boolean | null = null;

/**
 * Cheap, cached feature probe. The site is fully functional when this
 * returns false — the WebGL layer simply does not mount.
 */
export function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  if (cached !== null) return cached;

  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2") ??
      canvas.getContext("webgl") ??
      canvas.getContext("experimental-webgl");

    cached =
      context instanceof WebGLRenderingContext ||
      context instanceof WebGL2RenderingContext;
  } catch {
    cached = false;
  }

  return cached;
}
