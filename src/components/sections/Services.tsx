import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Services: a numbered editorial index with a sticky intro column.
 * Deliberately not a SaaS feature/pricing table — rows are quiet,
 * typographic and scannable.
 */
export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 border-t border-bone/10 py-28 md:py-40"
    >
      <div className="container-nf grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              id="services-heading"
              kicker="Services"
              title="What We Do"
              description="Every service runs through the same pipeline — direction, light, sound and a single consistent grade — so a brand film and a wedding story feel like they come from the same hands."
            />
            <Reveal delay={0.12} className="mt-10">
              <a href="#contact" className="nav-link inline-flex items-center gap-3">
                Start a project
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-bone/10">
            {services.map((service, index) => (
              <Reveal
                key={service.id}
                as="li"
                delay={(index % 3) * 0.05}
                className="group border-b border-bone/10 py-8 md:py-9"
              >
                <div className="flex gap-6 md:gap-10">
                  <span
                    aria-hidden="true"
                    className="w-8 shrink-0 pt-1.5 text-[11px] font-medium tracking-[0.25em] text-silver tabular-nums transition-colors duration-300 group-hover:text-ember"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-light uppercase tracking-[0.08em] text-bone transition-colors duration-300 group-hover:text-ember md:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ash">
                      {service.description}
                    </p>
                    <ul
                      aria-label={`${service.title} disciplines`}
                      className="mt-5 flex flex-wrap gap-x-6 gap-y-2"
                    >
                      {service.disciplines.map((discipline) => (
                        <li
                          key={discipline}
                          className="text-[10px] uppercase tracking-[0.26em] text-silver"
                        >
                          {discipline}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
