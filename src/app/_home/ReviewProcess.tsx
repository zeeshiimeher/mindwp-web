import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const REVIEW_STEPS: {
  num: string;
  icon: IconName;
  tag: string;
  title: string;
  body: string;
}[] = [
  {
    num: "01",
    icon: "message-square",
    tag: "On chat",
    title: "First, we talk.",
    body: "You tell us how the business actually runs — what you do, where work comes from, what is working and what is slipping. We set the agenda together.",
  },
  {
    num: "02",
    icon: "phone",
    tag: "On Zoom",
    title: "Then, we plan together.",
    body: "A call to walk through everything and agree the plan and strategy — what matters first, what can wait, and what the work looks like.",
  },
  {
    num: "03",
    icon: "circle-check",
    tag: "Always",
    title: "We keep what already works.",
    body: "Nothing gets rebuilt for the sake of it. We build around what is working and fix what is actually leaking.",
  },
];

export function ReviewProcess() {
  return (
    <section className="review-process section on-dark">
      <div className="container review-process__grid">
        <div>
          <p className="eyebrow">How we start</p>
          <h2>First we review. Then we decide what matters.</h2>
          <p className="review-process__lede">
            Not just the website — the whole business. What you do, how work comes in today, and
            what is already working. Every client starts from a different place.
          </p>
          <Button href="#review" variant="on-dark">
            {PRIMARY_CTA_LABEL}
          </Button>
          <p className="review-process__note">
            No obligation to continue. No pitch hidden in the findings.
          </p>
        </div>

        <ol className="review-process__steps">
          {REVIEW_STEPS.map((step) => (
            <li className="review-process__step" key={step.num}>
              <span className="review-process__step-icon">
                <Icon name={step.icon} size={16} />
              </span>
              <div>
                <div className="review-process__step-head">
                  <p className="review-process__step-title">
                    <span className="label-caps review-process__step-num">{step.num}</span>
                    {step.title}
                  </p>
                  <span className="review-process__step-tag">{step.tag}</span>
                </div>
                <p className="review-process__step-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
