import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface GearRingProps {
  radius: number;
  width: number;
  teethCount?: number;
  position?: [number, number, number];
  material: THREE.Material;
}

export function GearRing({ radius, width, teethCount = 60, position = [0, 0, 0], material }: GearRingProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  
  useEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < teethCount; i++) {
      const angle = (i / teethCount) * Math.PI * 2;
      dummy.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
      dummy.rotation.set(0, -angle, 0);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [radius, teethCount]);

  return (
    <group position={position} rotation={[Math.PI / 2, 0, 0]}>
      <mesh material={material}>
        <cylinderGeometry args={[radius - 0.005, radius - 0.005, width, 32]} />
      </mesh>
      <instancedMesh ref={meshRef} args={[undefined, undefined, teethCount]} material={material}>
        <boxGeometry args={[0.015, width, 0.02]} />
      </instancedMesh>
    </group>
  );
}
