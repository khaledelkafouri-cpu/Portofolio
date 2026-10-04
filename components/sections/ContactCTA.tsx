import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ContactCTA() {
  const socials = site.socials.filter((social) => social.href);

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="dark-surface relative overflow-hidden bg-charcoal text-paper"
    >
      {/* Dusk-horizon light, in place of a background photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_80%_110%,rgb(214_120_60/0.45),transparent_60%),radial-gradient(70%_50%_at_10%_120%,rgb(140_28_44/0.4),transparent_65%)]"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-ash">Let&apos;s Work Together</p>
          <h2 id="contact-title" className="mt-3 font-serif text-[2.5rem] leading-[1.05] sm:text-6xl">
            Let&apos;s Create Something Great
          </h2>
          <p className="mt-5 max-w-lg text-[1.0625rem] leading-relaxed text-ash">
            Whether it&apos;s a brand project, social media content, AI production or a new idea — I&apos;d love to
            hear from you.
          </p>
        </div>

        {(site.email || socials.length > 0) && (
          <div className="flex shrink-0 flex-col items-start gap-4">
            {site.email && (
              <ButtonLink href={`mailto:${site.email}`} variant="inverse" iconStart="mail" iconEnd="arrowRight">
                Get In Touch
              </ButtonLink>
            )}
            {socials.length > 0 && (
              <ul className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Social profiles">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href ?? undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm text-ash transition-colors hover:text-paper"
                    >
                      {social.label}
                      <Icon name="external" className="size-3.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
