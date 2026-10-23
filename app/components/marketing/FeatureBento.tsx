import { Text, Title } from "@mantine/core";

import type { Feature } from "~/content/schema";
import classes from "./FeatureBento.module.css";
import { featureIcons } from "./featureIcons";

function trackPointer(event: React.PointerEvent<HTMLElement>) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${event.clientX - rect.left}px`);
  el.style.setProperty("--y", `${event.clientY - rect.top}px`);
}

interface FeatureBentoProps {
  items: Feature[];
  /** Use the asymmetric bento rhythm; otherwise an even grid. */
  bento?: boolean;
}

export function FeatureBento({ items, bento = true }: FeatureBentoProps) {
  return (
    <div className={classes.grid} data-bento={bento || undefined}>
      {items.map((feature, i) => {
        const FeatureIcon = featureIcons[feature.id];
        const featured = bento && (i === 0 || i === 3);
        return (
          <article
            key={feature.id}
            className={`${classes.card} ${featured ? classes.featured : ""} arbora-reveal`}
            onPointerMove={trackPointer}
          >
            {featured && <FeatureIcon className={classes.watermark} size={260} stroke={1} />}
            <div className={classes.icon}>
              <FeatureIcon size={featured ? 28 : 24} stroke={1.6} />
            </div>
            <Title order={3} className={classes.title}>
              {feature.title}
            </Title>
            <Text className={classes.description}>{feature.description}</Text>
          </article>
        );
      })}
    </div>
  );
}
