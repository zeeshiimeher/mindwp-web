function MapIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="400" height="300" fill="var(--color-mint)" />
      <path
        d="M0 90h400M0 180h400M90 0v300M230 0v300M320 0v300"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />
      <circle cx="200" cy="150" r="42" fill="var(--color-emerald)" opacity="0.15" />
      <circle cx="200" cy="150" r="10" fill="var(--color-emerald-deep)" stroke="var(--color-white)" strokeWidth="3" />
    </svg>
  );
}

export function FoundNearby() {
  return (
    <section id="found-nearby" className="nearby section">
      <div className="container nearby__inner">
        <div className="nearby__copy">
          <p className="eyebrow">Local SEO Authority</p>
          <h2>Found nearby — trusted before they call.</h2>
          <p>
            Nearby customers find you, then check whether to trust you before they ever pick up
            the phone. It holds when the listing, reviews, service-area details, and website all
            line up — and stay lined up.
          </p>
          <ul className="nearby__checklist">
            <li>
              <strong>Find</strong>
              <span>You show up for nearby searches.</span>
            </li>
            <li>
              <strong>Verify</strong>
              <span>Your details and service area line up.</span>
            </li>
          </ul>
        </div>

        <div className="nearby__map">
          <MapIllustration />
          <span className="nearby__badge nearby__badge--top">service near me</span>
          <span className="nearby__badge nearby__badge--center">Business details match</span>
          <span className="nearby__badge nearby__badge--bottom">
            <span className="nearby__badge-dot" aria-hidden="true" />
            Recent reviews
          </span>
        </div>
      </div>
    </section>
  );
}
