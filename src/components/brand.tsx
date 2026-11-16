import Image from "next/image";
import { company } from "@/content/company";

export function CompanyLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/hoperising_logo_transparent_512.webp"
      alt=""
      width={512}
      height={512}
      sizes="(min-width: 768px) 112px, 96px"
      className={`aspect-square shrink-0 object-contain ${className}`}
    />
  );
}

export function Brand() {
  return (
    <a
      href="#home"
      className="inline-flex min-w-0 items-center gap-2.5 text-forest sm:gap-3"
    >
      <CompanyLogo className="w-12 sm:w-14" />
      <span className="flex min-w-0 max-w-[196px] flex-col">
        <span className="font-heading text-[17px] leading-none font-bold tracking-[0.04em] sm:text-[23px]">
          {company.wordmark}
        </span>{" "}
        <span className="mt-1.5 text-[12px] leading-[1.35] font-medium">
          {company.wordmarkSubtitle}
        </span>
      </span>
    </a>
  );
}
