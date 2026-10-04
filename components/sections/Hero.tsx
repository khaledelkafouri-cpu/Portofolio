import Image from "next/image";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Warm, cinematic light behind the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full bg-[radial-gradient(60%_70%_at_75%_45%,rgb(214_178_128/0.55),transparent_70%)] lg:w-3/5"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-12 lg:gap-6 lg:pt-0">
        <div className="lg:col-span-7 lg:py-24 xl:py-28">
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
          <p className="mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-stone">{site.intro}</p>

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

        <div className="relative mx-auto aspect-[1024/900] w-full max-w-md self-end sm:max-w-lg lg:col-span-5 lg:mr-0 lg:max-w-none">
          {/* Crop the lower edge of the portrait so it sits flush on the metrics band. */}
          <Image
            src={site.portrait.src}
            alt={site.portrait.alt}
            fill
            preload
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, (min-width: 640px) 512px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
