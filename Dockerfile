FROM node:alpine
COPY . /src
WORKDIR /
EXPOSE 3300
CMD node ./src/server.js
