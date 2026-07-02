"use client";

import { useState, type FormEvent } from "react";
import {
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

const inputStyles =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink " +
  "placeholder:text-ink-faint transition-colors focus:border-brand-strong " +
  "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/**
 * Endpoint de envío del formulario (Formspree o compatible).
 * Si está definido, los mensajes se envían por HTTP y llegan directamente
 * al correo; si no, se recurre a `mailto:` como respaldo sin backend.
 * Configuración: ver docs/CONTENT-GUIDE.md.
 */
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type SendState = "idle" | "sending" | "sent" | "error";

/**
 * Contacto: canales directos + formulario. Con endpoint configurado envía
 * en la propia página (estado accesible vía aria-live); sin él, compone un
 * correo en el cliente del visitante.
 */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const [sendState, setSendState] = useState<SendState>("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Si el portapapeles no está disponible, el email sigue visible como texto.
    }
  };

  const sendViaMailto = (form: FormData) => {
    const name = String(form.get("nombre") ?? "");
    const from = String(form.get("email") ?? "");
    const message = String(form.get("mensaje") ?? "");

    const subject = encodeURIComponent(`Contacto desde el portfolio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${from}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    if (!FORM_ENDPOINT) {
      sendViaMailto(form);
      return;
    }

    setSendState("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setSendState("sent");
      formElement.reset();
    } catch {
      setSendState("error");
    }
  };

  return (
    <Section id="contacto">
      <SectionHeading
        sectionId="contacto"
        index="09"
        title="Contacto"
        description="¿Crees que encajo en tu equipo? Escríbeme: respondo rápido y con disponibilidad total para incorporarme."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal className="space-y-4">
          <div className="card flex items-center justify-between gap-4 p-5">
            <div className="flex min-w-0 items-center gap-4">
              <span className="rounded-full border border-line bg-raised p-2.5">
                <Mail aria-hidden="true" className="h-4 w-4 text-brand" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="block truncate text-sm text-ink hover:text-brand"
                >
                  {site.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email copiado" : "Copiar dirección de email"}
              className="rounded-full border border-line p-2.5 text-ink-soft transition-colors hover:border-brand-strong/60 hover:text-ink"
            >
              {copied ? (
                <Check aria-hidden="true" className="h-4 w-4 text-positive" />
              ) : (
                <Copy aria-hidden="true" className="h-4 w-4" />
              )}
            </button>
          </div>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-center gap-4 p-5 transition-colors hover:border-brand-strong/50"
          >
            <span className="rounded-full border border-line bg-raised p-2.5">
              <Linkedin aria-hidden="true" className="h-4 w-4 text-brand" />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                LinkedIn
              </p>
              <p className="text-sm text-ink group-hover:text-brand">
                Jordi Llopis Godino
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </p>
            </div>
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex items-center gap-4 p-5 transition-colors hover:border-brand-strong/50"
          >
            <span className="rounded-full border border-line bg-raised p-2.5">
              <Github aria-hidden="true" className="h-4 w-4 text-brand" />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                GitHub
              </p>
              <p className="text-sm text-ink group-hover:text-brand">
                @{site.githubUser}
                <span className="sr-only">(se abre en una pestaña nueva)</span>
              </p>
            </div>
          </a>

          <div className="pt-2">
            <Button
              href={site.cvPath}
              download={site.cvFileName}
              variant="secondary"
              className="w-full"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Descargar CV en PDF
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card space-y-5 p-6 md:p-8">
            {/* Asunto del correo y honeypot anti-spam (Formspree). */}
            <input
              type="hidden"
              name="_subject"
              value="Nuevo mensaje desde el portfolio"
            />
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  className={inputStyles}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="tu@empresa.com"
                  className={inputStyles}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="mb-2 block text-sm font-medium text-ink"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                rows={5}
                placeholder="Cuéntame sobre la posición o el proyecto…"
                className={`${inputStyles} resize-y`}
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={sendState === "sending"}
            >
              {sendState === "sending" ? (
                <Loader2
                  aria-hidden="true"
                  className="h-4 w-4 animate-spin motion-reduce:animate-none"
                />
              ) : (
                <Send aria-hidden="true" className="h-4 w-4" />
              )}
              {sendState === "sending" ? "Enviando…" : "Enviar mensaje"}
            </Button>

            <p role="status" aria-live="polite" className="text-center text-xs">
              {sendState === "sent" ? (
                <span className="text-positive">
                  Mensaje enviado. Te responderé lo antes posible.
                </span>
              ) : sendState === "error" ? (
                <span className="text-ink-soft">
                  No se pudo enviar. Escríbeme directamente a{" "}
                  <a href={`mailto:${site.email}`} className="text-brand underline">
                    {site.email}
                  </a>
                  .
                </span>
              ) : (
                <span className="text-ink-faint">
                  {FORM_ENDPOINT
                    ? "Tu mensaje me llega directamente al correo."
                    : "El formulario abre tu cliente de correo con el mensaje preparado."}
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
