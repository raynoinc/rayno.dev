"use client";
import Image from "next/image";
import { content } from "@/lib/content";

export function HowItWorks() {
  const { howItWorks } = content;
  return (
    <section id="how-it-works" className="relative py-20 md:py-32 bg-bg-alt">
      <div className="absolute inset-0 -z-10"><Image src="/assets/strata/light/light_how_1200x520.svg" alt="" width={1200} height={520} className="w-full max-w-[1200px] mx-auto dark:hidden"/><Image src="/assets/strata/dark/light_how_1200x520.svg" alt="" width={1200} height={520} className="w-full max-w-[1200px] mx-auto hidden dark:block"/></div>
      <div className="container">
        <div className="text-center mb-16"><div className="text-xs font-semibold text-brand-fg tracking-wide mb-4" dir="ltr">{howItWorks.eyebrow}</div><h2 className="text-[36px] md:text-[44px] font-extrabold text-text-primary mb-4 leading-tight">{howItWorks.title}</h2><p className="text-lg text-text-secondary max-w-3xl mx-auto">{howItWorks.subtitle}</p></div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-surface border border-border rounded-2xl p-8"><div className="text-xs font-semibold text-text-muted mb-3" dir="ltr">{howItWorks.diagram.frontend.eyebrow}</div><h3 className="text-xl font-bold text-text-primary mb-6">{howItWorks.diagram.frontend.title}</h3><div className="space-y-3">{howItWorks.diagram.frontend.items.map((item,i)=>(<div key={i} className="bg-surface-2 border border-border-subtle rounded-xl px-4 py-3 text-sm font-semibold text-text-primary">{item}</div>))}</div></div>
          <div className="bg-gradient-to-b from-[#0f1a30] to-[#0b1424] border border-[#8ab4ff]/25 rounded-2xl p-8"><div className="absolute inset-0 rounded-2xl overflow-hidden -z-10"><Image src="/assets/strata/light/card_dark_600x360.svg" alt="" width={600} height={360} className="w-full dark:hidden"/><Image src="/assets/strata/dark/card_dark_600x360.svg" alt="" width={600} height={360} className="w-full hidden dark:block"/></div><div className="text-xs font-semibold text-[#8ab4ff] mb-3" dir="ltr">{howItWorks.diagram.backend.eyebrow}</div><h3 className="text-xl font-bold text-white mb-6">{howItWorks.diagram.backend.title}</h3><div className="space-y-2">{howItWorks.diagram.backend.items.map((item,i)=>(<div key={i} className={`px-4 py-2 rounded-lg text-sm ${i<2?"font-medium text-white":"text-[#e1e6ef]"}`}>{item}</div>))}</div></div>
        </div>
        <div className="bg-brand-tint border border-border-brand rounded-2xl p-6 max-w-4xl mx-auto mb-12"><p className="text-base text-text-body"><span className="font-bold text-brand-fg-strong">{howItWorks.analogy.bold}</span>{howItWorks.analogy.normal}</p></div>
        <div className="space-y-8 max-w-4xl mx-auto">{howItWorks.steps.map((step,i)=>(<div key={i} className="flex gap-6"><div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-b from-[#004de5] to-[#0d6eff] flex items-center justify-center text-white font-bold text-lg">{step.number}</div><div className="flex-1"><h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3><p className="text-sm text-text-secondary leading-relaxed">{step.description}</p></div></div>))}</div>
      </div>
    </section>
  );
}
