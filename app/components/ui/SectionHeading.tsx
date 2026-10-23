import { Box, Text } from "@mantine/core";

import type { SectionHeading as SectionHeadingCopy } from "~/content/schema";
import { HighlightedTitle } from "./HighlightedTitle";
import classes from "./SectionHeading.module.css";

interface SectionHeadingProps {
  copy: SectionHeadingCopy;
  align?: "center" | "start";
  order?: 1 | 2;
}

export function SectionHeading({ copy, align = "center", order = 2 }: SectionHeadingProps) {
  return (
    <Box className={`${classes.root} arbora-reveal`} data-align={align}>
      <span className={classes.eyebrow}>{copy.eyebrow}</span>
      <HighlightedTitle
        order={order}
        className={classes.title}
        title={copy.title}
        highlight={copy.highlight}
      />
      <Text className={classes.description}>{copy.description}</Text>
    </Box>
  );
}
