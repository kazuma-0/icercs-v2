FROM node:21-alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY package*.json ./

RUN npm install

RUN npm install serve -g

COPY . .

# RUN npm run build
RUN npm run build


CMD ["serve", "-s", "out"]