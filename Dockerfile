FROM node:alpine
COPY . /src
WORKDIR /src
CMD node ./src/server.js