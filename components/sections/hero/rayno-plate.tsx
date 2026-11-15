import { MaskIcon } from "@/components/ui/mask-icon";
import { content } from "@/lib/content";

/** 1:179 — the Rayno base plate (960×76) that rises in. */
export function RaynoPlate() {
  const { plate } = content.hero;
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-[18px] border border-[#0d6eff]/28 bg-gradient-to-r from-[#004de5]/10 via-[#0458ee]/7 to-[#0d6eff]/5 px-6 shadow-[0_0_60px_0_rgba(13,110,255,0.16)] dark:border-[#4d8eff]/45 dark:from-[#004de5]/35 dark:via-[#0458ee]/26 dark:to-[#0d6eff]/18 dark:shadow-[0_0_60px_0_rgba(13,110,255,0.6)] max-md:flex-col max-md:py-4 md:h-[76px]">
      <div className="flex items-center gap-3">
        <MaskIcon name="hero-plate-mark" size={28} className="text-brand-fg dark:text-white" />
        <span className="text-[15px] font-bold text-text-primary md:text-[16px] dark:text-white">{plate.title}</span>
      </div>
      <ul dir="ltr" className="flex flex-wrap justify-center gap-4 text-[12px] leading-[15px] text-brand-fg dark:text-[#b9d1ff]">
        {plate.badges.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
