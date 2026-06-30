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

function footerHeadingId(title: string) {
  return `footer-${title.toLowerCase().replaceAll(" ", "-")}`;
}

function Col({ title, links }: { title: string; links: FooterLink[] }) {
  const headingId = footerHeadingId(title);

  return (
    <section className="mw-footer__col" aria-labelledby={headingId}>
      <h2 id={headingId} className="mw-footer__heading type-label-caps">
        {title}
      </h2>
      <ul className="mw-footer__list">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} prefetch={false} className="mw-footer__link type-ui">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mw-footer on-navy">
      <div className="mw-container mw-footer__inner">
        <div className="mw-footer__grid">
          <div className="mw-footer__brand">
            <span className="mw-footer__name type-h4">{SITE.name}</span>
            <p className="mw-footer__description type-body-small">
              Smart websites — built to bring work in and make sure it doesn&rsquo;t slip away. For
              service businesses and specialist clinics.
            </p>
          </div>
          <Col title="What we build" links={systems} />
          <Col title="Industries" links={industries} />
          <Col title="Company" links={company} />
        </div>

        <div className="mw-footer__bottom type-caption">
          <span>
            © {year} {SITE.name}. Building service-business websites since 2015.
          </span>
          <nav className="mw-footer__legal" aria-label="Legal">
            {FOOTER_LEGAL.map((l, i) => (
              <span key={l.href} className="mw-footer__legal-item">
                {i > 0 && (
                  <span aria-hidden className="mw-footer__separator">
                    ·
                  </span>
                )}
                <Link href={l.href} prefetch={false} className="mw-footer__legal-link">
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
