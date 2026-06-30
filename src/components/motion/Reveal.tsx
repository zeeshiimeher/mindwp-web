import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealVariant = "fade" | "rise" | "panel";

/**
 * Wraps content so it reveals on scroll. Server component — the actual
 * observing is done once by <RevealMotion>. Use `index` on siblings to stagger.
 */
export function Reveal({
  children,
  as: Tag = "div",
  variant = "rise",
  index = 0,
  className,
  style,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  index?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const merged: CSSProperties = { ...style };
  if (index) (merged as Record<string, string | number>)["--reveal-index"] = index;

  return (
    <Tag data-reveal={variant} className={className} style={merged}>
      {children}
    </Tag>
  );
}
