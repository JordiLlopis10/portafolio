import type { Project } from "@/types/content";

/**
 * Proyectos reales (sección «Producto real»): con clientes o usuarios de
 * verdad, en producción o en desarrollo activo. El campo `status` pinta la
 * insignia de estado; si `repo` se omite, la tarjeta indica que el código
 * es privado.
 */
export const realProjects: Project[] = [
  {
    slug: "detalls-de-patch",
    title: "Detalls de Patch",
    category: "Full-Stack · Negocio real",
    year: "2025 — actualidad",
    image: "/projects/detalls-de-patch.svg",
    status: "En producción",
    description:
      "Web de un negocio real de detalles y manualidades personalizadas en Orba (Alicante): catálogo, reserva online de artículos sin compromiso de pago y SEO local. Nació como mi TFG de DAW y hoy da servicio al negocio en detallsdepatch.es.",
    problem:
      "Un negocio artesanal necesitaba presencia online y un canal para apartar artículos, sin la complejidad ni los costes de un e-commerce completo con pasarela de pago.",
    solution:
      "SPA en Vue (Vite) sobre una API con autenticación JWT y MySQL. Sistema de reservas «te lo guardamos sin pago», SEO local con datos estructurados de LocalBusiness, Open Graph y presencia en redes integrada.",
    challenges: [
      "Llevar un proyecto académico a producción real: dominio, hosting, contenidos y mantenimiento.",
      "Diseñar una reserva sin pago que fuera sencilla para clientas no técnicas.",
      "SEO local desde cero: datos estructurados, metadatos y posicionamiento del negocio en su zona.",
      "Autenticación JWT y CORS entre la SPA y la API.",
    ],
    learnings: [
      "Lo que separa un TFG de un producto: rendimiento, SEO, contenidos y soporte continuo.",
      "Recoger requisitos de un cliente real y traducirlos a funcionalidades concretas.",
      "El valor del SEO técnico: la web posiciona con JSON-LD de negocio local y metadatos cuidados.",
    ],
    results:
      "En producción y en uso real por el negocio. Es la mejor prueba de que puedo llevar una idea desde cero hasta una web funcionando para usuarios de verdad.",
    tech: ["Vue.js", "Vite", "Flask", "MySQL", "JWT", "SEO"],
    demo: "https://www.detallsdepatch.es",
    featured: true,
  },
  {
    slug: "thebesthome",
    title: "TheBestHome — Plataforma Inmobiliaria",
    category: "Full-Stack · Django",
    year: "2026",
    image: "/projects/inmobiliaria.svg",
    status: "En desarrollo",
    description:
      "Plataforma inmobiliaria premium internacional con Django 5 y Python 3.13: catálogo multiidioma (es · en · fr · ru · nl), CRM propio con pipeline de leads, importadores de portales externos y SEO internacional como prioridad de diseño.",
    problem:
      "Una inmobiliaria con clientela internacional necesita publicar su cartera en cinco idiomas, capturar y hacer seguimiento de cada lead, y sincronizar propiedades desde portales externos — sin depender de un marketplace de terceros.",
    solution:
      "Arquitectura Django por capas (services/selectors, vistas finas, signals entre apps) sobre PostgreSQL y Redis. Celery para importaciones programadas y geocoding, CRM con máquina de estados de 7 fases, i18n con slugs traducidos por idioma y SEO internacional: hreflang, sitemaps por idioma y JSON-LD de RealEstateListing. Docker + Nginx + Gunicorn.",
    challenges: [
      "i18n de verdad: slugs por idioma con transliteración cirílico→latino y hreflang/canonical sin contenido duplicado.",
      "Importadores idempotentes multi-formato (XML/CSV/JSON/REST) con patrón Strategy/Adapter para cada portal (Kyero, Inmovilla…).",
      "CRM con transiciones de estado validadas y timeline auditable de cada lead.",
      "Bajo acoplamiento entre apps: comunicación por signals y services públicos, nunca imports circulares.",
    ],
    learnings: [
      "Diseñar la arquitectura antes de escribir código: documento de arquitectura completo (capas, ERD, flujos de datos) aprobado antes de la primera línea.",
      "Tareas asíncronas con Celery y Redis: importaciones programadas, geocoding masivo y reintentos con backoff.",
      "Seguridad OWASP aplicada: permisos por rol, rate limiting, sanitización de datos importados y configuración endurecida.",
    ],
    results:
      "MVP en desarrollo activo por fases (0–8), con calidad de proyecto profesional: ruff, mypy, pytest, pre-commit y Conventional Commits desde el primer día.",
    tech: ["Python 3.13", "Django 5", "PostgreSQL", "Celery", "Redis", "HTMX", "Docker", "Cloudinary"],
    featured: true,
  },
];

/**
 * Proyectos académicos y de aprendizaje.
 *
 * Para añadir uno: copia un objeto, edítalo y añade una portada en
 * `public/projects/` (SVG o imagen 1200×675). `featured: true` lo muestra
 * en tarjeta grande; `false`, en la cuadrícula secundaria.
 */
export const projects: Project[] = [
  {
    slug: "payment-gateway-api",
    title: "Payment Gateway API",
    category: "Backend · API REST",
    year: "2026",
    image: "/projects/payment-gateway.svg",
    description:
      "API REST con Django REST Framework que centraliza pasarelas de pago, con Stripe como proveedor activo y arquitectura preparada para PayPal y Redsys.",
    problem:
      "Integrar pagos en cada aplicación desde cero es repetitivo y delicado: cada pasarela tiene su SDK, sus estados y sus errores, y un fallo en un cobro afecta directamente al negocio.",
    solution:
      "Una capa central que unifica proveedores, transacciones y auditoría: pagos server-to-server con PaymentIntent, pedidos por redirección con Stripe Checkout, webhooks firmados con HMAC para confirmar cobros y una máquina de estados explícita (pending → processing → completed / failed / cancelled → refunded).",
    challenges: [
      "Confirmar pagos de forma fiable con webhooks asíncronos y verificación de firma HMAC.",
      "Modelar una máquina de estados que impida transiciones inválidas entre estados de una transacción.",
      "Diseñar un historial parametrizado: filtros por proveedor, estado, moneda, importes y rangos de fechas.",
      "Registrar incidencias (impagos, errores de conexión, devoluciones) asociadas a cada transacción.",
    ],
    learnings: [
      "Django REST Framework en profundidad: autenticación por token, serializers, filtros con django-filter.",
      "Cómo funciona un pago real por dentro: intents, checkout por redirección, reembolsos y callbacks.",
      "Seguridad en integraciones: verificación de firmas, variables de entorno con python-decouple.",
    ],
    results:
      "Proyecto final intermodular del Curso de Especialización en Python (IES Font de Sant Lluís), con documentación completa y estructura por apps con responsabilidades separadas.",
    tech: ["Python", "Django 5", "Django REST Framework", "Stripe", "SQLite", "django-filter"],
    repo: "https://github.com/JordiLlopis10/proyecto_adding",
    featured: true,
  },
  {
    slug: "humanometro",
    title: "Humanómetro 2.0",
    category: "Frontend · SPA",
    year: "2025",
    image: "/projects/humanometro.svg",
    description:
      "Aplicación web interactiva construida con Vue y desplegada en Vercel con integración continua desde GitHub.",
    problem:
      "Construir una SPA dinámica con componentes reutilizables y publicarla con un flujo de despliegue profesional.",
    solution:
      "SPA con Vue CLI organizada en componentes, con linting automático y despliegue continuo en Vercel: cada push a main publica la nueva versión.",
    challenges: [
      "Organizar la aplicación en componentes reutilizables con props y eventos.",
      "Configurar el pipeline de build y despliegue en Vercel.",
    ],
    learnings: [
      "El ciclo completo de una SPA: desarrollo local, build de producción y hosting.",
      "Buenas prácticas de estructura en proyectos Vue.",
    ],
    tech: ["Vue.js", "JavaScript", "Vercel"],
    repo: "https://github.com/JordiLlopis10/humanometro-2.0-main",
    demo: "https://humanometro-2-0-main.vercel.app",
    featured: false,
  },
  {
    slug: "gestion-biblioteca",
    title: "Sistema de Gestión de Biblioteca",
    category: "Backend · Python",
    year: "2026",
    image: "/projects/biblioteca.svg",
    description:
      "Sistema completo de gestión bibliotecaria en Python: libros, usuarios, préstamos, multas automáticas por retraso e importación/exportación de datos.",
    problem:
      "Administrar una biblioteca implica catálogo, usuarios, préstamos y sanciones: un dominio con reglas de negocio reales que hay que modelar con rigor.",
    solution:
      "Aplicación en Python puro (sin dependencias externas) con gestión de libros por ISBN, control de préstamos y devoluciones, cálculo automático de multas y persistencia con importación/exportación de datos.",
    challenges: [
      "Modelar las reglas de negocio: plazos, retrasos y cálculo de multas.",
      "Diseñar la persistencia y la importación/exportación sin base de datos externa.",
    ],
    learnings: [
      "Programación orientada a objetos aplicada a un dominio real.",
      "Escribir una guía de usuario clara: la documentación es parte del producto.",
    ],
    tech: ["Python", "POO", "JSON"],
    repo: "https://github.com/JordiLlopis10/projectefinal_biblioteca",
    featured: false,
  },
  {
    slug: "apirest-mongo",
    title: "API REST con Flask y MongoDB",
    category: "Backend · API REST",
    year: "2025",
    image: "/projects/apirest-mongo.svg",
    description:
      "API REST con operaciones CRUD completas sobre MongoDB, construida con Flask como ejercicio de integración con bases de datos documentales.",
    problem:
      "Exponer una base de datos documental a través de una API HTTP bien estructurada, con rutas y códigos de estado correctos.",
    solution:
      "API en Flask con endpoints CRUD sobre colecciones de MongoDB, separando rutas, acceso a datos y validación.",
    challenges: [
      "Trabajar con documentos y ObjectId frente al modelo relacional habitual.",
      "Devolver respuestas y códigos de estado HTTP coherentes en cada operación.",
    ],
    learnings: [
      "Diferencias prácticas entre bases de datos relacionales y documentales.",
      "Diseño de endpoints REST predecibles.",
    ],
    tech: ["Python", "Flask", "MongoDB"],
    repo: "https://github.com/JordiLlopis10/apirest-mongo",
    featured: false,
  },
  {
    slug: "blackjack",
    title: "Blackjack en Python",
    category: "Lógica · Juego",
    year: "2026",
    image: "/projects/blackjack.svg",
    description:
      "Implementación del juego de cartas Blackjack en Python: reglas completas, gestión del mazo y lógica de la banca.",
    problem:
      "Implementar las reglas reales de un juego —turnos, apuestas, condiciones de victoria— es un ejercicio de lógica y de diseño de estados.",
    solution:
      "Juego de consola con POO: clases para mazo, mano y jugador, control de turnos y reglas de la banca (plantarse en 17, as como 1 u 11).",
    challenges: [
      "Modelar el valor variable del as y las condiciones de blackjack.",
      "Mantener el estado de la partida limpio entre rondas.",
    ],
    learnings: [
      "Descomposición de un problema en clases con responsabilidades claras.",
      "Testear lógica de juego con casos límite.",
    ],
    tech: ["Python", "POO"],
    repo: "https://github.com/JordiLlopis10/blackjack",
    featured: false,
  },
];
