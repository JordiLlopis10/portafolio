import Image from "next/image";
import {
  ArrowUpRight,
  BookMarked,
  Flame,
  GitCommitHorizontal,
  Users,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import type { GitHubData, GitHubRepo } from "@/lib/github";

/** Colores convencionales de lenguaje (inspirados en los de GitHub). */
const languageColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Vue: "#41b883",
  HTML: "#e34c26",
  CSS: "#663399",
  "Jupyter Notebook": "#DA5B0B",
};

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  month: "short",
  year: "numeric",
});

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex h-full flex-col p-5 transition-colors duration-300 hover:border-brand-strong/50"
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-mono text-sm font-medium text-ink group-hover:text-brand">
          {repo.name}
        </h4>
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-ink-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
        />
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
        {repo.description ?? "Repositorio en GitHub."}
      </p>
      <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint">
        {repo.language ? (
          <span className="inline-flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: languageColors[repo.language] ?? "#71717a" }}
            />
            {repo.language}
          </span>
        ) : null}
        <span>
          Actualizado {dateFormatter.format(new Date(repo.pushed_at))}
        </span>
      </div>
      <span className="sr-only">(se abre en una pestaña nueva)</span>
    </a>
  );
}

function ContributionCalendar({
  contributions,
}: {
  contributions: NonNullable<GitHubData["contributions"]>;
}) {
  // Últimas 26 semanas en columnas de 7 días, estilo calendario de GitHub.
  const days = contributions.days.slice(-26 * 7);
  const weeks: (typeof days)[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  const levelColor = ["#1c1c22", "#312e81", "#4338ca", "#6366f1", "#a5b4fc"];

  return (
    <figure className="card overflow-x-auto p-6">
      <figcaption className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
        <GitCommitHorizontal aria-hidden="true" className="h-4 w-4" />
        Actividad de los últimos 6 meses
      </figcaption>
      <svg
        role="img"
        aria-label={`Calendario de contribuciones: ${contributions.total} contribuciones en el último año`}
        viewBox={`0 0 ${weeks.length * 14} ${7 * 14}`}
        className="h-24 w-full min-w-[28rem]"
        preserveAspectRatio="xMidYMid meet"
      >
        {weeks.map((week, x) =>
          week.map((day, y) => (
            <rect
              key={day.date}
              x={x * 14}
              y={y * 14}
              width={11}
              height={11}
              rx={2.5}
              fill={levelColor[day.level] ?? levelColor[0]}
            >
              <title>{`${day.date}: ${day.count} contribuciones`}</title>
            </rect>
          )),
        )}
      </svg>
    </figure>
  );
}

interface GitHubSectionProps {
  data: GitHubData | null;
}

/**
 * Sección GitHub. Recibe los datos ya resueltos en el servidor; si la API
 * no respondió, muestra una versión mínima con enlace directo al perfil.
 */
export function GitHubSection({ data }: GitHubSectionProps) {
  return (
    <Section id="github">
      <SectionHeading
        sectionId="github"
        index="08"
        title="GitHub"
        description="Mi actividad real: repositorios, lenguajes y contribuciones, directamente de la API de GitHub."
      />

      {data ? (
        <div className="space-y-6">
          <Reveal>
            <div className="card flex flex-col gap-6 p-6 sm:flex-row sm:items-center md:p-8">
              <Image
                src={data.user.avatar_url}
                alt={`Avatar de ${site.name} en GitHub`}
                width={72}
                height={72}
                className="rounded-full border border-line"
              />
              <div className="flex-1">
                <h3 className="font-mono text-base font-medium text-ink">
                  @{data.user.login}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  En GitHub desde{" "}
                  {new Date(data.user.created_at).getFullYear()} · construyendo
                  en público
                </p>
              </div>
              <dl className="grid grid-cols-3 gap-6 text-center sm:text-left">
                <div>
                  <dt className="flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-faint sm:justify-start">
                    <BookMarked aria-hidden="true" className="h-3.5 w-3.5" />
                    Repos
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-ink">
                    {data.user.public_repos}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-faint sm:justify-start">
                    <Users aria-hidden="true" className="h-3.5 w-3.5" />
                    Followers
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-ink">
                    {data.user.followers}
                  </dd>
                </div>
                <div>
                  <dt className="flex items-center justify-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-faint sm:justify-start">
                    <Flame aria-hidden="true" className="h-3.5 w-3.5" />
                    Commits/año
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-ink">
                    {data.contributions ? data.contributions.total : "—"}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {data.languages.length > 0 ? (
            <Reveal>
              <div className="card p-6 md:p-8">
                <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-ink-faint">
                  Distribución de lenguajes
                </h3>
                <div
                  className="flex h-2.5 w-full overflow-hidden rounded-full"
                  role="img"
                  aria-label={`Lenguajes: ${data.languages
                    .map((l) => `${l.name} ${l.percent}%`)
                    .join(", ")}`}
                >
                  {data.languages.map((lang) => (
                    <span
                      key={lang.name}
                      style={{
                        width: `${lang.percent}%`,
                        backgroundColor: languageColors[lang.name] ?? "#71717a",
                      }}
                    />
                  ))}
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {data.languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="inline-flex items-center gap-2 text-sm text-ink-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor: languageColors[lang.name] ?? "#71717a",
                        }}
                      />
                      {lang.name}
                      <span className="font-mono text-xs text-ink-faint">
                        {lang.percent}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}

          {data.contributions ? (
            <Reveal>
              <ContributionCalendar contributions={data.contributions} />
            </Reveal>
          ) : null}

          <Reveal>
            <h3 className="mb-4 mt-2 font-mono text-xs uppercase tracking-widest text-ink-faint">
              Repositorios con actividad reciente
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.topRepos.map((repo) => (
                <RepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          </Reveal>

          <Reveal className="pt-4 text-center">
            <Button
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Ver perfil completo en GitHub
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      ) : (
        <Reveal>
          <div className="card p-8 text-center">
            <p className="text-ink-soft">
              La actividad de GitHub no está disponible en este momento.
            </p>
            <div className="mt-6">
              <Button
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Visitar mi GitHub
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      )}
    </Section>
  );
}
