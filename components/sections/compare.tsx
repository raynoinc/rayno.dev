import { content } from "@/lib/content";
import { MaskIcon } from "@/components/ui/mask-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const iconStyle = {
  check: { name: "compare-check", wrap: "bg-brand-tint-2", color: "text-brand-fg" },
  x: { name: "compare-x", wrap: "bg-danger-tint", color: "text-danger" },
  dash: { name: "compare-dash", wrap: "bg-warning-tint", color: "text-warning" },
} as const;

const cols = "grid grid-cols-[200px_minmax(0,316.8fr)_minmax(0,316.8fr)_minmax(0,364.3fr)]";

/** Compare — Figma 1:580. RTL columns: feature | theme | custom | Rayno (highlighted). */
export function Compare() {
  const { compare } = content;
  return (
    <section id="compare" className="relative bg-bg py-20 md:py-28">
      <div className="container">
        <SectionHeader eyebrow={compare.eyebrow} title={compare.title} subtitle={compare.subtitle} />

        <div className="mt-14 overflow-x-auto rounded-3xl border border-border bg-surface [scrollbar-width:thin]">
          <div role="table" className="min-w-[900px]">
            <div role="row" className={cn(cols, "h-[87px]")}>
              <div role="columnheader" className="bg-surface-2" />
              {compare.headers.map((h, i) => {
                const rayno = i === compare.headers.length - 1;
                return (
                  <div
                    role="columnheader"
                    key={h.eyebrow}
                    className={cn(
                      "flex flex-col items-start justify-center gap-0.5 px-[22px]",
                      rayno ? "bg-gradient-to-r from-[#004de5] to-[#0d6eff]" : "bg-surface-2"
                    )}
                  >
                    <span dir="ltr" className={cn("text-[11px] leading-[19.25px] font-semibold tracking-[0.88px]", rayno ? "text-[#dce8ff]" : "text-text-muted")}>
                      {h.eyebrow}
                    </span>
                    <span className={cn("text-[17px] leading-[29.75px]", rayno ? "font-black text-white" : "font-bold text-text-primary")}>
                      {h.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {compare.rows.map((row) => (
              <div role="row" key={row.feature} className={cn(cols, "min-h-[61.5px]")}>
                <div role="rowheader" className="flex items-center border-t border-border-subtle px-[22px] text-[14px] leading-[24.5px] font-semibold text-text-primary">
                  {row.feature}
                </div>
                {row.values.map((v, i) => {
                  const s = iconStyle[v.icon as keyof typeof iconStyle];
                  const rayno = "highlight" in v && v.highlight;
                  return (
                    <div
                      role="cell"
                      key={i}
                      className={cn("flex items-center gap-2.5 border-t border-border-subtle px-[22px] py-[18px]", rayno && "bg-brand-tint")}
                    >
                      <span className={cn("flex size-[22px] shrink-0 items-center justify-center rounded-full", s.wrap)}>
                        <MaskIcon name={s.name} size={13} className={s.color} />
                      </span>
                      <span className={cn("text-[14px] leading-[24.5px]", rayno ? "font-semibold text-text-primary" : "text-text-muted")}>{v.text}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
