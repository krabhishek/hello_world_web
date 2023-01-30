FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:server
CMD [ "node", "dist/index.js" ]