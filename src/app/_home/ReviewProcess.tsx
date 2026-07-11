import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const STEPS = [
  {
    index: "01",
    title: "Read the page like a serious buyer.",
    detail: "We look for confusion, weak trust, missing proof, and unclear next steps.",
  },
  {
    index: "02",
    title: "Trace what happens after contact.",
    detail: "We follow the enquiry path and check where response, ownership, or follow-up can slip.",
  },
  {
    index: "03",
    title: "Name the first thing worth fixing.",
    detail: "You leave with a clear priority, not a generic pitch for a full rebuild.",
  },
] as const;

export function ReviewProcess() {
  return (
    <section className="process section on-dark">
      <div className="container process__inner">
        <div className="process__header">
          <p className="eyebrow">How we start</p>
          <h2>First we review. Then we decide what matters.</h2>
        </div>

        <div className="process__top">
          <div className="process__intro">
            <p>
              Before we talk about a rebuild, we look at the site and the enquiry path as one
              working system.
            </p>
            <Button href="#review" variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
            <p className="process__microcopy">
              No obligation to continue. No pitch hidden in the findings.
            </p>
          </div>

          <ol className="process__steps">
            {STEPS.map((step) => (
              <li key={step.index}>
                <span className="process__step-index">{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="process__statement">
          The review is not a sales deck. It is a plain reading of where the work is leaking
          first.
        </p>
      </div>
    </section>
  );
}
