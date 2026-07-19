# Build the static PWA, then serve it with nginx.
# Data (volcamp-2026.json) and avatars are committed, so the build needs no
# network access to Volcamp/GitHub — `npm run build` is just tsc + vite.
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Clever Cloud Docker apps expect the container on port 8080 by default.
EXPOSE 8080
