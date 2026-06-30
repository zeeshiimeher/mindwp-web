"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/components/ui/Button";
import type { NavItem } from "@/config/routes";
import { CANONICAL_SYSTEMS } from "@/content/canonical";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);
}

export function HeaderNav({
  navItems,
  ctaHref,
}: {
  navItems: NavItem[];
  ctaHref: string;
}) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [rendered, setRendered] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  const openMenu = () => {
    setRendered(true);
    window.requestAnimationFrame(() => setOpen(true));
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = getFocusableElements(menuRef.current);
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!rendered) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const inertElements = Array.from(document.body.children).filter(
      (element): element is HTMLElement =>
        element instanceof HTMLElement && element.id !== "mobile-nav",
    );
    const previousInert = inertElements.map((element) => ({
      element,
      inert: element.inert,
    }));
    inertElements.forEach((element) => {
      element.inert = true;
    });

    let closeTimer: number | undefined;
    if (!open) {
      closeTimer = window.setTimeout(() => setRendered(false), 260);
    }

    return () => {
      if (closeTimer) window.clearTimeout(closeTimer);
      document.body.style.overflow = previousOverflow;
      previousInert.forEach(({ element, inert }) => {
        element.inert = inert;
      });
    };
  }, [open, rendered]);

  return (
    <>
      <div className="mw-header__nav-wrap">
        <nav className="mw-header__nav" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className="mw-header__link type-ui-large"
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Button href={ctaHref}>{PRIMARY_CTA_LABEL}</Button>
      </div>

      <button
        type="button"
        className="mw-header__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={open ? close : openMenu}
      >
        {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
      </button>

      {mounted && rendered
        ? createPortal(
            <div
              id="mobile-nav"
              ref={menuRef}
              className="mw-mobile-menu"
              data-state={open ? "open" : "closed"}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              aria-hidden={!open}
            >
              <div className="mw-mobile-menu__inner">
                <div className="mw-mobile-menu__top">
                  <Link
                    href="/"
                    prefetch={false}
                    onClick={close}
                    className="mw-mobile-menu__brand type-h4"
                  >
                    <span className="mw-header__brand-mark" aria-hidden />
                    MindWP
                  </Link>
                  <button
                    ref={closeButtonRef}
                    type="button"
                    className="mw-mobile-menu__close"
                    aria-label="Close menu"
                    onClick={close}
                  >
                    <X size={22} aria-hidden />
                  </button>
                </div>

                <nav className="mw-mobile-menu__nav" aria-label="Primary">
                  <p className="mw-mobile-menu__label type-label-caps">Primary</p>
                  <div className="mw-mobile-menu__primary-list">
                    {navItems.map((item) => {
                      const active = isActivePath(pathname, item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          prefetch={false}
                          onClick={close}
                          className="mw-mobile-menu__primary-link type-h3-small"
                          aria-current={active ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                <nav className="mw-mobile-menu__systems" aria-label="Service systems">
                  <p className="mw-mobile-menu__label type-label-caps">Website systems</p>
                  <div className="mw-mobile-menu__system-list">
                    {CANONICAL_SYSTEMS.map((system) => {
                      const href = `/services/${system.slug}`;
                      const active = isActivePath(pathname, href);
                      return (
                        <Link
                          key={system.slug}
                          href={href}
                          prefetch={false}
                          onClick={close}
                          className="mw-mobile-menu__system-link type-ui"
                          aria-current={active ? "page" : undefined}
                        >
                          {system.label}
                        </Link>
                      );
                    })}
                  </div>
                </nav>

                <div className="mw-mobile-menu__footer">
                  <p className="mw-mobile-menu__note type-body-small">
                    Smart websites for service businesses and specialist clinics.
                  </p>
                  <Button href={ctaHref} onClick={close}>
                    {PRIMARY_CTA_LABEL}
                  </Button>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
