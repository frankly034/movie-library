FROM node:18.14.0-alpine

RUN mkdir -p /svr/app
WORKDIR /svr/app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build 

CMD ["node", "dist/main"]
