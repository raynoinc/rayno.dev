import { content } from "@/lib/content";
import { MaskIcon } from "@/components/ui/mask-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const iconStyle = {
  check: { name: "compare-check", wrap: "bg-success-tint", color: "text-success" },
  x: { name: "compare-x", wrap: "bg-danger-tint", color: "text-danger" },
  dash: { name: "compare-dash", wrap: "bg-warning-tint", color: "text-warning" },
} as const;

type IconKey = keyof typeof iconStyle;

/** Header + one track per feature row; cards use these via subgrid so rows line up across cards. */
const rowTracks = "lg:row-span-7 lg:grid lg:grid-rows-subgrid";

/**
 * Compare — RTL desktop order: criteria, theme, custom, Rayno (featured, last / leftmost).
 * Rayno keeps the brand header, brand border + glow, and extends past the others.
 */
export function Compare() {
  const { compare } = content;
  const last = compare.headers.length - 1;
  // Content column order is already theme, custom, Rayno — in RTL that puts Rayno last (left).
  const columns = compare.headers.map((header, i) => ({
    header,
    featured: i === last,
    cells: compare.rows.map((row) => ({ feature: row.feature, ...row.values[i] })),
  }));

  return (
    <section id="compare" className="relative bg-bg py-20 md:py-28">
      <div className="container">
        <SectionHeader eyebrow={compare.eyebrow} title={compare.title} subtitle={compare.subtitle} />

        <div className="mt-14 grid gap-5 lg:gap-y-0 lg:grid-cols-[200px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.16fr)] lg:grid-rows-[auto_repeat(6,minmax(62px,auto))]">
          {/* Criteria labels (desktop). On mobile each cell shows its own label. */}
          <div className={cn("hidden overflow-hidden rounded-3xl border border-border bg-surface lg:my-4", rowTracks)}>
            <header className="flex items-end justify-end bg-surface-2 px-4 py-[18px] lg:px-[22px]">
              <div className="flex flex-col gap-0.5 text-end">
                <span dir="ltr" className="text-[11px] leading-[19.25px] font-semibold tracking-[0.88px] text-text-muted">
                  {compare.criteria.eyebrow}
                </span>
                <h3 className="text-[17px] leading-[29.75px] font-bold text-text-primary">{compare.criteria.label}</h3>
              </div>
            </header>
            {compare.rows.map((row) => (
              <div
                key={row.feature}
                className="flex items-center justify-end border-t border-border-subtle px-4 py-[14px] text-[14px] leading-[24.5px] font-bold text-text-primary lg:px-[22px] lg:py-[18px]"
              >
                {row.feature}
              </div>
            ))}
          </div>

          {columns.map((col) => (
            <CompareCard key={col.header.eyebrow} {...col} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CompareCardProps {
  header: { eyebrow: string; label: string };
  featured: boolean;
  cells: { feature: string; icon: string; text: string }[];
}

function CompareCard({ header, featured, cells }: CompareCardProps) {
  return (
    <article
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl bg-surface",
        rowTracks,
        featured
          ? "border-2 border-brand-blue shadow-[0_24px_56px_-16px_rgb(13_110_255/0.35)] lg:pb-4"
          : "border border-border lg:my-4"
      )}
    >
      <header
        className={cn(
          "flex items-end justify-between gap-3 px-[22px] py-[18px]",
          featured ? "bg-gradient-to-r from-[#004de5] to-[#0d6eff] lg:pt-[33px]" : "bg-surface-2"
        )}
      >
        <div className="flex flex-col gap-0.5">
          <span
            dir="ltr"
            className={cn(
              "text-end text-[11px] leading-[19.25px] font-semibold tracking-[0.88px]",
              featured ? "text-[#dce8ff]" : "text-text-muted"
            )}
          >
            {header.eyebrow}
          </span>
          <h3 className={cn(featured ? "text-[20px] leading-8 font-black text-white" : "text-[17px] leading-[29.75px] font-bold text-text-primary")}>
            {header.label}
          </h3>
        </div>
        {featured && (
          <span className="mb-1 shrink-0 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[12px] leading-5 font-bold text-white">
            پیشنهاد ما
          </span>
        )}
      </header>

      <dl className="contents">
        {cells.map((cell) => {
          const s = iconStyle[cell.icon as IconKey];
          return (
            <div key={cell.feature} className="flex flex-col justify-center gap-1 border-t border-border-subtle px-[22px] py-[14px] lg:py-[18px]">
              <dt className="text-[12px] leading-5 font-medium text-text-muted lg:sr-only">{cell.feature}</dt>
              <dd className="flex items-center gap-2.5">
                <span className={cn("flex size-[22px] shrink-0 items-center justify-center rounded-full", s.wrap)}>
                  <MaskIcon name={s.name} size={13} className={s.color} />
                </span>
                <span className={cn("text-[14px] leading-[24.5px]", featured ? "font-semibold text-text-primary" : "text-text-muted")}>
                  {cell.text}
                </span>
              </dd>
            </div>
          );
        })}
      </dl>
    </article>
  );
}
