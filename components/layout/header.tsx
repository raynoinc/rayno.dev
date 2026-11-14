"use client";

import { useState } from "react";
import Image from "next/image";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { content } from "@/lib/content";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[76px] section-fixed-dark border-b border-[#1c2840]">
      <div className="container flex h-full items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/assets/logo/logo-wordmark.svg"
            alt="راینو"
            width={60}
            height={24}
            className="h-6 w-auto"
          />
          <Image
            src="/assets/logo/logo-mark.svg"
            alt=""
            width={23}
            height={30}
            className="h-[30px] w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {content.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-[14px] font-medium text-[#d0d9e8] hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-[#d0d9e8] hover:text-white hover:bg-white/5"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            className="hidden md:flex bg-white text-[#0b1220] hover:bg-white/90 h-[40px] px-4 text-[15px] font-semibold"
            size="default"
          >
            {content.header.cta}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#d0d9e8] hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <nav className="flex flex-col gap-1">
          {content.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-[14px] font-medium text-[#d0d9e8] hover:text-white transition-colors rounded-lg hover:bg-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4">
            <Button className="w-full bg-white text-[#0b1220]" size="lg">
              {content.header.cta}
            </Button>
          </div>
        </nav>
      </Sheet>
    </header>
  );
}
