"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { CinemaCamera } from "./camera/CinemaCamera";

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const isMobile = viewport.width < 4;
  const targetPosition = isMobile ? [0, 0.5, 0] : [0, 0, 0];
  const targetScale = isMobile ? 0.6 : 1.0;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.position.y = targetPosition[1] + Math.sin(t * 0.5) * 0.05;
      groupRef.current.position.x = targetPosition[0];
      groupRef.current.position.z = targetPosition[2];
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.05;
      groupRef.current.scale.setScalar(targetScale);
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} color="#ffffff" />
      
      {/* Strong Cinematic Key Light (Warm) */}
      <directionalLight
        position={[8, 5, 8]}
        intensity={6.0}
        color="#ffebd6"
      />
      
      {/* Sharp Cool Rim Light for Edge Separation */}
      <directionalLight
        position={[-8, 6, -8]}
        intensity={8.0}
        color="#d6e8ff"
      />
      
      {/* Strong Kicker to separate from dark background */}
      <pointLight
        position={[-3, -3, -4]}
        intensity={4.0}
        color="#ffffff"
        distance={20}
      />
      
      {/* Front Fill */}
      <directionalLight
        position={[0, 0, 8]}
        intensity={2.5}
        color="#ffffff"
      />
      
      {/* Top light to highlight top handle and upper edges */}
      <directionalLight
        position={[0, 10, 0]}
        intensity={4.0}
        color="#ffffff"
      />

      <group ref={groupRef}>
        <CinemaCamera />
      </group>
    </>
  );
}
