import { content } from "@/lib/content";
import { Logo } from "@/components/brand/logo";

/** Footer — Figma 48:2 / 48:22 */
export function Footer() {
  const { footer } = content;
  return (
    <footer className="border-t border-border bg-bg-alt pt-14 pb-8">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-start">
            <a href="#hero" aria-label="راینو">
              <Logo tone="theme" />
            </a>
            <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {footer.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <p className="text-[14px] leading-[26px] text-text-secondary">{footer.description}</p>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-border pt-[22px] sm:flex-row sm:justify-between">
          <p className="text-[13px] text-text-muted">{footer.copyright}</p>
          <span dir="ltr" className="text-[13px] text-text-muted">
            {footer.domain}
          </span>
        </div>
      </div>
    </footer>
  );
}
