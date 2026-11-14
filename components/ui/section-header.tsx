import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Extra element rendered between eyebrow and title (e.g. Problem's quote pill) */
  children?: ReactNode;
  align?: "center" | "start";
  /** Fixed-dark sections (Developers) */
  tone?: "theme" | "dark";
  className?: string;
}

/** Shared section heading: Latin eyebrow (12 / .96 tracking), 44px title, 18px subtitle. */
export function SectionHeader({ eyebrow, title, subtitle, children, align = "center", tone = "theme", className }: SectionHeaderProps) {
  const center = align === "center";
  return (
    <div className={cn("flex max-w-[760px] flex-col gap-3", center ? "mx-auto items-center text-center" : "items-start text-start", className)}>
      <p dir="ltr" className={cn("text-[12px] leading-[15px] font-semibold tracking-[0.96px] uppercase", tone === "dark" ? "text-[#8ab4ff]" : "text-brand-fg")}>
        {eyebrow}
      </p>
      {children}
      <h2 className={cn("text-[30px] leading-[1.4] font-extrabold md:text-[44px] md:leading-[61.6px]", tone === "dark" ? "text-white" : "text-text-primary")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-[16px] leading-[30px] md:text-[18px] md:leading-[34.2px]", tone === "dark" ? "text-fixed-dark-text-muted" : "text-text-secondary")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
