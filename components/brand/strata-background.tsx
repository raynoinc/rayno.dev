"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function StrataBackground() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted after initial render
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(168, 85, 247, 0.15), transparent 60%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(99, 102, 241, 0.1), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(168, 85, 247, 0.1), transparent 60%)",
        }}
      />

      {/* Strata layers */}
      <svg
        className="absolute inset-0 h-full w-full animate-drift"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: isDark ? "rgb(99, 102, 241)" : "rgb(139, 92, 246)",
                stopOpacity: 0.05,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: isDark ? "rgb(168, 85, 247)" : "rgb(99, 102, 241)",
                stopOpacity: 0.02,
              }}
            />
          </linearGradient>
        </defs>
        <path
          d="M0,160 Q360,120 720,160 T1440,160 L1440,0 L0,0 Z"
          fill="url(#grad1)"
        />
        <path
          d="M0,320 Q360,280 720,320 T1440,320 L1440,0 L0,0 Z"
          fill="url(#grad1)"
          opacity="0.6"
        />
        <path
          d="M0,480 Q360,440 720,480 T1440,480 L1440,0 L0,0 Z"
          fill="url(#grad1)"
          opacity="0.3"
        />
      </svg>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
