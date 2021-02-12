FROM node:latest

WORKDIR /app/server



COPY ./server/package.json /app/server/

RUN npm install typescript 
RUN npm install

COPY . /app



CMD [ "npm","start" ]
