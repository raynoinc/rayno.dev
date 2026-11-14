"use client";
import Image from "next/image";
import { content } from "@/lib/content";

export function Compare() {
  const { compare } = content;
  return (
    <section id="compare" className="relative py-28 bg-bg">
      <div className="container">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold text-brand-fg tracking-wide mb-3" dir="ltr">{compare.eyebrow}</div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-text-primary mb-3 leading-tight">{compare.title}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{compare.subtitle}</p>
        </div>
        <div className="overflow-x-auto">
          <div className="bg-surface border border-border rounded-3xl overflow-hidden min-w-[800px]">
            <div className="grid grid-cols-4">
              <div className="bg-surface-2 p-[18px_22px] border-r border-border-subtle"></div>
              {compare.headers.map((h, i) => (
                <div key={i} className={`p-[18px_22px] flex flex-col items-center justify-center text-center ${i===2?"bg-gradient-to-b from-[#004de5] to-[#0d6eff]":"bg-surface-2"}`}>
                  <div className={`text-[11px] font-semibold tracking-wide mb-0.5 ${i===2?"text-white/90":"text-text-muted"}`} dir="ltr">{h.eyebrow}</div>
                  <div className={`text-[17px] font-semibold ${i===2?"text-white":"text-text-primary"}`}>{h.label}</div>
                </div>
              ))}
            </div>
            {compare.rows.map((row, i) => (
              <div key={i} className="grid grid-cols-4 border-t border-border-subtle">
                <div className="p-[18px_22px] flex items-center justify-end border-r border-border-subtle"><span className="text-sm font-medium text-text-primary">{row.feature}</span></div>
                {row.values.map((val, j) => (
                  <div key={j} className={`p-[18px_22px] flex items-center justify-center gap-2.5 ${"highlight" in val && val.highlight ? "bg-brand-tint" : ""}`}>
                    <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center ${val.icon==="check"?"bg-brand-tint-2":val.icon==="dash"?"bg-warning-tint":"bg-danger-tint"}`}>
                      <Image src={`/assets/icons/compare-${val.icon}.svg`} alt="" width={13} height={13} />
                    </div>
                    <span className="text-sm text-text-primary">{val.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
