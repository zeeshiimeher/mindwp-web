"use client";

import { type KeyboardEvent,useId, useState } from "react";

const TABS = [
  {
    key: "before",
    label: "Before they ask",
    heading: "The website has to do enough work up front.",
    points: [
      "The offer is understood without digging.",
      "Trust sits beside the decision, not off to the side.",
      "The next step is obvious, not implied.",
    ],
  },
  {
    key: "when",
    label: "When they ask",
    heading: "The enquiry needs a visible route after contact.",
    points: [
      "Every request has a route, not just an inbox.",
      "Ownership and response posture are easy to see.",
      "Follow-up stops depending on memory alone.",
    ],
  },
  {
    key: "after",
    label: "After the job",
    heading: "Completed work should help the next buyer decide.",
    points: [
      "Reviews get asked for at the right moment.",
      "Finished work becomes visible proof.",
      "The next visitor sees real evidence, not a promise.",
    ],
  },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function BeforeIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
      <rect x="20" y="16" width="240" height="168" rx="12" fill="var(--color-navy-panel)" stroke="var(--color-navy-line)" />
      <circle cx="38" cy="34" r="3" fill="var(--color-navy-line)" />
      <circle cx="50" cy="34" r="3" fill="var(--color-navy-line)" />
      <circle cx="62" cy="34" r="3" fill="var(--color-navy-line)" />
      <rect x="40" y="60" width="140" height="14" rx="4" fill="var(--color-white)" />
      <rect x="40" y="84" width="180" height="8" rx="4" fill="var(--color-navy-line)" />
      <rect x="40" y="98" width="150" height="8" rx="4" fill="var(--color-navy-line)" />
      <rect x="40" y="124" width="96" height="28" rx="14" fill="var(--color-emerald)" />
      <circle cx="226" cy="46" r="18" fill="var(--color-navy)" stroke="var(--color-emerald)" strokeWidth="1.5" />
      <path d="M219 46l5 5 9-10" stroke="var(--color-emerald)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhenIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
      <path
        d="M56 150C100 150 90 60 140 60C190 60 180 150 224 150"
        stroke="var(--color-navy-line)"
        strokeWidth="1.5"
      />
      <rect x="26" y="162" width="60" height="20" rx="6" fill="var(--color-navy-panel)" stroke="var(--color-navy-line)" />
      <rect x="110" y="24" width="60" height="20" rx="6" fill="var(--color-navy-panel)" stroke="var(--color-navy-line)" />
      <rect x="194" y="162" width="60" height="20" rx="6" fill="var(--color-navy)" stroke="var(--color-emerald)" strokeWidth="1.5" />
      <circle cx="56" cy="150" r="6" fill="var(--color-emerald)" />
      <circle cx="140" cy="60" r="6" fill="var(--color-emerald)" />
      <circle cx="224" cy="150" r="6" fill="var(--color-emerald)" />
    </svg>
  );
}

function AfterIllustration() {
  return (
    <svg viewBox="0 0 280 200" fill="none" aria-hidden="true">
      <rect x="40" y="30" width="200" height="140" rx="14" fill="var(--color-navy-panel)" stroke="var(--color-navy-line)" />
      <circle cx="70" cy="62" r="14" fill="var(--color-navy-raised)" />
      <rect x="94" y="56" width="80" height="8" rx="4" fill="var(--color-white)" />
      <rect x="94" y="70" width="56" height="6" rx="3" fill="var(--color-navy-line)" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d="M0 -8l2.35 4.76 5.25.76-3.8 3.7.9 5.24L0 3.9l-4.7 2.56.9-5.24-3.8-3.7 5.25-.76Z"
          fill="var(--color-emerald)"
          transform={`translate(${70 + i * 20} 100)`}
        />
      ))}
      <rect x="60" y="122" width="160" height="8" rx="4" fill="var(--color-navy-line)" />
      <rect x="60" y="136" width="120" height="8" rx="4" fill="var(--color-navy-line)" />
    </svg>
  );
}

const ILLUSTRATIONS: Record<TabKey, () => React.JSX.Element> = {
  before: BeforeIllustration,
  when: WhenIllustration,
  after: AfterIllustration,
};

export function WhatWeBuild() {
  const [active, setActive] = useState<TabKey>("when");
  const baseId = useId();
  const activeIndex = TABS.findIndex((tab) => tab.key === active);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = (activeIndex + direction + TABS.length) % TABS.length;
    setActive(TABS[next].key);
  }

  const activeTab = TABS[activeIndex];
  const Illustration = ILLUSTRATIONS[active];

  return (
    <section className="builds section">
      <div className="container builds__inner">
        <div className="builds__header">
          <p className="eyebrow">What MindWP builds</p>
          <h2>The contact form is not the finish line.</h2>
          <p className="builds__lead">
            MindWP builds the website around three real moments: before the buyer asks, when the
            enquiry arrives, and after the work is done. The page is only the front door.
          </p>
        </div>

        <div className="builds__panel">
          <div
            className="builds__tablist"
            role="tablist"
            aria-label="What MindWP builds around"
            onKeyDown={handleKeyDown}
          >
            {TABS.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                id={`${baseId}-tab-${tab.key}`}
                aria-selected={tab.key === active}
                aria-controls={`${baseId}-panel-${tab.key}`}
                tabIndex={tab.key === active ? 0 : -1}
                className="builds__tab"
                onClick={() => setActive(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className="builds__content"
            role="tabpanel"
            id={`${baseId}-panel-${active}`}
            aria-labelledby={`${baseId}-tab-${active}`}
            tabIndex={0}
          >
            <div className="builds__copy">
              <h3>{activeTab.heading}</h3>
              <ul>
                {activeTab.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="builds__art">
              <Illustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
