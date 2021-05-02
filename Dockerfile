FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 8000

ENV HOST=0.0.0.0
ENV PORT=8000

RUN yarn build
RUN yarn global add pm2
CMD [ "pm2-runtime", "./node_modules/nuxt/bin/nuxt.js" ]
