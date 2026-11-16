import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { company, contact } from "@/content/company";
import { OfficeAddress } from "./office-address";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-spacing border-t border-rule bg-white/60"
    >
      <div className="page-container">
        <Reveal>
          <h2
            id="contact-heading"
            className="text-[31px] tracking-[-0.035em] text-forest sm:text-[38px] xl:text-[40px]"
          >
            {contact.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
            {contact.introduction}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
            {contact.enquiryGuidance}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="min-w-0">
            <h3 className="text-[14px] font-medium text-muted">Email</h3>
            <a
              href={company.emailHref}
              className="mt-2 inline-flex min-h-12 max-w-full items-center gap-3 text-[17px] font-medium text-forest underline decoration-forest/30 underline-offset-6 hover:decoration-forest sm:text-xl"
            >
              <Mail size={20} strokeWidth={1.6} className="shrink-0" aria-hidden="true" />
              <span className="break-all">{company.email}</span>
              <ArrowUpRight size={17} strokeWidth={1.6} className="shrink-0" aria-hidden="true" />
            </a>

            <h3 className="mt-7 text-[14px] font-medium text-muted">Telephone</h3>
            <ul className="mt-2 flex flex-col items-start">
              {company.telephones.map((telephone) => (
                <li key={telephone.href}>
                  <a
                    href={telephone.href}
                    className="inline-flex min-h-12 items-center gap-3 text-[18px] font-medium text-forest underline decoration-forest/30 underline-offset-6 hover:decoration-forest"
                  >
                    <Phone size={18} strokeWidth={1.6} aria-hidden="true" />
                    {telephone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-8 border-t border-rule pt-8 sm:grid-cols-2 lg:gap-9 lg:border-t-0 lg:pt-0">
            {company.offices.map((office) => (
              <OfficeAddress key={office.label} office={office} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
