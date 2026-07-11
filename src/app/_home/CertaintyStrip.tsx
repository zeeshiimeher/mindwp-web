const STEPS = [
  { index: "01", label: "Understand" },
  { index: "02", label: "Trust" },
  { index: "03", label: "Ask" },
  { index: "04", label: "Be answered" },
] as const;

export function CertaintyStrip() {
  return (
    <section className="certainty section on-dark">
      <div className="container certainty__inner">
        <div className="certainty__heading">
          <p className="eyebrow">Before the form</p>
          <h2>
            They do not need more information.{" "}
            <span className="certainty__muted">They need enough certainty to ask.</span>
          </h2>
        </div>
        <ul className="certainty__steps">
          {STEPS.map((step) => (
            <li key={step.index}>
              <span className="certainty__step-index">{step.index}</span>
              <strong>{step.label}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
