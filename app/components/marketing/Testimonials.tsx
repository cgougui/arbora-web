import { Avatar, Group, Text } from "@mantine/core";

import { Section } from "~/components/ui/Section";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { copy } from "~/content/copy";
import classes from "./Testimonials.module.css";

const avatarColors = ["arbor", "cyan", "violet"];

export function Testimonials() {
  const testimonials = copy.home.testimonials;

  return (
    <Section>
      <SectionHeading copy={testimonials} />
      <div className={classes.grid}>
        {testimonials.items.map((item, i) => (
          <figure key={item.name} className={`${classes.card} arbora-reveal`}>
            <blockquote className={classes.quote}>{item.quote}</blockquote>
            <figcaption>
              <Group gap="sm">
                <Avatar name={item.name} color={avatarColors[i % avatarColors.length]} radius="xl" />
                <div>
                  <Text fw={600} fz="sm">
                    {item.name}
                  </Text>
                  <Text className={classes.role}>{item.role}</Text>
                </div>
              </Group>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
