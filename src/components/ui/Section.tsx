import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/**
 * Sección de página con landmark accesible: cada sección queda etiquetada
 * por su propio título mediante `aria-labelledby` (ver SectionHeading).
 */
export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`py-24 md:py-32 ${className}`}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  /** Debe coincidir con el `id` de la Section contenedora. */
  sectionId: string;
  /** Número de orden mostrado como detalle tipográfico ("01", "02"…). */
  index: string;
  title: string;
  description?: string;
}

/** Cabecera estándar de sección: índice en mono, título y descripción. */
export function SectionHeading({
  sectionId,
  index,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl md:mb-20">
      <p className="mb-3 font-mono text-sm tracking-widest text-brand">
        {index} <span aria-hidden="true">—</span>
      </p>
      <h2
        id={`${sectionId}-title`}
        className="text-3xl font-semibold tracking-tight text-ink md:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
