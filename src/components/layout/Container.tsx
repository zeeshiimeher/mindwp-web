import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Centred 1440 content column with the standard inline padding. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mw-container", className)}>{children}</div>;
}
