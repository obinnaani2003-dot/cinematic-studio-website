"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { useRef } from "react";
import * as THREE from "three";

export function TopAssembly({ transform, groupRef }: CameraPartProps) {
  const localRef = useRef<THREE.Group>(null);
  const ref = groupRef || localRef;

  const pos = transform?.originalPosition || [0, 0.75, 0];
  const rot = transform?.originalRotation || [0, 0, 0];
  const scale = transform?.originalScale || [1, 1, 1];

  return (
    <group position={pos} rotation={rot} scale={scale} ref={ref}>
      {/* Top Handle Mount */}
      <mesh position={[0, 0.05, 0.2]} material={materials.machinedMetal}>
        <boxGeometry args={[0.3, 0.1, 0.4]} />
      </mesh>

      {/* Top Handle Pillar Front */}
      <mesh position={[0, 0.2, 0.3]} material={materials.charcoal}>
        <boxGeometry args={[0.2, 0.3, 0.15]} />
      </mesh>

      {/* Top Handle Pillar Back */}
      <mesh position={[0, 0.2, -0.2]} material={materials.charcoal}>
        <boxGeometry args={[0.2, 0.3, 0.15]} />
      </mesh>

      {/* Top Handle Grip */}
      <mesh position={[0, 0.4, 0.15]} material={materials.matteBlack}>
        <boxGeometry args={[0.25, 0.15, 0.9]} />
      </mesh>

      {/* Viewfinder Mount */}
      <mesh position={[-0.4, 0.1, 0.5]} material={materials.machinedMetal}>
        <boxGeometry args={[0.4, 0.05, 0.1]} />
      </mesh>

      {/* Viewfinder Tube */}
      <mesh position={[-0.7, 0.15, 0.2]} material={materials.charcoal}>
        <boxGeometry args={[0.2, 0.2, 0.6]} />
      </mesh>

      {/* Viewfinder Eyecup */}
      <mesh position={[-0.7, 0.15, -0.15]} rotation={[Math.PI / 2, 0, 0]} material={materials.matteBlack}>
        <cylinderGeometry args={[0.15, 0.1, 0.1, 32]} />
      </mesh>
    </group>
  );
}
