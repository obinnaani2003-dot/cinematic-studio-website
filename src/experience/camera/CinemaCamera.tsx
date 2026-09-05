"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CameraBody } from "./CameraBody";
import { LensAssembly } from "./LensAssembly";
import { TopRig } from "./TopRig";
import { RearPower } from "./RearPower";
import { BaseSystem } from "./BaseSystem";
import { CameraParts } from "./types";
import { gsapWithScroll } from "@/lib/gsap";
import { prefersReducedMotion } from "@/animation/motionConfig";

export function CinemaCamera({ isMobile }: { isMobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const masterRig = useRef<THREE.Group>(null);
  
  const parts: CameraParts = {
    cameraBrain: useRef<THREE.Group>(null),
    baseSystem: useRef<THREE.Group>(null),
    topRig: useRef<THREE.Group>(null),
    rearPower: useRef<THREE.Group>(null),
    lensSystem: useRef<THREE.Group>(null),
    plMount: useRef<THREE.Group>(null),
    rearBarrel: useRef<THREE.Group>(null),
    irisGear: useRef<THREE.Group>(null),
    scaleRing: useRef<THREE.Group>(null),
    focusGear: useRef<THREE.Group>(null),
    frontBarrel: useRef<THREE.Group>(null),
    internalGlass: useRef<THREE.Group>(null),
    frontElement: useRef<THREE.Group>(null),
    matteBox: useRef<THREE.Group>(null),
  };

  useEffect(() => {
    if (prefersReducedMotion() || typeof window === "undefined") return;
    const { gsap } = gsapWithScroll();
    
    if (!masterRig.current) return;

    const ctx = gsap.context(() => {
      // ----------------------------------------------------
      // TARGET COORDINATES
      // ----------------------------------------------------
      // Initial large "Pop Out" composition
      const startX = 0;
      const startY = -0.2;
      const startZ = 0.5; // Start a bit back
      const startScale = isMobile ? 0.6 : 1.1;

      // Final receded composition
      const finalX = isMobile ? 0 : 2.2;
      const finalY = -0.4;
      const finalZ = -0.5;
      const finalScale = isMobile ? 0.45 : 0.85;

      // Set initial positions instantly
      gsap.set(masterRig.current, { x: startX, y: startY, z: startZ });
      gsap.set((masterRig.current as any).rotation, { x: 0.15, y: -0.15, z: 0 });
      gsap.set((masterRig.current as any).scale, { x: startScale, y: startScale, z: startScale });

      // Create an automatic timeline attached to no scroll trigger
      const tl = gsap.timeline({ delay: 0.1 });

      // ----------------------------------------------------
      // 1. POP OUT (0.0s - 2.5s)
      // ----------------------------------------------------
      tl.to((masterRig.current as any).position, {
        z: 2.5, // Move right in front of the viewer
        duration: 2.5,
        ease: "power2.out",
      }, 0);
      tl.to((masterRig.current as any).rotation, {
        x: 0.1,
        y: -0.2,
        duration: 2.5,
        ease: "power2.out",
      }, 0);

      // ----------------------------------------------------
      // 2. HOLD (2.5s - 3.5s)
      // ----------------------------------------------------
      tl.to({}, { duration: 1.0 }, 2.5);

      // ----------------------------------------------------
      // 3. DISASSEMBLE (3.5s - 6.5s)
      // ----------------------------------------------------
      const explodeStart = 3.5;
      const explodeDuration = 3.0;
      
      const explode = [
        { ref: parts.lensSystem, z: 0.5, y: 0, x: 0 },
        { ref: parts.frontElement, z: 1.8, y: 0, x: 0 },
        { ref: parts.internalGlass, z: 1.4, y: 0, x: 0 },
        { ref: parts.frontBarrel, z: 1.0, y: 0, x: 0 },
        { ref: parts.focusGear, z: 0.7, y: 0, x: 0 },
        { ref: parts.scaleRing, z: 0.5, y: 0, x: 0 },
        { ref: parts.irisGear, z: 0.3, y: 0, x: 0 },
        { ref: parts.rearBarrel, z: 0.1, y: 0, x: 0 },
        
        { ref: parts.baseSystem, z: 0, y: -0.8, x: 0 },
        { ref: parts.rearPower, z: -1.4, y: 0, x: 0 },
        { ref: parts.topRig, z: 0, y: 1.2, x: 0 },
        { ref: parts.cameraBrain, z: 0.2, y: 0, x: 0 },
      ];

      explode.forEach((comp) => {
        if (!comp.ref.current) return;
        const orig = comp.ref.current.position.clone();
        
        tl.to(comp.ref.current.position, {
          x: orig.x + comp.x,
          y: orig.y + comp.y,
          z: orig.z + comp.z,
          duration: explodeDuration,
          ease: "power3.out",
        }, explodeStart);
      });

      // ----------------------------------------------------
      // 4. HOLD EXPLODED (6.5s - 7.5s)
      // ----------------------------------------------------
      tl.to({}, { duration: 1.0 }, 6.5);

      // ----------------------------------------------------
      // 5. REASSEMBLE (7.5s - 10.5s)
      // ----------------------------------------------------
      const reassembleStart = 7.5;
      const reassembleDuration = 3.0;

      [...explode].reverse().forEach((comp) => {
        if (!comp.ref.current) return;
        tl.to(comp.ref.current.position, {
          x: 0, 
          y: 0,
          z: 0,
          duration: reassembleDuration,
          ease: "power2.inOut",
        }, reassembleStart);
      });

      // ----------------------------------------------------
      // 6. HOLD ASSEMBLED (10.5s - 11.5s)
      // ----------------------------------------------------
      tl.to({}, { duration: 1.0 }, 10.5);

      // ----------------------------------------------------
      // 7. RECEDE & POP IN TO BACKGROUND (11.5s - 14.0s)
      // ----------------------------------------------------
      const recedeStart = 11.5;
      const recedeDuration = 2.5;
      
      tl.to((masterRig.current as any).position, {
        x: finalX,
        y: finalY,
        z: finalZ,
        duration: recedeDuration,
        ease: "power2.inOut",
      }, recedeStart);
      tl.to((masterRig.current as any).rotation, {
        x: 0.15,
        y: -0.35,
        z: 0,
        duration: recedeDuration,
        ease: "power2.inOut",
      }, recedeStart);
      tl.to((masterRig.current as any).scale, {
        x: finalScale,
        y: finalScale,
        z: finalScale,
        duration: recedeDuration,
        ease: "power2.inOut",
      }, recedeStart);

    }, groupRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <group ref={groupRef}>
      <group ref={masterRig}>
        <CameraBody parts={parts} />
        <LensAssembly parts={parts} />
        <TopRig parts={parts} />
        <RearPower parts={parts} />
        <BaseSystem parts={parts} />
      </group>
    </group>
  );
}
