# Arbora — marketing site

Marketing site for Arbora, a modern file explorer. Built with
[React Router 8](https://reactrouter.com) (framework mode, pre-rendered) and
[Mantine 9](https://mantine.dev).

```sh
docker compose up                  # dev server with hot reload → http://localhost:5173
docker compose --profile prod up   # production build → http://localhost:3000
```

The dev container mounts the project folder, so edits (e.g. to `copy.ts`) reload
instantly. After changing dependencies, rebuild with `docker compose up --build`.
Containers use host networking (`network_mode: host`), so the servers bind straight to
the host's ports; on Docker Desktop this requires host networking to be enabled.

Without Docker:

```sh
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # pre-renders every static route to build/client
npm start          # serves the production build
```

## Copy vs. design

All user-facing text lives in **`app/content/copy.ts`**. Components never hardcode copy.

- `app/content/schema.ts` — the typed shape of the copy (`SiteCopy`). `copy.ts` must
  `satisfies` it, so the typechecker flags missing or misshaped copy.
- Visuals are keyed off ids in the copy (e.g. `FeatureId`, `PlatformId`, `FileKind`)
  and mapped to icons/colors inside the components (`featureIcons.ts`, `fileKinds.ts`).

To change wording, edit `copy.ts`. To change look and feel, edit `app/components`,
`app/theme.ts` and `app/styles/global.css`.

The home page summarizes the product and highlights browsing, search, and previews.
The features page includes the full feature inventory in eight linked sections.
`FeatureDirectory` provides sticky category navigation that follows the visible section.

Product images are screenshots of the real Linux desktop app. `AppScreenshot`
selects the capture matching the site's light/dark theme, includes descriptive
alt text and opens the original image at full size. The hero loads eagerly;
feature images and galleries load lazily. Feature sections use their matching
workflow; extra views appear in the corresponding section's gallery. Keep
`AppMockup`: it supplies the existing visual for sections awaiting their first
completed screenshot pair.

Refresh every screenshot and update the website from the sibling app checkout:

```sh
cd ../arbora
npm run screenshots:website
```

The command builds Tauri once and captures 16 native scenes in both themes using
disposable sample files. Each finished theme pair immediately updates
`public/screenshots/app/` and `app/content/screenshots.json`. It installs the
screenshot components and their placements with the first pair. Later runs
preserve component customizations and refresh the images and manifest.

Run `npm run screenshots:website -- --list` to see the scene catalog. Add
`--skip-build` only when the standalone app is already current. Use `--site PATH`
for a different website checkout. `--capture-only` creates the suite without
touching this website; `--install-only` installs saved pairs, including a partial
suite, later. Every successful image is retained in the app checkout's
`artifacts/screenshots/website/captures/`, with a `progress.json` checkpoint.
A scene failure leaves completed pairs visible on this website and the batch
continues with other scenes, reporting failures at the end. An initial startup
or build failure stops immediately. Continue an interrupted or failed run with
`npm run screenshots:website -- --resume --skip-build`.
Omit `--resume` when refreshing after app changes; that recaptures all scenes.

See the app's [native screenshot setup](../arbora/docs/development/testing.md#native-screenshots)
for Linux dependencies, logs and individual scene captures. Run `npm run typecheck`
and `npm run build` here after refreshing. Connection images show an example SSH
form; they do not imply an active server connection.


## Layout

```
app/
  content/            copy.ts (all text) + schema.ts (its type)
  theme.ts            Mantine theme: palette, fonts, component defaults
  styles/global.css   design tokens, gradient text, scroll reveal, view transitions
  components/
    layout/           header, footer, ambient background, theme toggle
    marketing/        page sections (hero, app mockup, bento, pricing…)
    ui/               primitives (Section, SectionHeading, Logo, ErrorState)
  routes/             thin route modules composing sections from copy
```

## Notes

- Light/dark/auto color scheme with no flash (`ColorSchemeScript`), tokens swap per scheme.
- Scroll reveals use CSS scroll-driven animations (no JS) and degrade gracefully.
- Page transitions use React's `<ViewTransition>`.
- `prefers-reduced-motion` disables all motion.
- Fonts are self-hosted via Fontsource (Inter, Bricolage Grotesque).
