/**
 * Glows (1:42, 1:43, 1:44) + Rayno Strata (3:2).
 * Positions are taken from the 1440 frame and anchored to the horizontal centre.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* 1:42 blue glow — pulses (6s) */}
      <div className="hero-glow absolute top-[-300px] left-1/2 ml-[-490px] h-[560px] w-[980px] rounded-[370px] bg-[#0d6eff] opacity-40 blur-[140px]" />
      {/* 1:43 */}
      <div className="absolute top-[520px] left-1/2 ml-[-840px] h-[380px] w-[520px] rounded-[222px] bg-[#004de5] opacity-30 blur-[140px]" />
      {/* 1:44 */}
      <div className="absolute top-[380px] left-1/2 ml-[380px] h-[320px] w-[420px] rounded-[183px] bg-[#4d8eff] opacity-20 blur-[140px]" />
      {/* 3:2 strata — 2400px wide so contours never clip; edges fade out via an SVG mask. Slow drift (9s ping-pong) */}
      <div className="absolute top-[40px] left-1/2 ml-[-1200px] h-[1320px] w-[2400px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/strata/light/hero_2400x1320.svg" alt="" className="hero-drift block size-full max-w-none" />
      </div>
    </div>
  );
}
