FROM node:10 AS builder

WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM node:10-alpine

WORKDIR /app
COPY --from=builder /app ./
RUN yarn global add pm2
ENV NODE_ENV=development
# CMD ["pm2-runtime", "start", "./dist/main.js"]
# CMD ["npm", "run", "start:prod"]
CMD ["pm2-runtime", "dev"]
