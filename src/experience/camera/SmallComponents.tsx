"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { useRef } from "react";
import * as THREE from "three";

export function SmallComponents({ transform }: CameraPartProps) {
  const groupRef = useRef<THREE.Group>(null);

  const pos = transform?.originalPosition || [0, 0, 0];
  const rot = transform?.originalRotation || [0, 0, 0];
  const scale = transform?.originalScale || [1, 1, 1];

  return (
    <group position={pos} rotation={rot} scale={scale} ref={groupRef}>
      {/* Record Button */}
      <mesh position={[-0.45, 0.2, 0.9]} rotation={[Math.PI / 2, 0, 0]} material={materials.redAccent}>
        <cylinderGeometry args={[0.08, 0.08, 0.05, 16]} />
      </mesh>
      
      {/* Record Button Bezel */}
      <mesh position={[-0.45, 0.2, 0.88]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.1, 0.1, 0.04, 16]} />
      </mesh>

      {/* Mode Dial */}
      <mesh position={[0.45, 0.72, 0.2]} material={materials.charcoal}>
        <cylinderGeometry args={[0.15, 0.15, 0.08, 24]} />
      </mesh>

      {/* Side Vents (Left) */}
      <group position={[-0.6, 0.2, -0.2]}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[0, -0.1 + i * 0.08, 0]} material={materials.matteBlack}>
            <boxGeometry args={[0.06, 0.02, 0.4]} />
          </mesh>
        ))}
      </group>

      {/* Side Ports (Right) */}
      <group position={[0.6, -0.2, -0.2]}>
        {/* SDI Port */}
        <mesh position={[0.02, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.06, 0.06, 0.05, 16]} />
        </mesh>
        {/* Power Port */}
        <mesh position={[0.02, 0.2, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.05, 0.05, 0.05, 16]} />
        </mesh>
      </group>
      
      {/* Power Button */}
      <mesh position={[-0.4, 0.72, -0.4]} material={materials.charcoal}>
        <boxGeometry args={[0.08, 0.08, 0.08]} />
      </mesh>
    </group>
  );
}
