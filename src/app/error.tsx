"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Route-level error boundary (keeps header/footer; only the page area swaps). */
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <Container>
        <Eyebrow>Something went wrong</Eyebrow>
        <h1 className="h2-font mt-3">A page slipped.</h1>
        <p className="body-font mt-4 max-w-md">
          An unexpected error occurred on our side. Try again, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button onClick={() => reset()}>Try again</Button>
          <Button href="/" variant="secondary">
            Back home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
