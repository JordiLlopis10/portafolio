import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/content/education";

export function Education() {
  return (
    <Section id="formacion">
      <SectionHeading
        sectionId="formacion"
        index="03"
        title="Formación"
        description="Siete años de formación técnica continua, de los sistemas al desarrollo de aplicaciones."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((entry, i) => (
          <Reveal key={entry.degree} delay={i * 0.06}>
            <article className="card group h-full p-6 transition-colors duration-300 hover:border-brand-strong/50 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <GraduationCap aria-hidden="true" className="h-5 w-5 text-brand" />
                {entry.status === "En curso" ? (
                  <span className="rounded-full border border-positive/30 bg-positive/10 px-3 py-1 font-mono text-xs text-positive">
                    En curso
                  </span>
                ) : (
                  <span className="font-mono text-xs text-ink-faint">
                    {entry.period}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold leading-snug text-ink">
                {entry.degree}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{entry.school}</p>
              {entry.status === "En curso" ? (
                <p className="mt-1 font-mono text-xs text-ink-faint">
                  {entry.period}
                </p>
              ) : null}
              {entry.description ? (
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {entry.description}
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
