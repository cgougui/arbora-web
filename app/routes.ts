import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/marketing-layout.tsx", [
    index("routes/home.tsx"),
    route("features", "routes/features.tsx"),
    route("pricing", "routes/pricing.tsx"),
    route("download", "routes/download.tsx"),
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
