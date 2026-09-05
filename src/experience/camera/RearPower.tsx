"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { BeveledBox } from "./utils";


export function RearPower({ parts }: CameraPartProps) {
  const { rearPower } = parts;
  return (
    <group ref={rearPower} position={[0, 0.0, -0.35]}>
      {/* V-Mount Camera Plate */}
      <BeveledBox position={[0, 0, -0.05]} args={[0.4, 0.5, 0.05]} bevel={0.005} material={materials.anodized} />
      
      {/* B-Mount Battery Block */}
      <BeveledBox position={[0, 0, -0.15]} args={[0.38, 0.48, 0.15]} bevel={0.01} material={materials.body} />
      
      {/* Rubber Bumper/Grips */}
      <mesh position={[0, 0.24, -0.15]} material={materials.rubber}>
        <boxGeometry args={[0.39, 0.02, 0.16]} />
      </mesh>
      <mesh position={[0, -0.24, -0.15]} material={materials.rubber}>
        <boxGeometry args={[0.39, 0.02, 0.16]} />
      </mesh>
      
      {/* Side Ribs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <group key={`ribs-${i}`}>
          <mesh position={[-0.19, 0.1 - i*0.06, -0.15]} material={materials.rubber}>
            <boxGeometry args={[0.02, 0.02, 0.14]} />
          </mesh>
          <mesh position={[0.19, 0.1 - i*0.06, -0.15]} material={materials.rubber}>
            <boxGeometry args={[0.02, 0.02, 0.14]} />
          </mesh>
        </group>
      ))}

      {/* LED Gauge */}
      <mesh position={[0, 0.15, -0.23]} material={materials.screen}>
        <boxGeometry args={[0.1, 0.05, 0.01]} />
      </mesh>
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`led-${i}`} position={[-0.03 + i * 0.02, 0.15, -0.231]} material={i === 3 ? materials.redAccent : materials.stainless}>
          <boxGeometry args={[0.01, 0.03, 0.005]} />
        </mesh>
      ))}
    </group>
  );
}
