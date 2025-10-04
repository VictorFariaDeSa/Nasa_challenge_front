FROM node:20-alpine

COPY package*.json ./
RUN npm install

WORKDIR /client

CMD ["npm", "run", "dev"]
