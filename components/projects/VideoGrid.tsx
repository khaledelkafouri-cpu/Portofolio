import Image from "next/image";
import type { VideoItem } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";

/** Cover grid for a project's best videos: cover, view count, caption; each opens the original post. */
export function VideoGrid({ videos }: { videos: VideoItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {videos.map((video) => {
        const card = (
          <>
            <span className="relative block aspect-[3/4] overflow-hidden rounded-md bg-charcoal">
              <Image
                src={video.cover}
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"
              />
              <span className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                <Icon name="eye" className="size-4" strokeWidth={2} />
                {video.views}
                <span className="sr-only">views</span>
              </span>
              {video.platform && (
                <span className="absolute right-2.5 top-2.5 rounded-full bg-black/55 px-2 py-0.5 text-[0.6875rem] font-medium text-white backdrop-blur-sm">
                  {video.platform}
                </span>
              )}
            </span>
            <span className="mt-2.5 block text-sm leading-snug text-ink">{video.title}</span>
          </>
        );
        return (
          <li key={video.cover}>
            {video.href ? (
              <a href={video.href} target="_blank" rel="noopener noreferrer" className="group block">
                {card}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <div className="group block">{card}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
