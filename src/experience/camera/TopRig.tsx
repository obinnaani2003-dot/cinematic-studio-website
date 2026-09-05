"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw, BeveledBox } from "./utils";


export function TopRig({ parts }: CameraPartProps) {
  const { topRig } = parts;
  return (
    <group ref={topRig}>
      {/* 1. Cheese Plate Base */}
      <BeveledBox position={[0, 0.44, 0.2]} args={[0.3, 0.04, 0.8]} bevel={0.01} material={materials.body} />
      
      <Screw position={[0.1, 0.46, 0.4]} material={materials.stainless} />
      <Screw position={[-0.1, 0.46, 0.4]} material={materials.stainless} />
      <Screw position={[0.1, 0.46, 0]} material={materials.stainless} />
      <Screw position={[-0.1, 0.46, 0]} material={materials.stainless} />

      {/* 2. Top Handle (ARRI CCH-4 Style) */}
      <group position={[0, 0.6, 0]}>
        {/* Riser */}
        <BeveledBox position={[0, -0.05, 0.3]} args={[0.2, 0.3, 0.15]} bevel={0.01} material={materials.body} />
        
        {/* Main Bar */}
        <BeveledBox position={[0, 0.12, 0.1]} args={[0.22, 0.12, 1.2]} bevel={0.01} material={materials.body} />
        
        {/* Structural cutouts (faked with dark inserts) */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={`hole-${i}`} position={[0, 0.12, 0.6 - i * 0.18]} material={materials.body}>
            <cylinderGeometry args={[0.04, 0.04, 0.23, 16]} />
          </mesh>
        ))}

        {/* Rubber Grip */}
        <mesh position={[0, 0.06, 0.1]} rotation={[Math.PI/2, 0, 0]} material={materials.rubber}>
          <cylinderGeometry args={[0.11, 0.11, 0.9, 32]} />
        </mesh>
      </group>

      {/* 3. EVF Articulated Bracket (ARRI MVF-2 style) */}
      <group position={[-0.2, 0.6, 0.4]}>
        {/* Rail */}
        <mesh position={[-0.15, 0, 0]} material={materials.body}>
          <boxGeometry args={[0.3, 0.04, 0.1]} />
        </mesh>
        {/* Pivot */}
        <mesh position={[-0.3, -0.05, 0]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.08, 0.08, 0.12, 32]} />
        </mesh>
        <mesh position={[-0.3, -0.05, 0]} rotation={[Math.PI/2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.05, 0.05, 0.13, 32]} />
        </mesh>

        {/* EVF Housing */}
        <group position={[-0.45, -0.05, -0.2]} rotation={[0.2, 0, 0]}>
          <BeveledBox args={[0.28, 0.35, 0.5]} bevel={0.01} material={materials.body} />
          
          <mesh position={[0, 0, -0.25]} rotation={[Math.PI/2, 0, 0]} material={materials.body}>
            <cylinderGeometry args={[0.13, 0.15, 0.1, 48]} />
          </mesh>
          <mesh position={[0, 0, -0.3]} rotation={[Math.PI/2, 0, 0]} material={materials.redAccent}>
            <cylinderGeometry args={[0.15, 0.15, 0.02, 48]} />
          </mesh>

          {/* Rubber Eyecup */}
          <mesh position={[0, 0, -0.35]} material={materials.rubber}>
            <cylinderGeometry args={[0.16, 0.12, 0.15, 48]} />
          </mesh>
          <mesh position={[0, 0, -0.42]} material={materials.rubber}>
            <torusGeometry args={[0.16, 0.05, 32, 48]} />
          </mesh>

          {/* Eyepiece Glass */}
          <mesh position={[0, 0, -0.32]} rotation={[Math.PI/2, 0, 0]} material={materials.glass}>
            <cylinderGeometry args={[0.08, 0.08, 0.02, 16]} />
          </mesh>
        </group>
      </group>

    </group>
  );
}
