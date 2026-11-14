"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between py-6 text-right font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
        <span className="flex-1 pr-4 text-lg">{question}</span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  defaultOpen?: number;
}

export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
