const ANNOTATIONS = [
  {
    label: "Names the treatment",
    detail: "Not a generic services page — the exact procedure, up front.",
  },
  {
    label: "Local trust at the decision",
    detail: "Credentials and area sit beside the offer, not on another page.",
  },
  {
    label: "Proof stays in context",
    detail: "A recent review sits with the treatment it is actually about.",
  },
  {
    label: "One specific next step",
    detail: "A named consultation, not a general contact form.",
  },
] as const;

export function ClinicScenario() {
  return (
    <section id="clinic-scenario" className="scenario section">
      <div className="container scenario__inner">
        <div className="scenario__header">
          <p className="eyebrow">Illustrative scenario</p>
          <h2>What this looks like for a specialist clinic.</h2>
          <p className="scenario__lead">
            A nearby patient searches for a specific treatment. Too often the page speaks
            generally, proof sits elsewhere, and the first request feels like a form, not a
            next step. Here is the same page once it agrees with the search.
          </p>
        </div>

        <div className="scenario__demo">
          <div className="scenario__mock">
            <div className="work__browser-chrome">
              <span className="work__browser-dots">
                <span />
                <span />
                <span />
              </span>
              <span className="work__browser-url">brightsmile-implants.co.uk/dental-implants</span>
            </div>

            <div className="scenario__mock-page">
              <div className="scenario__mock-row">
                <span className="scenario__mock-badge">1</span>
                <div>
                  <p className="scenario__mock-kicker">Dental implants · clear costs, up front</p>
                  <p className="scenario__mock-headline">
                    Considering implants? A consultation, then a clear plan.
                  </p>
                </div>
              </div>

              <div className="scenario__mock-row">
                <span className="scenario__mock-badge">2</span>
                <div className="scenario__mock-trust">
                  <span>Consultant-led care</span>
                  <span>Serving the local area</span>
                </div>
              </div>

              <div className="scenario__mock-row">
                <span className="scenario__mock-badge">3</span>
                <p className="scenario__mock-proof">
                  &ldquo;Clear costs before anything else.&rdquo; — recent patient
                </p>
              </div>

              <div className="scenario__mock-row">
                <span className="scenario__mock-badge">4</span>
                <span className="scenario__mock-cta">Book a consultation</span>
              </div>
            </div>
          </div>

          <ol className="scenario__legend">
            {ANNOTATIONS.map((note, index) => (
              <li key={note.label}>
                <span className="scenario__legend-index">{index + 1}</span>
                <div>
                  <strong>{note.label}</strong>
                  <p>{note.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
