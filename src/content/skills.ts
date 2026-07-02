import type { SkillGroup } from "@/types/content";

/**
 * Habilidades técnicas agrupadas.
 *
 * `icon` debe existir en el mapa de `src/components/ui/TechIcon.tsx`.
 * `level`: 1 (iniciación) — 5 (dominio). Sé honesto: los niveles se
 * muestran visualmente y se anuncian a lectores de pantalla.
 */
export const skillGroups: SkillGroup[] = [
  {
    title: "Lenguajes",
    skills: [
      { name: "Python", icon: "python", level: 5 },
      { name: "JavaScript", icon: "javascript", level: 4 },
      { name: "SQL", icon: "sql", level: 4 },
      { name: "HTML", icon: "html", level: 4 },
      { name: "CSS", icon: "css", level: 4 },
      { name: "TypeScript", icon: "typescript", level: 3 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Django / DRF", icon: "django", level: 4 },
      { name: "Flask", icon: "flask", level: 4 },
      { name: "Node.js", icon: "nodejs", level: 3 },
      { name: "APIs REST", icon: "api", level: 4 },
      { name: "Stripe", icon: "stripe", level: 3 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", icon: "vue", level: 4 },
      { name: "React", icon: "react", level: 2 },
      { name: "TailwindCSS", icon: "tailwind", level: 3 },
      { name: "Figma", icon: "figma", level: 4 },
    ],
  },
  {
    title: "Bases de datos",
    skills: [
      { name: "MySQL", icon: "mysql", level: 4 },
      { name: "SQLite", icon: "sqlite", level: 4 },
      { name: "MongoDB", icon: "mongodb", level: 4 },
    ],
  },
  {
    title: "Inteligencia Artificial",
    skills: [
      { name: "Claude & Claude Code", icon: "claude", level: 4 },
      { name: "Desarrollo con agentes", icon: "agents", level: 3 },
      { name: "Prompt engineering", icon: "prompt", level: 4 },
      { name: "ChatGPT / OpenAI", icon: "openai", level: 4 },
      { name: "GitHub Copilot", icon: "copilot", level: 3 },
      { name: "SEO para IA (GEO)", icon: "ai-seo", level: 3 },
    ],
  },
  {
    title: "Herramientas y DevOps",
    skills: [
      { name: "Git", icon: "git", level: 4 },
      { name: "GitHub", icon: "github", level: 4 },
      { name: "VS Code", icon: "vscode", level: 5 },
      { name: "Vercel", icon: "vercel", level: 3 },
      { name: "Linux", icon: "linux", level: 3 },
      { name: "Windows", icon: "windows", level: 5 },
    ],
  },
];

/** Etiquetas legibles para cada nivel (accesibilidad y tooltip). */
export const levelLabels: Record<number, string> = {
  1: "Iniciación",
  2: "Básico",
  3: "Intermedio",
  4: "Avanzado",
  5: "Dominio",
};
