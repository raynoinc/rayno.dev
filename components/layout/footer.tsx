"use client";
import Image from "next/image";
import { content } from "@/lib/content";

export function Footer() {
  const { footer } = content;
  return (
    <footer className="bg-bg-alt border-t border-border pt-16 pb-9">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Image src="/assets/logo/logo-mark.svg" alt="" width={23} height={30} />
              <Image src="/assets/logo/logo-wordmark.svg" alt="راینو" width={60} height={24} />
            </div>
            <p className="text-sm text-text-secondary max-w-sm">{footer.description}</p>
            <div className="text-[13px] text-text-muted" dir="ltr">Rayno — Built to Evolve.</div>
          </div>
          <div className="grid grid-cols-3 gap-8 lg:gap-14">
            {footer.sections.map((col, i) => (
              <div key={i}>
                <h3 className="text-[15px] font-bold text-text-primary mb-3">{col.title}</h3>
                <ul className="space-y-3">
                  {col.links.map((link, j) => (
                    <li key={j}><a href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">{link.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-[13px] text-text-secondary">
            <div className="w-7 h-7 bg-gradient-to-b from-[#004de5] to-[#0d6eff] rounded-lg flex items-center justify-center">
              <Image src="/assets/icons/footer-link.svg" alt="" width={12} height={16} />
            </div>
            <span dir="ltr">rayno.dev</span>
            <span>·</span>
            <span>فارسی · FA</span>
          </div>
          <div className="text-[13px] text-text-secondary">{footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
