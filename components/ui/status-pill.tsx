import { cn } from "@/lib/utils";

export type ModuleStatus = "ready" | "dev" | "roadmap";

const styles: Record<ModuleStatus, { wrap: string; dot: string }> = {
  ready: { wrap: "bg-success-tint text-success", dot: "bg-success" },
  dev: { wrap: "bg-warning-tint text-warning", dot: "bg-warning" },
  roadmap: { wrap: "bg-violet-tint text-violet", dot: "bg-violet" },
};

/** Module status pill (dot + label) — Figma 1:716. */
export function StatusPill({ status, label, className }: { status: ModuleStatus; label: string; className?: string }) {
  const s = styles[status];
  return (
    <span className={cn("inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-[3px] text-[12px] leading-[19.2px] font-medium whitespace-nowrap", s.wrap, className)}>
      <span className={cn("size-1.5 rounded-full", s.dot)} />
      {label}
    </span>
  );
}
