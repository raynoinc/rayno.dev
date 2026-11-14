"use client";

import { useState } from "react";
import { content } from "@/lib/content";
import { MaskIcon } from "@/components/ui/mask-icon";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

/** FAQ — Figma 1:930. Single-open accordion; the first item is open by default. */
export function FAQ() {
  const { faq } = content;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-bg py-20 md:py-28">
      <div className="container">
        <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mx-auto mt-12 flex max-w-[880px] flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i && !!item.answer;
            const id = `faq-${i}`;
            return (
              <div
                key={item.question}
                className={cn(
                  "rounded-[14px] border bg-surface px-5 py-5 transition-[border-color,box-shadow] sm:px-6",
                  isOpen ? "border-border-brand-2 drop-shadow-[0_10px_15px_rgba(13,110,255,0.5)]" : "border-border"
                )}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={id}
                    aria-disabled={!item.answer}
                    onClick={() => item.answer && setOpen(isOpen ? null : i)}
                    className={cn("flex w-full items-center justify-between gap-4 text-start", item.answer ? "cursor-pointer" : "cursor-default")}
                  >
                    <span className="text-[16px] leading-7 font-semibold text-text-primary sm:text-[17px]">{item.question}</span>
                    <MaskIcon
                      name={isOpen ? "faq-minus" : "faq-plus"}
                      size={20}
                      className={isOpen ? "text-brand-fg" : "text-text-muted"}
                    />
                  </button>
                </h3>
                {item.answer && (
                  <div id={id} className={cn("grid transition-[grid-template-rows] duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <p className="pt-2.5 text-[14.5px] leading-[27.55px] text-text-secondary">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
