import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { content } from "@/lib/content";

export function HeroIntro() {
  const { hero } = content;
  return (
    <div className="flex w-full flex-col items-center px-5">
      {/* 1:53 heading */}
      <h1 className="hero-fade mt-[26px] max-w-[1000px] text-center text-[32px] leading-[1.4] font-extrabold tracking-[-0.5px] [--d:.08s] sm:text-[44px] lg:text-[60px] lg:leading-[81px]">
        {hero.title.line1}
        <span className="bg-gradient-to-r from-[#004de5] via-[#0d6eff] via-60% to-[#2f86ff] bg-clip-text dark:from-[#8ab4ff] dark:to-[#4d8eff] text-transparent">
          {hero.title.highlight}
        </span>
        <br />
        {hero.title.line2}
      </h1>

      {/* 1:58 subtitle */}
      <p className="hero-fade mt-[22px] max-w-[720px] text-center text-[16px] leading-[30px] text-text-secondary dark:text-fixed-dark-text-muted [--d:.16s] lg:text-[19px] lg:leading-[36.1px]">
        {hero.subtitle}
      </p>

      {/* 1:59 CTAs */}
      <div className="hero-fade mt-9 flex w-full flex-col items-stretch justify-center gap-3 [--d:.24s] sm:w-auto sm:flex-row">
        <ButtonLink href={hero.ctas.primaryHref}>
          {hero.ctas.primary}
          <Image src="/assets/icons/arrow-left-cta.svg" alt="" width={18} height={18} />
        </ButtonLink>
        <ButtonLink href={hero.ctas.secondaryHref} variant="outline">
          {hero.ctas.secondary}
        </ButtonLink>
      </div>
    </div>
  );
}
