import { ViewTransition } from "react";
import { Outlet } from "react-router";

import { AmbientBackground } from "~/components/layout/AmbientBackground";
import { SiteFooter } from "~/components/layout/SiteFooter";
import { SiteHeader } from "~/components/layout/SiteHeader";

export default function MarketingLayout() {
  return (
    <>
      <AmbientBackground />
      <SiteHeader />
      <main>
        <ViewTransition>
          <Outlet />
        </ViewTransition>
      </main>
      <SiteFooter />
    </>
  );
}
