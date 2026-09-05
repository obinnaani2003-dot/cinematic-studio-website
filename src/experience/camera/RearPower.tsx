"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw, BeveledBox } from "./utils";


export function RearPower({ parts }: CameraPartProps) {
  const { rearPower } = parts;
  return (
    <group ref={rearPower} position={[0, 0, -0.6]}>
      
      {/* 1. V-Mount Camera Plate */}
      <BeveledBox position={[0, 0, 0]} args={[0.55, 0.8, 0.05]} bevel={0.01} material={materials.body} />
      
      <Screw position={[0.22, 0.35, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>
      <Screw position={[-0.22, 0.35, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>
      <Screw position={[0.22, -0.35, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>
      <Screw position={[-0.22, -0.35, 0.025]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} scale={0.8}/>

      <mesh position={[0, 0.15, -0.04]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.08, 0.04, 0.03, 3]} />
      </mesh>

      {/* 2. Cinema Block Battery (e.g. B-Mount Style) */}
      <BeveledBox position={[0, 0, -0.22]} args={[0.62, 0.85, 0.35]} bevel={0.015} material={materials.body} />
      
      {/* Rubber Bumper/Grips */}
      <mesh position={[0, 0.41, -0.22]} material={materials.rubber}>
        <boxGeometry args={[0.63, 0.06, 0.36]} />
      </mesh>
      <mesh position={[0, -0.41, -0.22]} material={materials.rubber}>
        <boxGeometry args={[0.63, 0.06, 0.36]} />
      </mesh>
      
      {/* Deep Side Ribs */}
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

      {/* 3. LCD / LED Capacity Gauge */}
      <mesh position={[0, 0.28, -0.4]} material={materials.screen}>
        <boxGeometry args={[0.2, 0.1, 0.01]} />
      </mesh>
      
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`led-${i}`} position={[-0.06 + i * 0.04, 0.28, -0.406]} material={i === 3 ? materials.redAccent : materials.stainless}>
          <boxGeometry args={[0.02, 0.06, 0.005]} />
        </mesh>
      ))}

    </group>
  );
}
