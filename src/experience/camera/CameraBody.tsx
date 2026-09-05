"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { useRef } from "react";
import * as THREE from "three";

export function CameraBody({ transform, groupRef }: CameraPartProps) {
  const localRef = useRef<THREE.Group>(null);
  const ref = groupRef || localRef;

  const pos = transform?.originalPosition || [0, 0, 0];
  const rot = transform?.originalRotation || [0, 0, 0];
  const scale = transform?.originalScale || [1, 1, 1];

  return (
    <group position={pos} rotation={rot} scale={scale} ref={ref}>
      {/* Main Body Shell */}
      <mesh position={[0, 0, 0]} material={materials.matteBlack}>
        <boxGeometry args={[1.2, 1.4, 1.8]} />
      </mesh>

      {/* Sensor Housing */}
      <mesh position={[0, 0, 0.95]} rotation={[Math.PI / 2, 0, 0]} material={materials.charcoal}>
        <cylinderGeometry args={[0.45, 0.45, 0.1, 32]} />
      </mesh>

      {/* Side Panel (Left) */}
      <mesh position={[-0.62, 0, 0]} material={materials.charcoal}>
        <boxGeometry args={[0.05, 1.1, 1.4]} />
      </mesh>

      {/* Side Panel (Right) */}
      <mesh position={[0.62, 0, 0]} material={materials.charcoal}>
        <boxGeometry args={[0.05, 1.1, 1.4]} />
      </mesh>

      {/* Top Plate */}
      <mesh position={[0, 0.72, 0]} material={materials.machinedMetal}>
        <boxGeometry args={[1.1, 0.05, 1.6]} />
      </mesh>

      {/* Bottom Plate */}
      <mesh position={[0, -0.72, 0]} material={materials.machinedMetal}>
        <boxGeometry args={[1.1, 0.05, 1.6]} />
      </mesh>

      {/* NOIRFRAME branding tag plate */}
      <group position={[-0.61, 0.4, 0.5]}>
        <mesh material={materials.machinedMetal}>
          <boxGeometry args={[0.02, 0.15, 0.4]} />
        </mesh>
        <mesh position={[-0.015, 0, 0]} material={materials.redAccent}>
          <boxGeometry args={[0.01, 0.05, 0.05]} />
        </mesh>
      </group>
    </group>
  );
}
