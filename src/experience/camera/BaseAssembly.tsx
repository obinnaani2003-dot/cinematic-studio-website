"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function BaseAssembly({ parts }: CameraPartProps) {
  const { baseRods } = parts;
  return (
    <group ref={baseRods} position={[0, -0.75, 0]}>
      {/* Camera Base/Riser */}
      <mesh position={[0, -0.05, 0]} material={materials.darkMetal}>
        <boxGeometry args={[1.0, 0.15, 1.4]} />
      </mesh>
      {/* Dovetail Plate */}
      <mesh position={[0, -0.15, 0]} material={materials.machinedMetal}>
        <boxGeometry args={[0.8, 0.05, 1.8]} />
      </mesh>
      {/* Safety Catch */}
      <mesh position={[0.42, -0.15, 0.8]} material={materials.redAccent}>
        <boxGeometry args={[0.05, 0.08, 0.1]} />
      </mesh>

      {/* Rod Clamp Brackets */}
      <mesh position={[0, -0.3, 0.5]} material={materials.bodyMain}>
        <boxGeometry args={[0.9, 0.25, 0.3]} />
      </mesh>
      <mesh position={[0, -0.3, -0.5]} material={materials.bodyMain}>
        <boxGeometry args={[0.9, 0.25, 0.3]} />
      </mesh>
      
      {/* Rod Clamp Knobs */}
      <mesh position={[0.5, -0.3, 0.5]} rotation={[0, 0, Math.PI/2]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.05, 0.05, 0.15, 16]} />
      </mesh>
      <mesh position={[0.5, -0.3, -0.5]} rotation={[0, 0, Math.PI/2]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.05, 0.05, 0.15, 16]} />
      </mesh>

      {/* 15mm Carbon Fiber / Steel Rods */}
      <mesh position={[0.35, -0.3, 0.8]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.05, 0.05, 3.2, 16]} />
      </mesh>
      <mesh position={[-0.35, -0.3, 0.8]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.05, 0.05, 3.2, 16]} />
      </mesh>
    </group>
  );
}
