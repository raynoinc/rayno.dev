import { content } from "@/lib/content";
import { BrowserMock, CustomDesignTag } from "./browser-mock";
import { ConnectorPaths } from "./connector-paths";
import { ModuleCard } from "./module-card";
import { RaynoPlate } from "./rayno-plate";

/**
 * 1:84 / 1:85 — assembly visual: custom design (window) lands on Rayno's
 * ready modules and base plate.
 * ≥ md: exact 1120×560 Figma composition, scaled down on tablet.
 * < md: fluid stacked version of the same pieces.
 */
export function HeroVisual() {
  const { modules } = content.hero;
  return (
    <div className="mt-16 w-full">
      {/* Desktop / tablet: absolute composition from Figma */}
      <div className="hero-stage relative mx-auto hidden md:block">
        <div className="hero-stage-inner absolute top-0 left-1/2 h-[560px] w-[1120px]">
          <ConnectorPaths />

          {/* 1:90 window + 1:115 tag land together */}
          <div className="hero-land absolute top-0 left-[170px] h-[300px] w-[780px]">
            <BrowserMock />
            <div className="absolute top-[-18px] left-[730px]">
              <CustomDesignTag />
            </div>
          </div>

          {/* 1:118 modules row */}
          <div className="absolute top-[352px] left-[110px] flex w-[900px] justify-center gap-3.5">
            {modules.map((m, i) => (
              <ModuleCard
                key={m.sublabel}
                {...m}
                index={modules.length - 1 - i}
                style={{ transform: `translateY(${m.offset}px)` }}
              />
            ))}
          </div>

          {/* 1:179 plate */}
          <div className="hero-plate absolute top-[450px] left-[80px] w-[960px]">
            <RaynoPlate />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center gap-6 px-5 md:hidden">
        <div className="hero-land relative w-full max-w-[520px] pt-[18px]">
          <BrowserMock />
          <div className="absolute top-0 right-3">
            <CustomDesignTag />
          </div>
        </div>
        <div className="flex w-full max-w-[520px] flex-wrap justify-center gap-3 [&>*]:w-[calc(50%-6px)] min-[480px]:[&>*]:w-[calc(33.333%-8px)]">
          {modules.map((m, i) => (
            <ModuleCard key={m.sublabel} {...m} index={modules.length - 1 - i} />
          ))}
        </div>
        <div className="hero-plate w-full max-w-[520px]">
          <RaynoPlate />
        </div>
      </div>
    </div>
  );
}
