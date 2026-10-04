import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="dark-surface bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="work-title" eyebrow="Selected Work" title="Projects & Collaborations" tone="dark">
            <p>
              A selection of brands and projects I&apos;ve worked on — from creator content to commercial social
              campaigns and AI-powered production.
            </p>
          </SectionHeading>
          <ButtonLink href="/work" variant="outline-inverse" size="sm" iconEnd="arrowRight" className="self-start lg:self-auto">
            View All Work
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 3).map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
