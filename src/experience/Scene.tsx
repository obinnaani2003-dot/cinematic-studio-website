"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { CinemaCamera } from "./camera/CinemaCamera";

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // On very narrow screens (mobile), move the camera closer to the center
  // and scale it down slightly so it fits.
  const isMobile = viewport.width < 4;
  const targetPosition = isMobile ? [0, 1.0, 0] : [1.7, 0.35, 0];
  const targetScale = isMobile ? 0.7 : 1.0;

  // Subtle floating animation for the hero object
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      // Subtle float
      groupRef.current.position.y = targetPosition[1] + Math.sin(t * 0.5) * 0.05;
      groupRef.current.position.x = targetPosition[0];
      groupRef.current.position.z = targetPosition[2];
      // Subtle rotation
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.05;
      groupRef.current.scale.setScalar(targetScale);
    }
  });

  return (
    <>
      {/* Cinematic Studio Lighting */}
      <ambientLight intensity={0.2} color="#ffffff" />
      
      {/* Soft Warm Key Light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2.5}
        color="#ffe8c4"
      />
      
      {/* Subtle Cool Rim Light */}
      <directionalLight
        position={[-5, 5, -5]}
        intensity={3.0}
        color="#c4dfff"
      />
      
      {/* Restrained Kicker */}
      <pointLight
        position={[-2, -2, -2]}
        intensity={1.5}
        color="#ffffff"
      />
      
      {/* Low Fill */}
      <directionalLight
        position={[0, 0, 5]}
        intensity={0.5}
        color="#ffffff"
      />

      <group ref={groupRef}>
        <CinemaCamera />
      </group>
    </>
  );
}
