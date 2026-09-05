"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { BeveledBox } from "./utils";


export function BaseSystem({ parts }: CameraPartProps) {
  const { baseSystem } = parts;
  return (
    <group ref={baseSystem} position={[0, -0.45, 0.2]}>
      
      {/* 1. Camera Baseplate Core */}
      <BeveledBox position={[0, -0.05, 0]} args={[0.62, 0.12, 1.2]} bevel={0.01} material={materials.body} />
      
      {/* 2. Dovetail Slider Mount */}
      <mesh position={[0, -0.15, 0]} material={materials.body}>
        <boxGeometry args={[0.5, 0.04, 1.6]} />
      </mesh>
      <mesh position={[0, -0.19, 0]} material={materials.body}>
        <boxGeometry args={[0.6, 0.04, 1.6]} />
      </mesh>
      
      {/* Quick Release Locking Lever */}
      <mesh position={[0.32, -0.15, 0.4]} material={materials.redAccent}>
        <boxGeometry args={[0.08, 0.04, 0.04]} />
      </mesh>
      <mesh position={[0.35, -0.15, 0.4]} rotation={[0, -Math.PI/6, 0]} material={materials.stainless}>
        <boxGeometry args={[0.15, 0.02, 0.02]} />
      </mesh>

      {/* 3. Rod Clamp Bridges */}
      <BeveledBox position={[0, -0.3, 0.5]} args={[0.7, 0.2, 0.25]} bevel={0.01} material={materials.body} />
      <BeveledBox position={[0, -0.3, -0.4]} args={[0.7, 0.2, 0.25]} bevel={0.01} material={materials.body} />
      
      {/* Rod Clamp Tightening Knobs */}
      <mesh position={[0.38, -0.3, 0.5]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[-0.38, -0.3, 0.5]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[0.38, -0.3, -0.4]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[-0.38, -0.3, -0.4]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>

      {/* 4. Dual 15mm Stainless Steel Rods */}
      <mesh position={[0.25, -0.3, 0.3]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.035, 0.035, 2.6, 32]} />
      </mesh>
      <mesh position={[-0.25, -0.3, 0.3]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.035, 0.035, 2.6, 32]} />
      </mesh>
    </group>
  );
}
