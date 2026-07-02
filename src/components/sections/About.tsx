import { Code2, Layers, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about } from "@/content/profile";

const principleIcons: Record<string, LucideIcon> = {
  code: Code2,
  layers: Layers,
  target: Target,
  "trending-up": TrendingUp,
};

export function About() {
  return (
    <Section id="sobre-mi">
      <SectionHeading
        sectionId="sobre-mi"
        index="01"
        title="Sobre mí"
        description="Quién soy, cómo trabajo y qué estoy buscando."
      />

      <div className="grid gap-16 lg:grid-cols-5">
        <Reveal className="space-y-5 lg:col-span-3">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-base leading-relaxed text-ink-soft md:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-line-soft pt-8 sm:grid-cols-2">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid content-start gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {about.principles.map((principle, i) => {
            const Icon = principleIcons[principle.icon] ?? Code2;
            return (
              <Reveal key={principle.title} delay={i * 0.08}>
                <article className="card group h-full p-6 transition-colors duration-300 hover:border-brand-strong/50">
                  <Icon
                    aria-hidden="true"
                    className="h-5 w-5 text-brand transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  <h3 className="mt-4 text-sm font-semibold text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {principle.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
