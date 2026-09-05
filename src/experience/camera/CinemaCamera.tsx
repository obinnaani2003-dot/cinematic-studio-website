"use client";

import { useRef } from "react";
import * as THREE from "three";
import { CameraBody } from "./CameraBody";
import { LensAssembly } from "./LensAssembly";
import { TopAssembly } from "./TopAssembly";
import { SmallComponents } from "./SmallComponents";
import { TransformData } from "./types";

export function CinemaCamera() {
  const groupRef = useRef<THREE.Group>(null);

  // Define component animation-ready transform data
  // Even though we aren't animating them yet, this sets up Build 1B.
  
  const bodyTransform: TransformData = {
    originalPosition: [0, 0, 0],
    originalRotation: [0, 0, 0],
    originalScale: [1, 1, 1],
    explodedPosition: [0, 0, -0.5],
    explodedRotation: [0, -Math.PI / 8, 0],
    animationDelay: 0.1,
    assemblyOrder: 1,
  };

  const lensTransform: TransformData = {
    originalPosition: [0, 0, 0.95],
    originalRotation: [0, 0, 0],
    originalScale: [1, 1, 1],
    explodedPosition: [0, 0, 2.5],
    explodedRotation: [0, 0, Math.PI / 4],
    animationDelay: 0.3,
    assemblyOrder: 3,
  };

  const topTransform: TransformData = {
    originalPosition: [0, 0.75, 0],
    originalRotation: [0, 0, 0],
    originalScale: [1, 1, 1],
    explodedPosition: [0, 2.0, 0],
    explodedRotation: [Math.PI / 8, 0, 0],
    animationDelay: 0.2,
    assemblyOrder: 2,
  };

  const smallTransform: TransformData = {
    originalPosition: [0, 0, 0],
    originalRotation: [0, 0, 0],
    originalScale: [1, 1, 1],
    explodedPosition: [1.5, 0, 0],
    explodedRotation: [0, Math.PI / 4, 0],
    animationDelay: 0.4,
    assemblyOrder: 4,
  };

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} rotation={[0, -Math.PI / 6, 0]}>
      <CameraBody transform={bodyTransform} />
      <LensAssembly transform={lensTransform} />
      <TopAssembly transform={topTransform} />
      <SmallComponents transform={smallTransform} />
    </group>
  );
}
