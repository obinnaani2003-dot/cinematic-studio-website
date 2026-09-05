"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw } from "./utils";


export function RearPower({ parts }: CameraPartProps) {
  const { rearPower } = parts;
  return (
    <group ref={rearPower } position={[0, 0.0, -0.6]}>
      {/* 1. V-Mount Camera Plate */}
      <mesh position={[0, 0, 0]} material={materials.anodized}>
        <boxGeometry args={[0.58, 0.85, 0.05]} />
      </mesh>
      {/* 4 Screws on plate */}
      <Screw position={[0.25, 0.38, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>
      <Screw position={[-0.25, 0.38, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>
      <Screw position={[0.25, -0.38, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>
      <Screw position={[-0.25, -0.38, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>

      {/* V-Wedge Locking Interface */}
      <mesh position={[0, 0.15, -0.04]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.08, 0.04, 0.03, 3]} />
      </mesh>

      {/* 2. Massive Cinema Battery Block */}
      <mesh position={[0, 0, -0.22]} material={materials.body}>
        <boxGeometry args={[0.62, 0.9, 0.35]} />
      </mesh>
      
      {/* Rubber Bumper/Grips (Top and Bottom) */}
      <mesh position={[0, 0.43, -0.22]} material={materials.rubber}>
        <boxGeometry args={[0.64, 0.06, 0.37]} />
      </mesh>
      <mesh position={[0, -0.43, -0.22]} material={materials.rubber}>
        <boxGeometry args={[0.64, 0.06, 0.37]} />
      </mesh>
      
      {/* Deep Side Ribs (Both Sides) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <group key={`ribs-${i}`}>
          <mesh position={[-0.32, 0.25 - i*0.1, -0.22]} material={materials.rubber}>
            <boxGeometry args={[0.02, 0.04, 0.32]} />
          </mesh>
          <mesh position={[0.32, 0.25 - i*0.1, -0.22]} material={materials.rubber}>
            <boxGeometry args={[0.02, 0.04, 0.32]} />
          </mesh>
        </group>
      ))}

      {/* 3. Status Display / LED Gauge */}
      <mesh position={[0, 0.3, -0.4]} material={materials.screen}>
        <boxGeometry args={[0.2, 0.1, 0.01]} />
      </mesh>
      
      {/* 4 Green LED Capacity Indicators */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`led-${i}`} position={[-0.06 + i * 0.04, 0.3, -0.406]} material={i === 3 ? materials.redAccent : materials.stainless}>
          {/* Faking glowing LEDs via materials: we can just use whiteMarking or green for full. But RedAccent for the last one looks cool */}
          <boxGeometry args={[0.02, 0.06, 0.005]} />
        </mesh>
      ))}
    </group>
  );
}
