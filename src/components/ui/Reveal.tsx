"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type Ref,
} from "react";
import { motionConfig, prefersReducedMotion } from "@/animation/motionConfig";
import { gsapWithScroll } from "@/lib/gsap";

type RevealVariant = "rise" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** "rise" moves up into place, "fade" only fades, "scale" settles in. */
  variant?: RevealVariant;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Render as a different element (e.g. "li") when semantics require it. */
  as?: ElementType;
  style?: CSSProperties;
}

/**
 * Entrance reveal driven by GSAP ScrollTrigger.
 *
 * Content is visible by default; the hidden "from" state is applied only
 * after hydration on the client, so no-JS, SSR and reduced-motion users
 * always see the content.
 */
export function Reveal({
  children,
  className,
  variant = "rise",
  delay = 0,
  as,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const { gsap } = gsapWithScroll();

    const from: Record<string, number> = { autoAlpha: 0 };
    if (variant === "rise") from.y = motionConfig.distances.reveal;
    if (variant === "scale") from.scale = 0.985;

    el.style.willChange = "opacity, transform";

    const tween = gsap.fromTo(
      el,
      from,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: motionConfig.durations.slow,
        ease: motionConfig.easings.out,
        delay,
        scrollTrigger: {
          trigger: el,
          start: motionConfig.scroll.revealStart,
          once: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, delay]);

  // All supported tags accept ref/className/style/children.
  const Tag = (as ?? "div") as "div";
  const tagRef = ref as Ref<HTMLDivElement>;

  return (
    <Tag ref={tagRef} className={className} style={style}>
      {children}
    </Tag>
  );
}
