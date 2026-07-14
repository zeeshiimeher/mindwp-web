import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const FINAL_ICONS: IconName[] = ["map-pin", "phone", "folder", "star"];

export function FinalCta() {
  return (
    <section id="review" className="final-cta section on-dark">
      <div className="container container--narrow final-cta__inner">
        <p className="eyebrow eyebrow--split">
          <span className="eyebrow__tick" />
          Ready where you are
          <span className="eyebrow__tick" />
        </p>
        <h2 className="final-cta__heading">
          If the website isn&rsquo;t carrying the work,{" "}
          <span className="final-cta__heading-accent">find out</span>{" "}
          <span className="final-cta__heading-muted">where it stops.</span>
        </h2>
        <p className="final-cta__lede">
          We will review the current site and the path around it, then show you the first gaps
          worth fixing.
        </p>

        <div className="final-cta__icons">
          {FINAL_ICONS.map((name) => (
            <span className="final-cta__icon" key={name}>
              <Icon name={name} size={17} />
            </span>
          ))}
        </div>

        <Button href="#review" variant="on-dark">
          {PRIMARY_CTA_LABEL}
        </Button>
      </div>
    </section>
  );
}
