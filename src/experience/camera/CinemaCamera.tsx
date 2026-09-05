"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CameraBody } from "./CameraBody";
import { LensAssembly } from "./LensAssembly";
import { TopAssembly } from "./TopAssembly";
import { RearAssembly } from "./RearAssembly";
import { BaseAssembly } from "./BaseAssembly";
import { CameraParts } from "./types";
import { gsapWithScroll } from "@/lib/gsap";
import { prefersReducedMotion } from "@/animation/motionConfig";

export function CinemaCamera({ isMobile }: { isMobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const parts: CameraParts = {
    bodyMain: useRef<THREE.Group>(null),
    bodySide: useRef<THREE.Group>(null),
    lensMount: useRef<THREE.Group>(null),
    lensBarrel: useRef<THREE.Group>(null),
    lensFront: useRef<THREE.Group>(null),
    lensMatteBox: useRef<THREE.Group>(null),
    topHandle: useRef<THREE.Group>(null),
    topEVF: useRef<THREE.Group>(null),
    rearBattery: useRef<THREE.Group>(null),
    baseRods: useRef<THREE.Group>(null),
  };

  useEffect(() => {
    if (prefersReducedMotion() || typeof window === "undefined") return;
    const { gsap } = gsapWithScroll();
    const heroSection = document.getElementById("top");
    if (!heroSection) return;

    const ctx = gsap.context(() => {
      if (!groupRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: 0.8, // specified damping
        },
      });

      // Target layout coordinates
      const startX = isMobile ? 0 : 2.2;
      const endX = isMobile ? 0 : 1.5;
      const startScale = isMobile ? 0.5 : 0.85;

      gsap.set(groupRef.current.position, { x: startX, y: -0.4, z: 0 });
      gsap.set(groupRef.current.rotation, { x: 0.15, y: -0.35, z: 0 });
      gsap.set(groupRef.current.scale, { x: startScale, y: startScale, z: startScale });

      // Phase 2: Initial Movement (Subtle global forward/lateral drift)
      tl.to(groupRef.current.position, {
        z: 0.5,
        x: endX,
        y: -0.3,
        duration: 10,
        ease: "none",
      }, 0);
      tl.to(groupRef.current.rotation, {
        y: -0.25,
        x: 0.10,
        duration: 10,
        ease: "none",
      }, 0);

      // Animation config
      // Explosion sequence:
      // Lens separates (z-axis)
      // Top lifts (y-axis)
      // Side/Battery pull back/out (x/z axes)
      // Base drops (y-axis)
      const components = [
        // Camera Brain subtle drift
        { ref: parts.bodyMain, outPos: [0, 0, 0.2], tOut: 2.0, dOut: 3.0, tIn: 7.0, dIn: 1.5 },
        
        // Lens Assembly (Z-axis forward, staggered)
        { ref: parts.lensMatteBox, outPos: [0, 0, 1.8], tOut: 2.2, dOut: 1.5, tIn: 7.0, dIn: 1.0 },
        { ref: parts.lensFront, outPos: [0, 0, 1.2], tOut: 2.5, dOut: 1.5, tIn: 7.2, dIn: 1.0 },
        { ref: parts.lensBarrel, outPos: [0, 0, 0.7], tOut: 2.8, dOut: 1.5, tIn: 7.4, dIn: 1.0 },
        { ref: parts.lensMount, outPos: [0, 0, 0.3], tOut: 3.0, dOut: 1.5, tIn: 7.6, dIn: 1.0 },
        
        // Top Rig (Y-axis upward)
        { ref: parts.topHandle, outPos: [0, 1.2, 0], tOut: 4.0, dOut: 1.5, tIn: 6.5, dIn: 1.0 },
        { ref: parts.topEVF, outPos: [0, 1.2, 0], outRot: [0, 0, 0.1], tOut: 4.2, dOut: 1.5, tIn: 6.3, dIn: 1.0 },
        
        // Side/Rear
        { ref: parts.rearBattery, outPos: [0, 0, -1.4], tOut: 5.0, dOut: 1.5, tIn: 6.0, dIn: 1.0 },
        { ref: parts.bodySide, outPos: [-0.8, 0, 0], tOut: 5.2, dOut: 1.5, tIn: 5.8, dIn: 1.0 },
        
        // Base (Y-axis downward)
        { ref: parts.baseRods, outPos: [0, -0.8, 0], tOut: 5.5, dOut: 1.5, tIn: 5.5, dIn: 1.0 },
      ];

      components.forEach((comp) => {
        if (!comp.ref.current) return;
        const origPos = comp.ref.current.position.clone();
        
        // Outward explosion
        tl.to(comp.ref.current.position, {
          x: origPos.x + comp.outPos[0],
          y: origPos.y + comp.outPos[1],
          z: origPos.z + comp.outPos[2],
          duration: comp.dOut,
          ease: "power2.inOut",
        }, comp.tOut);

        if (comp.outRot) {
          const origRot = comp.ref.current.rotation.clone();
          tl.to(comp.ref.current.rotation, {
            x: origRot.x + comp.outRot[0],
            y: origRot.y + comp.outRot[1],
            z: origRot.z + comp.outRot[2],
            duration: comp.dOut,
            ease: "power2.inOut",
          }, comp.tOut);
          
          // Reverse rotation
          tl.to(comp.ref.current.rotation, {
            x: origRot.x,
            y: origRot.y,
            z: origRot.z,
            duration: comp.dIn,
            ease: "power2.inOut",
          }, comp.tIn);
        }

        // Reassembly
        tl.to(comp.ref.current.position, {
          x: origPos.x,
          y: origPos.y,
          z: origPos.z,
          duration: comp.dIn,
          ease: "power2.inOut",
        }, comp.tIn);
      });
    }, groupRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <group ref={groupRef}>
      <CameraBody parts={parts} />
      <LensAssembly parts={parts} />
      <TopAssembly parts={parts} />
      <RearAssembly parts={parts} />
      <BaseAssembly parts={parts} />
    </group>
  );
}
