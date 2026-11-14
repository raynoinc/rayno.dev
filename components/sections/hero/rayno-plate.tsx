import Image from "next/image";
import { content } from "@/lib/content";

/** 1:179 — the Rayno base plate (960×76) that rises in. */
export function RaynoPlate() {
  const { plate } = content.hero;
  return (
    <div className="flex w-full items-center justify-between gap-4 rounded-[18px] border border-[#4d8eff]/45 bg-gradient-to-r from-[#004de5]/35 via-[#0458ee]/26 to-[#0d6eff]/18 px-6 shadow-[0_0_60px_0_rgba(13,110,255,0.6)] max-md:flex-col max-md:py-4 md:h-[76px]">
      <div className="flex items-center gap-3">
        <Image src="/assets/icons/hero-plate-mark.svg" alt="" width={22} height={28} className="h-7 w-auto" />
        <span className="text-[15px] font-bold text-white md:text-[16px]">{plate.title}</span>
      </div>
      <ul dir="ltr" className="flex flex-wrap justify-center gap-4 text-[12px] leading-[15px] text-[#b9d1ff]">
        {plate.badges.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
