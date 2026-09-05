"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";



export function BaseSystem({ parts }: CameraPartProps) {
  const { baseSystem } = parts;
  return (
    <group ref={baseSystem } position={[0, -0.45, 0.2]}>
      {/* 1. Camera Baseplate Core */}
      <mesh position={[0, -0.08, 0]} material={materials.body}>
        <boxGeometry args={[0.62, 0.16, 1.2]} />
      </mesh>
      
      {/* 2. Dovetail Slider Mount */}
      <mesh position={[0, -0.18, 0]} material={materials.anodized}>
        <boxGeometry args={[0.5, 0.04, 1.6]} />
      </mesh>
      <mesh position={[0, -0.22, 0]} material={materials.anodized}>
        <boxGeometry args={[0.6, 0.04, 1.6]} />
      </mesh>
      
      {/* Quick Release Locking Lever */}
      <mesh position={[0.3, -0.18, 0.4]} material={materials.redAccent}>
        <boxGeometry args={[0.1, 0.04, 0.04]} />
      </mesh>
      <mesh position={[0.35, -0.18, 0.4]} rotation={[0, -Math.PI/6, 0]} material={materials.stainless}>
        <boxGeometry args={[0.15, 0.02, 0.02]} />
      </mesh>

      {/* 3. Rod Clamp Bridges */}
      {/* Front Bridge */}
      <mesh position={[0, -0.35, 0.5]} material={materials.body}>
        <boxGeometry args={[0.7, 0.22, 0.25]} />
      </mesh>
      {/* Rear Bridge */}
      <mesh position={[0, -0.35, -0.4]} material={materials.body}>
        <boxGeometry args={[0.7, 0.22, 0.25]} />
      </mesh>
      
      {/* Rod Clamp Tightening Knobs (Stainless) */}
      <mesh position={[0.4, -0.35, 0.5]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[-0.4, -0.35, 0.5]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[0.4, -0.35, -0.4]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[-0.4, -0.35, -0.4]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>

      {/* 4. Dual 15mm Stainless Steel Rods */}
      <mesh position={[0.25, -0.35, 0.3]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.035, 0.035, 2.6, 32]} />
      </mesh>
      <mesh position={[-0.25, -0.35, 0.3]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.035, 0.035, 2.6, 32]} />
      </mesh>
    </group>
  );
}
