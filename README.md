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
