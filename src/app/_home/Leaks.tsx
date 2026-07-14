"use client";

import { useState } from "react";

import { Icon, type IconName } from "@/components/ui/Icon";

const LEAKS: {
  num: string;
  icon: IconName;
  label: string;
  title: string;
  body: string;
  note: string;
}[] = [
  {
    num: "01",
    icon: "search",
    label: "Search and referral",
    title: "They find you, then still hesitate.",
    body: "The page gets attention, but the offer, proof, or next step is not clear enough to act.",
    note: "Attention that never becomes a question is the quietest leak of all.",
  },
  {
    num: "02",
    icon: "phone",
    label: "Calls",
    title: "Calls arrive while the team is busy.",
    body: "A serious buyer can land at the wrong moment and still need a clear path back.",
    note: "The call that rings once rarely rings twice.",
  },
  {
    num: "03",
    icon: "mail",
    label: "Forms",
    title: "Forms sit too long.",
    body: "The request exists, but it waits in an inbox or tool nobody is watching closely enough.",
    note: "A same-day reply is worth more than a better pitch.",
  },
  {
    num: "04",
    icon: "folder",
    label: "Quotes",
    title: "Quotes cool after they go out.",
    body: "The team prepares the quote, then the next touch depends on someone remembering.",
    note: "A quote that cools by Wednesday rarely reopens itself.",
  },
  {
    num: "05",
    icon: "message-square",
    label: "Follow-up",
    title: "The next step lives in memory.",
    body: "Ownership, status, and follow-up are real, but not visible enough to carry the work.",
    note: "Memory is a generous but unreliable colleague.",
  },
  {
    num: "06",
    icon: "star",
    label: "Proof",
    title: "Finished work does not help the next buyer.",
    body: "A good job ends, but reviews and useful proof do not return to the website.",
    note: "Every finished job is an argument the next buyer never hears.",
  },
];

export function Leaks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = LEAKS[activeIdx];

  return (
    <section className="leaks section">
      <div className="container leaks__intro">
        <p className="eyebrow">Where work slips</p>
        <h2>
          The work is already there. <span className="leaks__headline-muted">These are the leaks.</span>
        </h2>
      </div>

      <div className="container leaks__grid">
        <ul className="leaks__index">
          {LEAKS.map((leak, index) => {
            const isActive = index === activeIdx;
            return (
              <li key={leak.num}>
                <button
                  type="button"
                  className={`leaks__row${isActive ? " leaks__row--active" : ""}`}
                  onClick={() => setActiveIdx(index)}
                  aria-pressed={isActive}
                >
                  <span className="leaks__row-num">{leak.num}</span>
                  <span className="leaks__row-label">{leak.label}</span>
                  <span className="leaks__row-arrow">
                    <Icon name="arrow-right" size={15} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="leaks__detail" key={active.num}>
          <span className="leaks__detail-icon">
            <Icon name={active.icon} size={16} />
          </span>
          <p className="leaks__detail-label">{active.label}</p>
          <p className="leaks__detail-title">{active.title}</p>
          <p className="leaks__detail-body">{active.body}</p>
          <p className="leaks__detail-note">{active.note}</p>
        </div>
      </div>
    </section>
  );
}
