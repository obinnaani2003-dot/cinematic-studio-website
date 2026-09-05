"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw } from "./utils";


export function CameraBody({ parts }: CameraPartProps) {
  const { cameraBrain } = parts;
  return (
    <group ref={cameraBrain }>
      {/* Main Block */}
      <mesh position={[0, 0, 0]} material={materials.body}>
        <boxGeometry args={[0.6, 0.7, 0.8]} />
      </mesh>
      
      {/* Top Chamfer Block */}
      <mesh position={[0, 0.35, -0.05]} rotation={[-0.1, 0, 0]} material={materials.body}>
        <boxGeometry args={[0.6, 0.15, 0.7]} />
      </mesh>
      
      {/* Sensor / Front Block */}
      <mesh position={[0, 0, 0.45]} material={materials.anodized}>
        <boxGeometry args={[0.55, 0.65, 0.1]} />
      </mesh>

      {/* Right Side Audio/I/O Module */}
      <mesh position={[0.32, 0, -0.1]} material={materials.body}>
        <boxGeometry args={[0.06, 0.6, 0.6]} />
      </mesh>
      {/* Right Side Angle */}
      <mesh position={[0.32, 0.25, -0.1]} rotation={[0, 0, -0.1]} material={materials.body}>
        <boxGeometry args={[0.06, 0.2, 0.6]} />
      </mesh>
      
      {/* Cooling Vents (7 slots, bottom rear right) */}
      {Array.from({ length: 7 }).map((_, i) => (
        <group key={`vent-${i}`} position={[0.35, -0.2 + i * 0.04, -0.2]}>
          <mesh material={materials.anodized}>
            <boxGeometry args={[0.02, 0.02, 0.35]} />
          </mesh>
          <mesh position={[-0.01, 0, 0]} material={materials.screen}>
            <boxGeometry args={[0.01, 0.015, 0.33]} />
          </mesh>
        </group>
      ))}

      {/* Left Side Operator Panel (Recessed) */}
      <group position={[-0.3, 0, 0]}>
        {/* Outer Frame */}
        <mesh position={[0, 0, 0]} material={materials.anodized}>
           <boxGeometry args={[0.02, 0.6, 0.7]} />
        </mesh>
        {/* Recessed Backplate */}
        <mesh position={[0.01, 0, 0]} material={materials.body}>
           <boxGeometry args={[0.01, 0.56, 0.66]} />
        </mesh>
        
        {/* LCD Screen (3:2 aspect) */}
        <mesh position={[0.005, 0.1, -0.1]} material={materials.screen}>
           <boxGeometry args={[0.01, 0.2, 0.3]} />
        </mesh>
        {/* LCD Bezel */}
        <mesh position={[0.008, 0.1, -0.1]} material={materials.anodized}>
           <boxGeometry args={[0.005, 0.22, 0.32]} />
        </mesh>

        {/* Large Rotary Dial */}
        <mesh position={[0.005, -0.15, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.anodized}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        </mesh>
        {/* Dial Knurling */}
        <mesh position={[0.0, -0.15, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.rubber}>
          <cylinderGeometry args={[0.082, 0.082, 0.01, 32]} />
        </mesh>

        {/* 6 Square Function Buttons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <group key={`btn-r1-${i}`}>
            <mesh position={[0.005, -0.1, -0.2 + i * 0.06]} material={materials.rubber}>
              <boxGeometry args={[0.015, 0.03, 0.03]} />
            </mesh>
            <mesh position={[0.005, -0.18, -0.2 + i * 0.06]} material={materials.rubber}>
              <boxGeometry args={[0.015, 0.03, 0.03]} />
            </mesh>
          </group>
        ))}

        {/* Red Record Button */}
        <mesh position={[0.005, 0.2, 0.2]} rotation={[0, 0, Math.PI / 2]} material={materials.redAccent}>
          <cylinderGeometry args={[0.03, 0.03, 0.015, 24]} />
        </mesh>
        <mesh position={[0.01, 0.2, 0.2]} rotation={[0, 0, Math.PI / 2]} material={materials.stainless}>
          <cylinderGeometry args={[0.035, 0.035, 0.005, 24]} />
        </mesh>

        {/* 3 Rotary Encoders */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`enc-${i}`} position={[0.005, 0.05 - i * 0.06, 0.2]} rotation={[0, 0, Math.PI / 2]} material={materials.gearMetal}>
            <cylinderGeometry args={[0.02, 0.02, 0.02, 16]} />
          </mesh>
        ))}
        
        {/* Panel Screws */}
        <Screw position={[0.015, 0.26, 0.31]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.015, 0.26, -0.31]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.015, -0.26, 0.31]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.015, -0.26, -0.31]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
      </group>
    </group>
  );
}
