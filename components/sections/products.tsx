import { Fragment, type ReactNode } from "react";
import { content } from "@/lib/content";
import { Strata } from "@/components/brand/strata";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const grad = "bg-gradient-to-r from-[#004de5] to-[#0d6eff]";
const bar = "rounded-[6px]";

/** Mini UI previews in each card header (Figma 1:477 … 1:560). Children are in RTL order. */
const previews: ReactNode[] = [
  // فروشگاه آنلاین
  <Fragment key="store">
    <div className="flex gap-2">
      <span className={cn(bar, grad, "h-[52px] w-[30%]")} />
      <span className={cn(bar, "h-[52px] flex-1 bg-surface-3")} />
    </div>
    <div className="flex gap-2">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className={cn(bar, "h-10 flex-1 bg-brand-tint-2")} />
      ))}
    </div>
  </Fragment>,
  // وب‌سایت شرکتی
  <Fragment key="corporate">
    <span className={cn(bar, grad, "h-[58px] w-full")} />
    <div className="flex gap-2">
      <span className={cn(bar, "h-3 flex-[2] bg-surface-3")} />
      <span className={cn(bar, "h-3 flex-1 bg-surface-3")} />
    </div>
    <span className={cn(bar, "h-3 w-full bg-surface-3")} />
  </Fragment>,
  // اپلیکیشن وب و موبایل
  <Fragment key="app">
    <span className={cn(bar, grad, "h-10 w-full")} />
    <span className={cn(bar, "h-2.5 w-full bg-surface-3")} />
    <span className={cn(bar, "h-7 w-full bg-brand-tint-2")} />
  </Fragment>,
  // سامانهٔ مدیریت اختصاصی
  <div key="admin" className="flex h-[109px] gap-2">
    <span className={cn(bar, "w-[81px] shrink-0 bg-surface-3")} />
    <div className="flex flex-1 flex-col gap-1.5">
      <span className={cn(bar, "h-6 bg-brand-tint-2")} />
      <span className={cn(bar, "flex-1 bg-surface-3")} />
    </div>
  </div>,
  // سایت محتوایی و مجله
  <Fragment key="magazine">
    <div className="flex gap-2">
      <span className={cn(bar, grad, "h-12 flex-1")} />
      <span className={cn(bar, "h-12 flex-1 bg-brand-tint-2")} />
    </div>
    <span className={cn(bar, "h-2.5 w-full bg-surface-3")} />
    <span className={cn(bar, "h-2.5 w-[65%] bg-surface-3")} />
  </Fragment>,
];

/** Products — Figma 1:465. Row 1: two wide cards (3/6), row 2: three narrow cards (2/6). */
export function Products() {
  const { products } = content;
  return (
    <section id="products" className="relative border-y border-border-subtle bg-bg-alt py-20 md:py-28">
      <div className="container">
        <SectionHeader eyebrow={products.eyebrow} title={products.title} subtitle={products.subtitle} />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {products.items.map((item, i) => {
            const wide = i < 2;
            const isApp = i === 2;
            return (
              <article
                key={item.title}
                className={cn(
                  "flex flex-col overflow-hidden rounded-2xl border border-border bg-surface",
                  wide ? "lg:col-span-3" : "lg:col-span-2",
                  i === 4 && "md:col-span-2 lg:col-span-2"
                )}
              >
                <div className="relative h-[150px] shrink-0 overflow-hidden border-b border-border-subtle bg-surface-2">
                  <Strata
                    name={wide ? "prod_588x149" : "prod_385x149"}
                    themed
                    className={cn("top-0 left-0 h-[149px]", wide ? "w-[588px]" : "w-[385px]")}
                  />
                  <div
                    className={cn(
                      "absolute top-[26px] flex h-[135px] flex-col gap-2 border border-border bg-surface p-3 drop-shadow-[0_14px_15px_rgba(11,18,32,0.4)]",
                      isApp ? "left-1/2 w-[120px] -translate-x-1/2 rounded-t-[18px]" : "inset-x-6 rounded-t-xl"
                    )}
                  >
                    {previews[i]}
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-start gap-2 px-6 py-[22px]">
                  <h3 className="text-[18px] leading-7 font-bold text-text-primary">{item.title}</h3>
                  <p className="text-[14px] leading-[25.2px] text-text-secondary">{item.description}</p>
                  <ul className="flex flex-wrap gap-1.5 pt-1.5">
                    {item.modules.map((m) => (
                      <li
                        key={m}
                        dir="ltr"
                        className="rounded-[7px] border border-border-subtle bg-surface-2 px-[9px] py-[3px] text-[12px] leading-[19px] font-medium text-text-secondary"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="pt-6 text-center text-[13px] leading-5 text-text-muted">{products.note}</p>
      </div>
    </section>
  );
}
