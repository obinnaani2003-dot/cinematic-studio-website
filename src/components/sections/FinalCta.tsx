import { site } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";

/**
 * Final CTA: the cinematic closer and the page's contact point.
 * The CTA is a mailto in this prototype; a real contact form or booking
 * flow arrives in a later approved stage.
 */
export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden border-t border-bone/10 py-32 md:py-48"
    >
      {/* Restrained warm glow — the only gradient on the page */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_62%,rgba(194,153,106,0.13),transparent_70%)]"
      />

      <div className="container-nf relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="kicker">Contact</p>
          <h2
            id="contact-heading"
            className="font-display mt-7 text-[clamp(2.5rem,6.5vw,5.25rem)] font-light uppercase leading-[1.04] tracking-[0.04em] text-bone"
          >
            Your story deserves a frame.
          </h2>
          <p className="mt-7 text-sm text-ash md:text-base">
            Let&rsquo;s create something worth remembering.
          </p>

          <div className="mt-12 flex justify-center">
            <CtaLink href={`mailto:${site.email}`} variant="solid">
              Start a Project
            </CtaLink>
          </div>

          <p className="mt-10 text-[11px] uppercase tracking-[0.26em] text-silver">
            {site.email}
          </p>
          <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-silver/70">
            Placeholder contact — replace before launch
          </p>
        </Reveal>
      </div>
    </section>
  );
}
