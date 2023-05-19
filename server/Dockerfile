FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:server
RUN date +%s > /tmp/timestamp && \
    sed -i "s|main.dart.js\"|main.dart.js?$(cat /tmp/timestamp)\"|g" dist/www/index.html && \
    rm /tmp/timestamp
CMD [ "node", "dist/index.js" ]
