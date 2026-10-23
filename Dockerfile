# syntax=docker/dockerfile:1

FROM node:24-alpine AS base
WORKDIR /app
# Run as the unprivileged `node` user (uid 1000) so bind-mounted files stay owned by you.
RUN chown node:node /app
USER node

# All dependencies, used for development and for building.
FROM base AS deps
COPY --chown=node:node package.json package-lock.json ./
RUN --mount=type=cache,target=/home/node/.npm,uid=1000,gid=1000 npm ci

# Dev server with hot reload; source is bind-mounted by docker compose.
FROM deps AS dev
EXPOSE 5173
CMD ["npx", "react-router", "dev", "--host", "0.0.0.0", "--port", "5173"]

FROM deps AS build
COPY --chown=node:node . .
RUN npm run build

FROM base AS prod-deps
COPY --chown=node:node package.json package-lock.json ./
RUN --mount=type=cache,target=/home/node/.npm,uid=1000,gid=1000 npm ci --omit=dev

FROM base AS prod
ENV NODE_ENV=production PORT=3000
COPY package.json package-lock.json ./
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["npm", "run", "start"]
