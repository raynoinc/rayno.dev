"use client";
import Image from "next/image";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Problem() {
  const { problem } = content;
  return (
    <section id="problem" className="relative py-20 md:py-32 bg-bg">
      <div className="absolute inset-0 -z-10"><Image src="/assets/strata/light/light_1200x520.svg" alt="" width={1200} height={520} className="w-full max-w-[1200px] mx-auto dark:hidden" /><Image src="/assets/strata/dark/light_1200x520.svg" alt="" width={1200} height={520} className="w-full max-w-[1200px] mx-auto hidden dark:block" /></div>
      <div className="container">
        <div className="text-center mb-16"><div className="text-xs font-semibold text-brand-fg tracking-wide mb-4" dir="ltr">{problem.eyebrow}</div><p className="text-base text-text-secondary mb-2">{problem.quoteStart}</p><p className="text-base font-bold text-text-primary mb-6">{problem.quote}</p><h2 className="text-[36px] md:text-[44px] font-extrabold text-text-primary mb-4 leading-tight">{problem.title}</h2><p className="text-lg text-text-secondary max-w-3xl mx-auto">{problem.subtitle}</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">{problem.issues.map((issue,i)=>(<div key={i} className="bg-surface border border-border rounded-2xl p-6"><div className="w-11 h-11 bg-danger-tint rounded-xl flex items-center justify-center mb-4"><Image src={`/assets/icons/${issue.icon}.svg`} alt="" width={22} height={22}/></div><h3 className="text-lg font-semibold text-text-primary mb-2">{issue.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{issue.description}</p></div>))}</div>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0f1a30] to-[#0b1424] border border-[#8ab4ff]/25 p-8 text-center"><div className="absolute inset-0 -z-10"><Image src="/assets/strata/light/banner_600x360.svg" alt="" width={600} height={360} className="w-full max-w-[600px] mx-auto dark:hidden"/><Image src="/assets/strata/dark/banner_600x360.svg" alt="" width={600} height={360} className="w-full max-w-[600px] mx-auto hidden dark:block"/></div><p className="text-lg font-semibold text-white max-w-2xl mx-auto mb-6"><span>{problem.cta.text[0]}</span><span className="text-[#8ab4ff]">{problem.cta.text[1]}</span><span>{problem.cta.text[2]}</span></p><Button className="bg-white text-[#0b1220] hover:bg-white/90 h-12 px-6 font-semibold"><Image src="/assets/icons/problem-arrow-see-how.svg" alt="" width={18} height={18} className="ml-2"/>{problem.cta.button}</Button></div>
      </div>
    </section>
  );
}
