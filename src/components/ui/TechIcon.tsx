import {
  siPython,
  siJavascript,
  siTypescript,
  siHtml5,
  siCss,
  siDjango,
  siFlask,
  siNodedotjs,
  siStripe,
  siVuedotjs,
  siReact,
  siTailwindcss,
  siFigma,
  siMysql,
  siSqlite,
  siMongodb,
  siGit,
  siGithub,
  siVercel,
  siLinux,
  siClaude,
  siOpenai,
  siGithubcopilot,
  type SimpleIcon,
} from "simple-icons";
import {
  AppWindow,
  Bot,
  Code2,
  Database,
  SearchCheck,
  Sparkles,
  Webhook,
  type LucideIcon,
} from "lucide-react";

/**
 * Icono de tecnología: usa la marca oficial de simple-icons cuando existe
 * y un icono neutro de Lucide como alternativa (algunas marcas, como las
 * de Microsoft, no están disponibles en simple-icons).
 */

const brandIcons: Record<string, SimpleIcon> = {
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  html: siHtml5,
  css: siCss,
  django: siDjango,
  flask: siFlask,
  nodejs: siNodedotjs,
  stripe: siStripe,
  vue: siVuedotjs,
  react: siReact,
  tailwind: siTailwindcss,
  figma: siFigma,
  mysql: siMysql,
  sqlite: siSqlite,
  mongodb: siMongodb,
  git: siGit,
  github: siGithub,
  vercel: siVercel,
  linux: siLinux,
  claude: siClaude,
  openai: siOpenai,
  copilot: siGithubcopilot,
};

const fallbackIcons: Record<string, LucideIcon> = {
  sql: Database,
  api: Webhook,
  vscode: Code2,
  windows: AppWindow,
  agents: Bot,
  prompt: Sparkles,
  "ai-seo": SearchCheck,
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "h-5 w-5" }: TechIconProps) {
  const brand = brandIcons[name];
  if (brand) {
    return (
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = fallbackIcons[name] ?? Code2;
  return <Fallback aria-hidden="true" className={className} />;
}
