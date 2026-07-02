import { site } from "@/lib/site";

/**
 * Integración con la API pública de GitHub.
 *
 * Se ejecuta solo en el servidor (React Server Components) con caché
 * incremental de 1 hora, de modo que los visitantes nunca esperan a GitHub
 * ni consumen cuota de la API. Si GitHub no responde, cada bloque devuelve
 * `null` y la sección se degrada con elegancia en lugar de romper la página.
 */

const API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
}

export interface GitHubRepo {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  pushed_at: string;
  homepage: string | null;
}

export interface LanguageStat {
  name: string;
  /** Porcentaje sobre el total de repositorios con lenguaje detectado. */
  percent: number;
  count: number;
}

export interface ContributionDay {
  date: string;
  count: number;
  /** Intensidad 0–4 según la API de contribuciones. */
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GitHubData {
  user: GitHubUser;
  topRepos: GitHubRepo[];
  languages: LanguageStat[];
  /** Contribuciones del último año; null si el servicio no responde. */
  contributions: { total: number; days: ContributionDay[] } | null;
}

function headers(): HeadersInit {
  const base: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "jordi-llopis-portfolio",
  };
  if (process.env.GITHUB_TOKEN) {
    base.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return base;
}

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: headers(),
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function computeLanguages(repos: GitHubRepo[]): LanguageStat[] {
  const counts = new Map<string, number>();
  for (const repo of repos) {
    if (!repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0);
  if (total === 0) return [];
  return [...counts.entries()]
    .map(([name, count]) => ({
      name,
      count,
      percent: Math.round((count / total) * 1000) / 10,
    }))
    .sort((a, b) => b.count - a.count);
}

async function fetchContributions(): Promise<GitHubData["contributions"]> {
  // Servicio comunitario que expone el calendario de contribuciones públicas.
  // Si deja de estar disponible, la sección oculta el calendario sin romper nada.
  const data = await fetchJson<{
    total: Record<string, number>;
    contributions: ContributionDay[];
  }>(
    `https://github-contributions-api.jogruber.de/v4/${site.githubUser}?y=last`,
  );
  if (!data || !Array.isArray(data.contributions)) return null;
  const total = Object.values(data.total ?? {}).reduce((a, b) => a + b, 0);
  return { total, days: data.contributions };
}

/** Descarga y agrega todos los datos de GitHub usados por la sección. */
export async function getGitHubData(): Promise<GitHubData | null> {
  const [user, repos] = await Promise.all([
    fetchJson<GitHubUser>(`${API}/users/${site.githubUser}`),
    fetchJson<GitHubRepo[]>(
      `${API}/users/${site.githubUser}/repos?per_page=100&sort=pushed`,
    ),
  ]);
  if (!user || !repos) return null;

  const ownRepos = repos.filter((r) => !r.fork);
  const topRepos = ownRepos
    .filter((r) => r.name.length > 2)
    .slice(0, 6);

  const contributions = await fetchContributions();

  return {
    user,
    topRepos,
    languages: computeLanguages(ownRepos),
    contributions,
  };
}
