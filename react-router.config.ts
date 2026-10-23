import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  // Marketing pages are static: render them to HTML at build time.
  prerender: true,
} satisfies Config;
