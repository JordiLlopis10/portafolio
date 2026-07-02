import { Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-soft">
      <div className="container-site flex flex-col items-center gap-6 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo className="h-6 w-auto" />
          <p className="text-sm text-ink-faint">
            © {year} {site.name}. Diseñado y desarrollado por mí.
          </p>
          <p className="font-mono text-xs text-ink-faint">
            Next.js · TypeScript · TailwindCSS · Desplegado en Vercel
          </p>
        </div>

        <ul className="flex items-center gap-2" aria-label="Redes sociales">
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Jordi Llopis (se abre en una pestaña nueva)"
              className="inline-flex rounded-full border border-line p-2.5 text-ink-soft transition-colors hover:border-brand-strong/60 hover:text-ink"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Jordi Llopis (se abre en una pestaña nueva)"
              className="inline-flex rounded-full border border-line p-2.5 text-ink-soft transition-colors hover:border-brand-strong/60 hover:text-ink"
            >
              <Linkedin aria-hidden="true" className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              aria-label="Enviar correo a Jordi Llopis"
              className="inline-flex rounded-full border border-line p-2.5 text-ink-soft transition-colors hover:border-brand-strong/60 hover:text-ink"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
