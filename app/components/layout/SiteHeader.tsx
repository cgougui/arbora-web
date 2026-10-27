import { Box, Burger, Button, Container, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { Link, NavLink } from "react-router";

import { Logo } from "~/components/ui/Logo";
import { copy } from "~/content/copy";
import { ColorSchemeToggle } from "./ColorSchemeToggle";
import classes from "./SiteHeader.module.css";

export function SiteHeader() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [scroll] = useWindowScroll();

  return (
    <Box component="header" className={classes.header}>
      <Container size="xl">
        <nav className={classes.bar} data-scrolled={scroll.y > 24 || undefined}>
          <Logo />

          <div className={classes.links}>
            {copy.nav.links.map((link) => (
              <NavLink key={link.to} to={link.to} className={classes.link} prefetch="intent">
                {link.label}
              </NavLink>
            ))}
          </div>

          <Group gap={6} wrap="nowrap">
            <ColorSchemeToggle />
            <Button
              component={Link}
              to={copy.nav.primary.to}
              variant="gradient"
              className={classes.desktopOnly}
            >
              {copy.nav.primary.label}
            </Button>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className={classes.mobileOnly}
              aria-label={copy.nav.openMenu}
            />
          </Group>
        </nav>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        position="top"
        size="100%"
        title={<Logo />}
        overlayProps={{ backgroundOpacity: 0.4, blur: 8 }}
        hiddenFrom="sm"
      >
        <Stack gap={0} mt="md">
          {copy.nav.links.map((link) => (
            <Link key={link.to} to={link.to} className={classes.drawerLink} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Button component={Link} to={copy.nav.primary.to} variant="gradient" size="lg" mt="xl" onClick={close}>
            {copy.nav.primary.label}
          </Button>
        </Stack>
      </Drawer>
    </Box>
  );
}
