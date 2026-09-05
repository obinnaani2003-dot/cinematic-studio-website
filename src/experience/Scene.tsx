"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Build 0 placeholder scene: one slowly rotating wireframe icosahedron
 * (a nod to the lens/optics theme) with a faint ring of warm points.
 *
 * That is all. The cinematic camera, disassembly, particles and shaders
 * intentionally do not exist yet — they are Build 1.
 */
export default function Scene() {
  const coreRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Points>(null);

  const ringGeometry = useMemo(() => {
    const count = 160;
    const radius = 3.1;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2;
      // Slight vertical wobble so the ring feels hand-made, not perfect.
      const y = Math.sin(angle * 3) * 0.12;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Dispose the manually-created geometry when the scene unmounts.
  useEffect(() => {
    return () => {
      ringGeometry.dispose();
    };
  }, [ringGeometry]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.12;
      coreRef.current.rotation.x = Math.sin(t * 0.18) * 0.14;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y -= delta * 0.05;
      ringRef.current.rotation.z = Math.sin(t * 0.1) * 0.05;
    }
  });

  return (
    <group position={[1.7, 0.35, 0]}>
      <group ref={coreRef}>
        <mesh>
          <icosahedronGeometry args={[1.55, 0]} />
          <meshBasicMaterial
            color="#9a9aa2"
            wireframe
            transparent
            opacity={0.26}
          />
        </mesh>
      </group>

      <points ref={ringRef} geometry={ringGeometry}>
        <pointsMaterial
          color="#c2996a"
          size={0.02}
          sizeAttenuation
          transparent
          opacity={0.55}
        />
      </points>
    </group>
  );
}
