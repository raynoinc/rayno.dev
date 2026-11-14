import Image from "next/image";
import { cn } from "@/lib/utils";
import { MaskIcon } from "@/components/ui/mask-icon";

interface LogoProps {
  className?: string;
  /** "light" = white wordmark (dark backgrounds), "theme" = follows the theme */
  tone?: "light" | "theme";
}

/** Rayno logo: mark (right) + wordmark (left) in RTL — Figma 1:210. */
export function Logo({ className, tone = "light" }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image src="/assets/logo/logo-mark.svg" alt="" width={23} height={30} className="h-[30px] w-auto" priority />
      {tone === "light" ? (
        <Image src="/assets/logo/logo-wordmark.svg" alt="راینو" width={60} height={24} className="h-6 w-auto" priority />
      ) : (
        <>
          <MaskIcon name="footer-logo-wordmark" size={60} className="h-6 text-text-primary" />
          <span className="sr-only">راینو</span>
        </>
      )}
    </span>
  );
}
