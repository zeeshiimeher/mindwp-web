import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PRIMARY_CTA_LABEL } from "@/lib/cta/labels";

const FINAL_ICONS: IconName[] = ["map-pin", "search", "star", "circle-check"];

export function FinalCta() {
  return (
    <section id="review" className="final-cta section on-dark">
      <div className="container container--narrow final-cta__inner">
        <p className="eyebrow eyebrow--split">
          <span className="eyebrow__tick" />
          Ready when you are
          <span className="eyebrow__tick" />
        </p>
        <h2 className="final-cta__heading">
          <span className="final-cta__heading-muted">Nearby customers finding</span>{" "}
          <span className="final-cta__heading-accent">someone else?</span>
        </h2>
        <p className="final-cta__lede">
          That&rsquo;s worth a look. Send us your business and area — we&rsquo;ll look at what
          nearby customers see, where trust breaks, and what to fix first.
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
