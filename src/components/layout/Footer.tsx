import Link from "next/link";

import { FOOTER_LEGAL } from "@/config/routes";
import { SITE } from "@/config/site";
import { CANONICAL_SYSTEMS } from "@/content/canonical";

/** Global site footer. Keep visually stable unless the page rebuild proves a need. */

type FooterLink = { label: string; href: string };

const systems: FooterLink[] = CANONICAL_SYSTEMS.map((s) => ({
  // Flagship keeps its full name; the rest drop the trailing "Systems".
  label: "flagship" in s && s.flagship ? s.label : s.label.replace(/ Systems$/, ""),
  href: `/services/${s.slug}`,
}));

const industries: FooterLink[] = [
  { label: "Healthcare Practices", href: "/industries/healthcare-practices" },
  { label: "Dental Implant Clinics", href: "/industries/healthcare-practices/dental-implant" },
  { label: "Home Services", href: "/industries/home-services" },
  { label: "Roofing", href: "/industries/home-services/roofing" },
  { label: "HVAC", href: "/industries/home-services/hvac" },
];

const company: FooterLink[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

function Col({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="label-font-caps text-muted-inverse">{title}</h2>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="ui-font text-muted-inverse transition-colors hover:text-ink-inverse"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mw-section--navy on-navy">
      <div className="mw-container pb-10 pt-16">
        <div className="grid gap-x-14 gap-y-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <span className="h4-font leading-none text-ink-inverse">{SITE.name}</span>
            <p className="body-font-s max-w-xs text-muted-inverse">
              Smart websites — built to bring work in and make sure it doesn&rsquo;t slip away. For
              service businesses and specialist clinics.
            </p>
          </div>
          <Col title="What we build" links={systems} />
          <Col title="Industries" links={industries} />
          <Col title="Company" links={company} />
        </div>

        <div className="caption-font mt-12 flex flex-col gap-3 border-t border-navy-line pt-6 text-muted-inverse sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {SITE.name}. Building service-business websites since 2015.
          </span>
          <nav className="flex items-center gap-3" aria-label="Legal">
            {FOOTER_LEGAL.map((l, i) => (
              <span key={l.href} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-navy-line-soft">
                    ·
                  </span>
                )}
                <Link href={l.href} className="transition-colors hover:text-ink-inverse">
                  {l.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
