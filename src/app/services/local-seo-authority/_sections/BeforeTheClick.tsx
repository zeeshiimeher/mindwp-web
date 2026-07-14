const MOMENTS = [
  {
    num: "01",
    label: "Searched",
    body: "A homeowner types the job they need done. A patient searches the treatment they're ready to book.",
  },
  {
    num: "02",
    label: "Compared",
    body: "Three or four names come up. Each one gets a few seconds of real attention.",
  },
  {
    num: "03",
    label: "Half-decided",
    body: "One name already feels safer than the others — before anyone has picked up a phone.",
  },
];

export function BeforeTheClick() {
  return (
    <section className="lsa-before section">
      <div className="container">
        <p className="eyebrow">The moments before the click</p>
        <h2 className="lsa-before__heading">The decision happens before they ever call.</h2>
        <p className="lsa-before__lede">
          By the time someone reaches out, they&rsquo;ve already searched, compared, and
          half-decided. Most nearby work is won or lost in those earlier moments.
        </p>

        <div className="lsa-before__grid">
          {MOMENTS.map((m) => (
            <div className="lsa-before__item" key={m.num}>
              <span className="lsa-before__num">{m.num}</span>
              <p className="lsa-before__label">{m.label}</p>
              <p className="lsa-before__body">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
