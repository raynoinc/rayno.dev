import { HeroBackground } from "./hero-background";
import { HeroIntro } from "./hero-intro";
import { HeroVisual } from "./hero-visual";

/**
 * Hero — light: Figma 1:41 (light frame), dark: Figma 8:33 (dark frame).
 * Motion spec: Figma 1:1053 / animations.md — keyframes live in globals.css (`.hero-*`).
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="hero-anim relative overflow-hidden bg-gradient-to-b from-[#eef4ff] to-white to-75% pt-[76px] text-text-primary lg:min-h-[1192px] dark:bg-none dark:bg-fixed-dark-bg dark:text-white"
    >
      <HeroBackground />
      <div className="relative flex flex-col items-center pt-14 pb-16 md:pt-[88px] lg:pb-0">
        <HeroIntro />
        <HeroVisual />
      </div>
    </section>
  );
}
