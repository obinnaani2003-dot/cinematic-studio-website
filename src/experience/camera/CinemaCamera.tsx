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
    if (!heroSection) return;

    const ctx = gsap.context(() => {
      if (!groupRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      // Target layout coordinates
      const startX = isMobile ? 0 : 2.2;
      const endX = isMobile ? 0 : 1.2;
      const startScale = isMobile ? 0.6 : 0.95;

      gsap.set(groupRef.current.position, { x: startX, y: -0.4, z: 0 });
      gsap.set(groupRef.current.rotation, { x: 0.15, y: -0.35, z: 0 });
      gsap.set(groupRef.current.scale, { x: startScale, y: startScale, z: startScale });

      // Entire camera gentle global movement
      tl.to(groupRef.current.position, {
        z: 0.5,
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

      const explode = [
        { ref: parts.cameraBrain, z: 0.2, y: 0, x: 0, outT: 2.0, d: 2, inT: 6.0 },
        { ref: parts.baseSystem, z: 0, y: -0.8, x: 0, outT: 2.0, d: 2, inT: 6.0 },
        { ref: parts.rearPower, z: -1.4, y: 0, x: 0, outT: 2.5, d: 2, inT: 5.5 },
        { ref: parts.topRig, z: 0, y: 1.2, x: 0, outT: 3.0, d: 2, inT: 5.0 },
        
        // Lens parts relative to lensSystem
        { ref: parts.lensSystem, z: 0.5, y: 0, x: 0, outT: 3.5, d: 2, inT: 4.5 },
        
        { ref: parts.frontElement, z: 1.8, y: 0, x: 0, outT: 3.8, d: 2, inT: 4.2 },
        { ref: parts.internalGlass, z: 1.4, y: 0, x: 0, outT: 3.9, d: 2, inT: 4.3 },
        { ref: parts.frontBarrel, z: 1.0, y: 0, x: 0, outT: 4.0, d: 2, inT: 4.4 },
        { ref: parts.focusGear, z: 0.7, y: 0, x: 0, outT: 4.1, d: 2, inT: 4.5 },
        { ref: parts.scaleRing, z: 0.5, y: 0, x: 0, outT: 4.2, d: 2, inT: 4.6 },
        { ref: parts.irisGear, z: 0.3, y: 0, x: 0, outT: 4.3, d: 2, inT: 4.7 },
        { ref: parts.rearBarrel, z: 0.1, y: 0, x: 0, outT: 4.4, d: 2, inT: 4.8 },
      ];

      explode.forEach((comp) => {
        if (!comp.ref.current) return;
        const orig = comp.ref.current.position.clone();
        
        tl.to(comp.ref.current.position, {
          x: orig.x + comp.x,
          y: orig.y + comp.y,
          z: orig.z + comp.z,
          duration: comp.d,
          ease: "power3.out",
        }, comp.outT);

        tl.to(comp.ref.current.position, {
          x: orig.x,
          y: orig.y,
          z: orig.z,
          duration: comp.d,
          ease: "power2.inOut",
        }, comp.inT);
      });

    }, groupRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <group ref={groupRef}>
      <CameraBody parts={parts} />
      <LensAssembly parts={parts} />
      <TopRig parts={parts} />
      <RearPower parts={parts} />
      <BaseSystem parts={parts} />
    </group>
  );
}
