/** 1:86 — dashed connectors from the window to the modules (dash flow 1.6s). */
const paths = ["M300 300C300 330 260 330 260 352", "M560 300V352", "M820 300C820 330 860 330 860 352"];

export function ConnectorPaths() {
  return (
    <svg aria-hidden width="1120" height="560" viewBox="0 0 1120 560" fill="none" className="absolute inset-0">
      {paths.map((d) => (
        <path
          key={d}
          d={d}
          className="hero-flow stroke-[#0d6eff]/45 dark:stroke-[#4d8eff]/60"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
      ))}
    </svg>
  );
}
