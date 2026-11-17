import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero } from "@/content/company";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-section relative isolate overflow-clip bg-forest text-ivory">
      <div className="page-container grid items-center gap-7 pt-12 pb-12 sm:gap-10 sm:pt-12 sm:pb-0 md:pt-16 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pt-0 xl:gap-16">
        <Reveal className="relative z-10 lg:py-20 xl:py-24">
          <h1 id="hero-heading" className="max-w-[680px] text-[32px] leading-[1.12] tracking-[-0.035em] [text-wrap:wrap] sm:text-[56px] sm:leading-[1.08] sm:text-balance lg:text-[46px] xl:text-[60px]">
            {hero.heading}
          </h1>
          <p className="mt-4 max-w-[390px] text-base leading-[1.65] text-ivory/90 sm:mt-6 sm:text-[18px] sm:leading-[1.8] sm:text-ivory/80">
            {hero.description}
          </p>
          <div className="mt-6 grid grid-cols-[1fr_auto] items-center gap-3 max-[426px]:grid-cols-[auto_auto] max-[426px]:justify-start sm:mt-9 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-4">
            <a className="hero-action inline-flex min-h-12 items-center justify-center gap-2 rounded-control border border-ivory bg-ivory px-3 py-3 text-sm font-medium text-forest transition-colors hover:bg-ivory/90 motion-reduce:transition-none sm:gap-3 sm:px-5" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
              <ArrowRight size={18} strokeWidth={1.6} aria-hidden="true" className="hidden min-[360px]:block" />
            </a>
            <a className="inline-flex min-h-12 items-center gap-2 py-2 text-sm font-medium text-ivory underline decoration-ivory/45 underline-offset-8 transition-colors hover:decoration-ivory motion-reduce:transition-none sm:text-base" href={hero.secondaryAction.href}>
              {hero.secondaryAction.label}
              <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" className="hidden sm:block" />
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-media absolute inset-0 min-w-0 self-stretch sm:relative sm:inset-auto">
          <div className="relative h-full overflow-hidden sm:aspect-[4/3] sm:h-auto lg:aspect-auto lg:h-full lg:min-h-[620px]">
            <Image
              src="/images/cashew-hero.webp"
              alt="Illustration of cashew nuts in their shells in open woven produce sacks"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-forest/80 sm:hidden" />
          </div>
          <div className="absolute bottom-5 left-5 hidden aspect-[4/3] w-[42%] overflow-hidden border-[6px] border-forest sm:block lg:bottom-10 lg:-left-8 lg:w-[55%] lg:border-8">
            <Image
              src="/images/workplace2.webp"
              alt="A truck loaded with produce sacks at Hoperising's workspace"
              fill
              sizes="(max-width: 1023px) 42vw, 26vw"
              className="origin-bottom scale-[1.6] object-cover object-bottom"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
