import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { content } from "@/lib/content";

const benefitIcons = ["hero-check-bespoke", "hero-check-uptodate", "hero-check-cost", "hero-check-fast"];

export function HeroIntro() {
  const { hero } = content;
  return (
    <div className="flex w-full flex-col items-center px-5">
      {/* 1:48 badge */}
      <div className="hero-fade flex items-center gap-2.5 rounded-full border border-border-brand bg-white/85 py-1.5 dark:border-[#2a3550] dark:bg-[#111827]/80 ps-3.5 pe-1.5 [--d:0s]">
        <span className="text-[12px] leading-5 text-text-secondary sm:text-[13px] dark:text-fixed-dark-text-secondary">{hero.badge}</span>
        <span
          dir="ltr"
          className="order-first rounded-full bg-gradient-to-r from-[#004de5] to-[#0d6eff] px-[9px] py-[3px] text-[11px] leading-[13px] font-semibold tracking-[0.66px] text-white"
        >
          {hero.eyebrow}
        </span>
      </div>

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

      {/* 1:67 benefits */}
      <ul className="hero-fade mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 [--d:.32s]">
        {hero.benefits.map((text, i) => (
          <li key={text} className="flex items-center gap-2 text-[14px] leading-[22px] text-text-secondary dark:text-fixed-dark-text-muted">
            <Image src={`/assets/icons/${benefitIcons[i]}.svg`} alt="" width={16} height={16} />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
