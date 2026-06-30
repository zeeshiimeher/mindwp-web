"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { PRIMARY_NAV } from "@/config/routes";
import { buildContactHref } from "@/lib/contact/contactHref";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";
import { cn } from "@/lib/utils";

/** Global site header. The mobile toggle is the only reason this is a client island. */
export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="border-b border-line bg-section/85 backdrop-blur-md supports-[backdrop-filter]:bg-section/75">
      <div className="mw-container flex h-14 items-center justify-between gap-6">
        <Link href="/" onClick={close} className="h4-font leading-none text-ink">
          MindWP
        </Link>

        {/* Desktop: nav + CTA grouped right */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8" aria-label="Primary">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ui-font-l font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button href={buildContactHref({ source: "nav" })}>{PRIMARY_CTA_LABEL}</Button>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-sm text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={cn(
          "border-t border-line bg-section md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mw-container flex flex-col gap-1 py-4" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="ui-font-l py-2 font-medium text-muted hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <Button href={buildContactHref({ source: "nav" })} className="w-full">
              {PRIMARY_CTA_LABEL}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
