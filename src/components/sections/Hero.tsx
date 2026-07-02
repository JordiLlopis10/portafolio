"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      aria-label="Presentación"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <motion.div
        className="container-site relative py-32"
        variants={container}
        initial={prefersReducedMotion ? false : "hidden"}
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/80 px-4 py-1.5 text-sm text-ink-soft"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
          </span>
          Disponible para nuevas oportunidades
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
        >
          <span className="text-gradient">Jordi Llopis Godino</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 font-mono text-lg text-brand md:text-xl"
        >
          {site.role} · Python & JavaScript
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#contacto" variant="primary">
            Hablemos
          </Button>
          <Button href={site.cvPath} download={site.cvFileName} variant="secondary">
            <Download aria-hidden="true" className="h-4 w-4" />
            Descargar CV
          </Button>

          <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Jordi Llopis (se abre en una pestaña nueva)"
            className="rounded-full p-2.5 text-ink-soft transition-colors hover:text-ink"
          >
            <Github aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Jordi Llopis (se abre en una pestaña nueva)"
            className="rounded-full p-2.5 text-ink-soft transition-colors hover:text-ink"
          >
            <Linkedin aria-hidden="true" className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-12 inline-flex items-center gap-2 text-sm text-ink-faint"
        >
          <MapPin aria-hidden="true" className="h-4 w-4" />
          {site.location}
        </motion.p>
      </motion.div>

      <a
        href="#sobre-mi"
        aria-label="Ir a la sección Sobre mí"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-ink-faint transition-colors hover:text-ink"
      >
        <ArrowDown
          aria-hidden="true"
          className="h-5 w-5 animate-bounce motion-reduce:animate-none"
        />
      </a>
    </section>
  );
}
