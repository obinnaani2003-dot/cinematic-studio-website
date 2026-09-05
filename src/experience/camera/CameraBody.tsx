"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw, BeveledBox } from "./utils";


export function CameraBody({ parts }: CameraPartProps) {
  const { cameraBrain } = parts;
  return (
    <group ref={cameraBrain}>
      {/* Main Core (ARRI Alexa 35 Style) */}
      <BeveledBox position={[0, 0, 0]} args={[0.7, 0.85, 0.9]} bevel={0.015} material={materials.body} />
      
      {/* Front Mount Block */}
      <BeveledBox position={[0, 0, 0.5]} args={[0.6, 0.75, 0.15]} bevel={0.01} material={materials.body} />
      
      {/* Right Side Cooling Block */}
      <group position={[0.36, 0, 0]}>
        <BeveledBox args={[0.06, 0.75, 0.8]} bevel={0.01} material={materials.body} />
        {/* Large Circular Exhaust Grille */}
        <group position={[0.03, 0.15, -0.15]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={materials.body}>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 32]} />
          </mesh>
          <mesh material={materials.screen}>
            <cylinderGeometry args={[0.18, 0.18, 0.021, 32]} />
          </mesh>
          {/* Grille slats */}
          {Array.from({ length: 8 }).map((_, i) => (
            <mesh key={`grille-${i}`} position={[0, 0, 0]} rotation={[0, (i * Math.PI) / 8, 0]} material={materials.body}>
              <boxGeometry args={[0.36, 0.025, 0.02]} />
            </mesh>
          ))}
        </group>
        {/* Audio / SDI Knobs */}
        <mesh position={[0.04, -0.2, 0.2]} rotation={[0, 0, -Math.PI / 2]} material={materials.stainless}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
        </mesh>
        <mesh position={[0.04, -0.2, 0.05]} rotation={[0, 0, -Math.PI / 2]} material={materials.stainless}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
        </mesh>
      </group>

      {/* Rear Top Antennas */}
      <mesh position={[0.3, 0.45, -0.38]} material={materials.rubber}>
        <cylinderGeometry args={[0.015, 0.015, 0.15, 16]} />
      </mesh>
      <mesh position={[-0.3, 0.45, -0.38]} material={materials.rubber}>
        <cylinderGeometry args={[0.015, 0.015, 0.15, 16]} />
      </mesh>
      
      {/* Left Side Operator Panel (Deeply Recessed) */}
      <group position={[-0.35, 0, 0]}>
        {/* Outer Frame */}
        <mesh position={[-0.01, 0, 0]} material={materials.body}>
           <boxGeometry args={[0.02, 0.8, 0.8]} />
        </mesh>
        {/* Recessed Area */}
        <mesh position={[0.01, 0, 0]} material={materials.lensBody}>
           <boxGeometry args={[0.01, 0.74, 0.74]} />
        </mesh>
        
        {/* LCD Screen */}
        <mesh position={[0.005, 0.15, -0.1]} material={materials.screenActive}>
           <boxGeometry args={[0.01, 0.35, 0.45]} />
        </mesh>
        {/* LCD Bezel */}
        <mesh position={[0.008, 0.15, -0.1]} material={materials.body}>
           <boxGeometry args={[0.005, 0.37, 0.47]} />
        </mesh>
        
        {/* Vertical Row of 6 Buttons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={`lbtn-${i}`} position={[0.005, 0.28 - i * 0.06, 0.18]} material={materials.rubber}>
            <boxGeometry args={[0.015, 0.025, 0.035]} />
          </mesh>
        ))}

        {/* Small Bottom Buttons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`bbtn-${i}`} position={[0.005, -0.15, -0.2 + i * 0.1]} material={materials.rubber}>
            <boxGeometry args={[0.015, 0.025, 0.04]} />
          </mesh>
        ))}

        {/* Large Rotary Dial */}
        <mesh position={[-0.01, -0.25, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.rubber}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        </mesh>

        {/* Fasteners */}
        <Screw position={[0.01, 0.33, 0.33]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.01, 0.33, -0.33]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.01, -0.33, 0.33]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.01, -0.33, -0.33]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
      </group>

    </group>
  );
}
