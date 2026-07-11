import { BuiltByBuilders } from "@/app/_home/BuiltByBuilders";
import { CertaintyStrip } from "@/app/_home/CertaintyStrip";
import { ClinicScenario } from "@/app/_home/ClinicScenario";
import { CompoundsOverTime } from "@/app/_home/CompoundsOverTime";
import { EnquiryArrives } from "@/app/_home/EnquiryArrives";
import { Faq } from "@/app/_home/Faq";
import { FinalCta } from "@/app/_home/FinalCta";
import { FitSection } from "@/app/_home/FitSection";
import { FiveSystems } from "@/app/_home/FiveSystems";
import { FoundNearby } from "@/app/_home/FoundNearby";
import { Hero } from "@/app/_home/Hero";
import { MemoryStrip } from "@/app/_home/MemoryStrip";
import { ReviewProcess } from "@/app/_home/ReviewProcess";
import { WhatWeBuild } from "@/app/_home/WhatWeBuild";
import { WhereWorkSlips } from "@/app/_home/WhereWorkSlips";
import { WorkShowcase } from "@/app/_home/WorkShowcase";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhereWorkSlips />
      <WhatWeBuild />
      <CertaintyStrip />
      <EnquiryArrives />
      <FiveSystems />
      <FoundNearby />
      <WorkShowcase />
      <ClinicScenario />
      <MemoryStrip />
      <CompoundsOverTime />
      <BuiltByBuilders />
      <FitSection />
      <ReviewProcess />
      <Faq />
      <FinalCta />
    </>
  );
}
