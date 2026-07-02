import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Skills } from "@/components/sections/Skills";
import { RealProjects } from "@/components/sections/RealProjects";
import { Projects } from "@/components/sections/Projects";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { Contact } from "@/components/sections/Contact";
import { getGitHubData } from "@/lib/github";

/**
 * Página única del portfolio. Los datos de GitHub se resuelven en el
 * servidor (con caché de 1 hora), así el HTML llega completo al visitante
 * y a los buscadores.
 */
export default async function HomePage() {
  const githubData = await getGitHubData();

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Skills />
      <RealProjects />
      <Projects />
      <GitHubSection data={githubData} />
      <Contact />
    </>
  );
}
