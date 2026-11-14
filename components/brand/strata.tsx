/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

interface StrataProps {
  /** File name in /public/assets/strata/{light,dark}/ without extension */
  name: string;
  /** Themed files have a dedicated dark variant (see assets/strata/index.json) */
  themed?: boolean;
  className?: string;
  imgClassName?: string;
}

/** «Rayno Strata» background motif — contour lines rippling out from the logo mark. */
export function Strata({ name, themed = false, className, imgClassName }: StrataProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      <img
        src={`/assets/strata/light/${name}.svg`}
        alt=""
        className={cn("block size-full max-w-none", themed && "dark:hidden", imgClassName)}
      />
      {themed && (
        <img
          src={`/assets/strata/dark/${name}.svg`}
          alt=""
          className={cn("hidden size-full max-w-none dark:block", imgClassName)}
        />
      )}
    </div>
  );
}
