import type { ReactNode } from "react";

/** Etiqueta compacta para tecnologías y palabras clave. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-raised px-3 py-1 font-mono text-xs text-ink-soft">
      {children}
    </span>
  );
}
