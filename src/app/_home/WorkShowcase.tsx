import Image from "next/image";

const FEATURED = {
  src: "/work/work-home-services-site.png",
  alt: "Home services lead-generation website homepage",
  eyebrow: "Home services",
  title: "Home services lead-gen site",
  detail: "Offer clarity, local proof, action paths, and service-area trust visible in one built surface.",
} as const;

const GRID = [
  {
    src: "/work/work-healthcare-service-page.png",
    alt: "Healthcare service page website",
    eyebrow: "Healthcare",
    title: "Healthcare service page",
  },
  {
    src: "/work/work-optical-retail-site.png",
    alt: "Optical retail website",
    eyebrow: "Retail",
    title: "Optical retail website",
  },
  {
    src: "/work/work-property-management-site.png",
    alt: "Property management website",
    eyebrow: "Property",
    title: "Property management website",
  },
  {
    src: "/work/work-saas-product-site.png",
    alt: "SaaS product website",
    eyebrow: "Product",
    title: "SaaS product website",
  },
  {
    src: "/work/work-support-program-site.png",
    alt: "Support program website",
    eyebrow: "Support",
    title: "Support program website",
  },
  {
    src: "/work/work-tourism-service-site.png",
    alt: "Tourism service website",
    eyebrow: "Tourism",
    title: "Tourism service website",
  },
] as const;

function BrowserChrome({ label, small }: { label: string; small?: boolean }) {
  return (
    <div className={`work__browser-chrome${small ? " work__browser-chrome--small" : ""}`}>
      <span className="work__browser-dots">
        <span />
        <span />
        <span />
      </span>
      <span className="work__browser-url">{label}</span>
    </div>
  );
}

export function WorkShowcase() {
  return (
    <section id="work" className="work section">
      <div className="container work__inner">
        <div className="work__header">
          <div className="work__heading">
            <p className="eyebrow">The work</p>
            <h2>
              Website <span className="work__muted">work you can inspect.</span>
            </h2>
          </div>
          <p className="work__lead">
            These pages show the visible craft: clear offers, considered structure, trust placed
            where decisions happen, and next steps that stay in view.
          </p>
        </div>

        <figure className="work__featured">
          <BrowserChrome label={FEATURED.title} />
          <div className="work__media work__media--featured">
            <Image src={FEATURED.src} alt={FEATURED.alt} fill sizes="(max-width: 64rem) 100vw, 72rem" />
          </div>
          <figcaption>
            <div>
              <p className="work__card-eyebrow">{FEATURED.eyebrow}</p>
              <h3>{FEATURED.title}</h3>
            </div>
            <p>{FEATURED.detail}</p>
          </figcaption>
        </figure>

        <ul className="work__grid">
          {GRID.map((item) => (
            <li key={item.src}>
              <figure className="work__card">
                <BrowserChrome label={item.title} small />
                <div className="work__media">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 48rem) 100vw, 24rem" />
                </div>
                <figcaption>
                  <p className="work__card-eyebrow">{item.eyebrow}</p>
                  <h4>{item.title}</h4>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
