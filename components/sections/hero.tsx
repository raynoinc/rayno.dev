"use client";
import Image from "next/image";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { hero } = content;
  return (
    <section id="hero" className="section-fixed-dark relative overflow-hidden pt-[76px] min-h-[1000px] lg:min-h-[1276px]">
      <div className="absolute w-[980px] h-[560px] rounded-full bg-[#0d6eff] opacity-40 blur-[280px] left-[230px] top-[-300px]" />
      <div className="absolute w-[520px] h-[380px] rounded-full bg-[#004de5] opacity-30 blur-[280px] left-[-120px] top-[520px]" />
      <div className="absolute inset-0 top-[40px]"><Image src="/assets/strata/light/hero_1440x980.svg" alt="" width={1440} height={980} className="w-full animate-strata-drift" /></div>
      <div className="container relative pt-[88px]">
        <div className="flex justify-center mb-6"><div className="bg-[#111827]/80 border border-[#2a3550] rounded-full px-2 pr-3.5 py-1.5 flex items-center gap-2.5 text-[13px] text-[#c7cfdd]"><span className="bg-gradient-to-b from-[#004de5] to-[#0d6eff] text-white px-2 py-1 rounded-full text-[11px] font-semibold tracking-[0.7px]">{hero.eyebrow}</span>{hero.badge}</div></div>
        <div className="max-w-[1000px] mx-auto text-center mb-6"><h1 className="text-[32px] sm:text-[48px] lg:text-[60px] font-extrabold leading-[1.35] tracking-[-0.5px]"><span className="text-white">{hero.title.line1}</span><span className="gradient-text">{hero.title.line2}</span><span className="text-white">{hero.title.line3}</span></h1></div>
        <p className="max-w-[720px] mx-auto text-center text-[16px] lg:text-[19px] lg:leading-[36px] leading-[28px] text-[#d0d9e8] mb-9">{hero.subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-7"><Button className="h-[50px] px-6 bg-gradient-to-b from-[#004de5] to-[#0d6eff] text-white text-[15px] font-semibold rounded-xl"><Image src="/assets/icons/arrow-left-cta.svg" alt="" width={18} height={18} className="ml-2" />{hero.ctas.primary}</Button><Button variant="outline" className="h-[50px] px-6 bg-white/[0.03] border-[#2a3550] text-white text-[15px] font-semibold rounded-xl hover:bg-white/[0.05]">{hero.ctas.secondary}</Button></div>
        <div className="hidden md:flex justify-center gap-7 mb-16">{hero.benefits.map((text,i)=>{const icons=["hero-check-bespoke","hero-check-uptodate","hero-check-cost","hero-check-fast"];return(<div key={i} className="flex items-center gap-2"><Image src={`/assets/icons/${icons[i]}.svg`} alt="" width={16} height={16}/><span className="text-sm text-[#d0d9e8]">{text}</span></div>);})}
        </div>
      </div>
    </section>
  );
}
