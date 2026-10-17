import { featuredProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SelectedWork() {
  return (
    <section id="work" aria-labelledby="work-title" className="dark-surface bg-charcoal py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading id="work-title" eyebrow="Selected Work" title="Projects & Collaborations" tone="dark">
          <p>
            Brands and projects I&apos;ve worked on, from my own creator channel to brand content and AI-animated
            stories.
          </p>
        </SectionHeading>

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
