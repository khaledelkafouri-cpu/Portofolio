"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  if (href === "/#work") return pathname.startsWith("/work");
  return false;
}

/** Desktop links + mobile disclosure menu. The only client component in the header. */
export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex items-center gap-9">
          {navigation.map((item) => {
            const active = isActive(item.href, pathname);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-ink after:transition-transform ${
                    active
                      ? "text-ink after:scale-x-100"
                      : "text-stone after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="hidden md:block">
        <ButtonLink href="/#contact" size="sm" iconEnd="arrowRight">
          Let&apos;s Work Together
        </ButtonLink>
      </div>

      <button
        ref={toggleRef}
        type="button"
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-ink md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <Icon name={open ? "close" : "menu"} className="size-6" />
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        // Positioned against the sticky header (its backdrop-filter makes it the containing block).
        className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-4.25rem)] overflow-y-auto border-t border-line bg-cream px-5 pb-10 pt-6 md:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-line border-b border-line">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href, pathname) ? "page" : undefined}
                  className="flex min-h-14 items-center justify-between font-serif text-2xl text-ink"
                >
                  {item.label}
                  <Icon name="arrowRight" className="size-5 text-stone" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ButtonLink
          href="/#contact"
          iconEnd="arrowRight"
          className="mt-8 w-full"
          onClick={() => setOpen(false)}
        >
          Let&apos;s Work Together
        </ButtonLink>
      </div>
    </>
  );
}
