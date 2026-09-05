import { motionConfig } from "@/animation/motionConfig";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import type { ImageAsset } from "@/types";

const photoA: ImageAsset = {
  src: "/media/photo-editorial-1.jpg",
  alt: "Placeholder editorial portrait — a woman in profile under a single warm light, to be replaced with real studio photography",
  width: 768,
  height: 1376,
};
const photoB: ImageAsset = {
  src: "/media/photo-editorial-2.jpg",
  alt: "Placeholder editorial detail — a hand adjusting a dark tailored collar in hard side light, to be replaced with real studio photography",
  width: 1408,
  height: 768,
};
const photoC: ImageAsset = {
  src: "/media/photo-editorial-3.jpg",
  alt: "Placeholder dance photograph — a dancer in flowing black fabric under a warm spotlight, to be replaced with real studio photography",
  width: 1408,
  height: 768,
};

/**
 * Photographic Expressions: an overlapping, layered editorial
 * composition — deliberately not a 3-column gallery.
 *
 * The three frames overlap each other and drift at different parallax
 * speeds; the copy sits in its own column so text stays readable.
 * On mobile the cluster is recomposed (wider, taller) rather than
 * scaled down.
 */
export function Photography() {
  return (
    <section
      id="photography"
      aria-labelledby="photography-heading"
      className="border-t border-bone/10 py-28 md:py-40"
    >
      <div className="container-nf">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Copy column */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                kicker="Photography"
                title="Photographic Expressions"
                description="Portraiture, editorial and personal stories — composed with film discipline. Light is treated as a character, never a utility."
              />
              <Reveal delay={0.12} className="mt-10">
                <a
                  href="#work"
                  className="nav-link inline-flex items-center gap-3"
                >
                  View selected work
                  <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Layered image cluster */}
          <Reveal variant="fade" className="relative lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[760px] lg:max-w-none">
              {/* Frame A — tall portrait, left */}
              <figure className="relative z-[2] w-[72%] md:w-[58%]">
                <ParallaxImage
                  asset={photoA}
                  strength={-motionConfig.distances.parallax}
                  frameClassName="aspect-[9/16]"
                />
              </figure>

              {/* Frame B — wide, top right, overlaps A */}
              <figure className="absolute right-0 top-[10%] z-[3] w-[64%] md:top-[12%] md:w-[52%]">
                <ParallaxImage
                  asset={photoB}
                  strength={motionConfig.distances.parallax * 0.7}
                  frameClassName="aspect-video"
                />
              </figure>

              {/* Frame C — small wide, bottom, overlaps A */}
              <figure className="absolute bottom-[2%] left-[30%] z-[4] w-[56%] md:bottom-[4%] md:left-[34%] md:w-[46%]">
                <ParallaxImage
                  asset={photoC}
                  strength={-motionConfig.distances.parallax * 1.2}
                  frameClassName="aspect-video"
                />
              </figure>

              <figcaption className="sr-only">
                Three placeholder editorial photographs in an overlapping
                composition: a portrait, a costume detail and a dance frame.
              </figcaption>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
