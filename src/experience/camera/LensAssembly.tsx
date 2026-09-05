"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { GearRing, Screw } from "./utils";


export function LensAssembly({ parts }: CameraPartProps) {
  const { lensSystem, plMount, rearBarrel, irisGear, scaleRing, focusGear, frontBarrel, internalGlass, frontElement } = parts;
  return (
    <group ref={lensSystem } position={[0, 0.0, 0.65]}>
      
      {/* 1. PL Mount (Deep stainless locking interface) */}
      <group ref={plMount } position={[0, 0, 0]}>
        {/* Inner black flange */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.3, 0.3, 0.08, 64]} />
        </mesh>
        
        {/* Heavy Stainless Locking Collar */}
        <mesh position={[0, 0, 0.04]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.38, 0.38, 0.06, 64]} />
        </mesh>
        
        {/* 4 Prominent Locking Tabs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`tab-${i}`} position={[Math.cos(i * Math.PI/2) * 0.40, Math.sin(i * Math.PI/2) * 0.40, 0.04]} rotation={[0, 0, -i * Math.PI/2]} material={materials.stainless}>
            <boxGeometry args={[0.1, 0.18, 0.06]} />
          </mesh>
        ))}

        {/* 4 Deep Structural Screws */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Screw key={`screw-${i}`} position={[Math.cos((i * Math.PI/2) + Math.PI/4) * 0.33, Math.sin((i * Math.PI/2) + Math.PI/4) * 0.33, 0.06]} rotation={[Math.PI/2, 0, 0]} material={materials.anodized} scale={0.7} />
        ))}
        
        {/* Gold Contacts */}
        <mesh position={[0, -0.22, 0.02]} rotation={[Math.PI/2, 0, 0]} material={materials.goldContact}>
          <boxGeometry args={[0.15, 0.02, 0.02]} />
        </mesh>
      </group>

      {/* 2. Rear Barrel */}
      <group ref={rearBarrel } position={[0, 0, 0.2]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.36, 0.34, 0.24, 64]} />
        </mesh>
      </group>

      {/* 3. Iris Gear */}
      <group ref={irisGear } position={[0, 0, 0.37]}>
        <GearRing radius={0.38} width={0.1} teethCount={140} material={materials.gearMetal} />
      </group>

      {/* 4. Scale Ring (Distance/Aperture Markings) */}
      <group ref={scaleRing } position={[0, 0, 0.58]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.39, 0.37, 0.32, 64]} />
        </mesh>
        
        {/* Distance/Iris Tick Marks (Simulated) */}
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = (i * Math.PI) / 14 - Math.PI/2;
          return (
            <mesh key={`tick-y-${i}`} position={[Math.cos(angle) * 0.385, Math.sin(angle) * 0.385, -0.05]} rotation={[0, 0, angle]} material={materials.yellowMarking}>
              <boxGeometry args={[0.005, 0.002, 0.04]} />
            </mesh>
          );
        })}
        {Array.from({ length: 15 }).map((_, i) => {
          const angle = (i * Math.PI) / 14 - Math.PI/2;
          return (
            <mesh key={`tick-w-${i}`} position={[Math.cos(angle) * 0.388, Math.sin(angle) * 0.388, 0.05]} rotation={[0, 0, angle]} material={materials.whiteMarking}>
              <boxGeometry args={[0.005, 0.002, 0.04]} />
            </mesh>
          );
        })}
        
        {/* Blue Optic Badge */}
        <mesh position={[-0.38, 0.1, 0]} rotation={[0, 0, Math.PI/2]} material={materials.blueAccent}>
          <boxGeometry args={[0.08, 0.02, 0.03]} />
        </mesh>
      </group>

      {/* 5. Focus Gear (Wider) */}
      <group ref={focusGear } position={[0, 0, 0.85]}>
        <GearRing radius={0.41} width={0.2} teethCount={160} material={materials.gearMetal} />
      </group>

      {/* 6. Front Barrel */}
      <group ref={frontBarrel } position={[0, 0, 1.25]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.55, 0.40, 0.6, 64]} />
        </mesh>
        {/* Outer Matte Hood Interface Ring */}
        <mesh position={[0, 0, 0.28]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.555, 0.555, 0.04, 64]} />
        </mesh>
        
        {/* Inner Dark Optical Housing */}
        <mesh position={[0, 0, 0.15]} rotation={[Math.PI / 2, 0, 0]} material={materials.body}>
          <cylinderGeometry args={[0.5, 0.5, 0.3, 64]} />
        </mesh>
      </group>

      {/* 7. Internal Optics */}
      <group ref={internalGlass } position={[0, 0, 1.3]}>
        {/* Deep concave element */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        {/* Middle planar element */}
        <mesh position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <cylinderGeometry args={[0.38, 0.38, 0.05, 32]} />
        </mesh>
      </group>

      {/* 8. Front Glass Element */}
      <group ref={frontElement } position={[0, 0, 1.48]}>
        {/* Massive Convex Front Glass */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glass}>
          <sphereGeometry args={[0.48, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2.7]} />
        </mesh>
      </group>

    </group>
  );
}
