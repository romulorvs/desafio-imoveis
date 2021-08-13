FROM node:16-alpine3.11 as build

WORKDIR /app-build

COPY . ./

RUN yarn

RUN yarn build

FROM node:16-alpine3.11

WORKDIR /app

COPY --from=build /app-build/next.config.js next.config.js
COPY --from=build /app-build/build build
COPY --from=build /app-build/public public
COPY --from=build /app-build/package.json package.json

RUN yarn install --production=true