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
          <boxGeometry args={[0.9, 0.04, 1.4]} />
        </mesh>
        {/* Cheese Plate Holes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={`hole-${i}`} position={[0, 0.02, -0.5 + i * 0.2]} material={materials.bodyDark}>
            <cylinderGeometry args={[0.04, 0.04, 0.05, 16]} />
          </mesh>
        ))}
        
        {/* Handle Front Riser */}
        <mesh position={[0, 0.3, 0.5]} material={materials.darkMetal}>
          <boxGeometry args={[0.2, 0.6, 0.2]} />
        </mesh>
        {/* Handle Back Riser */}
        <mesh position={[0, 0.25, -0.4]} material={materials.darkMetal}>
          <boxGeometry args={[0.2, 0.5, 0.2]} />
        </mesh>

        {/* Handle Grip Core */}
        <mesh position={[0, 0.55, 0.05]} material={materials.darkMetal}>
          <boxGeometry args={[0.2, 0.15, 1.3]} />
        </mesh>
        
        {/* Rubber Grip Wrap */}
        <mesh position={[0, 0.55, 0.05]} rotation={[Math.PI/2, 0, 0]} material={materials.rubber}>
          <cylinderGeometry args={[0.13, 0.13, 1.0, 16]} />
        </mesh>

        {/* Handle Front Accessory Mount (Cold Shoe) */}
        <mesh position={[0, 0.65, 0.65]} material={materials.machinedMetal}>
          <boxGeometry args={[0.15, 0.05, 0.15]} />
        </mesh>
        {/* Handle Top Rod Mount */}
        <mesh position={[0, 0.65, -0.4]} rotation={[0, 0, Math.PI/2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
        </mesh>
      </group>

      <group ref={topEVF} position={[-0.6, 0.55, 0.2]}>
        {/* EVF Mount Bracket / Rail */}
        <mesh position={[0.1, 0.15, 0]} material={materials.machinedMetal}>
          <boxGeometry args={[0.6, 0.05, 0.1]} />
        </mesh>

        {/* EVF Arm Pivot */}
        <mesh position={[-0.25, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]} material={materials.darkMetal}>
          <cylinderGeometry args={[0.1, 0.1, 0.15, 16]} />
        </mesh>

        {/* EVF Main Tube */}
        <mesh position={[-0.25, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]} material={materials.bodyMain}>
          <cylinderGeometry args={[0.16, 0.16, 0.6, 32]} />
        </mesh>
        
        {/* EVF Screen/Adjustment Dial */}
        <mesh position={[-0.41, 0, -0.1]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 16]} />
        </mesh>

        {/* Eyecup Cushion */}
        <mesh position={[-0.25, 0, -0.55]} material={materials.rubber}>
          <torusGeometry args={[0.14, 0.07, 16, 32]} />
        </mesh>
        {/* Viewfinder Glass */}
        <mesh position={[-0.25, 0, -0.5]} rotation={[Math.PI/2, 0, 0]} material={materials.glass}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 16]} />
        </mesh>
      </group>
    </>
  );
}
