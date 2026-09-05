"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function TopAssembly({ parts }: CameraPartProps) {
  const { topHandle, topEVF } = parts;
  return (
    <>
      <group ref={topHandle} position={[0, 0.75, 0]}>
        {/* Cheese Plate Base */}
        <mesh position={[0, 0.02, 0]} material={materials.machinedMetal}>
          <boxGeometry args={[0.8, 0.04, 1.3]} />
        </mesh>
        
        {/* Front Riser */}
        <mesh position={[0, 0.25, 0.4]} material={materials.darkMetal}>
          <boxGeometry args={[0.2, 0.4, 0.2]} />
        </mesh>

        {/* Back Riser */}
        <mesh position={[0, 0.2, -0.4]} material={materials.darkMetal}>
          <boxGeometry args={[0.2, 0.3, 0.2]} />
        </mesh>

        {/* Handle Grip */}
        <mesh position={[0, 0.45, 0]} material={materials.rubber}>
          <boxGeometry args={[0.25, 0.15, 1.2]} />
        </mesh>
        
        {/* Front Cold Shoe */}
        <mesh position={[0, 0.55, 0.5]} material={materials.machinedMetal}>
          <boxGeometry args={[0.15, 0.05, 0.15]} />
        </mesh>
      </group>

      <group ref={topEVF} position={[-0.5, 0.5, 0.2]}>
        {/* EVF Mount Arm */}
        <mesh position={[-0.2, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.03, 0.03, 0.4, 16]} />
        </mesh>
        
        {/* EVF Hinge */}
        <mesh position={[-0.4, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={materials.darkMetal}>
          <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        </mesh>

        {/* EVF Tube */}
        <mesh position={[-0.4, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]} material={materials.anodizedBlack}>
          <cylinderGeometry args={[0.15, 0.15, 0.5, 32]} />
        </mesh>

        {/* Eyecup */}
        <mesh position={[-0.4, 0, -0.45]} material={materials.rubber}>
          <torusGeometry args={[0.12, 0.06, 16, 32]} />
        </mesh>
        <mesh position={[-0.4, 0, -0.45]} rotation={[Math.PI/2, 0, 0]} material={materials.darkGlass}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
        </mesh>
      </group>
    </>
  );
}
