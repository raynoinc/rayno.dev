"use client";
import Image from "next/image";
import { content } from "@/lib/content";

export function Products() {
  const { products } = content;
  const layouts = [
    { cols: 3, rows: 1, cell: [0,0,1,3], w: 590, strata: "prod_588x149" },
    { cols: 3, rows: 1, cell: [0,3,1,3], w: 590, strata: "prod_588x149" },
    { cols: 2, rows: 1, cell: [1,0,1,2], w: 387, strata: "prod_385x149" },
    { cols: 2, rows: 1, cell: [1,2,1,2], w: 387, strata: "prod_385x149" },
    { cols: 2, rows: 1, cell: [1,4,1,2], w: 387, strata: "prod_385x149" }
  ];
  return (
    <section id="products" className="relative py-28 bg-bg-alt">
      <div className="container">
        <div className="text-center mb-[50px]">
          <div className="text-xs font-semibold text-brand-fg tracking-wide mb-3" dir="ltr">{products.eyebrow}</div>
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-text-primary mb-3 leading-tight max-w-4xl mx-auto">{products.title}</h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">{products.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 mb-6">
          {products.items.map((item, i) => {
            const layout = layouts[i];
            return (
              <div key={i} className={`${i<2?"lg:col-span-3":"lg:col-span-2"} bg-surface border border-border rounded-2xl overflow-hidden flex flex-col`}>
                <div className="relative h-[150px] bg-surface-2 border-b border-border-subtle">
                  <Image src={`/assets/strata/light/${layout.strata}.svg`} alt="" width={layout.w} height={149} className="absolute inset-0 w-full h-full object-cover dark:hidden" />
                  <Image src={`/assets/strata/dark/${layout.strata}.svg`} alt="" width={layout.w} height={149} className="absolute inset-0 w-full h-full object-cover hidden dark:block" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary mb-4 flex-1">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.modules.map((m, j) => (
                      <span key={j} className="bg-surface-2 border border-border-subtle text-text-primary text-xs px-2.5 py-1.5 rounded-lg font-medium">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-[13px] text-text-secondary text-center">{products.note}</p>
      </div>
    </section>
  );
}
