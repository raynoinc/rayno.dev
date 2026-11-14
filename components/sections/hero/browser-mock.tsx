import { content } from "@/lib/content";

/** 1:90 — «Your custom design» browser window (780×300 on desktop). */
export function BrowserMock() {
  const { customDesign } = content.hero;
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-[18px] border border-[#8ab4ff]/25 bg-gradient-to-b from-[#0f1a30] to-[#0b1424] shadow-[0_40px_80px_-30px_rgba(13,110,255,0.55),0_0_0_6px_rgba(13,110,255,0.06)]">
      {/* 1:91 window bar — RTL: spacer | url | dots */}
      <div className="flex h-9 shrink-0 items-center justify-between border-b border-white/[0.07] px-4">
        <span className="w-10" />
        <span dir="ltr" className="rounded-md bg-white/5 px-3 py-[3px] text-[11px] leading-[13px] text-[#94a0b5]">
          {customDesign.domain}
        </span>
        <span className="flex w-10 justify-end gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-[9px] rounded-full bg-[#2a3550]" />
          ))}
        </span>
      </div>

      {/* 1:99 content — RTL: image tile (right) | text column (left) */}
      <div className="flex shrink-0 gap-5 px-6 py-[22px] max-sm:flex-col max-sm:gap-4 max-sm:px-4 max-sm:py-4 sm:h-[240px]">
        {/* 1:108 strata tile */}
        <div className="relative h-[150px] w-full shrink-0 overflow-hidden rounded-[14px] bg-[linear-gradient(135deg,#2f86ff_0%,#0b4fd9_100%)] sm:h-[196px] sm:w-[300px] max-sm:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/strata/light/mock_300x196.svg" alt="" className="absolute inset-0 size-full" />
        </div>
        {/* 1:100 text skeleton */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-3">
          <p className="text-[20px] leading-[30px] font-extrabold text-white sm:text-[24px] sm:leading-9">{customDesign.slogan}</p>
          <span className="h-2 w-[92%] rounded bg-white/12" />
          <span className="h-2 w-[76%] rounded bg-white/12" />
          <span className="h-2 w-[58%] rounded bg-white/12" />
          <span className="mt-1.5 h-8 w-[120px] rounded-lg bg-gradient-to-r from-[#004de5] to-[#0d6eff]" />
        </div>
      </div>

      {/* 1:110 tiles (cut off by the window, as in Figma) */}
      <div className="flex shrink-0 gap-3 px-6 max-sm:hidden">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-11 flex-1 rounded-[10px] border border-white/[0.06] bg-white/5" />
        ))}
      </div>
    </div>
  );
}

/** 1:115 — floating tag above the window. */
export function CustomDesignTag() {
  return (
    <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-3.5 py-2 text-[13px] leading-5 font-semibold text-[#0b1220] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
      <span className="size-2 rounded-full bg-[#0d6eff]" />
      {content.hero.customDesign.tag}
    </span>
  );
}
