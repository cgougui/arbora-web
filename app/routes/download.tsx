import { Text } from "@mantine/core";

import { PlatformCards } from "~/components/marketing/PlatformCards";
import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import { pageMeta } from "~/lib/meta";

export const meta = () => pageMeta(copy.download.meta);

export default function Download() {
  return (
    <Section>
      <SectionHeading copy={copy.download.heading} order={1} />
      <PlatformCards />
      <Text ta="center" mt={40} fz="sm" c="var(--arbora-muted)">
        {copy.download.note}
      </Text>
    </Section>
  );
}
