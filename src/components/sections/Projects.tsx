import Image from "next/image";
import { ChevronDown, ExternalLink, Github, Lightbulb, Puzzle } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
        >
          <Github aria-hidden="true" className="h-4 w-4" />
          Código
          <span className="sr-only">
            de {project.title} en GitHub (se abre en una pestaña nueva)
          </span>
        </a>
      ) : null}
      {project.demo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-brand"
        >
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
          Demo en vivo
          <span className="sr-only">
            de {project.title} (se abre en una pestaña nueva)
          </span>
        </a>
      ) : null}
    </div>
  );
}

function ProjectInsights({ project }: { project: Project }) {
  return (
    <details className="project-details group/details mt-6 rounded-xl border border-line-soft bg-raised/50">
      <summary className="flex items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-ink-soft transition-colors hover:text-ink">
        Retos, aprendizajes y resultados
        <ChevronDown aria-hidden="true" className="chevron h-4 w-4 shrink-0" />
      </summary>
      <div className="space-y-6 border-t border-line-soft px-5 py-5">
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
            <Puzzle aria-hidden="true" className="h-3.5 w-3.5" />
            Retos encontrados
          </h4>
          <ul className="space-y-2">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 text-sm leading-relaxed text-ink-soft"
              >
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
            <Lightbulb aria-hidden="true" className="h-3.5 w-3.5" />
            Lo aprendido
          </h4>
          <ul className="space-y-2">
            {project.learnings.map((learning) => (
              <li
                key={learning}
                className="flex gap-3 text-sm leading-relaxed text-ink-soft"
              >
                <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {learning}
              </li>
            ))}
          </ul>
        </div>
        {project.results ? (
          <p className="border-t border-line-soft pt-4 text-sm leading-relaxed text-ink-soft">
            {project.results}
          </p>
        ) : null}
      </div>
    </details>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className="card overflow-hidden transition-colors duration-300 hover:border-brand-strong/40">
        <div className={`grid lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
          <div className="relative aspect-video lg:aspect-auto lg:min-h-full [direction:ltr]">
            <Image
              src={project.image}
              alt={`Portada del proyecto ${project.title}`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-10 [direction:ltr]">
            <p className="font-mono text-xs tracking-widest text-ink-faint">
              {project.category} · {project.year}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
              {project.description}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line-soft bg-raised/50 p-4">
                <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  Problema
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {project.problem}
                </p>
              </div>
              <div className="rounded-xl border border-line-soft bg-raised/50 p-4">
                <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  Solución
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {project.solution}
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
              {project.tech.map((tech) => (
                <li key={tech}>
                  <Chip>{tech}</Chip>
                </li>
              ))}
            </ul>

            <ProjectInsights project={project} />

            <div className="mt-6">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SecondaryProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.06} className="h-full">
      <article className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-brand-strong/40">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={`Portada del proyecto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="font-mono text-xs tracking-widest text-ink-faint">
            {project.category} · {project.year}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
            {project.tech.slice(0, 4).map((tech) => (
              <li key={tech}>
                <Chip>{tech}</Chip>
              </li>
            ))}
          </ul>
          <div className="mt-5 border-t border-line-soft pt-4">
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <Section id="proyectos">
      <SectionHeading
        sectionId="proyectos"
        index="07"
        title="Proyectos"
        description="Proyectos académicos y de aprendizaje: qué había que resolver, cómo lo resolví y qué aprendí por el camino."
      />

      <div className="space-y-8">
        {featured.map((project, i) => (
          <FeaturedProject key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {secondary.map((project, i) => (
          <SecondaryProject key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
