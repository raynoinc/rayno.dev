import { HeroBackground } from "./hero-background";
import { HeroIntro } from "./hero-intro";
import { HeroVisual } from "./hero-visual";

/**
 * Hero (Figma 1:41). Fixed dark in both themes.
 * Motion spec: Figma 1:1053 / animations.md — keyframes live in globals.css (`.hero-*`).
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="hero-anim relative overflow-hidden bg-fixed-dark-bg pt-[76px] text-white lg:min-h-[1276px]"
    >
      <HeroBackground />
      <div className="relative flex flex-col items-center pt-14 pb-16 md:pt-[88px] lg:pb-0">
        <HeroIntro />
        <HeroVisual />
      </div>
    </section>
  );
}
