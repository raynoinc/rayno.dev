"use client";
import Image from "next/image";
import { content } from "@/lib/content";

export function WhyRayno() {
  const { whyRayno } = content;
  return (
    <section id="why-rayno" className="relative py-28 bg-bg">
      <div className="container">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-brand-fg tracking-wide mb-3" dir="ltr">{whyRayno.eyebrow}</div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-text-primary mb-3 leading-tight">{whyRayno.title}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{whyRayno.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyRayno.features.map((item, i) => {
            const isDark = i === 0;
            return (
              <div key={i} className={`relative rounded-2xl p-[30px] ${isDark ? "section-fixed-dark border border-[#8ab4ff]/25 overflow-hidden" : "bg-surface border border-border"}`}>
                {isDark && (
                  <div className="absolute inset-0 -z-10">
                    <Image src="/assets/strata/light/econ_560x420.svg" alt="" width={560} height={420} className="absolute -left-[199px] -top-[139px] w-[560px] h-[420px] dark:hidden" />
                    <Image src="/assets/strata/dark/econ_560x420.svg" alt="" width={560} height={420} className="absolute -left-[199px] -top-[139px] w-[560px] h-[420px] hidden dark:block" />
                  </div>
                )}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-[10px] ${isDark ? "bg-white/[0.14] border border-white/[0.25]" : "bg-brand-tint border border-border-brand"}`}>
                  <Image src={`/assets/icons/${item.icon}.svg`} alt="" width={22} height={22} />
                </div>
                <div className={`text-[11.5px] font-semibold tracking-wide mb-2 ${isDark ? "text-white/90" : "text-text-muted"}`} dir="ltr">{item.eyebrow}</div>
                <h3 className={`text-[19px] font-bold mb-2 ${isDark ? "text-white" : "text-text-primary"}`}>{item.title}</h3>
                <p className={`text-[14.5px] leading-relaxed ${isDark ? "text-white/80" : "text-text-secondary"}`}>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
