"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet } from "@/components/ui/sheet";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Header — Figma 1:193 (sits on the fixed-dark hero, 76px, bottom border white/8). */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[76px] border-b border-white/8 text-white transition-[background-color,backdrop-filter] duration-300",
        scrolled ? "bg-fixed-dark-bg/85 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between">
        <a href="#hero" aria-label="راینو">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {content.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] leading-[22px] font-medium text-fixed-dark-text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="تغییر تم"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="relative flex size-10 items-center justify-center rounded-xl text-fixed-dark-text-muted transition hover:bg-white/5 hover:text-white"
          >
            <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </button>
          <ButtonLink href="#cta" variant="white" className="max-sm:hidden">
            {content.header.cta}
          </ButtonLink>
          <button
            type="button"
            aria-label="منو"
            className="flex size-10 items-center justify-center rounded-xl text-fixed-dark-text-muted hover:bg-white/5 hover:text-white lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <nav className="flex flex-col gap-1">
          {content.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-[15px] font-medium text-text-primary transition-colors hover:bg-surface-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink href="#cta" onClick={() => setMobileMenuOpen(false)} className="mt-4">
            {content.header.cta}
          </ButtonLink>
        </nav>
      </Sheet>
    </>
  );
}
