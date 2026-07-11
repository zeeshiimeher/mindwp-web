const FAQS = [
  {
    q: "What exactly do I get?",
    a: "A website built to bring work in, with the handling scoped around it: first response, ownership, next steps, follow-up, and review requests where they make sense. The exact handling varies by client, so there is no universal fixed package.",
  },
  {
    q: "Do you build on WordPress?",
    a: "Yes, using WordPress with Elementor, Bricks, Divi, or WooCommerce depending on what the project needs. The platform is a delivery tool, not the point of the offer.",
  },
  {
    q: "Is the website mine, and can I edit it?",
    a: "Yes. You own the website and the connected account. We build it to be genuinely maintainable, not locked behind a proprietary system.",
  },
  {
    q: "What is the handling part, really?",
    a: "The response, ownership, follow-up, and review-request setup that sits around the website — so a serious enquiry has a clear next step instead of waiting in an inbox.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing is agreed after the review, once we understand the real scope. We do not publish packages because website scope, content, and handling vary too much to price honestly in the abstract.",
  },
  {
    q: "What if I already have a website?",
    a: "That is common. The review looks at what you already have and identifies the highest-leverage fix first — which may be a rebuild, or may not be.",
  },
] as const;

export function Faq() {
  return (
    <section className="faq section">
      <div className="container faq__inner">
        <div className="faq__header">
          <p className="eyebrow">Straight answers</p>
          <h2>Questions, answered plainly.</h2>
          <p className="faq__lead">
            No buried sales language. The common questions are practical because the work is
            practical.
          </p>
        </div>

        <div className="faq__list">
          {FAQS.map((item, index) => (
            <details className="faq__item" key={item.q} open={index === 0}>
              <summary>
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
