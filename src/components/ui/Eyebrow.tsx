import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Small uppercase section label with a leading rule. Color follows the cascade,
 * and the rule inherits text color via `bg-current`.
 */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("eyebrow-font inline-flex items-center gap-2", className)}>
      <span aria-hidden className="h-0.5 w-5 shrink-0 bg-current" />
      {children}
    </p>
  );
}
