import Link from "next/link";

import { HeaderNav } from "@/components/layout/HeaderNav";
import { PRIMARY_NAV } from "@/config/routes";
import { buildContactHref } from "@/lib/contact/contactHref";

/** Global site header. Nav state is isolated in HeaderNav. */
export function Header() {
  return (
    <header className="mw-header">
      <div className="mw-container mw-header__inner">
        <Link href="/" className="mw-header__brand type-h4" aria-label="MindWP home">
          <span className="mw-header__brand-mark" aria-hidden />
          MindWP
        </Link>

        <HeaderNav navItems={PRIMARY_NAV} ctaHref={buildContactHref({ source: "nav" })} />
      </div>
    </header>
  );
}
