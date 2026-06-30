import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Small uppercase section label with a leading rule. Color follows the cascade,
 * and the rule inherits text color via `bg-current`.
 */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mw-eyebrow type-eyebrow", className)}>{children}</p>;
}
