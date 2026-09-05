import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

interface GearRingProps {
  radius: number;
  width: number;
  teethCount?: number;
  position?: [number, number, number];
  material: THREE.Material;
}

export function GearRing({ radius, width, teethCount = 140, position = [0, 0, 0], material }: GearRingProps) {
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
        <cylinderGeometry args={[radius - 0.005, radius - 0.005, width, 64]} />
      </mesh>
      <instancedMesh ref={meshRef} args={[undefined, undefined, teethCount]} material={material}>
        <boxGeometry args={[0.012, width, 0.015]} />
      </instancedMesh>
    </group>
  );
}

export function Screw({ position = [0,0,0], rotation = [0,0,0], material, scale = 1 }: { position?: [number, number, number], rotation?: [number, number, number], material: THREE.Material, scale?: number }) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh material={material}>
        <cylinderGeometry args={[0.012, 0.012, 0.008, 12]} />
      </mesh>
      <mesh position={[0, 0.004, 0]} material={material}>
        <cylinderGeometry args={[0.006, 0.006, 0.005, 6]} />
      </mesh>
    </group>
  );
}

export function BeveledBox({ args = [1, 1, 1], bevel = 0.02, material, ...props }: { args?: [number, number, number], bevel?: number, material?: THREE.Material, [key: string]: unknown }) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    const w = args[0] / 2;
    const h = args[1] / 2;
    const r = bevel;
    s.moveTo(-w + r, -h);
    s.lineTo(w - r, -h);
    s.quadraticCurveTo(w, -h, w, -h + r);
    s.lineTo(w, h - r);
    s.quadraticCurveTo(w, h, w - r, h);
    s.lineTo(-w + r, h);
    s.quadraticCurveTo(-w, h, -w, h - r);
    s.lineTo(-w, -h + r);
    s.quadraticCurveTo(-w, -h, -w + r, -h);
    return s;
  }, [args, bevel]);

  const extrudeSettings = useMemo(() => ({
    depth: args[2] - bevel * 2,
    bevelEnabled: true,
    bevelSegments: 3,
    steps: 1,
    bevelSize: bevel,
    bevelThickness: bevel,
  }), [args, bevel]);

  const geomRef = useRef<THREE.ExtrudeGeometry>(null);
  useEffect(() => {
    if (geomRef.current) {
      geomRef.current.center();
    }
  }, []);

  return (
    <mesh material={material} {...props}>
      <extrudeGeometry ref={geomRef} args={[shape, extrudeSettings]} />
    </mesh>
  );
}
