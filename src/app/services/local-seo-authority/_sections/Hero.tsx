import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const SIGNALS = ["Details match", "Service area listed", "Recent reviews", "Website confirms it"];

const COMPETITORS = [
  { name: "QuickCare Dental Group", meta: "4.2 · 2.4 km" },
  { name: "Value Dental Center", meta: "3.8 · 3.1 km" },
];

export function Hero() {
  return (
    <section id="hero" className="lsa-hero section on-dark">
      <div className="container lsa-hero__top">
        <div className="lsa-hero__intro">
          <p className="eyebrow">Local SEO Authority Systems</p>
          <h1>
            People search nearby.
            <br />
            <span className="lsa-hero__headline-muted">You&rsquo;re not the one they trust first.</span>
          </h1>
          <p className="lsa-hero__lede">
            Nearby customers need exactly what you do — but they compare quickly, settle on the
            business that feels safest, and move on. Local visibility starts with being found,
            then trusted.
          </p>
          <div className="lsa-hero__actions">
            <Button href="#review" variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="lsa-hero__artifact">
          <div className="lsa-pack">
            <span className="lsa-pack__notch" aria-hidden="true" />
            <div className="lsa-pack__query">
              <Icon name="search" size={14} />
              <span>dental implant clinic near me</span>
            </div>

            <ul className="lsa-pack__list">
              <li className="lsa-pack__row lsa-pack__row--featured">
                <div className="lsa-pack__row-head">
                  <p className="lsa-pack__row-name">Bright Smile Dental</p>
                  <span className="lsa-pack__row-meta">
                    <Icon name="star" size={11} />
                    4.9 · 1.8 km
                  </span>
                </div>
                <div className="lsa-pack__signals">
                  {SIGNALS.map((signal, index) => (
                    <span
                      className="lsa-pack__signal"
                      style={{ animationDelay: `${index * 0.35 + 0.3}s` }}
                      key={signal}
                    >
                      <Icon name="circle-check" size={11} />
                      {signal}
                    </span>
                  ))}
                </div>
              </li>

              {COMPETITORS.map((c) => (
                <li className="lsa-pack__row lsa-pack__row--dim" key={c.name}>
                  <div className="lsa-pack__row-head">
                    <p className="lsa-pack__row-name">{c.name}</p>
                    <span className="lsa-pack__row-meta">{c.meta}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
