"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw } from "./utils";

export function TopAssembly({ parts }: CameraPartProps) {
  const { topHandle, topEVF } = parts;
  return (
    <>
      <group ref={topHandle} position={[0, 0.5, -0.1]}>
        {/* Cheese Plate / NATO Rail Base */}
        <mesh position={[0, 0.05, 0.2]} material={materials.anodized}>
          <boxGeometry args={[0.5, 0.02, 0.9]} />
        </mesh>
        
        {/* Fasteners for Cheese Plate */}
        <Screw position={[0.2, 0.06, 0.5]} material={materials.steel} />
        <Screw position={[-0.2, 0.06, 0.5]} material={materials.steel} />
        <Screw position={[0.2, 0.06, -0.1]} material={materials.steel} />
        <Screw position={[-0.2, 0.06, -0.1]} material={materials.steel} />

        {/* Handle Front Riser */}
        <mesh position={[0, 0.2, 0.4]} material={materials.anodized}>
          <boxGeometry args={[0.15, 0.3, 0.15]} />
        </mesh>
        
        {/* Handle Rear Riser */}
        <mesh position={[0, 0.15, 0]} material={materials.anodized}>
          <boxGeometry args={[0.15, 0.2, 0.15]} />
        </mesh>

        {/* Handle Grip Core */}
        <mesh position={[0, 0.35, 0.2]} material={materials.anodized}>
          <boxGeometry args={[0.15, 0.12, 1.0]} />
        </mesh>

        {/* Rubber Grip Wrap */}
        <mesh position={[0, 0.35, 0.15]} rotation={[Math.PI/2, 0, 0]} material={materials.rubber}>
          <cylinderGeometry args={[0.09, 0.09, 0.7, 16]} />
        </mesh>
      </group>

      <group ref={topEVF} position={[-0.4, 0.6, 0.1]}>
        {/* EVF Mount Arm */}
        <mesh position={[-0.05, 0, 0]} material={materials.anodized}>
          <boxGeometry args={[0.2, 0.05, 0.1]} />
        </mesh>

        {/* Hinge Pivot */}
        <mesh position={[-0.15, 0, 0]} rotation={[Math.PI/2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.06, 0.06, 0.1, 16]} />
        </mesh>

        {/* EVF Main Body (Tapered / angled) */}
        <mesh position={[-0.25, -0.05, -0.15]} rotation={[0.2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.12, 0.15, 0.4, 32]} />
        </mesh>

        {/* EVF Eyecup (Rubber) */}
        <mesh position={[-0.25, -0.09, -0.38]} rotation={[0.2, 0, 0]} material={materials.rubber}>
          <torusGeometry args={[0.1, 0.06, 16, 32]} />
        </mesh>

        {/* EVF Glass */}
        <mesh position={[-0.25, -0.09, -0.35]} rotation={[Math.PI/2 + 0.2, 0, 0]} material={materials.glass}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
        </mesh>
        
        {/* EVF Accent Ring */}
        <mesh position={[-0.25, -0.01, -0.1]} rotation={[Math.PI/2 + 0.2, 0, 0]} material={materials.redAccent}>
          <cylinderGeometry args={[0.13, 0.13, 0.01, 32]} />
        </mesh>
      </group>
    </>
  );
}
