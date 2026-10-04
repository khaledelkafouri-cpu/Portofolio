import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNextProject, getProject, projects } from "@/content/projects";
import { CaseStudyHeader } from "@/components/projects/CaseStudyHeader";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Icon } from "@/components/ui/Icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const image = project.hero;
  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${project.category}`,
      description: project.description,
      url: `/work/${project.slug}`,
      ...(image.src ? { images: [{ url: image.src, alt: image.alt }] } : {}),
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(project.slug);
  const sections = project.caseStudySections ?? [];
  const gallery = [...project.supporting, ...(project.gallery ?? [])];
  const links = [
    ...(project.videoUrl ? [{ label: "Watch the video", href: project.videoUrl }] : []),
    ...(project.externalUrl ? [{ label: "Visit website", href: project.externalUrl }] : []),
    ...(project.links ?? []),
  ];

  return (
    <>
      <article>
        <CaseStudyHeader project={project} />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ProjectMedia
            media={project.hero}
            tone={project.tone}
            preload
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="aspect-video rounded-lg"
          />
        </div>

        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-7">
            {sections.length > 0 ? (
              sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl text-ink sm:text-4xl">{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="mt-4 leading-relaxed text-stone">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))
            ) : (
              <section>
                <h2 className="font-serif text-3xl text-ink sm:text-4xl">Overview</h2>
                <p className="mt-4 leading-relaxed text-stone">{project.description}</p>
              </section>
            )}
            <p className="border-l-2 border-accent pl-4 text-sm text-stone">
              The full case study for this project is being written — more detail, process and results coming soon.
            </p>
          </div>

          {links.length > 0 && (
            <aside aria-labelledby="links-title" className="lg:col-span-4 lg:col-start-9">
              <h2 id="links-title" className="eyebrow text-stone">
                Links
              </h2>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center justify-between rounded-md border border-line px-4 text-sm font-medium text-ink transition-colors hover:border-ink"
                    >
                      {link.label}
                      <Icon name="external" className="size-4" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        <section aria-labelledby="gallery-title" className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
          <h2 id="gallery-title" className="eyebrow text-stone">
            Gallery
          </h2>
          <div className="mt-5">
            <ProjectGallery items={gallery} tone={project.tone} />
          </div>
        </section>

        <nav aria-label="Next project" className="border-t border-line">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-10 sm:px-8"
          >
            <span>
              <span className="eyebrow block text-stone">Next project</span>
              <span className="mt-2 block font-serif text-3xl text-ink sm:text-4xl">{next.title}</span>
            </span>
            <Icon name="arrowRight" className="size-7 text-ink transition-transform group-hover:translate-x-1" />
          </Link>
        </nav>
      </article>
      <ContactCTA />
    </>
  );
}
