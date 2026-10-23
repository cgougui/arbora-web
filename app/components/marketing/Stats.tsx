import { Container } from "@mantine/core";

import { copy } from "~/content/copy";
import classes from "./Stats.module.css";

export function Stats() {
  return (
    <Container>
      <div className={`${classes.grid} arbora-reveal`}>
        {copy.home.stats.map((stat) => (
          <div key={stat.label} className={classes.stat}>
            <div className={`${classes.value} arbora-gradient-text`}>{stat.value}</div>
            <div className={classes.label}>{stat.label}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}
