import { CallToAction } from "~/components/marketing/CallToAction";
import { FeatureDirectory } from "~/components/marketing/FeatureDirectory";
import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import { pageMeta } from "~/lib/meta";

export const meta = () => pageMeta(copy.features.meta);

export default function Features() {
  const page = copy.features;

  return (
    <>
      <Section pb={{ base: 32, md: 48 }}>
        <SectionHeading copy={page.heading} order={1} />
      </Section>
      <Section pt={0} pb={0}>
        <FeatureDirectory />
      </Section>
      <CallToAction copy={page.cta} />
    </>
  );
}
