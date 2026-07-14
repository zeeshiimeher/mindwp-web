const DAY_PROOF = [
  {
    stamp: "Answered within the hour",
    quote: "“I emailed at lunch and had a proper reply before the school run.”",
    by: "Homeowner — bathroom refit",
  },
  {
    stamp: "Follow-up kept its promise",
    quote: "“They said Thursday, and Thursday it was. Nobody chased anybody.”",
    by: "Practice manager — dental clinic",
  },
  {
    stamp: "Asked at the right moment",
    quote: "“Leaving a review took one tap, the day the job finished.”",
    by: "Landlord — three properties",
  },
];

export function DayProof() {
  return (
    <section className="day-proof section on-dark">
      <div className="container">
        <div className="day-proof__divider">
          <span className="day-proof__divider-line" />
          <span className="eyebrow">What that day leaves behind</span>
          <span className="day-proof__divider-line" />
        </div>

        <div className="day-proof__grid">
          {DAY_PROOF.map((item) => (
            <div className="day-proof__item" key={item.stamp}>
              <span className="day-proof__stamp">
                <span className="day-proof__stamp-dot" />
                <span className="label-caps">{item.stamp}</span>
              </span>
              <p className="day-proof__quote">{item.quote}</p>
              <p className="day-proof__by">{item.by}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
