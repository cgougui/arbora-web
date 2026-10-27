import { CallToAction } from "~/components/marketing/CallToAction";
import { Faq } from "~/components/marketing/Faq";
import { FeatureBento } from "~/components/marketing/FeatureBento";
import { FeatureShowcases } from "~/components/marketing/FeatureShowcases";
import { Hero } from "~/components/marketing/Hero";
import { Button, Group } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router";
import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import { pageMeta } from "~/lib/meta";

export const meta = () => pageMeta(copy.home.meta);

export default function Home() {
  return (
    <>
      <Hero />
      <Section id="features">
        <SectionHeading copy={copy.home.features} />
        <FeatureBento items={copy.home.features.items} bento={false} />
        <Group justify="center" mt={36}>
          <Button component={Link} to={copy.home.features.link.to} variant="subtle" rightSection={<IconArrowRight size={17} />}>
            {copy.home.features.link.label}
          </Button>
        </Group>
      </Section>
      <FeatureShowcases />
      <Faq copy={copy.home.faq} />
      <CallToAction copy={copy.home.cta} />
    </>
  );
}
