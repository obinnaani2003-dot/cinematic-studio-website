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
      floatRef.current.rotation.y = Math.sin(t * 0.2) * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Large Soft Key (Warm) */}
      <directionalLight
        position={[10, 8, 5]}
        intensity={5.0}
        color="#fff0e0"
      />
      
      {/* Controlled Cool Rim */}
      <directionalLight
        position={[-10, 5, -10]}
        intensity={6.0}
        color="#d0e8ff"
      />
      
      {/* Subtle Warm Horizon Fill */}
      <directionalLight
        position={[0, -5, 5]}
        intensity={1.5}
        color="#ffd0a0"
      />
      
      {/* Kicker for metallic details */}
      <pointLight
        position={[-2, 2, -2]}
        intensity={3.0}
        color="#ffffff"
        distance={15}
      />
      
      <group ref={floatRef}>
        <CinemaCamera isMobile={isMobile} />
      </group>
    </>
  );
}
