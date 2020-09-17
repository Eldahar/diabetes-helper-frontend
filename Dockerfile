FROM node:latest

RUN npm install -g @angular/cli
VOLUME /srv
WORKDIR /srv

EXPOSE 80
