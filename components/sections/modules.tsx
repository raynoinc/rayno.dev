import { content } from "@/lib/content";
import { MaskIcon } from "@/components/ui/mask-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { StatusPill, type ModuleStatus } from "@/components/ui/status-pill";

/** Modules — Figma 1:716. 3×3 grid of module cards + status legend. */
export function Modules() {
  const { modules } = content;
  const legend: ModuleStatus[] = ["ready", "dev", "roadmap"];
  return (
    <section id="modules" className="relative border-y border-border-subtle bg-bg-alt py-20 md:py-28">
      <div className="container">
        <SectionHeader eyebrow={modules.eyebrow} title={modules.title} subtitle={modules.subtitle} />

        <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.items.map((m) => {
            const status = m.status as ModuleStatus;
            return (
              <article key={m.title} className="flex min-h-[82px] items-center justify-between gap-3 rounded-[14px] border border-border bg-surface px-[18px] py-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[10px] border border-border-brand bg-brand-tint">
                    <MaskIcon name={m.icon} size={19} className="text-brand-fg" />
                  </span>
                  <div className="flex min-w-0 flex-col">
                    <h3 className="text-[15px] leading-6 font-semibold text-text-primary">{m.title}</h3>
                    <p dir="auto" className="text-right text-[11.5px] leading-[18px] text-text-muted">
                      {m.sublabel}
                    </p>
                  </div>
                </div>
                <StatusPill status={status} label={modules.statuses[status].label} />
              </article>
            );
          })}
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-5">
          {legend.map((s) => (
            <li key={s} className="flex items-center gap-2">
              <StatusPill status={s} label={modules.statuses[s].label} className="gap-2" />
              <span className="text-[13px] text-text-muted">{modules.statuses[s].description}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
