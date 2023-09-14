FROM node:latest AS build-stage
ARG DEPLOYMENT_CONFIG
WORKDIR /app
COPY package*.json /app/
COPY ./ /app/
RUN npm install -g @angular/cli
RUN npm install
RUN npm run build --configuration=${DEPLOYMENT_CONFIG}

FROM nginx:latest
COPY --from=build-stage /app/dist/volcampanion-pwa/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
