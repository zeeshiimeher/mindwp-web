const STAGES = [
  { num: "01", label: "Details change", position: "top" as const },
  { num: "02", label: "Surfaces updated", position: "right" as const },
  { num: "03", label: "Proof grows", position: "bottom" as const },
  { num: "04", label: "Re-verified", position: "left" as const },
];

export function VisibilityCycle() {
  return (
    <section className="lsa-cycle section on-mist">
      <div className="container lsa-cycle__grid">
        <div>
          <p className="eyebrow">The visibility cycle</p>
          <h2>Maintained, not installed.</h2>
          <p className="lsa-cycle__body">
            Hours change, proof grows, competitors move. Local visibility drifts if no one keeps
            it current — so it runs as a loop, not a one-time setup.
          </p>
        </div>

        <div className="lsa-cycle__diagram">
          <svg className="lsa-cycle__ring" viewBox="0 0 220 220" aria-hidden="true">
            <circle
              cx="110"
              cy="110"
              r="86"
              fill="none"
              stroke="var(--border-mist-hairline)"
              strokeWidth="1"
              strokeDasharray="3 7"
            />
            <path
              d="M 110 24 A 86 86 0 0 1 195 122"
              fill="none"
              stroke="var(--color-emerald-deep)"
              strokeWidth="2"
              markerEnd="url(#lsa-cycle-arrow)"
            />
            <defs>
              <marker
                id="lsa-cycle-arrow"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 z" fill="var(--color-emerald-deep)" />
              </marker>
            </defs>
          </svg>

          {STAGES.map((stage) => (
            <div className={`lsa-cycle__stage lsa-cycle__stage--${stage.position}`} key={stage.num}>
              <span className="label-caps">{stage.num}</span>
              <p className="lsa-cycle__stage-label">{stage.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
