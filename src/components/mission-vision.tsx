import { corporateStatements } from "@/content/company";
import { Reveal } from "./reveal";

export function MissionVision() {
  return (
    <section
      id="purpose"
      aria-labelledby="purpose-heading"
      aria-describedby="purpose-approval"
      className="section-spacing bg-forest text-ivory"
    >
      <div className="page-container">
        <Reveal>
          <h2
            id="purpose-heading"
            className="max-w-3xl text-[31px] tracking-[-0.035em] sm:text-[38px] xl:text-[40px]"
          >
            Mission, Vision &amp; Core Values
          </h2>
          <p
            id="purpose-approval"
            className="mt-5 max-w-xl border-l-2 border-gold pl-4 text-[14px] leading-relaxed text-ivory/85"
          >
            {corporateStatements.approvalNote}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-9 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="text-xl font-medium">Mission</h3>
            <p className="mt-4 max-w-xl text-[19px] leading-[1.7] tracking-[-0.01em] sm:text-[22px]">
              {corporateStatements.mission}
            </p>
          </div>
          <div className="border-t border-ivory/20 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
            <h3 className="text-xl font-medium">Vision</h3>
            <p className="mt-4 max-w-xl text-[19px] leading-[1.7] tracking-[-0.01em] sm:text-[22px]">
              {corporateStatements.vision}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/20 pt-8 lg:mt-14 lg:pt-10">
          <h3 className="text-xl font-medium">Core Values</h3>
          <p className="mt-4 max-w-4xl text-base leading-[1.8] text-ivory/85 sm:text-[18px]">
            {corporateStatements.valuesStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
