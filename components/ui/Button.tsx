import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "inverse" | "outline-inverse";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-accent",
  secondary: "border border-ink/25 bg-paper/70 text-ink hover:border-ink hover:bg-paper",
  inverse: "bg-paper text-ink hover:bg-cream",
  "outline-inverse": "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10",
};

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "children"> & {
  children: ReactNode;
  variant?: Variant;
  iconStart?: IconName;
  iconEnd?: IconName;
  size?: "md" | "sm";
};

/** Link styled as a button. All CTAs on the site navigate, so this is the only button form needed. */
export function ButtonLink({
  children,
  variant = "primary",
  iconStart,
  iconEnd,
  size = "md",
  className = "",
  ...props
}: ButtonLinkProps) {
  const sizing = size === "md" ? "min-h-12 px-6 text-[0.9375rem]" : "min-h-11 px-5 text-sm";
  return (
    <Link
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md font-medium tracking-tight transition-colors duration-200 ${sizing} ${variants[variant]} ${className}`}
      {...props}
    >
      {iconStart && <Icon name={iconStart} className="size-[1.125rem]" />}
      <span className="whitespace-nowrap">{children}</span>
      {iconEnd && (
        <Icon
          name={iconEnd}
          className="size-[1.125rem] transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
