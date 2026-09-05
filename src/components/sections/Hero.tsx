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
  alt: "Placeholder cinematic film still",
  width: 1600,
  height: 672,
};

const disciplines = ["Cinematic Films", "Photography", "Visual Stories"];

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;

    const { gsap } = gsapWithScroll();
    const ctx = gsap.context(() => {
      
      // Initially hide the text
      gsap.set(contentRef.current, { autoAlpha: 0 });
      gsap.set('[data-hero="scroll"]', { autoAlpha: 0 });

      // Create an automatic timeline attached to no scroll trigger
      const tl = gsap.timeline({ delay: 0.1 });

      // The camera sequence will run from 0 to 14 seconds internally in CinemaCamera.
      // We reveal the text right as the camera begins receding back (11.5s - 14.0s).
      tl.to(contentRef.current, { autoAlpha: 1, duration: 2.0 }, 12.0)
        .fromTo(
          '[data-hero="title"]',
          { y: motionConfig.distances.revealLarge },
          { y: 0, duration: 2.0, ease: "power2.out" },
          12.0
        )
        .fromTo(
          '[data-hero="line"]',
          { y: motionConfig.distances.reveal },
          { y: 0, stagger: 0.15, duration: 1.5, ease: "power2.out" },
          12.5
        )
        .fromTo(
          '[data-hero="actions"]',
          { y: 14 },
          { y: 0, duration: 1.5, ease: "power2.out" },
          13.0
        )
        .to('[data-hero="scroll"]', { autoAlpha: 1, duration: 1.5 }, 13.5);

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
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          width={heroImage.width}
          height={heroImage.height}
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-[20%_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/60" />
      </div>

      <ExperienceCanvas className="absolute inset-0 z-[1]" />

      <div ref={contentRef} className="container-nf relative z-10 pb-32 pt-44 invisible">
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
        </div>
      </div>

      <div
        data-hero="scroll"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 invisible"
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
