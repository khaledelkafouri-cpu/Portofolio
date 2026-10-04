import { clientFocus } from "@/content/site";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="eyebrow text-stone">About</p>
          <h2 id="about-title" className="mt-3 font-serif text-[1.75rem] leading-[1.2] text-ink sm:text-[2.5rem]">
            {clientFocus.statement}
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-stone">
            I&apos;ve been creating content since 2020 — building an audience of 600K+ across YouTube, Facebook and
            Instagram — and hold an MBA in Digital Marketing from the University of East London. I bring strategy,
            production, publishing and AI-assisted workflows together in one place.
          </p>
        </div>

        <div className="grid gap-8 self-end sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:border-l lg:border-line lg:pl-10">
          <div>
            <h3 className="eyebrow text-stone">Who I work with</h3>
            <ul className="mt-4 space-y-2.5">
              {clientFocus.primary.map((item) => (
                <li key={item} className="flex items-center gap-3 text-ink">
                  <span aria-hidden="true" className="h-px w-4 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="eyebrow text-stone">Also</h3>
            <ul className="mt-4 space-y-2.5">
              {clientFocus.secondary.map((item) => (
                <li key={item} className="flex items-center gap-3 text-stone">
                  <span aria-hidden="true" className="h-px w-4 bg-line" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
