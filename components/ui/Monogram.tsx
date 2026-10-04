import Link from "next/link";
import { site } from "@/content/site";

/** KE monogram + wordmark. Typographic only, until a final logo file is supplied. */
export function Monogram({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-ink" : "text-paper";
  return (
    <Link href="/" className={`inline-flex min-h-11 items-center gap-3 ${color}`}>
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center border border-current font-serif text-lg leading-none tracking-[-0.06em]"
      >
        KE
      </span>
      <span className="text-[0.8125rem] font-semibold uppercase tracking-[0.28em]">
        {site.name}
      </span>
    </Link>
  );
}
