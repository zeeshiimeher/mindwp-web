const SCOPE = [
  { num: "01", title: "Business profile foundation", body: "Categories, hours, service area, and photos set and correct." },
  { num: "02", title: "Consistent details everywhere", body: "The same name, number, and address on every surface that lists you." },
  { num: "03", title: "Service-area relevance on real pages", body: "Pages on the website that actually back up where you work." },
  { num: "04", title: "Review visibility", body: "Reviews requested at the right moment and shown where they help." },
  { num: "05", title: "Local proof returned to the site", body: "Finished work and reviews feeding back into the pages that need them." },
];

export function WhatWeDo() {
  return (
    <section className="lsa-what-we-do section on-mist">
      <div className="container">
        <p className="eyebrow">What we actually do</p>
        <h2>What aligning your local presence involves.</h2>
        <p className="lsa-what-we-do__lede">
          No ranking tricks and no guesswork — a clear, agreed scope of work that makes the same
          trustworthy details line up everywhere a nearby customer checks.
        </p>

        <ol className="lsa-what-we-do__list">
          {SCOPE.map((item) => (
            <li className="lsa-what-we-do__item" key={item.num}>
              <span className="label-caps">{item.num}</span>
              <div>
                <p className="lsa-what-we-do__item-title">{item.title}</p>
                <p className="lsa-what-we-do__item-body">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
