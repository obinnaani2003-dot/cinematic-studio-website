"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw } from "./utils";


export function TopRig({ parts }: CameraPartProps) {
  const { topRig } = parts;
  return (
    <group ref={topRig } position={[0, 0.35, 0]}>
      {/* NATO Rail */}
      <mesh position={[0, 0.02, 0]} material={materials.anodized}>
        <boxGeometry args={[0.2, 0.04, 0.8]} />
      </mesh>
      {/* Handle Base */}
      <mesh position={[0, 0.05, 0]} material={materials.body}>
        <boxGeometry args={[0.25, 0.02, 0.6]} />
      </mesh>
      {/* 3 Screws */}
      <Screw position={[0, 0.06, 0.2]} material={materials.stainless} scale={0.8}/>
      <Screw position={[0, 0.06, 0]} material={materials.stainless} scale={0.8}/>
      <Screw position={[0, 0.06, -0.2]} material={materials.stainless} scale={0.8}/>

      {/* Handle Front Riser */}
      <mesh position={[0, 0.15, 0.25]} material={materials.body}>
        <boxGeometry args={[0.15, 0.2, 0.15]} />
      </mesh>
      {/* Handle Rear Riser */}
      <mesh position={[0, 0.15, -0.2]} material={materials.body}>
        <boxGeometry args={[0.15, 0.2, 0.15]} />
      </mesh>

      {/* Handle Grip Core */}
      <mesh position={[0, 0.28, 0.05]} material={materials.anodized}>
        <boxGeometry args={[0.15, 0.1, 0.8]} />
      </mesh>
      {/* Rubber Grip */}
      <mesh position={[0, 0.28, 0.05]} rotation={[Math.PI/2, 0, 0]} material={materials.rubber}>
        <cylinderGeometry args={[0.11, 0.11, 0.6, 16]} />
      </mesh>

      {/* EVF Mount Plate */}
      <mesh position={[-0.15, 0.28, 0.35]} material={materials.anodized}>
        <boxGeometry args={[0.3, 0.04, 0.15]} />
      </mesh>
      {/* EVF Articulated Arm */}
      <mesh position={[-0.3, 0.25, 0.35]} material={materials.body}>
        <boxGeometry args={[0.04, 0.1, 0.15]} />
      </mesh>
      <mesh position={[-0.3, 0.18, 0.35]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.06, 0.06, 0.16, 16]} />
      </mesh>

      {/* EVF Housing */}
      <group position={[-0.45, 0.18, 0.2]} rotation={[0.2, 0, 0]}>
        <mesh rotation={[Math.PI/2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.1, 0.12, 0.4, 32]} />
        </mesh>
        <mesh position={[0, 0, -0.1]} rotation={[Math.PI/2, 0, 0]} material={materials.redAccent}>
          <cylinderGeometry args={[0.122, 0.122, 0.01, 32]} />
        </mesh>
        {/* Eyecup */}
        <mesh position={[0, 0, -0.22]} material={materials.rubber}>
          <torusGeometry args={[0.08, 0.06, 16, 32]} />
        </mesh>
        <mesh position={[0, 0, -0.2]} material={materials.rubber}>
          <mesh rotation={[Math.PI/2, 0, 0]}><cylinderGeometry args={[0.14, 0.1, 0.04, 32]} /></mesh>
        </mesh>
        {/* Eyepiece Glass */}
        <mesh position={[0, 0, -0.18]} rotation={[Math.PI/2, 0, 0]} material={materials.glass}>
          <cylinderGeometry args={[0.06, 0.06, 0.01, 16]} />
        </mesh>
      </group>
    </group>
  );
}
