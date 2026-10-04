import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectMedia } from "./ProjectMedia";

/** Homepage / listing card: 1 large image + 3 supporting images. */
export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-paper shadow-card ring-1 ring-black/5">
      <div className="relative">
        <ProjectMedia
          media={project.hero}
          tone={project.tone}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10]"
        />
        {project.videoUrl && (
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="flex size-14 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm">
              <Icon name="play" className="size-5 translate-x-px fill-current" />
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3.5">
          <ProjectBadge project={project} />
          <div className="min-w-0 flex-1">
            <Heading className="font-serif text-2xl leading-tight text-ink">
              {/* Stretched link: the whole card is clickable, with a single accessible link. */}
              <Link
                href={`/work/${project.slug}`}
                className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:rounded-lg focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-accent"
              >
                {project.title}
              </Link>
            </Heading>
            <p className="mt-0.5 text-sm text-stone">{project.category}</p>
          </div>
        </div>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.slice(0, 2).map((tag) => (
            <li key={tag} className="rounded-full border border-line px-2.5 py-1 text-[0.6875rem] font-medium text-stone">
              {tag}
            </li>
          ))}
        </ul>

        <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone">{project.description}</p>

        <div className="mt-auto grid grid-cols-3 gap-2 pt-5">
          {project.supporting.map((media) => (
            <ProjectMedia
              key={media.label}
              media={media}
              tone={project.tone}
              sizes="(min-width: 1024px) 130px, 33vw"
              className="aspect-square rounded-md"
              compact
            />
          ))}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
          View project
          <Icon name="arrowRight" className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
