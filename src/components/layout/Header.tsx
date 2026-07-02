"use client";

import { useCallback, useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks, sections, site } from "@/lib/site";

const links = sections.filter((s) => navLinks.includes(s.id));

/**
 * Cabecera fija con desenfoque de fondo. En móvil despliega un panel
 * accesible: aria-expanded, cierre con Escape y al elegir un enlace.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line-soft bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between">
        <a
          href="#inicio"
          className="rounded-md"
          aria-label="Volver al inicio"
          onClick={close}
        >
          <Logo className="h-7 w-auto" />
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="rounded-full px-4 py-2 text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <a
            href={site.cvPath}
            download={site.cvFileName}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand-strong/60 hover:bg-raised"
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            CV
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className="border-t border-line-soft bg-canvas/95 backdrop-blur-md md:hidden"
        >
          <ul className="container-site flex flex-col gap-1 py-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block rounded-lg px-3 py-3 text-base text-ink-soft transition-colors hover:bg-surface hover:text-ink"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={site.cvPath}
                download={site.cvFileName}
                className="flex items-center gap-2 rounded-lg bg-ink px-3 py-3 text-base font-medium text-canvas"
                onClick={close}
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                Descargar CV
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
