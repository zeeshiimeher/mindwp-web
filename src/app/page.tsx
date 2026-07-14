import { Builders } from "@/app/_home/Builders";
import { Certainty } from "@/app/_home/Certainty";
import { Compounds } from "@/app/_home/Compounds";
import { DayProof } from "@/app/_home/DayProof";
import { Distance } from "@/app/_home/Distance";
import { Faq } from "@/app/_home/Faq";
import { FinalCta } from "@/app/_home/FinalCta";
import { Fit } from "@/app/_home/Fit";
import { FiveSystems } from "@/app/_home/FiveSystems";
import { FoundNearby } from "@/app/_home/FoundNearby";
import { Hero } from "@/app/_home/Hero";
import { Leaks } from "@/app/_home/Leaks";
import { OneSystem } from "@/app/_home/OneSystem";
import { ProofGallery } from "@/app/_home/ProofGallery";
import { RealLifeIntro } from "@/app/_home/RealLifeIntro";
import { ReviewProcess } from "@/app/_home/ReviewProcess";
import { Scenario } from "@/app/_home/Scenario";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Leaks />
      <Distance />
      <Certainty />
      <OneSystem />
      <FiveSystems />
      <FoundNearby />
      <ProofGallery />
      <RealLifeIntro />
      <Scenario />
      <DayProof />
      <Compounds />
      <Builders />
      <Fit />
      <ReviewProcess />
      <Faq />
      <FinalCta />
    </>
  );
}
