import { useComputedColorScheme } from "@mantine/core";
import { IconArrowsMaximize } from "@tabler/icons-react";
import { type MouseEvent, use } from "react";

import { copy } from "~/content/copy";
import type { FeatureGroupId } from "~/content/schema";
import { AppMockup } from "./AppMockup";
import classes from "./AppScreenshot.module.css";
import { captures, OpenScreenshotContext, platformLabel, sceneAttribute } from "./ScreenshotLightbox";

/** Native product captures. The generated manifest owns captions and alt text. */
export function AppScreenshot({ variant = "browse", scene, priority = false, compact = false }: {
  variant?: FeatureGroupId;
  scene?: string;
  priority?: boolean;
  compact?: boolean;
}) {
  const scheme = useComputedColorScheme("light");
  const openScreenshot = use(OpenScreenshotContext);
  const sceneId = scene ?? variant;
  const shot = captures[sceneId];
  if (!shot) return <AppMockup variant={variant} compact={compact} />;
  const image = shot.images[scheme];

  // A real link keeps new-tab clicks and no-JS visitors working; only a plain click opens the popup.
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!openScreenshot || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openScreenshot(sceneId);
  };

  return (
    <figure className={classes.figure} data-compact={compact || undefined}>
      <a className={classes.link} href={image.src} target="_blank" rel="noopener noreferrer" onClick={handleClick}
        {...{ [sceneAttribute]: sceneId }} aria-haspopup="dialog" aria-label={`${shot.caption} — ${copy.screenshot.enlargeLabel}`}>
        <img className={classes.image} src={image.src} width={image.width} height={image.height}
          alt={shot.alt} loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"} />
        <span className={classes.badge} aria-hidden="true"><IconArrowsMaximize size={16} stroke={1.8} /></span>
      </a>
      <figcaption className={classes.caption}>
        <span>{shot.caption}</span>
        <span className={classes.detail}>{platformLabel} · {copy.screenshot.enlarge}</span>
      </figcaption>
    </figure>
  );
}

/** Additional real workflows, beside the corresponding feature descriptions. */
export function ScreenshotGallery({ variant }: { variant: FeatureGroupId }) {
  const scenes = Object.keys(captures).filter(
    (id) => id !== variant && captures[id]?.group === variant,
  );
  if (!scenes.length) return null;
  return (
    <div className={classes.gallery}>
      {scenes.map((scene) => <AppScreenshot key={scene} scene={scene} compact />)}
    </div>
  );
}
