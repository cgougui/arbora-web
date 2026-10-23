import {
  Button,
  Container,
  createTheme,
  type MantineColorsTuple,
  Paper,
  rem,
  Title,
} from "@mantine/core";

const arbor: MantineColorsTuple = [
  "#e7fdf4",
  "#c9f7e4",
  "#98eecb",
  "#5fe2af",
  "#34d399",
  "#16bd83",
  "#0c9a6b",
  "#0b7b57",
  "#0c6147",
  "#0a4f3b",
];

// Slightly green-tinted neutrals so dark mode feels like a forest at night.
const dark: MantineColorsTuple = [
  "#d4dcd9",
  "#a9b5b1",
  "#7f8c88",
  "#5a6662",
  "#3a4441",
  "#262e2c",
  "#171d1c",
  "#101514",
  "#0b0f0e",
  "#070a09",
];

export const theme = createTheme({
  primaryColor: "arbor",
  primaryShade: { light: 6, dark: 4 },
  colors: { arbor, dark },
  black: "#0b0f0e",
  white: "#ffffff",
  defaultRadius: "md",
  cursorType: "pointer",
  autoContrast: true,
  luminanceThreshold: 0.35,
  fontFamily:
    '"Inter Variable", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
  fontFamilyMonospace: 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, monospace',
  headings: {
    fontFamily: '"Bricolage Grotesque Variable", "Inter Variable", ui-sans-serif, sans-serif',
    fontWeight: "700",
    textWrap: "balance",
    sizes: {
      h1: { fontSize: rem(72), lineHeight: "1.02" },
      h2: { fontSize: rem(48), lineHeight: "1.08" },
      h3: { fontSize: rem(22), lineHeight: "1.25" },
    },
  },
  defaultGradient: { from: "arbor.4", to: "cyan.4", deg: 120 },
  shadows: {
    md: "0 8px 24px -12px rgb(0 0 0 / 0.25)",
    xl: "0 40px 120px -40px rgb(0 0 0 / 0.55)",
  },
  components: {
    Button: Button.extend({
      defaultProps: { radius: "xl" },
    }),
    Container: Container.extend({
      defaultProps: { size: "lg" },
    }),
    Paper: Paper.extend({
      defaultProps: { radius: "lg" },
    }),
    Title: Title.extend({
      styles: { root: { letterSpacing: "-0.03em" } },
    }),
  },
});
