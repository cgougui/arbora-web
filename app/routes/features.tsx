import { CallToAction } from "~/components/marketing/CallToAction";
import { FeatureBento } from "~/components/marketing/FeatureBento";
import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import { pageMeta } from "~/lib/meta";

export const meta = () => pageMeta(copy.features.meta);

export default function Features() {
  const page = copy.features;

  return (
    <>
      <Section pb={0}>
        <SectionHeading copy={page.heading} order={1} />
      </Section>
      {page.groups.map((group) => (
        <Section key={group.eyebrow}>
          <SectionHeading copy={group} align="start" />
          <FeatureBento items={group.items} bento={false} />
        </Section>
      ))}
      <CallToAction copy={page.cta} />
    </>
  );
}
