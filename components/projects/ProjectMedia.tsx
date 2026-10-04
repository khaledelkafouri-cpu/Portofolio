import Image from "next/image";
import type { MediaAsset, ProjectTone } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";

const toneClasses: Record<ProjectTone, { surface: string; text: string }> = {
  sea: {
    surface: "bg-tone-sea bg-[radial-gradient(120%_90%_at_70%_0%,rgb(118_170_190/0.45),transparent_60%)]",
    text: "text-paper/75",
  },
  studio: {
    surface: "bg-tone-studio",
    text: "text-stone",
  },
  espresso: {
    surface: "bg-tone-espresso bg-[radial-gradient(120%_90%_at_30%_0%,rgb(196_120_80/0.4),transparent_60%)]",
    text: "text-paper/75",
  },
};

type ProjectMediaProps = {
  media: MediaAsset | MediaAsset[];
  tone: ProjectTone;
  /** Passed straight to next/image. */
  sizes: string;
  className?: string;
  compact?: boolean;
  preload?: boolean;
};

/**
 * Renders a project image slot:
 * - a single image (cropped to fill),
 * - an array of images as a cut-out line-up on the tone backdrop,
 * - or a labelled placeholder when the real asset has not been supplied yet.
 */
export function ProjectMedia({ media, tone, sizes, className = "", compact = false, preload }: ProjectMediaProps) {
  const toneStyle = toneClasses[tone];
  return (
    <div className={`relative overflow-hidden ${toneStyle.surface} ${className}`}>
      {Array.isArray(media) ? (
        <Lineup items={media} sizes={sizes} preload={preload} />
      ) : media.src ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
          style={{ objectPosition: media.position ?? "50% 50%" }}
        />
      ) : (
        <Placeholder media={media} textClass={toneStyle.text} compact={compact} />
      )}
    </div>
  );
}

function Lineup({ items, sizes, preload }: { items: MediaAsset[]; sizes: string; preload?: boolean }) {
  // Centre item is the lead character: brought forward and slightly larger.
  const lead = Math.floor(items.length / 2);
  return (
    <div className="absolute inset-0 flex items-start justify-center pt-[5%]">
      {items.map((item, index) =>
        item.src ? (
          <div
            key={item.label}
            className={`relative -mx-[3%] aspect-[3/5] shrink-0 ${
              index === lead ? "z-10 h-[150%]" : "h-[132%] translate-y-[6%]"
            }`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes={sizes}
              preload={preload && index === lead}
              className="object-contain object-top"
            />
          </div>
        ) : null,
      )}
    </div>
  );
}

function Placeholder({ media, textClass, compact }: { media: MediaAsset; textClass: string; compact: boolean }) {
  return (
    <div
      role="img"
      aria-label={`${media.alt} (image coming soon)`}
      className={`absolute inset-0 flex flex-col items-center justify-center gap-2 text-center ${textClass}`}
    >
      <Icon name="image" className={compact ? "size-4" : "size-6"} strokeWidth={1.3} />
      <span className={`px-2 font-medium leading-tight ${compact ? "text-[0.625rem]" : "text-xs tracking-wide"}`}>
        {media.label}
      </span>
      {!compact && <span className="eyebrow text-[0.5625rem] opacity-70">Image coming soon</span>}
    </div>
  );
}
