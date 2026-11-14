"use client";
import { useState } from "react";
import Image from "next/image";
import { content } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function CTA() {
  const { cta } = content;
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise(r => setTimeout(r, 800));
    setStatus("success");
    setTimeout(() => { setStatus("idle"); setPhone(""); }, 2000);
  };
  
  return (
    <section id="cta" className="relative pb-28">
      <div className="container">
        <div className="section-fixed-dark relative overflow-hidden rounded-[28px] p-20 md:p-20 text-center">
          <div className="absolute right-[200px] top-[160px] w-[800px] h-[420px] rounded-full bg-[#0d6eff] opacity-30 blur-[300px]" />
          <div className="relative max-w-4xl mx-auto space-y-7">
            <h2 className="text-[36px] md:text-[44px] font-extrabold text-white leading-tight">{cta.title}</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">{cta.subtitle}</p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <div className="w-full sm:w-80 h-[50px] bg-white/[0.05] border border-[#2a3550] rounded-xl px-4 flex items-center justify-between">
                <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰" className="flex-1 bg-transparent text-white text-[15px] placeholder:text-white/40 outline-none" dir="rtl" />
                <span className="text-sm text-white/60">شمارهٔ تماس</span>
              </div>
              <Button type="submit" disabled={status==="loading"} className="h-[50px] px-6 bg-gradient-to-b from-[#004de5] to-[#0d6eff] text-white text-[15px] font-semibold rounded-xl shadow-[0_8px_24px_-8px_rgba(13,110,255,0.6)]">
                <Image src="/assets/icons/cta-arrow.svg" alt="" width={18} height={18} className="ml-2"/>
                {status==="success"?"ارسال شد!":cta.form.button}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
