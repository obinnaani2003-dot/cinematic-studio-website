"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { motionConfig, prefersReducedMotion } from "@/animation/motionConfig";
import { gsapWithScroll } from "@/lib/gsap";
import { CtaLink } from "@/components/ui/CtaLink";
import { ExperienceCanvas } from "@/experience/ExperienceCanvas";

const heroImage = {
  src: "/media/hero.jpg",
  alt: "Placeholder cinematic film still — a lone figure on a dark desert plain at night with a faint warm horizon, to be replaced with studio footage",
  width: 1600,
  height: 672,
};

const disciplines = ["Cinematic Films", "Photography", "Visual Stories"];

/**
 * Hero: full-screen cinematic still, WebGL placeholder layer, wordmark,
 * the three discipline lines, dual CTA and a subtle scroll indicator.
 * Entrance is a short GSAP timeline — nothing loops or bounces.
 */
export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const { gsap } = gsapWithScroll();
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            duration: motionConfig.durations.base,
            ease: motionConfig.easings.out,
          },
        })
        .fromTo(
          '[data-hero="kicker"]',
          { autoAlpha: 0 },
          { autoAlpha: 1 },
          0.2,
        )
        .fromTo(
          '[data-hero="title"]',
          { autoAlpha: 0, y: motionConfig.distances.revealLarge },
          { autoAlpha: 1, y: 0, duration: motionConfig.durations.hero },
          0.3,
        )
        .fromTo(
          '[data-hero="line"]',
          { autoAlpha: 0, y: motionConfig.distances.reveal },
          {
            autoAlpha: 1,
            y: 0,
            stagger: motionConfig.stagger.items,
          },
          "-=0.65",
        )
        .fromTo(
          '[data-hero="actions"]',
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0 },
          "-=0.5",
        )
        .fromTo(
          '[data-hero="scroll"]',
          { autoAlpha: 0 },
          { autoAlpha: 1 },
          "-=0.3",
        );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden"
    >
      {/* Cinematic still — clearly a replaceable placeholder */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/60" />
      </div>

      {/* WebGL placeholder layer (Build 0) — hidden for reduced motion */}
      <ExperienceCanvas className="absolute inset-0 z-[1] opacity-70 mix-blend-screen" />

      <div className="container-nf relative z-10 pb-32 pt-44">
        <p data-hero="kicker" className="kicker">
          A Cinematic Studio
        </p>

        <h1
          data-hero="title"
          className="font-display mt-7 text-[clamp(3.5rem,13vw,10.5rem)] font-light uppercase leading-[0.95] tracking-[0.04em] text-bone"
        >
          {site.name}
        </h1>

        <ul
          aria-label="Disciplines"
          className="mt-10 max-w-md space-y-3 border-l border-bone/25 pl-6"
        >
          {disciplines.map((line) => (
            <li
              key={line}
              data-hero="line"
              className="text-xs font-medium uppercase tracking-[0.42em] text-ash md:text-sm"
            >
              {line}
            </li>
          ))}
        </ul>

        <div
          data-hero="actions"
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-5"
        >
          <CtaLink href="#work" variant="solid">
            Explore Our Work
          </CtaLink>
          <CtaLink href={site.cta.href} variant="ghost">
            Start a Project
          </CtaLink>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div
        data-hero="scroll"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-silver">
          Scroll
        </span>
        <span className="scroll-line" aria-hidden="true" />
        <span className="sr-only">Scroll down to explore the studio</span>
      </div>
    </section>
  );
}
