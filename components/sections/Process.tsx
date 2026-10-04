import { processSteps } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section aria-labelledby="process-title" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 xl:grid-cols-12 xl:gap-8">
        <SectionHeading
          id="process-title"
          eyebrow="How I Work"
          title="From Idea to Impact"
          className="xl:col-span-4"
        >
          <p>A simple, end-to-end process for content that looks great and keeps improving.</p>
        </SectionHeading>

        <ol className="grid gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 xl:col-span-8">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
              <span className="relative flex size-14 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-card">
                <Icon name={step.icon} className="size-6" strokeWidth={1.4} />
              </span>
              {index < processSteps.length - 1 && (
                <Icon
                  name="arrowRight"
                  className="absolute left-[calc(50%+2.25rem)] top-[1.125rem] hidden size-5 text-stone/60 lg:block"
                />
              )}
              <div className="lg:mt-4">
                <h3 className="text-base font-semibold text-ink">
                  <span className="mr-1.5 font-serif font-normal text-accent">{String(index + 1).padStart(2, "0")}</span>
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-stone">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
