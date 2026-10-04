import Link from "next/link";
import { navigation, site } from "@/content/site";
import { Monogram } from "@/components/ui/Monogram";

export function Footer() {
  return (
    <footer className="dark-surface border-t border-paper/10 bg-charcoal text-ash">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Monogram tone="light" />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-7 gap-y-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-sm transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
