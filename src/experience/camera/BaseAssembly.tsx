"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";


export function BaseAssembly({ parts }: CameraPartProps) {
  const { baseRods } = parts;
  return (
    <group ref={baseRods} position={[0, -0.5, 0]}>
      {/* Heavy Baseplate Core */}
      <mesh position={[0, -0.05, 0.1]} material={materials.anodized}>
        <boxGeometry args={[0.7, 0.1, 1.0]} />
      </mesh>
      
      {/* Dovetail Plate / Quick Release */}
      <mesh position={[0, -0.12, 0.1]} material={materials.steel}>
        <boxGeometry args={[0.6, 0.04, 1.4]} />
      </mesh>
      
      {/* Locking Lever/Catch */}
      <mesh position={[0.33, -0.12, 0.5]} material={materials.redAccent}>
        <boxGeometry args={[0.04, 0.04, 0.15]} />
      </mesh>
      <mesh position={[0.33, -0.12, 0.5]} rotation={[0, Math.PI/4, 0]} material={materials.steel}>
        <boxGeometry args={[0.02, 0.02, 0.2]} />
      </mesh>

      {/* Front Rod Clamp Block */}
      <mesh position={[0, -0.22, 0.4]} material={materials.body}>
        <boxGeometry args={[0.8, 0.16, 0.25]} />
      </mesh>
      
      {/* Rear Rod Clamp Block */}
      <mesh position={[0, -0.22, -0.3]} material={materials.body}>
        <boxGeometry args={[0.8, 0.16, 0.25]} />
      </mesh>
      
      {/* Rod Clamp Knobs (4 total) */}
      <mesh position={[0.42, -0.22, 0.4]} rotation={[0, 0, Math.PI/2]} material={materials.anodized}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[-0.42, -0.22, 0.4]} rotation={[0, 0, Math.PI/2]} material={materials.anodized}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[0.42, -0.22, -0.3]} rotation={[0, 0, Math.PI/2]} material={materials.anodized}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>
      <mesh position={[-0.42, -0.22, -0.3]} rotation={[0, 0, Math.PI/2]} material={materials.anodized}>
        <cylinderGeometry args={[0.04, 0.04, 0.1, 16]} />
      </mesh>

      {/* 15mm Carbon Fiber / Steel Rods */}
      <mesh position={[0.3, -0.22, 0.5]} rotation={[Math.PI / 2, 0, 0]} material={materials.steel}>
        <cylinderGeometry args={[0.04, 0.04, 2.6, 24]} />
      </mesh>
      <mesh position={[-0.3, -0.22, 0.5]} rotation={[Math.PI / 2, 0, 0]} material={materials.steel}>
        <cylinderGeometry args={[0.04, 0.04, 2.6, 24]} />
      </mesh>
    </group>
  );
}
