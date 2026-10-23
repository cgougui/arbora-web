import "@fontsource-variable/inter";
import "@fontsource-variable/bricolage-grotesque";
import "@mantine/core/styles.css";
import "./styles/global.css";

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root";
import { ErrorState } from "./components/ui/ErrorState";
import { copy } from "./content/copy";
import { theme } from "./theme";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070a09" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#f7faf9" media="(prefers-color-scheme: light)" />
        <ColorSchemeScript defaultColorScheme="auto" />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let code = "Error";
  let description = copy.error.description;
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    code = String(error.status);
    description = error.statusText || description;
  } else if (import.meta.env.DEV && error instanceof Error) {
    description = error.message;
    stack = error.stack;
  }

  return <ErrorState code={code} title={copy.error.title} description={description} stack={stack} />;
}
