import { ActionIcon, Box, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

import { copy } from "~/content/copy";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme("dark", { getInitialValueInEffect: true });

  return (
    <ActionIcon
      variant="subtle"
      color="gray"
      size="lg"
      radius="xl"
      aria-label={copy.nav.toggleTheme}
      onClick={() => setColorScheme(computed === "dark" ? "light" : "dark")}
    >
      {/* Both icons render; CSS shows the right one, so SSR never flashes the wrong icon. */}
      <Box component={IconSun} size={18} stroke={1.75} lightHidden />
      <Box component={IconMoonStars} size={18} stroke={1.75} darkHidden />
    </ActionIcon>
  );
}
