FROM node:alpine as base

FROM base as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM base
WORKDIR /app
COPY package*.json .
RUN npm install --only=production
COPY --from=builder /app/dist .

EXPOSE 5000

CMD ["index.js"]