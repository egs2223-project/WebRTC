FROM node:alpine
COPY WebRTC/ /
WORKDIR /
CMD node ./src/server.js
