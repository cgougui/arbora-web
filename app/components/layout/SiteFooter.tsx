import { Container, Text } from "@mantine/core";
import { Link } from "react-router";

import { Logo } from "~/components/ui/Logo";
import { copy } from "~/content/copy";
import classes from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.grid}>
          <div>
            <Logo />
            <Text mt="md" maw={280} fz="sm" c="var(--arbora-muted)">
              {copy.footer.blurb}
            </Text>
          </div>
          {copy.footer.columns.map((column) => (
            <div key={column.title}>
              <div className={classes.columnTitle}>{column.title}</div>
              {column.links.map((link) => (
                <Link key={link.label} to={link.to} className={classes.link}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className={classes.bottom}>
          <span>{copy.footer.legal}</span>
          <span className={classes.status}>{copy.footer.status}</span>
        </div>
      </Container>
      <div className={classes.wordmark} aria-hidden="true">
        {copy.brand.name}
      </div>
    </footer>
  );
}
