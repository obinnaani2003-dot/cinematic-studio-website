"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { BeveledBox } from "./utils";


export function BaseSystem({ parts }: CameraPartProps) {
  const { baseSystem } = parts;
  return (
    <group ref={baseSystem} position={[0, -0.3, 0]}>
      
      {/* 1. Camera Baseplate Core */}
      <BeveledBox position={[0, -0.05, 0.1]} args={[0.35, 0.08, 0.6]} bevel={0.01} material={materials.body} />
      
      {/* 2. Dovetail Slider */}
      <mesh position={[0, -0.11, 0.1]} material={materials.anodized}>
        <boxGeometry args={[0.3, 0.02, 0.8]} />
      </mesh>
      <mesh position={[0, -0.13, 0.1]} material={materials.anodized}>
        <boxGeometry args={[0.35, 0.02, 0.8]} />
      </mesh>

      {/* 3. Rod Clamp Blocks */}
      <BeveledBox position={[0, -0.2, 0.3]} args={[0.4, 0.12, 0.15]} bevel={0.01} material={materials.body} />
      <BeveledBox position={[0, -0.2, -0.1]} args={[0.4, 0.12, 0.15]} bevel={0.01} material={materials.body} />
      
      {/* Rod Clamp Knobs */}
      <mesh position={[0.22, -0.2, 0.3]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.02, 0.02, 0.05, 16]} />
      </mesh>
      <mesh position={[-0.22, -0.2, 0.3]} rotation={[0, 0, Math.PI/2]} material={materials.stainless}>
        <cylinderGeometry args={[0.02, 0.02, 0.05, 16]} />
      </mesh>

      {/* 4. Dual 15mm Stainless Steel Rods */}
      <mesh position={[0.11, -0.2, 0.3]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.028, 0.028, 1.4, 32]} />
      </mesh>
      <mesh position={[-0.11, -0.2, 0.3]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.028, 0.028, 1.4, 32]} />
      </mesh>
    </group>
  );
}
