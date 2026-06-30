import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * The one canonical button. Never hand-build a button.
 * `tone` = the surface it sits on (light default / dark navy sections).
 *   primary   · light: navy fill + white   · dark: emerald fill + navy text
 *   secondary · light: outline + ink        · dark: soft outline + on-navy
 *   text      · emerald-text link           · dark: emerald
 */
const button = cva("mw-btn", {
  variants: {
    variant: {
      primary: "mw-btn--primary",
      secondary: "mw-btn--secondary",
      text: "mw-btn--text",
    },
    tone: { light: "mw-btn--light", dark: "mw-btn--dark" },
    size: {
      sm: "mw-btn--sm",
      md: "mw-btn--md",
      lg: "mw-btn--lg",
    },
  },
  defaultVariants: { variant: "primary", tone: "light", size: "md" },
});

type ButtonVariants = VariantProps<typeof button>;

interface CommonProps extends ButtonVariants {
  children: ReactNode;
  className?: string;
}

type AnchorProps = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className"
  >;
type NativeProps = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className">;

export function Button(props: AnchorProps | NativeProps) {
  const { variant, tone, size, className } = props;
  const classes = cn(button({ variant, tone, size }), className);

  if (props.href !== undefined) {
    const {
      href,
      variant: _v,
      tone: _t,
      size: _s,
      className: _c,
      children,
      ...rest
    } = props as AnchorProps;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant: _v,
    tone: _t,
    size: _s,
    className: _c,
    children,
    ...rest
  } = props as NativeProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
