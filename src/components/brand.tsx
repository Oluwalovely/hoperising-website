import { company } from "@/content/company";

export function Brand() {
  return (
    <a
      href="#home"
      className="inline-flex max-w-[240px] flex-col text-forest"
    >
      <span className="font-heading text-[25px] leading-none font-bold tracking-[0.08em] sm:text-[27px]">
        {company.wordmark}
      </span>{" "}
      <span className="mt-2 text-[11px] leading-[1.4] font-medium tracking-[0.04em]">
        {company.wordmarkSubtitle}
      </span>
    </a>
  );
}
