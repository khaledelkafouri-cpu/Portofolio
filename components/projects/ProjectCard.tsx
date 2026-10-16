import type { Project } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";
import { ProjectBadge } from "./ProjectBadge";
import { ProjectMedia } from "./ProjectMedia";
import { Showreel } from "./Showreel";

/** Homepage card: the project's showreel (or hero image until one is supplied) and its top video. */
export function ProjectCard({ project }: { project: Project }) {
  const { topVideo } = project;
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg bg-paper shadow-card ring-1 ring-black/5">
      {project.showreel ? (
        <Showreel showreel={project.showreel} label={`${project.title} showreel`} className="aspect-[4/5]" />
      ) : (
        <ProjectMedia
          media={project.hero}
          tone={project.tone}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[4/5]"
        />
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start gap-3.5">
          <ProjectBadge project={project} />
          <div className="min-w-0 flex-1">
            <h3 className="font-serif text-2xl leading-tight text-ink">{project.title}</h3>
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

        {topVideo?.href && (
          <div className="mt-auto pt-5">
            <a
              href={topVideo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-t border-line pt-5 text-sm text-ink"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                <Icon name="play" className="size-3.5 translate-x-px fill-current" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium group-hover:underline">Watch top video</span>
                <span className="block truncate text-stone">
                  {topVideo.views} views · {topVideo.title}
                </span>
              </span>
              <Icon name="external" className="size-4 shrink-0 text-stone" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
