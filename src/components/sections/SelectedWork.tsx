import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

/**
 * Selected Work: a two-column editorial grid with an offset second
 * column — placeholder projects for now, real work later.
 */
export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-24 py-28 md:py-40"
    >
      <div className="container-nf">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="work-heading"
            kicker="Portfolio"
            title="Selected Work"
          />
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-ash">
              A rotating selection of recent films and photo stories. The
              full archive is available on request.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-2 md:pb-16 md:pt-10">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 2) * 0.08}
              className={index % 2 === 1 ? "md:translate-y-16" : ""}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
