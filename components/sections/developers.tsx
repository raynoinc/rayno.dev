import Image from "next/image";
import { content } from "@/lib/content";
import { Strata } from "@/components/brand/strata";
import { SectionHeader } from "@/components/ui/section-header";

const tokenColor: Record<string, string> = {
  k: "text-[#8ab4ff]",
  s: "text-[#86efac]",
  c: "text-[#fbbf24]",
  p: "text-[#c7cfdd]",
  m: "text-[#667189]",
};

/** Developers — Figma 1:872. Fixed dark in both themes. */
export function Developers() {
  const { developers: d } = content;
  return (
    <section id="developers" className="relative overflow-hidden bg-fixed-dark-bg py-20 text-white md:py-28">
      <Strata name="dev_1440x980" className="top-[-200px] left-1/2 h-[980px] w-[1440px] -translate-x-1/2" />
      <div aria-hidden className="pointer-events-none absolute top-[120px] left-1/2 ml-[-840px] h-[420px] w-[700px] rounded-[271px] bg-[#0d6eff] opacity-22 blur-[150px]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-[608px_520px] lg:justify-between lg:gap-0">
        {/* text + features (right) */}
        <div>
          <SectionHeader align="start" tone="dark" eyebrow={d.eyebrow} title={d.title} subtitle={d.subtitle} className="max-w-[608px] [&>p:last-child]:text-[#94a0b5]" />
          <div className="mt-8 grid gap-[18px] sm:grid-cols-2">
            {d.features.map((f) => (
              <article key={f.title} className="rounded-[14px] border border-white/8 bg-white/[0.03] p-5">
                <div className="flex items-center gap-2.5">
                  <Image src={`/assets/icons/${f.icon}.svg`} alt="" width={18} height={18} />
                  <h3 className="text-[16px] leading-6 font-bold text-white">{f.title}</h3>
                </div>
                <p className="pt-1.5 text-[13.5px] leading-[24.3px] text-[#94a0b5]">{f.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* code window (left) */}
        <div className="relative w-full overflow-hidden rounded-[18px] border border-[#2a3550] bg-[#0b1220] shadow-[0_30px_70px_-30px_rgba(13,110,255,0.6)]">
          <div className="flex h-[38px] items-center justify-between border-b border-[#1a2335] px-3.5">
            <span className="w-10" />
            <span dir="ltr" className="text-[11.5px] text-[#94a0b5]">{d.code.fileName}</span>
            <span className="flex w-10 justify-end gap-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="size-[9px] rounded-full bg-[#2a3550]" />
              ))}
            </span>
          </div>
          <pre className="overflow-x-auto px-5 pt-[18px] pb-10 font-mono text-[12px] leading-[24.7px] sm:text-[13px]">
            <code>
              {d.code.lines.map((line, i) => (
                <span key={i} className="block min-h-[24.7px]">
                  {line.map(([t, text], j) => (
                    <span key={j} className={tokenColor[t]}>
                      {text}
                    </span>
                  ))}
                </span>
              ))}
            </code>
          </pre>
          <p className="absolute right-5 bottom-4 text-[11px] text-[#667189]">{d.code.caption}</p>
        </div>
      </div>
    </section>
  );
}
