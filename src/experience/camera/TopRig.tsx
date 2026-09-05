"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { BeveledBox } from "./utils";


export function TopRig({ parts }: CameraPartProps) {
  const { topRig } = parts;
  return (
    <group ref={topRig} position={[0, 0.3, 0]}>
      {/* 1. Cheese Plate Base */}
      <BeveledBox position={[0, 0.02, 0.0]} args={[0.2, 0.02, 0.5]} bevel={0.005} material={materials.body} />
      
      {/* 2. Handle Front Riser */}
      <mesh position={[0, 0.08, 0.2]} material={materials.body}>
        <boxGeometry args={[0.1, 0.15, 0.1]} />
      </mesh>
      
      {/* 3. Main Handle Bar */}
      <mesh position={[0, 0.15, 0]} material={materials.anodized}>
        <boxGeometry args={[0.1, 0.06, 0.6]} />
      </mesh>

      {/* Rubber Grip */}
      <mesh position={[0, 0.15, -0.05]} rotation={[Math.PI/2, 0, 0]} material={materials.rubber}>
        <cylinderGeometry args={[0.06, 0.06, 0.4, 32]} />
      </mesh>

      {/* 4. EVF Articulated Bracket */}
      <group position={[-0.1, 0.15, 0.2]}>
        <mesh position={[-0.1, 0, 0]} material={materials.anodized}>
          <boxGeometry args={[0.2, 0.02, 0.05]} />
        </mesh>
        <mesh position={[-0.2, 0, 0]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.03, 0.03, 0.06, 32]} />
        </mesh>

        {/* EVF Housing */}
        <group position={[-0.25, -0.05, -0.1]} rotation={[0.2, 0, 0]}>
          <BeveledBox args={[0.14, 0.18, 0.25]} bevel={0.01} material={materials.body} />
          
          <mesh position={[0, 0, -0.12]} rotation={[Math.PI/2, 0, 0]} material={materials.body}>
            <cylinderGeometry args={[0.07, 0.08, 0.05, 48]} />
          </mesh>
          <mesh position={[0, 0, -0.15]} rotation={[Math.PI/2, 0, 0]} material={materials.redAccent}>
            <cylinderGeometry args={[0.075, 0.075, 0.01, 48]} />
          </mesh>

          {/* Rubber Eyecup */}
          <mesh position={[0, 0, -0.18]} material={materials.rubber}>
            <cylinderGeometry args={[0.08, 0.06, 0.08, 48]} />
          </mesh>
          <mesh position={[0, 0, -0.22]} material={materials.rubber}>
            <torusGeometry args={[0.08, 0.02, 32, 48]} />
          </mesh>

          {/* Eyepiece Glass */}
          <mesh position={[0, 0, -0.18]} rotation={[Math.PI/2, 0, 0]} material={materials.glass}>
            <cylinderGeometry args={[0.04, 0.04, 0.01, 16]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}
