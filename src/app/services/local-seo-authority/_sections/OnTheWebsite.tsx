import Link from "next/link";

export function OnTheWebsite() {
  return (
    <section className="lsa-website section on-dark">
      <div className="container container--content lsa-website__inner">
        <p className="eyebrow">Local SEO starts with the website</p>
        <h2>
          It builds on the website —<br />
          <span className="lsa-website__headline-muted">not around it.</span>
        </h2>
        <p className="lsa-website__body">
          Search can start the decision, but the website has to confirm it. If the page is vague,
          the buyer still hesitates. We fix the foundation first, then the local presence around
          it.
        </p>
        <p className="lsa-website__links">
          That foundation is the same{" "}
          <Link href="/#five-systems">Smart Website Systems</Link> every client starts with — see
          the <Link href="/#work">full body of work</Link>.
        </p>
      </div>
    </section>
  );
}
