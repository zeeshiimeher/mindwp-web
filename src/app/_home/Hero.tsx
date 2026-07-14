import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const ENQUIRY_ROWS: {
  icon: IconName;
  title: string;
  subtitle: string;
  status: string;
  tone: "muted" | "warning" | "danger" | "accent";
}[] = [
  { icon: "search", title: "Local search", subtitle: "Found nearby, page opened.", status: "Seen", tone: "muted" },
  {
    icon: "mail",
    title: "Form enquiry",
    subtitle: "Landed this morning, still unread.",
    status: "Waiting",
    tone: "warning",
  },
  {
    icon: "phone",
    title: "Missed call",
    subtitle: "Rang once, no callback yet.",
    status: "Missed",
    tone: "danger",
  },
  {
    icon: "folder",
    title: "Quote sent",
    subtitle: "Out since Monday, cooling off.",
    status: "Waiting",
    tone: "warning",
  },
  {
    icon: "circle-check",
    title: "Job completed",
    subtitle: "Finished Friday, no review asked.",
    status: "Open",
    tone: "accent",
  },
];

const JOURNEY_STEPS = [
  { num: "01", title: "Found nearby", subtitle: "Website opened and checked.", filled: true },
  { num: "02", title: "Enquiry sent", subtitle: "Details land somewhere useful.", filled: false },
  { num: "03", title: "First response", subtitle: "Right person is notified.", filled: false },
  { num: "04", title: "Owner and next step", subtitle: "Follow-up stays visible.", filled: false },
  { num: "05", title: "Work completed", subtitle: "Good work becomes proof.", filled: false },
];

export function Hero() {
  return (
    <section id="hero" className="hero section on-dark">
      <div className="container hero__top">
        <div className="hero__intro">
          <p className="eyebrow">Service businesses &amp; specialist clinics</p>
          <h1>
            Work comes in.
            <br />
            <span className="hero__headline-muted">Too much slips away.</span>
          </h1>
          <p className="hero__lede">
            People find you, ask for quotes or consultations, and weigh you up over days. Too
            much quietly disappears between the first enquiry and the next step.
          </p>
          <div className="hero__actions">
            <Button href="#review" variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
          </div>
        </div>

        <div className="hero__panel">
          <div className="hero__panel-head">
            <span className="hero__panel-eyebrow">Today&rsquo;s working day</span>
            <span className="hero__live">
              <span className="hero__live-dot" />
              Live
            </span>
          </div>
          <div className="hero__panel-body">
            <h3 className="hero__panel-title">Where five enquiries stand right now</h3>
            <ul className="hero__rows">
              {ENQUIRY_ROWS.map((row) => (
                <li className="hero__row" key={row.title}>
                  <span className="hero__row-icon">
                    <Icon name={row.icon} size={15} />
                  </span>
                  <span className="hero__row-text">
                    <span className="hero__row-title">{row.title}</span>
                    <span className="hero__row-subtitle">{row.subtitle}</span>
                  </span>
                  <span className={`hero__row-status hero__row-status--${row.tone}`}>
                    <span className="hero__row-status-dot" />
                    {row.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container hero__journey">
        <p className="eyebrow">How a typical enquiry plays out</p>
        <ol className="hero__timeline route-line route-line--horizontal">
          {JOURNEY_STEPS.map((step) => (
            <li className="route-line__point" key={step.num}>
              <span
                className={`route-line__dot${step.filled ? " route-line__dot--filled" : ""}`}
              />
              <span className="route-line__label">
                <span className="route-line__time">{step.num}</span>
                <span className="hero__timeline-title">{step.title}</span>
                <span className="hero__timeline-subtitle">{step.subtitle}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
