import { Button, Code, Container, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router";

import type { Cta } from "~/content/schema";

interface ErrorStateProps {
  code: string;
  title: string;
  description: string;
  cta?: Cta;
  stack?: string;
}

export function ErrorState({ code, title, description, cta, stack }: ErrorStateProps) {
  return (
    <Container size="sm" py={{ base: 96, md: 160 }}>
      <Stack align="center" ta="center" gap="lg">
        <Text
          className="arbora-gradient-text"
          ff="heading"
          fw={800}
          lh={1}
          fz={{ base: 96, sm: 160 }}
          style={{ letterSpacing: "-0.06em" }}
        >
          {code}
        </Text>
        <Title order={1} fz={{ base: 28, sm: 40 }}>
          {title}
        </Title>
        <Text c="var(--arbora-muted)" fz="lg" maw={480}>
          {description}
        </Text>
        {cta && (
          <Button component={Link} to={cta.to} size="md" variant="gradient">
            {cta.label}
          </Button>
        )}
        {stack && (
          <Code block w="100%" ta="start">
            {stack}
          </Code>
        )}
      </Stack>
    </Container>
  );
}
