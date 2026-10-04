import { skillGroups } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SkillsTools() {
  return (
    <section aria-labelledby="skills-title" className="border-t border-line bg-paper py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 xl:grid-cols-12 xl:gap-8">
        <SectionHeading id="skills-title" eyebrow="Tools I Use" title="Core Skills & Tools" className="xl:col-span-4">
          <p>Industry-standard production tools alongside modern AI — organised by what they&apos;re used for.</p>
        </SectionHeading>

        <ul className="grid gap-4 sm:grid-cols-2 xl:col-span-8">
          {skillGroups.map((group) => (
            <li key={group.title} className="rounded-lg border border-line bg-cream/60 p-5 sm:p-6">
              <h3 className="flex items-center gap-3 text-[0.9375rem] font-semibold text-ink">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-paper">
                  <Icon name={group.icon} className="size-[1.125rem]" />
                </span>
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-paper px-3 py-1.5 text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
