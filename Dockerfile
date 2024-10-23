FROM node:20.18.0-slim

WORKDIR /app

RUN apt update && \
    apt install -y bash rsync git && \
    npm install -g expo @expo/ngrok eas-cli
