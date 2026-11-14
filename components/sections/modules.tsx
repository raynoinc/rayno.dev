"use client";
import Image from "next/image";
import { content } from "@/lib/content";

export function Modules() {
  const { modules } = content;
  return (
    <section id="modules" className="relative py-28 bg-bg-alt">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-brand-fg tracking-wide mb-3" dir="ltr">{modules.eyebrow}</div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-text-primary mb-3 leading-tight">{modules.title}</h2>
          <p className="text-lg text-text-secondary max-w-4xl mx-auto">{modules.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-5">
          {modules.items.map((item, i) => (
            <div key={i} className="bg-surface border border-border rounded-[14px] p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-[38px] h-[38px] flex-shrink-0 bg-brand-tint border border-border-brand rounded-[10px] flex items-center justify-center">
                  <Image src={`/assets/icons/${item.icon}.svg`} alt="" width={19} height={19} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-bold text-text-primary mb-0.5 truncate">{item.title}</h3>
                  <p className="text-[11.5px] text-text-muted truncate" dir="ltr">{item.sublabel}</p>
                </div>
              </div>
              <div className={`flex-shrink-0 px-2.5 py-[3px] rounded-full text-xs font-medium flex items-center gap-1.5 ${item.status === "ready" ? "bg-success-tint text-success" : item.status === "dev" ? "bg-warning-tint text-warning" : "bg-violet-tint text-violet"}`}>
                <span>{modules.statuses[item.status].label}</span>
                <div className={`w-1.5 h-1.5 rounded-sm ${item.status === "ready" ? "bg-success" : item.status === "dev" ? "bg-warning" : "bg-violet"}`} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 pt-5">
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-text-secondary">ساخته شده و قابل استفاده</span>
            <div className="px-2.5 py-[3px] rounded-full bg-success-tint text-success text-xs font-medium flex items-center gap-2">
              <span>{modules.statuses.ready.label}</span>
              <div className="w-1.5 h-1.5 rounded-sm bg-success" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-text-secondary">در حال ساخت و تکمیل</span>
            <div className="px-2.5 py-[3px] rounded-full bg-warning-tint text-warning text-xs font-medium flex items-center gap-2">
              <span>{modules.statuses.dev.label}</span>
              <div className="w-1.5 h-1.5 rounded-sm bg-warning" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-text-secondary">برنامه‌ریزی‌شده</span>
            <div className="px-2.5 py-[3px] rounded-full bg-violet-tint text-violet text-xs font-medium flex items-center gap-2">
              <span>{modules.statuses.roadmap.label}</span>
              <div className="w-1.5 h-1.5 rounded-sm bg-violet" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
