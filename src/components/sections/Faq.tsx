"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqProps {
  eyebrow: string;
  heading: ReactNode;
  lede: string;
  items: FaqItem[];
}

export function Faq({ eyebrow, heading, lede, items }: FaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="faq section">
      <div className="container container--content faq__intro">
        <p className="eyebrow eyebrow--split">
          <span className="eyebrow__tick" />
          {eyebrow}
          <span className="eyebrow__tick" />
        </p>
        <h2>{heading}</h2>
        <p>{lede}</p>
      </div>

      <div className="container container--content faq__list">
        {items.map((item, index) => {
          const isOpen = openIdx === index;
          return (
            <div className="faq__item" key={item.q}>
              <button
                type="button"
                className="faq__question"
                aria-expanded={isOpen}
                onClick={() => setOpenIdx(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <span className="faq__glyph" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && <p className="faq__answer">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
