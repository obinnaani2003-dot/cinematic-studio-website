import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * About: a concise studio introduction.
 * The copy is explicitly placeholder until the real business story
 * arrives — the note below the text makes that visible to the client.
 */
export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-bone/10 py-28 md:py-40"
    >
      <div className="container-nf grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="about-heading" kicker="About" title="The Studio" />
        </div>

        <div className="lg:col-span-8">
          <Reveal>
            <p className="font-display max-w-3xl text-[clamp(1.6rem,3.2vw,2.6rem)] font-light leading-snug text-bone">
              NOIRFRAME is a cinematic film and photography studio. We tell
              stories with{" "}
              <em className="italic text-ember">light, shadow and patience</em>{" "}
              — for brands, families, and everything in between.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-9 max-w-2xl text-sm leading-relaxed text-ash">
              This is placeholder copy standing in for the real studio
              story — the founders, the vision, the way the work is made.
              When the actual narrative is ready, it replaces this section
              without touching the layout.
            </p>
          </Reveal>

          <Reveal delay={0.16} className="mt-10">
            <p className="chip">Placeholder introduction</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
