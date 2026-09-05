"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function LensAssembly({ parts }: CameraPartProps) {
  const { lensMount, lensRings, lensFront, lensMatteBox } = parts;
  return (
    <>
      <group ref={lensMount} position={[0, 0, 0.835]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.48, 0.48, 0.12, 32]} />
        </mesh>
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.darkMetal}>
          <cylinderGeometry args={[0.42, 0.42, 0.08, 32]} />
        </mesh>
      </group>

      <group ref={lensRings} position={[0, 0, 1.05]}>
        {/* Base Barrel */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodizedBlack}>
          <cylinderGeometry args={[0.43, 0.43, 0.35, 32]} />
        </mesh>
        {/* Iris Ring */}
        <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.charcoal}>
          <cylinderGeometry args={[0.45, 0.45, 0.08, 32]} />
        </mesh>
        {/* Focus Ring */}
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.charcoal}>
          <cylinderGeometry args={[0.46, 0.46, 0.15, 32]} />
        </mesh>
      </group>

      <group ref={lensFront} position={[0, 0, 1.45]}>
        {/* Front Flared Barrel */}
        <mesh position={[0, 0, -0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.anodizedBlack}>
          <cylinderGeometry args={[0.55, 0.43, 0.25, 32]} />
        </mesh>
        {/* Front Edge */}
        <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.56, 0.56, 0.04, 32]} />
        </mesh>
        {/* Front Glass */}
        <mesh position={[0, 0, -0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.darkGlass}>
          <sphereGeometry args={[0.52, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3.5]} />
        </mesh>
        {/* Inner Glass */}
        <mesh position={[0, 0, -0.15]} rotation={[Math.PI / 2, 0, 0]} material={materials.lensCoating}>
          <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
      </group>

      <group ref={lensMatteBox} position={[0, 0, 1.8]}>
        {/* Matte Box Hood */}
        <mesh rotation={[Math.PI / 2, 0, Math.PI / 4]} material={materials.matteBlack}>
          <cylinderGeometry args={[1.2, 0.7, 0.8, 4, 1, true]} />
        </mesh>
        {/* Matte Box Backplate */}
        <mesh position={[0, 0, -0.4]} material={materials.matteBlack}>
          <boxGeometry args={[1.0, 1.0, 0.05]} />
        </mesh>
        {/* Cutout hole for lens */}
        <mesh position={[0, 0, -0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.anodizedBlack}>
           <cylinderGeometry args={[0.57, 0.57, 0.06, 32]} />
        </mesh>
        {/* Top Flag */}
        <mesh position={[0, 0.9, 0.2]} rotation={[-Math.PI / 6, 0, 0]} material={materials.charcoal}>
          <boxGeometry args={[1.6, 0.02, 0.9]} />
        </mesh>
      </group>
    </>
  );
}
