"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CameraBody } from "./CameraBody";
import { LensAssembly } from "./LensAssembly";
import { TopAssembly } from "./TopAssembly";
import { SmallComponents } from "./SmallComponents";
import { CameraParts } from "./types";
import { gsapWithScroll } from "@/lib/gsap";
import { motionConfig, prefersReducedMotion } from "@/animation/motionConfig";

export function CinemaCamera({ isMobile }: { isMobile?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  
  const parts: CameraParts = {
    bodyMain: useRef<THREE.Group>(null),
    bodySide: useRef<THREE.Group>(null),
    bodyBattery: useRef<THREE.Group>(null),
    lensMount: useRef<THREE.Group>(null),
    lensRings: useRef<THREE.Group>(null),
    lensFront: useRef<THREE.Group>(null),
    lensMatteBox: useRef<THREE.Group>(null),
    topHandle: useRef<THREE.Group>(null),
    topEVF: useRef<THREE.Group>(null),
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

      // Layout coordinates based on device
      const startX = isMobile ? 0 : 2.2;
      const endX = isMobile ? 0 : 1.2;
      const startScale = isMobile ? 0.6 : 0.9;

      gsap.set(groupRef.current.position, { x: startX, y: -0.4, z: -1.0 });
      gsap.set(groupRef.current.rotation, { x: 0.15, y: -0.35, z: 0 });
      gsap.set(groupRef.current.scale, { x: startScale, y: startScale, z: startScale });

      // Entire camera gentle global movement across the timeline
      tl.to(groupRef.current.position, {
        z: 1.5,
        x: endX,
        y: -0.2,
        duration: 10,
        ease: "none",
      }, 0);

      tl.to(groupRef.current.rotation, {
        y: -0.15,
        x: 0.05,
        duration: 10,
        ease: "none",
      }, 0);

      // Phase components mappings
      // tOut: time to start explosion
      // dOut: duration of explosion
      // tIn: time to start reassembly
      // dIn: duration of reassembly
      const components = [
        // Lens separate (2.0 - 4.5)
        { ref: parts.lensMatteBox, outPos: [0, 0, 3.5], outRot: [0, 0, 0], tOut: 2.0, dOut: 1.5, tIn: 9.0, dIn: 1.0 },
        { ref: parts.lensFront, outPos: [0, 0, 2.2], outRot: [0, 0, 0], tOut: 2.4, dOut: 1.5, tIn: 8.9, dIn: 0.9 },
        { ref: parts.lensRings, outPos: [0, 0, 1.2], outRot: [0, 0, 0], tOut: 2.8, dOut: 1.5, tIn: 8.7, dIn: 1.0 },
        { ref: parts.lensMount, outPos: [0, 0, 0.5], outRot: [0, 0, 0], tOut: 3.0, dOut: 1.5, tIn: 8.5, dIn: 1.0 },
        
        // Top and side separate (4.5 - 6.5)
        { ref: parts.topHandle, outPos: [0, 1.5, 0], outRot: [0.1, 0, 0], tOut: 4.5, dOut: 1.5, tIn: 8.2, dIn: 1.0 },
        { ref: parts.topEVF, outPos: [-1.4, 1.0, 0], outRot: [0, 0.2, -0.1], tOut: 4.7, dOut: 1.5, tIn: 8.0, dIn: 1.0 },
        
        { ref: parts.bodySide, outPos: [-1.2, 0, 0], outRot: [0, -0.4, 0], tOut: 4.8, dOut: 1.5, tIn: 8.0, dIn: 1.0 },
        { ref: parts.bodyBattery, outPos: [0, 0, -1.2], outRot: [0, -0.2, 0], tOut: 5.0, dOut: 1.5, tIn: 7.8, dIn: 1.0 },
        { ref: parts.baseRods, outPos: [0, -1.0, 0], outRot: [0, 0, 0], tOut: 5.0, dOut: 1.5, tIn: 7.8, dIn: 1.0 },
      ];

      components.forEach((comp) => {
        if (!comp.ref.current) return;
        
        const origPos = comp.ref.current.position.clone();
        const origRot = comp.ref.current.rotation.clone();

        // Explode
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

        // Reassemble
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
      <SmallComponents parts={parts} />
    </group>
  );
}
