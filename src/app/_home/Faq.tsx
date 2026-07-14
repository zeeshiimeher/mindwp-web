import { Faq as FaqSection } from "@/components/sections/Faq";

const FAQ_ITEMS = [
  {
    q: "What exactly do I get?",
    a: "A website built to bring work in, with the handling scoped around it: first response, ownership, next steps, follow-up, and review requests where they make sense. The exact handling varies by client, so there is no universal fixed package.",
  },
  {
    q: "Do you build on WordPress?",
    a: "Yes. Every site is built on WordPress so it stays easy to maintain, hand off, or extend later — no proprietary page builder lock-in.",
  },
  {
    q: "Is the website mine, and can I edit it?",
    a: "Yes. You own the site outright and can edit the content yourself. We keep the structure clear enough that changes don't require a developer.",
  },
  {
    q: "What is the handling part, really?",
    a: "It is the enquiry path around the site: who gets notified, where the follow-up lives, and when a review request goes out. It is built into the same system as the website, not a separate tool you have to manage.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the scope of the site and the handling around it. After the review, you get a fixed quote tied to what actually needs fixing — not a generic package price.",
  },
  {
    q: "What if I already have a website?",
    a: "We review what you have first. Sometimes the fix is the handling around it, not a full rebuild — we'll tell you which before recommending anything.",
  },
];

export function Faq() {
  return (
    <FaqSection
      eyebrow="Straight answers"
      heading={
        <>
          Questions, <span className="faq__headline-muted">answered plainly.</span>
        </>
      }
      lede="No buried sales language. The common questions are practical because the work is practical."
      items={FAQ_ITEMS}
    />
  );
}
