"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { CameraBody } from "./CameraBody";
import { LensAssembly } from "./LensAssembly";
import { TopAssembly } from "./TopAssembly";
import { SmallComponents } from "./SmallComponents";
import { TransformData } from "./types";
import { gsapWithScroll } from "@/lib/gsap";
import { motionConfig, prefersReducedMotion } from "@/animation/motionConfig";

const bodyTransform: TransformData = {
  originalPosition: [0, 0, 0],
  originalRotation: [0, 0, 0],
  originalScale: [1, 1, 1],
  explodedPosition: [0, 0, -0.8],
  explodedRotation: [0, -Math.PI / 12, 0],
  animationDelay: 0.0,
  assemblyOrder: 1,
};

const lensTransform: TransformData = {
  originalPosition: [0, 0, 0.95],
  originalRotation: [0, 0, 0],
  originalScale: [1, 1, 1],
  explodedPosition: [0, 0, 2.5],
  explodedRotation: [0, 0, Math.PI / 6],
  animationDelay: 0.1,
  assemblyOrder: 4,
};

const topTransform: TransformData = {
  originalPosition: [0, 0.75, 0],
  originalRotation: [0, 0, 0],
  originalScale: [1, 1, 1],
  explodedPosition: [0, 2.0, 0],
  explodedRotation: [Math.PI / 12, 0, 0],
  animationDelay: 0.15,
  assemblyOrder: 3,
};

const smallTransform: TransformData = {
  originalPosition: [0, 0, 0],
  originalRotation: [0, 0, 0],
  originalScale: [1, 1, 1],
  explodedPosition: [1.2, 0, 0],
  explodedRotation: [0, Math.PI / 6, 0],
  animationDelay: 0.2,
  assemblyOrder: 2,
};

export function CinemaCamera() {
  const groupRef = useRef<THREE.Group>(null);
  
  const bodyRef = useRef<THREE.Group>(null);
  const lensRef = useRef<THREE.Group>(null);
  const topRef = useRef<THREE.Group>(null);
  const smallRef = useRef<THREE.Group>(null);

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

      // Initial state: Visibly on the right, scaled up, avoiding text
      gsap.set(groupRef.current.position, { z: -1.5, x: 2.0, y: -0.2 });
      gsap.set(groupRef.current.rotation, { x: 0.1, y: -Math.PI / 5, z: -0.05 });
      gsap.set(groupRef.current.scale, { x: 1.15, y: 1.15, z: 1.15 });

      // Entire camera moves forward over the whole scroll distance (duration: 1)
      tl.to(
        groupRef.current.position,
        {
          z: 1.0,
          x: 1.0,
          y: 0,
          duration: 1,
          ease: motionConfig.easings.inOut,
        },
        0
      ).to(
        groupRef.current.rotation,
        {
          x: 0,
          y: -Math.PI / 6,
          z: 0,
          duration: 1,
          ease: motionConfig.easings.inOut,
        },
        0
      );

      const parts = [
        { ref: bodyRef, transform: bodyTransform },
        { ref: lensRef, transform: lensTransform },
        { ref: topRef, transform: topTransform },
        { ref: smallRef, transform: smallTransform },
      ];

      parts.forEach(({ ref, transform }) => {
        if (!ref.current) return;
        
        const explodeStart = transform.animationDelay;
        const explodeDuration = 0.3;
        
        const reassembleStart = 0.6 + (transform.assemblyOrder * 0.05);
        const reassembleDuration = 1.0 - reassembleStart;

        // Explode outward
        tl.to(
          ref.current.position,
          {
            x: transform.explodedPosition[0],
            y: transform.explodedPosition[1],
            z: transform.explodedPosition[2],
            duration: explodeDuration,
            ease: motionConfig.easings.out,
          },
          explodeStart
        );
        
        tl.to(
          ref.current.rotation,
          {
            x: transform.explodedRotation[0],
            y: transform.explodedRotation[1],
            z: transform.explodedRotation[2],
            duration: explodeDuration,
            ease: motionConfig.easings.out,
          },
          explodeStart
        );

        // Reassemble back together
        tl.to(
          ref.current.position,
          {
            x: transform.originalPosition[0],
            y: transform.originalPosition[1],
            z: transform.originalPosition[2],
            duration: reassembleDuration,
            ease: motionConfig.easings.inOut,
          },
          reassembleStart
        );

        tl.to(
          ref.current.rotation,
          {
            x: transform.originalRotation[0],
            y: transform.originalRotation[1],
            z: transform.originalRotation[2],
            duration: reassembleDuration,
            ease: motionConfig.easings.inOut,
          },
          reassembleStart
        );
      });

    }, groupRef);

    return () => ctx.revert();
  }, []);

  return (
    <group 
      ref={groupRef} 
      position={[0.2, 0, 0.5]} 
      rotation={[0, -Math.PI / 6, 0]}
    >
      <CameraBody groupRef={bodyRef} transform={bodyTransform} />
      <LensAssembly groupRef={lensRef} transform={lensTransform} />
      <TopAssembly groupRef={topRef} transform={topTransform} />
      <SmallComponents groupRef={smallRef} transform={smallTransform} />
    </group>
  );
}
