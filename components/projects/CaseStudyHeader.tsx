import Link from "next/link";
import type { Project } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";
import { ProjectBadge } from "./ProjectBadge";

export function CaseStudyHeader({ project }: { project: Project }) {
  const details = [
    { term: "Client", value: project.client },
    { term: "Role", value: project.role },
    { term: "Type", value: project.category },
    ...(project.year ? [{ term: "Year", value: project.year }] : []),
  ];

  return (
    <header className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 sm:pt-14">
      <Link
        href="/#work"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-stone transition-colors hover:text-ink"
      >
        <Icon name="arrowLeft" className="size-4" />
        All projects
      </Link>

      <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3">
            <ProjectBadge project={project} />
            <p className="eyebrow text-stone">{project.category}</p>
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-[1] tracking-[-0.015em] text-ink sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">{project.description}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          {details.map((detail) => (
            <div key={detail.term}>
              <dt className="eyebrow text-stone">{detail.term}</dt>
              <dd className="mt-1.5 text-[0.9375rem] text-ink">{detail.value}</dd>
            </div>
          ))}
          <div className="col-span-2">
            <dt className="eyebrow text-stone">Tags</dt>
            <dd className="mt-1.5 text-[0.9375rem] text-ink">{project.tags.join(" · ")}</dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
