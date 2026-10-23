import { Box, type BoxProps, Container } from "@mantine/core";

import classes from "./Section.module.css";

interface SectionProps extends BoxProps {
  id?: string;
  children: React.ReactNode;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <Box component="section" className={[classes.section, className].filter(Boolean).join(" ")} {...props}>
      <Container>{children}</Container>
    </Box>
  );
}
