import type { Education } from "@/types/content";

/**
 * Formación académica, de más reciente a más antigua.
 */
export const education: Education[] = [
  {
    degree: "Curso de Especialización en Desarrollo de Aplicaciones con Python",
    school: "IES Font de Sant Lluís, Valencia",
    period: "2025 — 2026",
    status: "En curso",
    description:
      "Especialización oficial post-DAW: Python avanzado, Django, APIs REST, análisis de datos y buenas prácticas de ingeniería.",
  },
  {
    degree: "CFGS Desarrollo de Aplicaciones Web (DAW)",
    school: "Grupo Studio, Valencia",
    period: "2023 — 2025",
    status: "Completado",
    description:
      "Grado superior centrado en desarrollo full-stack: frontend, backend, bases de datos, despliegue y proyecto final con aplicación real.",
  },
  {
    degree: "CFGM Sistemas Microinformáticos y Redes (SMR)",
    school: "IES Enric Valor, Pego",
    period: "2020 — 2022",
    status: "Completado",
    description:
      "Base técnica en sistemas, hardware, redes y administración: el punto de partida de mi camino en la informática.",
  },
  {
    degree: "Educación Secundaria Obligatoria (ESO)",
    school: "IES Enric Valor, Orba",
    period: "2016 — 2020",
    status: "Completado",
  },
];
