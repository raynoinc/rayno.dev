"use client";
import Image from "next/image";
import { content } from "@/lib/content";

export function Developers() {
  const { developers } = content;
  const features = [
    { icon: "dev-headless", title: "هدلس و API-محور", text: "فرانت‌اند را با هر ابزاری بسازید؛ داده و منطق از API راینو می‌آید." },
    { icon: "dev-modular", title: "ماژولار", text: "فقط ماژول‌هایی را فعال کنید که پروژه لازم دارد؛ هر ماژول مستقل است." },
    { icon: "dev-multi-project", title: "یک پایه، چندین پروژه", text: "تحویل سریع‌تر و نگهداری ساده‌تر برای همهٔ مشتریان آژانس." },
    { icon: "dev-security", title: "امنیت و دسترسی آماده", text: "ورود، نقش‌ها و دسترسی‌ها از روز اول؛ بدون بازنویسی برای هر پروژه." }
  ];
  return (
    <section id="developers" className="section-fixed-dark relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10"><Image src="/assets/strata/light/dev_1440x980.svg" alt="" width={1440} height={980} className="absolute left-0 -top-[200px] w-full" /></div>
      <div className="absolute -left-[120px] top-[120px] w-[700px] h-[420px] rounded-full bg-[#0d6eff] opacity-20 blur-[300px]" />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
          <div className="bg-[#0b1220] border border-[#2a3550] rounded-[18px] shadow-[0_30px_70px_-30px_rgba(13,110,255,0.6)] overflow-hidden">
            <div className="h-[38px] border-b border-[#1a2335] px-3.5 flex items-center justify-between">
              <div className="flex gap-1.5">{[1,2,3].map(i=><div key={i} className="w-[9px] h-[9px] rounded-full bg-[#2a3550]"/>)}</div>
              <div className="text-[11.5px] text-[#94a0b5]">storefront.ts</div>
              <div className="w-10" />
            </div>
            <pre className="p-5 text-[13px] leading-[24px] text-[#d0d9e8] overflow-x-auto" dir="ltr"><code>{developers.code}</code></pre>
          </div>
          <div className="absolute -bottom-2 left-5 text-[11px] text-white/60">نمونهٔ مفهومی</div>
        </div>
        <div className="space-y-8">
          <div>
            <div className="text-xs font-semibold text-[#8ab4ff] tracking-wide mb-3" dir="ltr">{developers.eyebrow}</div>
            <h2 className="text-[36px] md:text-[44px] font-extrabold text-white mb-4 leading-tight">{developers.title}</h2>
            <p className="text-lg text-[#d0d9e8]">{developers.subtitle}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4.5">
            {features.map((f,i)=>(
              <div key={i} className="bg-white/[0.03] border border-white/[0.08] rounded-[14px] p-5">
                <div className="flex items-start justify-between mb-1.5">
                  <h3 className="text-base font-semibold text-white">{f.title}</h3>
                  <Image src={`/assets/icons/${f.icon}.svg`} alt="" width={18} height={18} className="mt-0.5"/>
                </div>
                <p className="text-[13.5px] text-white/70 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
