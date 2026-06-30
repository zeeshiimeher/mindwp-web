"use client";

import { useEffect } from "react";

/**
 * Tiny scroll-reveal island (null render). Sets [data-js-motion] on <html> so
 * the pre-hidden CSS state activates, then single-fires `.is-revealed` on each
 * [data-reveal] element as it enters view. Skips entirely under reduced-motion
 * or when IntersectionObserver is unavailable — content stays visible. Mount
 * once in the root layout.
 */
export function RevealMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    root.setAttribute("data-js-motion", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    const observeIn = (scope: ParentNode) =>
      scope
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
        .forEach((el) => io.observe(el));

    observeIn(document);

    // Catch elements rendered after hydration (e.g. client transitions).
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches("[data-reveal]")) io.observe(node);
            observeIn(node);
          }
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      root.removeAttribute("data-js-motion");
    };
  }, []);

  return <span hidden aria-hidden="true" data-reveal-motion="" />;
}
