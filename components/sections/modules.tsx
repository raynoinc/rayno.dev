import { content } from "@/lib/content";
import { MaskIcon } from "@/components/ui/mask-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import {
  VignetteAdmin,
  moduleVignettes,
  type ModuleVignetteKey,
} from "@/components/sections/modules-vignettes";

type ModuleItem = (typeof content.modules.items)[number];

function Glow({ strong = false }: { strong?: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute -top-14 -left-12 rounded-full bg-[radial-gradient(circle,rgba(0,77,229,0.16)_0%,transparent_70%)] blur-[36px]",
        strong ? "size-[240px] bg-[radial-gradient(circle,rgba(0,77,229,0.22)_0%,transparent_70%)]" : "size-40",
      )}
    />
  );
}

function ModuleCard({ item }: { item: ModuleItem }) {
  const Vignette = moduleVignettes[item.key as ModuleVignetteKey];
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-surface">
      <Glow />
      {Vignette ? <Vignette /> : null}
      <div className="relative flex flex-col gap-2 p-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-[9px] border border-border-brand bg-brand-tint">
            <MaskIcon name={item.icon} size={16} className="text-brand-fg" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm leading-5 font-semibold text-text-primary">{item.title}</h3>
            <p dir="auto" className="text-right text-[11px] leading-4 text-text-muted">
              {item.sublabel}
            </p>
          </div>
        </div>
        <p className="text-xs leading-5 text-text-muted">{item.description}</p>
      </div>
    </article>
  );
}

function HubCard() {
  const { hub } = content.modules;
  return (
    <article className="relative flex flex-col overflow-hidden rounded-[22px] border border-border bg-surface p-5 lg:flex-row lg:items-center lg:gap-7 lg:p-6">
      <Glow strong />
      <div className="relative flex max-w-full flex-col items-end gap-3 lg:w-[360px] lg:shrink-0">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] border border-border-brand bg-brand-tint">
          <MaskIcon name={hub.icon} size={22} className="text-brand-fg" />
        </span>
        <div className="w-full">
          <h3 className="text-[22px] leading-8 font-bold text-text-primary">{hub.title}</h3>
          <p dir="auto" className="text-right text-xs leading-4 text-text-muted">
            {hub.sublabel}
          </p>
        </div>
        <p className="text-[13.5px] leading-6 text-text-muted">{hub.description}</p>
      </div>
      <div className="relative mt-5 min-w-0 flex-1 lg:mt-0">
        <VignetteAdmin />
      </div>
    </article>
  );
}

function PlusMark() {
  return (
    <span className="relative size-6" aria-hidden>
      <span className="absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-fg" />
      <span className="absolute top-1/2 left-1/2 h-4 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-fg" />
    </span>
  );
}

function CtaCard() {
  const { cta } = content.modules;
  return (
    <article className="relative flex min-h-[107px] flex-row items-center gap-5 overflow-hidden rounded-[20px] border-[1.5px] border-dashed border-brand/45 bg-brand-tint px-6 py-[22px] lg:px-7">
      <Glow strong />
      <span className="relative flex size-[52px] shrink-0 items-center justify-center rounded-[16px] border border-border-brand bg-brand-tint">
        <PlusMark />
      </span>
      <div className="relative min-w-0 flex-1">
        <h3 className="text-[18px] leading-7 font-bold text-text-primary">{cta.title}</h3>
        <p className="mt-2 text-[13.5px] leading-6 text-text-muted">{cta.description}</p>
      </div>
    </article>
  );
}

/** Modules — Figma 1:716 / 8:886 v3. Admin hub + equal 4×2 toolkit with UI vignettes + CTA. */
export function Modules() {
  const { modules } = content;
  return (
    <section id="modules" className="relative border-y border-border-subtle bg-bg-alt py-20 md:py-28">
      <div className="container">
        <SectionHeader eyebrow={modules.eyebrow} title={modules.title} subtitle={modules.subtitle} />

        <div className="mt-12 flex flex-col gap-4">
          <HubCard />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {modules.items.map((item) => (
              <ModuleCard key={item.key} item={item} />
            ))}
          </div>
          <CtaCard />
        </div>
      </div>
    </section>
  );
}
