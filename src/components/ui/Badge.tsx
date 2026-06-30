import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const badge = cva("mw-badge", {
  variants: {
    variant: {
      solid: "mw-badge--solid",
      outline: "mw-badge--outline",
      tint: "mw-badge--tint",
      success: "mw-badge--success",
      warning: "mw-badge--warning",
      danger: "mw-badge--danger",
    },
  },
  defaultVariants: { variant: "tint" },
});

export function Badge({
  children,
  variant,
  className,
}: VariantProps<typeof badge> & { children: ReactNode; className?: string }) {
  return <span className={cn(badge({ variant }), className)}>{children}</span>;
}
