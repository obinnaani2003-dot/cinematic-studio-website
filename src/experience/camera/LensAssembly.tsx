"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { GearRing } from "./utils";


export function LensAssembly({ parts }: CameraPartProps) {
  const { lensSystem, plMount, rearBarrel, irisGear, scaleRing, focusGear, frontBarrel, internalGlass, frontElement } = parts;
  return (
    <group ref={lensSystem} position={[0, 0.05, 0.55]}>
      
      {/* 1. PL Mount */}
      <group ref={plMount} position={[0, 0, 0]}>
        {/* Base Block */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.35, 0.35, 0.08, 64]} />
        </mesh>
        
        {/* Stainless PL Ring */}
        <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.36, 0.36, 0.04, 64]} />
        </mesh>
        
        {/* 4 PL Tabs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`tab-${i}`} position={[Math.cos(i * Math.PI/2) * 0.38, Math.sin(i * Math.PI/2) * 0.38, 0.04]} rotation={[0, 0, -i * Math.PI/2]} material={materials.stainless}>
            <boxGeometry args={[0.08, 0.12, 0.04]} />
          </mesh>
        ))}

        {/* 2 Blue Locking Lever Ears (ARRI Signature) */}
        <mesh position={[0.38, 0.1, 0.04]} rotation={[0, 0, -Math.PI/6]} material={materials.arriBlue}>
          <boxGeometry args={[0.08, 0.2, 0.05]} />
        </mesh>
        <mesh position={[-0.38, -0.1, 0.04]} rotation={[0, 0, -Math.PI/6]} material={materials.arriBlue}>
          <boxGeometry args={[0.08, 0.2, 0.05]} />
        </mesh>
      </group>

      {/* 2. Rear Barrel */}
      <group ref={rearBarrel} position={[0, 0, 0.16]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.lensBody}>
          <cylinderGeometry args={[0.36, 0.32, 0.2, 64]} />
        </mesh>
      </group>

      {/* 3. Iris Gear */}
      <group ref={irisGear} position={[0, 0, 0.3]}>
        <GearRing radius={0.38} width={0.08} teethCount={140} material={materials.gearMetal} />
      </group>

      {/* 4. Scale Ring */}
      <group ref={scaleRing} position={[0, 0, 0.5]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.lensBody}>
          <cylinderGeometry args={[0.40, 0.36, 0.32, 64]} />
        </mesh>
        {/* ARRI Signature Prime Yellow text simulation */}
        <mesh position={[0.39, 0.08, 0]} rotation={[Math.PI/4, 0, -Math.PI/2]} material={materials.yellowMarking}>
          <boxGeometry args={[0.08, 0.005, 0.01]} />
        </mesh>
        <mesh position={[0.39, 0.12, 0]} rotation={[Math.PI/4, 0, -Math.PI/2]} material={materials.whiteMarking}>
          <boxGeometry args={[0.04, 0.005, 0.01]} />
        </mesh>
        {/* Tick marks */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i * Math.PI) / 10 - Math.PI;
          return (
            <mesh key={`tick-y-${i}`} position={[Math.cos(angle) * 0.39, Math.sin(angle) * 0.39, -0.06]} rotation={[0, 0, angle]} material={materials.yellowMarking}>
              <boxGeometry args={[0.004, 0.001, 0.04]} />
            </mesh>
          );
        })}
      </group>

      {/* 5. Focus Gear (Wider) */}
      <group ref={focusGear} position={[0, 0, 0.75]}>
        <GearRing radius={0.42} width={0.18} teethCount={180} material={materials.gearMetal} />
      </group>

      {/* 6. Front Barrel */}
      <group ref={frontBarrel} position={[0, 0, 1.1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.lensBody}>
          <cylinderGeometry args={[0.55, 0.40, 0.5, 64]} />
        </mesh>
        {/* Front Ring Detail */}
        <mesh position={[0, 0, 0.23]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.55, 0.55, 0.04, 64]} />
        </mesh>
        {/* Inner Dark Optical Housing */}
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.screen}>
          <cylinderGeometry args={[0.52, 0.48, 0.3, 64]} />
        </mesh>
      </group>

      {/* 7. Internal Optics */}
      <group ref={internalGlass} position={[0, 0, 1.1]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <sphereGeometry args={[0.42, 48, 48, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <cylinderGeometry args={[0.4, 0.4, 0.02, 32]} />
        </mesh>
      </group>

      {/* 8. Front Glass Element */}
      <group ref={frontElement} position={[0, 0, 1.35]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glass}>
          <sphereGeometry args={[0.53, 64, 64, 0, Math.PI * 2, 0, Math.PI / 3.2]} />
        </mesh>
      </group>

    </group>
  );
}
