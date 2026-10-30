import { ActionIcon, Modal, useComputedColorScheme } from "@mantine/core";
import { useHotkeys, useReducedMotion } from "@mantine/hooks";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { createContext, type CSSProperties, type ReactNode, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";

import { copy } from "~/content/copy";
import manifest from "~/content/screenshots.json";
import type { FeatureGroupId } from "~/content/schema";
import classes from "./ScreenshotLightbox.module.css";

interface Capture {
  group: FeatureGroupId;
  caption: string;
  alt: string;
  images: Record<"light" | "dark", { src: string; width: number; height: number }>;
}

// During a first capture, the manifest grows as theme pairs finish. Missing
// primary scenes keep the site's existing illustrative visual.
export const captures = manifest.scenes as Partial<Record<string, Capture>>;

export const platformLabel = `Arbora for ${manifest.platform}`;

/** Marks a link as a lightbox entry; the page's order of these sets the arrow order. */
export const sceneAttribute = "data-screenshot-scene";

export const OpenScreenshotContext = createContext<((scene: string) => void) | null>(null);

const popIn = {
  in: { opacity: 1, transform: "none" },
  out: { opacity: 0, transform: "translateY(10px) scale(0.97)" },
  transitionProperty: "opacity, transform",
};

/** One popup shared by every screenshot on the page, so arrows can move between them. */
export function ScreenshotLightbox({ children }: { children: ReactNode }) {
  const scheme = useComputedColorScheme("light");
  const reduceMotion = useReducedMotion();
  const { pathname } = useLocation();
  const [opened, setOpened] = useState(false);
  // Kept after closing, so the popup still has content during its exit transition.
  const [view, setView] = useState({ scenes: [] as string[], index: 0, direction: 0 });

  const open = useCallback((scene: string) => {
    // The same scene can appear twice on a page; it should only be stepped through once.
    const links = document.querySelectorAll(`[${sceneAttribute}]`);
    const scenes = [...new Set(Array.from(links, (link) => link.getAttribute(sceneAttribute)!))];
    setView({ scenes, index: scenes.indexOf(scene), direction: 0 });
    setOpened(true);
  }, []);

  const step = (direction: 1 | -1) => setView(({ scenes, index }) => ({
    scenes,
    index: (index + direction + scenes.length) % scenes.length,
    direction,
  }));

  const { scenes, index, direction } = view;
  const canStep = opened && scenes.length > 1;
  useHotkeys(canStep ? [["ArrowLeft", () => step(-1)], ["ArrowRight", () => step(1)]] : []);

  useEffect(() => setOpened(false), [pathname]);

  // Lazy page images may not be loaded yet; fetch the neighbours so stepping never flashes empty.
  useEffect(() => {
    if (!canStep) return;
    for (const offset of [-1, 1]) {
      const neighbour = captures[scenes[(index + offset + scenes.length) % scenes.length]];
      if (neighbour) new Image().src = neighbour.images[scheme].src;
    }
  }, [canStep, scenes, index, scheme]);

  // The Root stays mounted while closed: focus return needs to see it change from closed to open.
  const shot = captures[scenes[index]];
  const image = shot?.images[scheme];

  return (
    <OpenScreenshotContext.Provider value={open}>
      {children}
      <Modal.Root opened={opened && !!shot} onClose={() => setOpened(false)} centered padding={0} xOffset="clamp(12px, 3vw, 32px)" yOffset="clamp(12px, 3vh, 32px)"
        transitionProps={{ transition: popIn, duration: reduceMotion ? 0 : 260, timingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        style={image && { "--shot-width": `${image.width}px`, "--shot-ratio": image.width / image.height } as CSSProperties}>
        <Modal.Overlay className={classes.overlay} />
        <Modal.Content className={classes.popup}>
          {shot && image && <Modal.Body className={classes.popupBody}>
            <div className={classes.toolbar}>
              <div className={classes.toolbarText} aria-live="polite">
                <Modal.Title className={classes.popupTitle}>{shot.caption}</Modal.Title>
                <span className={classes.popupDetail}>
                  {scenes.length > 1 && `${index + 1} / ${scenes.length} · `}{platformLabel}
                </span>
              </div>
              <Modal.CloseButton className={classes.close} size="lg" radius="xl" aria-label={copy.screenshot.close} data-autofocus />
            </div>
            <div className={classes.stage}>
              <img key={scenes[index]} className={classes.popupImage} data-direction={direction || undefined}
                src={image.src} width={image.width} height={image.height} alt={shot.alt} />
              {scenes.length > 1 && (
                <>
                  <ActionIcon className={classes.previous} variant="transparent" size={44} radius="xl" onClick={() => step(-1)} aria-label={copy.screenshot.previous}>
                    <IconChevronLeft size={22} stroke={1.8} aria-hidden="true" />
                  </ActionIcon>
                  <ActionIcon className={classes.next} variant="transparent" size={44} radius="xl" onClick={() => step(1)} aria-label={copy.screenshot.next}>
                    <IconChevronRight size={22} stroke={1.8} aria-hidden="true" />
                  </ActionIcon>
                </>
              )}
            </div>
          </Modal.Body>}
        </Modal.Content>
      </Modal.Root>
    </OpenScreenshotContext.Provider>
  );
}
