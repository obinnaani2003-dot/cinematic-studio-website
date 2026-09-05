"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw, BeveledBox } from "./utils";


export function CameraBody({ parts }: CameraPartProps) {
  const { cameraBrain } = parts;
  return (
    <group ref={cameraBrain }>
      {/* --- MAIN CHASSIS (Magnesium Alloy) --- */}
      {/* Core Block */}
      <BeveledBox position={[0, 0, 0]} args={[0.7, 0.9, 1.0]} bevel={0.015} material={materials.body} />
      
      {/* Front Upper Chamfer (Sensor Block Top) */}
      <BeveledBox position={[0, 0.4, 0.3]} rotation={[-0.15, 0, 0]} args={[0.7, 0.2, 0.5]} bevel={0.01} material={materials.body} />
      
      {/* Rear Upper Exhaust Housing */}
      <BeveledBox position={[0, 0.48, -0.3]} args={[0.66, 0.1, 0.4]} bevel={0.01} material={materials.anodized} />

      {/* Front Sensor Housing */}
      <BeveledBox position={[0, 0, 0.55]} args={[0.68, 0.85, 0.15]} bevel={0.01} material={materials.body} />
      {/* Inner dark mount plate */}
      <mesh position={[0, 0, 0.63]} material={materials.anodized}>
        <cylinderGeometry args={[0.32, 0.32, 0.02, 32]} />
      </mesh>

      {/* --- COOLING SYSTEM (Right Side) --- */}
      <group position={[0.34, 0, -0.1]}>
        <BeveledBox position={[0.05, 0, 0]} args={[0.1, 0.8, 0.7]} bevel={0.01} material={materials.body} />
        {/* Vents */}
        {Array.from({ length: 8 }).map((_, i) => (
          <group key={`vent-${i}`} position={[0.1, 0.3 - i * 0.08, 0.0]}>
            <mesh material={materials.anodized}>
              <boxGeometry args={[0.02, 0.03, 0.55]} />
            </mesh>
            <mesh position={[-0.01, 0, 0]} material={materials.screen}>
              <boxGeometry args={[0.01, 0.02, 0.53]} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Audio / Media Bay (Right Rear) */}
      <BeveledBox position={[0.42, 0, -0.3]} args={[0.08, 0.6, 0.3]} bevel={0.01} material={materials.anodized} />
      
      {/* --- SIDE OPERATOR PANEL (Left Side, Deeply Recessed) --- */}
      <group position={[-0.35, 0, 0]}>
        {/* Outer Frame Bezel */}
        <mesh position={[-0.01, 0, -0.1]} material={materials.body}>
           <boxGeometry args={[0.04, 0.86, 0.86]} />
        </mesh>
        
        {/* Inner Deep Recess Background */}
        <mesh position={[0.01, 0, -0.1]} material={materials.anodized}>
           <boxGeometry args={[0.02, 0.8, 0.8]} />
        </mesh>

        {/* LCD Screen Housing */}
        <mesh position={[0.005, 0.15, -0.2]} material={materials.body}>
           <boxGeometry args={[0.02, 0.32, 0.42]} />
        </mesh>
        {/* Actual LCD Glass */}
        <mesh position={[0.0, 0.15, -0.2]} material={materials.screen}>
           <boxGeometry args={[0.02, 0.28, 0.38]} />
        </mesh>
        {/* LCD Info Mockup (Subtle white blocks for UI lines) */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`lcd-line-${i}`} position={[-0.011, 0.25 - i*0.06, -0.2]} material={materials.whiteMarking}>
            <boxGeometry args={[0.002, 0.005, 0.3]} />
          </mesh>
        ))}

        {/* Large Rotary Dial */}
        <mesh position={[-0.01, -0.2, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.anodized}>
          <cylinderGeometry args={[0.12, 0.12, 0.02, 32]} />
        </mesh>
        {/* Rubber Knurling */}
        <mesh position={[-0.012, -0.2, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.rubber}>
          <cylinderGeometry args={[0.122, 0.122, 0.015, 32]} />
        </mesh>
        {/* Dial Center Button */}
        <mesh position={[-0.015, -0.2, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.body}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 32]} />
        </mesh>

        {/* 6 Tactile Function Buttons */}
        {Array.from({ length: 3 }).map((_, i) => (
          <group key={`btn-r1-${i}`}>
            <mesh position={[-0.005, -0.12, -0.3 + i * 0.08]} material={materials.rubber}>
              <boxGeometry args={[0.015, 0.035, 0.035]} />
            </mesh>
            <mesh position={[-0.005, -0.22, -0.3 + i * 0.08]} material={materials.rubber}>
              <boxGeometry args={[0.015, 0.035, 0.035]} />
            </mesh>
          </group>
        ))}

        {/* Record Button (Red + Stainless Bezel) */}
        <mesh position={[-0.005, 0.22, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.redAccent}>
          <cylinderGeometry args={[0.035, 0.035, 0.015, 24]} />
        </mesh>
        <mesh position={[0.0, 0.22, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.stainless}>
          <cylinderGeometry args={[0.045, 0.045, 0.01, 32]} />
        </mesh>

        {/* 3 Rotary Encoders */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`enc-${i}`} position={[-0.005, 0.08 - i * 0.08, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.gearMetal}>
            <cylinderGeometry args={[0.025, 0.025, 0.025, 16]} />
          </mesh>
        ))}

        {/* Panel Fasteners */}
        <Screw position={[0.0, 0.38, 0.28]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.0, 0.38, -0.48]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.0, -0.38, 0.28]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
        <Screw position={[0.0, -0.38, -0.48]} rotation={[0, 0, Math.PI/2]} material={materials.stainless} scale={0.7} />
      </group>

      {/* ARRI-style Blue Accents / Badges */}
      <group position={[-0.36, 0.35, 0.35]}>
        <mesh material={materials.anodized}>
          <boxGeometry args={[0.02, 0.08, 0.18]} />
        </mesh>
        <mesh position={[-0.015, 0, 0]} material={materials.blueAccent}>
          <boxGeometry args={[0.02, 0.06, 0.16]} />
        </mesh>
      </group>

      {/* Additional Chassis Screws */}
      <Screw position={[0.35, 0.4, 0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} />
      <Screw position={[-0.35, 0.4, 0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} />
      <Screw position={[0.35, -0.4, 0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} />
      <Screw position={[-0.35, -0.4, 0.4]} rotation={[Math.PI/2, 0, 0]} material={materials.stainless} />

    </group>
  );
}
