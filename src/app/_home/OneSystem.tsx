const CROSSED_OUT = [
  "an SEO retainer,",
  "a website agency,",
  "a forms tool,",
  "a half-set-up CRM,",
  "a review platform.",
];

const BUILT_IN = ["found", "answered", "owned", "proven"];

export function OneSystem() {
  return (
    <section className="one-system section">
      <div className="container container--content one-system__intro">
        <p className="eyebrow eyebrow--split">
          <span className="eyebrow__tick" />
          One thing, not five purchases
          <span className="eyebrow__tick" />
        </p>
        <h2>
          One system, <span className="one-system__headline-muted">not five vendors.</span>
        </h2>

        <p className="one-system__crossed">
          Not{" "}
          {CROSSED_OUT.map((phrase, index) => (
            <span key={phrase}>
              <span className="one-system__strike">{phrase}</span>
              {index < CROSSED_OUT.length - 1 ? " plus " : ""}
            </span>
          ))}
        </p>

        <p className="one-system__promise">
          One website where being{" "}
          {BUILT_IN.map((word, index) => (
            <span key={word}>
              <span className="one-system__underline">{word}</span>
              {index < BUILT_IN.length - 2 ? ", " : index === BUILT_IN.length - 2 ? ", and " : ""}
            </span>
          ))}{" "}
          is built in.
        </p>

        <p className="one-system__body">
          Five logins, five invoices — and still nobody owns the enquiry. That is the pile this
          replaces. When something needs to change, there is no vendor hand-off.
        </p>
      </div>

      <div className="container one-system__diagram-wrap">
        <svg viewBox="0 0 280 64" className="one-system__diagram" aria-hidden="true">
          <line x1="20" y1="4" x2="140" y2="56" stroke="var(--border-hairline)" strokeWidth="1" />
          <line x1="80" y1="4" x2="140" y2="56" stroke="var(--border-hairline)" strokeWidth="1" />
          <line x1="140" y1="4" x2="140" y2="56" stroke="var(--border-hairline)" strokeWidth="1" />
          <line x1="200" y1="4" x2="140" y2="56" stroke="var(--border-hairline)" strokeWidth="1" />
          <line x1="260" y1="4" x2="140" y2="56" stroke="var(--border-hairline)" strokeWidth="1" />
          <circle cx="20" cy="4" r="2.5" fill="var(--text-secondary)" />
          <circle cx="80" cy="4" r="2.5" fill="var(--text-secondary)" />
          <circle cx="140" cy="4" r="2.5" fill="var(--text-secondary)" />
          <circle cx="200" cy="4" r="2.5" fill="var(--text-secondary)" />
          <circle cx="260" cy="4" r="2.5" fill="var(--text-secondary)" />
          <circle cx="140" cy="56" r="5" fill="var(--color-emerald-deep)" />
        </svg>
        <p className="label-caps">Below — how the five connect</p>
      </div>
    </section>
  );
}
