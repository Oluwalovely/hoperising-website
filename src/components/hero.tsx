import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { company, hero } from "@/content/company";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="page-container pt-11 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-12 xl:gap-16">
        <Reveal>
          <p className="mb-6 text-[12px] leading-relaxed font-medium tracking-[0.1em] text-forest uppercase sm:text-[13px]">
            {hero.eyebrow}
          </p>
          <h1 id="hero-heading" className="max-w-[650px] text-[35px] leading-[1.12] tracking-[-0.045em] text-forest sm:text-[52px] lg:text-[52px] xl:text-[61px]">
            {hero.heading}
          </h1>
          <p className="mt-7 max-w-[530px] text-[16px] leading-[1.8] text-muted sm:text-[17px]">
            <span className="font-medium text-charcoal">{company.name}</span>
            {hero.description.slice(company.name.length)}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 sm:mt-9">
            <a className="button-primary" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
              <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <a className="inline-flex min-h-12 items-center gap-2 py-2 font-medium text-forest underline decoration-forest/35 underline-offset-8 transition-colors hover:decoration-forest" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
              <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
        <figure className="min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden bg-forest/10 lg:aspect-[1/1.08]">
            <Image
              src="/images/cashew-hero.webp"
              alt="Illustration of cashew nuts in their shells in open woven produce sacks"
              fill
              fetchPriority="high"
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1335px) 45vw, 565px"
              className="object-cover"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
