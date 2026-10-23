import { Button, Title } from "@mantine/core";
import { IconBrandApple, IconBrandUbuntu, IconBrandWindows, IconDownload, type Icon } from "@tabler/icons-react";
import { Link } from "react-router";

import { copy } from "~/content/copy";
import type { PlatformId } from "~/content/schema";
import classes from "./PlatformCards.module.css";

const platformIcons: Record<PlatformId, Icon> = {
  macos: IconBrandApple,
  windows: IconBrandWindows,
  linux: IconBrandUbuntu,
};

export function PlatformCards() {
  return (
    <div className={classes.grid}>
      {copy.download.platforms.map((platform) => {
        const PlatformIcon = platformIcons[platform.id];
        return (
          <article key={platform.id} className={`${classes.card} arbora-reveal`}>
            <div className={classes.icon}>
              <PlatformIcon size={38} stroke={1.4} />
            </div>
            <Title order={3}>{platform.name}</Title>
            <span className={classes.requirement}>{platform.requirement}</span>
            <Button
              component={Link}
              to={platform.cta.to}
              variant="gradient"
              size="md"
              mt="lg"
              fullWidth
              leftSection={<IconDownload size={18} />}
            >
              {platform.cta.label}
            </Button>
            <span className={classes.alternatives}>{platform.alternatives}</span>
          </article>
        );
      })}
    </div>
  );
}
