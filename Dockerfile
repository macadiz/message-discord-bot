FROM node:12.4.0-alpine

ADD . /home/node/app
WORKDIR /home/node/app

RUN yarn install

CMD [ "yarn", "start" ]