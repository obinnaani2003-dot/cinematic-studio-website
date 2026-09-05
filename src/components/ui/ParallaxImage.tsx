"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motionConfig, prefersReducedMotion } from "@/animation/motionConfig";
import { gsapWithScroll } from "@/lib/gsap";
import type { ImageAsset } from "@/types";
import { cx } from "@/lib/utils";

interface ParallaxImageProps {
  asset: ImageAsset;
  /** Parallax travel in px. Negative drifts up, positive drifts down. */
  strength?: number;
  /** Wrapper (frame) classes — must include overflow-hidden + sizing. */
  frameClassName?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * next/image inside a scroll-linked parallax frame.
 * The image is rendered slightly oversized so the movement never
 * exposes an edge. Skipped entirely under reduced motion.
 */
export function ParallaxImage({
  asset,
  strength = motionConfig.distances.parallax,
  frameClassName,
  imgClassName,
  priority = false,
  sizes = "100vw",
}: ParallaxImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el || prefersReducedMotion()) return;

    const { gsap } = gsapWithScroll();

    const tween = gsap.fromTo(
      el,
      { y: -strength },
      {
        y: strength,
        ease: motionConfig.easings.none,
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: motionConfig.scroll.scrub,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [strength]);

  return (
    <div className={cx("relative overflow-hidden", frameClassName)}>
      <Image
        ref={imgRef}
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={priority}
        sizes={sizes}
        className={cx(
          "h-full w-full object-cover scale-[1.14]",
          imgClassName,
        )}
      />
    </div>
  );
}
