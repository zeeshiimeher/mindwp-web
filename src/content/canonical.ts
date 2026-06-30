/**
 * Canonical allow-lists — the anti-drift backbone.
 * The only place new systems/industries are declared. Content, routes, nav,
 * and the SEO graph all validate against these. Adding a slug here is a
 * deliberate offer/IA change (see docs/STRATEGY.md + docs/PAGES.md).
 *
 * Banned, enforced by `pnpm check:names`: revived offer names, /systems,
 * /portfolio, /topics, "Revenue Recovery" as a structure, backend platform name.
 */

/** Role each primary system plays in the connected handling path. */
export type SystemRole = "core" | "entry" | "response" | "operation" | "trust";

export interface CanonicalSystem {
  slug: string;
  label: string;
  role: SystemRole;
  /** Flagship = Smart Website Systems; the public anchor + visual hub. */
  flagship?: boolean;
}

/**
 * The 5 active primary systems. Smart Website Systems is the flagship/hub.
 * Five-system rule (design Law 6 · docs/STRATEGY.md): exactly five. The
 * fixed-length `satisfies` below makes a sixth entry fail `pnpm typecheck` —
 * change the docs and this guard together, never silently.
 */
export const CANONICAL_SYSTEMS = [
  { slug: "smart-website-systems", label: "Smart Website Systems", role: "core", flagship: true },
  { slug: "local-seo-authority", label: "Local SEO Authority Systems", role: "entry" },
  { slug: "lead-response-handling", label: "Lead Response & Handling Systems", role: "response" },
  { slug: "follow-up-crm", label: "Follow-Up & CRM Systems", role: "operation" },
  { slug: "reputation-review-systems", label: "Reputation & Review Systems", role: "trust" },
] as const satisfies readonly [
  CanonicalSystem,
  CanonicalSystem,
  CanonicalSystem,
  CanonicalSystem,
  CanonicalSystem,
];

/** Implementation pathways that sit UNDER Smart Website Systems (build routes,
 * never primary systems — they resolve upward to SWS). */
export const CANONICAL_IMPLEMENTATIONS = [
  { slug: "wordpress-development", label: "WordPress Development" },
  { slug: "elementor", label: "Elementor" },
  { slug: "bricks-builder", label: "Bricks" },
  { slug: "divi5", label: "Divi" },
  { slug: "woocommerce", label: "WooCommerce" },
  { slug: "website-redesign-system-rebuild", label: "Website Rebuild" },
] as const;

/** Two industry lanes only. Front-door verticals (built deepest first) flagged. */
export const CANONICAL_INDUSTRY_LANES = [
  {
    slug: "home-services",
    label: "Home Services",
    verticals: [
      { slug: "roofing", label: "Roofing", frontDoor: true },
      { slug: "hvac", label: "HVAC" },
      { slug: "plumbing", label: "Plumbing" },
      { slug: "foundation-repair", label: "Foundation Repair" },
      { slug: "septic", label: "Septic Services" },
      { slug: "tree-service", label: "Tree Service" },
    ],
  },
  {
    slug: "healthcare-practices",
    label: "Healthcare Practices",
    verticals: [
      { slug: "dental-implant", label: "Dental Implant Clinics", frontDoor: true },
      { slug: "orthodontic", label: "Orthodontic" },
      { slug: "oral-surgery", label: "Oral Surgery" },
      { slug: "dermatology", label: "Dermatology" },
      { slug: "ent-sinus", label: "ENT / Sinus" },
      { slug: "podiatry", label: "Podiatry" },
      { slug: "hearing-aid", label: "Hearing Aid / Audiology" },
      { slug: "physiotherapy", label: "Physiotherapy" },
      { slug: "optometry", label: "Optometry" },
      { slug: "orthopedic", label: "Orthopedic" },
    ],
  },
] as const;

export type SystemSlug = (typeof CANONICAL_SYSTEMS)[number]["slug"];
export type ImplementationSlug = (typeof CANONICAL_IMPLEMENTATIONS)[number]["slug"];
export type IndustryLaneSlug = (typeof CANONICAL_INDUSTRY_LANES)[number]["slug"];

const SYSTEM_SLUGS = new Set<string>(CANONICAL_SYSTEMS.map((s) => s.slug));
const IMPLEMENTATION_SLUGS = new Set<string>(CANONICAL_IMPLEMENTATIONS.map((s) => s.slug));

export const isSystemSlug = (slug: string): slug is SystemSlug => SYSTEM_SLUGS.has(slug);
export const isImplementationSlug = (slug: string): slug is ImplementationSlug =>
  IMPLEMENTATION_SLUGS.has(slug);

export const getSystem = (slug: string): CanonicalSystem | undefined =>
  CANONICAL_SYSTEMS.find((s) => s.slug === slug);
