import { Icon } from "@/components/ui/Icon";

const GOOD_FIT = [
  "You're an established business or clinic with real, ongoing nearby demand.",
  "Your public details are scattered, outdated, or inconsistent across listings.",
  "Every nearby enquiry is valuable enough to be worth protecting.",
  "You want the local presence and the website working from the same facts.",
];

const NOT_FIT = [
  "Chasing a specific ranking position",
  "Selling nationally with no real local service area",
  "Brand new, with no service history yet",
  "Expecting overnight results",
  "Want a monthly retainer without a website worth landing on",
];

export function Fit() {
  return (
    <section className="fit section">
      <div className="container">
        <p className="eyebrow">Honest about the fit</p>
        <h2 className="fit__heading">Right for local businesses, not all.</h2>
        <p className="fit__lede">
          Local SEO Authority pays off when nearby demand exists and you&rsquo;re losing it.
          It&rsquo;s the wrong fit for national-only or hype-led expectations.
        </p>

        <div className="fit__grid">
          <div>
            <p className="fit__col-label">A good fit if</p>
            <ul className="fit__list">
              {GOOD_FIT.map((item) => (
                <li className="fit__item" key={item}>
                  <span className="fit__item-icon fit__item-icon--good">
                    <Icon name="check" size={12} />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="fit__card">
            <p className="fit__col-label fit__col-label--muted">Not the right fit if</p>
            <ul className="fit__list">
              {NOT_FIT.map((item) => (
                <li className="fit__item fit__item--compact" key={item}>
                  <span className="fit__item-icon fit__item-icon--bad">
                    <Icon name="x" size={12} />
                  </span>
                  <p className="fit__item-text-sm">{item}</p>
                </li>
              ))}
            </ul>
            <p className="fit__card-note">
              If that&rsquo;s you, we&rsquo;ll say so up front and point you somewhere better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
