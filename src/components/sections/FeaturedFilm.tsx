"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motionConfig, prefersReducedMotion } from "@/animation/motionConfig";
import { gsapWithScroll } from "@/lib/gsap";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const filmImage = {
  src: "/media/featured-film.jpg",
  alt: "Placeholder frame from an upcoming NOIRFRAME film — two silhouettes in a dark hall lit by a single warm beam, to be replaced with the real featured film",
  width: 1584,
  height: 672,
};

/**
 * Featured Film: a large, letterboxed cinematic media area with a slow
 * scroll-linked scale (Ken Burns). No fake play button — this frame
 * represents the film that will live here.
 */
export function FeaturedFilm() {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el || prefersReducedMotion()) return;

    const { gsap, ScrollTrigger } = gsapWithScroll();
    const tween = gsap.fromTo(
      el,
      { scale: 1 },
      {
        scale: 1.07,
        ease: motionConfig.easings.none,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: motionConfig.scroll.scrub,
        },
      },
    );

    return () => {
      ScrollTrigger.refresh();
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section aria-labelledby="film-heading" className="py-28 md:py-40">
      <div className="container-nf">
        <SectionHeading
          kicker="Now in production"
          title="Featured Film"
          description="One film at a time, finished completely. The piece below is currently in production — this frame is a placeholder for the final cut."
        />
      </div>

      <Reveal variant="scale" className="mt-14 md:mt-20">
        <div
          ref={mediaRef}
          className="relative w-full overflow-hidden border-y border-bone/10"
        >
          <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[21/9]">
            <Image
              src={filmImage.src}
              alt={filmImage.alt}
              width={filmImage.width}
              height={filmImage.height}
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-ink/25" aria-hidden="true" />
          </div>

          <p className="chip absolute left-5 top-5 md:left-8 md:top-8">
            In production
          </p>

          <div className="absolute bottom-5 right-5 text-right md:bottom-8 md:right-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-silver">
              Placeholder frame
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-silver">
              Final film to follow
            </p>
          </div>
        </div>
      </Reveal>

      <div className="container-nf mt-7 flex items-baseline justify-between text-[10px] uppercase tracking-[0.3em] text-silver">
        <span>NOIRFRAME Original</span>
        <span>2026</span>
      </div>
    </section>
  );
}
