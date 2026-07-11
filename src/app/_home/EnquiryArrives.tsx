const BEATS = [
  {
    title: "Answered while the moment is still warm.",
    detail: "Not a queue. Not a missed call.",
  },
  {
    title: "Owned by a person, not a shared inbox.",
    detail: "One name, one responsibility, visible from the start.",
  },
  {
    title: "Followed up before it goes cold.",
    detail: "The next step does not depend on memory.",
  },
] as const;

export function EnquiryArrives() {
  return (
    <section className="journey section">
      <div className="container journey__inner">
        <div className="journey__header">
          <p className="eyebrow">After the enquiry</p>
          <h2>The enquiry arrives. The work has to keep moving.</h2>
        </div>

        <p className="journey__quote">
          By the time you would normally check the inbox, the enquiry is already answered,
          owned, and moving toward a decision.
        </p>

        <ol className="journey__beats">
          {BEATS.map((beat, index) => (
            <li key={beat.title}>
              <span className="journey__beat-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{beat.title}</strong>
              <p>{beat.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
