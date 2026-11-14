import { cacheLife } from "next/cache";
import { company, footerNavigation } from "@/content/company";

export async function Footer() {
  "use cache";
  // Refresh the server-rendered year without requiring a new deployment.
  cacheLife("hours");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory">
      <div className="page-container pt-12 pb-7 lg:pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-14">
          <div>
            <p className="max-w-sm font-heading text-xl leading-relaxed font-semibold tracking-[0.01em]">
              {company.name}
            </p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-ivory/85">
              {company.description}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 font-heading text-base font-semibold">Explore</p>
            <ul className="grid grid-cols-2 gap-x-5 lg:grid-cols-1">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-flex min-h-11 items-center text-[15px] text-ivory/85 underline-offset-4 hover:text-ivory hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="mb-3 font-heading text-base font-semibold">Contact</p>
            <a href={company.emailHref} className="inline-flex min-h-11 max-w-full items-center break-all text-[15px] text-ivory/85 underline-offset-4 hover:text-ivory hover:underline">
              {company.email}
            </a>
            <ul className="mt-1">
              {company.telephones.map((telephone) => (
                <li key={telephone.href}>
                  <a href={telephone.href} className="inline-flex min-h-11 items-center text-[15px] text-ivory/85 underline-offset-4 hover:text-ivory hover:underline">
                    {telephone.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ivory/20 pt-6 text-[13px] leading-relaxed text-ivory/85 lg:mt-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p className="shrink-0">RC No. {company.registrationNumber}</p>
        </div>
      </div>
    </footer>
  );
}
