"use client";

import { useState } from "react";

import { Icon } from "@/components/ui/Icon";

const SURFACES = [
  {
    label: "Profile",
    mismatched: "Hours listed as 8am–6pm",
    aligned: "Hours match everywhere",
  },
  {
    label: "Website",
    mismatched: "Hours shown as 9am–5pm",
    aligned: "Same hours, same phone number",
  },
  {
    label: "Reviews & directories",
    mismatched: "An old phone number is still listed",
    aligned: "Current details, confirmed",
  },
];

export function AlignedLooksLike() {
  const [aligned, setAligned] = useState(false);

  return (
    <section className="lsa-aligned section on-dark">
      <div className="container container--content lsa-aligned__intro">
        <p className="eyebrow">The work · what aligned looks like</p>
        <h2>One business, the same on every surface.</h2>
        <p className="lsa-aligned__lede">
          The buyer should not have to reconcile conflicting versions of the business. Every
          public surface should support the same truth.
        </p>

        <div className="lsa-aligned__toggle" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={!aligned}
            className={`lsa-aligned__toggle-btn${!aligned ? " lsa-aligned__toggle-btn--active" : ""}`}
            onClick={() => setAligned(false)}
          >
            Mismatched
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={aligned}
            className={`lsa-aligned__toggle-btn${aligned ? " lsa-aligned__toggle-btn--active" : ""}`}
            onClick={() => setAligned(true)}
          >
            Aligned
          </button>
        </div>
      </div>

      <div className="container">
        <div className={`lsa-aligned__row${aligned ? " lsa-aligned__row--aligned" : ""}`}>
          {SURFACES.map((surface) => (
            <div className="lsa-aligned__card" key={surface.label}>
              <span className="lsa-aligned__card-icon">
                <Icon name={aligned ? "circle-check" : "x"} size={14} />
              </span>
              <p className="label-caps">{surface.label}</p>
              <p className="lsa-aligned__card-fact">
                {aligned ? surface.aligned : surface.mismatched}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
