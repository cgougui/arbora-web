import { Container, Marquee, Text } from "@mantine/core";

import { copy } from "~/content/copy";
import classes from "./LogoCloud.module.css";

export function LogoCloud() {
  const logos = copy.home.logos;

  return (
    <section className={classes.root}>
      <Container>
        <Text className={classes.title}>{logos.title}</Text>
        <Marquee pauseOnHover duration={40000} gap={0} fadeEdgeSize="15%">
          {logos.names.map((name) => (
            <span key={name} className={classes.logo}>
              {name}
            </span>
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
