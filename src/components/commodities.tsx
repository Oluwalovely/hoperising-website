import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { commodities, commoditySection } from "@/content/company";
import { Reveal } from "./reveal";

export function Commodities() {
  const [cashew, soya, otherProduce] = commodities;

  return (
    <section
      id="commodities"
      aria-labelledby="commodities-heading"
      className="page-container section-spacing"
    >
      <Reveal>
        <h2
          id="commodities-heading"
          className="text-[31px] tracking-[-0.035em] text-forest sm:text-[38px] xl:text-[40px]"
        >
          {commoditySection.heading}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
          {commoditySection.introduction}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-9 md:grid-cols-2 md:gap-8 lg:mt-12 lg:gap-10">
        {[cashew, soya].map((commodity) => (
          <article key={commodity.name}>
            <div className="relative aspect-[4/3] overflow-hidden bg-forest/10">
              <Image
                src={commodity.image}
                alt={commodity.imageAlt}
                fill
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1335px) 45vw, 600px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-6 text-[25px] tracking-[-0.025em] text-forest sm:text-[28px]">
              {commodity.name}
            </h3>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">
              {commodity.description}
            </p>
          </article>
        ))}
      </div>
      <p className="mt-6 text-[12px] leading-relaxed text-muted">
        {commoditySection.imageCaption}
      </p>

      <div className="mt-10 flex flex-col items-start justify-between gap-6 border-t border-rule pt-8 md:flex-row md:items-center md:gap-10">
        <div className="max-w-xl">
          <h3 className="text-xl leading-snug tracking-[-0.02em] text-forest sm:text-[22px]">
            {otherProduce.name}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-muted">
            {otherProduce.description}
          </p>
        </div>
        <a href={commoditySection.action.href} className="inline-flex min-h-12 shrink-0 items-center gap-3 py-2 font-medium text-forest underline decoration-forest/35 underline-offset-8 hover:decoration-forest">
          {commoditySection.action.label}
          <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
