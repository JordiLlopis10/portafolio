# Arquitectura

## Visión general

Página única (one-page) construida con **Next.js 15 App Router**, prerenderizada
al 100 % en build. No hay servidor de aplicación en tiempo de ejecución: Vercel
sirve HTML estático y revalida los datos de GitHub de forma incremental (ISR).

```
┌──────────────────────────────────────────────────────────┐
│  Build / ISR (cada 1 h)                                  │
│                                                          │
│  GitHub API ──► lib/github.ts ──► page.tsx (RSC)         │
│  (usuario, repos,                    │                   │
│   contribuciones)                    ▼                   │
│                        HTML estático completo            │
└──────────────────────────────────────────────────────────┘
                                      │
                                      ▼
                        Visitante (CDN de Vercel)
                 JS solo para animaciones e interacción
```

## Decisiones técnicas

| Decisión | Motivo |
| --- | --- |
| **App Router + RSC** | Los datos de GitHub se resuelven en el servidor: el HTML llega completo a buscadores y visitantes, sin spinners ni layout shift. |
| **Prerender estático + `revalidate: 3600`** | Carga instantánea desde CDN; los datos de GitHub se refrescan como mucho cada hora sin rebuilds manuales. |
| **Contenido en `src/content/*.ts`** | Tipado con los contratos de `src/types/content.ts`. Editar contenido nunca implica tocar componentes; TypeScript avisa si falta un campo. |
| **Tailwind 4 con tokens en `@theme`** | La paleta y tipografía viven en `globals.css` como design tokens (`bg-canvas`, `text-ink`, `text-brand`…), no repartidas por los componentes. |
| **Framer Motion solo donde aporta** | Aparición al hacer scroll (`Reveal`) y stagger del hero. Todo se desactiva con `prefers-reduced-motion`. |
| **Imágenes OG/favicons por código** | `opengraph-image.tsx`, `icon.tsx` y `apple-icon.tsx` generan PNG en build con `next/og`: identidad visual consistente sin binarios en el repo. |
| **Degradación elegante de GitHub** | Si la API no responde (límite de cuota, caída), `getGitHubData()` devuelve `null` y la sección muestra un enlace directo al perfil. La página nunca rompe. |
| **Formulario sin backend** | Compone un `mailto:` en el cliente. Cero dependencias, cero spam, cero costes. Sustituible por Resend/Formspree (ver CONTENT-GUIDE). |

## Árbol de carpetas

```
portafolio/
├── docs/                          # Esta documentación
├── public/
│   ├── certificates/              # PDFs de certificaciones (enlazados desde content)
│   ├── cv/jordi-llopis-godino-cv.pdf
│   └── projects/*.svg             # Portadas de proyectos (1200×675)
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Fuentes, metadata global, JSON-LD, Header/Footer
│   │   ├── page.tsx               # Composición de secciones + fetch de GitHub (RSC)
│   │   ├── globals.css            # Design tokens (@theme) + utilidades
│   │   ├── icon.tsx               # Favicon PNG generado en build
│   │   ├── apple-icon.tsx         # Icono iOS
│   │   ├── opengraph-image.tsx    # Imagen OG/Twitter 1200×630
│   │   ├── manifest.ts            # PWA manifest
│   │   ├── robots.ts              # robots.txt
│   │   └── sitemap.ts             # sitemap.xml
│   ├── components/
│   │   ├── layout/                # Header (client), Footer (server)
│   │   ├── sections/              # Hero, About, Experience, Education,
│   │   │                          # Certifications, Skills, RealProjects,
│   │   │                          # Projects, GitHubSection, Contact
│   │   └── ui/                    # Button, Section, SectionHeading, Chip,
│   │                              # Reveal, TechIcon, Logo
│   ├── content/                   # ✏️ contenido editable, tipado
│   ├── lib/
│   │   ├── site.ts                # Identidad, enlaces, secciones, SEO
│   │   └── github.ts              # Cliente de la API de GitHub (server-only)
│   └── types/content.ts           # Contratos del contenido
├── next.config.ts                 # Cabeceras de seguridad, imágenes remotas, SVG
├── eslint.config.mjs
├── postcss.config.mjs             # Tailwind 4 vía PostCSS
└── tsconfig.json                  # strict + noUncheckedIndexedAccess
```

## Server vs. Client Components

Regla aplicada: **server por defecto; client solo si hay estado o animación.**

| Componente | Tipo | Por qué |
| --- | --- | --- |
| `page.tsx`, secciones estáticas, Footer, TechIcon | Server | Sin estado; HTML puro. |
| `Hero`, `Reveal` | Client | Framer Motion. |
| `Header` | Client | Menú móvil, sombra al hacer scroll. |
| `Contact` | Client | Formulario y botón de copiar email. |
| `GitHubSection` | Server | Recibe los datos ya resueltos como props; anima con `Reveal`. |

## Flujo de datos de GitHub

1. `page.tsx` (RSC) llama a `getGitHubData()`.
2. `lib/github.ts` hace fetch en paralelo de usuario y repos (`next.revalidate = 3600`), agrega lenguajes por repositorio propio (sin forks) y pide el calendario de contribuciones a un servicio comunitario.
3. Cualquier fallo → `null` → la UI se degrada sin romper.
4. Con `GITHUB_TOKEN` en el entorno, las peticiones van autenticadas (5000 req/h en lugar de 60).

## Seguridad

- Cabeceras: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` (en `next.config.ts`).
- SVG en `next/image` con CSP `sandbox` y `script-src 'none'`.
- Sin cookies, sin tracking, sin datos de usuario: superficie de ataque mínima.
