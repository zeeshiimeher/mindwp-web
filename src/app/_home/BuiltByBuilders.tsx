const CREDENTIALS = [
  "A small senior team",
  "Done in-house, start to finish",
  "You deal with the builder",
] as const;

export function BuiltByBuilders() {
  return (
    <section id="builders" className="builders-section section on-dark">
      <div className="container builders-section__inner">
        <p className="eyebrow">Built by builders</p>
        <h2>Built by the people who actually build it.</h2>
        <p className="builders-section__lead">
          MindWP is not a faceless agency or a marketplace gig. It is a builder who has shipped
          service-business websites since 2015 — scoping, designing, building, and connecting
          the handling in-house, with a small senior team.
        </p>
        <ul className="builders-section__credentials">
          {CREDENTIALS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
