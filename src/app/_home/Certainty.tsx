const STEPS = [
  { num: "01", label: "Understand" },
  { num: "02", label: "Trust" },
  { num: "03", label: "Ask" },
  { num: "04", label: "Be answered" },
];

export function Certainty() {
  return (
    <section className="certainty section on-dark">
      <div className="container container--content certainty__intro">
        <p className="eyebrow eyebrow--split">
          <span className="eyebrow__tick" />
          Before the form
          <span className="eyebrow__tick" />
        </p>
        <h2>
          They do not need more information.
          <br />
          <span className="certainty__headline-muted">They need enough certainty to ask.</span>
        </h2>
      </div>

      <div className="container certainty__grid">
        {STEPS.map((step) => (
          <div className="certainty__cell" key={step.num}>
            <span className="label-caps">{step.num}</span>
            <p className="certainty__cell-label">{step.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
