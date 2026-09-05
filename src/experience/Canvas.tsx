"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

/**
 * Thin R3F host for the placeholder scene.
 *
 * Kept deliberately cheap: capped DPR, low-power GPU preference, no
 * post-processing. This canvas must never dominate page performance.
 */
export default function Canvas3D() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.5], fov: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Scene />
    </Canvas>
  );
}
