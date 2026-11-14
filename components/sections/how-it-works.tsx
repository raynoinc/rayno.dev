import { content } from "@/lib/content";
import { Strata } from "@/components/brand/strata";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const thumbGradients = [
  "bg-[linear-gradient(155deg,#0d6eff_0%,#8ab4ff_100%)]", // وب‌سایت
  "bg-[linear-gradient(155deg,#111827_0%,#4d8eff_100%)]", // فروشگاه
  "bg-[linear-gradient(155deg,var(--border-brand-2)_0%,var(--brand-tint)_100%)]", // اپلیکیشن
];

/** How it works — Figma 1:301 */
export function HowItWorks() {
  const { howItWorks: h } = content;
  return (
    <section id="how-it-works" className="relative overflow-hidden border-y border-border-subtle bg-bg-alt py-20 md:py-28">
      <Strata name="light_how_1200x520" themed className="top-[200px] left-1/2 ml-[-900px] h-[520px] w-[1200px]" />
      <div className="container relative">
        <SectionHeader align="start" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[616px_520px] lg:justify-between lg:gap-0">
          {/* Right column: analogy + steps */}
          <div className="flex flex-col gap-7">
            <div className="rounded-2xl border border-border-brand-2 bg-surface px-[22px] py-5 drop-shadow-[0_10px_15px_rgba(13,110,255,0.45)]">
              <p className="text-[16px] leading-[30.4px] text-text-body">
                <span className="font-bold text-brand-fg-strong">{h.analogy.bold}</span>
                {h.analogy.normal}
              </p>
            </div>
            <ol className="flex flex-col gap-[18px]">
              {h.steps.map((step) => (
                <li key={step.number} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#004de5] to-[#0d6eff] text-[17px] font-bold text-white">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-[18px] leading-7 font-bold text-text-primary">{step.title}</h3>
                    <p className="text-[14px] leading-[25.9px] text-text-secondary">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Left column: headless diagram */}
          <div className="rounded-3xl border border-border bg-surface p-5 sm:p-7">
            {/* front-end */}
            <div className="flex flex-col gap-3.5 rounded-2xl border border-dashed border-[#8ab4ff] bg-[linear-gradient(157deg,var(--brand-tint)_0%,var(--surface)_100%)] px-4 py-[22px] sm:px-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[18px] font-bold text-text-primary sm:text-[20px]">{h.diagram.frontend.title}</h3>
                <span dir="ltr" className="text-[11px] font-semibold tracking-[0.96px] text-text-muted sm:text-[12px]">
                  {h.diagram.frontend.eyebrow}
                </span>
              </div>
              <div className="flex gap-2.5">
                {h.diagram.frontend.items.map((item, i) => (
                  <div key={item} className="flex min-w-0 flex-1 flex-col items-start gap-2 rounded-xl border border-border-brand bg-surface p-3.5">
                    <span className={cn("h-[46px] w-full rounded-lg", thumbGradients[i])} />
                    <span className="text-[13px] font-semibold text-text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* API */}
            <div className="flex h-14 items-center justify-center">
              <span dir="ltr" className="rounded-full border border-border-brand-2 bg-brand-tint px-3 py-[5px] text-[12px] font-semibold text-brand-fg-strong">
                {h.diagram.api}
              </span>
            </div>

            {/* back-end */}
            <div className="relative overflow-hidden rounded-2xl bg-fixed-dark-bg px-6 py-[22px] sm:min-h-[214px]">
              <Strata name="card_dark_600x360" className="top-[-80px] left-[-40px] h-[360px] w-[600px]" />
              <div className="relative flex items-center justify-between gap-3">
                <h3 className="text-[18px] font-bold text-white sm:text-[20px]">{h.diagram.backend.title}</h3>
                <span dir="ltr" className="text-[11px] font-semibold tracking-[0.96px] text-[#8ab4ff] sm:text-[12px]">
                  {h.diagram.backend.eyebrow}
                </span>
              </div>
              <ul className="relative mt-[22px] flex max-w-[414px] flex-wrap gap-2">
                {h.diagram.backend.items.map((item, i) => (
                  <li
                    key={item}
                    className={cn(
                      "rounded-[9px] border px-3 py-[7px] text-[13px] leading-5 font-medium",
                      i < 2 ? "border-[#4d8eff]/40 bg-[#0d6eff]/18 text-white" : "border-white/10 bg-white/6 text-[#e1e6ef]"
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
