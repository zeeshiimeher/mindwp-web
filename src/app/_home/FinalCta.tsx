import type { SVGProps } from "react";

import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const PROOF_STEPS = [
  { icon: "inbox", label: "Enquiry" },
  { icon: "owner", label: "Owner" },
  { icon: "calendar", label: "Follow-up" },
  { icon: "check", label: "Proof" },
] as const;

const ICON_PATHS: Record<(typeof PROOF_STEPS)[number]["icon"], SVGProps<SVGSVGElement>["children"]> = {
  inbox: (
    <>
      <path d="M4 6h16l-2 8H6L4 6Z" />
      <path d="M4 6l-1-3M20 6l1-3" />
    </>
  ),
  owner: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19c1-3.2 3.6-5 6.5-5s5.5 1.8 6.5 5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 12.2l2.3 2.3 4.7-5" />
    </>
  ),
};

function ProofIcon({ name }: { name: (typeof PROOF_STEPS)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}

export function FinalCta() {
  return (
    <section id="review" className="final-cta section on-dark">
      <div className="container final-cta__inner">
        <p className="eyebrow">Ready when you are</p>
        <h2>
          If the website isn&rsquo;t carrying the work,{" "}
          <span className="final-cta__muted">find out where it stops.</span>
        </h2>
        <p className="final-cta__lead">
          We will review the current site and the path around it, then show you the first gaps
          worth fixing.
        </p>

        <Button href="#review" variant="on-dark">
          {PRIMARY_CTA_LABEL}
        </Button>
        <p className="final-cta__microcopy">
          Fixed scope, from a clear starting point. No pressure, no obligation.
        </p>

        <ol className="final-cta__proof">
          {PROOF_STEPS.map((step, index) => (
            <li key={step.label} data-done={index < PROOF_STEPS.length - 1}>
              <span className="final-cta__proof-icon">
                <ProofIcon name={step.icon} />
              </span>
              <span className="final-cta__proof-label">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
