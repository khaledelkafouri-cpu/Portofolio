import Image from "next/image";
import type { Project } from "@/content/projects";

/** Round client/brand badge: supplied logo, otherwise initials. */
export function ProjectBadge({ project }: { project: Project }) {
  const { logo, initials } = project.badge;
  return (
    <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-paper">
      {logo?.src ? (
        // Logo artwork has generous padding; scale it up so the mark reads at badge size.
        <Image src={logo.src} alt={logo.alt} fill sizes="48px" className="scale-[1.65] object-contain" />
      ) : (
        <span aria-hidden="true" className="font-serif text-lg text-ink">
          {initials}
        </span>
      )}
    </span>
  );
}
