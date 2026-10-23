import { Accordion } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import type { FaqItem, SectionHeading as SectionHeadingCopy } from "~/content/schema";
import classes from "./Faq.module.css";

export function Faq({ copy }: { copy: SectionHeadingCopy & { items: FaqItem[] } }) {
  return (
    <Section>
      <div className={classes.layout}>
        <div className={classes.sticky}>
          <SectionHeading copy={copy} align="start" />
        </div>
        <Accordion
          variant="default"
          chevron={<IconPlus size={18} />}
          classNames={{
            item: classes.item,
            control: classes.control,
            content: classes.content,
            chevron: classes.chevron,
          }}
          styles={{ chevron: { transition: "transform 300ms var(--arbora-ease)" } }}
          transitionDuration={300}
        >
          {copy.items.map((item) => (
            <Accordion.Item key={item.question} value={item.question}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
