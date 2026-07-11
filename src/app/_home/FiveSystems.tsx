import type { SVGProps } from "react";

const SYSTEMS = [
  {
    icon: "pin",
    index: "02",
    eyebrow: "Found",
    title: "Local SEO Authority",
    detail: "Nearby buyers find and verify the business.",
  },
  {
    icon: "chat",
    index: "03",
    eyebrow: "Answered",
    title: "Lead Response & Handling",
    detail: "Calls, forms, and bookings have somewhere to land.",
  },
  {
    icon: "calendar",
    index: "04",
    eyebrow: "Owned",
    title: "Follow-Up & CRM",
    detail: "The next step stays visible after the first contact.",
  },
  {
    icon: "star",
    index: "05",
    eyebrow: "Proven",
    title: "Reputation & Review",
    detail: "Good work returns as trust for the next buyer.",
  },
] as const;

const ICON_PATHS: Record<(typeof SYSTEMS)[number]["icon"], SVGProps<SVGSVGElement>["children"]> = {
  pin: (
    <>
      <path d="M12 21s6.5-6.1 6.5-11A6.5 6.5 0 0 0 5.5 10c0 4.9 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  chat: <path d="M4 4.5h16v10H9L4.5 18v-3.5H4Z" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </>
  ),
  star: <path d="M12 3l2.6 5.6 6 .8-4.4 4.3 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.4l6-.8Z" />,
};

function SystemIcon({ name }: { name: (typeof SYSTEMS)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}

export function FiveSystems() {
  return (
    <section id="five-systems" className="systems section on-dark">
      <div className="systems__glow" aria-hidden="true" />
      <div className="container systems__inner">
        <div className="systems__header">
          <p className="eyebrow">The five systems</p>
          <h2>Five systems. One connected site.</h2>
          <p className="systems__lead">
            The website is the flagship. The other four are the handling around it — found,
            answered, owned, and proven. Built to work as one, not as five separate services.
          </p>
        </div>

        <div className="systems__flagship">
          <div>
            <p className="systems__flagship-tag">Flagship system</p>
            <h3>Smart Website Systems</h3>
            <p>
              The public site carries clarity, trust, and enquiry capture. It gives the other
              systems one visible place to connect.
            </p>
          </div>
          <span className="systems__index">01</span>
        </div>

        <ul className="systems__grid">
          {SYSTEMS.map((system) => (
            <li className="systems__card" key={system.title}>
              <div className="systems__card-head">
                <span className="systems__card-icon">
                  <SystemIcon name={system.icon} />
                </span>
                <span className="systems__index systems__index--small">{system.index}</span>
              </div>
              <p className="systems__card-eyebrow">{system.eyebrow}</p>
              <h4>{system.title}</h4>
              <p>{system.detail}</p>
            </li>
          ))}
        </ul>

        <p className="systems__footnote">
          These are not five separate problems. They are connected around the same commercial
          route, so the site can carry the work instead of only presenting it.
        </p>
      </div>
    </section>
  );
}
