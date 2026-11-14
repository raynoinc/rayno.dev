"use client";
import { useState } from "react";
import Image from "next/image";
import { content } from "@/lib/content";

export function FAQ() {
  const { faq } = content;
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-28 bg-bg">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-text-muted tracking-wide mb-3">{faq.eyebrow}</div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-text-primary leading-tight">{faq.title}</h2>
        </div>
        <div className="max-w-[880px] mx-auto space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const isFirst = i === 0;
            return (
              <div key={i} className={`bg-surface border rounded-[14px] transition-all ${isFirst && isOpen ? "border-border-brand-2 shadow-[0_10px_30px_-20px_rgba(13,110,255,0.5)]" : "border-border"}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left">
                  <span className="text-[17px] font-semibold text-text-primary flex-1">{item.question}</span>
                  <Image src="/assets/icons/faq-chevron-down.svg" alt="" width={20} height={20} className={`flex-shrink-0 transition-transform ${isOpen?"rotate-180":""}`} />
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-2.5">
                    <p className="text-[14.5px] text-text-secondary leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
