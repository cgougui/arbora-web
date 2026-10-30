import { useComputedColorScheme } from "@mantine/core";

import manifest from "~/content/screenshots.json";
import type { FeatureGroupId } from "~/content/schema";
import { AppMockup } from "./AppMockup";
import classes from "./AppScreenshot.module.css";

interface Capture {
  group: FeatureGroupId;
  caption: string;
  alt: string;
  images: Record<"light" | "dark", { src: string; width: number; height: number }>;
}

// During a first capture, the manifest grows as theme pairs finish. Missing
// primary scenes keep the site's existing illustrative visual.
const captures = manifest.scenes as Partial<Record<string, Capture>>;

/** Native product captures. The generated manifest owns captions and alt text. */
export function AppScreenshot({ variant = "browse", scene, priority = false, compact = false }: {
  variant?: FeatureGroupId;
  scene?: string;
  priority?: boolean;
  compact?: boolean;
}) {
  const scheme = useComputedColorScheme("light");
  const shot = captures[scene ?? variant];
  if (!shot) return <AppMockup variant={variant} compact={compact} />;
  const image = shot.images[scheme];

  return (
    <figure className={classes.figure} data-compact={compact || undefined}>
      <a className={classes.link} href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`${shot.caption} — view full-size screenshot`}>
        <img className={classes.image} src={image.src} width={image.width} height={image.height}
          alt={shot.alt} loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"} />
      </a>
      <figcaption className={classes.caption}>
        <span>{shot.caption}</span>
        <span className={classes.detail}>Arbora for {manifest.platform} · View full size ↗</span>
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
