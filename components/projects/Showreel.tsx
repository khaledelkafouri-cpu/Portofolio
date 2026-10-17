"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { Showreel as ShowreelData } from "@/content/projects";
import { Icon } from "@/components/ui/Icon";

type ShowreelProps = {
  showreel: ShowreelData;
  /** Accessible name, e.g. "AlexFisher showreel". */
  label: string;
  className?: string;
};

/**
 * Muted, looping showreel for a project card. Plays only while on screen, shows
 * the whole frame over a blurred copy of its poster, and starts paused for
 * visitors who prefer reduced motion.
 */
export function Showreel({ showreel, label, className = "" }: ShowreelProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion, () => false);
  // The visitor's own play/pause choice; until they make one, reduced motion decides.
  const [choice, setChoice] = useState<boolean | null>(null);
  const wantsPlay = choice ?? !reduceMotion;
  const setWantsPlay = (value: boolean) => setChoice(value);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!wantsPlay) {
      video.pause();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => setWantsPlay(false));
        else video.pause();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [wantsPlay]);

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <Image
        src={showreel.poster}
        alt=""
        fill
        sizes="200px"
        className="scale-110 object-cover opacity-60 blur-2xl"
      />
      <video
        ref={videoRef}
        src={showreel.src}
        poster={showreel.poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        className="absolute inset-0 size-full object-contain"
      />

      <div className="absolute bottom-3 right-3 flex gap-2">
        <ControlButton
          label={wantsPlay ? `Pause ${label}` : `Play ${label}`}
          icon={wantsPlay ? "pause" : "play"}
          onClick={() => setWantsPlay(!wantsPlay)}
        />
        <ControlButton
          label={muted ? `Unmute ${label}` : `Mute ${label}`}
          icon={muted ? "volumeOff" : "volume"}
          onClick={() => {
            setMuted((value) => !value);
            if (muted) setWantsPlay(true);
          }}
        />
      </div>
    </div>
  );
}

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function prefersReducedMotion() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function ControlButton({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: "play" | "pause" | "volume" | "volumeOff";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full bg-ink/60 text-paper backdrop-blur-sm transition-colors hover:bg-ink/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
    >
      <Icon name={icon} className={`size-4 ${icon === "play" ? "translate-x-px fill-current" : ""}`} strokeWidth={2} />
    </button>
  );
}
