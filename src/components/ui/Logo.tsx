interface LogoProps {
  className?: string;
}

/**
 * Marca personal: monograma «JL» dentro de sintaxis de etiqueta,
 * guiño directo al oficio sin caer en el cliché.
 */
export function Logo({ className = "h-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 96 32"
      className={className}
      role="img"
      aria-label="Logotipo de Jordi Llopis"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="23"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="19"
        fontWeight="600"
        fill="url(#logo-gradient)"
      >
        {"<"}
      </text>
      <text
        x="16"
        y="23"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="19"
        fontWeight="600"
        fill="#f4f4f5"
        letterSpacing="0.5"
      >
        JL
      </text>
      <text
        x="46"
        y="23"
        fontFamily="var(--font-geist-mono), monospace"
        fontSize="19"
        fontWeight="600"
        fill="url(#logo-gradient)"
      >
        {"/>"}
      </text>
    </svg>
  );
}
