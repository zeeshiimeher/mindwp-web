import { Icon } from "@/components/ui/Icon";

const HERO_SUBCARDS = [
  { title: "Residential", body: "Let our experts help you choose the right fit for your home." },
  { title: "Commercial", body: "A variety of custom doors to meet your exact needs." },
  { title: "Repair & Service", body: "Expert repair and service for all makes and models." },
];

const GALLERY_THUMBS = [
  { tag: "Healthcare", title: "Healthcare service page", bg: "#c7d3e6" },
  { tag: "Retail", title: "Optical retail website", bg: "#d7ded8" },
  { tag: "Property", title: "Property management website", bg: "#aebfd6" },
  { tag: "Product", title: "SaaS product website", bg: "#c2d2e6" },
  { tag: "Support", title: "Support program website", bg: "#e9d3a3" },
  { tag: "Tourism", title: "Tourism service website", bg: "#a9d3dd" },
];

function BrowserDots() {
  return (
    <span className="proof-gallery__dots" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export function ProofGallery() {
  return (
    <section id="work" className="proof-gallery section on-mist">
      <div className="container proof-gallery__head">
        <div>
          <p className="eyebrow">The work</p>
          <h2>
            Website work
            <br />
            <span className="proof-gallery__headline-muted">you can inspect.</span>
          </h2>
        </div>
        <p className="proof-gallery__head-copy">
          These pages show the visible craft: clear offers, considered structure, trust placed
          where decisions happen, and next steps that stay in view.
        </p>
      </div>

      <div className="container">
        <div className="proof-gallery__feature">
          <div className="proof-gallery__feature-chrome">
            <BrowserDots />
            <span className="proof-gallery__feature-label">Home services lead-gen site</span>
          </div>
          <div className="proof-gallery__feature-hero">
            <div>
              <p className="proof-gallery__feature-headline">Your local garage door experts.</p>
              <span className="proof-gallery__feature-cta">Schedule your repair now</span>
            </div>
          </div>
          <div className="proof-gallery__feature-subcards">
            {HERO_SUBCARDS.map((card) => (
              <div className="proof-gallery__subcard" key={card.title}>
                <p className="proof-gallery__subcard-title">{card.title}</p>
                <p className="proof-gallery__subcard-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="proof-gallery__byline">
          <div>
            <p className="label-caps">Home services</p>
            <p className="proof-gallery__byline-title">Home services lead-gen site</p>
          </div>
          <p className="proof-gallery__byline-copy">
            Offer clarity, local proof, action paths, and service-area trust visible in one built
            surface.
          </p>
        </div>

        <div className="proof-gallery__grid">
          {GALLERY_THUMBS.map((thumb) => (
            <a className="proof-gallery__thumb" href="#work" key={thumb.title}>
              <BrowserDots />
              <span
                className="proof-gallery__thumb-media"
                style={{ background: thumb.bg }}
                aria-hidden="true"
              />
              <span className="proof-gallery__thumb-foot">
                <span>
                  <span className="label-caps">{thumb.tag}</span>
                  <span className="proof-gallery__thumb-title">{thumb.title}</span>
                </span>
                <span className="proof-gallery__thumb-arrow">
                  <Icon name="arrow-right" size={15} />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
