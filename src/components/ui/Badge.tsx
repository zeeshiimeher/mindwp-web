import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const badge = cva(
  "ui-font-s inline-flex min-h-6 items-center rounded-md px-2.5 py-1 font-semibold",
  {
    variants: {
      variant: {
        solid: "bg-emerald text-navy",
        outline: "border border-line-strong text-muted",
        tint: "bg-emerald-soft text-emerald-text",
        success: "border border-success-border bg-success-surface text-success-text",
        warning: "border border-warning-border bg-warning-surface text-warning",
        danger: "border border-danger-border bg-danger-surface text-danger",
      },
    },
    defaultVariants: { variant: "tint" },
  },
);

export function Badge({
  children,
  variant,
  className,
}: VariantProps<typeof badge> & { children: ReactNode; className?: string }) {
  return <span className={cn(badge({ variant }), className)}>{children}</span>;
}
