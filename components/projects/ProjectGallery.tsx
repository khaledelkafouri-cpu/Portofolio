import type { MediaAsset, ProjectTone } from "@/content/projects";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectGallery({ items, tone }: { items: MediaAsset[]; tone: ProjectTone }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
      {items.map((media, index) => (
        <li key={`${media.label}-${index}`}>
          <ProjectMedia
            media={media}
            tone={tone}
            sizes="(min-width: 768px) 33vw, 50vw"
            className="aspect-square rounded-md"
          />
        </li>
      ))}
    </ul>
  );
}
