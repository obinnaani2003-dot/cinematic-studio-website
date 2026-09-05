"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { CinemaCamera } from "./camera/CinemaCamera";

export default function Scene() {
  const floatRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const isMobile = viewport.width < 4;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (floatRef.current) {
      floatRef.current.position.y = Math.sin(t * 0.5) * 0.05;
      floatRef.current.rotation.y = Math.sin(t * 0.2) * 0.03;
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} color="#0f172a" />
      
      {/* Warm Key */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={3.2}
        color="#fff7ed"
      />
      
      {/* Cool Rim (Mandatory for edges) */}
      <directionalLight
        position={[-6, -1, -4]}
        intensity={6.5}
        color="#e0f2fe"
      />
      
      {/* Subtle fill to ensure shadows aren't pitch black */}
      <pointLight
        position={[2, 0, 5]}
        intensity={1.0}
        color="#ffffff"
        distance={15}
      />
      
      <group ref={floatRef}>
        <CinemaCamera isMobile={isMobile} />
      </group>
    </>
  );
}
