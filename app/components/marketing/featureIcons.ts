import {
  IconBinaryTree2,
  IconBolt,
  IconCommand,
  IconEye,
  IconLayoutColumns,
  IconLayoutDashboard,
  IconLock,
  IconRefresh,
  IconSearch,
  IconServer,
  IconFolders,
  IconPalette,
  IconArrowsExchange,
  type Icon,
} from "@tabler/icons-react";

import type { FeatureGroupId, FeatureId } from "~/content/schema";

export const featureIcons: Record<FeatureId, Icon> = {
  tree: IconBinaryTree2,
  search: IconSearch,
  preview: IconEye,
  tabs: IconLayoutColumns,
  sync: IconRefresh,
  privacy: IconLock,
  automation: IconBolt,
  keyboard: IconCommand,
  workspaces: IconLayoutDashboard,
  connections: IconServer,
  organize: IconFolders,
};

export const featureGroupIcons: Record<FeatureGroupId, Icon> = {
  browse: IconLayoutColumns,
  search: IconSearch,
  preview: IconEye,
  operations: IconArrowsExchange,
  workspaces: IconLayoutDashboard,
  connections: IconServer,
  organize: IconFolders,
  personalize: IconPalette,
};
