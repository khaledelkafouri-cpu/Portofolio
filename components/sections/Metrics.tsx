import { metrics } from "@/content/site";
import { Icon } from "@/components/ui/Icon";

export function Metrics() {
  return (
    <section aria-label="Highlights" className="relative border-y border-line bg-paper">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.value} className="flex flex-col gap-3 bg-paper px-5 py-7 sm:flex-row sm:gap-4 sm:px-8 lg:py-9">
            <Icon name={metric.icon} className="size-7 shrink-0 text-ink" strokeWidth={1.4} />
            {/* Value is shown first visually; the label stays the <dt> for assistive tech. */}
            <div className="flex flex-col">
              <dt className="order-2 mt-1.5 text-[0.9375rem] font-medium text-ink">{metric.label}</dt>
              <dd className="order-1 font-serif text-[1.75rem] leading-none text-ink sm:text-3xl">{metric.value}</dd>
              <dd className="order-3 mt-1 text-[0.8125rem] leading-snug text-stone">{metric.detail}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
