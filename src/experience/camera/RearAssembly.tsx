"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function RearAssembly({ parts }: CameraPartProps) {
  const { rearBattery } = parts;
  return (
    <group ref={rearBattery} position={[0, 0, -0.8]}>
      {/* V-Mount Interface Plate */}
      <mesh position={[0, 0, 0]} material={materials.machinedMetal}>
        <boxGeometry args={[0.85, 1.2, 0.08]} />
      </mesh>
      {/* V-Wedge Detail */}
      <mesh position={[0, 0.2, -0.05]} rotation={[Math.PI/2, 0, 0]} material={materials.darkMetal}>
        <cylinderGeometry args={[0.15, 0.1, 0.04, 3]} />
      </mesh>

      {/* Large Cinematic Block Battery (V-Mount style) */}
      <mesh position={[0, 0, -0.3]} material={materials.bodyMain}>
        <boxGeometry args={[0.9, 1.3, 0.5]} />
      </mesh>
      
      {/* Battery Rubber Bumpers */}
      <mesh position={[0, 0.6, -0.3]} material={materials.rubber}>
        <boxGeometry args={[0.92, 0.1, 0.52]} />
      </mesh>
      <mesh position={[0, -0.6, -0.3]} material={materials.rubber}>
        <boxGeometry args={[0.92, 0.1, 0.52]} />
      </mesh>
      
      {/* Battery LCD/Gauge */}
      <mesh position={[0, 0.4, -0.56]} material={materials.screen}>
        <boxGeometry args={[0.3, 0.15, 0.02]} />
      </mesh>
      {/* Gauge readout simulation */}
      <mesh position={[-0.05, 0.4, -0.57]} material={materials.redAccent}>
        <boxGeometry args={[0.15, 0.05, 0.01]} />
      </mesh>

      {/* Rear Cable Connectors (LEMO style) */}
      <mesh position={[-0.3, -0.4, -0.56]} rotation={[Math.PI/2, 0, 0]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.05, 0.05, 0.04, 16]} />
      </mesh>
      <mesh position={[-0.15, -0.4, -0.56]} rotation={[Math.PI/2, 0, 0]} material={materials.machinedMetal}>
        <cylinderGeometry args={[0.04, 0.04, 0.04, 16]} />
      </mesh>
    </group>
  );
}
