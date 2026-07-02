# Guía de contenido

Todo lo editable vive en `src/content/` y `src/lib/site.ts`.
**Nunca necesitas tocar componentes** para actualizar el portfolio.
TypeScript valida cada campo: si olvidas algo obligatorio, `npm run typecheck` te avisa.

## Añadir un proyecto

1. **Portada**: crea una imagen 1200×675 (SVG o JPG/PNG optimizado) y guárdala en
   `public/projects/mi-proyecto.svg`. Puedes duplicar un SVG existente y cambiar
   textos y color de acento: son autoexplicativos.

2. **Datos**: abre `src/content/projects.ts` y añade un objeto al array:

```ts
{
  slug: "mi-proyecto",                    // único, sin espacios
  title: "Mi Proyecto",
  category: "Backend · API REST",
  year: "2026",
  image: "/projects/mi-proyecto.svg",
  description: "Qué es, en una o dos frases.",
  problem: "Qué problema había que resolver.",
  solution: "Cómo lo resolviste técnicamente.",
  challenges: ["Reto 1.", "Reto 2."],
  learnings: ["Aprendizaje 1.", "Aprendizaje 2."],
  results: "Opcional: impacto o resultado final.",
  tech: ["Python", "Django"],
  repo: "https://github.com/JordiLlopis10/mi-proyecto",
  demo: "https://mi-proyecto.vercel.app", // opcional
  featured: false,  // true = tarjeta grande arriba
},
```

3. Guarda. En desarrollo se ve al instante; en producción, con el siguiente deploy.

Consejo: mantén **2 proyectos con `featured: true`** como máximo. La fuerza del
formato destacado se diluye si todo es destacado.

### Proyectos reales (sección «Producto real»)

Los proyectos con clientes o usuarios reales viven en el array `realProjects`
del mismo archivo y se muestran en su propia sección, antes de los académicos.
Dos campos extra:

- `status`: `"En producción"` (insignia verde con pulso) o `"En desarrollo"`
  (insignia ámbar).
- `repo`: **omítelo si el repositorio es privado** — la tarjeta mostrará
  «Código privado — disponible en entrevista» con un candado en lugar de
  romper el enlace. `demo` pinta el botón «Visitar web en producción».

## Añadir una certificación

1. Guarda el PDF en `public/certificates/` (nombre en minúsculas y con guiones).
2. Añade un objeto en `src/content/certifications.ts`:

```ts
{
  title: "Nombre del curso",
  issuer: "Quien lo imparte",
  date: "Mes Año",
  hours: 6,
  description: "Qué aprendiste, en una frase o dos.",
  skills: ["Competencia 1", "Competencia 2"],
  file: "/certificates/mi-certificado.pdf", // omite esta línea si no tienes PDF
  accent: "indigo", // o "cyan"
},
```

> **Pendiente ahora mismo:** copia tus dos PDFs a `public/certificates/` con los
> nombres `certificado-desarrollo-con-ia.pdf` y `certificado-seo-ia-google.pdf`
> (ver `public/certificates/LEEME.txt`).

## Añadir experiencia o formación

`src/content/experience.ts` y `src/content/education.ts`: copia un objeto
existente, edítalo y colócalo en orden cronológico inverso (lo más reciente
primero). Los campos se explican solos.

## Actualizar habilidades

`src/content/skills.ts`. Cada skill tiene `icon` (clave del mapa en
`src/components/ui/TechIcon.tsx`) y `level` (1–5, se muestra como puntos y se
anuncia a lectores de pantalla). Para un icono nuevo de marca, añádelo al mapa
`brandIcons` de `TechIcon.tsx` importándolo de `simple-icons`.

## Cambiar datos personales / SEO

`src/lib/site.ts`: nombre, rol, frase del hero, email, redes, URL canónica,
keywords y ruta del CV. Es el único punto de verdad; cambiarlo actualiza hero,
contacto, footer, metadata, JSON-LD y OG image a la vez.

**CV nuevo:** sustituye `public/cv/jordi-llopis-godino-cv.pdf` por el archivo
actualizado (mismo nombre) y no hay que tocar nada más.

## Activar el envío real del formulario (recomendado)

El formulario ya trae los dos modos integrados, **sin tocar código**:

- Sin configuración → respaldo `mailto:` (abre el cliente de correo del visitante).
- Con `NEXT_PUBLIC_FORM_ENDPOINT` definida → envío HTTP con estados de
  éxito/error accesibles, honeypot anti-spam y asunto fijo.

Pasos: cuenta gratuita en [formspree.io](https://formspree.io) con tu Gmail →
New Form → copiar endpoint (`https://formspree.io/f/XXXXXXXX`) → definir
`NEXT_PUBLIC_FORM_ENDPOINT` en `.env.local` (local) y en Vercel (producción)
→ redeploy. Detalles en [DEPLOYMENT.md](DEPLOYMENT.md).

## Idioma / segunda lengua

El contenido está centralizado, así que una versión en inglés consistiría en
duplicar `src/content/` y `site.ts` bajo un segmento `[locale]` de App Router.
Está fuera del alcance actual, pero la arquitectura no lo bloquea.
