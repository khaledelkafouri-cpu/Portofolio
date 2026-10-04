import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and collaborations by Khaled Elsawy — creator brands, AI video production and social media content for brands.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section aria-labelledby="work-index-title" className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16">
        <p className="eyebrow text-stone">Selected Work</p>
        <h1 id="work-index-title" className="mt-3 font-serif text-5xl leading-[1] text-ink sm:text-7xl">
          Projects &amp; Collaborations
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone">
          Creator content, commercial social campaigns and AI-powered production.
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </section>
      <ContactCTA />
    </>
  );
}
