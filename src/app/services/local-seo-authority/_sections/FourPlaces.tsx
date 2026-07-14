const PLACES = [
  { num: "01", label: "Presence", body: "The business shows up where nearby customers actually look." },
  { num: "02", label: "Proof", body: "Reviews and real work back up the claim." },
  { num: "03", label: "Coverage", body: "The service area is stated clearly, not implied." },
  { num: "04", label: "Confirmation", body: "The website says the same thing the listing does." },
];

export function FourPlaces() {
  return (
    <section className="lsa-places section on-mist">
      <div className="container">
        <p className="eyebrow">Four places local trust is built</p>
        <h2>
          Trust isn&rsquo;t one thing. <span className="lsa-places__headline-muted">It&rsquo;s four, lined up.</span>
        </h2>
        <p className="lsa-places__lede">
          Nearby customers build confidence from more than one signal. Presence, proof, coverage,
          and confirmation all have to support the same choice.
        </p>

        <div className="lsa-places__grid">
          {PLACES.map((p) => (
            <div className="lsa-places__cell" key={p.num}>
              <span className="label-caps">{p.num}</span>
              <p className="lsa-places__cell-label">{p.label}</p>
              <p className="lsa-places__cell-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
