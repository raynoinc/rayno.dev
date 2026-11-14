import Image from "next/image";
import { content } from "@/lib/content";
import { Logo } from "@/components/brand/logo";

/** Footer — Figma 1:991 */
export function Footer() {
  const { footer } = content;
  return (
    <footer className="border-t border-border bg-bg-alt pt-16 pb-9">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* brand */}
          <div className="flex max-w-[360px] flex-col gap-4">
            <Logo tone="theme" />
            <p className="max-w-[322px] text-[14px] leading-[25.9px] text-text-secondary">{footer.description}</p>
            <p dir="ltr" className="text-[13px] font-medium text-brand-fg">
              {footer.tagline}
            </p>
          </div>

          {/* link columns */}
          <nav className="grid grid-cols-2 gap-x-14 gap-y-8 sm:flex">
            {footer.sections.map((section) => (
              <div key={section.title} className="flex w-[150px] flex-col gap-3">
                <h3 className="text-[15px] font-bold text-text-primary">{section.title}</h3>
                {section.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-[14px] text-text-secondary transition-colors hover:text-brand-fg">
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-border pt-[22px] sm:flex-row sm:justify-between">
          <p className="text-[13px] text-text-muted">{footer.copyright}</p>
          <div className="flex items-center gap-3.5 text-[13px] text-text-muted">
            <span className="flex size-7 items-center justify-center rounded-lg bg-gradient-to-t from-[#004de5] to-[#0d6eff]">
              <Image src="/assets/icons/footer-globe.svg" alt="" width={12} height={16} />
            </span>
            <span dir="ltr">{footer.domain}</span>
            <span>{footer.language}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
