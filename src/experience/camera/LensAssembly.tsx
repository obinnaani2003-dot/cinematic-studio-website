"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { GearRing } from "./utils";

export function LensAssembly({ parts }: CameraPartProps) {
  const { lensMount, lensBarrel, lensFront, lensMatteBox } = parts;
  return (
    <>
      <group ref={lensMount} position={[0, 0, 0.95]}>
        {/* PL Mount Base */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.48, 0.48, 0.1, 32]} />
        </mesh>
        {/* PL Locking Ring */}
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.55, 0.55, 0.05, 32]} />
        </mesh>
        {/* Locking Tabs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`tab-${i}`} position={[Math.cos(i * Math.PI/2) * 0.58, Math.sin(i * Math.PI/2) * 0.58, 0.1]} rotation={[0, 0, -i * Math.PI/2]} material={materials.machinedMetal}>
            <boxGeometry args={[0.1, 0.2, 0.05]} />
          </mesh>
        ))}
      </group>

      <group ref={lensBarrel} position={[0, 0, 1.3]}>
        {/* Base Barrel */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.lensBarrel}>
          <cylinderGeometry args={[0.42, 0.42, 0.5, 32]} />
        </mesh>
        
        {/* Iris Gear */}
        <GearRing radius={0.46} width={0.08} teethCount={72} position={[0, 0, -0.15]} material={materials.darkMetal} />
        
        {/* Focus Gear */}
        <GearRing radius={0.48} width={0.15} teethCount={80} position={[0, 0, 0.1]} material={materials.darkMetal} />

        {/* Distance Markings Strip */}
        <mesh position={[0, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]} material={materials.bodyDark}>
          <cylinderGeometry args={[0.43, 0.43, 0.05, 32]} />
        </mesh>
      </group>

      <group ref={lensFront} position={[0, 0, 1.75]}>
        {/* Front Flare Barrel */}
        <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]} material={materials.lensBarrel}>
          <cylinderGeometry args={[0.58, 0.42, 0.3, 32]} />
        </mesh>
        {/* Front Ring */}
        <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
        </mesh>
        
        {/* Inner Threading */}
        <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.bodyDark}>
          <cylinderGeometry args={[0.55, 0.55, 0.11, 32]} />
        </mesh>

        {/* Front Glass Element (Convex) */}
        <mesh position={[0, 0, -0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.glass}>
          <sphereGeometry args={[0.54, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        
        {/* Second Glass Element (Concave) */}
        <mesh position={[0, 0, -0.2]} rotation={[-Math.PI / 2, 0, 0]} material={materials.lensCoating}>
          <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
      </group>

      <group ref={lensMatteBox} position={[0, 0, 2.15]}>
        {/* Clamp Ring */}
        <mesh position={[0, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.62, 0.62, 0.05, 32]} />
        </mesh>

        {/* Matte Box Main Body */}
        <mesh material={materials.bodyMain}>
          <boxGeometry args={[1.6, 1.2, 0.4]} />
        </mesh>
        {/* Matte Box Hollow Cutout */}
        <mesh material={materials.bodyDark}>
          <boxGeometry args={[1.5, 1.1, 0.42]} />
        </mesh>
        
        {/* Top Flag (French Flag) */}
        <mesh position={[0, 0.65, 0.2]} rotation={[-Math.PI / 5, 0, 0]} material={materials.bodyMain}>
          <boxGeometry args={[1.8, 0.02, 1.0]} />
        </mesh>
        <mesh position={[0, 0.65, 0.2]} rotation={[-Math.PI / 5, 0, 0]} material={materials.bodyDark}>
          <boxGeometry args={[1.78, 0.04, 0.98]} />
        </mesh>

        {/* Side Flags */}
        <mesh position={[0.85, 0, 0.2]} rotation={[0, Math.PI / 6, 0]} material={materials.bodyMain}>
          <boxGeometry args={[0.02, 1.1, 0.6]} />
        </mesh>
        <mesh position={[-0.85, 0, 0.2]} rotation={[0, -Math.PI / 6, 0]} material={materials.bodyMain}>
          <boxGeometry args={[0.02, 1.1, 0.6]} />
        </mesh>
      </group>
    </>
  );
}
