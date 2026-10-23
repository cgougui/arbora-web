import { Button, Container, Group, Text } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router";

import { HighlightedTitle } from "~/components/ui/HighlightedTitle";
import type { CallToAction as CallToActionCopy } from "~/content/schema";
import classes from "./CallToAction.module.css";

export function CallToAction({ copy }: { copy: CallToActionCopy }) {
  return (
    <Container component="section" py={{ base: 48, md: 96 }}>
      <div className={`${classes.panel} arbora-reveal`}>
        <HighlightedTitle order={2} className={classes.title} title={copy.title} highlight={copy.highlight} />
        <Text className={classes.description}>{copy.description}</Text>
        <Group justify="center" mt={36} gap="sm">
          <Button component={Link} to={copy.primary.to} size="lg" variant="gradient">
            {copy.primary.label}
          </Button>
          <Button
            component={Link}
            to={copy.secondary.to}
            size="lg"
            variant="default"
            rightSection={<IconArrowRight size={18} />}
          >
            {copy.secondary.label}
          </Button>
        </Group>
      </div>
    </Container>
  );
}
