"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";

export function CameraBody({ parts }: CameraPartProps) {
  const { bodyMain, bodySide } = parts;
  return (
    <>
      <group ref={bodyMain}>
        {/* Core Block */}
        <mesh position={[0, 0, 0]} material={materials.bodyMain}>
          <boxGeometry args={[1.3, 1.4, 1.6]} />
        </mesh>
        
        {/* Top angled chamfer / heat sink area */}
        <mesh position={[0, 0.75, -0.2]} material={materials.bodyDark}>
          <boxGeometry args={[1.1, 0.1, 1.0]} />
        </mesh>

        {/* Side Vents */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={`vent-${i}`} position={[0.66, 0.4 - i * 0.06, 0.2]} material={materials.bodyDark}>
            <boxGeometry args={[0.02, 0.03, 0.8]} />
          </mesh>
        ))}

        {/* Sensor Block Extension */}
        <mesh position={[0, 0, 0.85]} material={materials.darkMetal}>
          <boxGeometry args={[0.9, 0.9, 0.1]} />
        </mesh>

        {/* Audio module / right side bump */}
        <mesh position={[0.7, 0, -0.2]} material={materials.bodyMain}>
          <boxGeometry args={[0.1, 0.8, 0.6]} />
        </mesh>

        {/* Branding Plate */}
        <group position={[-0.66, 0.5, 0.5]}>
          <mesh material={materials.machinedMetal}>
            <boxGeometry args={[0.02, 0.15, 0.6]} />
          </mesh>
          <mesh position={[-0.015, 0, 0.2]} material={materials.redAccent}>
            <boxGeometry args={[0.02, 0.08, 0.08]} />
          </mesh>
        </group>
      </group>

      <group ref={bodySide}>
        {/* Left Side Operator Panel */}
        <mesh position={[-0.67, 0, -0.1]} material={materials.bodyDark}>
          <boxGeometry args={[0.05, 1.2, 1.2]} />
        </mesh>
        
        {/* Control Screen */}
        <mesh position={[-0.7, 0.2, -0.2]} material={materials.screen}>
          <boxGeometry args={[0.02, 0.5, 0.7]} />
        </mesh>

        {/* Operator Buttons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={`btn-${i}`} position={[-0.7, -0.2, -0.4 + i * 0.12]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
            <cylinderGeometry args={[0.03, 0.03, 0.02, 16]} />
          </mesh>
        ))}
        {/* Record Button */}
        <mesh position={[-0.7, -0.4, 0.2]} rotation={[0, 0, Math.PI / 2]} material={materials.redAccent}>
          <cylinderGeometry args={[0.06, 0.06, 0.03, 24]} />
        </mesh>
        {/* Record Button Bezel */}
        <mesh position={[-0.69, -0.4, 0.2]} rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 24]} />
        </mesh>

        {/* IO Ports (SDI/Power) */}
        {Array.from({ length: 4 }).map((_, i) => (
          <group key={`port-${i}`} position={[-0.7, -0.3 + i * 0.15, 0.4]}>
            <mesh rotation={[0, 0, Math.PI / 2]} material={materials.machinedMetal}>
              <cylinderGeometry args={[0.04, 0.04, 0.04, 16]} />
            </mesh>
            <mesh position={[-0.02, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={materials.goldContact}>
              <cylinderGeometry args={[0.01, 0.01, 0.02, 8]} />
            </mesh>
          </group>
        ))}
      </group>
    </>
  );
}
