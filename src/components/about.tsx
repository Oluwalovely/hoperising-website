import Image from "next/image";
import { about } from "@/content/company";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-rule"
    >
      <div className="page-container section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-16 xl:gap-20">
          <div className="lg:order-2">
            <Reveal>
              <h2
                id="about-heading"
                className="max-w-xl text-[31px] leading-[1.2] tracking-[-0.035em] text-forest sm:text-[38px] xl:text-[40px]"
              >
                {about.heading}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.8] text-charcoal">
                {about.introduction}
              </p>
              <p className="mt-4 max-w-xl text-base leading-[1.8] text-muted">
                {about.description}
              </p>
            </Reveal>
            <dl className="mt-8 grid grid-cols-3 gap-x-3 gap-y-6 border-t border-rule pt-6 sm:gap-x-6 lg:gap-x-4">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs text-muted sm:text-[13px]">{fact.label}</dt>
                  <dd className="mt-1 font-heading text-lg font-semibold tracking-[-0.025em] text-forest sm:text-[22px]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="min-w-0 lg:order-1">
            <div className="grid aspect-[4/3] grid-cols-2 gap-3 sm:gap-4">
              <div className="relative overflow-hidden bg-forest/10">
                <Image
                  src="/images/workplace.webp"
                  alt="Hoperising's outdoor workspace with produce laid out beside a truck"
                  fill
                  sizes="(max-width: 767px) 45vw, (max-width: 1023px) 44vw, (max-width: 1335px) 21vw, 267px"
                  className="scale-[1.03] object-cover object-[50%_65%]"
                />
              </div>
              <div className="relative overflow-hidden bg-forest/10">
                <Image
                  src="/images/workplace2.webp"
                  alt="Produce sacks and a loaded truck at Hoperising's workspace"
                  fill
                  sizes="(max-width: 767px) 45vw, (max-width: 1023px) 44vw, (max-width: 1335px) 21vw, 267px"
                  className="origin-bottom scale-[1.6] object-cover object-bottom"
                />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
