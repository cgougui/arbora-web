import {
  IconBinaryTree2,
  IconBolt,
  IconCommand,
  IconEye,
  IconLayoutColumns,
  IconLock,
  IconRefresh,
  IconSearch,
  type Icon,
} from "@tabler/icons-react";

import type { FeatureId } from "~/content/schema";

export const featureIcons: Record<FeatureId, Icon> = {
  tree: IconBinaryTree2,
  search: IconSearch,
  preview: IconEye,
  tabs: IconLayoutColumns,
  sync: IconRefresh,
  privacy: IconLock,
  automation: IconBolt,
  keyboard: IconCommand,
};
