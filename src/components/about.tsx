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
            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-rule pt-6 sm:grid-cols-3 lg:gap-x-4">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-[13px] text-muted">{fact.label}</dt>
                  <dd className="mt-1 font-heading text-[22px] font-semibold tracking-[-0.025em] text-forest">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="min-w-0 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden bg-forest/10">
              <Image
                src="/images/produce-sacks-about.webp"
                alt="Illustration of tied woven jute produce sacks on a plain floor"
                fill
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1335px) 43vw, 550px"
                className="object-cover"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
