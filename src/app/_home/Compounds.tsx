"use client";

import { useState } from "react";

const STAGES = [
  {
    eyebrow: "Launch week",
    title: "The front door starts working.",
    body: "The offer is clear, the proof is visible, and every call or form finally has somewhere to land.",
  },
  {
    eyebrow: "Month six",
    title: "The rhythm holds without heroics.",
    body: "Enquiries have owners. Follow-ups happen because the system remembers, not because someone did.",
  },
  {
    eyebrow: "Year two",
    title: "The site argues for you.",
    body: "Finished work keeps returning as reviews and proof. New buyers arrive already half-convinced.",
  },
];

const LAYERS = [
  { stage: 0, label: "A clear front door", sub: "Offer, proof, and next step — visible on arrival" },
  { stage: 0, label: "Enquiries land somewhere", sub: "Calls and forms reach a person, not a void" },
  { stage: 1, label: "Every enquiry has an owner", sub: "Nothing waits on whoever notices first" },
  { stage: 1, label: "Follow-up has a rhythm", sub: "Quotes get a next touch before they cool" },
  { stage: 2, label: "Reviews return as proof", sub: "Finished work asks for the review at the right moment" },
  { stage: 2, label: "The next buyer arrives warmer", sub: "Proof compounds into easier decisions" },
];

export function Compounds() {
  const [stage, setStage] = useState(0);
  const active = STAGES[stage];
  const visibleLayers = LAYERS.filter((layer) => layer.stage <= stage);

  return (
    <section className="compounds section">
      <div className="container container--content compounds__intro">
        <p className="eyebrow eyebrow--split">
          <span className="eyebrow__tick" />
          What changes over time
          <span className="eyebrow__tick" />
        </p>
        <h2>
          It is not a launch. <span className="compounds__headline-muted">It compounds.</span>
        </h2>
        <p>
          A website system is not a one-off project that goes quiet after launch. It gets
          stronger as the site, the handling, and the proof reinforce each other.
        </p>
      </div>

      <div className="container container--content compounds__tabs" role="tablist">
        {STAGES.map((s, index) => (
          <button
            key={s.eyebrow}
            type="button"
            role="tab"
            aria-selected={stage === index}
            className={`compounds__tab${stage === index ? " compounds__tab--active" : ""}`}
            onClick={() => setStage(index)}
          >
            {s.eyebrow}
          </button>
        ))}
      </div>

      <div className="container compounds__grid">
        <div className="compounds__detail" key={`stage-${stage}`}>
          <p className="label-caps">{active.eyebrow}</p>
          <h3 className="compounds__detail-title">{active.title}</h3>
          <p>{active.body}</p>
          <p className="compounds__detail-note">
            Each layer stays when the next one lands. That is the compounding.
          </p>
        </div>

        <div>
          <p className="compounds__layers-label">What the site holds by now</p>
          <div className="compounds__layers">
            {visibleLayers.map((layer, index) => {
              const isNew = layer.stage === stage;
              return (
                <div
                  className={`compounds__layer${isNew ? " compounds__layer--new" : ""}`}
                  key={`${layer.label}-${stage}`}
                >
                  <span className="compounds__layer-num">0{index + 1}</span>
                  <span className="compounds__layer-text">
                    <span className="compounds__layer-title">{layer.label}</span>
                    <span className="compounds__layer-sub">{layer.sub}</span>
                  </span>
                  {isNew && <span className="compounds__layer-badge">New this stage</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
