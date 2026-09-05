"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { GearRing, Screw } from "./utils";

export function LensAssembly({ parts }: CameraPartProps) {
  const { lensMount, lensBarrel, lensFront, lensMatteBox } = parts;
  return (
    <>
      <group ref={lensMount} position={[0, 0.05, 0.7]}>
        {/* Mount Flange Base */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.38, 0.38, 0.04, 32]} />
        </mesh>
        
        {/* PL Locking Collar (Stainless Steel) */}
        <mesh position={[0, 0, 0.03]} rotation={[Math.PI / 2, 0, 0]} material={materials.steel}>
          <cylinderGeometry args={[0.39, 0.39, 0.03, 32]} />
        </mesh>
        
        {/* 4 PL Tabs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`tab-${i}`} position={[Math.cos(i * Math.PI/2) * 0.41, Math.sin(i * Math.PI/2) * 0.41, 0.03]} rotation={[0, 0, -i * Math.PI/2]} material={materials.steel}>
            <boxGeometry args={[0.08, 0.15, 0.03]} />
          </mesh>
        ))}

        {/* 4 Mount Screws */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Screw key={`screw-${i}`} position={[Math.cos((i * Math.PI/2) + Math.PI/4) * 0.35, Math.sin((i * Math.PI/2) + Math.PI/4) * 0.35, 0.046]} rotation={[Math.PI/2, 0, 0]} material={materials.anodized} scale={0.6} />
        ))}
      </group>

      <group ref={lensBarrel} position={[0, 0.05, 1.0]}>
        {/* Rear Barrel */}
        <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.37, 0.37, 0.25, 32]} />
        </mesh>
        
        {/* Iris Gear */}
        <GearRing radius={0.385} width={0.06} teethCount={120} position={[0, 0, -0.01]} material={materials.gear} />
        
        {/* Smooth Scale Section */}
        <mesh position={[0, 0, 0.12]} rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.39, 0.39, 0.18, 32]} />
        </mesh>
        {/* Fictional Markings Block (Yellowish/White) */}
        <mesh position={[0, 0.39, 0.12]} material={materials.markings}>
          <boxGeometry args={[0.1, 0.005, 0.1]} />
        </mesh>
        
        {/* Focus Gear (Wider) */}
        <GearRing radius={0.4} width={0.12} teethCount={120} position={[0, 0, 0.3]} material={materials.gear} />
      </group>

      <group ref={lensFront} position={[0, 0.05, 1.5]}>
        {/* Front Flared Barrel */}
        <mesh position={[0, 0, -0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.425, 0.39, 0.25, 32]} />
        </mesh>
        
        {/* Front Ring Detail */}
        <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]} material={materials.steel}>
          <cylinderGeometry args={[0.425, 0.425, 0.02, 32]} />
        </mesh>
        
        {/* Inner Barrel (Dark) */}
        <mesh position={[0, 0, 0.03]} rotation={[Math.PI / 2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.38, 0.38, 0.1, 32]} />
        </mesh>

        {/* Front Optical Glass (Convex) */}
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={materials.glass}>
          <sphereGeometry args={[0.37, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        
        {/* Deep Internal Optical Element */}
        <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.lensCoating}>
          <sphereGeometry args={[0.3, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
      </group>

      <group ref={lensMatteBox} position={[0, 0.05, 1.8]}>
        {/* Clamp Ring */}
        <mesh position={[0, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.44, 0.44, 0.06, 32]} />
        </mesh>
        
        {/* Matte Box Main Body (Carbon/Matte Black) */}
        <mesh material={materials.body}>
          <boxGeometry args={[1.2, 0.9, 0.3]} />
        </mesh>
        {/* Cutout */}
        <mesh material={materials.body}>
          <boxGeometry args={[1.15, 0.85, 0.31]} />
        </mesh>
        
        {/* Top French Flag */}
        <mesh position={[0, 0.48, 0.2]} rotation={[-Math.PI / 6, 0, 0]} material={materials.body}>
          <boxGeometry args={[1.3, 0.02, 0.8]} />
        </mesh>
      </group>
    </>
  );
}
