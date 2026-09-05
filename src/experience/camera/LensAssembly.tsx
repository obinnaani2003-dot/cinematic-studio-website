"use client";

import { materials } from "./materials";
import { CameraPartProps } from "./types";
import { GearRing, Screw } from "./utils";


export function LensAssembly({ parts }: CameraPartProps) {
  const { lensSystem, plMount, rearBarrel, irisGear, scaleRing, focusGear, frontBarrel, internalGlass, frontElement } = parts;
  return (
    <group ref={lensSystem } position={[0, 0, 0.5]}>
      
      {/* 1. PL Mount */}
      <group ref={plMount } position={[0, 0, 0]}>
        {/* Inner dark flange */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.3, 0.3, 0.06, 48]} />
        </mesh>
        {/* Stainless Locking Ring */}
        <mesh position={[0, 0, 0.03]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.35, 0.35, 0.04, 48]} />
        </mesh>
        {/* 4 Tabs */}
        {Array.from({ length: 4 }).map((_, i) => (
          <mesh key={`tab-${i}`} position={[Math.cos(i * Math.PI/2) * 0.37, Math.sin(i * Math.PI/2) * 0.37, 0.03]} rotation={[0, 0, -i * Math.PI/2]} material={materials.stainless}>
            <boxGeometry args={[0.08, 0.12, 0.04]} />
          </mesh>
        ))}
        {/* 4 Screws */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Screw key={`screw-${i}`} position={[Math.cos((i * Math.PI/2) + Math.PI/4) * 0.3, Math.sin((i * Math.PI/2) + Math.PI/4) * 0.3, 0.05]} rotation={[Math.PI/2, 0, 0]} material={materials.anodized} scale={0.6} />
        ))}
        {/* Gold Contacts */}
        <mesh position={[0, -0.22, 0.02]} rotation={[Math.PI/2, 0, 0]} material={materials.goldContact}>
          <boxGeometry args={[0.1, 0.02, 0.02]} />
        </mesh>
      </group>

      {/* 2. Rear Barrel */}
      <group ref={rearBarrel } position={[0, 0, 0.12]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.34, 0.34, 0.16, 48]} />
        </mesh>
      </group>

      {/* 3. Iris Gear */}
      <group ref={irisGear } position={[0, 0, 0.25]}>
        <GearRing radius={0.36} width={0.08} teethCount={120} material={materials.gearMetal} />
      </group>

      {/* 4. Scale Ring */}
      <group ref={scaleRing } position={[0, 0, 0.4]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 48]} />
        </mesh>
        {/* Markings */}
        <mesh position={[0.25, 0.25, 0]} rotation={[Math.PI/4, 0, 0]} material={materials.yellowMarking}>
          <boxGeometry args={[0.01, 0.04, 0.01]} />
        </mesh>
        <mesh position={[0.2, 0.28, 0.05]} rotation={[Math.PI/4, 0, 0]} material={materials.whiteMarking}>
          <boxGeometry args={[0.01, 0.03, 0.01]} />
        </mesh>
        {/* Blue Accent Badge */}
        <mesh position={[-0.25, 0.25, 0]} rotation={[Math.PI/4, 0, 0]} material={materials.blueAccent}>
          <boxGeometry args={[0.05, 0.02, 0.02]} />
        </mesh>
      </group>

      {/* 5. Focus Gear */}
      <group ref={focusGear } position={[0, 0, 0.6]}>
        <GearRing radius={0.38} width={0.16} teethCount={140} material={materials.gearMetal} />
      </group>

      {/* 6. Front Barrel */}
      <group ref={frontBarrel } position={[0, 0, 0.82]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.anodized}>
          <cylinderGeometry args={[0.42, 0.36, 0.25, 48]} />
        </mesh>
        {/* Front Ring Detail */}
        <mesh position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, 0]} material={materials.stainless}>
          <cylinderGeometry args={[0.42, 0.42, 0.02, 48]} />
        </mesh>
      </group>

      {/* 7. Internal Glass */}
      <group ref={internalGlass } position={[0, 0, 0.7]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <sphereGeometry args={[0.3, 32, 32, 0, Math.PI * 2, 0, Math.PI / 3]} />
        </mesh>
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} material={materials.glassCoating}>
          <cylinderGeometry args={[0.28, 0.28, 0.02, 32]} />
        </mesh>
      </group>

      {/* 8. Front Element */}
      <group ref={frontElement } position={[0, 0, 0.92]}>
        {/* Convex Glass */}
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.glass}>
          <sphereGeometry args={[0.4, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2.8]} />
        </mesh>
      </group>
      
    </group>
  );
}
