FROM node:alpine
COPY . /src
WORKDIR /
CMD node ./src/server.js
