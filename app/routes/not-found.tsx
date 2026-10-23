import { data } from "react-router";

import { ErrorState } from "~/components/ui/ErrorState";
import { copy } from "~/content/copy";
import { pageMeta } from "~/lib/meta";

export const meta = () => pageMeta(copy.notFound.meta);

export function loader() {
  throw data(null, { status: 404 });
}

export default function NotFound() {
  return null;
}

export function ErrorBoundary() {
  const page = copy.notFound;
  return <ErrorState code={page.code} title={page.title} description={page.description} cta={page.cta} />;
}
