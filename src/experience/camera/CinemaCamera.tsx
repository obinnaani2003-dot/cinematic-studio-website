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
import { motionConfig, prefersReducedMotion } from "@/animation/motionConfig";

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
          scrub: motionConfig.scroll.cameraScrub,
        },
      });

      // Target layout coordinates from requirements
      const startX = isMobile ? 0 : 2.2;
      const endX = isMobile ? 0 : 1.2;
      const startScale = isMobile ? 0.45 : 0.85; // Mobile needs smaller scale for this detailed model

      gsap.set(groupRef.current.position, { x: startX, y: -0.4, z: 0 });
      gsap.set(groupRef.current.rotation, { x: 0.15, y: -0.35, z: 0 });
      gsap.set(groupRef.current.scale, { x: startScale, y: startScale, z: startScale });

      // Entire camera gentle global movement across the timeline
      tl.to(groupRef.current.position, {
        z: 1.0,
        x: endX,
        y: -0.2,
        duration: 10,
        ease: "none",
      }, 0);

      tl.to(groupRef.current.rotation, {
        y: -0.10,
        x: 0.05,
        duration: 10,
        ease: "none",
      }, 0);

      const components = [
        // Phase 3: Lens (z-axis, outward to camera front)
        { ref: parts.lensMatteBox, outPos: [0, 0, 3.5], outRot: [0, 0, 0], tOut: 2.0, dOut: 1.5, tIn: 9.0, dIn: 1.0 },
        { ref: parts.lensFront, outPos: [0, 0, 2.2], outRot: [0, 0, 0], tOut: 2.4, dOut: 1.5, tIn: 8.9, dIn: 0.9 },
        { ref: parts.lensBarrel, outPos: [0, 0, 1.2], outRot: [0, 0, 0], tOut: 2.8, dOut: 1.5, tIn: 8.7, dIn: 1.0 },
        { ref: parts.lensMount, outPos: [0, 0, 0.5], outRot: [0, 0, 0], tOut: 3.0, dOut: 1.5, tIn: 8.5, dIn: 1.0 },
        
        // Phase 4: Top Rig (y-axis, up)
        { ref: parts.topHandle, outPos: [0, 1.5, 0], outRot: [0.1, 0, 0], tOut: 4.5, dOut: 1.5, tIn: 8.2, dIn: 1.0 },
        { ref: parts.topEVF, outPos: [-1.4, 1.0, 0], outRot: [0, 0.2, -0.1], tOut: 4.7, dOut: 1.5, tIn: 8.0, dIn: 1.0 },
        
        // Phase 5: Side / Rear (x-axis / -z-axis)
        { ref: parts.bodySide, outPos: [-1.2, 0, 0], outRot: [0, -0.4, 0], tOut: 4.8, dOut: 1.5, tIn: 8.0, dIn: 1.0 },
        { ref: parts.rearBattery, outPos: [0, 0, -1.5], outRot: [0, -0.2, 0], tOut: 5.0, dOut: 1.5, tIn: 7.8, dIn: 1.0 },
        
        // Phase 6: Base (-y-axis)
        { ref: parts.baseRods, outPos: [0, -1.2, 0], outRot: [0, 0, 0], tOut: 5.2, dOut: 1.5, tIn: 7.6, dIn: 1.0 },
      ];

      components.forEach((comp) => {
        if (!comp.ref.current) return;
        const origPos = comp.ref.current.position.clone();
        const origRot = comp.ref.current.rotation.clone();

        tl.to(comp.ref.current.position, {
          x: origPos.x + comp.outPos[0],
          y: origPos.y + comp.outPos[1],
          z: origPos.z + comp.outPos[2],
          duration: comp.dOut,
          ease: "power2.inOut",
        }, comp.tOut);

        tl.to(comp.ref.current.rotation, {
          x: origRot.x + comp.outRot[0],
          y: origRot.y + comp.outRot[1],
          z: origRot.z + comp.outRot[2],
          duration: comp.dOut,
          ease: "power2.inOut",
        }, comp.tOut);

        tl.to(comp.ref.current.position, {
          x: origPos.x,
          y: origPos.y,
          z: origPos.z,
          duration: comp.dIn,
          ease: "power2.inOut",
        }, comp.tIn);

        tl.to(comp.ref.current.rotation, {
          x: origRot.x,
          y: origRot.y,
          z: origRot.z,
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
