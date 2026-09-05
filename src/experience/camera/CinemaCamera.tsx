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
  const masterRigRef = useRef<THREE.Group>(null);
  
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
  };

  useEffect(() => {
    if (prefersReducedMotion() || typeof window === "undefined") return;
    const { gsap } = gsapWithScroll();
    const heroSection = document.getElementById("top");
    const masterRig = masterRigRef.current;
    if (!heroSection || !masterRig) return;

    const ctx = gsap.context(() => {
      // Composition End State (25-30% on right)
      const finalX = isMobile ? 0 : 2.2;
      const finalY = -0.4;
      const finalZ = 0;
      const finalScale = isMobile ? 0.5 : 0.85;

      // Composition Start State (60-70% huge in center)
      const startX = 0;
      const startY = -0.2;
      const startZ = 2.0;
      const startScale = isMobile ? 0.6 : 1.1;

      gsap.set(masterRig.position, { x: startX, y: startY, z: startZ });
      gsap.set(masterRig.rotation, { x: 0.10, y: -0.15, z: 0 });
      gsap.set(masterRig.scale, { x: startScale, y: startScale, z: startScale });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "+=2000",
          scrub: 0.8,
        },
      });

      // 0-2: POP OUT / ROTATE SLIGHTLY
      tl.to(masterRig.position, {
        x: startX,
        y: startY,
        z: startZ + 0.5,
        duration: 2,
        ease: "power1.inOut",
      }, 0);
      tl.to(masterRig.rotation, {
        x: 0.05,
        y: -0.25,
        z: 0,
        duration: 2,
        ease: "power1.inOut",
      }, 0);

      // 2-3: HOLD
      tl.to({}, { duration: 1 }, 2);

      // 3-6: DISASSEMBLE
      const explodeStart = 3;
      const explodeDuration = 3;
      
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

      // 6-7: HOLD EXPLODED
      tl.to({}, { duration: 1 }, 6);

      // 7-10: REASSEMBLE
      const reassembleStart = 7;
      const reassembleDuration = 3;

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

      // 10-11: HOLD ASSEMBLED
      tl.to({}, { duration: 1 }, 10);

      // 11-13: RECEDE INTO BACKGROUND
      const recedeStart = 11;
      tl.to(masterRig.position, {
        x: finalX,
        y: finalY,
        z: finalZ,
        duration: 2,
        ease: "power2.inOut",
      }, recedeStart);
      tl.to(masterRig.rotation, {
        x: 0.15,
        y: -0.35,
        z: 0,
        duration: 2,
        ease: "power2.inOut",
      }, recedeStart);
      tl.to(masterRig.scale, {
        x: finalScale,
        y: finalScale,
        z: finalScale,
        duration: 2,
        ease: "power2.inOut",
      }, recedeStart);

    }, groupRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <group ref={groupRef}>
      <group ref={masterRigRef}>
        <CameraBody parts={parts} />
        <LensAssembly parts={parts} />
        <TopRig parts={parts} />
        <RearPower parts={parts} />
        <BaseSystem parts={parts} />
      </group>
    </group>
  );
}
