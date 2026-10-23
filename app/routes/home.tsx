import { CallToAction } from "~/components/marketing/CallToAction";
import { Faq } from "~/components/marketing/Faq";
import { FeatureBento } from "~/components/marketing/FeatureBento";
import { Hero } from "~/components/marketing/Hero";
import { LogoCloud } from "~/components/marketing/LogoCloud";
import { Stats } from "~/components/marketing/Stats";
import { Steps } from "~/components/marketing/Steps";
import { Testimonials } from "~/components/marketing/Testimonials";
import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import { pageMeta } from "~/lib/meta";

export const meta = () => pageMeta(copy.home.meta);

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Section id="features">
        <SectionHeading copy={copy.home.features} />
        <FeatureBento items={copy.home.features.items} />
      </Section>
      <Stats />
      <Steps />
      <Testimonials />
      <Faq copy={copy.home.faq} />
      <CallToAction copy={copy.home.cta} />
    </>
  );
}
