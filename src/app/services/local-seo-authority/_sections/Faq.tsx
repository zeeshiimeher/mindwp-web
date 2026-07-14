import { Faq as FaqSection } from "@/components/sections/Faq";

import { LOCAL_SEO_FAQ_ITEMS } from "../faq-data";

export function Faq() {
  return (
    <FaqSection
      eyebrow="Straight answers"
      heading={
        <>
          Local visibility questions, <span className="faq__headline-muted">answered.</span>
        </>
      }
      lede="No buried sales language — the common questions are practical because the work is practical."
      items={LOCAL_SEO_FAQ_ITEMS}
    />
  );
}
