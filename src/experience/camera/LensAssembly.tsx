"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { useRef } from "react";
import * as THREE from "three";

export function LensAssembly({ transform }: CameraPartProps) {
  const groupRef = useRef<THREE.Group>(null);

  const pos = transform?.originalPosition || [0, 0, 0.95];
  const rot = transform?.originalRotation || [0, 0, 0];
  const scale = transform?.originalScale || [1, 1, 1];

  return (
    <group position={pos} rotation={rot} scale={scale} ref={groupRef}>
      {/* Lens Mount */}
      <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.42, 0.42, 0.1, 32]} />
      </mesh>

      {/* Lens Rear Barrel */}
      <mesh position={[0, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]} material={materials.matteBlack}>
        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
      </mesh>

      {/* Iris Ring */}
      <mesh position={[0, 0, 0.45]} rotation={[Math.PI / 2, 0, 0]} material={materials.charcoal}>
        <cylinderGeometry args={[0.43, 0.43, 0.1, 32]} />
      </mesh>

      {/* Lens Middle Barrel */}
      <mesh position={[0, 0, 0.65]} rotation={[Math.PI / 2, 0, 0]} material={materials.matteBlack}>
        <cylinderGeometry args={[0.41, 0.41, 0.3, 32]} />
      </mesh>

      {/* Focus Ring */}
      <mesh position={[0, 0, 0.9]} rotation={[Math.PI / 2, 0, 0]} material={materials.charcoal}>
        <cylinderGeometry args={[0.45, 0.45, 0.2, 32]} />
      </mesh>

      {/* Lens Front Barrel */}
      <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]} material={materials.matteBlack}>
        <cylinderGeometry args={[0.48, 0.44, 0.4, 32]} />
      </mesh>

      {/* Front Glass Element */}
      <mesh position={[0, 0, 1.38]} rotation={[Math.PI / 2, 0, 0]} material={materials.darkGlass}>
        <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
      </mesh>

      {/* Lens Inner Dark Coating */}
      <mesh position={[0, 0, 1.35]} rotation={[Math.PI / 2, 0, 0]} material={materials.lensCoating}>
        <cylinderGeometry args={[0.38, 0.38, 0.05, 32]} />
      </mesh>
    </group>
  );
}
