import Link from "next/link";
import type { ComponentProps } from "react";

export type SiteLinkProps = Omit<ComponentProps<"a">, "href"> & { href: string };

/**
 * Next.js Link, except for in-page section links ("/#work"), which render a
 * plain <a>. Link skips navigation when the URL already matches, so a second
 * click on "/#work" did nothing; the browser's own fragment navigation always
 * scrolls to the section.
 */
export function SiteLink({ href, ...props }: SiteLinkProps) {
  if (href.includes("#")) return <a href={href} {...props} />;
  return <Link href={href} {...props} />;
}
