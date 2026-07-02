import { Briefcase } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeading
        sectionId="experiencia"
        index="02"
        title="Experiencia"
        description="Mi recorrido profesional, del soporte técnico al desarrollo web."
      />

      <ol className="relative space-y-12 border-l border-line pl-8 md:space-y-16">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.4rem] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface"
            >
              <Briefcase className="h-3.5 w-3.5 text-brand" />
            </span>

            <Reveal delay={i * 0.05}>
              <article>
                <p className="font-mono text-xs tracking-widest text-ink-faint">
                  {job.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm text-brand">
                  {job.company}
                  {job.location ? (
                    <span className="text-ink-faint"> · {job.location}</span>
                  ) : null}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
                  {job.summary}
                </p>
                <ul className="mt-4 max-w-2xl space-y-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías">
                  {job.tech.map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
