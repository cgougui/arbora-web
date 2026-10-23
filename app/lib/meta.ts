import type { Meta } from "~/content/schema";

/** Turns a copy `Meta` entry into React Router meta descriptors. */
export function pageMeta({ title, description }: Meta) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}
