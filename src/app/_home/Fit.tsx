import { Icon } from "@/components/ui/Icon";

const GOOD_FIT = [
  "You are an established business or clinic with real activity and meaningful enquiries.",
  "Calls, forms, quotes, bookings, or reviews are slipping between handoffs.",
  "Each enquiry is valuable enough to deserve a clear owner and next step.",
  "You value a clear, maintainable website you can actually edit.",
];

const NOT_FIT = [
  "Chasing the cheapest website",
  "Looking for a brochure-only redesign",
  "Brand new, with no traction yet",
  "Expecting promised rankings or instant results",
  "Want another software platform to operate",
];

export function Fit() {
  return (
    <section className="fit section">
      <div className="container">
        <p className="eyebrow">Honest about fit</p>
        <h2 className="fit__heading">This is not for everyone.</h2>
        <p className="fit__lede">
          We would rather say so up front. A smart website system makes sense when there is real
          work to protect, and too much of it is slipping.
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
