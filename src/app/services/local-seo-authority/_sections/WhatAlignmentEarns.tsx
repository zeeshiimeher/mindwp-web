const STEPS = [
  { num: "01", label: "Find you", body: "The search turns up the right business, in the right area." },
  { num: "02", label: "Verify you", body: "Every surface they check tells the same story." },
  { num: "03", label: "Call, confident", body: "There's nothing left to reconcile before they reach out." },
];

export function WhatAlignmentEarns() {
  return (
    <section className="lsa-earns section on-dark">
      <div className="container container--content lsa-earns__inner">
        <p className="eyebrow">The work · what alignment earns</p>
        <h2 className="lsa-earns__heading">
          Line it all up, and the area starts choosing you.
        </h2>
        <p className="lsa-earns__lede">
          When public evidence supports the same local choice, nearby customers can find you,
          verify you, and feel confident enough to call.
        </p>

        <div className="lsa-earns__steps">
          {STEPS.map((step) => (
            <div className="lsa-earns__step" key={step.num}>
              <span className="label-caps">{step.num}</span>
              <p className="lsa-earns__step-label">{step.label}</p>
              <p className="lsa-earns__step-body">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
