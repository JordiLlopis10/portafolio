import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { levelLabels, skillGroups } from "@/content/skills";
import type { SkillLevel } from "@/types/content";

/** Indicador de nivel: cinco puntos, con etiqueta accesible. */
function LevelDots({ level, name }: { level: SkillLevel; name: string }) {
  return (
    <span
      role="img"
      aria-label={`${name}: nivel ${levelLabels[level]} (${level} de 5)`}
      className="flex items-center gap-1"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${
            i < level ? "bg-brand" : "bg-line"
          }`}
        />
      ))}
    </span>
  );
}

export function Skills() {
  return (
    <Section id="habilidades">
      <SectionHeading
        sectionId="habilidades"
        index="05"
        title="Tecnologías"
        description="Las herramientas con las que trabajo, agrupadas por capa. El nivel refleja uso real en proyectos, no palabras clave."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <article className="card h-full p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="flex items-center gap-3 text-sm text-ink">
                      <TechIcon
                        name={skill.icon}
                        className="h-4.5 w-4.5 text-ink-soft"
                      />
                      {skill.name}
                    </span>
                    <LevelDots level={skill.level} name={skill.name} />
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
