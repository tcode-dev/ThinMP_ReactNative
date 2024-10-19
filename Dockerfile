FROM node:20.18.0-slim

WORKDIR /app

COPY . .

RUN apt update && apt install -y bash && \
    yarn global add expo && \
    yarn global add @expo/ngrok && \
    yarn install
