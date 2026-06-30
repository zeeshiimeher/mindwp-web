import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Tone = "page" | "section" | "raised" | "band" | "accent" | "navy";
type Spacing = "compact" | "default" | "spacious" | "hero";

/** Full-bleed section band. `navy` adds `.on-navy` so type styles invert. */
export function Section({
  children,
  tone = "page",
  spacing = "default",
  as: Tag = "section",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  spacing?: Spacing;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        "mw-section",
        spacing === "compact" && "mw-section--compact",
        spacing === "default" && "mw-section--default",
        spacing === "spacious" && "mw-section--spacious",
        spacing === "hero" && "mw-section--hero",
        tone === "page" && "mw-section--page",
        tone === "navy" && "mw-section--navy on-navy",
        tone === "section" && "mw-section--section",
        tone === "raised" && "mw-section--raised",
        tone === "band" && "mw-section--band",
        tone === "accent" && "mw-section--accent",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
