"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";


export function RearPower({ parts }: CameraPartProps) {
  const { rearPower } = parts;
  return (
    <group ref={rearPower } position={[0, 0, -0.4]}>
      {/* V-Mount Plate */}
      <mesh position={[0, 0, 0]} material={materials.anodized}>
        <boxGeometry args={[0.55, 0.7, 0.05]} />
      </mesh>
      {/* V-Wedge Detail */}
      <mesh position={[0, 0.1, -0.03]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless}>
        <cylinderGeometry args={[0.08, 0.04, 0.02, 3]} />
      </mesh>

      {/* Dense Battery */}
      <mesh position={[0, 0, -0.15]} material={materials.body}>
        <boxGeometry args={[0.6, 0.75, 0.25]} />
      </mesh>

      {/* Ribbed Housing */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`rib-l-${i}`} position={[-0.31, 0.2 - i*0.1, -0.15]} material={materials.rubber}>
          <boxGeometry args={[0.02, 0.04, 0.2]} />
        </mesh>
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={`rib-r-${i}`} position={[0.31, 0.2 - i*0.1, -0.15]} material={materials.rubber}>
          <boxGeometry args={[0.02, 0.04, 0.2]} />
        </mesh>
      ))}

      {/* Rubber Corners */}
      <mesh position={[0, 0.38, -0.15]} material={materials.rubber}>
        <boxGeometry args={[0.62, 0.04, 0.27]} />
      </mesh>
      <mesh position={[0, -0.38, -0.15]} material={materials.rubber}>
        <boxGeometry args={[0.62, 0.04, 0.27]} />
      </mesh>

      {/* LEDs */}
      <mesh position={[0, 0.2, -0.28]} material={materials.screen}>
        <boxGeometry args={[0.2, 0.08, 0.01]} />
      </mesh>
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`led-${i}`} position={[-0.06 + i * 0.04, 0.2, -0.285]} material={materials.redAccent}>
          <boxGeometry args={[0.015, 0.04, 0.01]} />
        </mesh>
      ))}
    </group>
  );
}
