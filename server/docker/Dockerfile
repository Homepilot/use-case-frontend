FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn prisma generate

CMD ["yarn", "run", "start:dev"]