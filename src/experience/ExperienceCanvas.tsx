"use client";

import { useEffect, useState, type ComponentType } from "react";
import { prefersReducedMotion } from "@/animation/motionConfig";
import { isWebGLAvailable } from "@/lib/webgl";

interface ExperienceCanvasProps {
  className?: string;
}

/**
 * Build 0 WebGL placeholder loader.
 *
 * The three.js scene is lazy-imported (code-split) and only mounts when:
 *   1. we are on the client,
 *   2. WebGL is actually available,
 *   3. the user has not requested reduced motion.
 *
 * If any check fails, nothing renders — the HTML interface is designed to
 * stand fully on its own. In Build 1 this component becomes the host for
 * the full cinematic camera experience.
 */
export function ExperienceCanvas({ className }: ExperienceCanvasProps) {
  const [SceneCanvas, setSceneCanvas] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !isWebGLAvailable()) return;

    let active = true;
    import("./Canvas")
      .then((mod) => {
        if (active) setSceneCanvas(() => mod.default);
      })
      .catch(() => {
        // WebGL layer is decorative — fail silently, keep the page.
        if (active) setSceneCanvas(null);
      });

    return () => {
      active = false;
    };
  }, []);

  if (!SceneCanvas) return null;

  return (
    <div className={className} aria-hidden="true">
      <SceneCanvas />
    </div>
  );
}
