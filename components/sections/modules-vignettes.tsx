import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-[118px] items-center justify-center overflow-hidden bg-brand-tint px-4">
      {children}
    </div>
  );
}

function Mini({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-surface", className)}>
      {children}
    </div>
  );
}

function Bar({ className }: { className?: string }) {
  return <span className={cn("block rounded-[3px] bg-brand-tint", className)} />;
}

export function VignetteUsers() {
  return (
    <Stage>
      <Mini className="flex w-[168px] flex-col items-end gap-1.5 p-2.5">
        <span className="h-3.5 w-full rounded-[5px] border border-border-brand bg-brand-tint" />
        <span className="h-3.5 w-full rounded-[5px] border border-border-brand bg-brand-tint" />
        <div className="flex gap-[5px]">
          <span className="flex size-[18px] items-center justify-center rounded-[5px] border border-border-brand bg-surface" />
          <span className="flex size-[18px] items-center justify-center rounded-[5px] border border-brand bg-surface">
            <span className="size-1.5 rounded-sm bg-brand/70" />
          </span>
          <span className="flex size-[18px] items-center justify-center rounded-[5px] border border-brand bg-surface">
            <span className="size-1.5 rounded-sm bg-brand/70" />
          </span>
        </div>
        <span className="h-4 w-[52px] rounded-md bg-brand/85" />
      </Mini>
    </Stage>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className={cn(
        "flex h-3.5 w-6 shrink-0 items-center rounded-full p-0.5",
        on ? "justify-end bg-brand/85" : "justify-start bg-brand/20",
      )}
    >
      <span className={cn("size-2.5 rounded-full", on ? "bg-surface" : "bg-text-muted")} />
    </span>
  );
}

export function VignetteRoles() {
  const rows = [
    { on: true, bar: "w-[88px]" },
    { on: true, bar: "w-[72px]" },
    { on: false, bar: "w-16" },
  ];
  return (
    <Stage>
      <Mini className="flex w-[176px] flex-col gap-2 px-3 py-3">
        {rows.map((row) => (
          <div key={row.bar} className="flex items-center justify-end gap-2">
            <Toggle on={row.on} />
            <Bar className={cn("h-2 bg-[rgb(115,133,166)]/45", row.bar)} />
          </div>
        ))}
      </Mini>
    </Stage>
  );
}

function Slider({ value }: { value: number }) {
  return (
    <span className="relative block h-3 w-[148px]">
      <span className="absolute top-1/2 right-0 left-0 h-[5px] -translate-y-1/2 rounded-full bg-border-brand" />
      <span
        className="absolute top-1/2 left-0 h-[5px] -translate-y-1/2 rounded-full bg-brand/70"
        style={{ width: `${Math.max(16, value * 100)}%` }}
      />
      <span
        className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand"
        style={{ left: `${value * 100}%` }}
      />
    </span>
  );
}

export function VignetteSettings() {
  return (
    <Stage>
      <Mini className="flex w-[180px] flex-col items-end gap-2.5 px-3 py-3">
        <Bar className="h-1.5 w-14" />
        <Slider value={0.72} />
        <Bar className="h-1.5 w-11" />
        <Slider value={0.4} />
      </Mini>
    </Stage>
  );
}

export function VignetteStore() {
  return (
    <Stage>
      <Mini className="w-[148px]">
        <div className="relative h-[58px] overflow-hidden rounded-t-[11px] bg-brand/20">
          <span
            aria-hidden
            className="absolute -top-10 -right-6 size-[90px] rounded-full bg-brand/15"
          />
        </div>
        <div className="flex flex-col items-end gap-1.5 p-2">
          <Bar className="h-1.5 w-[78px]" />
          <span className="rounded-md bg-brand-tint px-1.5 py-0.5 text-[9px] font-semibold text-brand-fg">۲۴۹٬۰۰۰</span>
        </div>
      </Mini>
    </Stage>
  );
}

export function VignetteContent() {
  return (
    <Stage>
      <Mini className="flex w-[184px] flex-col items-end gap-2 p-2.5">
        <div className="flex gap-[5px]">
          <Bar className="h-2.5 w-3.5 bg-brand/35" />
          <Bar className="h-2.5 w-3.5" />
          <Bar className="h-2.5 w-3.5" />
          <Bar className="h-2.5 w-3.5" />
        </div>
        <div className="flex w-full flex-col items-end gap-[5px]">
          <Bar className="h-2 w-[86px] bg-brand/55" />
          <Bar className="h-[5px] w-[148px]" />
          <Bar className="h-[5px] w-[132px]" />
          <Bar className="h-[5px] w-[100px]" />
        </div>
        <span className="h-7 w-[52px] rounded-[5px] border border-border-brand bg-brand/15" />
      </Mini>
    </Stage>
  );
}

export function VignetteVisual() {
  return (
    <Stage>
      <div className="relative h-[88px] w-[196px] overflow-hidden rounded-xl bg-brand/30">
        <span aria-hidden className="absolute -top-12 -left-8 size-[140px] rounded-full bg-brand/25" />
        <Bar className="absolute top-7 right-4 h-2 w-[70px] bg-surface/85" />
        <Bar className="absolute top-11 right-4 h-1.5 w-12 bg-surface/45" />
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-[5px]">
          <span className="size-[5px] rounded-full bg-surface/45" />
          <span className="h-[5px] w-3 rounded-full bg-surface" />
          <span className="size-[5px] rounded-full bg-surface/45" />
        </div>
      </div>
    </Stage>
  );
}

export function VignetteForms() {
  return (
    <Stage>
      <Mini className="flex w-[176px] flex-col items-end gap-1.5 p-2.5">
        <Bar className="h-[5px] w-10" />
        <span className="h-4 w-full rounded-[5px] border border-border-brand bg-brand-tint" />
        <Bar className="mt-1 h-[5px] w-[52px]" />
        <span className="h-4 w-full rounded-[5px] border border-border-brand bg-brand-tint" />
        <span className="mt-0.5 h-4 w-[58px] rounded-md bg-brand/85" />
      </Mini>
    </Stage>
  );
}

export function VignetteComments() {
  return (
    <Stage>
      <div className="flex w-full max-w-[220px] flex-col gap-1.5">
        <div className="self-end w-[118px] space-y-1 rounded-[10px] bg-brand/30 px-2 py-1.5">
          <Bar className="ml-auto h-[5px] w-[62%] bg-surface/90" />
          <Bar className="ml-auto h-[5px] w-[40%] bg-surface/50" />
        </div>
        <div className="self-start w-[100px] space-y-1 rounded-[10px] bg-brand/15 px-2 py-1.5">
          <Bar className="h-[5px] w-[62%] bg-brand/40" />
          <Bar className="h-[5px] w-[40%] bg-brand/20" />
        </div>
      </div>
    </Stage>
  );
}

const ADMIN_BARS = [36, 58, 44, 78, 52, 88, 64, 48];
const ADMIN_STATS = [
  { label: "کاربران", value: "۱۲۸" },
  { label: "سفارش‌ها", value: "۶۴" },
  { label: "نوشته‌ها", value: "۳۲" },
];

export function VignetteAdmin() {
  return (
    <div className="flex h-[192px] min-h-[180px] w-full gap-2.5 overflow-hidden rounded-2xl bg-brand-tint p-3">
      <div className="flex w-14 shrink-0 flex-col items-center gap-2 rounded-xl border border-border bg-surface px-2 py-2.5">
        <span className="size-[18px] rounded-[5px] bg-brand" />
        <span className="h-px w-[22px] bg-border" />
        <span className="flex h-5 w-full items-center gap-1 rounded-[5px] bg-brand/20 px-[5px]">
          <span className="size-2 rounded-sm bg-brand" />
          <span className="h-[3px] w-4 rounded-sm bg-brand/80" />
        </span>
        {[0, 1, 2].map((i) => (
          <span key={i} className="flex h-5 w-full items-center gap-1 px-[5px]">
            <span className="size-2 rounded-sm bg-brand/35" />
            <span className="h-[3px] w-4 rounded-sm bg-brand/20" />
          </span>
        ))}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <div className="grid grid-cols-3 gap-2">
          {ADMIN_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-end rounded-[10px] border border-border bg-surface px-2.5 py-2"
            >
              <span className="text-sm font-bold text-brand-fg">{stat.value}</span>
              <span className="text-[9px] text-text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="flex min-h-0 flex-1 items-end justify-center gap-2 rounded-xl border border-border bg-surface px-3.5 pb-2.5 pt-3">
          {ADMIN_BARS.map((h, i) => (
            <span
              key={i}
              className="w-[18px] rounded-sm bg-brand"
              style={{ height: h, opacity: 0.25 + (i % 4) * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const moduleVignettes = {
  users: VignetteUsers,
  roles: VignetteRoles,
  settings: VignetteSettings,
  store: VignetteStore,
  content: VignetteContent,
  visual: VignetteVisual,
  forms: VignetteForms,
  comments: VignetteComments,
} as const;

export type ModuleVignetteKey = keyof typeof moduleVignettes;
