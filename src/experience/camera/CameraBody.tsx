"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { BeveledBox } from "./utils";

export function CameraBody({ parts }: CameraPartProps) {
  const { cameraBrain } = parts;
  return (
    <group ref={cameraBrain}>
      {/* Main Core */}
      <BeveledBox position={[0, 0, 0]} args={[0.55, 0.6, 0.7]} bevel={0.015} material={materials.body} />
      
      {/* Front Mount Block (Protrudes forward) */}
      <BeveledBox position={[0, 0, 0.38]} args={[0.45, 0.5, 0.1]} bevel={0.01} material={materials.body} />
      
      {/* Right Side Cooling Block (Exhaust) */}
      <group position={[0.27, 0, -0.05]}>
        <BeveledBox args={[0.06, 0.5, 0.5]} bevel={0.01} material={materials.body} />
        {/* Fan Grille */}
        <group position={[0.03, 0.05, -0.05]} rotation={[0, 0, -Math.PI / 2]}>
          <mesh material={materials.body}>
            <cylinderGeometry args={[0.15, 0.15, 0.02, 32]} />
          </mesh>
          <mesh material={materials.screen}>
            <cylinderGeometry args={[0.14, 0.14, 0.021, 32]} />
          </mesh>
          {Array.from({ length: 7 }).map((_, i) => (
            <mesh key={`grille-${i}`} position={[0, 0, 0]} rotation={[0, (i * Math.PI) / 7, 0]} material={materials.body}>
              <boxGeometry args={[0.28, 0.015, 0.022]} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Rear Top Antennas */}
      <mesh position={[0.2, 0.35, -0.3]} material={materials.rubber}>
        <cylinderGeometry args={[0.01, 0.01, 0.1, 16]} />
      </mesh>
      <mesh position={[-0.2, 0.35, -0.3]} material={materials.rubber}>
        <cylinderGeometry args={[0.01, 0.01, 0.1, 16]} />
      </mesh>
      
      {/* Left Side Operator Panel */}
      <group position={[-0.28, 0, 0]}>
        {/* Outer Frame */}
        <mesh position={[0, 0, 0]} material={materials.body}>
           <boxGeometry args={[0.02, 0.55, 0.65]} />
        </mesh>
        {/* Recessed Area */}
        <mesh position={[0.01, 0, 0]} material={materials.lensBody}>
           <boxGeometry args={[0.01, 0.5, 0.6]} />
        </mesh>
        
        {/* LCD Screen */}
        <mesh position={[0.005, 0.1, -0.1]} material={materials.screenActive}>
           <boxGeometry args={[0.01, 0.2, 0.28]} />
        </mesh>
        
        {/* LCD Text lines */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`lcd-line-${i}`} position={[0.002, 0.16 - i*0.04, -0.1]} material={materials.whiteMarking}>
            <boxGeometry args={[0.001, 0.004, 0.2]} />
          </mesh>
        ))}

        {/* 6 Buttons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <mesh key={`lbtn-${i}`} position={[0.005, 0.18 - i * 0.04, 0.08]} material={materials.rubber}>
            <boxGeometry args={[0.01, 0.02, 0.02]} />
          </mesh>
        ))}

        {/* Large Rotary Dial */}
        <mesh position={[0.005, -0.15, 0.1]} rotation={[0, 0, Math.PI / 2]} material={materials.rubber}>
          <cylinderGeometry args={[0.06, 0.06, 0.015, 32]} />
        </mesh>

        {/* 3 Encoders */}
        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={`enc-${i}`} position={[0.005, -0.15, -0.05 - i * 0.06]} rotation={[0, 0, Math.PI / 2]} material={materials.gearMetal}>
            <cylinderGeometry args={[0.015, 0.015, 0.015, 16]} />
          </mesh>
        ))}
      </group>
    </group>
  );
}
