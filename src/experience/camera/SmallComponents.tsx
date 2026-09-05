"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function SmallComponents({ parts }: CameraPartProps) {
  const { baseRods } = parts;
  return (
    <>
      <group ref={baseRods} position={[0, -0.75, 0]}>
        {/* Baseplate Core */}
        <mesh position={[0, -0.05, 0]} material={materials.darkMetal}>
          <boxGeometry args={[1.0, 0.1, 1.4]} />
        </mesh>

        {/* Rod Clamp Front */}
        <mesh position={[0, -0.15, 0.5]} material={materials.machinedMetal}>
          <boxGeometry args={[0.8, 0.1, 0.2]} />
        </mesh>

        {/* Rod Clamp Back */}
        <mesh position={[0, -0.15, -0.5]} material={materials.machinedMetal}>
          <boxGeometry args={[0.8, 0.1, 0.2]} />
        </mesh>

        {/* 15mm Rods */}
        <mesh position={[0.3, -0.15, 0.2]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.04, 0.04, 2.4, 16]} />
        </mesh>
        <mesh position={[-0.3, -0.15, 0.2]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.04, 0.04, 2.4, 16]} />
        </mesh>
      </group>
    </>
  );
}
