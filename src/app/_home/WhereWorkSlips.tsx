import type { SVGProps } from "react";

const LEAKS = [
  {
    icon: "search",
    eyebrow: "Search and referral",
    title: "They find you, then still hesitate.",
    body: "The page gets attention, but the offer, proof, or next step is not clear enough to act.",
    tint: true,
  },
  {
    icon: "phone",
    eyebrow: "Calls",
    title: "Calls arrive while the team is busy.",
    body: "A serious buyer can land at the wrong moment and still need a clear path back.",
    tint: false,
  },
  {
    icon: "form",
    eyebrow: "Forms",
    title: "Forms sit too long.",
    body: "The request exists, but it waits in an inbox or tool nobody is watching closely enough.",
    tint: true,
  },
  {
    icon: "quote",
    eyebrow: "Quotes",
    title: "Quotes cool after they go out.",
    body: "The team prepares the quote, then the next touch depends on someone remembering.",
    tint: false,
  },
  {
    icon: "message",
    eyebrow: "Follow-up",
    title: "The next step lives in memory.",
    body: "Ownership, status, and follow-up are real, but not visible enough to carry the work.",
    tint: true,
  },
  {
    icon: "star",
    eyebrow: "Proof",
    title: "Finished work does not help the next buyer.",
    body: "A good job ends, but reviews and useful proof do not return to the website.",
    tint: false,
  },
] as const;

const ICON_PATHS: Record<(typeof LEAKS)[number]["icon"], SVGProps<SVGSVGElement>["children"]> = {
  search: (
    <>
      <circle cx="9" cy="9" r="6" />
      <path d="M17 17l-4.35-4.35" />
    </>
  ),
  phone: (
    <>
      <path d="M4 3l3.5 1 .5 3.2-2 1.6a12 12 0 0 0 5.2 5.2l1.6-2 3.2.5 1 3.5c-1 1-2.2 1-3.7.6C8.7 15.2 4.8 11.3 3.4 6.7 3 5.2 3 4 4 3Z" />
    </>
  ),
  form: (
    <>
      <rect x="3" y="4" width="14" height="12" rx="1.5" />
      <path d="M3 6.5l7 4.5 7-4.5" />
    </>
  ),
  quote: (
    <>
      <path d="M5 3h10v14H5z" />
      <path d="M7.5 7h5M7.5 10h5M7.5 13h3" />
    </>
  ),
  message: (
    <>
      <path d="M3 4.5h14v9H8l-3.5 3v-3H3Z" />
    </>
  ),
  star: (
    <path d="M10 2.5l2.2 4.6 5 .7-3.6 3.6.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.6 5-.7Z" />
  ),
};

function LeakIcon({ name }: { name: (typeof LEAKS)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}

export function WhereWorkSlips() {
  return (
    <section className="leaks section">
      <div className="container leaks__inner">
        <div className="leaks__header">
          <div className="leaks__heading">
            <p className="eyebrow">Where work slips</p>
            <h2>
              The work is already there. <span className="leaks__muted">These are the leaks.</span>
            </h2>
          </div>
          <p className="leaks__lead">
            Most established businesses and clinics already have searches, calls, forms, quotes,
            reviews, and completed work. The weak point is how those moments are carried.
          </p>
        </div>

        <ul className="leaks__grid">
          {LEAKS.map((leak) => (
            <li className={`leaks__card${leak.tint ? " leaks__card--tint" : ""}`} key={leak.eyebrow}>
              <span className="leaks__card-icon">
                <LeakIcon name={leak.icon} />
              </span>
              <p className="leaks__card-eyebrow">{leak.eyebrow}</p>
              <h4>{leak.title}</h4>
              <p>{leak.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
