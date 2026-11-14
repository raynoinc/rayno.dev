import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  icon: string;
  label: string;
  sublabel: string;
  /** Float phase (animation-delay = -index s) */
  index: number;
  className?: string;
  style?: CSSProperties;
}

/** 1:120 — a ready module card (160×68) that floats (5s loop, −1s stagger). */
export function ModuleCard({ icon, label, sublabel, index, className, style }: ModuleCardProps) {
  return (
    <div className={cn("w-[160px]", className)} style={style}>
      <div
        className="hero-float flex h-[68px] items-center gap-2.5 rounded-[14px] border border-[#8ab4ff]/22 bg-[#111827]/92 px-3.5 shadow-[0_18px_40px_0_rgba(13,110,255,0.6)]"
        style={{ "--i": index } as CSSProperties}
      >
        <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[9px] border border-[#4d8eff]/30 bg-[#0d6eff]/15">
          <Image src={`/assets/icons/${icon}.svg`} alt="" width={18} height={18} />
        </span>
        <span className="flex flex-1 flex-col items-center text-center">
          <span className="text-[14px] leading-[22px] font-semibold whitespace-nowrap text-white">{label}</span>
          <span dir="ltr" className="text-[10.5px] leading-[13px] font-medium whitespace-nowrap text-[#94a0b5]">
            {sublabel}
          </span>
        </span>
      </div>
    </div>
  );
}
