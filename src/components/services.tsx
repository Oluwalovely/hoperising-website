import { ArrowLeftRight, Search, Ship } from "lucide-react";
import { business, businessActivities } from "@/content/company";
import { Reveal } from "./reveal";

const serviceIcons = {
  sourcing: Search,
  trading: ArrowLeftRight,
  importation: Ship,
} as const;

export function Services() {
  return (
    <section
      id="business"
      aria-labelledby="business-heading"
      className="section-spacing bg-white/60"
    >
      <div className="page-container">
        <Reveal>
          <h2
            id="business-heading"
            className="text-[31px] tracking-[-0.035em] text-forest sm:text-[38px] xl:text-[40px]"
          >
            {business.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            {business.introduction}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-9 lg:mt-12 lg:grid-cols-3 lg:gap-9 xl:gap-12">
          {businessActivities.map((activity) => {
            const Icon = serviceIcons[activity.id];

            return (
              <article key={activity.id} className="border-t border-forest/20 pt-7">
                <Icon
                  size={32}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="text-forest"
                />
                <h3 className="mt-6 max-w-sm text-[22px] leading-[1.4] tracking-[-0.02em] text-forest lg:min-h-[2.8em] xl:text-[23px]">
                  {activity.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-[1.8] text-muted">
                  {activity.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
