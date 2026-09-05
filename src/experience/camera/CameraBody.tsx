"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { Screw } from "./utils";

export function CameraBody({ parts }: CameraPartProps) {
  const { bodyMain, bodySide } = parts;
  return (
    <>
      <group ref={bodyMain}>
        {/* Core Block */}
        <mesh position={[0, 0, 0]} material={materials.body}>
          <boxGeometry args={[0.7, 1.0, 1.2]} />
        </mesh>
        
        {/* Top angled chamfer */}
        <mesh position={[0, 0.45, 0.1]} rotation={[-0.1, 0, 0]} material={materials.body}>
          <boxGeometry args={[0.7, 0.15, 1.0]} />
        </mesh>

        {/* Right side bump / audio module */}
        <mesh position={[0.36, 0.1, -0.1]} material={materials.body}>
          <boxGeometry args={[0.1, 0.75, 0.7]} />
        </mesh>

        {/* Side Vents (Right side) */}
        {Array.from({ length: 7 }).map((_, i) => (
          <group key={`vent-r-${i}`} position={[0.42, 0.35 - i * 0.08, -0.1]}>
            <mesh material={materials.body}>
              <boxGeometry args={[0.02, 0.04, 0.6]} />
            </mesh>
            {/* Inner dark vent recess */}
            <mesh position={[-0.01, 0, 0]} material={materials.rubber}>
              <boxGeometry args={[0.01, 0.03, 0.58]} />
            </mesh>
          </group>
        ))}

        {/* Sensor Block Front Extension */}
        <mesh position={[0, 0.05, 0.62]} material={materials.anodized}>
          <boxGeometry args={[0.65, 0.85, 0.05]} />
        </mesh>
        <mesh position={[0, 0.05, 0.66]} material={materials.body}>
          <boxGeometry args={[0.6, 0.8, 0.04]} />
        </mesh>

        {/* Branding Plate */}
        <group position={[-0.36, 0.35, 0.3]}>
          <mesh material={materials.anodized}>
            <boxGeometry args={[0.02, 0.12, 0.4]} />
          </mesh>
          <mesh position={[-0.015, 0, 0.15]} material={materials.redAccent}>
            <boxGeometry args={[0.02, 0.06, 0.06]} />
          </mesh>
        </group>

        {/* Fasteners */}
        <Screw position={[0.3, 0.45, 0.55]} rotation={[Math.PI/2, 0, 0]} material={materials.steel} />
        <Screw position={[-0.3, 0.45, 0.55]} rotation={[Math.PI/2, 0, 0]} material={materials.steel} />
        <Screw position={[0.3, -0.35, 0.55]} rotation={[Math.PI/2, 0, 0]} material={materials.steel} />
        <Screw position={[-0.3, -0.35, 0.55]} rotation={[Math.PI/2, 0, 0]} material={materials.steel} />
      </group>

      <group ref={bodySide}>
        {/* Left Side Panel Area (Outer border) */}
        <mesh position={[-0.35, 0.0, -0.1]} material={materials.anodized}>
          <boxGeometry args={[0.02, 0.85, 0.85]} />
        </mesh>
        {/* Recessed Control Area */}
        <mesh position={[-0.34, 0.0, -0.1]} material={materials.body}>
          <boxGeometry args={[0.01, 0.8, 0.8]} />
        </mesh>
        
        {/* Control LCD Screen */}
        <mesh position={[-0.345, 0.15, -0.2]} material={materials.screen}>
          <boxGeometry args={[0.01, 0.4, 0.5]} />
        </mesh>

        {/* Rotary Dial */}
        <mesh position={[-0.345, -0.2, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.anodized}>
          <cylinderGeometry args={[0.1, 0.1, 0.02, 32]} />
        </mesh>
        <mesh position={[-0.355, -0.2, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.rubber}>
          <cylinderGeometry args={[0.09, 0.09, 0.02, 32]} />
        </mesh>

        {/* Function Buttons (6 square rubber buttons) */}
        {Array.from({ length: 3 }).map((_, i) => (
          <group key={`btn-r1-${i}`}>
            <mesh position={[-0.345, -0.15, -0.2 + i * 0.08]} material={materials.rubber}>
              <boxGeometry args={[0.01, 0.04, 0.04]} />
            </mesh>
            <mesh position={[-0.345, -0.25, -0.2 + i * 0.08]} material={materials.rubber}>
              <boxGeometry args={[0.01, 0.04, 0.04]} />
            </mesh>
          </group>
        ))}

        {/* Record Button */}
        <mesh position={[-0.345, -0.2, -0.4]} rotation={[0, 0, Math.PI / 2]} material={materials.redAccent}>
          <cylinderGeometry args={[0.03, 0.03, 0.015, 24]} />
        </mesh>
        {/* Record Button Bezel */}
        <mesh position={[-0.34, -0.2, -0.4]} rotation={[0, 0, Math.PI / 2]} material={materials.steel}>
          <cylinderGeometry args={[0.04, 0.04, 0.01, 24]} />
        </mesh>

        {/* Rotary Encoder Knobs */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`knob-${i}`} position={[-0.345, 0.15 - i * 0.1, 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.anodized}>
            <cylinderGeometry args={[0.025, 0.025, 0.02, 16]} />
          </mesh>
        ))}

        {/* Fasteners for side panel */}
        <Screw position={[-0.36, 0.38, 0.28]} rotation={[0, 0, Math.PI/2]} material={materials.steel} />
        <Screw position={[-0.36, 0.38, -0.48]} rotation={[0, 0, Math.PI/2]} material={materials.steel} />
        <Screw position={[-0.36, -0.38, 0.28]} rotation={[0, 0, Math.PI/2]} material={materials.steel} />
        <Screw position={[-0.36, -0.38, -0.48]} rotation={[0, 0, Math.PI/2]} material={materials.steel} />
      </group>
    </>
  );
}
