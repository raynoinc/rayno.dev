import Image from "next/image";
import { content } from "@/lib/content";
import { Strata } from "@/components/brand/strata";
import { MaskIcon } from "@/components/ui/mask-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

/** Why Rayno — Figma 1:384. The first card («ECONOMICAL») is the brand-blue highlight card. */
export function WhyRayno() {
  const { whyRayno } = content;
  return (
    <section id="why-rayno" className="relative bg-bg py-20 md:py-28">
      <div className="container">
        <SectionHeader eyebrow={whyRayno.eyebrow} title={whyRayno.title} subtitle={whyRayno.subtitle} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyRayno.features.map((item, i) => {
            const highlight = i === 0;
            return (
              <article
                key={item.eyebrow}
                className={cn(
                  "relative flex flex-col items-start gap-2.5 overflow-hidden rounded-2xl border p-[30px]",
                  highlight
                    ? "border-transparent bg-[linear-gradient(167deg,#004de5_8%,#0d6eff_92%)]"
                    : "border-border bg-surface"
                )}
              >
                {highlight && <Strata name="econ_560x420" className="top-[-140px] left-[-200px] h-[420px] w-[560px] opacity-60" />}
                <span
                  className={cn(
                    "relative flex size-11 items-center justify-center rounded-xl border",
                    highlight ? "border-white/25 bg-white/14" : "border-border-brand bg-brand-tint"
                  )}
                >
                  {highlight ? (
                    <Image src={`/assets/icons/${item.icon}.svg`} alt="" width={22} height={22} />
                  ) : (
                    <MaskIcon name={item.icon} size={22} className="text-brand-fg" />
                  )}
                </span>
                <p
                  dir="ltr"
                  className={cn("relative text-[11.5px] leading-[14px] font-semibold tracking-[0.92px]", highlight ? "text-[#b9d1ff]" : "text-brand-fg")}
                >
                  {item.eyebrow}
                </p>
                <h3 className={cn("relative pt-2 text-[19px] leading-[30px] font-bold", highlight ? "text-white" : "text-text-primary")}>
                  {item.title}
                </h3>
                <p className={cn("relative text-[14.5px] leading-[26.8px]", highlight ? "text-[#dce8ff]" : "text-text-secondary")}>
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
