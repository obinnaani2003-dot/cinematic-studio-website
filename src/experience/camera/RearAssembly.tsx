"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function RearAssembly({ parts }: CameraPartProps) {
  const { rearBattery } = parts;
  return (
    <group ref={rearBattery} position={[0, 0, -0.6]}>
      {/* V-Mount Interface Plate */}
      <mesh position={[0, 0, 0]} material={materials.anodized}>
        <boxGeometry args={[0.65, 0.95, 0.05]} />
      </mesh>
      
      {/* V-Wedge Locking Interface */}
      <mesh position={[0, 0.15, -0.03]} rotation={[Math.PI/2, 0, 0]} material={materials.steel}>
        <cylinderGeometry args={[0.1, 0.05, 0.03, 3]} />
      </mesh>

      {/* Large Cinema Battery */}
      <mesh position={[0, 0, -0.2]} material={materials.body}>
        <boxGeometry args={[0.7, 1.0, 0.35]} />
      </mesh>
      
      {/* Battery Rubber Bumpers/Grips */}
      <mesh position={[0, 0.45, -0.2]} material={materials.rubber}>
        <boxGeometry args={[0.72, 0.1, 0.37]} />
      </mesh>
      <mesh position={[0, -0.45, -0.2]} material={materials.rubber}>
        <boxGeometry args={[0.72, 0.1, 0.37]} />
      </mesh>
      
      {/* Battery Side Ribs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`rib-l-${i}`} position={[-0.36, 0.2 - i*0.13, -0.2]} material={materials.rubber}>
          <boxGeometry args={[0.02, 0.05, 0.3]} />
        </mesh>
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`rib-r-${i}`} position={[0.36, 0.2 - i*0.13, -0.2]} material={materials.rubber}>
          <boxGeometry args={[0.02, 0.05, 0.3]} />
        </mesh>
      ))}

      {/* LCD / Gauge Display */}
      <mesh position={[0, 0.3, -0.38]} material={materials.screen}>
        <boxGeometry args={[0.25, 0.12, 0.01]} />
      </mesh>
      
      {/* 4 LED Capacity Indicators */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`led-${i}`} position={[-0.075 + i * 0.05, 0.3, -0.385]} material={materials.redAccent}>
          <boxGeometry args={[0.02, 0.05, 0.01]} />
        </mesh>
      ))}
    </group>
  );
}
