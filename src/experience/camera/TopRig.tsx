"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw } from "./utils";


export function TopRig({ parts }: CameraPartProps) {
  const { topRig } = parts;
  return (
    <group ref={topRig } position={[0, 0.48, 0]}>
      
      {/* 1. NATO Rail / Base Plate */}
      <mesh position={[0, 0, 0.1]} material={materials.anodized}>
        <boxGeometry args={[0.3, 0.04, 0.9]} />
      </mesh>
      
      {/* 4 Heavy Base Screws */}
      <Screw position={[0.1, 0.02, 0.4]} material={materials.stainless} scale={0.9}/>
      <Screw position={[-0.1, 0.02, 0.4]} material={materials.stainless} scale={0.9}/>
      <Screw position={[0.1, 0.02, -0.2]} material={materials.stainless} scale={0.9}/>
      <Screw position={[-0.1, 0.02, -0.2]} material={materials.stainless} scale={0.9}/>

      {/* 2. Handle Front Structural Riser */}
      <mesh position={[0, 0.15, 0.4]} material={materials.body}>
        <boxGeometry args={[0.25, 0.28, 0.2]} />
      </mesh>
      <mesh position={[0, 0.15, 0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.anodized}>
         <cylinderGeometry args={[0.08, 0.08, 0.29, 32]} />
      </mesh>
      
      {/* 3. Handle Rear Riser */}
      <mesh position={[0, 0.15, -0.1]} material={materials.body}>
        <boxGeometry args={[0.2, 0.28, 0.15]} />
      </mesh>

      {/* 4. Main Handle Bar (Cheese Plate Design) */}
      <mesh position={[0, 0.32, 0.15]} material={materials.anodized}>
        <boxGeometry args={[0.25, 0.12, 1.2]} />
      </mesh>
      
      {/* Handle Holes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <mesh key={`hole-${i}`} position={[0, 0.32, 0.6 - i * 0.15]} material={materials.body}>
          <cylinderGeometry args={[0.04, 0.04, 0.13, 16]} />
        </mesh>
      ))}

      {/* 5. Rubber Underside Grip */}
      <mesh position={[0, 0.27, 0.15]} rotation={[Math.PI/2, 0, 0]} material={materials.rubber}>
        <cylinderGeometry args={[0.12, 0.12, 0.9, 32]} />
      </mesh>

      {/* 6. EVF Articulated Bracket (Mounted to left of handle) */}
      <mesh position={[-0.2, 0.32, 0.4]} material={materials.anodized}>
        <boxGeometry args={[0.3, 0.05, 0.1]} />
      </mesh>
      
      {/* Pivot Cylinder */}
      <mesh position={[-0.35, 0.25, 0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.08, 0.08, 0.15, 32]} />
      </mesh>
      <mesh position={[-0.35, 0.25, 0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.anodized}>
        <cylinderGeometry args={[0.05, 0.05, 0.16, 32]} />
      </mesh>

      {/* 7. EVF Tube Housing (Tilted down/back) */}
      <group position={[-0.5, 0.25, 0.4]} rotation={[0.2, 0, 0]}>
        
        {/* Main Body */}
        <mesh rotation={[Math.PI/2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.14, 0.16, 0.45, 48]} />
        </mesh>
        
        {/* Red Accent Ring */}
        <mesh position={[0, 0, -0.18]} rotation={[Math.PI/2, 0, 0]} material={materials.redAccent}>
          <cylinderGeometry args={[0.162, 0.162, 0.02, 48]} />
        </mesh>

        {/* Huge Flexible Rubber Eyecup */}
        <mesh position={[0, 0, -0.25]} material={materials.rubber}>
          <cylinderGeometry args={[0.18, 0.12, 0.12, 48]} />
        </mesh>
        <mesh position={[0, 0, -0.32]} material={materials.rubber}>
          <torusGeometry args={[0.16, 0.05, 32, 48]} />
        </mesh>

        {/* Deep Eyepiece Glass */}
        <mesh position={[0, 0, -0.22]} rotation={[Math.PI/2, 0, 0]} material={materials.glass}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        </mesh>
      </group>

    </group>
  );
}
