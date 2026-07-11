const GOOD_FIT = [
  "You are an established business or clinic with real activity and meaningful enquiries.",
  "Calls, forms, quotes, bookings, follow-up, or reviews are slipping between handoffs.",
  "Each enquiry is valuable enough to deserve a clear owner and next step.",
  "You value a clear, maintainable website you can actually edit.",
] as const;

const NOT_FIT = [
  "Chasing the cheapest website",
  "Looking for a brochure-only redesign",
  "Brand new, with no traction yet",
  "Expecting promised rankings or instant results",
  "Want another software platform to operate",
] as const;

export function FitSection() {
  return (
    <section className="fit section">
      <div className="container fit__inner">
        <div className="fit__header">
          <p className="eyebrow">Honest about fit</p>
          <h2>This is not for everyone.</h2>
          <p className="fit__lead">
            We would rather say so up front. A smart website system makes sense when there is
            real work to protect, and too much of it is slipping.
          </p>
        </div>

        <div className="fit__columns">
          <div className="fit__column">
            <p className="fit__column-title fit__column-title--good">A good fit if</p>
            <ul className="fit__list fit__list--good">
              {GOOD_FIT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="fit__column">
            <p className="fit__column-title">Not the right fit if</p>
            <ul className="fit__list fit__list--not">
              {NOT_FIT.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fit__note">
              If that&rsquo;s you, we&rsquo;ll say so up front and point you somewhere better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
