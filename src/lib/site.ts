/**
 * Configuración global del sitio: identidad, enlaces y SEO.
 * Único punto de verdad para datos de contacto y URLs.
 */
export const site = {
  name: "Jordi Llopis Godino",
  firstName: "Jordi",
  role: "Desarrollador Full-Stack",
  tagline:
    "Construyo aplicaciones web completas —de la base de datos a la interfaz— con Python, JavaScript y atención real por el detalle.",
  description:
    "Portfolio de Jordi Llopis Godino, desarrollador full-stack en Valencia. Python, Django, Flask, Vue, JavaScript y SQL. Proyectos reales, código limpio y ganas de construir.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jordi-llopis.vercel.app",
  email: "llopisgodinojordi@gmail.com",
  phone: "+34 684 27 66 98",
  location: "Valencia, España",
  github: "https://github.com/JordiLlopis10",
  githubUser: "JordiLlopis10",
  linkedin: "https://www.linkedin.com/in/jordi-llopis-godino-229b242a9",
  cvPath: "/cv/jordi-llopis-godino-cv.pdf",
  cvFileName: "CV-Jordi-Llopis-Godino.pdf",
  keywords: [
    "Jordi Llopis Godino",
    "desarrollador full-stack",
    "desarrollador web Valencia",
    "Python",
    "Django",
    "Flask",
    "Vue.js",
    "JavaScript",
    "desarrollo con IA",
    "agentes de IA",
    "portfolio desarrollador",
  ],
} as const;

/** Secciones de la página, en orden. Alimenta navegación, anclas y sitemap. */
export const sections = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "formacion", label: "Formación" },
  { id: "certificaciones", label: "Certificaciones" },
  { id: "habilidades", label: "Habilidades" },
  { id: "proyectos-reales", label: "Producto real" },
  { id: "proyectos", label: "Proyectos" },
  { id: "github", label: "GitHub" },
  { id: "contacto", label: "Contacto" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

/** Enlaces mostrados en la cabecera (subconjunto para mantenerla limpia). */
export const navLinks: SectionId[] = [
  "sobre-mi",
  "experiencia",
  "proyectos-reales",
  "proyectos",
  "contacto",
];
