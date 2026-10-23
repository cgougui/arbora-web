import { Text, Title } from "@mantine/core";

import { SectionHeading } from "~/components/ui/SectionHeading";
import { Section } from "~/components/ui/Section";
import { copy } from "~/content/copy";
import classes from "./Steps.module.css";

export function Steps() {
  const steps = copy.home.steps;

  return (
    <Section>
      <SectionHeading copy={steps} />
      <ol className={classes.grid} style={{ listStyle: "none", padding: 0 }}>
        {steps.items.map((step) => (
          <li key={step.title} className={`${classes.step} arbora-reveal`}>
            <Title order={3}>{step.title}</Title>
            <Text className={classes.description}>{step.description}</Text>
          </li>
        ))}
      </ol>
    </Section>
  );
}
