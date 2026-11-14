import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface MaskIconProps {
  /** File name in /public/assets/icons without extension */
  name: string;
  size?: number;
  className?: string;
}

/**
 * Renders a single-colour SVG icon as a CSS mask so it inherits `currentColor`.
 * This lets icons follow the light/dark theme tokens (e.g. `text-brand-fg`).
 */
export function MaskIcon({ name, size = 20, className }: MaskIconProps) {
  const url = `url(/assets/icons/${name}.svg)`;
  const style: CSSProperties = {
    width: size,
    height: size,
    maskImage: url,
    WebkitMaskImage: url,
    maskSize: "contain",
    WebkitMaskSize: "contain",
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskPosition: "center",
    WebkitMaskPosition: "center",
  };
  return <span aria-hidden className={cn("inline-block shrink-0 bg-current", className)} style={style} />;
}
