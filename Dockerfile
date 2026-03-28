FROM node:25.8.2-alpine3.23

WORKDIR /app

COPY . .

RUN npm install
