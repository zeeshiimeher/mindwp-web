"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon";

const SCENARIOS = [
  {
    eyebrow: "Home services",
    time: "4:38pm",
    headline: "The crew is still on site.",
    quote: "The next step survives the busy day.",
    chips: ["Survey requested — 4:38pm", "Acknowledged instantly", "Dan replies at 4:41pm"],
  },
  {
    eyebrow: "Specialist clinics",
    time: "11:52am",
    headline: "The next slot is already booked.",
    quote: "The next step survives the busy day.",
    chips: [
      "Consultation requested — 11:52am",
      "Confirmed automatically",
      "Desk follows up at 12:04pm",
    ],
  },
];

export function Scenario() {
  const [activeTab, setActiveTab] = useState(0);
  const active = SCENARIOS[activeTab];

  return (
    <section id="scenario" className="scenario section on-mist">
      <div className="container container--content">
        <div className="scenario__tabs" role="tablist">
          {SCENARIOS.map((s, index) => {
            const isActive = index === activeTab;
            return (
              <button
                key={s.eyebrow}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`scenario__tab${isActive ? " scenario__tab--active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span className="scenario__tab-num">0{index + 1}</span>
                {s.eyebrow}
              </button>
            );
          })}
        </div>

        <div className="scenario__card" key={active.eyebrow}>
          <div className="scenario__card-body">
            <div className="scenario__time">
              <p className="label-caps">{active.eyebrow}</p>
              <span className="scenario__time-value">{active.time}</span>
            </div>
            <div>
              <h3>{active.headline}</h3>
              <p className="scenario__quote">{active.quote}</p>
            </div>
          </div>
          <div className="scenario__chips">
            {active.chips.map((chip, index) => (
              <span className="scenario__chip-wrap" key={chip}>
                {index > 0 && (
                  <span className="scenario__chip-arrow" aria-hidden="true">
                    <Icon name="arrow-right" size={12} />
                  </span>
                )}
                <span className="scenario__chip">{chip}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
