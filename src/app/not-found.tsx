import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <Container>
        <p className="eyebrow-font">404</p>
        <h1 className="h2-font mt-3">This page slipped away.</h1>
        <p className="body-font mt-4 max-w-md">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-8">
          <Button href="/">Back to home</Button>
        </div>
      </Container>
    </Section>
  );
}
