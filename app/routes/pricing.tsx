import { Faq } from "~/components/marketing/Faq";
import { PricingTable } from "~/components/marketing/PricingTable";
import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import { pageMeta } from "~/lib/meta";

export const meta = () => pageMeta(copy.pricing.meta);

export default function Pricing() {
  return (
    <>
      <Section>
        <SectionHeading copy={copy.pricing.heading} order={1} />
        <PricingTable />
      </Section>
      <Faq copy={copy.pricing.faq} />
    </>
  );
}
