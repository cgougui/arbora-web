import { Button, Container, Group, Text, Title } from "@mantine/core";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Link } from "react-router";

import { copy } from "~/content/copy";
import { AppMockup } from "./AppMockup";
import classes from "./Hero.module.css";

export function Hero() {
  const hero = copy.home.hero;

  return (
    <section className={classes.hero}>
      <Container>
        <Link to={hero.announcement.to} className={classes.announcement}>
          <span className={classes.announcementLabel}>{hero.announcement.label}</span>
          {hero.announcement.text}
          <IconArrowRight size={14} />
        </Link>

        <Title order={1} className={classes.title}>
          {hero.title} <span className="arbora-gradient-text">{hero.highlight}</span>
        </Title>

        <Text className={classes.description}>{hero.description}</Text>

        <Group justify="center" gap="sm" className={classes.actions}>
          <Button
            component={Link}
            to={hero.primary.to}
            size="lg"
            variant="gradient"
            className={classes.primary}
            leftSection={<IconDownload size={18} />}
          >
            {hero.primary.label}
          </Button>
          <Button
            component={Link}
            to={hero.secondary.to}
            size="lg"
            variant="default"
            className={classes.secondary}
            rightSection={<IconArrowRight size={18} />}
          >
            {hero.secondary.label}
          </Button>
        </Group>

        <Text className={classes.note}>{hero.note}</Text>

        <div className={classes.mockup}>
          <AppMockup />
        </div>
      </Container>
    </section>
  );
}
