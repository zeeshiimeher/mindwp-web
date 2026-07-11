import type { SVGProps } from "react";

import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const MOMENTS = [
  {
    icon: "search",
    label: "Local search",
    detail: "Found nearby, page opened.",
    status: "Seen",
    tone: "muted",
  },
  {
    icon: "form",
    label: "Form enquiry",
    detail: "Landed this morning, still unread.",
    status: "Waiting",
    tone: "warning",
  },
  {
    icon: "phone",
    label: "Missed call",
    detail: "Rang once, no callback yet.",
    status: "Missed",
    tone: "danger",
  },
  {
    icon: "quote",
    label: "Quote sent",
    detail: "Out since Monday, cooling off.",
    status: "Waiting",
    tone: "warning",
  },
  {
    icon: "check",
    label: "Job completed",
    detail: "Finished Friday, no review asked.",
    status: "Open",
    tone: "muted",
  },
] as const;

const TIMELINE = [
  { day: "Mon", title: "Found nearby", detail: "Website opened and checked." },
  { day: "Mon", title: "Enquiry sent", detail: "Details land somewhere useful." },
  { day: "Tue", title: "First response", detail: "Right person is notified." },
  { day: "Thu", title: "Owner and next step", detail: "Follow-up stays visible." },
  { day: "Later", title: "Work completed", detail: "Good work becomes proof." },
] as const;

const ICON_PATHS: Record<(typeof MOMENTS)[number]["icon"], SVGProps<SVGSVGElement>["children"]> = {
  search: (
    <>
      <circle cx="9" cy="9" r="6" />
      <path d="M17 17l-4.35-4.35" />
    </>
  ),
  form: (
    <>
      <rect x="3" y="4" width="14" height="12" rx="1.5" />
      <path d="M3 6.5l7 4.5 7-4.5" />
    </>
  ),
  phone: (
    <>
      <path d="M4 3l3.5 1 .5 3.2-2 1.6a12 12 0 0 0 5.2 5.2l1.6-2 3.2.5 1 3.5c-1 1-2.2 1-3.7.6C8.7 15.2 4.8 11.3 3.4 6.7 3 5.2 3 4 4 3Z" />
      <path d="M14 3l3 3M17 3l-3 3" />
    </>
  ),
  quote: (
    <>
      <path d="M4 3.5h9l3 3V16.5H4Z" />
      <path d="M7 9h6M7 12h6" />
    </>
  ),
  check: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M7 10.2l2 2 4-4.4" />
    </>
  ),
};

function MomentIcon({ name }: { name: (typeof MOMENTS)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="hero on-dark">
      <div className="container hero__inner">
        <div className="hero__intro">
          <p className="eyebrow">Service businesses &amp; specialist clinics</p>
          <h1>
            Work comes in.
            <br />
            <span className="hero__muted">Too much slips away.</span>
          </h1>
          <p className="hero__lead">
            People find you, ask for quotes or consultations, and weigh you up over days. Too
            much quietly disappears between the first enquiry and the next step.
          </p>
          <div className="hero__actions">
            <Button href="#review" variant="on-dark">
              {PRIMARY_CTA_LABEL}
            </Button>
            <Button href="#work" variant="link" className="btn-on-dark">
              See the work &rarr;
            </Button>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="hero__panel-head">
            <div className="hero__panel-heading">
              <p className="hero__panel-eyebrow">Today&rsquo;s working day</p>
              <p className="hero__panel-title">Where five enquiries stand right now</p>
            </div>
            <p className="hero__panel-count">
              <span>05</span>
              moments
            </p>
          </div>

          <ol className="hero__moments">
            {MOMENTS.map((moment, index) => (
              <li className="hero__moment" key={moment.label}>
                <span className="hero__moment-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="hero__moment-icon">
                  <MomentIcon name={moment.icon} />
                </span>
                <span className="hero__moment-copy">
                  <strong>{moment.label}</strong>
                  <span>{moment.detail}</span>
                </span>
                <span className={`status-pill status-pill--${moment.tone}`}>{moment.status}</span>
              </li>
            ))}
          </ol>

          <div className="hero__panel-foot">
            <span>2 need attention</span>
            <span>Where MindWP picks up</span>
          </div>
        </div>
      </div>

      <div className="container hero__timeline">
        <p className="eyebrow">How a typical enquiry plays out</p>
        <ol className="hero__timeline-track">
          {TIMELINE.map((step, index) => (
            <li className="hero__timeline-step" key={`${step.day}-${step.title}`}>
              <span
                className="hero__timeline-dot"
                data-state={index < 3 ? "done" : index === 3 ? "current" : "future"}
                aria-hidden="true"
              />
              <span className="hero__timeline-day">{step.day}</span>
              <strong>{step.title}</strong>
              <span>{step.detail}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
