/**
 * Sección «Sobre mí»: narrativa personal y principios de trabajo.
 */

export const about = {
  /** Párrafos de la narrativa principal. */
  paragraphs: [
    "Soy Jordi, desarrollador full-stack formado en Desarrollo de Aplicaciones Web y actualmente especializándome en desarrollo de aplicaciones con Python. Empecé montando y reparando equipos como técnico de sistemas, y esa base —entender qué pasa por debajo— sigue marcando cómo escribo software hoy.",
    "Me muevo cómodo en los dos lados de la aplicación: diseño APIs REST con Django y Flask, modelo bases de datos relacionales y documentales, y construyo interfaces con Vue y JavaScript. Mi último proyecto integra pagos reales con Stripe: webhooks firmados, máquina de estados y todo lo que un pago en producción exige.",
    "Lo que me mueve es simple: convertir un problema real en una herramienta que funcione, y que el código que queda detrás se pueda leer, mantener y ampliar. Por eso me importan las buenas prácticas, el control de versiones desde el primer commit y la documentación que de verdad ayuda.",
    "Busco mi primera posición como desarrollador en un equipo donde pueda aportar desde el primer día, aprender de gente con más experiencia y crecer construyendo producto de verdad. Disponibilidad total e incorporación inmediata.",
  ],
  /** Principios que se muestran junto a la narrativa. */
  principles: [
    {
      icon: "code",
      title: "Código que se puede leer",
      text: "Nombres claros, funciones cortas y commits atómicos. El código se escribe una vez y se lee cientos de veces.",
    },
    {
      icon: "layers",
      title: "Del dato a la interfaz",
      text: "Pienso la aplicación completa: modelo de datos, API, interfaz. Cada capa con su responsabilidad.",
    },
    {
      icon: "target",
      title: "Orientado al problema",
      text: "La tecnología es el medio. Primero entiendo qué necesita resolver el usuario y después elijo la herramienta.",
    },
    {
      icon: "trending-up",
      title: "Aprendizaje constante",
      text: "Cada proyecto me exige algo nuevo: pagos con Stripe, JWT, webhooks. Aprender rápido es parte del oficio.",
    },
  ],
  /** Datos rápidos que acompañan la sección. */
  facts: [
    { label: "Ubicación", value: "Valencia, España" },
    { label: "Formación", value: "DAW + Especialización Python" },
    { label: "Idiomas", value: "Castellano y valenciano (nativo), inglés (B1/B2)" },
    { label: "Disponibilidad", value: "Total — incorporación inmediata" },
  ],
} as const;
