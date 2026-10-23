import {
  IconArchive,
  IconCode,
  IconFileText,
  IconFolderFilled,
  IconMovie,
  IconMusic,
  IconPhoto,
  type Icon,
} from "@tabler/icons-react";

import type { FileKind } from "~/content/schema";

/** Visual identity for each file kind (icon + accent), shared by the mockups. */
export const fileKinds: Record<FileKind, { icon: Icon; color: string }> = {
  folder: { icon: IconFolderFilled, color: "#34d399" },
  image: { icon: IconPhoto, color: "#22d3ee" },
  video: { icon: IconMovie, color: "#f472b6" },
  doc: { icon: IconFileText, color: "#fbbf24" },
  code: { icon: IconCode, color: "#a78bfa" },
  audio: { icon: IconMusic, color: "#fb923c" },
  archive: { icon: IconArchive, color: "#94a3b8" },
};
