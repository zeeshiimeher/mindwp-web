import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const fieldBase =
  "control-font min-h-12 w-full rounded-sm border bg-section px-4 py-3 text-ink placeholder:text-subtle transition-colors focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:border-disabled-border disabled:bg-disabled-bg disabled:text-disabled-text disabled:placeholder:text-disabled-text";
const fieldOk = "border-line-strong focus:border-focus-light focus:ring-focus-light/25";
const fieldErr = "border-danger focus:border-danger focus:ring-danger/25";

type WithInvalid<T> = T & { invalid?: boolean };

export function Input({ invalid, className, ...props }: WithInvalid<ComponentProps<"input">>) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(fieldBase, invalid ? fieldErr : fieldOk, className)}
      {...props}
    />
  );
}

export function Textarea({
  invalid,
  className,
  ...props
}: WithInvalid<ComponentProps<"textarea">>) {
  return (
    <textarea
      aria-invalid={invalid || undefined}
      className={cn(fieldBase, "min-h-32 resize-y", invalid ? fieldErr : fieldOk, className)}
      {...props}
    />
  );
}

export function Select({
  invalid,
  className,
  children,
  ...props
}: WithInvalid<ComponentProps<"select">>) {
  return (
    <select
      aria-invalid={invalid || undefined}
      className={cn(fieldBase, invalid ? fieldErr : fieldOk, className)}
      {...props}
    >
      {children}
    </select>
  );
}

export function Label({ className, children, ...props }: ComponentProps<"label">) {
  return (
    <label className={cn("label-font mb-1.5 block text-ink", className)} {...props}>
      {children}
    </label>
  );
}

export function FieldError({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return <p className="caption-font mt-1 text-danger">{children}</p>;
}

/** Label + control + error, wired together. */
export function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor}>
        {label}
        {optional && <span className="font-normal text-subtle"> (optional)</span>}
      </Label>
      {children}
      <FieldError>{error}</FieldError>
    </div>
  );
}
