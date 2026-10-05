import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";

/**
 * Mobile/tablet: text, then the photo cropped on Khaled.
 * Desktop: the photo runs full-bleed behind the text, with a cream wash on the
 * left (over the open sunset sky) so the copy stays readable.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden lg:flex lg:min-h-[640px] lg:items-center xl:min-h-[720px]">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-10 pt-10 sm:px-8 sm:pt-14 lg:py-24">
        <div className="max-w-2xl lg:max-w-[46%]">
          <p className="eyebrow text-stone">{site.role}</p>
          <h1
            id="hero-title"
            className="mt-4 font-serif text-[3.25rem] leading-[0.95] tracking-[-0.02em] text-ink sm:text-7xl xl:text-[6.25rem]"
          >
            {site.name}
          </h1>
          <p className="mt-4 text-2xl font-light tracking-tight text-accent sm:text-[2rem]">{site.role}</p>
          <p className="mt-3 text-[0.9375rem] text-ink/80 sm:text-lg">
            {site.specialties.map((specialty, index) => (
              <span key={specialty}>
                {index > 0 && (
                  <span aria-hidden="true" className="mx-2 text-accent">
                    •
                  </span>
                )}
                {specialty}
              </span>
            ))}
          </p>
          <span aria-hidden="true" className="mt-7 block h-0.5 w-12 bg-accent" />
          <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-stone lg:text-ink/75">{site.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/#work" iconStart="play" iconEnd="arrowRight">
              View Work
            </ButtonLink>
            {site.cvUrl && (
              <ButtonLink href={site.cvUrl} variant="secondary" iconEnd="download" download>
                Download CV
              </ButtonLink>
            )}
          </div>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:absolute lg:inset-0 lg:-z-10 lg:aspect-auto">
        <Image
          src={site.portrait.src}
          alt={site.portrait.alt}
          fill
          preload
          sizes="100vw"
          className="object-cover object-[72%_35%] lg:object-[65%_40%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-linear-to-r from-cream from-15% via-cream/75 via-40% to-transparent to-65% lg:block"
        />
      </div>
    </section>
  );
}
