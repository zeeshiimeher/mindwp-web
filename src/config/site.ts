/** Site-wide constants. The single place for name, URL, and contact identity. */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindwp.com";

export const SITE = {
  name: "MindWP",
  /** Production origin — no trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
  url: rawUrl.replace(/\/$/, ""),
  /** Public anchor line (AGENTS.md and docs/STRATEGY.md). */
  tagline: "Work Comes In. Too Much Slips Away.",
  description:
    "Smart websites — conversion-focused sites with lead handling built in — for established service businesses and specialist clinics. The handling is built in, not bolted on.",
  locale: "en",
  /** Where contact-form enquiries are delivered. Override with CONTACT_EMAIL. */
  enquiryEmail: process.env.CONTACT_EMAIL ?? "zeeshiimeher@gmail.com",
} as const;

/** Build an absolute URL from a site-relative path (for canonical/OG/sitemap). */
export function absoluteUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "" : clean}`;
}
