import type { Certification } from "@/types/content";

/**
 * Certificaciones.
 *
 * Para añadir una: copia un objeto, edítalo y guarda el PDF en
 * `public/certificates/`. El campo `file` es la ruta pública al PDF;
 * si se omite, la tarjeta se muestra sin botón de apertura.
 */
export const certifications: Certification[] = [
  {
    title: "Iniciación al Desarrollo con IA: Programa con Agentes",
    issuer: "MoureDev × BIG School",
    date: "Junio 2026",
    hours: 6,
    description:
      "Jornadas formativas sobre desarrollo asistido por IA y programación con agentes, impartidas por Brais Moure (MoureDev), director del Máster en Desarrollo con IA.",
    skills: ["Desarrollo con IA", "Agentes", "Productividad", "Tooling"],
    file: "/certificates/certificado-desarrollo-con-ia.pdf",
    accent: "indigo",
  },
  {
    title: "SEO para IA y Google",
    issuer: "BIGSEO × BIG School",
    date: "Junio 2026",
    hours: 6,
    description:
      "Jornadas sobre posicionamiento en buscadores y en motores de IA: generar tráfico cualificado, negocio y visibilidad en la era de la inteligencia artificial.",
    skills: ["SEO técnico", "SEO para IA", "Visibilidad", "Analítica"],
    file: "/certificates/certificado-seo-ia-google.pdf",
    accent: "cyan",
  },
];
