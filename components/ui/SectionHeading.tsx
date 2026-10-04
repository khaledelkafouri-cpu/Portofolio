import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={className}>
      <p className={`eyebrow ${dark ? "text-ash" : "text-stone"}`}>{eyebrow}</p>
      <h2
        id={id}
        className={`mt-3 font-serif text-[2.25rem] leading-[1.05] tracking-[-0.01em] sm:text-5xl ${dark ? "text-paper" : "text-ink"}`}
      >
        {title}
      </h2>
      {children && (
        <div className={`mt-4 max-w-md text-[0.9375rem] leading-relaxed ${dark ? "text-ash" : "text-stone"}`}>
          {children}
        </div>
      )}
    </div>
  );
}
