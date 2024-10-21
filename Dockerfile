FROM node:20.18.0-slim

WORKDIR /app

RUN apt update && apt install -y bash rsync && \
    npm install -g expo && \
    npm install -g @expo/ngrok
