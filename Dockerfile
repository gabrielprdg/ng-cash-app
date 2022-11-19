FROM node:16
WORKDIR /usr/src/ng-cash
COPY ./package.json .
RUN npm install --only=prod