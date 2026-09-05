"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { GearRing } from "./utils";

export function LensAssembly({ parts }: CameraPartProps) {
  const { lensSystem, plMount, rearBarrel, irisGear, scaleRing, focusGear, frontBarrel, internalGlass, frontElement } = parts;
  return (
    <group ref={lensSystem} position={[0, 0.0, 0.43]}>
      
      {/* 1. PL Mount */}
      <group ref={plMount} position={[0, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.16, 0.16, 0.05, 64]} />
        </mesh>
        <mesh position={[0, 0, 0.03]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.17, 0.17, 0.02, 64]} />
        </mesh>
        {/* ARRI LPL Blue Levers */}
        <mesh position={[0.17, 0.08, 0.03]} rotation={[0, 0, -Math.PI/6]} material={materials.arriBlue}>
          <boxGeometry args={[0.03, 0.08, 0.02]} />
        </mesh>
        <mesh position={[-0.17, -0.08, 0.03]} rotation={[0, 0, -Math.PI/6]} material={materials.arriBlue}>
          <boxGeometry args={[0.03, 0.08, 0.02]} />
        </mesh>
      </group>

      {/* 2. Rear Barrel */}
      <group ref={rearBarrel} position={[0, 0, 0.08]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.lensBody}>
          <cylinderGeometry args={[0.18, 0.16, 0.08, 64]} />
        </mesh>
      </group>

      {/* 3. Iris Gear */}
      <group ref={irisGear} position={[0, 0, 0.14]}>
        <GearRing radius={0.19} width={0.04} teethCount={120} material={materials.gearMetal} />
      </group>

      {/* 4. Scale Ring */}
      <group ref={scaleRing} position={[0, 0, 0.28]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.lensBody}>
          <cylinderGeometry args={[0.20, 0.18, 0.24, 64]} />
        </mesh>
        <mesh position={[0.195, 0.04, 0]} rotation={[Math.PI/4, 0, -Math.PI/2]} material={materials.yellowMarking}>
          <boxGeometry args={[0.05, 0.002, 0.01]} />
        </mesh>
        <mesh position={[0.195, 0.08, 0]} rotation={[Math.PI/4, 0, -Math.PI/2]} material={materials.whiteMarking}>
          <boxGeometry args={[0.03, 0.002, 0.008]} />
        </mesh>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * Math.PI) / 8 - Math.PI;
          return (
            <mesh key={`tick-y-${i}`} position={[Math.cos(angle) * 0.198, Math.sin(angle) * 0.198, -0.05]} rotation={[0, 0, angle]} material={materials.yellowMarking}>
              <boxGeometry args={[0.002, 0.001, 0.02]} />
            </mesh>
          );
        })}
      </group>

      {/* 5. Focus Gear */}
      <group ref={focusGear} position={[0, 0, 0.44]}>
        <GearRing radius={0.21} width={0.08} teethCount={140} material={materials.gearMetal} />
      </group>

      {/* 6. Front Barrel (Flares out to 114mm equiv) */}
      <group ref={frontBarrel} position={[0, 0, 0.62]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.lensBody}>
          <cylinderGeometry args={[0.23, 0.20, 0.28, 64]} />
        </mesh>
        <mesh position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.23, 0.23, 0.02, 64]} />
        </mesh>
        <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.screen}>
          <cylinderGeometry args={[0.21, 0.19, 0.18, 64]} />
        </mesh>
      </group>

      {/* 7. Internal Optics */}
      <group ref={internalGlass} position={[0, 0, 0.6]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <sphereGeometry args={[0.18, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <cylinderGeometry args={[0.16, 0.16, 0.01, 32]} />
        </mesh>
      </group>

      {/* 8. Front Glass Element */}
      <group ref={frontElement} position={[0, 0, 0.72]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glass}>
          <sphereGeometry args={[0.22, 64, 64, 0, Math.PI * 2, 0, Math.PI / 3.2]} />
        </mesh>
      </group>

    </group>
  );
}
