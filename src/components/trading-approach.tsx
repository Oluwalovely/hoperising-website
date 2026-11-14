import { approach, tradingSteps } from "@/content/company";
import { Reveal } from "./reveal";

export function TradingApproach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
      className="section-spacing border-y border-rule bg-white/60"
    >
      <div className="page-container">
        <Reveal>
          <h2
            id="approach-heading"
            className="max-w-2xl text-[31px] tracking-[-0.035em] text-forest sm:text-[38px] xl:text-[40px]"
          >
            {approach.heading}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">
            {approach.introduction}
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-0 lg:mt-14 lg:grid-cols-4">
          {tradingSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[40px_1fr] gap-x-5 pb-8 last:pb-0 lg:block lg:pr-8 lg:pb-0 lg:last:pr-0"
            >
              {index < tradingSteps.length - 1 && (
                <span aria-hidden="true" className="absolute top-10 bottom-2 left-[14px] w-px bg-rule lg:top-[16px] lg:right-3 lg:bottom-auto lg:left-11 lg:h-px lg:w-auto" />
              )}
              <span aria-hidden="true" className="font-heading text-[24px] leading-8 font-semibold tracking-[-0.03em] text-forest">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="max-w-xs text-xl leading-snug tracking-[-0.02em] text-forest lg:mt-7">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-[15px] leading-[1.8] text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
