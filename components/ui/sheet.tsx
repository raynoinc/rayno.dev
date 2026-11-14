"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
      )}

      {/* Sheet */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-3/4 max-w-sm border-l bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute left-4 top-4 rounded-lg p-2 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">بستن</span>
        </button>
        <div className="mt-12">{children}</div>
      </div>
    </>
  );
}
