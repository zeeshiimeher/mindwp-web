import { Icon } from "@/components/ui/Icon";

const MISMATCHES = [
  { field: "Hours", a: "Listing says 8am–6pm", b: "Website says 9am–5pm" },
  { field: "Phone", a: "Directory shows an old number", b: "Current number is different" },
  { field: "Service area", a: "Profile lists one suburb", b: "Website page was never updated" },
];

export function WhyItDisappoints() {
  return (
    <section className="lsa-disappoints section">
      <div className="container lsa-disappoints__grid">
        <div>
          <p className="eyebrow">Why local SEO disappoints</p>
          <h2>Scattered signals cancel each other out.</h2>
          <p className="lsa-disappoints__body">
            Most local SEO underperforms because one public fact contradicts another. The buyer
            does not investigate; they quietly pick someone clearer.
          </p>
        </div>

        <div className="lsa-disappoints__card">
          {MISMATCHES.map((m) => (
            <div className="lsa-disappoints__row" key={m.field}>
              <span className="label-caps lsa-disappoints__field">{m.field}</span>
              <div className="lsa-disappoints__facts">
                <span className="lsa-disappoints__fact">{m.a}</span>
                <span className="lsa-disappoints__x">
                  <Icon name="x" size={12} />
                </span>
                <span className="lsa-disappoints__fact">{m.b}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
