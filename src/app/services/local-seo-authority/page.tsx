import { JsonLd } from "@/components/JsonLd";
import { buildSEO } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo/schema";

import { AlignedLooksLike } from "./_sections/AlignedLooksLike";
import { BeforeTheClick } from "./_sections/BeforeTheClick";
import { Faq } from "./_sections/Faq";
import { FinalCta } from "./_sections/FinalCta";
import { Fit } from "./_sections/Fit";
import { FourPlaces } from "./_sections/FourPlaces";
import { Hero } from "./_sections/Hero";
import { OnTheWebsite } from "./_sections/OnTheWebsite";
import { VisibilityCycle } from "./_sections/VisibilityCycle";
import { WhatAlignmentEarns } from "./_sections/WhatAlignmentEarns";
import { WhatChanges } from "./_sections/WhatChanges";
import { WhatWeDo } from "./_sections/WhatWeDo";
import { WhyItDisappoints } from "./_sections/WhyItDisappoints";
import { LOCAL_SEO_FAQ_ITEMS } from "./faq-data";

const PATH = "/services/local-seo-authority";
const DESCRIPTION =
  "Local SEO Authority aligns your business profile, website, and reviews so nearby customers find you and trust you before they call.";

export const metadata = buildSEO({
  title: "Local SEO Authority",
  description: DESCRIPTION,
  path: PATH,
});

export default function LocalSeoAuthorityPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: "Local SEO Authority", description: DESCRIPTION, path: PATH }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Local SEO Authority", path: PATH },
          ]),
          faqSchema(LOCAL_SEO_FAQ_ITEMS.map((item) => ({ question: item.q, answer: item.a }))),
        ]}
      />
      <Hero />
      <BeforeTheClick />
      <FourPlaces />
      <OnTheWebsite />
      <WhyItDisappoints />
      <VisibilityCycle />
      <AlignedLooksLike />
      <WhatAlignmentEarns />
      <WhatChanges />
      <WhatWeDo />
      <Fit />
      <Faq />
      <FinalCta />
    </>
  );
}
