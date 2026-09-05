"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function CameraBody({ parts }: CameraPartProps) {
  const { bodyMain, bodySide, bodyBattery } = parts;
  return (
    <>
      <group ref={bodyMain}>
        {/* Main Body Shell */}
        <mesh position={[0, 0, 0]} material={materials.anodizedBlack}>
          <boxGeometry args={[1.2, 1.4, 1.5]} />
        </mesh>
        
        {/* Cooling Fins */}
        {Array.from({ length: 7 }).map((_, i) => (
          <mesh key={`fin-${i}`} position={[0.62, 0.2 - i * 0.1, 0.2]} material={materials.matteBlack}>
            <boxGeometry args={[0.04, 0.04, 0.6]} />
          </mesh>
        ))}

        {/* Top Plate Base */}
        <mesh position={[0, 0.72, 0]} material={materials.machinedMetal}>
          <boxGeometry args={[1.1, 0.04, 1.4]} />
        </mesh>

        {/* Bottom Plate Base */}
        <mesh position={[0, -0.72, 0]} material={materials.machinedMetal}>
          <boxGeometry args={[1.1, 0.04, 1.4]} />
        </mesh>

        {/* NOIRFRAME branding tag plate */}
        <group position={[-0.61, 0.5, 0.3]}>
          <mesh material={materials.machinedMetal}>
            <boxGeometry args={[0.04, 0.2, 0.5]} />
          </mesh>
          <mesh position={[-0.02, 0, 0]} material={materials.redAccent}>
            <boxGeometry args={[0.01, 0.06, 0.06]} />
          </mesh>
        </group>
        
        {/* Sensor Block */}
        <mesh position={[0, 0, 0.76]} material={materials.darkMetal}>
          <boxGeometry args={[0.9, 0.9, 0.15]} />
        </mesh>
      </group>

      <group ref={bodySide}>
        {/* Side Panel (Left) */}
        <mesh position={[-0.63, 0, -0.1]} material={materials.charcoal}>
          <boxGeometry args={[0.1, 1.0, 1.1]} />
        </mesh>
        {/* Screen */}
        <mesh position={[-0.69, 0.15, -0.1]} material={materials.darkGlass}>
          <boxGeometry args={[0.02, 0.5, 0.7]} />
        </mesh>
        {/* Side Buttons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`btn-${i}`} position={[-0.69, -0.2, -0.3 + i * 0.15]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
            <cylinderGeometry args={[0.04, 0.04, 0.02, 16]} />
          </mesh>
        ))}
        {/* Control Dial */}
        <mesh position={[-0.69, -0.35, 0.2]} rotation={[0, 0, Math.PI / 2]} material={materials.anodizedBlack}>
          <cylinderGeometry args={[0.08, 0.08, 0.04, 24]} />
        </mesh>
        {/* SDI Ports */}
        <mesh position={[-0.69, 0.35, 0.2]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.03, 0.03, 0.06, 16]} />
        </mesh>
        <mesh position={[-0.69, 0.35, 0.3]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.03, 0.03, 0.06, 16]} />
        </mesh>
      </group>

      <group ref={bodyBattery}>
        {/* V-Mount Plate */}
        <mesh position={[0, 0, -0.78]} material={materials.machinedMetal}>
          <boxGeometry args={[0.8, 1.1, 0.06]} />
        </mesh>
        {/* Battery Block */}
        <mesh position={[0, 0, -1.0]} material={materials.charcoal}>
          <boxGeometry args={[0.9, 1.15, 0.4]} />
        </mesh>
        {/* Battery Grip/Detail */}
        <mesh position={[0, 0, -1.22]} material={materials.rubber}>
          <boxGeometry args={[0.85, 1.1, 0.04]} />
        </mesh>
        {/* Power display */}
        <mesh position={[0, 0.4, -1.23]} material={materials.darkGlass}>
          <boxGeometry args={[0.2, 0.1, 0.02]} />
        </mesh>
      </group>
    </>
  );
}
