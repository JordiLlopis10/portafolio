/**
 * Tipos del contenido del portfolio.
 *
 * Todo el contenido editable vive en `src/content/*.ts` y cumple estos
 * contratos. Los componentes solo consumen estos tipos: añadir un proyecto,
 * una certificación o una experiencia nunca requiere tocar componentes.
 */

export interface Experience {
  role: string;
  company: string;
  location?: string;
  /** Ej: "Mar 2025 — Jun 2025" */
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  status?: "En curso" | "Completado";
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  hours: number;
  description: string;
  skills: string[];
  /** Ruta al PDF dentro de /public. Si se omite, la tarjeta no muestra el botón de abrir. */
  file?: string;
  /** Tono de acento de la tarjeta. */
  accent: "indigo" | "cyan";
}

export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  name: string;
  /** Clave del icono en `src/components/ui/TechIcon.tsx`. */
  icon: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export interface Project {
  /** Identificador único, usado como ancla y clave. */
  slug: string;
  title: string;
  category: string;
  year: string;
  /** Ruta a la imagen de portada dentro de /public. */
  image: string;
  description: string;
  problem: string;
  solution: string;
  challenges: string[];
  learnings: string[];
  results?: string;
  tech: string[];
  /** URL del repositorio. Omitir si es privado (se mostrará un aviso con candado). */
  repo?: string;
  demo?: string;
  /** Los proyectos destacados se muestran en tarjetas grandes. */
  featured: boolean;
  /** Estado del proyecto en el mundo real (sección «Producto real»). */
  status?: "En producción" | "En desarrollo";
}
