const PHASES = [
  {
    index: "01",
    period: "First few weeks",
    title: "The front door starts working.",
    detail: "The offer is clearer, and calls and forms land somewhere useful.",
  },
  {
    index: "02",
    period: "First few months",
    title: "The working rhythm holds.",
    detail: "Enquiries have an owner, a next step, and follow-up that stays visible.",
  },
  {
    index: "03",
    period: "Over time",
    title: "Good work leaves evidence.",
    detail: "Review requests happen at the right moment, and completed work becomes proof.",
  },
] as const;

function GrowthChart() {
  return (
    <svg viewBox="0 0 600 200" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-emerald)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--color-emerald)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M20 170 C 120 170 140 120 220 110 C 300 100 340 40 460 30 L 460 190 L 20 190 Z"
        fill="url(#growth-fill)"
      />
      <path
        d="M20 170 C 120 170 140 120 220 110 C 300 100 340 40 460 30"
        stroke="var(--color-emerald)"
        strokeWidth="2"
      />
      <circle cx="20" cy="170" r="6" fill="var(--color-emerald)" />
      <circle cx="220" cy="110" r="6" fill="var(--color-emerald)" />
      <circle cx="460" cy="30" r="7" fill="var(--color-navy)" stroke="var(--color-emerald)" strokeWidth="2.5" />
    </svg>
  );
}

export function CompoundsOverTime() {
  return (
    <section className="compounds section">
      <div className="container compounds__inner">
        <div className="compounds__header">
          <p className="eyebrow">What changes over time</p>
          <h2>It is not a launch. It compounds.</h2>
          <p className="compounds__lead">
            A website system is not a one-off project that goes quiet after launch. It gets
            stronger as the site, the handling, and the proof reinforce each other.
          </p>
        </div>

        <div className="compounds__chart">
          <GrowthChart />
        </div>

        <ul className="compounds__phases">
          {PHASES.map((phase) => (
            <li key={phase.index}>
              <span className="compounds__phase-index">{phase.index}</span>
              <p className="compounds__phase-period">{phase.period}</p>
              <h3>{phase.title}</h3>
              <p>{phase.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
