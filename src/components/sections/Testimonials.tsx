import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Testimonials: 2–3 placeholder quotes, each visibly labelled as a
 * placeholder so no one mistakes them for real client reviews.
 * Swapping in genuine quotes is a data-only change.
 */
export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-bone/10 py-28 md:py-40"
    >
      <div className="container-nf">
        <SectionHeading
          id="testimonials-heading"
          kicker="Testimonials"
          title="Kind Words"
          description="These entries are placeholders shown during development. They will be replaced with real client quotes before launch."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 0.08}
              className="h-full"
              variant="rise"
            >
              <figure className="flex h-full flex-col border border-bone/10 bg-coal/60 p-8">
                {testimonial.isPlaceholder ? (
                  <span className="chip self-start">Placeholder</span>
                ) : null}
                <blockquote className="font-display mt-6 flex-1 text-lg font-light leading-relaxed text-bone">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-bone/10 pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-ash">
                    {testimonial.name}
                  </p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.2em] text-silver">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
