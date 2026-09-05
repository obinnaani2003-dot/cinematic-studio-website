import Image from "next/image";
import type { Project } from "@/types";

/**
 * One portfolio entry: image with a quiet hover response, then an
 * editorial meta row (category + title left, short description right).
 * Not a link — there are no detail pages yet in Build 0.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group" aria-labelledby={`project-${project.slug}`}>
      <figure className="relative overflow-hidden border border-bone/10">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </figure>

      <div className="mt-6 flex flex-col gap-4 border-t border-bone/10 pt-5 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-ember">
            {project.category}
          </p>
          <h3
            id={`project-${project.slug}`}
            className="font-display mt-2 text-2xl font-light uppercase tracking-[0.08em] text-bone"
          >
            {project.title}
          </h3>
        </div>
        <p className="max-w-xs text-xs leading-relaxed text-ash sm:text-right">
          {project.description}
        </p>
      </div>
    </article>
  );
}
