import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "icon";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        className={cn("h-8 w-8", className)}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M10 10h5c3.314 0 6 2.686 6 6s-2.686 6-6 6h-1v-4h1c1.105 0 2-.895 2-2s-.895-2-2-2h-3v8H10V10z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Logo variant="icon" />
      <span className="text-xl font-bold">رینو</span>
    </div>
  );
}
