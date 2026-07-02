import { Award, Clock, ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { certifications } from "@/content/certifications";

const accentStyles = {
  indigo: {
    bar: "from-indigo-500 to-violet-500",
    icon: "text-indigo-300",
  },
  cyan: {
    bar: "from-cyan-500 to-sky-500",
    icon: "text-cyan-300",
  },
} as const;

export function Certifications() {
  return (
    <Section id="certificaciones">
      <SectionHeading
        sectionId="certificaciones"
        index="04"
        title="Certificaciones"
        description="Formación complementaria centrada en lo que viene: desarrollo con IA y visibilidad en buscadores."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, i) => {
          const accent = accentStyles[cert.accent];
          return (
            <Reveal key={cert.title} delay={i * 0.08}>
              <article className="card group relative h-full overflow-hidden p-6 transition-colors duration-300 hover:border-brand-strong/50 md:p-8">
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r opacity-70 ${accent.bar}`}
                />

                <div className="flex items-start justify-between gap-4">
                  <Award aria-hidden="true" className={`h-6 w-6 ${accent.icon}`} />
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-faint">
                    <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                    {cert.hours} horas · {cert.date}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">
                  {cert.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-brand">{cert.issuer}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {cert.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Competencias">
                  {cert.skills.map((skill) => (
                    <li key={skill}>
                      <Chip>{skill}</Chip>
                    </li>
                  ))}
                </ul>

                {cert.file ? (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-ink"
                  >
                    Ver certificado
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                    <span className="sr-only">
                      {cert.title} (PDF, se abre en una pestaña nueva)
                    </span>
                  </a>
                ) : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
