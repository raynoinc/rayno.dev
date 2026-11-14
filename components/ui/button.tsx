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
        /** Translucent outline on fixed-dark backgrounds */
        "outline-dark": "border border-[#2a3550] bg-white/[0.03] text-white hover:bg-white/[0.07]",
        /** White button on dark backgrounds (header, problem banner) */
        white: "bg-white text-[#0b1220] hover:bg-white/90",
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
