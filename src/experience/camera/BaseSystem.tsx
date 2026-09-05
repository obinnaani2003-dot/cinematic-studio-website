"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";


export function BaseSystem({ parts }: CameraPartProps) {
  const { baseSystem } = parts;
  return (
    <group ref={baseSystem } position={[0, -0.35, 0]}>
      {/* Camera Riser Base */}
      <mesh position={[0, -0.05, 0.1]} material={materials.body}>
        <boxGeometry args={[0.6, 0.1, 0.8]} />
      </mesh>
      
      {/* Dovetail Plate */}
      <mesh position={[0, -0.12, 0.1]} material={materials.anodized}>
        <boxGeometry args={[0.5, 0.04, 1.2]} />
      </mesh>
      
      {/* Locking Catch */}
      <mesh position={[0.28, -0.12, 0.3]} material={materials.redAccent}>
        <boxGeometry args={[0.04, 0.03, 0.1]} />
      </mesh>
      <mesh position={[0.28, -0.12, 0.3]} rotation={[0, Math.PI/4, 0]} material={materials.stainless}>
        <boxGeometry args={[0.01, 0.01, 0.15]} />
      </mesh>

      {/* Rod Clamps */}
      <mesh position={[0, -0.2, 0.4]} material={materials.body}>
        <boxGeometry args={[0.7, 0.12, 0.2]} />
      </mesh>
      <mesh position={[0, -0.2, -0.2]} material={materials.body}>
        <boxGeometry args={[0.7, 0.12, 0.2]} />
      </mesh>
      
      {/* Rod Clamp Knobs */}
      <mesh position={[0.37, -0.2, 0.4]} rotation={[0, 0, Math.PI/2]} material={materials.anodized}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 16]} />
      </mesh>
      <mesh position={[-0.37, -0.2, 0.4]} rotation={[0, 0, Math.PI/2]} material={materials.anodized}>
        <cylinderGeometry args={[0.03, 0.03, 0.08, 16]} />
      </mesh>

      {/* 15mm Stainless Rods */}
      <mesh position={[0.25, -0.2, 0.5]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.035, 0.035, 2.0, 24]} />
      </mesh>
      <mesh position={[-0.25, -0.2, 0.5]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.035, 0.035, 2.0, 24]} />
      </mesh>
    </group>
  );
}
