import { company, corporateInfo } from "@/content/company";
import { OfficeAddress } from "./office-address";
import { Reveal } from "./reveal";

export function CorporateInfo() {
  return (
    <section
      id="corporate-information"
      aria-labelledby="corporate-heading"
      className="page-container section-spacing"
    >
      <Reveal>
        <h2
          id="corporate-heading"
          className="text-[31px] tracking-[-0.035em] text-forest sm:text-[38px] xl:text-[40px]"
        >
          {corporateInfo.heading}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
          {corporateInfo.introduction}
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <dl className="grid content-start gap-x-8 gap-y-7 sm:grid-cols-2">
          {corporateInfo.details.map((detail, index) => (
            <div key={detail.label} className={index === 0 ? "border-b border-rule pb-7 sm:col-span-2" : ""}>
              <dt className="text-[14px] text-muted">{detail.label}</dt>
              <dd className={`mt-2 leading-relaxed text-forest ${index === 0 ? "max-w-xl font-heading text-xl font-semibold" : "text-[17px] font-medium"}`}>
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="grid content-start gap-8 border-t border-rule pt-8 sm:grid-cols-2 lg:grid-cols-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12">
          {company.offices.map((office) => (
            <OfficeAddress key={office.label} office={office} />
          ))}
        </div>
      </div>
    </section>
  );
}
