import Image from "next/image";
import { ExternalLink, Github, Lock } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { realProjects } from "@/content/projects";
import type { Project } from "@/types/content";

/** Insignia de estado: verde con pulso para producción, ámbar para desarrollo. */
function StatusBadge({ status }: { status: NonNullable<Project["status"]> }) {
  const live = status === "En producción";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs ${
        live
          ? "border-positive/30 bg-positive/10 text-positive"
          : "border-amber-400/30 bg-amber-400/10 text-amber-300"
      }`}
    >
      <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
        {live ? (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60 motion-reduce:animate-none" />
        ) : null}
        <span
          className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
            live ? "bg-positive" : "bg-amber-300"
          }`}
        />
      </span>
      {status}
    </span>
  );
}

function RealProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-brand-strong/40">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={`Portada del proyecto ${project.title}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {project.status ? <StatusBadge status={project.status} /> : null}
            <p className="font-mono text-xs tracking-widest text-ink-faint">
              {project.category} · {project.year}
            </p>
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
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

          {project.results ? (
            <p className="mt-4 rounded-xl border border-line-soft bg-raised/50 p-4 text-sm leading-relaxed text-ink-soft">
              {project.results}
            </p>
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Chip>{tech}</Chip>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line-soft pt-5">
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-ink"
              >
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
                Visitar web en producción
                <span className="sr-only">
                  de {project.title} (se abre en una pestaña nueva)
                </span>
              </a>
            ) : null}
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
            ) : (
              <span className="inline-flex items-center gap-2 text-sm text-ink-faint">
                <Lock aria-hidden="true" className="h-4 w-4" />
                Código privado — disponible en entrevista
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function RealProjects() {
  return (
    <Section id="proyectos-reales">
      <SectionHeading
        sectionId="proyectos-reales"
        index="06"
        title="Producto real"
        description="Más allá de lo académico: proyectos para clientes de verdad, uno ya en producción y otro en desarrollo activo."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {realProjects.map((project, i) => (
          <RealProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
