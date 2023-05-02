FROM node:alpine
COPY . /
WORKDIR /
EXPOSE 3300
CMD node ./src/server.js
