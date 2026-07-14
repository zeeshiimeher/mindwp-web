const MARKERS = [
  { num: "01", label: "This feels like us", position: "top" as const },
  { num: "02", label: "They have done the thinking", position: "right" as const },
  { num: "03", label: "I know what happens next", position: "bottom" as const },
];

export function Distance() {
  return (
    <section className="distance section on-mist">
      <div className="container distance__grid">
        <div className="distance__copy">
          <p className="eyebrow">Before a buyer reaches out</p>
          <h2>The shorter the distance, the easier the decision.</h2>
          <p>
            A smart website removes the small doubts between arriving interested and feeling
            ready. Every answered doubt closes a step of that distance.
          </p>
          <p className="distance__quote">
            Clarity is not more copy. It is less distance between the question and the answer.
          </p>
        </div>

        <div className="distance__diagram">
          <div className="distance__ring distance__ring--outer" />
          <div className="distance__ring distance__ring--inner" />
          <div className="distance__core">
            <span className="label-caps">Distance closed</span>
            <span className="distance__core-label">Ready to ask</span>
          </div>

          {MARKERS.map((marker) => (
            <div className={`distance__marker distance__marker--${marker.position}`} key={marker.num}>
              <span className="distance__marker-num">{marker.num}</span>
              <p className="distance__marker-label">{marker.label}</p>
            </div>
          ))}

          <div className="distance__arrive">
            <span className="distance__arrive-mark">?</span>
            <p className="label-caps">Arrive curious</p>
          </div>
        </div>
      </div>
    </section>
  );
}
