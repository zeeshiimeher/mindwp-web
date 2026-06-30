/**
 * Route + nav registry — the single source for navigation AND the sitemap, so
 * the two never drift. Dynamic routes are derived from the canonical lists.
 *
 * Banned-term-safe slugs only: /services, /work, /industries, /blog, /resources.
 * Never /systems, /portfolio, /topics (see AGENTS.md).
 */
import {
  CANONICAL_IMPLEMENTATIONS,
  CANONICAL_INDUSTRY_LANES,
  CANONICAL_SYSTEMS,
} from "@/content/canonical";

export interface NavItem {
  label: string;
  href: string;
}

/**
 * Primary (header) navigation.
 * Contact is the CTA, not a nav link. Pricing + Resources stay reachable via the
 * footer and the sitemap (STATIC_ROUTES) — they're intentionally not in the slim
 * top nav. Labels follow docs/PAGES.md.
 */
export const PRIMARY_NAV: NavItem[] = [
  { label: "What we build", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

/** Top-level static routes that always exist. */
export const STATIC_ROUTES = [
  "/",
  "/services",
  "/work",
  "/industries",
  "/about",
  "/pricing",
  "/resources",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
] as const;

/** Every public route, derived — static + systems + implementation + industries.
 * Consumed by app/sitemap.ts. (Blog/resource/work detail slugs are appended by
 * their content registries in Phase 2.) */
export function allRoutes(): string[] {
  const services = [
    ...CANONICAL_SYSTEMS.map((s) => `/services/${s.slug}`),
    ...CANONICAL_IMPLEMENTATIONS.map((s) => `/services/${s.slug}`),
  ];
  const industries = CANONICAL_INDUSTRY_LANES.flatMap((lane) => [
    `/industries/${lane.slug}`,
    ...lane.verticals.map((v) => `/industries/${lane.slug}/${v.slug}`),
  ]);
  return [...STATIC_ROUTES, ...services, ...industries];
}
