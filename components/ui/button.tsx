import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/** shadcn/ui-style button with the Rayno variants from Figma (h50, r12, 15px semibold). */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl font-semibold transition-[filter,background-color,color] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-70",
  {
    variants: {
      variant: {
        /** Brand gradient + blue glow (hero / CTA primary) */
        primary:
          "bg-gradient-to-r from-[#004de5] to-[#0d6eff] text-white shadow-[0_8px_24px_-8px_rgba(13,110,255,0.6)] hover:brightness-110",
        /** Outline that follows the theme (hero secondary): white card in light, translucent on dark */
        outline:
          "border border-border bg-surface text-text-primary hover:bg-surface-2 dark:border-[#2a3550] dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/[0.07]",
        /** White button on dark backgrounds (header, problem banner) */
        white: "bg-white text-[#0b1220] hover:bg-white/90",
        /** Ink in light theme, white in dark theme (header CTA on the theme-aware hero) */
        ink: "bg-[#0b1220] text-white hover:bg-[#0b1220]/90 dark:bg-white dark:text-[#0b1220] dark:hover:bg-white/90",
      },
      size: {
        default: "h-[50px] px-[22px] text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof buttonVariants>;

export function ButtonLink({ className, variant, size, ...props }: ButtonLinkProps) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
