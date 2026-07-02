import type { Experience } from "@/types/content";

/**
 * Experiencia laboral, de más reciente a más antigua.
 * Para añadir una entrada, copia un objeto y edítalo. Nada más.
 */
export const experience: Experience[] = [
  {
    role: "Desarrollador Web",
    company: "Rotary Club",
    location: "Valencia",
    period: "Mar 2025 — Jun 2025",
    summary:
      "Prácticas del Grado Superior de Desarrollo de Aplicaciones Web: desarrollo y mantenimiento de la presencia web de la organización.",
    highlights: [
      "Desarrollo de páginas y componentes web responsive con HTML, CSS y JavaScript.",
      "Mantenimiento y evolución del sitio: contenidos, formularios y estructura.",
      "Trabajo con requisitos reales de un cliente no técnico: recoger necesidades y traducirlas a soluciones.",
      "Uso de Git y GitHub para versionar todo el trabajo.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git"],
  },
  {
    role: "Técnico de Sistemas Microinformáticos",
    company: "Ayuntamiento de Orba",
    location: "Orba, Alicante",
    period: "Sep 2022 — Dic 2022",
    summary:
      "Soporte técnico y mantenimiento de la infraestructura informática municipal.",
    highlights: [
      "Mantenimiento preventivo y correctivo de equipos y periféricos.",
      "Soporte directo a usuarios: diagnóstico y resolución de incidencias.",
      "Configuración de puestos de trabajo, redes locales e impresoras.",
    ],
    tech: ["Windows", "Redes", "Hardware", "Soporte"],
  }
];
