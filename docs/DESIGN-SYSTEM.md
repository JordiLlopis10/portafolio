# Design System

Estética de referencia: Vercel, Linear, Stripe. Oscuro, tipográfico, con un
único acento de color y muchísimo aire. Nada compite con el contenido.

## Paleta

Definida como tokens en `src/app/globals.css` (`@theme`). Los componentes usan
las clases derivadas (`bg-canvas`, `text-ink`, `border-line`…), nunca hex sueltos.

| Token | Hex | Uso | Contraste sobre canvas |
| --- | --- | --- | --- |
| `canvas` | `#09090b` | Fondo de página | — |
| `surface` | `#101014` | Tarjetas | — |
| `raised` | `#17171d` | Superficies elevadas (chips, inputs) | — |
| `line` | `#26262e` | Bordes | — |
| `line-soft` | `#1c1c22` | Bordes sutiles / divisores | — |
| `ink` | `#f4f4f5` | Texto principal | 18.2:1 ✅ AAA |
| `ink-soft` | `#a1a1aa` | Texto secundario | 7.5:1 ✅ AAA |
| `ink-faint` | `#71717a` | Metadatos (siempre ≥ 18 px o decorativo) | 4.6:1 ✅ AA |
| `brand` | `#a5b4fc` | Acento en texto (índigo 300) | 9.8:1 ✅ AAA |
| `brand-strong` | `#6366f1` | Bordes hover, superficies de acento | — |
| `positive` | `#6ee7b7` | Estado "disponible" | 12.4:1 ✅ |

Regla del acento: **una sola familia (índigo) usada con moderación** — índice de
sección, iconos, hover. Los degradados (`text-gradient`, halos del hero) son el
único momento "expresivo" y aparecen dos veces en toda la página.

## Tipografía

| Rol | Fuente | Uso |
| --- | --- | --- |
| Sans | **Geist** (`next/font`, autoalojada) | Todo el texto |
| Mono | **Geist Mono** | Índices de sección, fechas, chips, etiquetas |

Escala (desktop):

```
Hero h1        72px  semibold  tracking-tight  (móvil: 48px)
Sección h2     36px  semibold  tracking-tight  (móvil: 30px)
Tarjeta h3     18–24px semibold
Cuerpo         16–18px  leading-relaxed
Meta / mono    12–14px  tracking-widest uppercase
```

Jerarquía por **peso y color antes que por tamaño**: los metadatos usan mono +
`ink-faint`, el cuerpo `ink-soft`, y solo los titulares llegan a `ink` pleno.

## Espaciado y layout

- Contenedor: `container-site` → max-width 72 rem, padding lateral fluido.
- Ritmo vertical: secciones `py-24` (móvil) / `py-32` (desktop).
- Tarjetas: radio `1rem`, borde 1 px `line`, hover → borde `brand-strong/50`.
- Grid: 12 col implícitas vía Tailwind; About 3/2, Contact 1/1, Skills 3 col.

## Movimiento

| Animación | Especificación |
| --- | --- |
| Aparición de sección (`Reveal`) | fade + translateY(24px), 550 ms, ease [0.21,0.47,0.32,0.98], una vez |
| Hero | stagger 120 ms entre elementos |
| Hover en tarjetas | solo color de borde (200–300 ms); imagen de proyecto escala 1.03 |
| Flecha de scroll / dot de disponibilidad | bounce / ping nativos de Tailwind |

**Regla dura:** todo respeta `prefers-reduced-motion` (Framer `useReducedMotion`
+ variantes `motion-reduce:` de Tailwind). Sin parallax, sin scroll-jacking.

## Componentes

| Componente | Variantes / API |
| --- | --- |
| `Button` | `primary` (relleno claro), `secondary` (borde), `ghost`; renderiza `<a>` con `href` |
| `Section` + `SectionHeading` | landmark con `aria-labelledby`, índice "01–08" en mono |
| `Chip` | etiqueta mono para tecnologías |
| `Reveal` | wrapper de animación con `delay` opcional |
| `TechIcon` | marca oficial (simple-icons) o fallback Lucide |
| `Logo` | monograma `<JL/>` SVG con degradado de marca |

## Wireframes

```
┌──────────────────────────────────────────────┐
│ HERO (100svh)                                │
│  ● Disponible…                               │
│  JORDI LLOPIS GODINO          (halos +       │
│  › rol en mono índigo          malla sutil)  │
│  frase profesional                           │
│  [Hablemos] [Descargar CV]  gh in            │
│  ⌄                                           │
├──────────────────────────────────────────────┤
│ 01 SOBRE MÍ                                  │
│  narrativa (3 cols)   │ principios 2×2       │
│  datos rápidos (dl)   │ (tarjetas icono)     │
├──────────────────────────────────────────────┤
│ 02 EXPERIENCIA                               │
│  ●─ rol / empresa / bullets / chips          │
│  │                                           │
│  ●─ …timeline vertical                       │
├──────────────────────────────────────────────┤
│ 03 FORMACIÓN        │ 04 CERTIFICACIONES     │
│  tarjetas 2×2       │  2 tarjetas premium    │
│  (badge "En curso") │  (borde degradado,     │
│                     │   horas·fecha, PDF ↗)  │
├──────────────────────────────────────────────┤
│ 05 TECNOLOGÍAS                               │
│  tarjetas por grupo · icono + nombre + ●●●●○ │
├──────────────────────────────────────────────┤
│ 06 PRODUCTO REAL                             │
│  ┌──────────────┬──────────────┐             │
│  │ ● En producc.│ ● En desarr. │  2 tarjetas │
│  │ portada      │ portada      │  con estado,│
│  │ problema│sol │ problema│sol │  web live o │
│  │ [Visitar ↗]  │ 🔒 privado   │  candado    │
│  └──────────────┴──────────────┘             │
├──────────────────────────────────────────────┤
│ 07 PROYECTOS (académicos)                    │
│  ┌────────────┬──────────────┐               │
│  │  portada   │ título/desc  │  destacado    │
│  │  SVG       │ problema│sol │  (alternando) │
│  │            │ ▸ retos/apr. │               │
│  └────────────┴──────────────┘               │
│  □ □   cuadrícula secundaria 2 col           │
├──────────────────────────────────────────────┤
│ 08 GITHUB                                    │
│  [avatar + stats]  [barra lenguajes]         │
│  [calendario contribuciones]                 │
│  □ □ □  repos recientes                      │
├──────────────────────────────────────────────┤
│ 09 CONTACTO                                  │
│  email/copy │ formulario                     │
│  linkedin   │ nombre·email·mensaje           │
│  github     │ [Enviar]                       │
│  [CV PDF]   │                                │
├──────────────────────────────────────────────┤
│ FOOTER  logo · © · stack · redes             │
└──────────────────────────────────────────────┘
```

## Accesibilidad (WCAG 2.2 AA)

- Skip link visible con foco (`2.4.1`).
- Un `<h1>` único; secciones con `aria-labelledby` (`1.3.1`, `2.4.6`).
- Contraste AA/AAA verificado en la tabla de paleta (`1.4.3`).
- Focus visible global de 2 px índigo con offset (`2.4.7`, `2.4.11`).
- Iconos decorativos `aria-hidden`; enlaces de icono con `aria-label`; avisos "(se abre en una pestaña nueva)" en `sr-only`.
- Niveles de habilidad anunciados como texto ("nivel Avanzado, 4 de 5"), no solo puntos.
- `<details>` nativo para contenido plegable: teclado y lector de pantalla gratis.
- `prefers-reduced-motion` respetado en el 100 % de las animaciones.
