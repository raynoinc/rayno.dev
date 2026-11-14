import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { content } from "@/lib/content";
import { Strata } from "@/components/brand/strata";
import { MaskIcon } from "@/components/ui/mask-icon";
import { SectionHeader } from "@/components/ui/section-header";

/** Problem — Figma 1:221 */
export function Problem() {
  const { problem } = content;
  return (
    <section id="problem" className="relative overflow-hidden bg-bg py-20 md:py-28">
      <Strata name="light_1200x520" themed className="top-0 left-1/2 h-[520px] w-[1200px] -translate-x-1/2" />
      <div className="container relative">
        <SectionHeader eyebrow={problem.eyebrow} title={problem.title} subtitle={problem.subtitle}>
          {/* quote pill */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-[14px] border border-border bg-surface-2 px-[18px] py-2.5 text-[15px] leading-6 md:text-[16px]">
            <span className="text-text-secondary">{problem.quoteStart}</span>
            <span className="font-bold text-text-primary">{problem.quote}</span>
          </div>
        </SectionHeader>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problem.issues.map((issue) => (
            <article key={issue.title} className="flex flex-col items-start gap-2.5 rounded-2xl border border-border bg-surface p-7">
              <span className="flex size-11 items-center justify-center rounded-xl border border-danger-border bg-danger-tint">
                <MaskIcon name={issue.icon} size={22} className="text-danger" />
              </span>
              <h3 className="pt-1.5 text-[18px] leading-7 font-semibold text-text-primary">{issue.title}</h3>
              <p className="text-[14px] leading-[25.9px] text-text-secondary">{issue.description}</p>
            </article>
          ))}
        </div>

        {/* dark banner 1:291 */}
        <div className="relative mt-10 flex flex-col items-center gap-5 overflow-hidden rounded-2xl bg-fixed-dark-bg px-7 py-6 md:flex-row md:justify-between lg:h-[98px]">
          <Strata name="banner_600x360" className="top-[-120px] left-[-60px] h-[360px] w-[600px]" />
          <p className="relative text-center text-[16px] leading-[28px] font-semibold text-white md:text-start md:text-[18px] md:leading-[30.6px]">
            {problem.cta.text[0]}
            <span className="text-[#8ab4ff]">{problem.cta.text[1]}</span>
            {problem.cta.text[2]}
          </p>
          <ButtonLink href="#how-it-works" variant="white" className="relative">
            {problem.cta.button}
            <Image src="/assets/icons/problem-arrow-see-how.svg" alt="" width={18} height={18} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
