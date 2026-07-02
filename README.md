# Jordi Llopis Godino — Portfolio

Portfolio profesional de **Jordi Llopis Godino**, desarrollador full-stack (Valencia, España).
Diseñado como carta de presentación: una página única, oscura y minimalista, pensada para que
cualquier empresa que la visite quiera concertar una entrevista.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript estricto · TailwindCSS 4 · Framer Motion · Lucide

---

## Características

- **Diseño premium oscuro** inspirado en Vercel, Linear y Stripe: tipografía Geist, espaciado generoso, microinteracciones sutiles.
- **Contenido separado del código**: todo lo editable vive en `src/content/`. Añadir un proyecto o certificación no toca ningún componente.
- **Integración automática con GitHub**: repositorios, lenguajes y calendario de contribuciones se obtienen en el servidor con caché incremental (1 h) y degradación elegante si la API falla.
- **SEO completo**: metadata, Open Graph + Twitter Cards (imagen generada en build), JSON-LD (Person + WebSite), sitemap, robots, manifest y favicons generados por código.
- **Accesibilidad WCAG 2.2 AA**: skip link, landmarks, `aria-label` en iconos, focus visible, contraste verificado y `prefers-reduced-motion` respetado en todas las animaciones.
- **Rendimiento**: 100 % prerenderizado estático, ~152 kB de First Load JS, imágenes SVG ligeras, fuentes autoalojadas con `next/font`.

## Empezar

```bash
npm install       # instalar dependencias
npm run dev       # desarrollo en http://localhost:3000
npm run build     # build de producción
npm run start     # servir la build
npm run lint      # ESLint
npm run typecheck # TypeScript sin emitir
```

## Estructura

```
├── docs/                    # Documentación técnica y de diseño
├── public/
│   ├── certificates/        # PDFs de certificaciones
│   ├── cv/                  # CV en PDF (botón de descarga)
│   └── projects/            # Portadas SVG de los proyectos
└── src/
    ├── app/                 # App Router: página, layout y SEO por código
    ├── components/
    │   ├── layout/          # Header, Footer
    │   ├── sections/        # Una sección de la página por archivo
    │   └── ui/              # Design system: Button, Section, Chip, Reveal…
    ├── content/             # ✏️ CONTENIDO EDITABLE (proyectos, CV, skills…)
    ├── lib/                 # site.ts (configuración) y github.ts (API)
    └── types/               # Contratos TypeScript del contenido
```

## Editar el contenido

| Quiero cambiar…            | Archivo                          |
| -------------------------- | -------------------------------- |
| Nombre, email, redes, URL  | `src/lib/site.ts`                |
| Texto de «Sobre mí»        | `src/content/profile.ts`         |
| Experiencia laboral        | `src/content/experience.ts`      |
| Formación                  | `src/content/education.ts`       |
| Certificaciones            | `src/content/certifications.ts`  |
| Habilidades y niveles      | `src/content/skills.ts`          |
| Proyectos                  | `src/content/projects.ts`        |

Guía paso a paso (con ejemplos): [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md).

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repositorio. Vercel detecta Next.js automáticamente; no hay nada que configurar.
3. Añade la variable de entorno `NEXT_PUBLIC_SITE_URL` con tu dominio final.
4. (Opcional) Añade `GITHUB_TOKEN` para ampliar el límite de la API de GitHub.

Detalles, dominio propio y checklist SEO: [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Documentación

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — arquitectura, decisiones técnicas y flujo de datos.
- [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) — paleta, tipografía, espaciado, componentes y wireframes.
- [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) — cómo añadir proyectos y certificaciones sin tocar código.
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) — despliegue, dominio y SEO post-lanzamiento.

---

© Jordi Llopis Godino · [GitHub](https://github.com/JordiLlopis10) · [LinkedIn](https://www.linkedin.com/in/jordi-llopis-godino-229b242a9)
