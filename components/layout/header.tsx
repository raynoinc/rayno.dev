"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Sheet } from "@/components/ui/sheet";
import { Logo } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Header — Figma 1:193 (sits on the theme-aware hero, 76px, hairline bottom border). */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  /** Circular reveal: the new theme spreads from the toggle button (View Transitions API, with a plain fallback). */
  const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };
    if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTheme(next);
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    doc.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
    const html = document.documentElement;
    html.style.setProperty("--vt-x", `${x}px`);
    html.style.setProperty("--vt-y", `${y}px`);
    html.style.setProperty("--vt-r", `${radius + 160}px`);
  };

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
        "fixed inset-x-0 top-0 z-50 h-[76px] border-b border-[#0b1220]/[0.07] text-text-primary transition-[background-color,backdrop-filter] duration-300 dark:border-white/8 dark:text-white",
        scrolled ? "bg-white/85 backdrop-blur-md dark:bg-fixed-dark-bg/85" : "bg-transparent"
      )}
    >
      <div className="container flex h-full items-center justify-between">
        <a href="#hero" aria-label="راینو">
          <Logo tone="theme" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {content.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] leading-[22px] font-medium text-text-secondary transition-colors hover:text-text-primary dark:text-fixed-dark-text-muted dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="تغییر تم"
            onClick={toggleTheme}
            className="relative flex size-10 items-center justify-center rounded-xl text-text-secondary transition hover:bg-[#0b1220]/5 hover:text-text-primary dark:text-fixed-dark-text-muted dark:hover:bg-white/5 dark:hover:text-white"
          >
            <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </button>
          <ButtonLink href="#cta" variant="ink" className="max-sm:hidden">
            {content.header.cta}
          </ButtonLink>
          <button
            type="button"
            aria-label="منو"
            className="flex size-10 items-center justify-center rounded-xl text-text-secondary hover:bg-[#0b1220]/5 hover:text-text-primary lg:hidden dark:text-fixed-dark-text-muted dark:hover:bg-white/5 dark:hover:text-white"
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
